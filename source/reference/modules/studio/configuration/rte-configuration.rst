:is-up-to-date: True
:last-updated: 4.2.0

.. _rte-configuration:

==============================
Rich Text Editor Configuration
==============================
RTEs are more effective/productive for authors  when they are configured properly for the specific type of content the author is managing. A properly and effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a different look  and feel, different editing/menu options, available styles, components and other configurations. You can also SHARE setups between similar RTEs in your project.

This document describes how to configure various configuration options and plugins for the RTE in the :ref:`User Interface Configuration <user-interface-configuration>` file.

----------------------------------------
Common Configurations for Effective RTEs
----------------------------------------
Here are some things to consider for setting up effective RTEs:

#. The rich text editor's width should be set to the same width as the region it is intended to edit
#. Project style sheet of your project is imported so it can be applied to the RTE
#. Project styles are being applied appropriately to the markup in the RTE. Note that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configured to match the part of the project being edited
#. Toolbar is configured with only what is required for the specific use case (reducing options makes it easier for editors)
#. If plugins like ``insert layout`` and so on are enabled it should be fully configured.

|hr|

--------------------------------------------------------------------
What Out-of-the-Box Functionality Does Crafter Studio's RTE Support?
--------------------------------------------------------------------

Our RTE is based on TinyMCE 7 (https://www.tiny.cloud/) and can leverage all configurations and plugins designed for the TinyMCE editor.  You can find the documentation for these TinyMCE configurations and settings here: https://www.tiny.cloud/docs/


^^^^^^^^^^^^^^^
TinyMCE plugins
^^^^^^^^^^^^^^^
Crafter Studio uses standard TinyMCE plugins. To see the list of TinyMCE plugins available in Studio,
look for  ``plugins`` in the configuration:

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/ui.xml*
   :force:
   :emphasize-lines: 12

   <widget id="craftercms.components.TinyMCE">
     <configuration>
       <setups>
         <setup id="generic">
           <!-- Configuration options: https://www.tiny.cloud/docs/tinymce/latest/initial-configuration/ -->
           <!-- Plugins: https://www.tiny.cloud/docs/plugins/#open-source-plugins -->
           <tinymceOptions>
             <![CDATA[
               {
                 "menubar": true,
                 "theme": "silver",
                 "plugins": "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help acecode",
   ...

|

See https://www.tiny.cloud/docs/plugins/#open-source-plugins for more information on the TinyMCE plugins.


.. |rteMediaBtn| image:: /_static/images/site-admin/rte/rte-media-button.webp
                   :width: 4%

To add TinyMCE buttons to the toolbar, add the names listed in the **toolbar** tag in the TinyMCE plugin documentation to ``toolbar(n)`` in the configuration.

Crafter Studio by default adds plugins to ``toolbar1`` as seen in the example below.

.. code-block:: xml

   ...
   "toolbar1": "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | editform",
   ...

|

See https://www.tiny.cloud/docs/tinymce/latest/toolbar-configuration-options/#toolbarn for more information on the toolbar(n) option of Tiny MCE

""""""""""""""""""""""""""""""
TinyMCE Plugin Toolbar Example
""""""""""""""""""""""""""""""
Let's take a look at an example of using one of the TinyMCE plugins to add a button in the toolbar.

We'll add a media button to our editor instance to be able to embed a YouTube video:

1. Open the RTE configuration file in Studio by opening the **Sidebar**, then click on |projectTools| -> *Configuration* -> *User Interface Configuration*
2. Add ``toolbar2`` and the button name **media** like below:

   .. code-block:: xml
      :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/ui.xml*
      :emphasize-lines: 2

      "toolbar1": "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
      "toolbar2": "media",

   An **Insert/Edit Embedded Media** button |rteMediaBtn| will now be available for users of the RTE.

   .. figure:: /_static/images/site-admin/rte/rte-media-button-added.webp
      :alt: RTE Setup - Media button added to editor instance
      :width: 75%
      :align: center

   |

2. Click on the |rteMediaBtn| button to add the link to the YouTube video you'd like to embed in the RTE and to setup other parameters. In the **General** tab, fill in the **Source** field with the URL of the YouTube video you'd like to embed and finally, fill in the **Dimensions** field to the size desired. Click on the **Ok** button.

   .. figure:: /_static/images/site-admin/rte/rte-media-config.webp
      :alt: RTE Setup - Insert/Edit Embedded Media Example
      :width: 35%
      :align: center

   |

3. Save your changes, and your video should now be embedded in your page

   .. figure:: /_static/images/site-admin/rte/rte-media-preview.webp
      :alt: RTE Setup - YouTube video embedded in page, inserted through the RTE
      :width: 65%
      :align: center

   |

.. _rte-configuration-tinymce-plugin-template-example:

"""""""""""""""""""""""""""""""
TinyMCE Plugin Template Example
"""""""""""""""""""""""""""""""

Let's take a look at another example of using the TinyMCE plugin, ``template``.

The ``template`` plugin adds support for custom templates. The default editor instance only adds the menu item ``Insert template...`` under the ``Insert`` menu in the menubar. On TinyMCE, it adds a menu item ``Insert template`` under the ``Insert`` menu and a toolbar button.

Note that the open-source ``template`` plugin and associated config options have been removed in TinyMCE 7. To achieve
an equivalent TinyMCE config before the version 7 upgrade, the ``insert`` menu needs to be added/customised to the config as shown below:

.. code-block:: xml
    :emphasize-lines: 3

    "menu": {
      "tools": { "title": "Tools", "items": "tinymcespellchecker code acecode wordcount" },
      "insert": { "title": "Insert", "items": "image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor | insertdatetime" }
    },

To add a template to the RTE, simply add ``templates`` under ``setup`` in the RTE configuration.
Under ``templates``, add ``title``, ``description`` and ``content``

.. code-block:: xml
   :linenos:
   :force:
   :emphasize-lines: 12,14-20

   <widget id="craftercms.components.TinyMCE">
   <configuration>
     <setups>
       <setup id="...">
          <tinymceOptions>
            <![CDATA[
              {
                "menubar": true,
                ...
                "menu": {
                  "tools": { "title": "Tools", "items": "tinymcespellchecker code acecode wordcount" },
                  "insert": { "title": "Insert", "items": "image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor | insertdatetime" }
                },
                "templates" : [
                  {
                    "title": "Your Template Title",
                    "content": "Your template content",
                    "description": "Your Template Description "
                   },
                ]
             }
        ]]>
        ...

|

Let us take a look at an example of adding two templates to the RTE configuration

1. Open the RTE configuration file in your project by opening the **Sidebar**, then click on |projectTools| -> *Configuration* -> *User Interface Configuration*

2. Scroll down to the TinyMCE section and add in the following templates under ``<setup />``:

   .. code-block:: xml
      :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/ui.xml*
      :linenos:

      "templates" : [
        {
          "title": "Test template 1",
          "content": "Test 1",
          "description": "Test1 Description "
        },
        {
          "title": "Test template 2",
          "content": "<div class='test'><h1>This is a title</h1><p>Look at this paragraph!</p></div>",
          "description": "Test 2 description"
        }
      ]

   |

3. Save your changes. The configured templates should now be available under ``Insert templates`` of the ``Insert`` menu.

   .. figure:: /_static/images/site-admin/rte/rte-template-plugin-example.webp
      :alt: RTE Setup - RTE template plugin example in action
      :width: 65%
      :align: center

   |

See https://www.tiny.cloud/docs/tinymce/6/template/ for more information on the template plugin.

.. _rte-paste-plugin-hooks:

"""""""""""""""""""""""""""""""""""
TinyMCE paste plugin callback hooks
"""""""""""""""""""""""""""""""""""
The TinyMCE ``paste`` plugin enables you to modify the pasted content before it gets inserted into the editor (``paste_preprocess``) and before it gets inserted into the editor but after it’s been parsed into a DOM structure (``paste_postprocess``). For more information on these options, see https://www.tiny.cloud/docs/tinymce/latest/copy-and-paste/#paste_preprocess.

In order to hook into the callback (``paste_preprocess`` and ``paste_postprocess``), do the following in the RTE configuration:

1) Add the default ``paste`` plugin in ``plugins`` if not already included

   .. code-block:: xml
      :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/ui.xml*

      "plugins": "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern help acecode paste"

   |

2) Create an :ref:`external plugin <adding-external-plugins>` by following the structure of the example plugin `here <https://github.com/craftercms/studio-ui/blob/develop/static-assets/js/tinymce-plugins/craftercms_paste_extension/craftercms_tinymce_hooks.sample.js>`__. To modify the pasted content, add your code under ``paste_preprocess()`` or ``paste_postprocess()`` depending on your needs.

3) Add the plugin created in the previous step as an external plugin under the ``craftercms_tinymce_hooks`` tag.

   .. code-block:: xml
      :force:
      :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/ui.xml*

      "external_plugins": {
        "craftercms_tinymce_hooks": "/studio/1/plugin/file?siteId={site}&pluginId=craftercms&type=tinymce&name=craftercms_paste_extension&filename=samplepasteplugin.js"
      }

   |

   For more information on ``craftercms_tinymce_hooks``, see :ref:`here <extending-tinymce>`

.. note::
   When Tiny's ``paste`` plugin is included, ``craftercms_paste_cleanup`` extension is also enabled. CrafterCMS' extension performs some additional paste cleanup from what Tiny's plugin does. To disable these additional processing of the paste input, you may add ``<craftercms_paste_cleanup>false</craftercms_paste_cleanup>`` to the RTE configuration


.. _rte-add-allowable-elements:

^^^^^^^^^^^^^^^^^^^^^^^^^
Adding Allowable Elements
^^^^^^^^^^^^^^^^^^^^^^^^^
Tiny MCE allows only a certain set of elements (HTML tags) as valid (rule set) by default in the code editor and will strip elements not in the allowable list  when it outputs its HTML. For example, if you try adding in the ``<script />`` element , or the ``<iframe />`` element, it will be stripped out of the HTML output. To add specific elements that should also be valid, in addition to the existing rule set, we use the ``extended_valid_elements`` in the RTE configuration. Simply add the elements you would like added to the existing rule set in the ``<extended_valid_elements />`` tag in RTE Configuration file.

.. code-block:: xml

   "extended_valid_elements": "script mycustomtag",   <!-- elements whitelist (won't be stripped out) -->

|

"""""""""""""""""""""""""""""""
Example allowing script element
"""""""""""""""""""""""""""""""

Let's take a look at an example of adding ``<script />`` to the allowable elements (rule set). We'll be using a project created using the Website Editorial blueprint.

1. Open the RTE configuration file in Studio by opening the **Sidebar**, then click on |projectTools| -> *Configuration* -> *User Interface Configuration* then scroll down to the ``craftercms.components.TinyMCE`` widget section

2. Scroll down to ``extended_valid_elements`` and add ``script`` and save.

   .. code-block:: xml

      "extended_valid_elements": "script"   <!-- elements whitelist (won't be stripped out) -->

   |

3. We'll now add ``<script />`` in the RTE to verify it works.

   Open the **Sidebar** and edit one of the articles. Navigate to ``/articles/2020/7/`` then right click on ``New ACME Phone Released Today`` and select ``Edit``.

   Scroll down to the ``Content`` part of the form and Under ``Sections``, click on ``Add Another``

4. Click on the newly added section, then click on ``Tools`` -> ``Code Editor`` from the RTE menubar.

   .. figure:: /_static/images/site-admin/rte/rte-open-code-editor.webp
      :alt: RTE Setup - Open RTE code editor
      :width: 85%
      :align: center

   |

5. Add a script in the code editor then save the changes. This will display a dialog saying ``Hello`` when you preview the article ``New ACME Phone Released Today``

   .. code-block:: html

      <script>alert('Hello!')</script>

   |

6. Preview the page. A dialog saying ``Hello`` should pop up before the page is displayed

   .. figure:: /_static/images/site-admin/rte/rte-script-run.webp
      :alt: RTE Setup - Preview page with <script /> added in RTE
      :width: 45%
      :align: center

   |

   Please note that TinyMCE gives this warning when allowing script elements (<script />):

      .. Warning:: Allowing script elements (<script>) in TinyMCE exposes users to cross-site scripting (XSS) attacks.

"""""""""""""""""""""""""""""""""
Example allowing a custom element
"""""""""""""""""""""""""""""""""
You can also add custom elements to the rule set and can be done by simply adding the custom tag to ``extended_valid_elements``. Let's take a look at an example of adding the tag  ``mycustomtag`` to the rule set.

   .. note:: Case sensitive custom elements are not supported in TinyMCE 5. Remember to **use only lowercase for custom elements** (e.g. ``myattr`` is supported but *myAttr* is not supported).

1. Open the RTE configuration file in Studio by opening the **Sidebar**, then click on |projectTools| -> *Configuration* -> *User Interface Configuration* then scroll down to the ``craftercms.components.TinyMCE`` widget section

2. Scroll down to ``extended_valid_elements``  and add ``mycustomtag`` and save.

   .. code-block:: xml

      "extended_valid_elements": [ "script", "mycustomtag"]

   |

3. We'll now add the ``<mycustomtag />`` in the RTE to verify it works.

   Open the **Sidebar** and edit one of the articles. Navigate to ``/articles/2020/7/`` then right click on ``New ACME Phone Released Today`` and select ``Edit``.

   Scroll down to the ``Content`` part of the form and Under ``Sections``, click on one of the section, then click on ``Tools`` -> ``Code Editor`` from the RTE menubar, then use  ``<mycustomtag />``

      .. code-block:: xml

         <mycustomtag>my custom tag</mycustomtag>

      |

   .. figure:: /_static/images/site-admin/rte/rte-custom-tag-added.webp
      :alt: RTE Setup - Open RTE code editor
      :width: 85%
      :align: center

   |

.. _adding-external-plugins:

^^^^^^^^^^^^^^^^^^^^^^^
Adding External Plugins
^^^^^^^^^^^^^^^^^^^^^^^
TinyMCE provides an option to specify URLS to plugins outside the tinymce plugins directory. These external plugins allow the user to extend TinyMCE. For example, you can create custom dialogs, buttons, menu items, etc.

For more information on the Tiny MCE external_plugins option, see https://www.tiny.cloud/docs/tinymce/latest/editor-important-options/#external_plugins

The Crafter Studio developer does not have full control of the tinymce initialization. To add a custom button to the toolbar in Crafter Studio, it would be done using the external plugin route since, what TinyMCE docs advise – i.e. using the ``setup`` function to add the button – is not viable in Studio without creating a :ref:`form control plugin <building-plugins-controls>` where they'd have full control of tinymce initialization.

To add an external plugin, use ``external_plugins`` in the RTE configuration.
Use the Crafter Studio API that gets a file for a given plugin, the getPluginFile API found here :base_url:`getPluginFile <_static/api/studio.html#tag/plugin/operation/getPluginFile>` to get the Tiny MCE external plugin file to pass to the RTE.

"""""""""""""""""""""""
Example External Plugin
"""""""""""""""""""""""
Let's take a look at an example of a simple external plugin that creates a custom button which inserts text in the RTE.
We'll load our external plugin (a custom button) and add it to the RTE's toolbar. For our example, we'll be using a site created using the empty blueprint named ``hello``.

1. Open the RTE configuration file in Studio by opening the **Sidebar**, then click on |projectTools| -> *Configuration* -> *User Interface Configuration* then scroll down to the ``craftercms.components.TinyMCE`` widget section

2. We'll add the configuration for TinyMCE to load the plugin using Crafter Studio's getPluginFile API. We achieve this by using  ``external_plugins`` and adding child tags with the id of the plugin as tag name and the target URL as the tag's content |br|

   .. code-block:: xml
      :force:

      "external_plugins": {
        "my_button": "/studio/1/plugin/file?siteId={site}&pluginId=my_button&type=tinymce&name=my_button&filename=plugin.js"
      }

   |

   where:

      {site}: a macro that inserts the current siteId


3. Add the custom button we're creating to the toolbar of the RTE. Scroll to the ``toolbar(n)`` tag and add the custom button we are creating ``my_button`` to ``toolbar2``

   .. code-block:: xml

      "toolbar2": "my_button"

   |

4. Finally, we'll create our plugin file and add it in to Studio. See :ref:`plugins` for more information on creating a Crafter Studio plugin.

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

   * Remember to commit the new file so Studio will pick it up by doing a ``git add`` then a ``git commit``. Whenever you edit directly in the filesystem, you need to commit your changes to ensure they are properly reflected.

5. Let's see the TinyMCE external plugin we created in action.

   Edit the ``Home`` page by opening the ``Sidebar`` then under ``Pages``, right-click on ``Home``, then select edit. |br|
   Scroll down to the ``Main Content`` section of the form to view the RTE. Notice that the button we created is in the toolbar.

   .. figure:: /_static/images/site-admin/rte/rte-custom-button-added.webp
      :alt: RTE showing custom button
      :width: 85%
      :align: center

   |

   Click on our custom button in the RTE ``My Button``, and the line *Content added from my button.* will be inserted into the RTE

   .. figure:: /_static/images/site-admin/rte/rte-custom-button-clicked.webp
      :alt: RTE custom button clicked - text inserted in RTE
      :width: 85%
      :align: center

   |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding support for valid child elements within a parent element
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TinyMCE provides an option to control what child elements can exist within specified parent elements.
By adding/removing child elements that can exist within a parent element, you can force which elements are valid children of the parent element.

To add/remove child elements to the list of valid child elements, add/remove the element in the **valid_children** tag in the RTE Configuration file. To add a child element to a parent element, use a ``+`` before the parent element then enclose in square brackets the child element/s you want to add e.g. ``+a[div|p]``. To remove a child element, use a ``-`` before the parent element then enclose in square brackets the child element/s you want to remove,  e.g. ``-a[img]``. You can add multiple parent elements by using a comma separated list of parents with elements that should be added/removed as valid children

   .. code-block:: xml
      :caption: *Example adding/removing elements for the specified parent*

      "valid_children" : "+body[style],-body[div],p[strong|a|#text]"

   |

The example above shows you how to add **style** as a valid child of **body** and remove **div** as a valid child. It also forces only *strong* and **a** and *text contents* to be valid children of **p**.


For more information on the TinyMCE ``valid_children`` option, see https://www.tiny.cloud/docs/tinymce/latest/content-filtering/#valid_children

"""""""""""""""""""""""""""""""""""""""""""""""""""""
Example adding valid child elements to parent element
"""""""""""""""""""""""""""""""""""""""""""""""""""""
Let's take a look at an example of how to add **div** and *text content* as valid children of **a** (html anchor) using the website editorial blueprint.

1. Open the RTE configuration file in Studio by opening the **Sidebar**, then click on |projectTools| -> *Configuration* -> *User Interface Configuration* then scroll down to the ``craftercms.components.TinyMCE`` widget section

2. Add ``valid_children`` and add **div** and text contents as child elements of **a** and save.

   .. code-block:: xml
      :caption: *RTE Configuration File*

      "valid_children": "+a[div|#text]"

   |

3. We'll now disable ``Force Root Block p Tag`` and ``Force p tags New Lines`` so that markup we enter in the RTE code editor will remain unchanged after saving your changes. Setting the ``Force Root Block p Tag``  option to false will never produce **p** tags on enter, or, automatically it will instead produce **br** elements and Shift+Enter will produce a **p**.

   Open the *Article* content type by opening the **Sidebar**, then click on |projectTools| -> *Content Types* -> *Article* -> *Open Type*.
   Scroll down to the ``Sections Repeating Group`` field, then click on the ``section_html`` field, which is an RTE.

   In the ``Properties Explorer`` on the right, remove the check mark on the property ``Force Root Block p Tag`` and ``Force p tags New Lines``.

4. We'll now add markup in the RTE to test that **div** is now allowed to be a child element (nested) of parent element **a**.

   Open the **Sidebar** then click on *Site Explorer* and edit one of the articles. Navigate to ``/articles/2020/7/`` then right click on ``New ACME Phone Released Today`` and select ``Edit``.

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

   After saving your changes, preview the page and it should now display an image and text that's a link. Re-open the RTE code editor and verify that the markup you inputted is unchanged.

   .. figure:: /_static/images/site-admin/rte/rte-add-child-element-ex.webp
      :alt: RTE div child element added
      :width: 85%
      :align: center

   |

|hr|

---------------------
Creating an RTE Setup
---------------------

The RTE's configuration file looks like this:

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/ui.xml*
   :linenos:
   :emphasize-lines: 7

   <?xml version="1.0" encoding="UTF-8"?>
   <siteUi>
     ...
     <widget id="craftercms.components.TinyMCE">
        <configuration>
          <setups>
            <setup id="generic">
              <!-- Configuration options: https://www.tiny.cloud/docs/tinymce/latest/initial-configuration/ -->
              <!-- Plugins: https://www.tiny.cloud/docs/tinymce/latest/plugins/#open-source-plugins -->
              <tinymceOptions>
                <![CDATA[
                  {
                    "menubar": true,
                    "theme": "silver",
                    "plugins": "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern help acecode paste",
                    "extended_valid_elements": "",
                    "valid_children": "",
                    "toolbar1": "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
                    "code_editor_wrap": false,
                    "toolbar_sticky": true,
                    "image_advtab": true,
                    "encoding": "xml",
                    "relative_urls": false,
                    "remove_script_host": false,
                    "convert_urls": false,
                    "remove_trailing_brs": false,
                    "media_live_embeds": true,
                    "autoresize_on_init": false,
                    "autoresize_bottom_margin": 0,
                    "menu": {
                      "tools": { "title": "Tools", "items": "tinymcespellchecker code acecode wordcount" },
                      "insert": { "title": "Insert", "items": "image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor | insertdatetime" }
                      },
                      "automatic_uploads": true,
                      "file_picker_types":  "image media file",
                      "paste_data_images": true,
                      "templates": [],
                      "content_css": [],
                      "content_style": "body {}",
                      "contextmenu": false
                    }
                  ]]>
                </tinymceOptions>
              </setup>
            </setups>
          </configuration>
        </widget>
        ...

|

You can access the ``RTE Configuration`` file by going to the **Sidebar** then clicking on  |projectTools|. In the **Project Tools**, click on **Configuration**, then from the list, select ``User Interface Configuration``. Scroll down to the ``craftercms.components.TinyMCE`` widget section.

.. figure:: /_static/images/site-admin/rte/rte-setup-config-file-access.webp
   :alt: RTE Setup - Open RTE Configuration File in Studio
   :align: center
   :width: 80%

|

Inside the ``<setups>`` tag, there can be multiple ``<setup>`` tags. Each setup represents a possible RTE configuration that can be specified to be used by a RTE control. To add your own configuration, create a new ``<setup>`` tag. Each ``<setup>`` tag contains:

* An ``<id>`` tag with the name that must be specified for an RTE control to use this configuration.
* An ``<tinymceOptions>`` tag containing TinyMCE Configuration options (see https://www.tiny.cloud/docs/tinymce/latest/initial-configuration/ for more information) and plugins (see https://www.tiny.cloud/docs/tinymce/latest/plugins/#open-source-plugins for more information)

|hr|

------------------------------------------
Attaching an RTE in a Form to an RTE Setup
------------------------------------------
To attach an RTE setup to an RTE in a form, open the content type that you want to add an RTE to, then go to the **Properties Explorer** and click on RTE Configuration and type in an RTE setup name.

.. figure:: /_static/images/site-admin/rte/rte-setup-form.webp
   :alt: RTE Setup - Add an RTE in the Form
   :align: center

|

In the image above, the RTE setup name used is **generic**. Please see the section above on how to create an RTE Setup, where the example shows an RTE Setup named **generic**.

|hr|

------------------------------------------------------
Inserting Links to Pages in the Rich Text Editor (RTE)
------------------------------------------------------
Users sometimes need to link to a page in the site to selected text in their document.
This section details how to setup the Rich Text Editor (RTE) to allow a user to browse or search for pages and insert links to them.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Basic Setup and Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#. Open the content type with the Rich Text Editor (RTE) to be setup. Open the **Sidebar** and click on |projectTools| and select **Content Types**. Select the content type with the RTE you'd like to setup, then click on the **Open Type** button.
#. Setup the data source to select a page from the site. From the content model definition, go to the **Data Sources** panel and drag ``File Browse`` to the the ``Data Sources`` section of the form and fill in the following properties:

   * Title : Data source title to show on the form e.g. ``Pages``
   * Name : Name of variable to store the final result in e.g. ``pages``
   * Repository Path : Path where to browse the pages from e.g. ``/site/website``

#. Bind the data source setup above to the RTE. From the content model definition, click on the RTE you want to be able to browse or search for pages and insert links to them. Next, go to the **Properties Explorer** panel and scroll to the ``File Manager`` property. Put a check mark on the box next to the data source previously setup to bind it to the RTE.

#. Click on the **Save** button to save your changes. The RTE is now setup to allow a user to browse or search for pages and insert links to them.

^^^^^^^
Example
^^^^^^^
Let's take a look at an example using a site created using the ``Website Editorial`` blueprint. We will setup the RTE in the ``Article`` content type to allow a user to browse or search for pages and insert links to them. We will first setup the RTE, then see it in action.

#. Open the content type with the Rich Text Editor (RTE) to be setup. Open the **Sidebar** and click on |projectTools| and select **Content Types**. Click on **Open Existing Type**, and select the content type ``Article`` then click on the **Open Type** button.

#. Setup the data source to select a page from the site. From the content model definition, go to the **Data Sources** panel and drag ``File Browse`` to the ``Data Sources`` section of the form.

   .. figure:: /_static/images/developer/rte-add-file-browse-ds.webp
      :alt: Allow user to browse pages and insert link - add "File Browse" data source
      :width: 75%
      :align: center

   |

   Fill in the following properties:

   * Title : Pages
   * Name : pages
   * Repository Path : /site/website

   .. figure:: /_static/images/developer/rte-setup-ds-for-page-link.webp
      :alt: Allow user to browse pages and insert link - data source setup
      :width: 75%
      :align: center

   |

#. Bind the data source setup above to the RTE. From the content model definition, click on the RTE ``Section``. Next, go to the **Properties Explorer** panel and scroll to the ``File Manager`` property. Put a check mark on the box next to ``Pages``, the data source previously setup, to bind it to the RTE.

   .. figure:: /_static/images/developer/rte-link-bind-ds.webp
      :alt: Allow user to browse pages and insert link - bind the data source to RTE
      :width: 75%
      :align: center

   |

#. Click on the ``Save`` button.

Let's now take a look at the data source we setup and bound to the RTE in action.

#. Preview the article ``Coffee is Good for Your Health`` by either opening the **Sidebar** and navigating to ``/articles/2016/6/coffee-is-good-for-your-health`` or, from the ``Home`` page, click on the ``Health`` category, then click on ``Coffee is Good for Your Health``

#. Edit the article, then scroll down to the ``Section``
#. Select a word in the RTE. For our example, let's highlight the first word, ``Class``, then click on ``Insert/edit link`` from the toolbar

   .. figure:: /_static/images/developer/rte-select-word.webp
      :alt: Allow user to browse pages and insert link - select "Class" then click on "Insert/edit link"
      :width: 75%
      :align: center

   |

#. Click on the button next to ``URL`` then select ``Pages``. This is the data source we setup.

   .. figure:: /_static/images/developer/rte-insert-edit-link.webp
      :alt: Allow user to browse pages and insert link - Click on button next to "URL" then click on "Pages"
      :width: 35%
      :align: center

   |

#. Select a page to link to. We will link the page ``/article/2017/2/top-romantic-valentine-movies`` to the selected text in our RTE

   .. figure:: /_static/images/developer/rte-select-page-to-link-to.webp
      :alt: Allow user to browse pages and insert link - Click on button next to "URL" then click on "Pages"
      :width: 55%
      :align: center

   |

#. Save the link.

   .. figure:: /_static/images/developer/rte-save-link.webp
      :alt: Allow user to browse pages and insert link - Save the link"
      :width: 35%
      :align: center

   |

#. The link is now setup.

   .. figure:: /_static/images/developer/rte-link-to-page-created.webp
      :alt: Allow user to browse pages and insert link - Link created on word "Class" in RTE"
      :width: 75%
      :align: center

   |

|hr|

.. _extending-tinymce:

-----------------
Extending TinyMCE
-----------------
CrafterCMS  provides a general tool for extending TinyMCE via the ``craftercms_tinymce_hooks``.  It currently allows for hooking into the following (as shown by the example `here <https://github.com/craftercms/studio-ui/blob/master/static-assets/js/tinymce-plugins/craftercms_paste_extension/craftercms_tinymce_hooks.sample.js>`__):

- ``paste_preprocess`` callback
- ``paste_postprocess`` callback
- ``setup`` function

To hook into the paste pre/post process of TinyMCE, see :ref:`here <rte-paste-plugin-hooks>`.
