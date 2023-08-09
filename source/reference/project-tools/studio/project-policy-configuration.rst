:is-up-to-date: False
:last-updated: 4.0.2

:orphan:

.. index:: Project Policy Configuration

.. _project-policy-configuration:

############################
Project Policy Configuration
############################
.. version_tag::
   :label: Since
   :version: 4.0.0

The project policy configuration file allows the user to configure conditions for content being added to the project
(via uploads), such as minimum/maximum size of files, etc.

*Note that the project policy does not apply to content created via the UI.*

CrafterCMS supports the following project policies:

- Filename allowed patterns and automatic renaming rules
- File size limits
- MIME-type limits
- Content-type limits

To modify the project policy configuration, click on |projectTools| from the *Sidebar*, then click on **Configuration** and
select **Project Policy Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-project-policy-config.webp
   :alt: Configurations - Open Project Policy Configuration
   :width: 45 %
   :align: center

******
Sample
******
Here's a sample Project Policy Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample project policy configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-site-policy-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/site-policy-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

.. raw:: html

   <hr>

********
Examples
********

Let's take a look at some example project policy configurations.

----------
Mime Types
----------

The example configuration below (as seen in the default project policy configuration) disallows svg image
file uploads:

.. code-block:: xml
   :emphasize-lines: 7-9

      <!-- disable svg files -->
      <statement>
        <target-path-pattern>/.*</target-path-pattern>
        <permitted>
          <mime-types>*/*</mime-types>
        </permitted>
        <denied>
          <mime-types>image/svg+xml</mime-types>
        </denied>
      </statement>

   Whenever a user tries to upload an svg image, the user will see a message on the screen informing them that
   it doesn’t comply with the project policies and can’t be uploaded like below:

.. image:: /_static/images/site-admin/project-policy-cannot-upload.webp
   :alt: Project Policy Configuration - Do not allow svg file uploads
   :width: 55 %
   :align: center

|

----------------
File Size Limits
----------------

Limiting file size of uploads is supported. Simply add ``<minimum-file-size/>`` and/or <maximum-file-size/>
under ``<permitted>`` where the minimum and maximum file sizes are in bytes

The example configuration below limits image uploads to less than 1MB in folder ``/static-assets/images/``.

.. code-block:: xml

   <!-- Example: only allow images of less than 1 MB -->
   <statement>
     <target-path-pattern>/static-assets/images/.*</target-path-pattern>
     <permitted>
       <maximum-file-size>1000000</maximum-file-size>
       <mime-types>image/*</mime-types>
     </permitted>
   </statement>

Whenever a user tries to upload an image that is larger than 1 MB in the ``/static-assets/images/`` folder, the user
will see a message on the screen informing them that it doesn’t comply with project policies and can’t be uploaded like below:

.. image:: /_static/images/site-admin/project-policy-img-too-big.webp
   :alt: Project Policy Configuration - Do not allow images greater than 1 MB
   :width: 55 %
   :align: center

|

--------------------
Transform File Names
--------------------
CrafterCMS supports transforming filenames of uploaded files and convert the filenames to lower case or upper case.
Simply set **caseTransform** to either ``lowercase`` or ``uppercase`` in ``target-regex`` to convert to your required case.

The example configuration below (as seen in the default project policy configuration) converts
parenthesis ( ``(`` and ``)`` ) and spaces in filenames to a dash ( ``-`` )
and lower cases all the letters in filenames for files uploaded to the ``/static-assets/`` folder .

.. code-block:: xml

   <statement>
     <target-path-pattern>/static-assets/.*</target-path-pattern>
     <permitted>
       <path>
         <source-regex>[\(\)\s]</source-regex>
         <target-regex caseTransform="lowercase">-</target-regex>
       </path>
     </permitted>
   </statement>

Whenever a user uploads a file with upper case letters or spaces and parenthesis in the filename, in the
``/static-assets/`` folder, the user will see a message on the screen informing them that it doesn’t comply
with project policies and will be asked if they would like to continue upload with the suggested name like below:

.. image:: /_static/images/site-admin/project-policy-convert-to-lower-case.webp
   :alt: Project Policy Configuration - Convert filenames to lower case
   :width: 55 %
   :align: center
