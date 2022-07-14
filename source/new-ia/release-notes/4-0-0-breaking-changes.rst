:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _newIa-breaking-changes-4-0-0:

====================================
Breaking Changes in CrafterCMS 4.0.0
====================================

This section covers changes that might affect your CrafterCMS projects, as well as other considerations
before upgrading.  Please review the following and apply changes as required:

- CrafterCMS 4.0.x requires Java 11 and Git.  See :ref:`newIa-requirements_supported_platforms` for more
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


.. _newIa-compatibility-with-3.1.x:

- **Upgrading 3.1.x sites** |br|

  - CrafterCMS 4.0.0 has a new Studio UI.  To get the same Sidebar you're used to, update
    the :ref:`newIa-user-interface-configuration`
  - Update your Elasticsearch code to match the latest Elasticsearch changes.  Elasticsearch
    has released a new Java API Client to replace the Rest High Level Client.

    See :ref:`newIa-migrating-a-site-from-previous-elasticsearch-client` for more information on
    upgrading to the latest Elasticsearch client and query mechanism
  - Update ICE to move to :ref:`XB <newIa-templated-xb>` or :ref:`XB <newIa-headless-xb>`
    depending on your project(if desired).
