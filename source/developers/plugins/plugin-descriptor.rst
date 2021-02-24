:orphan:

:is-up-to-date: True

.. _craftercms-plugin-yaml-file:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter CMS Plugin Descriptor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``craftercms-plugin.yaml`` file contains information for use in Crafter CMS.  We'll take a look at a file used for
a blueprint.  Here's a sample taken from the  ``craftercms-plugin.yaml`` for the Empty blueprint.

.. code-block:: yaml
    :linenos:

    # This file describes a plugin for use in Crafter CMS

    # The version of the format for this file
    descriptorVersion: 2

    # Describe the plugin
    plugin:
      type: blueprint
      id: org.craftercms.blueprint.empty
      name: Empty Blueprint
      tags:
        - blueprint
        - website
      version:
        major: 1
        minor: 0
        patch: 0
      description: |
        Simple empty blueprint
      website:
        name: Empty Blueprint
        url: https://craftercms.org
    media:
      screenshots:
        - title: Home Page
          description: Screenshot of the homepage
          url: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/.crafter/logo.svg"
    developer:
      company:
        name: Crafter Software
        email: info@craftersoftware.com
        url: https://craftersoftware.com/
    build:
      id: c3d2a5444e6a24b5e0481d6ba87901d0b02716c8
      date: 2019-01-23T00:00:00Z
    license:
      name: MIT
      url: https://opensource.org/licenses/MIT
    crafterCmsVersions:
      - major: 3
        minor: 1
        patch: 1
    crafterCmsEditions:
      - community
      - enterprise
    searchEngine: Elasticsearch

where the following fields are required:

- ``descriptorVersion`` - The version of the format for this file which is currently 2
- ``plugin.type`` - ``blueprint`` or ``site`` depending on the type of plugin you're building
- ``plugin.id`` - a unique Id that is meaningful/recognizable to people who will be using the blueprint/plugin
- ``plugin.name`` - blueprint/plugin name (For our blueprint example, it is the blueprint name shown in the
  **Choose Blueprint** screen of **Create Site**)
- ``plugin.version`` - a version number for the blueprint
- ``plugin.crafterCmsVersions`` - Crafter CMS versions that the plugin is compatible with (look in the :ref:`release-notes`
  section for the versions available), and you'll need to keep this up to date
- ``plugin.searchEngine`` - search engine your plugin requires, the only value possible at this time is``Elasticsearch``

.. note::

  For the images to be used for the ``screenshots`` in the ``craftercms-plugin.yaml`` file, we recommend
  using images with approximately a ``4:3`` aspect ratio (width to height), such as an image sized at 1200x800
