:is-up-to-date: True
:last-updated: 4.1.3
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

  - CrafterCMS 4.1.x by default now classifies all items under ``/site`` as ``file`` type, instead of ``item`` type.

    Items under preconfigured paths in the Project configuration ``config/studio/site-config.xml``, such as
    ``/site/website`` and ``/site/components`` are classified as an ``item`` type by default. Before upgrading your
    version 3.1.x install, non-standard paths/custom paths must be configured under ``repository.patterns`` in the
    Project configuration file ``config/studio/site-config.xml`` in order to be classified correctly.

    Any item that is misclassified after an upgrade can be corrected by updating the Project configuration file
    ``config/studio/site-config.xml`` and then editing and saving the misclassified item(s) OR by modifying the
    ``system_type`` field for the item in the ``item`` table in the database.

|hr|

.. _breaking-changes-4-1-3:

------------------------------------
Breaking Changes in CrafterCMS 4.1.3
------------------------------------
The following breaking changes applies to CrafterCMS version 4.1.3

^^^^^^
Engine
^^^^^^
Crafter Engine relies on a library that marshals objects to JSON. This dependency was updated in CrafterCMS version 4.1.0,
and it introduced a change of behavior in Crafter Engine for ``getItem`` that affected a small subset of content items
and fields.

The change was as follows:
If you set an attribute on the field (e.g., ``tokenized``) then the library would marshal the field as an object where
the attribute was a property of the object and the value was marshaled as a property called ``text``

.. code-block:: json
    :caption: *Response for Crafter Engine getItem API for versions 4.1.0 - 4.1.2*
    :force:

    {
      ...
      "productName_s": {
        tokenized": "true",
        "text": "test"
      }
    }

|

However, the correct response is as follows:

.. code-block:: json
    :caption: *Response for Crafter Engine getItem API for versions 4.1.3 and later*
    :force:

    {
      ...
      "productName_s": "test"
    }

|

CrafterCMS version 4.1.3 and later does not marshal single value fields with attributes as objects.
This issue has been corrected so all string and text fields, with or without attributes, are marshaled in a consistent
fashion. Users of CrafterCMS version 4.1.0 - 4.1.2 may need to make minor changes to code that consumes Crafter Engine
``getItem`` responses if they have fields that leverage the ``tokenized`` property.


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

.. note::
    The changes above in Studio UI is primarily an internal change. It would only affect those developing authoring applications using the functions described above either via ``@craftercms/studio-ui`` npm package or using the ``craftercms`` global variable in an authoring extension.
