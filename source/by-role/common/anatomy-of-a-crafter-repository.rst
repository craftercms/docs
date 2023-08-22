:is-up-to-date: False
:last-updated: 4.0.3

:orphan:

.. index:: Anatomy of a CrafterCMS Repository

.. _anatomy-of-a-craftercms-repository:

==================================
Anatomy of a CrafterCMS Repository
==================================

.. TODO introduce the main concepts, show the structure, show extension points, show example

Repository Structure::

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
                content
                    css
                    fonts
                    images
                    js
                app
            templates
                system
                web
            sources
                app

