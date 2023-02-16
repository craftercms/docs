:is-up-to-date: False
:last-updated: 4.0.0
:nosearch:

.. _newIa-headless-accessing-content:

==============
Content Access
==============

In this section we'll take a look on how to access content.

---------------------
Content Retrieval API
---------------------

CrafterCMS requires you use one of the following APIs to gain access to your content:

* FreeMarker API (great for templated projects) :ref:`freemarker-api`
* JavaScript API (great for SPAs and/or AJAX) :ref:`javascript-sdk`
* GraphQL (great for SPAs and/or AJAX) :ref:`newIa-graphql`
* Search API :ref:`newIa-search-elasticsearch`
* REST API (great for SPAs and/or AJAX) :ref:`newIa-rest-api`
* Groovy (great for full control of the API endpoints and response shape) :ref:`groovy-api`
* Java (can be accessed from Groovy and gives full access to Engine) :ref:`newIa-javadoc`

--------------------------------------
External Content Storage and Retrieval
--------------------------------------

.. TODO: Flesh this out

.. By default content is stored in the project's Git repository, however, it's often necessary to store content
   in external content stores, like a DAM or S3.

Assets are media (images, videos, etc.) or document files used in your project.
There are various ways assets can be stored and accessed

.. toctree::
   :maxdepth: 2
   :titlesonly:

   ../assets
   ../aws/index
   ../box/index