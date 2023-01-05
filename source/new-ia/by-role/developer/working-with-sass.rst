:is-up-to-date: True
:since-version: 4.0.3

.. _newIa-working-with-sass-in-craftercms:

===============================
Working with Sass in CrafterCMS
===============================

.. version_tag::
   :label: Since
   :version: 4.0.3

|

CrafterCMS does not directly compile Sass to CSS, but, you can use any UI toolchain you wish to compile to CSS.

When working with Sass in CrafterCMS, you can do the following to compile your Sass code to CSS then commit the
built CSS file to Studio:

#. Create a ``sources`` folder inside of your project ``sandbox`` directory
   (e.g. ``CRAFTER_HOME/data/repos/site/PROJECT_NAME/sandbox/sources``)

   Please note that the following folders under the ``sandbox`` folder are
   not mapped to the blob stores and developers own these:

   - sources/*
   - static-assets/app/*

   |

#. Inside the ``sources`` folder, you can ``yarn init`` a UI toolchain where you ``yarn add sass`` and
   add a build script to your ``package.json``.

   |

#. Your ``yarn build``  should write the compiled output to ``sandbox/static-assets/css``

   |

#. On your pages, add your stylesheet imports, e.g. ``<link src=/static-assets/css/style.css rel=stylesheet />``

   We recommend adding a comment to indicate that the CSS files are compiled and therefore not to be edited by hand
   and to let everyone know not to touch that fragment since it's overwritten by the build script

   |

#. You can make your changes and build multiple times while previewing, just remember to git add & commit your
   compiled output into the repo when you’re done with your changes e.g.:

   .. code-block:: bash

      git add static-assets/css/{Your css files}
      git commit -m "{Add your comment here}"

   |

#. You’d repeat building and committing at the end every time you build your source

-------
Example
-------

Let's take a look at an example of a project that uses Sass.  We will be using a project created using the **Wordify
Blueprint** named **MYPROJECT** from the Marketplace.  For this example, we'll change the color of the social links
on the top bar from white to yellow.

.. image:: /_static/images/developer/working-with-sass-wordify-bp.webp
    :alt: Configurations - Open AWS Profiles Configuration
    :width: 65 %
    :align: center

Let's begin by looking at the ``package.json`` file in your project:

.. code-block:: json
   :caption: *CRAFTER_HOME/data/repos/site/MYPROJECT/sandbox/sources/scss/package.json*

   {
     "name": "scss",
     "version": "1.0.0",
     "license": "GPL-3.0-only",
     "scripts": {
       "build": "sass src/style.scss ../../static-assets/css/style.css --no-source-map --style=compressed"
     },
     "devDependencies": {
       "sass": "^1.57.1"
     }
   }

The Sass file for the project as seen above can be found under
*CRAFTER_HOME/data/repos/site/MYPROJECT/sandbox/sources/scss/src/style.scss*.  Notice that inside the file,
it compiles the Sass file into CSS and places the CSS file under ``CRAFTER_HOME/data/repos/site/MYPROJECT/sandbox/static-assets/css``.

This CSS file is imported in the ``header_include.ftl`` file under the ``templates/web/fragments`` folder of
your project:

.. code-block:: html
   :force:
   :caption: *CRAFTER_HOME/data/repos/site/MYPROJECT/sandbox/templates/web/fragments*

   <#-- Theme Style: Edit @ sources/scss and build using sass compiler -->
   <link rel="stylesheet" href="/static-assets/css/style.css">


In the Sass file, scroll down to ``.top-bar``, and change the value of ``color`` from ``$white`` to ``$yellow`` like below:

.. code-block:: scss
   :emphasize-lines: 7
   :caption: *CRAFTER_HOME/data/repos/site/MYPROJECT/sandbox/sources/scss/src/style.scss*
   :force:

   .top-bar {
      background: $primary;
      padding: 10px 0;

      .social, .search-icon {
        a {
          color: $yellow;
          opacity: .5;
          padding: 5px;
          ...

The next step we need to do is to build:

.. code-block:: bash
   :caption: *Compile Sass file into CSS*

   ➜  scss git:(master) ✗ yarn add sass
   yarn add v1.22.17
   [1/4] 🔍  Resolving packages...
   [2/4] 🚚  Fetching packages...
   [3/4] 🔗  Linking dependencies...
   [4/4] 🔨  Building fresh packages...
   success Saved lockfile.
   ...

   ➜ scss git:(master) ✗ yarn build
   yarn run v1.22.17
   $ sass src/style.scss ../../static-assets/css/style.css --no-source-map --style=compressed
   ✨  Done in 1.02s.

Then git add & commit the CSS file:

.. code-block:: bash
   :caption: *Git add & commit the newly compiled style.css file*

   ➜  sandbox git:(master) ✗ git add static-assets/css/style.css
   ➜  sandbox git:(master) ✗ git commit -m "Edit style.css"
   [master 98589a0] Edit style.css
    1 file changed, 1 insertion(+), 1 deletion(-)
    rewrite static-assets/css/style.css (88%)

Preview your project and notice that the social icons in the top bar is now colored yellow

.. image:: /_static/images/developer/working-with-sass-wordify-updated.webp
    :alt: Configurations - Open AWS Profiles Configuration
    :width: 65 %
    :align: center
