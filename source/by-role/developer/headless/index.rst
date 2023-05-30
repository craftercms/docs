:is-up-to-date: False
:last-updated: 4.0.0


.. _developer-headless:

========
Headless
========

CrafterCMS is natively headless.  CrafterCMS simply retrieves content that the developer models in the
modeling tool, applies actions/rules like inheritance, security, versioning, etc. and returns the
transformed content to the caller as JSON.

This section details how you can model any type of content, provide your content authors the ability to visually
author content items and then retrieve that content for your SPA, iOS, Android or other applications.

For local development, you'll need to install CrafterCMS locally and that's best done via the local bundle. Instructions on how to do that are in :ref:`install-craftercms-via-binary-bundles`. Other options include running CrafterCMS in :ref:`Docker <local-dev-with-docker>` or installing CrafterCMS `from source <https://github.com/craftercms/craftercms>`_.

.. toctree::
    :maxdepth: 1
    :titlesonly:

    ../common/content-modeling/content-modeling
    ../common/content-modeling/information-architecture
    ../common/content-access
    ../common/adding-experience-builder
    ../common/security
    ../common/redirects
    ../common/servlet-filters


.. Smaller topics that are needed but not sure how to represent/wrap these yet
    ../common/working-with-sass
    ../../common/asset-processing

.. Add something related to storing source in `/sources` optionally and refer to working with sass files (added above)

-------------------------
Example Headless Projects
-------------------------
^^^^^^^^^^^^^^^^
Single Page Apps
^^^^^^^^^^^^^^^^
.. TODO clean up

- Wordify React
- Video Center

^^^^^^^^^^^^^
Pure Headless
^^^^^^^^^^^^^

- Headless Blog
- Headless Store