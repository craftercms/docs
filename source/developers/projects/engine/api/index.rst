:is-up-to-date: True

.. index:: API; Crafter Engine

.. _crafter-engine-api:

==================
Crafter Engine API
==================

To view the Crafter Engine REST APIs:

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../../../_static/api/engine.html
   :title: Engine API

.. raw:: html

    or <a href="../../../../_static/api/engine.html" target="_blank">in a new tab</a>

|
|

.. note::
    When simple multi-tenancy has been configured for Crafter Engine, or when working in ``Preview`` mode, make sure that the request includes the ``crafterSite`` parameter to set a site value.  Crafter Engine API's are site specific, and so, it needs to know the site when multi-tenancy or preview mode has been configured for each request made.

    Here's an example to get an Item from the content store:

    .. code-block:: text

        http://localhost:8080/api/1/site/content_store/item.json?url=/site/website/index.xml&crafterSite=mysite

    |

    For more information on configuring multi-tenancy in Crafter Engine, see :ref:`engine-site-configuration-multi-tenancy`

