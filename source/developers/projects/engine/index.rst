:is-up-to-date: True

.. index:: Projects; Crafter Engine

.. _crafter-engine:

==============
Crafter Engine
==============

Crafter Engine provides content delivery services to power any type of Web or mobile application. It consumes content published through Crafter Studio and provides developers with the foundation for quickly building high-performance, flexible Web and mobile applications.

Building content rich applications backed by Crafter CMS requires you use one of the following APIs to gain access to your content. You have many choices here:

* JavaScript API (great for SPAs and/or AJAX)
* GraphQL (great for SPAs and/or AJAX)
* REST API (great for SPAs and/or AJAX)
* FreeMarker (great for HTML with server-side HTML production)
* Groovy (great for business logic with access to content or configuration/parameterization)
* Java (for embedding your business logic/app within Crafter Engine)

|

  .. include:: /includes/scripts-templates-security.rst

--------------------
JavaScript Libraries
--------------------

.. toctree::
    :maxdepth: 1
    :titlesonly:

    javascript-libraries

-------
GraphQL
-------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   ../../cook-books/graphql/index

--------
ReST API
--------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api/index

---------------------------
FreeMarker (Templating) API
---------------------------

.. toctree::
    :maxdepth: 1
    :titlesonly:

    api/templating-api

----------
Groovy API
----------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api/groovy-api

--------
Java Doc
--------

Crafter Engine's Java Doc is here: :javadoc_base_url:`engine/index.html`

---------------------------
Crafter Engine Architecture
---------------------------

.. figure:: /_static/images/architecture/crafter-engine.png
    :alt: Crafter Engine
    :width: 60 %
    :align: center

-----------
Source Code
-----------

Crafter Engine's source code is managed in GitHub: https://github.com/craftercms/engine

-------------
Configuration
-------------

* :ref:`engine-site-configuration`
* :ref:`engine-site-security-guide`
