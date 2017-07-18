===================
Site Administrators
===================

This section details activities related to site administration in Crafter CMS. The content is oriented towards Crafter CMS administration primarily through the Crafter Studio UI.

Most configuration files can be accessed through Crafter Studio through the **Sidebar -> Site Config -> Configuration**. but can also be modified by accessing the files directly.  Please note that it is recommended that changes to configuration files be done through the Crafter Studio UI.

For the site repository, the site structure looks like this::

        {REPOSITORY_ROOT}/sites/SITENAME/
            config
                studio
                    administration
                    analytics
                    content-types
                    context-nav
                    deployment
                    environment-overrides
                    form-control-config
                    preview-tools
                    search
                    targeting
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
	logging

