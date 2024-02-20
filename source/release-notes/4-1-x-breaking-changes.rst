:is-up-to-date: True
:last-updated: 4.1.0
:orphan:

.. _breaking-changes-4-1-x:

====================================
Breaking Changes in CrafterCMS 4.1.x
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

|hr|

.. _breaking-changes-4-1-3:

------------------------------------
Breaking Changes in CrafterCMS 4.1.3
------------------------------------
The following breaking changes applies to CrafterCMS version 4.1.3

^^^^^^^^^
Studio UI
^^^^^^^^^
  * ``services/content/insertComponent``: function now requires the parent document content type and the path argument
    moves to being earlier in the argument list. The shifting of the arguments seeks a more coherent argument order,
    grouping parent-related arguments first, followed by inserted instance related arguments, and finally supportive
    arguments last.

    * **Previous Order of Arguments**: siteId, parentModelId, parentFieldId, targetIndex, :bolditalic:`insertedItemContentType`,
      :bolditalic:`insertedContentInstance`, :bolditalic:`parentDocPath`, isSharedInstance, shouldSerializeValueFn?
    * **Order of Arguments Now**: siteId, :bolditalic:`parentDocPath`, parentModelId, parentFieldId, targetIndex,
      :bolditalic:`parentContentType`, :bolditalic:`insertedContentInstance`, :bolditalic:`insertedItemContentType`,
      isSharedInstance, shouldSerializeValueFn?

  * ``services/content/insertInstance``: function now requires the parent document content type and the path argument
    moves to being earlier in the argument list. The shifting of the arguments seeks a more coherent argument order,
    grouping parent-related arguments first, followed by inserted instance related arguments, and finally supportive
    arguments last.

    * **Previous Order of Arguments**: siteId, parentModelId, parentFieldId, targetIndex, insertedInstance,
      :bolditalic:`parentDocPath`, datasource?
    * **Order of Arguments Now**: siteId, :bolditalic:`parentDocPath`, parentModelId, parentFieldId, targetIndex,
      :bolditalic:`parentContentType`, insertedInstance, datasource?

  * ``components/LegacyComponentsPanel/utils/fetchAndInsertContentInstance``: the function now requires the parent
    content type id as its last argument. Note this whole component module is likely to be removed in the future.
