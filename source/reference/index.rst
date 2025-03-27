:is-up-to-date: True
:last-updated: 4.1.0

.. _reference:

.. TODO Review

=========
Reference
=========
This section is a reference to the modules, APIs, complementary projects, and other detailed material.

-------
Modules
-------
CrafterCMS comprises a set of modules that work together.

.. image:: /_static/images/architecture/modules-overview.webp
    :width: 65%
    :alt: CrafterCMS Decoupled Overview
    :align: center

.. list-table:: CrafterCMS Modules
    :header-rows: 1
    :widths: 25 75

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

.. toctree::
    :hidden:

    modules/studio/index
    modules/engine/index
    modules/deployer/index
    modules/profile/index
    modules/social/index

|hr|

----
APIs
----
.. _api-reference:

.. include:: /includes/content-retrieval-apis.rst

.. toctree::
    :hidden:

    ../../reference/api/templating-api
    ../../reference/api/javascript-sdk
    ../../reference/api/graphql
    ../../reference/api/search
    ../../reference/api/rest-content-retrieval-api
    ../../reference/api/groovy-java-api


For non-content related APIs, such as user/group management, monitoring, indexing and more, please consult the module API directly.

^^^^^^^^
REST API
^^^^^^^^
.. TODO Finish the table below

.. list-table:: CrafterCMS Modules
    :header-rows: 1

    * - Module
      - REST API
    * - :ref:`Studio<crafter-studio>`
      - :ref:`Crafter Studio APIs <crafter-studio-api>`
    * - :ref:`Engine<crafter-engine>`
      - :ref:`Crafter Engine APIs <crafter-engine-api>`
    * - :ref:`Deployer<crafter-deployer>`
      - :ref:`Crafter Deployer APIs <crafter-deployer-api>`
    * - :ref:`Profile<crafter-profile>`
      - :ref:`Crafter Profile APIs <crafter-profile-api>`
    * - :ref:`Social<crafter-Social>`
      - :ref:`Crafter Social APIs <crafter-social-api>`

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

    *   - Docker Compose
        - `Docker Compose on GitHub <https://github.com/craftercms/docker-compose>`_
    *   - Docker Images
        - `Docker Images on GitHub <https://github.com/craftercms/docker-images>`_
    *   - Kubernetes
        - `Kubernetes Deployments on GitHub <https://github.com/craftercms/kubernetes-deployments>`_
    *   - DevContentOps Toolkit (Crafter CLI)
        - :ref:`DevContentOps Toolkit (CrafterCMS CLI) <crafter-cli>`
    *   - Extensions: Plugins
        - `CrafterCMS Sponsored Plugins on GitHub <https://github.com/orgs/craftercms/repositories?q=plugin&type=all&language=&sort=>`_
    *   - Extensions: Blueprints
        - `CrafterCMS Sponsored Blueprints <https://github.com/orgs/craftercms/repositories?q=blueprint&type=all&language=&sort=>`_
    *   - Marketplace
        - `CrafterCMS Marketplace <https://craftercms.com/marketplace>`_


