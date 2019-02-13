.. _best-practice-loading-content-from-disk-vs-search-index:

===========================================================
Best Practices on Loading Content From Disk vs Search Index
===========================================================

This section explains when to use content directly from the search index and the potential pitfalls, and, when to directly load the content via disk (APIs).

-------------------------
Loading Content From Disk
-------------------------
When should you use content via disk (APIs)?

Content should be loaded from disk (Crafter Core APIs) when you know the path and you want to get the full content (all elements) with intact HTML blocks.  Loading content from disk is faster than loading content via search index as we'll see next.

---------------------------------
Loading Content From Search Index
---------------------------------

When should you load content from search index?

Content should be loaded from search index for actual user searches that result in large result sets with the need to paginate, or when searching for things that you can't access through paths (unknown paths).  Remember that it is slower to go through the search index vis-a-vis disk because of the overhead (search index overhead + network overhead).  If the path is known, there is little reason to go through search.

Remember to append field suffixes to your variable names to facilitate indexing, which is used to configure value conversion during indexing.  To see a list of suffixes that can be appended, see :ref:`Variable Names and Search Indexing<variable-names-search-indexing>`

Here are some things to note when using search:

    * Appending the suffix ``_html`` to your variable name removes html tags before indexing and allows you to properly highlight search results. However, this means you can't use that field directly from the search index since it's stripped of markup.
    * Single value fields with multiple values are converted to multi value field

------------------------------------------------
Using Search Index Then Loading Content Via Disk
------------------------------------------------

There are cases when you can use the search index first, and look if it contains all the elements you need.  If it does not contain all the elements you need, you can then load the content via disk based on the search index. For example: in the case where you're rendering search results/large lists, and not all the meta-data you need to show in the view (say a search results page) are present, or they're not in the right format (e.g. stripped html), then you'll need to load the items one by one via disk (Crafter Core), which is clearly slower.  Make sure you design your content modeling in such a way to help with these situations where possible.
