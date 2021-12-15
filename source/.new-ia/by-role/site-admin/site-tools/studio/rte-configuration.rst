:is-up-to-date: False

.. index:: Rich Text Editor (RTE) Configuration;
.. _newIa-rte-configuration:

==============================
Rich Text Editor Configuration
==============================

RTEs are more effective/productive for authors  when they are configured properly for the specific type of content the author is managing.  A properly and effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a different look  and feel, different editing/menu options, available styles, components and other configurations.  You can also SHARE setups between similar RTEs in your project.  This document will help you understand how to configure RTEs in Crafter Studio.

----------------------------------------
Common Configurations for Effective RTEs
----------------------------------------
Here are some things to consider for setting up effective RTEs:

#. The rich text editor's width should be set to the same width as the region it is intended to edit
#. Site style sheet of your site is imported so it can be applied to the RTE
#. Site styles are being applied appropriately to the markup in the RTE.  Note that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configured to match the part of the site being edited
#. Toolbar is configured with only what is required for the specific use case (reducing options makes it easier for editors)
#. If plugins like ``insert component``, ``insert layout`` and so on are enabled it should be fully configured.

--------------------------------------------------------------------------------
What Out-of-the-Box Functionality Does Crafter Studio's RTE (TinyMCE 5) Support?
--------------------------------------------------------------------------------

Our RTE is based on TinyMCE (https://www.tiny.cloud/) and can leverage all configurations and plugins designed for the TinyMCE editor.   You can find the documentation for these TinyMCE configurations and settings here: https://www.tiny.cloud/docs/

^^^^^^^^^^^^^^^
TinyMCE plugins
^^^^^^^^^^^^^^^
Crafter Studio uses standard TinyMCE plugins.  To see the list of TinyMCE plugins available in Studio, look for the ``<plugins />`` tag in the configuration:

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/form-control-config/rte/rte-setup-tinymce5.xml*

   <plugins>
     print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template
     codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount
     textpattern help acecode
   </plugins>

|

See https://www.tiny.cloud/docs/plugins/opensource/ for more information on the TinyMCE plugins.


.. |rteMediaBtn| image:: /_static/images/site-admin/rte/rte-media-button.png
                   :width: 4%

To add TinyMCE plugins to the toolbar, add the names listed in the **toolbar** tag in the TinyMCE plugin documentation to one of the toolbarItem tags in the configuration: ``<toolbarItems1>``, ``<toolbarItems2>``, ``<toolbarItems3>`` or ``<toolbarItems4>``.

See https://www.tiny.cloud/docs/configure/editor-appearance/#toolbarn for more information on the toolbar(n) option of Tiny MCE

TinyMCE Plugin Example
^^^^^^^^^^^^^^^^^^^^^^
Let's take a look at an example of using one of the TinyMCE plugins.

The default editor instance contains a menubar with most of the commonly used editing tools.  Sometimes, you want handy buttons available so you don't have to find the tool you need from the menubar.  We'll add a media button to our editor instance to be able to embed a YouTube video:

1. Open the RTE (TinyMCE 5) configuration file in Studio by opening the **Sidebar**, then click on |siteConfig| -> *Configuration* -> *RTE (TinyMCE 5) Configuration*
2. Add the button name **media** to one of the toolbarItem tags: ``<toolbarItems1>``.  An **Insert/Edit Embedded Media** button |rteMediaBtn| will now be available for users of the RTE.

   .. figure:: /_static/images/site-admin/rte/rte-media-button-added.jpg
      :alt: RTE Setup - Media button added to editor instance
      :width: 75%
      :align: center

   |

     .. note::
        On TinyMCE, buttons can be added through **toolbar(n)** or **toolbar** but the rte config only supports **toolbarItems(n)**.

        Tiny's **toolbar(n)** are available only up to 4 through our **toolbarItems{1,2,3,4}**


2. Click on the |rteMediaBtn| button to add the link to the YouTube video you'd like to embed in the RTE and to setup other parameters. In the **General** tab, fill in the **Source** field with the URL of the YouTube video you'd like to embed and finally, fill in the **Dimensions** field to the size desired.  Click on the **Ok** button.

   .. figure:: /_static/images/site-admin/rte/rte-media-config.png
      :alt: RTE Setup - Insert/Edit Embedded Media Example
      :width: 35%
      :align: center

   |

3. Save your changes, and your video should now be embedded in your page

   .. figure:: /_static/images/site-admin/rte/rte-media-preview.jpg
      :alt: RTE Setup - YouTube video embedded in page, inserted through the RTE
      :width: 65%
      :align: center

   |

.. _newIa-rte-add-allowable-elements:

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

   |

.. _newIa-adding-external-plugins:

^^^^^^^^^^^^^^^^^^^^^^^
Adding External Plugins
^^^^^^^^^^^^^^^^^^^^^^^

TinyMCE provides an option to specify URLS to plugins outside the tinymce plugins directory.  These external plugins allow the user to extend TinyMCE.  For example, you can create custom dialogs, buttons, menu items, etc.

For more information on the Tiny MCE external_plugins option, see https://www.tiny.cloud/docs/configure/integration-and-setup/#external_plugins

The Crafter Studio developer does not have full control of the tinymce initialization.  To add a custom button to the toolbar in Crafter Studio, it would be done using the external plugin route since, what TinyMCE docs advise – i.e. using the ``setup`` function to add the button – is not viable in Studio without creating a :ref:`form control plugin <building-plugins-controls>` where they'd have full control of tinymce initialization.

To add an external plugin, use the tag ``<external_plugins />`` in the RTE configuration.
Use the Crafter Studio API that gets a file for a given plugin, the getPluginFile API found here https://app.swaggerhub.com/apis/craftercms/studio/3.1.14.0#/plugin/getPluginFile to get the Tiny MCE external plugin file to pass to the RTE.

Example External Plugin
^^^^^^^^^^^^^^^^^^^^^^^
Let's take a look at an example of a simple external plugin that creates a custom button which inserts text in the RTE.
We'll load our external plugin (a custom button) and add it to the RTE's toolbar.  For our example, we'll be using a site created using the empty blueprint named ``hello``.

1. Open the RTE (TinyMCE 5) configuration file in Studio by opening the **Sidebar**, then click on |siteConfig| -> *Configuration* -> *RTE (TinyMCE 5) Configuration*

2. We'll add the configuration for TinyMCE to load the plugin using Crafter Studio's getPluginFile API. We achieve this by using the ``<external_plugins />`` tag and adding child tags with the id of the plugin as tag name and the target URL as the tag's content |br|

   .. code-block:: xml

      <external_plugins>
        <my_button><![CDATA[/studio/1/plugin/file?siteId={site}&type=tinymce&name=my_button&filename=plugin.js]]></my_button>
      </external_plugins>

   |

   where:

      {site}: a macro that inserts the current siteId


3. Add the custom button we're creating to the toolbar of the RTE.  Scroll to the ``<toolbarItems2 />`` tag and add the custom button we are creating ``my_button``

   .. code-block:: xml

      <toolbarItems2>my_button</toolbarItems2>

   |

4. Finally, we'll create our plugin file and add it in to Studio.  See :ref:`studio-plugins` for more information on creating a Crafter Studio plugin.

   * Using information from step 2 for our external plugin, create the required directory structure for the plugin file, then create our plugin file named ``plugin.js``

     .. code-block:: js
        :linenos:
        :caption: *$CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/config/studio/plugins/tinymce/my_button/plugin.js*

        (function () {

          'use strict';

          tinymce.PluginManager.add("my_button", function (editor, url) {

            function _onAction()
            {
              // Write something in the RTE when the plugin is triggered
              editor.insertContent("<p>Content added from my button.</p>")
            }

            // Define the Toolbar button
            editor.ui.registry.addButton('my_button', {
                text: "My Button",
                onAction: _onAction
            });
          });

          // Return details to be displayed in TinyMCE's "Help" plugin, if you use it
          // This is optional.
          return {
            getMetadata: function () {
              return {
                name: "My Button example",
                url: "http://exampleplugindocsurl.com"
              };
            }
          };
        })();

     |

     We recommend minimizing the ``plugin.js`` file. If your plugin is minimized, remember to change the external_plugins > my_button URL in the RTE configuration to load the minified version.

   * Remember to commit the new file so Studio will pick it up by doing a ``git add`` then a ``git commit``.  Whenever you edit directly in the filesystem, you need to commit your changes to ensure they are properly reflected.

5. Let's see the TinyMCE external plugin we created in action.

   Edit the ``Home`` page by opening the ``Sidebar`` then under ``Pages``, right-click on ``Home``, then select edit. |br|
   Scroll down to the ``Main Content`` section of the form to view the RTE.  Notice that the button we created is in the toolbar.

   .. figure:: /_static/images/site-admin/rte/rte-custom-button-added.jpg
      :alt: RTE showing custom button
      :width: 85%
      :align: center

   |

   Click on our custom button in the RTE ``My Button``, and the line *Content added from my button.* will be inserted into the RTE

   .. figure:: /_static/images/site-admin/rte/rte-custom-button-clicked.jpg
      :alt: RTE custom button clicked - text inserted in RTE
      :width: 85%
      :align: center

   |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding support for valid child elements within a parent element
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

TinyMCE provides an option to control what child elements can exist within specified parent elements.
By adding/removing child elements that can exist within a parent element, you can force which elements are valid children of the parent element.

To add/remove child elements to the list of valid child elements, add/remove the element in the **<validChildren />** tag in the RTE Configuration file.  To add a child element to a parent element, use a ``+`` before the parent element then enclose in square brackets the child element/s you want to add e.g. ``+a[div|p]``.  To remove a child element, use a ``-`` before the parent element then enclose in square brackets the child element/s you want to remove,  e.g. ``-a[img]``.  You can add multiple parent elements by using a comma separated list of parents with elements that should be added/removed as valid children

   .. code-block:: xml
      :caption: *Example adding/removing elements for the specified parent*

      <validChildren>+body[style],-body[div],p[strong|a|#text]</validChildren>

   |

The example above shows you how to add **style** as a valid child of **body** and remove **div** as a valid child. It also forces only *strong* and **a** and *text contents* to be valid children of **p**.


For more information on the TinyMCE ``valid_children`` option, see https://www.tiny.cloud/docs/configure/content-filtering/#valid_chiildren

Example adding valid child elements to parent element
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Let's take a look at an example of how to add **div** and *text content* as valid children of **a** (html anchor) using the website editorial blueprint.

1. Open the RTE (TinyMCE 5) configuration file in Studio by opening the **Sidebar**, then click on |siteConfig| -> *Configuration* -> *RTE (TinyMCE 5) Configuration*

2. Scroll down to the ``<validChildren />`` tag, uncomment it and add **div** and text contents as child elements of **a** and save.

   .. code-block:: xml
      :caption: *RTE (TinyMCE 5) Configuration File*

      <validChildren>+a[div|#text]</validChildren>

   |

3. We'll now disable ``Force Root Block p Tag`` and ``Force p tags New Lines`` so that markup we enter in the RTE code editor will remain unchanged after saving your changes.  Setting the ``Force Root Block p Tag``  option to false will never produce **p** tags on enter, or, automatically it will instead produce **br** elements and Shift+Enter will produce a **p**.

   Open the *Article* content type by opening the **Sidebar**, then click on |siteConfig| -> *Content Types* -> *Article* -> *Open Type*.
   Scroll down to the ``Sections Repeating Group`` field, then click on the ``section_html`` field, which is an RTE.

   In the ``Properties Explorer`` on the right, remove the check mark on the property ``Force Root Block p Tag`` and ``Force p tags New Lines``.

4. We'll now add markup in the RTE to test that **div** is now allowed to be a child element (nested) of parent element **a**.

   Open the **Sidebar** then click on *Site Explorer* and edit one of the articles.  Navigate to ``/articles/2020/7/`` then right click on ``New ACME Phone Released Today`` and select ``Edit``.

   Scroll down to the ``Content`` part of the form and under ``Sections``, click on ``Add Another``.

   Click on the newly added section, then click on ``Tools`` -> ``Code Editor`` from the RTE menubar, then add the following:

      .. code-block:: xml

         <a href="#">
           <div class="nesting_test_div">
             <img src="/static-assets/images/castle-pic.jpg" alt="" />
             <div class="nesting_test" title="Testing nesting elements">This is a test for nesting elements</div>
           </div>
         </a>

      |

   After saving your changes, preview the page and it should now display an image and text that's a link.  Re-open the RTE code editor and verify that the markup you inputted is unchanged.

   .. figure:: /_static/images/site-admin/rte/rte-add-child-element-ex.jpg
      :alt: RTE div child element added
      :width: 85%
      :align: center

   |



---------------------
Creating an RTE Setup
---------------------

The RTE's configuration file looks like this:

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/form-control-config/rte/rte-config.xml*
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

You can access the ``RTE (TinyMCE 5) Configuration`` file by going to the **Sidebar** then clicking on  |siteConfig|.  In the **Site Config**, click on **Configuration**, then from the list, select ``RTE (TinyMCE 5) Configuration``

.. figure:: /_static/images/site-admin/rte/rte-setup-config-file-access.jpg
   :alt: RTE Setup - Open RTE Configuration File in Studio
   :align: center
   :width: 80%

|

Inside the ``<config>`` tag, there can be multiple ``<setup>`` tags. Each represents a possible RTE configuration that can be specified to be used by a RTE control. To add your own configuration, create a new ``<setup>`` tag.  Each ``<setup>`` tag contains:

* An ``<id>`` tag with the name that must be specified for an RTE control to use this configuration.
* ``<rteStylesheets>`` tag that may contain multiple ``<link>`` tags. Each link tag represents a link to a CSS stylesheet that will be used so that the RTE matches the look and feel of the site.

  .. code-block:: xml

     <link>
       <loadFromPreview>true</loadFromPreview>
       <url>/static-assets/css/main.css</url>
     </link>

* ``<rteStyleOverride>`` tag that may contain other tags for changing the looks and feel of your site.
* ``<plugins>`` contains the plugins available to the editor.  You can specify any plugin as named in `Tiny MCE Plugins List <https://www.tiny.cloud/docs/plugins/>`_.  Separate items from one another with a space " ".
* ``<toolbarItems1>`` and similar contain the toolbar buttons in the RTE. You can specify any plugin toolbar item listed in the plugins above.  They will be featured in the same order as specified here, and separators can be specified with ``|``.   Separate toolbar items as well as ``|`` separators from one another with a space " ".

------------------------------------------
Attaching an RTE in a Form to an RTE Setup
------------------------------------------

To attach an RTE setup to an RTE in a form, open the content type that you want to add an RTE to, then go to the **Properties Explorer** and click on RTE Configuration and type in an RTE setup name.

.. figure:: /_static/images/site-admin/rte/rte-setup-form.jpg
   :alt: RTE Setup - Add an RTE (TinyMCE 5) in the Form
   :align: center

|

In the image above, the RTE setup name used is **generic**.  Please see the section above on how to create an RTE Setup, where the example shows an RTE Setup named **generic**.
