.. _crafter-search-admin:

=============================
Crafter Search Administration
=============================

------------------
Solr Configuration
------------------

Crafter Search is build to take advantage of the `schemaless` features in Solr, this allows you
to create your content types and Solr will easily understand if the fields need to be converted
to certain type without having to an entry for each one in the schema. Additionally you can
customize the Solr configuration in case you need more advanced features such as spellchecking and
stemming.

Official Solr Guides
 - `Schema Design <https://lucene.apache.org/solr/guide/6_6/documents-fields-and-schema-design.html#documents-fields-and-schema-design>`_
 - `Instance Configuration <https://lucene.apache.org/solr/guide/6_6/the-well-configured-solr-instance.html#the-well-configured-solr-instance>`_

.. WARNING::
  If you are going to change the Solr schema make sure to keep the original definition for all 
  fields used by Crafter Search, you can find a list of the field in the next section.

.. NOTE::
  If you change an existing field in the schema you will need to perform a reindex of the data to
  be sure that the changes are reflected in future searches.

----------------------------
Crafter Search Configuration
----------------------------

All Crafter Search configurations are managed using a simple properties file:

  ``TOMCAT/shared/classes/crafter/search/extension/server-config.properties``

^^^^^^^^^^^^^^^^^^
General Properties
^^^^^^^^^^^^^^^^^^

Properties prefix: ``crafter.search.solr.``

+------------+----------------------------+------------------------------+
| Property   | Default                    | Description                  |
+============+============================+==============================+
| server.url | http://localhost:8983/solr | Absolute URL for Solr server |
+------------+----------------------------+------------------------------+

^^^^^^^^^^^^^^^^
Admin Properties
^^^^^^^^^^^^^^^^

These values will be used to create the new Solr cores.

Properties prefix: ``crafter.search.solr.admin.``

+--------------------+-----------------+-------------------------------------------------------+
| Property           | Default Value   | Description                                           |
+====================+=================+=======================================================+
| defaultInstanceDir | None            | Directory where Solr config and data will be stored   |
+--------------------+-----------------+-------------------------------------------------------+
| defaultConfigName  | None            | Solr config filename                                  |
+--------------------+-----------------+-------------------------------------------------------+
| defaultSchemaName  | None            | Solr schema filename                                  |
+--------------------+-----------------+-------------------------------------------------------+
| defaultDataDir     | None            | Solr data directory                                   |
+--------------------+-----------------+-------------------------------------------------------+
| defaultConfigSet   | crafter_configs | Solr config set name                                  |
+--------------------+-----------------+-------------------------------------------------------+ 

^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Field Properties
^^^^^^^^^^^^^^^^^^^^^^^^

These properties define fields used internally by all CrafterCMS components, you should only change
them if you are building a custom version of other components such as Crafter Studio or Engine.

Properties prefix: ``crafter.search.solr.field.``

+---------------------------+----------------------------------+---------------------------------+
| Property                  | Default Value                    | Description                     |
+===========================+==================================+=================================+
| id.name                   | id                               || Unique id for each document    |
|                           |                                  || (unique across all sites)      |
+---------------------------+----------------------------------+---------------------------------+
| parentId.name             | parentId                         || Document id of the parent      |
+---------------------------+----------------------------------+---------------------------------+
| rootId.name               | rootId                           || Document id used in            |
|                           |                                  || sub-documents                  |
+---------------------------+----------------------------------+---------------------------------+
| site.name                 | site                             || Site name to which the         |
|                           |                                  || document belongs               |
+---------------------------+----------------------------------+---------------------------------+
| localId.name              | localId                          || Unique id for each document    |
|                           |                                  || (unique only in one site)      |
+---------------------------+----------------------------------+---------------------------------+
| contentType.name          | content-type                     || Crafter Studio content type    |
|                           |                                  || name                           |
+---------------------------+----------------------------------+---------------------------------+
| fileName.name             | file-name                        || Name of the file from which    |
|                           |                                  || the document was indexed       |
+---------------------------+----------------------------------+---------------------------------+
| publishedDate.name        | crafterPublishedDate             || Date field added to all        |
+---------------------------+----------------------------------+| documents                      |
| publishedDate.alt.name    | crafterPublishedDate             ||                                |
+---------------------------+----------------------------------+---------------------------------+
| multiValue.separator      | ``,``                            || Character used to identify     |
|                           |                                  || multivalued fields             |
+---------------------------+----------------------------------+---------------------------------+
| multiValue.ignore.pattern | ``^.+_(html|i|s|l|t|b|f|d|dt)$`` || Name suffixed that will not    |
|                           |                                  || be indexed as multivalued      |
|                           |                                  || fields                         |
+---------------------------+----------------------------------+---------------------------------+

^^^^^^^^^^^^^^^^^^^^^^
Field Types Properties
^^^^^^^^^^^^^^^^^^^^^^

These properties are used to configure value conversion during indexing.

Properties prefix: ``crafter.search.solr.field.type.``

+-----------------------------+-------------------------+----------------------------------------+
| Property                    | Default Value           | Description                            |
+=============================+=========================+========================================+
| html.suffix                 | ``_html``               || Suffixes will be used to identify     |
+-----------------------------+-------------------------+| the type of each field.               |
| int.suffix                  | ``_i``                  ||                                       |
+-----------------------------+-------------------------+| If a field does not match any         |
| int.multiValued.suffix      | ``_imv``                || suffix it will use the generic text   |
+-----------------------------+-------------------------+| type defined by Solr.                 |
| string.suffix               | ``_s``                  ||                                       |
+-----------------------------+-------------------------+|                                       |
| string.multiValued.suffix   | ``_smv``                ||                                       |
+-----------------------------+-------------------------+|                                       |
| long.suffix                 | ``_l``                  ||                                       |
+-----------------------------+-------------------------+|                                       |
| long.multiValued.suffix     | ``_lmv``                ||                                       |
+-----------------------------+-------------------------+|                                       |
| text.suffix                 | ``_t``                  ||                                       |
+-----------------------------+-------------------------+|                                       |
| text.multiValued.suffix     | ``_txt``                ||                                       |
+-----------------------------+-------------------------+|                                       |
| boolean.suffix              | ``_b``                  ||                                       |
+-----------------------------+-------------------------+|                                       |
| boolean.multiValued.suffix  | ``_bmv``                ||                                       |
+-----------------------------+-------------------------+|                                       |
| float.suffix                | ``_f``                  ||                                       |
+-----------------------------+-------------------------+|                                       |
| float.multiValued.suffix    | ``_fmv``                ||                                       |
+-----------------------------+-------------------------+|                                       |
| double.suffix               | ``_d``                  ||                                       |
+-----------------------------+-------------------------+|                                       |
| double.multiValued.suffix   | ``_dmv``                ||                                       |
+-----------------------------+-------------------------+|                                       |
| datetime.suffix             | ``_dt``                 ||                                       |
+-----------------------------+-------------------------+|                                       |
| datetime.multiValued.suffix | ``_dts``                ||                                       |
+-----------------------------+-------------------------+----------------------------------------+
| datetime.pattern            | ``MM/dd/yyyy HH:mm:ss`` | All dates must follow this format      |
+-----------------------------+-------------------------+----------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^^^
Post Processing Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^

Crafter Search includes a list of post processors to update certain fields during indexing.

The ``DenormalizingPostProcessor`` can be configured to copy fields between parent and child
documents, this can be useful for complex queries that require a logic similar to `joins` in SQL.

Properties prefix: ``crafter.search.solr.document.postProcessor.denormalizing.``

+----------------------------+--------------------+-----------------------------------------+
| Property                   | Default Value      | Description                             |
+============================+====================+=========================================+
| fieldsToIgnore             | All Crafter Fields || Fields that will not be checked by the |
|                            |                    || post processor                         |
+----------------------------+--------------------+-----------------------------------------+
| copyChildrenFieldsToParent | true               || If enabled all fields will be copied   |
|                            |                    || from the children                      |
+----------------------------+--------------------+-----------------------------------------+
| copyParentFieldsToChildren | true               || If enabled all fields will be copied   |
|                            |                    || from the parent                        |
+----------------------------+--------------------+-----------------------------------------+

^^^^^^^^^^^^^^^^^
Delete Properties
^^^^^^^^^^^^^^^^^

These properties control how Crafter Search deletes documents from the Solr index. If your schema
includes complex relationships in which the delete operation should be propagated you can
include the logic here. You can also define specific queries for different file types based on
a regular expression from the filename.

Properties prefix: ``crafter.search.solr.delete.xml.``

+----------+----------------------------------+--------------------------------------------------+
| Property | Default Value                    | Description                                      |
+==========+==================================+==================================================+
| regex    | ``.*\\.xml$``                    || Pattern to determinate if a given id should     |
|          |                                  || use the query for being deleted                 |
+----------+----------------------------------+--------------------------------------------------+
| query    | ``id:"%1$s" OR parentId:"%1$s"`` || Query used to select all documents that should  |
|          |                                  || be deleted for the given id                     |
+----------+----------------------------------+--------------------------------------------------+

^^^^^^^^^^^^^^^^^
Filter Properties
^^^^^^^^^^^^^^^^^

Using this property Crafter Search can automatically add filters to all queries sent from the
different clients. The default values are used for supporting the disable and expire features
from Crafter Studio but you can add any additional query according to your requirements.

Properties prefix: ``crafter.search.solr.filter.``

+--------------------+---------------------------------------------+-----------------------------+
| Property           | Default Value                               | Description                 |
+====================+=============================================+=============================+
| additional.queries | ``-disabled:"true",-expired_dt:[* TO NOW]`` || List of queries to add as  |
|                    |                                             || filters                    |
+--------------------+---------------------------------------------+-----------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^
Sub-Documents Properties
^^^^^^^^^^^^^^^^^^^^^^^^

Crafter Search can detect when a document contains elements that should be indexed as sub-documents.

Properties prefix: ``crafter.search.xml.element.``

+---------------------------+---------------+----------------------------------------------------+
| Property                  | Default Value | Description                                        |
+===========================+===============+====================================================+
| containsSubDocuments.name | sub-docs      || XML element that indicates there are              |
|                           |               || sub-documents                                     |
+---------------------------+---------------+----------------------------------------------------+
| subDocument.name          | item          || XML element to search for sub-documents           |
+---------------------------+---------------+----------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^
Solr Index Properties
^^^^^^^^^^^^^^^^^^^^^

The recommended approach is to create a new Solr core for each site, however it is also possible
to have multiple sites in a single core.

Properties prefix: ``crafter.search.index.``

+----------+---------------+---------------------------------------------------------------------+
| Property | Default Value | Description                                                         |
+==========+===============+=====================================================================+
| default  | default       | Solr core name to use when it is not specified by the search client |
+----------+---------------+---------------------------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^
Monitoring Properties
^^^^^^^^^^^^^^^^^^^^^

Properties prefix: ``crafter.search.monitoring.``

+---------------+------------------------+-----------------------------------------+
| Property      | Default Value          | Description                             |
+===============+========================+=========================================+
| statusMessage | Crafter Search Running | Message returned for the status request |
+---------------+------------------------+-----------------------------------------+
