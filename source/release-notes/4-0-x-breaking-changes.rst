:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _breaking-changes-4-0-x:

====================================
Breaking Changes in CrafterCMS 4.0.x
====================================

This section covers changes that might affect your CrafterCMS projects, as well as other considerations
before upgrading.  Please review the following and apply changes as required:

- CrafterCMS 4.0.x requires Java 11 and Git.  See :ref:`requirements_supported_platforms` for more
  information on CrafterCMS requirements.

- ``nodeSelectors`` now always return an array, even if it's an array of a single item |br|
  See the following for more information on the change in return values:

  - https://github.com/craftercms/craftercms/issues/4057
  - https://github.com/craftercms/craftercms/issues/2268

- Elasticsearch has breaking changes, for example: ``totalHits`` must now be called ``totalHits.value`` |br|
  See `here <https://www.elastic.co/guide/en/elasticsearch/reference/7.17/breaking-changes.html>`__ for more
  information on Elasticsearch breaking changes.

  Please note that most of the breaking changes are from Elasticsearch 6.8 to 7.0.  Please take a look at the
  breaking changes listed for Elasticsearch 7.0 for more information.


.. _compatibility-with-3.1.x:

- **Upgrading 3.1.x sites** |br|

  - CrafterCMS 4.0.0 has a new Studio UI.  To get the same Sidebar you're used to, update
    the :ref:`user-interface-configuration`
  - Update your Elasticsearch code to match the latest Elasticsearch changes.  Elasticsearch
    has released a new Java API Client to replace the Rest High Level Client.

    See :ref:`migrating-a-site-from-previous-elasticsearch-client` for more information on
    upgrading to the latest Elasticsearch client and query mechanism
  - Update ICE to move to :ref:`XB <experience-builder>` (if desired).
  - CrafterCMS 4.0.x by default now classifies all items under ``/site`` as ``file`` type, instead of ``item`` type.

    Items under preconfigured paths in the Project configuration ``config/studio/site-config.xml``, such as
    ``/site/website`` and ``/site/components`` are classified as an ``item`` type by default. Before upgrading your
    version 3.1.x install, non-standard paths/custom paths must be configured under ``repository.patterns`` in the
    Project configuration file ``config/studio/site-config.xml`` in order to be classified correctly.

    Any item that is misclassified after an upgrade can be corrected by updating the Project configuration file
    ``config/studio/site-config.xml`` and then editing and saving the misclassified item(s) OR by modifying the
    ``system_type`` field for the item in the ``item`` table in the database.


.. raw:: html

   <hr>

.. _breaking-changes-4-0-3:

------------------------------------
Breaking Changes in CrafterCMS 4.0.3
------------------------------------

The following changes in CrafterCMS 4.0.3 might affect your projects when upgrading.
Please review the following and apply changes as required:

- Studio and Engine SAML configuration now uses a key and certificate for configuration instead of using keystore.
  See :ref:`engine-saml2-configuration` and :ref:`crafter-studio-configure-studio-saml` for more information.
