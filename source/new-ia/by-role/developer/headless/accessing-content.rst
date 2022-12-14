:is-up-to-date: False
:last-updated: 4.0.0
:nosearch:

.. _newIa-headless-accessing-content:

=================
Accessing Content
=================

In this section we'll take a look on how to access content.

---------------------
Content Retrieval API
---------------------

CrafterCMS requires you use one of the following APIs to gain access to your content:

* GraphQL (for SPAs and/or AJAX)
* REST API (for SPAs and/or AJAX)
* Groovy (great for business logic with access to content or configuration/parameterization)
* Java (for embedding your business logic/app within Crafter Engine)

For more information on the above APIs, see :ref:`newIa-api-reference`

------------------------------
Static-asset content retrieval
------------------------------

Assets are media (images, videos, etc.) or document files used in your project.
There are various ways assets can be stored and accessed

.. toctree::
   :maxdepth: 2
   :titlesonly:

   ../assets
   ../aws/index
   ../box/index

----------------------
Crafter JavaScript SDK
----------------------

For retrieving content and navigation using APIs offered by CrafterCMS, use the
`@craftercms/content <https://www.npmjs.com/package/@craftercms/content>`__ JavaScript SDK npm package name

For more information on other CrafterCMS JavaScript SDK npm packages, see :ref:`javascript-sdk`

