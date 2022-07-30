
.. _marketplace-plugin-structure:

==========
Marketplace Plugin Structure
==========

The marketplace plugin structure defines a standard directory tree for your plugins which the :ref:`Crafter CLI <crafter-cli-commands>`
understands and is able to read to operate (e.g. perform the plugin installation).

- ``craftercms-plugin.yaml``: the plugin descriptor, see :ref:`craftercms-plugin-yaml-file` for details

- ``.crafter``

  - ``screenshots``

    - ``default.png`` : the default representative image of the plugin placed under the default path ``.crafter/screenshots/``

- ``authoring``: contains all files related to authoring extensions (i.e. that extend Crafter Studio)

  - ``content-types``

    - ``component``: contains configuration files for components, see :ref:`below <example-component-plugin>` for an example
    - ``page``: contains configuration files for pages

  - ``static-assets``: contains files for Studio UI plugins, see `UI Extension Directory Structure`_ for details
  - ``scripts``

    - ``classes``: contains Groovy classes
    - ``rest``: contains REST Groovy scripts

- ``delivery``: contains all files related to Crafter Engine extensions

  - ``templates``: contains Freemarker templates
  - ``static-assets``: contains binary files
  - ``scripts``

    - ``classes``: contains Groovy classes
    - ``components``: contains Groovy scripts for components
    - ``controllers``: contains Groovy controllers
    - ``filters``: contains Groovy filters
    - ``pages``: contains Groovy scripts for pages
    - ``rest``: contains Groovy REST scripts

The :ref:`copy-plugin <crafter-cli-copy-plugin>` CLI command will read your plugin descriptor and
directory structure and copy the different artifacts into their rightful place in the project.

+------------------------------------------+---------------------------------------------------------------+
| Location in the plugin structure         | Location in the project repository                            |
+==========================================+===============================================================+
| ``authoring/content-types/component/*``  | ``/config/studio/content-types/component/<plugin id path>/*`` |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/content-types/page/*``       | ``/config/studio/content-types/page/<plugin id path>/*``      |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/static-assets/*``            | ``/config/studio/static-assets/plugins/<plugin id path>/*``   |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/scripts/classes/*``          | ``/config/studio/plugins/scripts/classes/<plugin id path>/*`` |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/scripts/rest/*``             | ``/config/studio/plugins/scripts/rest/<plugin id path>/*``    |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/templates/*``                 | ``/templates/<plugin id path>/*``                             |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/static-assets/*``             | ``/static-assets/<plugin id path>/*``                         |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/classes/*``           | ``/scripts/classes/<plugin id path>/*``                       |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/components/*``        | ``/scripts/components/<plugin id path>/*``                    |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/controllers/*``       | ``/scripts/controllers/<plugin id path>/*``                   |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/filters/*``           | ``/scripts/filters/<plugin id path>/*``                       |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/pages/*``             | ``/scripts/pages/<plugin id path>/*``                         |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/rest/*``              | ``/scripts/rest/<plugin id path>/*``                          |
+------------------------------------------+---------------------------------------------------------------+

Here's an example directory structure for a project plugin:

   .. code-block:: text
      :linenos:

      {your_plugin_folder}/
        craftercms-plugin.yaml
        .crafter/
          screenshots/
            default.png
        authoring/
          static-assets/
            plugins/
              org.craftercms.sample/
                controls/
                  color-picker/
                    main.js
                    style.css
        delivery/
          scripts/
            rest/
              hello.groovy
          templates/
            head.ftl

.. _ui-extension-directory-structure:

----------------------------------
UI Extension Directory Structure
----------------------------------

Authoring extensions should use the following directory structure:

``{EXTENSION_DIRECTORY}/authoring/static-assets/plugins/{ID}/{CATEGORY}/{NAME}/``

where:

- **ID**: A directory named after the extension id (e.g. ``org.craftercms.sample``)
- **CATEGORY**: A directory named after the `type` of plugin (e.g. control, datasource, sidebar, app, lib, etc.)
- **NAME**: A directory named after the extension name

  - Extension sources and/or build output of the plugin would be placed here.
