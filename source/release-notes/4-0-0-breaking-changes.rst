:is-up-to-date: True

.. _breaking-changes-4-0-0:

====================================
Breaking Changes in CrafterCMS 4.0.0
====================================

This section covers changes that might affect your CrafterCMS projects, as well as other considerations before upgrading.  Please review the following and apply changes as required:


- ``nodeSelectors`` now always return an array, even if it's an array of a single item |br|
  See the following for more information on the change in return values:

  - https://github.com/craftercms/craftercms/issues/4057
  - https://github.com/craftercms/craftercms/issues/2268

- Elasticsearch has breaking changes, for example: ``totalHits`` must now be called ``totalHits.value`` |br|
  See `here <https://www.elastic.co/guide/en/elasticsearch/reference/7.16/es-release-notes.html>`__
  for more information on Elasticsearch breaking changes

