:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:

.. index:: Information Architecture

.. _newIa-information-architecture:

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

``/static-assets/content`` is typically mapped to a blob store and managed by content authors and contains things like ``images``
``/static-assets/css`` or js, ... is managed by developers
``static-assets/app`` is where deployed SPA applications end up


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
