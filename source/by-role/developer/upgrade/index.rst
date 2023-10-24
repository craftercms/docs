:is-up-to-date: True
:last-updated: 4.1.0
:orphan:

.. _developers-upgrade:

=======
Upgrade
=======
.. TODO: Write a general introduction to the upgrade process

---------------
From 4.0 to 4.1
---------------
Upgrading to CrafterCMS 4.1 from 4.0 is a simple process. The upgrade script will handle most of the changes for you.

---------------
From 3.1 to 4.1
---------------
Upgrading to CrafterCMS 4.1 from 3.1 is a bit more involved. Please follow the steps below to upgrade your project/site.

.. _upgrade-search:

--------------
Upgrade Search
--------------
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Upgrade from Elasticsearch to OpenSearch
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Most of the upgrade to OpenSearch is transparent to the developer. CrafterCMS automatically updates the minor changes to the import statements, and for the most part this should work automatically.

The indexes may need to be regenerated, and the upgrade script will handle this for you.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Migrate from Solr to OpenSearch
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If upgrading projects/sites built with Solr search, please follow :ref:`this guide <migrate-site-to-opensearch>` to help you migrate to OpenSearch.

--------------------------
Upgrade In-Context Editing
--------------------------
If upgrading from CrafterCMS 4.0 with Experience Builder (XB) already in your project/site, there is nothing to upgrade.

However, if upgrading from 3.0 or 3.1 In-Context Editing (ICE) or 4.0 with ICE in compatibility mode, then you may consider upgrading to XB. This is not required, but is recommended. To upgrade to XB, see this guide: :ref:`upgrading-in-context-editing`.