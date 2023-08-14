:is-up-to-date: False
:last-updated: 4.1.1
:orphan:

.. index:: Solr

.. _migrate-site-to-opensearch:

========================================
Migrating a site from Solr to OpenSearch
========================================

If your project/site was built with Solr for search, then you'll need to upgrade to OpenSearch when upgrading to CrafterCMS 4.1. For that, you'll need to update the code of all existing projects/sites to use OpenSearch client and query language.

.. TODO: Fix the imports, class names, etc.

-------------------------
Updating to OpenSearch
-------------------------

To update your site to use OpenSearch instead of Solr you can follow these steps:

#. Overwrite the target in the Deployer to use OpenSearch instead of Solr
#. Index all existing content in OpenSearch
#. Find all references to ``searchService`` in your FreeMarker templates and replace them with the OpenSearch client
#. Find all references to ``searchService`` in your Groovy scripts and replace them with the OpenSearch client
#. Delete the unused Solr core if needed (can be done using the Solr Admin UI or the ``data/indexes`` folder)
#. Update ``craftercms-plugin.yaml`` to use OpenSearch as the search engine

^^^^^^^^^^^^^^^^^^^^
Overwrite the target
^^^^^^^^^^^^^^^^^^^^

For authoring environments:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://DEPLOYER_HOST:DEPLOYER_PORT/api/1/target/create \
    --header 'content-type: application/json' \
    --data '{
      "env": "preview",
      "site_name": "SITE_NAME",
      "template_name": "local",
      "repo_url": "INSTALL_DIR/data/repos/sites/SITE_NAME/sandbox",
      "disable_deploy_cron": true,
      "replace": true
    }'

For delivery environments:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://DEPLOYER_HOST:DEPLOYER_PORT/api/1/target/create \
    --header 'content-type: application/json' \
    --data '{
      "env": "default",
      "site_name": "SITE_NAME",
      "template_name": "remote",
      "repo_url": "INSTALL_DIR/data/repos/sites/SITE_NAME/published",
      "repo_branch": "live",

      ... any additional settings like git credentials ...

      "replace": true
    }'

.. note::
  For a detailed list of parameters see `createTarget <../../../_static/api/deployer.html#tag/target/operation/createTarget>`_

|

The create target operation will also create the new index in OpenSearch.

^^^^^^^^^^^^^^^^^^^^^^
Index all site content
^^^^^^^^^^^^^^^^^^^^^^

To reindex all existing content execute the following command:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://DEPLOYER_HOST:DEPLOYER_PORT/api/1/target/deploy/ENVIRONMENT/SITE_NAME \
    --header 'content-type: application/json' \
    --data '{
      "reprocess_all_files": true
    }'

^^^^^^^^^^^^^^^^^^^^
Update the site code
^^^^^^^^^^^^^^^^^^^^

Because both Solr and OpenSearch are based on Lucene, you will be able to keep most of your queries unchanged,
however features like sorting, facets and highlighting will require code changes.

.. note::
  To take full advantage of OpenSearch features it is recommended to replace query strings with other type of
  queries provided by the OpenSearch DSL

|

.. warning::
  If you are using any customization or any advance feature from Solr, you will need to find an alternative using
  OpenSearch.

|

To update your code there are two possible approaches:

**Examples**

This is a basic example of replacing Crafter Search service with OpenSearch

.. code-block:: groovy
  :linenos:
  :caption: Existing Groovy code

  def q = "${userTerm}~1 OR *${userTerm}*"

  def query = searchService.createQuery()
  query.setQuery(q)
  query.setStart(start)
  query.setRows(rows)
  query.setParam("sort", "createdDate_dt asc")
  query.setHighlight(true)
  query.setHighlightFields(HIGHLIGHT_FIELDS)

  def result = searchService.search(query)

  def documents = result.response.documents
  def highlighting = result.highlighting

Using the OpenSearch Client the code will look like this:

.. code-block:: groovy
  :linenos:
  :caption: OpenSearch Client

  import org.opensearch.client.opensearch._types.SortOrder

  def q = "${userTerm}~1 OR *${userTerm}*"

  // Execute the query
  def result = OpenSearchClient(r -> r
    .query(q -> q
      .queryString(s -> s
        .query(q as String)
      )
    )
    .from(start)
    .size(rows)
    .sort(s -> s
      .field(f -> f
        .field(createdDate_dt)
        .order(SortOrder.Asc)
      )
    )
    .highlight(h -> {
      HIGHLIGHT_FIELDS.each { field ->
        h.fields(field, f -> f)
      }
    })
  , Map)

  // OpenSearch response (highlight results are part of each hit object)
  def documents = result.hits().hits()

For additional information you can read the official
`Java Client documentation <https://opensearch.org/docs/latest/clients/java/>`_
and `DSL documentation <https://opensearch.org/docs/latest/query-dsl/index/>`_.

Notice in the given example that the query string didn't change, you will need to update only the code
that builds and executes the query. However OpenSearch provides new query types and features that you
can use directly from your Groovy scripts.

If any of your queries includes date math for range queries, you will also need to update them to use the OpenSearch
date math syntax described `here <https://opensearch.org/docs/latest/field-types/supported-field-types/date/>`_.

**Example**

.. code-block:: text
  :linenos:
  :caption: Solr date math expression

  createdDate_dt: [ NOW-1MONTH/DAY TO NOW-2DAYS/DAY ]

.. code-block:: text
  :linenos:
  :caption: OpenSearch date math expression

  createdDate_dt: [ now-1M/d TO now-2d/d ]

In Solr there were two special fields ``_text_`` and ``_text_main_``, during indexing the values of other fields were
copied to provide a simple way to create generic queries in all relevant text. OpenSearch provides a different
feature that replaces those fields `Multi-match query <https://opensearch.org/docs/latest/query-dsl/full-text/index/#multi-match>`_

**Example**

.. code-block:: text
  :linenos:
  :caption: Solr query for any field

  _text_: some keywords

.. code-block:: text
  :linenos:
  :caption: OpenSearch query for any field (replacement for ``_text_``)


  .multiMatch(m -> m
    .query('some keywords')
  )

OpenSearch also offers the possibility to query fields with postfixes using wildcards

.. code-block:: text
  :linenos:
  :caption: OpenSearch query for specific fields (replacement for ``_text_main_``)

  .multiMatch(m -> m
    .query('some keywords')
    .fields('*_t', '*_txt', '*_html')
  )

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Update "craftercms-plugin.yaml" to use OpenSearch
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Your site has a ``craftercms-plugin.yaml`` file that contains information for use by CrafterCMS.
We'll have to update the file to use OpenSearch as the search engine.

Edit your ``craftercms-plugin.yaml``, and remove the following property:

.. code-block:: yaml
   :caption: *AUTHORING_INSTALL_DIR/data/repos/sites/YOURSITE/sandbox/craftercms-plugin.yaml*
   :linenos:

   searchEngine: CrafterSearch

And make sure to commit your changes to ``craftercms-plugin.yaml``.
