:is-up-to-date: True

.. index:: API; Crafter Studio

.. _crafter-studio-api:

==================
Crafter Studio API
==================

There are 2 versions of Crafter Studio APIs.  **API version 2** contains the User and Group Management, UI, Cluster, Sites, Search, Audit, Monitoring, CMIS, Repository, Content and Schemas APIs.   All other APIs are in **API version 1**.

.. note::
    This API is protected using a CSRF Token so all ``POST``, ``PUT`` and ``DELETE`` calls need to
    include a cookie and a header with a matching value to work. The name of the cookie must be
    ``XSRF-TOKEN`` and the header ``X-XSRF-TOKEN``.

    For more information on using Crafter Studio APIs, see :ref:`working-with-crafter-studios-api`

-------------
API Version 2
-------------

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../../../_static/api/studio.html
   :title: API Version 2

.. raw:: html

    or <a href="../../../../_static/api/studio.html" target="_blank">in a new tab</a>

|

-------------
API Version 1
-------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api-version1.rst
