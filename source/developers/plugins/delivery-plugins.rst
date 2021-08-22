:orphan:

:is-up-to-date: True

.. index:: Crafter CMS Delivery Site Plugins, Delivery Site Plugins, Site Plugins

.. _delivery-plugins:

=================================
Crafter CMS Delivery Site Plugins
=================================
Crafter CMS delivery site plugins allows the user to easily add/extend functionalities and features of a web app.
Examples of features/functionalities a user may want to add to their web app may be a contact form, chat bot or Google analytics.

-------------------------------
Site Plugin Directory Structure
-------------------------------

When using delivery site plugins, the files and folders location for the plugins uses a convention where the files/folders needs to go in the following location:

Templates
^^^^^^^^^
* **Plugin** : delivery/templates/PLUGIN_FILES_FOLDERS

Static Assets
^^^^^^^^^^^^^
* **Plugin** : delivery/static-assets/PLUGIN_FILES_FOLDERS

Scripts
^^^^^^^
* **Plugin** : delivery/scripts/PLUGIN_FILES_FOLDERS

where:

- **PLUGIN_FILES_FOLDERS** : Freemarker, Groovy and binary files/folders containing the plugin implementation

-------------------------------
Creating a Delivery Site Plugin
-------------------------------
Let'a take a look at how to create a delivery site plugin.

#. Create your site plugin e.g. a Freemarker, Groovy and binary files/folders
#. Create the required directory structure as outlined above, and configure the descriptor file ``craftercms-plugin.yaml`` file for the plugin

      .. code-block:: text
         :linenos:

         {your_plugin_folder}/
           craftercms-plugin.yaml
           delivery/
             {yourPluginFilesAndFolders}

      |

#. See your site plugin in action by installing your plugin via the ``crafter-cli`` command ``copy-plugin``

   Installing your site plugin to your site using the ``crafter-cli`` command ``copy-plugin``, depending on the plugin you created, will install your site plugin under the:

   * ``templates/{yourPluginId}/{yourPluginType}/{yourPluginName}`` or
   * ``static-assets/{yourPluginId}/{yourPluginType}/{yourPluginName}`` or
   * ``scripts/{yourScriptType}/{yourPluginId}/{yourPluginType}/{yourPluginName}``


-------
Example
-------

Here are some example delivery plugins available from the marketplace:

* `Tidio plugin <https://github.com/craftercms/chatbot-plugin/tree/tidio>`__ to add Tidio to a site
* `LiveChat plugin <https://github.com/craftercms/chatbot-plugin/tree/livechat>`__ to add LiveChat to a site
* `Quiq plugin <https://github.com/craftercms/chatbot-plugin/tree/quiq>`__  to add Quiq to a site
* `Cliengo plugin <https://github.com/craftercms/chatbot-plugin/tree/cliengo>`__ to add Cliengo to a site
* `Collect.chat plugin <https://github.com/craftercms/chatbot-plugin/tree/collect.chat>`__ to add Collect.chat to a site
* `LivePerson plugin <https://github.com/craftercms/chatbot-plugin>`__ to add LivePerson to a site
* `Image Carousel plugin <https://github.com/craftercms/carousel-plugin>`__ to add a highly configurable carousel plugin based on `Tiny Slider <https://github.com/ganlanyuan/tiny-slider/tree/v2.9.3>`__
* `Contact Form plugin <https://github.com/craftercms/contact-form-plugin>`__ to add one or more contact forms to your site
* `Google Analytics plugin <https://github.com/craftercms/google-analytics-plugin>`__ to add Google Analytics to your site
* `Google Maps plugin <https://github.com/craftercms/googlemaps-plugin>`__ to add Google Maps to your site
* `Google Tag Manager plugin <https://github.com/craftercms/google-tag-manager-plugin>`__ to add Google Tag Manager to your site
* `Sitemap plugin <https://github.com/craftercms/sitemap-plugin>`__ to generate a sitemap for your site
* `YouTube plugin <https://github.com/craftercms/youtube-plugin>`__ to add YouTube videos to your site
* `Redirect plugin <https://github.com/craftercms/redirect-plugin>`__ to add redirects in your site
* `Groovy sandbox security plugin <https://github.com/craftercms/script-security-plugin>`__ forked from https://github.com/jenkinsci/script-security-plugin

