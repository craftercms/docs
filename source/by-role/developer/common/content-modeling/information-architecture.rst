:is-up-to-date: False
:last-updated: 4.0.0


.. index:: Information Architecture

.. _information-architecture:

========================
Information Architecture
========================

.. Show the core structure of a CrafterCMS project (in a table)
    /site/website
    /static-assets
    /sources/
    ..

.. Section on: items: pages, components, taxonomy, static assets, scripts, templates, etc.

.. In the static assets section, discuss what assets are and discuss the options to deal with large files

.. TODO review this:
.. .. _anatomy-of-a-craftercms-repository:

.. TODO Fix below

``/static-assets/content`` is typically mapped to a blob store and managed by content authors and contains things like ``images``
``/static-assets/css`` or js, ... is managed by developers
``static-assets/app`` is where deployed SPA applications end up

.. list-table::
    :widths: 25 75
    :header-rows: 1

    * - Folder
      - Purpose
    * - `/site`
      - Project/site content
    * - `/site/website`
      - Pages (for templated/page-based sites)
    * - `/site/components`
      - Components
    * - `/site/taxonomy`
      - Taxonomy
    * - `/static-assets`
      - Static assets
    * - `/static-assets/app`
      - SPA applications
    * - `/templates`
      - Templates (FreeMarker view templates for templated sites)
    * - `/scripts`
      - Scripts (Groovy scripts, custom REST APIs, etc.)
    * - `/sources`
      - Source files (e.g. SPA, Sass, etc.)
    * - `/config`
      - Configuration files
    * - `/config/studio`
      - Studio configuration files
    * - `/config/engine`
      - Engine configuration files

--------------
Best Practices
--------------

^^^^^^^^^^^^^^^^^^^^^^^^^^
Content Type Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. Reference site-admin how to configure where content items can be created

^^^^^^^^^^^^
Quick Create
^^^^^^^^^^^^

.. how to configure quickCreate to create in the right IA
