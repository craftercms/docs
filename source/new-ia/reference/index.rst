:is-up-to-date: False
:nosearch:

.. _newIa-reference:

.. TODO Review

=========
Reference
=========

This section is a reference to the modules, complementary projects, APIs and other detailed material.

.. TODO List out the reference material here

------------------
CrafterCMS Modules
------------------
CrafterCMS comprises a set of modules that work together. The modules are

.. list-table:: CrafterCMS Modules
    :header-rows: 1

    * - Module
      - Description
    * - :ref:`Studio<newIa-crafter-studio>`
      - The content authoring UI and services
    * - :ref:`Engine<newIa-crafter-engine>`
      - The content delivery services
    * - :ref:`Deployer<newIa-crafter-deployer>`
      - The content deployment system which moves content from Studio to Engine and Search
    * - :ref:`Search<newIa-crafter-search>`
      - The search engine that backs content authoring and content delivery
    * - :ref:`Core<newIa-crafter-core>`
      - The content retrieval and in-memory database library
    * - :ref:`Commons<newIa-crafter-commons>`
      - The shared libraries used by all CrafterCMS modules
    * - :ref:`Profile<newIa-crafter-profile>`
      - Profile and attribute store
    * - :ref:`Social<newIa-crafter-Social>`
      - User generated content store

---------------
CrafterCMS APIs
---------------

CrafterCMS requires you use one of the following APIs to gain access to your content:

* FreeMarker API (great for templated projects) :ref:`newIa-templating-api`
* JavaScript API (great for SPAs and/or AJAX) :ref:`newIa-javascript-sdk`
* GraphQL (great for SPAs and/or AJAX) :ref:`newIa-graphql`
* Search API :ref:`newIa-search-elasticsearch`
* REST API (great for SPAs and/or AJAX) :ref:`newIa-rest-api`
* Groovy (great for full control of the API endpoints and response shape) :ref:`newIa-groovy-api`
* Java (can be accessed from Groovy and gives full access to Engine) :ref:`newIa-javadoc`





.. toctree::
   :maxdepth: 2
   :titlesonly:

   api-reference
   devcontentops-toolkit/index
   resources
