:is-up-to-date: True
:last-updated: 4.1.0

.. index:: Information Architecture, IA

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
    * - `/static-assets/content`
      - Typically mapped to a blob store to handle very large files. This is typically managed by content authors and contains things like ``images``, ``videos``, etc.
    * - `/static-assets/css`, `/static-assets/js`, `/static-assets/fonts`, etc.
      - CSS, JS, fonts, etc. files managed by developers
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

Content types can be configured to limit the creation of content items to certain areas in the information architecture. For example, an ``article`` content type can be limited to ``/site/website/articles/*`` or a ``carousel`` content type can be limited to ``/components/carousels/*``. This helps keep the repository clean and organized. To configure content types, please follow the guide :ref:`content-creation-permissions-section`.

^^^^^^^^^^^^
Quick Create
^^^^^^^^^^^^

The information architecture can be made easier to follow by configuring the quick create feature to create content in the right place. To configure the quick create feature, follow the :ref:`setting-up-quick-create` guide.
