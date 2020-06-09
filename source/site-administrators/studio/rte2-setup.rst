:is-up-to-date: True

.. index:: Rich Text Editor (RTE TinyMCE 5) Setup; RTE Setup

.. _rte2-setup:

======================================
Rich Text Editor (RTE TinyMCE 5) Setup
======================================

Crafter CMS provides support for TinyMCE 5.  This section details how to setup RTE (TinyMCE 5).

--------------------------------------------------------------------------------
What Out-of-the-Box Functionality Does Crafter Studio's RTE (TinyMCE 5) Support?
--------------------------------------------------------------------------------

Our RTE is based on TinyMCE (https://www.tiny.cloud/) and can leverage all configurations and plugins designed for the TinyMCE editor.   You can find the documentation for these TinyMCE configurations and settings here: https://www.tiny.cloud/docs/

^^^^^^^^^^^^^^^
TinyMCE plugins
^^^^^^^^^^^^^^^
Crafter Studio uses standard TinyMCE plugins.  Please see https://www.tiny.cloud/docs/plugins/ for a list of available plugins.


.. |rteMediaBtn| image:: /_static/images/site-admin/rte/rte2-media-button.png
                     :width: 4%

To use the TinyMCE plugins, add the names listed in the **toolbar** tag in the plugin documentation to one of the toolbarItem tags in the configuration: ``<toolbarItems1>``, ``<toolbarItems2>``, ``<toolbarItems3>`` or ``<toolbarItems4>``.

TinyMCE Plugin Example
^^^^^^^^^^^^^^^^^^^^^^
Let's take a look at an example of using one of the TinyMCE plugins.

The default editor instance contains a menubar with most of the commonly used editing tools.  Sometimes, you want handy buttons available so you don't have to find the tool you need from the menubar.  We'll add a media button to our editor instance to be able to embed a YouTube video:

1. Add the button name **media** to one of the toolbarItem tags: ``<toolbarItems1>``.  An **Insert/Edit Embedded Media** button |rteMediaBtn| will now be available for users of the RTE.
2. Click on the |rteMediaBtn| button to add the link to the YouTube video you'd like to embed in the RTE and to setup other parameters. In the **General** tab, fill in the **Source** field with the URL of the YouTube video you'd like to embed and finally, fill in the **Dimensions** field to the size desired.  Click on the **Ok** button.

   .. figure:: /_static/images/site-admin/rte/rte2-media-config.png
      :alt: RTE Setup - Insert/Edit Embedded Media Example
      :width: 45%
      :align: center

|

3. Save your changes, and your video should now be embedded in your page

   .. figure:: /_static/images/site-admin/rte/rte-media-preview.jpg
      :alt: RTE Setup - YouTube video embedded in page, inserted through the RTE
      :width: 65%
      :align: center

|

.. _rte-add-allowable-elements:

^^^^^^^^^^^^^^^^^^^^^^^^^
Adding Allowable Elements
^^^^^^^^^^^^^^^^^^^^^^^^^

Tiny MCE allows only a certain set of elements (HTML tags) as valid (rule set) by default in the code editor and will strip elements not in the allowable list  when it outputs its HTML.  For example, if you try adding in the ``<script />`` element , or the ``<iframe />`` element, it will be stripped out of the HTML output.  To add specific elements that should also be valid, in addition to the existing rule set, we use the ``<extendedElements />`` in the RTE configuration.  Simply add the elements you would like added to the existing rule set in the ``<extendedElements />`` tag in RTE Configuration file.

.. code-block:: xml

   <extendedElements>script,mycustomtag</extendedElements>   <!-- elements whitelist (won't be stripped out) -->

|

Example allowing script element
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let's take a look at an example of adding ``<script />`` to the allowable elements (rule set).  We'll be using a site created using the Website Editorial blueprint.

1. Open the RTE (TinyMCE 5) configuration file in Studio by opening the **Sidebar**, then click on |siteConfig| -> *Configuration* -> *RTE (TinyMCE 5) Configuration*

2. Scroll down to ``<extendedElements />`` tag and add ``script`` and save.

   .. code-block:: xml

      <extendedElements>script</extendedElements>   <!-- elements whitelist (won't be stripped out) -->

   |

3. We'll now add ``<script />`` in the RTE to verify it works.

   Open the **Sidebar** and edit one of the articles.  Navigate to ``/articles/2016/7/`` then right click on ``New ACME Phone Released Today`` and select ``Edit``.

   Scroll down to the ``Content`` part of the form and Under ``Sections``, click on ``Add Another``

4. Click on the newly added section, then click on ``Tools`` -> ``Code Editor`` from the RTE menubar.

   .. figure:: /_static/images/site-admin/rte/rte-open-code-editor.png
      :alt: RTE Setup - Open RTE code editor
      :width: 85%
      :align: center

   |

5. Add a script in the code editor then save the changes.  This will display a dialog saying ``Hello`` when you preview the article ``New ACME Phone Released Today``

   .. code-block:: html

      <script>alert('Hello!')</script>

   |

6. Preview the page.  A dialog saying ``Hello`` should pop up before the page is displayed

   .. figure:: /_static/images/site-admin/rte/rte-script-run.png
      :alt: RTE Setup - Preview page with <script /> added in RTE
      :width: 45%
      :align: center

Please note that TinyMCE gives this warning when allowing script elements (<script />):

  .. Warning:: Allowing script elements (<script>) in TinyMCE exposes users to cross-site scripting (XSS) attacks.

Example allowing a custom element
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
You can also add custom elements to the rule set and can be done by simply adding the custom tag to ``<extendedElements />``.  Let's take a look at an example of adding the tag  ``mycustomtag`` to the rule set.

   .. note:: Case sensitive custom elements are not supported in TinyMCE 5.  Remember to **use only lowercase for custom elements** (e.g. ``myattr`` is supported but *myAttr* is not supported).

1. Open the RTE (TinyMCE 5) configuration file in Studio by opening the **Sidebar**, then click on |siteConfig| -> *Configuration* -> *RTE (TinyMCE 5) Configuration*

2. Scroll down to ``<extendedElements />`` tag and add ``mycustomtag`` and save.

   .. code-block:: xml

      <extendedElements>script,mycustomtag</extendedElements>   <!-- elements whitelist (won't be stripped out) -->

   |

3. We'll now add the ``<mycustomtag />`` in the RTE to verify it works.

   Open the **Sidebar** and edit one of the articles.  Navigate to ``/articles/2016/7/`` then right click on ``New ACME Phone Released Today`` and select ``Edit``.

   Scroll down to the ``Content`` part of the form and Under ``Sections``, click on one of the section, then click on ``Tools`` -> ``Code Editor`` from the RTE menubar, then use  ``<mycustomtag />``

      .. code-block:: xml

         <mycustomtag>my custom tag</mycustomtag>

      |

   .. figure:: /_static/images/site-admin/rte/rte-custom-tag-added.png
      :alt: RTE Setup - Open RTE code editor
      :width: 85%
      :align: center


---------------------
Creating an RTE Setup
---------------------

The RTE's configuration file looks like this:

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/form-control-config/rte/rte-setup-tinymce5.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
      This file configures Studio's Rich Text Editor (RTE), and it supports several configuration profiles, where the
      content model selects which profile to use for which RTE field in the forms.
    -->
    <config>
      <setup>
        <id>generic</id> <!-- This starts a profile configuration -->

        <rteStylesheets> <!-- This informs the RTE to use the CSS files -->
          <!-- <link>/static-assets/css/rte/rte.css</link> -->
        </rteStylesheets>

        <rteStyleOverride>
          body {
            <!-- styles -->
          }
        </rteStyleOverride>

        <plugins>
          print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template
    	  codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount
    	  textpattern help acecode
        </plugins>

        <extendedElements>script,mycustomtag</extendedElements>   <!-- elements whitelist (won't be stripped out) -->

        <toolbarItems1>
          formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat
        </toolbarItems1>
        <toolbarItems2></toolbarItems2>
        <toolbarItems3></toolbarItems3>
        <toolbarItems4></toolbarItems4>
      </setup>
    </config>

|

You can access the ``RTE (TinyMCE 5) Configuration`` file by going to the **Sidebar** then clicking on  |siteConfig|.  In the **Site Config**, click on **Configuration**, then from the dropdown list, select ``RTE (TinyMCE 5) Configuration``

.. figure:: /_static/images/site-admin/rte/rte2-setup-config-file-access.png
    :alt: RTE Setup - Open RTE Configuration File in Studio
    :align: center
    :width: 60%

|

Inside the ``<config>`` tag, there can be multiple ``<setup>`` tags. Each represents a possible RTE configuration that can be specified to be used by a RTE control. Each possible RTE configuration contains:

    * An ``<id>`` tag with the name that must be specified for an RTE control to use this configuration.
    * ``<rteStylesheets>`` tag that may contain multiple ``<link>`` tags. Each link tag represents a link to a CSS stylesheet that will be used so that the RTE matches the look and feel of the site.

      .. code-block:: xml

        <link>
          <loadFromPreview>true</loadFromPreview>
          <url>/static-assets/css/main.css</url>
        </link>

    * ``<rteStyleOverride>`` tag that may contain other tags for changing the looks and feel of your site.
    * ``<plugins>`` contains the plugins available to the editor.  You can specify any plugin as named in `Tiny MCE Plugins List <https://www.tiny.cloud/docs/plugins/>`_.
    * ``<toolbarItems1>`` and similar contain the toolbar buttons in the RTE. You can specify any plugin toolbar item listed in the plugins above.  They will be featured in the same order as specified here, and separators can be specified with ``|``.

------------------------------------------
Attaching an RTE in a Form to an RTE Setup
------------------------------------------

To attach an RTE setup to an RTE in a form, open the content type that you want to add an RTE to, then go to the **Properties Explorer** and click on RTE Configuration and type in an RTE setup name.

.. figure:: /_static/images/site-admin/rte/rte2-setup-form.png
    :alt: RTE Setup - Add an RTE (TinyMCE 5) in the Form
	:align: center

|

In the image below, the RTE setup name used is **generic**.  Please see the section above on how to create an RTE Setup, where the example shows an RTE Setup named **generic**.

.. figure:: /_static/images/site-admin/rte/rte2-setup-attach-config.png
    :alt: RTE Setup - Attach an RTE in a Form to an RTE Setup
	:align: center
    :width: 50%

