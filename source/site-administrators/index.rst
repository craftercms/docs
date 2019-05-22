:is-up-to-date: True

.. index:: Site Administrators

.. _site-administrators:

===================
Site Administrators
===================

This section details activities related to site administration in Crafter CMS. The content is oriented towards Crafter CMS administration primarily through the Crafter Studio UI.

Most configuration files can be accessed through Crafter Studio through the **Sidebar -> Site Config -> Configuration**. but can also be modified by accessing the files directly.  Please note that it is recommended that changes to configuration files be done through the Crafter Studio UI.

For the site repository, the site structure looks like this::

        {REPOSITORY_ROOT}/sites/SITENAME/sandbox/
            config
                engine
                studio
                    administration
                    content-types
                    context-nav
                    data-sources
                    dependency
                    environment
                    form-control-config
                    preview-tools
                    targeting
                    workflow
            scripts
                classes
                components
                pages
                rest
            site
                components
                taxonomy
                website
            static-assets
                css
                fonts
                images
                js
            templates
                system
                web


Here are the topics covered in this section:

.. toctree::
   :maxdepth: 2

   users-groups-management
   configuration
   studio-logging
