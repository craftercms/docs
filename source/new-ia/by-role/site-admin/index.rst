:is-up-to-date: False
:nosearch:

.. _newIa-site-admin:

==================
Site Administrator
==================

This section details activities related to site administration in CrafterCMS. The content is oriented towards CrafterCMS administration primarily through the Crafter Studio UI.

Most configuration files can be accessed through Crafter Studio through the **Sidebar ->** |projectTools| **-> Configuration**. but can also be modified by accessing the files directly.  Please note that it is recommended that changes to configuration files be done through the Crafter Studio UI.

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

-----------------------
What is a Project/Site?
-----------------------

A project or a site is a collection of related pages/components and assets.

------------
Localization
------------

.. todo: add description here on what is localization

To configure localized content based on language:
:ref:`newIa-language-based-localized-content`

To customize how dates & times get displayed on Studio UI for a project
:ref:`newIa-studio-project-time-zone`

-------------
Project Tools
-------------

|projectTools| contains project administration tools such as Configurations, Plugin Management, Encryption Tool, etc.
The following contains more information on administration tools

.. toctree::
   :maxdepth: 3

   project-tools/index



----------------
Sidebar Cabinets
----------------

.. todo: insert picture here of sidebar cabinets and description

--------
Security
--------

----------
Composable
----------

^^^^^^^^^^^^^^^^^^^^^^^
Experience Builder (XB)
^^^^^^^^^^^^^^^^^^^^^^^
