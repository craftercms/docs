:is-up-to-date: True
:last-updated: 5.0.0
:orphan:

.. _breaking-changes-5-x:

================================
Breaking Changes in CrafterCMS 5
================================
This section covers changes that might affect your CrafterCMS projects, as well as other considerations
before upgrading. Please review the following and apply changes as required:

|hr|

.. _breaking-changes-in-craftercms-5-0-0:

------------------------------------
Breaking Changes in CrafterCMS 5.0.0
------------------------------------
- The Spring profile ``crafter_studio_externalDb`` has been removed in CrafterCMS version 5.0.0.

|hr|

.. _compatibility-with-3.1.x:

---------------------
Upgrading 3.1.x Sites
---------------------

  - MongoDB in CrafterCMS Social and Profile has been updated. To upgrade MongoDB in your installation, see
    :ref:`upgrading-mongodb`

  - CrafterCMS 4.1.x onward requires Git. |br| See :ref:`Requirements <requirements_supported_platforms>` for more
    information on CrafterCMS requirements.

  - CrafterCMS 4.1.x onward has a new Studio UI. To get the same Sidebar you're used to, update
    the :ref:`user-interface-configuration`

  - Update ICE to move to :ref:`XB <experience-builder>`

  - Studio and Engine SAML configuration now uses a key and certificate for configuration instead of using keystore. |br|
    See :ref:`engine-saml2-configuration` and :ref:`crafter-studio-configure-studio-saml` for more information.
