:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _breaking-changes-4-1-0:

====================================
Breaking Changes in CrafterCMS 4.1.0
====================================
This section covers changes that might affect your CrafterCMS projects, as well as other considerations
before upgrading. Please review the following and apply changes as required:

- CrafterCMS 4.1.x requires Java 17. |br| See :ref:`Requirements <requirements_supported_platforms>` for more
  information on CrafterCMS requirements.

- CrafterCMS 4.1.x now uses OpenSearch. |br| See :ref:`here <upgrading-search>` for more information on upgrading search to OpenSearch

.. _compatibility-with-3.1.x:

- **Upgrading 3.1.x sites** |br|

  - CrafterCMS 4.1.x requires Git. |br| See :ref:`Requirements <requirements_supported_platforms>` for more
    information on CrafterCMS requirements.

  - CrafterCMS 4.1.0 has a new Studio UI. To get the same Sidebar you're used to, update
    the :ref:`user-interface-configuration`

  - Update ICE to move to :ref:`XB <experience-builder>`

  - Studio and Engine SAML configuration now uses a key and certificate for configuration instead of using keystore. |br|
    See :ref:`engine-saml2-configuration` and :ref:`crafter-studio-configure-studio-saml` for more information.
