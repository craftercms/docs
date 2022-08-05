:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:

.. _newIa-migrate-site-to-elasticsearch:

===========================================
Migrating a site from Solr to Elasticsearch
===========================================

When upgrading to CrafterCMS 4.0 you need to update the code of all existing sites to use Elasticsearch if your site(s)
were built to use Solr.

-------------------------
Updating to Elasticsearch
-------------------------

To update your site to use Elasticsearch instead of Solr you can follow these steps:

#. Overwrite the target in the Deployer to use Elasticsearch instead of Solr
#. Index all existing content in Elasticsearch
#. Find all references to ``searchService`` in your FreeMarker templates and replace them with the Elasticsearch client
#. Find all references to ``searchService`` in your Groovy scripts and replace them with the Elasticsearch client
#. Delete the unused Solr core if needed (can be done using the Solr Admin UI or the ``data/indexes`` folder)
#. Update ``craftercms-plugin.yaml`` to use Elasticsearch as the search engine

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
  For a detailed list of parameters see :ref:`newIa-crafter-deployer-api-target-create`

|

The create target operation will also create the new index in Elasticsearch.

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

Because both Solr and Elasticsearch are based on Lucene, you will be able to keep most of your queries unchanged,
however features like sorting, facets and highlighting will require code changes.

.. note::
  To take full advantage of Elasticsearch features it is recommended to replace query strings with other type of
  queries provided by the Elasticsearch DSL

|

.. warning::
  If you are using any customization or any advance feature from Solr, you will need to find an alternative using
  Elasticsearch.

|

To update your code there are two possible approaches:

**Examples**

This is a basic example of replacing Crafter Search service with Elasticsearch

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

Using the Elasticsearch Client the code will look like this:

.. code-block:: groovy
  :linenos:
  :caption: Elasticsearch Client

  import co.elastic.clients.elasticsearch._types.SortOrder

  def q = "${userTerm}~1 OR *${userTerm}*"

  // Execute the query
  def result = elasticsearchClient(r -> r
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

  // Elasticsearch response (highlight results are part of each hit object)
  def documents = result.hits().hits()

For additional information you can read the official
`Java Client documentation <https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/index.html>`_
and `DSL documentation <https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html>`_.

Notice in the given example that the query string didn't change, you will need to update only the code
that builds and executes the query. However Elasticsearch provides new query types and features that you
can use directly from your Groovy scripts.

If any of your queries includes date math for range queries, you will also need to update them to use the Elasticsearch
date math syntax described `here <https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#date-math>`_.

**Example**

.. code-block:: text
  :linenos:
  :caption: Solr date math expression

  createdDate_dt: [ NOW-1MONTH/DAY TO NOW-2DAYS/DAY ]

.. code-block:: text
  :linenos:
  :caption: Elasticsearch date math expression

  createdDate_dt: [ now-1M/d TO now-2d/d ]

In Solr there were two special fields ``_text_`` and ``_text_main_``, during indexing the values of other fields were
copied to provide a simple way to create generic queries in all relevant text. Elasticsearch provides a different
feature that replaces those fields `Multi-match query <https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html>`_

**Example**

.. code-block:: text
  :linenos:
  :caption: Solr query for any field

  _text_: some keywords

.. code-block:: text
  :linenos:
  :caption: Elasticsearch query for any field (replacement for ``_text_``)


  .multiMatch(m -> m
    .query('some keywords')
  )

Elasticsearch also offers the possibility to query fields with postfixes using wildcards

.. code-block:: text
  :linenos:
  :caption: Elasticsearch query for specific fields (replacement for ``_text_main_``)

  .multiMatch(m -> m
    .query('some keywords')
    .fields('*_t', '*_txt', '*_html')
  )

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Update "craftercms-plugin.yaml" to use Elasticsearch
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Your site has a ``craftercms-plugin.yaml`` file that contains information for use by CrafterCMS.
We'll have to update the file to use Elasticsearch as the search engine.

Edit your ``craftercms-plugin.yaml``, and remove the following property:

.. code-block:: yaml
   :caption: *AUTHORING_INSTALL_DIR/data/repos/sites/YOURSITE/sandbox/craftercms-plugin.yaml*
   :linenos:

   searchEngine: CrafterSearch

And make sure to commit your changes to ``craftercms-plugin.yaml``.

.. _newIa-migrating-a-site-from-previous-elasticsearch-client:

=======================================================
Migrating a site from the previous Elasticsearch client
=======================================================
.. version_tag::
   :label: Since
   :version: 4.0.0

CrafterCMS 4.0 provides two different Elasticsearch clients, this is because Elasticsearch has released a new Java API
Client to replace the Rest High Level Client and during the transition period both will work. So if you are upgrading
from CrafterCMS 3.1 and your site already uses Elasticsearch it will continue to work with some small changes, but it
is highly recommended to migrate to the new client to avoid any issues in future releases when the Rest High Level
Client is completely removed.

Migrating to the new Elasticsearch client should not require too much effort:

- If the existing code uses the builder classes you will need to replace them with the equivalent in the new client
- If the existing code uses a map DSL it only needs to be replaced with the new lambda structure

For additional information about the new client you can read the official `documentation <https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/api-conventions.html>`_
