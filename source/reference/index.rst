:is-up-to-date: False

.. _reference:

.. TODO Review

=========
Reference
=========

This section is a reference to the modules, APIs, complementary projects, and other detailed material.

.. TODO List out the reference material here

-------
Modules
-------
CrafterCMS comprises a set of modules that work together.

.. TODO: Insert an image detailing the modules and how data flows

The modules are

.. list-table:: CrafterCMS Modules
    :header-rows: 1

    * - Module
      - Description
    * - :ref:`Studio<crafter-studio>`
      - Studio provides all the content management services to enable authoring, management, and publishing of all content.
    * - :ref:`Engine<crafter-engine>`
      - Engine provides content delivery services to power any type of Web or mobile application.
    * - :ref:`Deployer<crafter-deployer>`
      - The content deployment system which moves content from Studio to Engine and Search.
    * - :ref:`Profile<crafter-profile>`
      - Profile and attribute store
    * - :ref:`Social<crafter-Social>`
      - User generated content store

|hr|

----
APIs
----
.. _api-reference:

.. include:: /includes/content-retrieval-apis.rst

For non-content related APIs, such as user/group management, monitoring, indexing and more, please consult the module API directly.

.. TODO Finish the table below

.. list-table:: CrafterCMS Modules
    :header-rows: 1

    * - Module
      - REST API
    * - :ref:`Studio<crafter-studio>`
      - OAS Link
    * - :ref:`Engine<crafter-engine>`
      - `Crafter Engine APIs <../_static/api/engine.html>`_
    * - :ref:`Deployer<crafter-deployer>`
      - `Crafter Deployer APIs <../_static/api/deployer.html>`_
    * - :ref:`Profile<crafter-profile>`
      - OAS Link
    * - :ref:`Social<crafter-Social>`
      - OAS Link

^^^^^^^^
Java Doc
^^^^^^^^

.. include:: /includes/javadoc.rst

|hr|

----------------
Managing Secrets
----------------

There are a number of ways to manage secrets in CrafterCMS, please review this :ref:`article<managing-secrets>` for more information.

.. toctree::
   :hidden:
   :maxdepth: 2

   managing-secrets

|

|hr|

----------------------
Administration Scripts
----------------------

.. include:: /includes/administration-scripts.rst

|hr|

----------------------
Complimentary Projects
----------------------

.. list-table:: Complimentary Projects and Resources
    :header-rows: 1

    *   - Docker Compose
        - `Docker Compose on GitHub <https://github.com/craftercms/docker-compose>`_
    *   - Docker Images
        - `Docker Images on GitHub <https://github.com/craftercms/docker-images>`_
    *   - Kubernetes
        - `Kubernetes Deployments on GitHub <https://github.com/craftercms/kubernetes-deployments>`_
    *   - DevContentOps Toolkit (Crafter CLI)
        - `DevContentOps Toolkit (CrafterCMS CLI) <devcontentops-toolkit>`_
    *   - Extensions: Plugins
        - `CrafterCMS Sponsored Plugins on GitHub <https://github.com/orgs/craftercms/repositories?q=plugin&type=all&language=&sort=>`_
    *   - Extensions: Blueprints
        - `CrafterCMS Sponsored Blueprints <https://github.com/orgs/craftercms/repositories?q=blueprint&type=all&language=&sort=>`_
    *   - Marketplace
        - `CrafterCMS Marketplace <https://craftercms.com/marketplace>`_


