.. _best-practice-loading-content-via-disk-vs-search-index:

==========================================================
Best Practices on Loading Content Via Disk vs Search Index
==========================================================

This section explains when to use content directly from the search index and the potential pitfalls, and, when to directly load the content via disk (APIs).

------------------------
Loading content via disk
------------------------
When should you use content via disk (APIs)?

Content should be loaded via disk (APIs) when you know the path and you want to get the full content (all elements) with intact HTML blocks.  Loading content via disk is faster than loading content via search index as we'll see next.

--------------------------------
Loading content via search index
--------------------------------

When should you load content via search index?

Content should be loaded via search index for actual user searches, pagination, large lists, or searching for things that you can't access through paths (unknown paths).  Remember that it is slow when loading content via search index.  There is an overhead when loading from the search index if the path is known.  Also, if rendering search results, the search index might have enough for you to render without having to iterate over items and load them one by one, making it slow.

Remember to append field suffixes to your variable names to facilitate Solr indexing, which is used to configure value conversion during indexing.  To see a list of suffixes that can be appended, see :ref:`Variable Names and Search Indexing<variable-names-search-indexing>`

Here are some things to note when using search:

    * Appending the suffix ``_html`` to your variable name removes html tags before indexing and allows you to properly highlight search results.
    * Appending the suffix ``_dt`` to your variable name converts the Crafter Studio date format to Solr's date format, a restricted subset of ISO-8601.
    * Single value fields with multiple values are converted to multi value field

------------------------------------------------
Using Search Index Then Loading Content Via Disk
------------------------------------------------

There are cases when you can use the search index first, and look if it contains all the elements you need.  If it does not contain all the elements you need, you can then load the content via disk based on the search index.
