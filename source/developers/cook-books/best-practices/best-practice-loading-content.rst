.. _best-practice-loading-content-via-api-vs-search:

===========================================================================
Best Practices on Loading Content Via Crafter Engine APIs vs Crafter Search
===========================================================================

This section explains when to use content directly from the search index and the potential pitfalls, and, when to directly load the content via Crafter Engine APIs.

-------------------------------
Loading content via Engine APIs
-------------------------------

When should you use the Crafter Engine APIs?

Content should be loaded via APIs when you know the path and you want to get the full content (all elements) without any modifications, since Crafter Search processes and manipulates certain fields when content is indexed. Loading content is also much faster through the Engine APIs since they directly access the disk to retrieve it.

--------------------------
Loading content via Search
--------------------------

When should you load content via search index?

Content should be loaded via Crafter Search for actual user searches, pagination, large lists, or searching for things that can't be accessed through paths (unknown paths). Be mindful that using search adds a little bit of overhead in the form of HTTP requests, so it's a bit slower than using the Engine APIs.

Here are some things to note when creating content in Crafter Studio and then using search to retrieve it:

    * Appending the suffix ``_html`` to your variable name removes html tags before indexing and allows you to properly highlight search results.
    * Appending the suffix ``_dt`` to your variable name converts the Crafter Studio date format to Solr's date format, a restricted subset of ISO-8601. This allows for some search enhancements like sorting through dates or searching by a specific range of dates.
    * Single value fields with multiple values are converted to multi value fields. This is very common when content flattening is enabled in the deployer and a page with several components is flattened. Component fields that were originally single values like ``title_s`` will appear in the index as ``title_smv``.

To see the complete list of suffixes that can be appended, see :ref:`Variable Names and Search Indexing<variable-names-search-indexing>`

------------------------------------------------
Using Search Index Then Loading Content Via Disk
------------------------------------------------

There are cases when you can use search first, and look if it contains all the elements you need.  If it does not contain all the elements you need, or the elements have been processed during search indexing and you actually need the original elements (like ``_html`` tags), you can then load the content through the Engine APIs. For example, you might need to do a search query to get content through the ``<objectId>`` tag, but then you want to return the content to the REST client with the HTML tags intact, in this case after retrieving the content path through search you then load the content through the API and return it to the client.
