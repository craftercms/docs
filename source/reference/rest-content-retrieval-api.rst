:nosearch:

.. _rest-content-retrieval-api:

===========================
REST Content Retrieval APIs
===========================

To view the REST Content Retrieval APIs:

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../_static/api/engine.html
   :title: REST Content Retrieval APIs

.. raw:: html

    or <a href="../../_static/api/engine.html"  target="_blank">in a new tab</a>

|
|

.. note::
    Make sure that the request includes the ``crafterSite`` parameter to set a project value. The content
    retrieval API's are project specific, and so, it needs to know the project for each request made.

    Here's an example to get an Item from the content store:

    .. code-block:: text

        http://localhost:8080/api/1/site/content_store/item.json?url=/site/website/index.xml&crafterSite=mysite

    |



