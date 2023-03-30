:is-up-to-date: False
:nosearch:

.. _newIa-reference:

.. TODO Review

=========
Reference
=========

This section is a reference to the modules, APIs, complementary projects, and other detailed material.

.. TODO List out the reference material here

------------------
CrafterCMS Modules
------------------
CrafterCMS comprises a set of modules that work together.

.. TODO: Insert an image detailing the modules and how data flows

The modules are

.. list-table:: CrafterCMS Modules
    :header-rows: 1

    * - Module
      - Description
    * - :ref:`Studio<newIa-crafter-studio>`
      - Studio provides all the content management services to enable authoring, management, and publishing of all content.
    * - :ref:`Engine<newIa-crafter-engine>`
      - Engine provides content delivery services to power any type of Web or mobile application.
    * - :ref:`Deployer<newIa-crafter-deployer>`
      - The content deployment system which moves content from Studio to Engine and Search.
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

.. include:: /new-ia/includes/content-retrieval-apis.rst

For non-content related APIs, such as user/group management, monitoring, indexing and more, please consult the module API directly.

.. TODO Finish the table below

.. list-table:: CrafterCMS Modules
    :header-rows: 1

    * - Module
      - REST API
    * - :ref:`Studio<newIa-crafter-studio>`
      - OAS Link
    * - :ref:`Engine<newIa-crafter-engine>`
      - OAS Link
    * - :ref:`Deployer<newIa-crafter-deployer>`
      - OAS Link
    * - :ref:`Profile<newIa-crafter-profile>`
      - OAS Link
    * - :ref:`Social<newIa-crafter-Social>`
      - OAS Link

^^^^^^^^
Java Doc
^^^^^^^^

.. include:: /new-ia/includes/javadoc.rst

----------------------
Complimentary Projects
----------------------
.. TODO finish this and link things

- :ref:`Docker Compose<newIa-crafter-docker-compose>`
- Kubernetes ...
- Plugins
- :ref:`DevContentOps Toolkit (CrafterCMS CLI)<newIa-devcontentops-toolkit>`