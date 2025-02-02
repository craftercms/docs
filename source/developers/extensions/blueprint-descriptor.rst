:orphan:

:is-up-to-date: True
:last-updated: 4.0.7

.. _blueprint-descriptor-file:

===============================
CrafterCMS Blueprint Descriptor
===============================

The ``craftercms-plugin.yaml`` file contains information for use in CrafterCMS.  This descriptor file contains
information about your extension, such as the license, the versions of CrafterCMS supported, and other
configurations and metadata.  In this section, we'll take a look at a blueprint descriptor file.

Below is a sample descriptor file for a blueprint:

.. code-block:: yaml
    :caption: *Sample blueprint descriptor file*
    :linenos:

    # This file describes a blueprint for use in CrafterCMS

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
           url: /studio/static-assets/images/blueprints/empty/bp_empty.png
        developer:
        company:
          name: CrafterCMS
          email: info@craftercms.com
          url: https://craftercms.com/
      license:
        name: MIT
        url: https://opensource.org/licenses/MIT
      crafterCmsVersions:
        - major: 4
          minor: 0
      crafterCmsEditions:
        - community
        - enterprise

Here are some things to note in the descriptor file:

.. list-table:: Descriptor file fields
   :widths: 15 10 50
   :header-rows: 1

   * - Field
     - Required
     - Description
   * - descriptorVersion
     - |checkmark|
     - The version of the format for this file which is currently 2
   * - plugin.type
     - |checkmark|
     - Set the value to ``blueprint``
   * - plugin.id
     - |checkmark|
     - A unique Id that is meaningful/recognizable to people who will be using the blueprint
   * - plugin.name
     - |checkmark|
     - The name displayed in the Crafter Marketplace. |br|
       Pick a unique name for your blueprint.  You can check in the Crafter Marketplace if |br|
       the name you picked does not exist yet. |br|
       It's also a best practice to provide a name for your blueprint that is meaningful or |br|
       recognizable to users.  The name can be multiple words such as ``Video Center``
   * - plugin.version
     - |checkmark|
     - The version number for the blueprint
   * - plugin.description
     -
     - Contains a short description of the blueprint and is displayed underneath the blueprint name in |br|
       the Crafter Marketplace
   * - plugin.website.url
     -
     - Can be a page for more information on your blueprint or for announcing updates, reporting bugs, etc. |br|
       from your user community.
   * - plugin.media.url
     -
     - The path to look for a representative image of the blueprint. |br|
       If ``plugin.media.url`` is not specified, the url ``../.crafter/screenshots/default.png`` is the |br|
       default path for CrafterCMS to look for a default representative image of a blueprint. |br|
       For more information on adding a default representative image for your blueprint see |br|
       :ref:`adding-default-image-for-bp`
   * - plugin.license
     -
     - The license supported by the blueprint
   * - plugin.crafterCmsVersions
     - |checkmark|
     - Contains the CrafterCMS version/s (major and minor numbers) that the blueprint is compatible with |br|
       (look in the :ref:`release-notes` section for the versions available), and remember to keep this up to date. |br| |br|

       Here's an example:

       .. code-block:: yaml

           crafterCmsVersions:
             - major: 3
               minor: 1
             - major: 4
               minor: 0

       Note that use of the full CrafterCMS version with the major, minor, and patch numbers is still supported for |br|
       backward compatibility. Remember to maintain the same version format used (either the short version or the full |br|
       version) and not mix them in a plugin version in the descriptor file.


.. note::

  For the images to be used for the ``screenshots`` in the ``craftercms-plugin.yaml`` file, we recommend
  using images with approximately a ``4:3`` aspect ratio (width to height), such as an image sized at 1200x800
