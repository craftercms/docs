:is-up-to-date: False


=========
Templated
=========

.. Intro (Building templated sites, purpose and examples)
   Content Modeling
     Pages and components
     Shared vs embedded components
   Templating
     Content Rendering API (Freemarker)
     Rendering pages
     Rendering components
   Groovy Controllers
     Page Controllers (Interceptors)
     Custom Services
       Groovy API
       Unit Testing
   Adding Experience Builder to a Project
   Page Redirects
   Security
     Securing a whole project
     Securing sections/pages
     Securing static assets
   Examples
     SAML2 intranet
     Blogs

CrafterCMS embeds FreeMarker to provide a high-performance, clean, flexible, and tolerant of syntax
variance, templating engine to render HTML directly from CrafterCMS.

It allows developers to model the content as general reusable items, and fold those into pages.
Pages aggregate content from components as needed and are associated with a FreeMarker template that
can render the final page. The choice of HTML tools and frameworks doesn't matter to CrafterCMS.
Developers can use whatever front-end technology they want. For development React, Vue, Angular, Flutter
or similar SPA, please see :ref:`here <developer-headless>`

For local development, you'll need to install CrafterCMS locally and that's best done via the local bundle. Instructions on how to do that are in :ref:`install-craftercms-via-binary-bundles`. Other options include running CrafterCMS in :ref:`Docker <local-dev-with-docker>` or installing CrafterCMS `from source <https://github.com/craftercms/craftercms>`_.
The following details building templated projects, its purpose and examples.

.. toctree::
    :maxdepth: 1
    :titlesonly:

    ../common/content-modeling/content-modeling
    ../common/content-modeling/information-architecture
    ../common/content-access
    templating
    ../common/adding-experience-builder
    ../common/security
    ../common/redirects
    ../common/servlet-filters

.. Smaller topics that are needed but not sure how to represent/wrap these yet

    ../common/working-with-sass
    ../../common/asset-processing

.. Consider adding a section for detailed topics below the bigger topics

--------------------------
Example Templated Projects
--------------------------

.. Editorial
    Pick a few BPs