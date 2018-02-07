.. _marketplace-create-plugins:

=================================================
How To Create Plugins for the Crafter Marketplace
=================================================

The CrafterCMS bundle includes an utility to easily create plugins for publishing in the Crafter
Marketplace. The plugin-maker is integrated into the Gradle build so in order to use it you only
need to execute one of the available tasks:

----------------
New Plugin Tasks
----------------

This task will create the full structure of directories required for a new plugin, all directories
will be empty and the only file that it creates is a basic plugin descriptor ``plugin.xml``.

*Example*

``./gradlew newPlugin -PpluginName=myPlugin -PpluginId=org.my.plugin``

*Parameters*

+-------------+--------------+-------------------------------------------------------------+
|| Name       || Required    || Description                                                |
+=============+==============+=============================================================+
|| pluginName || |checkmark| | Name used for the plugin folder and label in the descriptor |
+-------------+--------------+-------------------------------------------------------------+
|| pluginId   || |checkmark| | Id used for the plugin in the descriptor                    |
+-------------+--------------+-------------------------------------------------------------+

*Result*

A new folder will be created under ``craftercms/plugins`` with the name of the plugin. You can use
this folder to start building your plugin or copy existing files into it.

The basic structure for a plugin is the following:

* Root

  * plugin.xml
  * readme.md
  * resources

    * thumbnail.png
    * screenshots/*

  * src

    * config

      * engine
      * studio

    * site
    * static-assets
    * templates
    * scripts

--------------------
Package Plugin Tasks
--------------------

This task will copy all files from the specified path to create a single archive for publishing the
plugin, when the files are copied some placeholders will be replaced in all files.

*Example*

``./gradlew packagePlugin -PpluginPath=plugins/myPlugin``

*Parameters*

+-----------------+--------------+-----------------------------------------------------------------+
|| Name           || Required    || Description                                                    |
+=================+==============+=================================================================+
|| pluginPath     || |checkmark| | Full or relative path for the plugin directory                  |
+-----------------+--------------+-----------------------------------------------------------------+
|| pluginName     ||             | Name used for replacing the placeholder ``@PLUGIN_NAME@``       |
+-----------------+--------------+-----------------------------------------------------------------+
|| pluginId       ||             | Id used for replacing the placeholder ``@PLUGIN_ID@``           |
+-----------------+--------------+-----------------------------------------------------------------+
|| pluginVersion  ||             | Version used for replacing the placeholder ``@PLUGIN_VERSION@`` |
+-----------------+--------------+-----------------------------------------------------------------+
|| crafterEdition ||             | Value used for replacing the placeholder ``@CRAFTER_EDITION@``  |
+-----------------+--------------+-----------------------------------------------------------------+
|| buildNumber    ||             | Value used for replacing the placeholder ``@BUILD_NUMBER@``     |
+-----------------+--------------+-----------------------------------------------------------------+

.. NOTE::
  If no value is provided for ``pluginName``, ``pluginId``, ``pluginVersion`` or ``crafterEdition``
  the plugin descriptor will be parsed to try to get the values from the XML.
  
  If no value is provided for ``buildNumber`` a random UUID will be used.
  
  There is an additional placeholder for ``@BUILD_DATE@`` that will be always replaced with the
  current date when the task is executed.

*Result*

If all required values are provided either as parameters or in the plugin descriptor a new file
will be created under ``plugins/{pluginName}-{pluginVersion}.car``

--------------------
Publish Plugin Tasks
--------------------

This task is intended to publish a packaged plugin to the Crafter Marketplace, at this time the
only option available is to manually submit the file via email. In the future additional options
may be added to automate the process.

*Example*

``./gradlew publishPlugin``

.. code-block:: none
  
  Please send your plugin archive to the following email: plugins@craftersoftware.com
