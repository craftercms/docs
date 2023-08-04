:is-up-to-date: True
:last-updated: 4.1.0

.. index:: Search, Query, OpenSearch, Elasticsearch, GraphQL

.. _content-search:

======
Search
======
.. contents::
    :local:

To perform content queries you need to use the client provided by Crafter Engine, the bean name is
``searchClient`` and it can be used from any Groovy script.

You can find the interface for this service :javadoc_base_url:`here <search/org/craftercms/search/opensearch/client/OpenSearchClientWrapper.html>`

Depending on the complexity of the queries there are two ways to create the queries:

**Query DSL**

This follows the same structure that OpenSearch uses for the REST API. This method is suitable for constant or
simple queries that don't require too much configuration.

.. code-block:: groovy
  :linenos:
  :caption: Search query using the DSL

  // No imports are required for this method

  // Execute the query using inline builders
  def searchResponse = searchClient.search(r -> r
    .query(q -> q
      .bool(b -> b
        .should(s -> s
          .match(m -> m
            .field('content-type')
            .query(v -> v
              .stringValue('/component/article')
            )
          )
        )
        .should(s -> s
          .match(m -> m
            .field('author')
            .query(v -> v
              .stringValue('My User')
            )
          )
        )
      )
    )
  , Map)

  def itemsFound = searchResponse.hits().total().value()
  def items = searchResponse.hits().hits()

  return items

.. note::
  You can find detailed information for the JSON DSL in the
  `query documentation <https://opensearch.org/docs/latest/query-dsl/>`_


**Query Builders**

You can use all classes available in the official OpenSearch client package to build your queries. This method
allow you to use builder objects to develop complex logic for building the queries.

.. code-block:: groovy
  :linenos:
  :caption: Search query using builders

  // Import the required classes
  import org.opensearch.client.opensearch.core.SearchRequest

  def queryStatement = 'content-type:"/component/article" AND author:"My User"'

  // Use the appropriate builders according to your query
  def builder = new SearchRequest.Builder()
      .query(q -> q
        .queryString(s -> s
          .query(queryStatement)
        )
      )

  // Perform any additional changes to the builder, for example add pagination if required
  if (pagination) {
    builder
      .from(pagination.offset)
      .size(pagination.limit)
  }

  // Execute the query
  def searchResponse = searchClient.search(builder.build(), Map)

  def itemsFound = searchResponse.hits().total().value()
  def items = searchResponse.hits().hits()

  return items


.. note::
    You can find detailed information for each builder in the
    `java documentation <https://opensearch.org/docs/latest/clients/java/>`_

-----------------------------
Implementing a Faceted Search
-----------------------------

It is possible to use aggregations to provide a faceted search to allow users to refine the search
results based on one or more fields.

.. note::
    Search offers a variety of aggregations that can be used depending on the type of the fields in
    your model or the requirements in the UI to display the data, for detailed information visit the
    `official documentation <https://opensearch.org/docs/latest/aggregations/>`_

In this section, we will be using the most basic aggregation ``terms`` to provide a faceted search based on the
category of blog articles.

.. image:: /_static/images/developer/search/faceted-search.webp
    :width: 90 %
    :align: center

First we must define the fields that will be used for the aggregation, in this case the page model for ``Article`` has
a ``categories`` field that uses a datasource to get values from a taxonomy in the site. For this case the name of the
field in the index is ``categories.item.value_smv``.

.. image:: /_static/images/developer/search/model.webp
    :width: 75 %
    :align: center

.. image:: /_static/images/developer/search/datasource.webp
    :width: 75 %
    :align: center

To build the faceted search we must:

#. Include the appropriate aggregations in the search request
#. Process the aggregations from the search response
#. Display the facets in the search result page

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Sending Aggregations in the Search Request
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Aggregations are added in the request using the ``aggs`` key, each aggregation must have a unique name
as key and the configuration depending on the type.

.. code-block:: groovy
    :linenos:
    :caption: Search request with aggregations

    def result = searchClient.search(r -> r
      .query(q -> q
        .queryString(s -> s
          .query(q as String)
        )
      )
      .from(start)
      .size(rows)
      .aggregations('categories', a -> a
        .terms(t -> t
        .field(categories.item.value_smv)
        .minDocCount(1)
        )
      )
    , Map)

In the previous example we include a ``terms`` aggregation called ``categories`` that will return all found values for
the field ``categories.item.value_smv`` that have at least 1 article assigned.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Processing Aggregations in the Search Response
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Search will return the aggregations in the response under the ``aggregations`` field, the contents of each
aggregation will be different depending on the type.

.. code-block:: groovy
    :linenos:
    :caption: Search response with aggregations

    def facets = [:]
    if(result.aggregations()) {
      result.aggregations().each { name, agg ->
        facets[name] = agg.sterms().buckets().array().collect{ [ value: it.key(), count: it.docCount() ] }
      }
    }

In the previous example we extract the aggregations from the response object to a simple map, this example assumes
that all aggregation will be of type ``terms`` so it gets the ``key`` and ``docCount`` for each value found
(Search calls them buckets).

The result from a query of all existing articles could return something similar to this:

.. code-block:: javascript
    :linenos:
    :caption: Search result with facets

    "facets":{
      "categories":[
        { "value":"Entertainment", "count":3 },
        { "value":"Health", "count":3 },
        { "value":"Style", "count":1 },
        { "value":"Technology", "count":1 }
      ]
    }

According to the given example, if we run our query again including a filter for category with value ``Entertainment``
it will return exactly 3 articles, and in the next query we will get a new set of facets based on those articles.
This is how users can quickly reduce the number of result and find more useful data with less effort.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Displaying Facets in the Search Result Pages
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This step will change depending on the technology being used to display all information, it can be done in Freemarker
or a SPA using Angular, React or Vue. As an example we will use Handlebars templates that will be rendered using
jQuery.

.. code-block:: html
    :force:
    :linenos:
    :caption: Search result page templates

    <script id="search-facets-template" type="text/x-handlebars-template">
      {{#if facets}}
        <div class="row uniform">
          {{#each facets}}
            <div class="3u 6u(medium) 12u$(small)">
              <input type="checkbox" id="{{value}}" name="{{value}}" value="{{value}}">
              <label for="{{value}}">{{value}} ({{count}})</label>
            </div>
          {{/each}}
        </div>
      {{/if}}
    </script>

    <script id="search-results-template" type="text/x-handlebars-template">
    {{#each articles}}
      <div>
        <h4><a href="{{url}}">{{title}}</a></h4>
        {{#if highlight}}
          <p>{{{highlight}}}</p>
        {{/if}}
      </div>
      {{else}}
      <p>No results found</p>
    {{/each}}
    </script>

We use the templates to render the results after executing the search

.. code-block:: javascript
    :linenos:
    :caption: Search execution and rendering the results

    $.get("/api/search.json", params).done(function(data) {
      if (data == null) {
        data = {};
      }
      $('#search-facets').html(facetsTemplate({ facets: data.facets.categories }));
      $('#search-results').html(articlesTemplate(data));
    });

The final step is to trigger a new search when the user selects one of the values in the facets

.. code-block:: javascript
    :linenos:
    :caption: Triggering a new search using the facets

    $('#search-facets').on('click', 'input', function() {
    var categories = [];
    $('#search-facets input:checked').each(function() {
    categories.push($(this).val());
    });

    doSearch(queryParam, categories);
    });

.. _search-multi-index-query:

-----------------
Multi-index Query
-----------------

CrafterCMS supports querying more than one search index in a single query.

To search your site and other indexes, simply send a search query with a comma separated list of indexes/aliases (pointer to an index). It will then search your site and the other indexes

.. image:: /_static/images/search/craftercms-multi-index-query.svg
   :width: 80 %
   :align: center

Remember that all other indexes/aliases to be searched need to be prefixed with the site name like this: ``SITENAME_{external-index-name}``. When sending the query, remove the prefix ``SITENAME_`` from the other indexes/aliases.

Here's how the query will look like for the above image of a multi-index query for the site ``acme`` (the SITENAME), and the CD database index ``acme_cd-database``:

.. code-block:: groovy
    :linenos:
    :caption: *Search multiple indexes - Groovy example*

    def result = openSearch.search(new SearchRequest('cd-database').source(builder))

|

.. code-block:: bash
    :linenos:
    :caption: *Search multiple indexes - REST example*

    curl -s -X POST "localhost:8080/api/1/site/search/search?index=cd-database" -d '
    {
      "query" : {
        "match_all" : {}
      }
    }
    '

|

See `here <../../../_static/api/engine.html#tag/search/operation/search>`_ for more information on the Crafter Engine API ``search``.

CrafterCMS supports the following search query parameters:

* indices_boost
* search_type
* allow_no_indices
* expand_wildcards
* ignore_throttled
* ignore_unavailable

See `the official docs <https://opensearch.org/docs/latest/api-reference/search/>`__ for more information on the above parameters.

For more information on ``indices_boost``, see index boosting in this article `<https://opensearch.org/docs/latest/api-reference/search/>`__


---------------------------------
Implementing a Type-ahead Service
---------------------------------

In this section, we will be looking at how to use a query to provide suggestions as the user types.

.. image:: /_static/images/search/search-typeahead-box.webp
    :width: 50 %
    :align: center

.. image:: /_static/images/search/search-typeahead-suggestions.webp
    :width: 50 %
    :align: center

^^^^^^^^^^^^^^^^^
Build the Service
^^^^^^^^^^^^^^^^^

Create a REST service that returns suggestions based on the content in your site.

""""""""""""
Requirements
""""""""""""

- The service will take the user's current search term and find similar content.
- The service will return the results as a list of strings

To create the REST endpoint, place the following Groovy file in your scripts folder

.. code-block:: groovy
    :linenos:
    :caption: /scripts/rest/suggestions.get.groovy

    import org.craftercms.sites.editorial.SuggestionHelper

    // Obtain the text from the request parameters
    def term = params.term

    def helper = new SuggestionHelper(searchClient)

    // Execute the query and process the results
    return helper.getSuggestions(term)

You will also need to create the helper class in the scripts folder

.. code-block:: groovy
    :linenos:
    :caption: /scripts/classes/org/craftercms/sites/editorial/SuggestionHelper.groovy

    package org.craftercms.sites.editorial

    import org.opensearch.client.opensearch.core.SearchRequest
    import org.craftercms.search.opensearch.client.OpenSearchClientWrapper

    class SuggestionHelper {

        static final String DEFAULT_CONTENT_TYPE_QUERY = "content-type:\"/page/article\""
        static final String DEFAULT_SEARCH_FIELD = "subject_t"

        OpenSearchClientWrapper searchClient

        String contentTypeQuery = DEFAULT_CONTENT_TYPE_QUERY
        String searchField = DEFAULT_SEARCH_FIELD

        SuggestionHelper(searchClient) {
            this.searchClient = searchClient
        }

        def getSuggestions(String term) {
            def queryStr = "${contentTypeQuery} AND ${searchField}:*${term}*"
            def result = searchClient.search(SearchRequest.of(r -> r
                .query(q -> q
                    .queryString(s -> s
                        .query(queryStr)
                    )
                )
            ), Map)

		  return process(result)
	    }

    	def process(result) {
    		def processed = result.hits.hits*.getSourceAsMap().collect { doc ->
    			doc[searchField]
    		}
    		return processed
    	}
    }

Once those files are created and the site context is reloaded you should be able to test the
REST endpoint from a browser and get a result similar to this:

  ``http://localhost:8080/api/1/services/suggestions.json?term=men``

.. code-block:: json
    :linenos:

    [
        "Men Styles For Winter",
        "Women Styles for Winter",
        "Top Books For Young Women",
        "5 Popular Diets for Women"
    ]

^^^^^^^^^^^^
Build the UI
^^^^^^^^^^^^

The front end experience is built with HTML, JavaScript and specifically AJAX.

""""""""""""
Requirements
""""""""""""

  - When the user types a value send a request to the server to get instant results
  - Display the results and show suggestions about what the user might be looking for
  - *Do not* fire a query for every keystroke. This can lead to more load than necessary, instead,
    batch user keystrokes and send when batch size is hit or when the user stops typing.

You can also integrate any existing library or framework that provides a type-ahead component,
for example to use the `jQuery UI Autocomplete <http://jqueryui.com/autocomplete/>`_
component you only need to provide the REST endpoint in the configuration:

.. code-block:: javascript
  :linenos:

  $('#search').autocomplete({
    // Wait for at least this many characters to send the request
    minLength: 2,
    source: '/api/1/services/suggestions.json',
    // Once the user selects a suggestion from the list, redirect to the results page
    select: function(evt, ui) {
      window.location.replace("/search-results?q=" + ui.item.value);
    }
  });