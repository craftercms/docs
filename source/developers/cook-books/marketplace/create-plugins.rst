:is-up-to-date: True

.. index:: Create Plugins for the Crafter Marketplace

.. _marketplace_create_plugins:

==========================================
Create Plugins for the Crafter Marketplace
==========================================

----------------
Types of plugins
----------------

- ``blueprint``: This type of plugin can be used as a template to create sites, it includes support for parameters
  to allow dynamic sites that use API keys or passwords for external services. For more information about creating
  blueprints you can follow this guide: :ref:`create-a-blueprint`.

- ``site``: This type of plugin can be used to add features in existing sites, it can include authoring and delivery
  extensions. For more information about creating site plugins you can follow this guide: :ref:`create-a-site-plugin`

.. _submit-plugin-to-marketplace:

---------------
Submit a plugin
---------------

    .. note:: At this moment there is only one method for submitting plugins, but others will be added in the future

^^^^^^^^^^
GitHub App
^^^^^^^^^^

The Crafter Marketplace provides a very simple way of publishing plugins from a GitHub repository, once your plugin
is ready to be submitted you can follow these steps:

#.  Install the Crafter Marketplace GitHub App in your repository:
    
    #.  Open a browser and go to `<https://github.com/marketplace/crafter-marketplace>`_
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace.png
          :alt: Crafter Marketplace GitHub App
          :align: center
          :width: 80%

        |
    
    #.  Click the ``Install it for free`` button
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace-install.png
          :alt: Crafter CMS Marketplace GitHub App Installation
          :align: center
          :width: 40%

        |
    
    #.  Click the ``Complete order and begin installation`` button
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace-review.png
          :alt: Crafter Marketplace GitHub App Installation
          :align: center
          :width: 80%

        |
    
    #.  Select the repositories for your plugins and click the ``Install`` button
    
        .. figure:: /_static/images/developer/marketplace/github-marketplace-repos.png
          :alt: Crafter Marketplace GitHub App Configuration
          :align: center
          :width: 80%

        |
    
    #.  From your account settings you can:
        
        - Add or remove repositories from the application
        - Uninstall the application from your account

        |
        
        .. figure:: /_static/images/developer/marketplace/github-marketplace-settings.png
          :alt: Crafter Marketplace GitHub App Configuration
          :align: center
          :width: 80%

        |

#.  Create a tag in your repository for the version of the plugin that you will submit:
    
    ``git tag v1.0.0``

#.  Push the tag to GitHub:

    ``git push --tags``

#.  The Crafter Marketplace will automatically detect the new tag in your repository and will start processing
    a new version for your plugin (or a new plugin if it doesn't exit yet)

#.  You will receive an email notification to the address configured in your GitHub account.

.. warning:: 
  Make sure to always change the plugin version in the ``craftercms-plugin.yaml`` the next time you create a tag or
  the submit process will fail

  Also remember to set your GitHub repository to public so Crafter can pull from the repository. If you're interested in private plugins/marketplace, you'll need to switch to the Enterprise Edition of Crafter CMS.

