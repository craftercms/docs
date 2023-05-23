:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:

.. index:: Project Configuration

.. _newIa-project-configuration:

#####################
Project Configuration
#####################

The project configuration file contains the primary configuration for Crafter Studio's behavior. Each project has
its own project configuration file that controls its behavior independently of other projects.

To modify the project configuration, click on |projectTools| from the *Sidebar*, then click on **Configuration**
and select **Project Configuration** from the list.

.. image:: /_static/images/site-admin/config-open-project-config.webp
    :alt: Configurations - Open Project Configuration
    :width: 65 %
    :align: center

|

******
Sample
******

Here's a sample Project Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample Project Configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-site-config.xml
     :language: xml
     :linenos:


.. raw:: html

   </details>

|
|

****************
Enabling Staging
****************

The ``staging`` publishing target is an intermediate publishing target where the project can be fully exercised.
To enable the ``staging`` publishing target, set the following to ``true``:

.. code-block:: xml

   <published-repository>
     <enable-staging-environment>false</enable-staging-environment>
   </published-repository>

|

See :ref:`newIa-staging-env` for more information on how to setup the ``staging`` publishing target

***********************
Escaping Content Fields
***********************

To add/remove escaped content fields, modify the following:

.. code-block:: xml

   <!--
   Specifies the regular expression patterns to match content type field
   names that require CDATA escaping.
   -->
   <cdata-escaped-field-patterns>
     <pattern>(_html|_t|_s|_smv|mvs)$</pattern>
     <pattern>internal-name</pattern>
   </cdata-escaped-field-patterns>

|

For more information on escaping content fields, see the notes under :ref:`Variable Names and Search Indexing <newIa-variable-names-search-indexing>`

*******************
Publishing Comments
*******************

To make comments mandatory for different publishing methods, simply set to ``true`` any applicable methods the
site administrators want to require comments when publishing.

.. code-block:: xml

   <publishing>
     <comments>
       <!-- Global setting would apply to all -->
       <required>false</required>
       <!-- Additional (also optional) specific overrides -->
       <!-- <delete-required/> -->
       <!-- <bulk-publish-required/> -->
       <!-- <publish-by-commit-required/> -->
       <!-- <publish-required/> -->
     </comments>
   </publishing>

|

See :ref:`newIa-publishing-and-status` for more information on the different publishing methods available from ``Project Tools``

.. _newIa-project-config-require-peer-review:

************************************
Requiring Peer Review for Publishing
************************************
.. version_tag::
   :label: Since
   :version: 4.0.0

A publisher review workflow option is available to make approval of a publish request mandatory for users with
publish permission.  To enable the publisher review workflow option, set ``requirePeerReview`` to ``true``.

.. code-block:: xml

   <!--
        This workflow parameter disallows users with _Publish_ permission from publishing their own work.
        Work performed by a user must be approved by a different reviewer before it can be published.
        Set the value to true to enable this feature.
   -->
   <workflow>
     <publisher>
       <requirePeerReview>true</requirePeerReview>
     </publisher>
   </workflow>


******************
Content Monitoring
******************

Content monitoring allows you to configure watches and notifications on your project. To add content monitors, add the following:

.. code-block:: xml

   <contentMonitoring>
     <monitor>
       <name>Content Expiring Tomorrow</name>
       <query>expired_dt:[now+1d/d TO now+2d/d]</query>
       <paths>
         <path>
           <name>All Site</name>
           <pattern>/site/.*</pattern>
           <emailTemplate>contentExpiringSoon</emailTemplate>
           <emails>admin@example.com</emails>
           <locale>en</locale>
         </path>
       </paths>
     </monitor>
   </contentMonitoring>

|

See :ref:`newIa-content-monitoring` for more information on configuring content monitoring.

.. _newIa-project-config-protected-folders:

*****************
Protected Folders
*****************

The protected folders settings allows you to configure paths that can't be deleted, renamed or moved in addition to
the following paths that are protected by default:

- ``/site/website/index.xml``
- ``/site/components``
- ``/site/taxonomy``
- ``/static-assets``
- ``/templates``
- ``/scripts``
- ``/sources``

To add protected folder/s in your project, add your folder path/s like below:

.. code-block:: xml

   <protected-folders-patterns>
     <pattern>/YOUR/FOLDER/PATH/PATTERN</pattern>
     <pattern>/MORE/FOLDER/PATH/PATTERN</pattern>
     ...
   </protected-folders-patterns>

|

Remember to replace ``/YOUR/FOLDER/PATH/PATTERN`` and ``/MORE/FOLDER/PATH/PATTERN`` with the actual folder path
pattern/s that you would like to be protected.

To see an example of configured protected folders, create a project using the ``Video Center`` blueprint from the
Public Marketplace in the ``Create Project`` dialog then open the
``Sidebar`` -> |projectTools| -> ``Configuration`` -> ``Project Configuration``.  Scroll down to the
``<protected-folders-patterns>`` tag:

.. code-block:: xml

   <!--
   Prevent deleting, renaming or cutting root folders of sidebar
   -->
   <protected-folders-patterns>
     <pattern>/site/streams</pattern>
     <pattern>/site/videos</pattern>
     <pattern>/site/origins</pattern>
   </protected-folders-patterns>