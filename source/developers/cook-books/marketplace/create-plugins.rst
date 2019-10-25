:is-up-to-date: True

.. index:: Create Plugins for the Crafter CMS Marketplace

.. _marketplace_create_plugins:

==============================================
Create plugins for the Crafter CMS Marketplace
==============================================

----------------
Types of plugins
----------------

.. note:: At this moment there is support for only one type of plugin, but others will be added in the future

- ``blueprint``: This type of plugin can be used as a template to create sites, it includes support for parameters
  to allow dynamic sites that use API keys or passwords for external services. For more information about creating
  blueprints you can follow this guide: :ref:`create-a-blueprint`.

---------------
Submit a plugin
---------------

.. note:: At this moment there is only one method for submitting plugins, but others will be added in the future

^^^^^^^^^^
Github App
^^^^^^^^^^

The Crafter CMS Marketplace provides a very simple way of publishing plugins from a Github repository, once your plugin
is ready to be submitted you can follow these steps:

#.  Install the Crafter CMS Marketplace Github App in your repository:
    
    #.  Open a browser and go to `<https://github.com/marketplace/crafter-marketplace>`_
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace.png
          :alt: Crafter CMS Marketplace Github App
          :align: center
          :width: 80%
    
    #.  Click the ``Install it for free`` button
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace-install.png
          :alt: Crafter CMS Marketplace Github App Installation
          :align: center
          :width: 0%
    
    #.  Click the ``Complete order and begin installation`` button
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace-review.png
          :alt: Crafter CMS Marketplace Github App Installation
          :align: center
          :width: 80%
    
    #.  Select the repositories for your plugins and click the ``Install`` button
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace-repos.png
          :alt: Crafter CMS Marketplace Github App Configuration
          :align: center
          :width: 80%
    
    #.  From your account settings you can:
        
        - Add or remove repositories from the application
        - Uninstall the application from your account
        
        .. figure:: /_static/images/developer/marketplace/github-marketplace-settings.png
          :alt: Crafter CMS Marketplace Github App Configuration
          :align: center
          :width: 80%

#.  Create a tag in your repository for the version of the plugin that you will submit:
    
    ``git tag v1.0.0``

#.  Push the tag to Github:

    ``git push --tags``

#.  The Crafter CMS Marketplace will automatically detect the new tag in your repository and will start processing
    a new version for your plugin (or a new plugin if it doesn't exit yet)

#.  You will receive an email notification to the address configured in your Github account.

.. warning:: 
  Make sure to always change the plugin version in the ``craftercms-plugin.yaml`` the next time you create a tag or
  the submit process will fail



