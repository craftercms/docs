:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Site Administrators

.. _site-administrators:

===================
Site Administrators
===================

This section details activities related to site administration in CrafterCMS. The content is oriented towards CrafterCMS administration primarily through the Crafter Studio UI.

Most configuration files can be accessed through Crafter Studio through the **Sidebar -> |projectTools| -> Configuration**. but can also be modified by accessing the files directly.  Please note that it is recommended that changes to configuration files be done through the Crafter Studio UI.

For the project repository, the project structure looks like this::

        {REPOSITORY_ROOT}/sites/SITENAME/sandbox/
            config
                engine
                studio
                    administration
                    content-types
                    data-sources
                    dependency
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

   navigating-project-tools
   configuration
   studio-logging

|

  .. include:: /includes/scripts-templates-security.rst
