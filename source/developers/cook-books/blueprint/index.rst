==================
Create a Blueprint
==================

--------------------
What are Blueprints?
--------------------

Blueprints are Crafter CMS project templates.  It provides an initial structure/layout for your site containing one or more of the following: content types such as pages and components as described in :ref:`content-modeling`, static assets such as images, videos, etc., and site configuration files for managing items in the blueprint such as taxonomies (categories, segments), roles, permissions, etc.

.. image:: /_static/images/blueprint-anatomy.png
   :alt: Cook Books - Blueprint Anatomy
   :width: 65 %
   :align: center

In the blueprint that comes out of the box with Crafter CMS, Website_Editorial blueprint, it provides us with an initial structure for our site, along with the site navigation, content inheritance, taxonomies for organizing the content such as categories and segments, which was also used for targeting content, static assets such as the initial images and fonts used for the site and configuration files for managing things like the personas for targeting, the permissions for all the items in the site, the role mappings, the RTE configuration, etc.  To see more of the Website Editorial blueprint, please see :ref:`your_first_website` where we create a site based on the Website_Editorial blueprint.

As mentioned earlier, blueprints allows us to generate sites with predefined layouts, contents and configuration.  Blueprints could be a site theme or an API only site.  New blueprints can be created from a site and added into Crafter CMS allowing the creation of more sites based on the new blueprint.  In the section that follows, we will see how the Empty blueprint that comes out of the box from Crafter CMS and an existing site is used to create a new blueprint.

-------------------------------
How do I make my own Blueprint?
-------------------------------

Start by :ref:`quick_start_guide`.

Blueprints are almost the same as a site (:ref:`Warnings <blueprint-site-vs-blueprint>`). So, you can use a new site created from the ``Empty`` blueprint as the starting point for your blueprint. (See :ref:`your_first_website` but create it from the ``Empty`` blueprint).

^^^^^^^^^^^^^^^^^^^^^^^^^
Adapting an HTML template
^^^^^^^^^^^^^^^^^^^^^^^^^

If you have an existing pure HTML template (and if you don't, you can find free ones, even with commercial friendly licenses like MIT and some flavors of Creative Commons), you can adapt it into a blueprint.

.. image:: /_static/images/blueprint-sample-template-anatomy.png
	        :alt: Cook Books - Template Anatomy
	        :align: center

Generally, pure HTML templates have a file structure similar to the picture above. To start, you'll want to copy all files except for ``index.html`` and any other ``.html`` files to your site's ``static-assets`` like this:

.. image:: /_static/images/blueprint-template-static-assets.png
	        :width: 65%
	        :alt: Copy folders to static-assets
	        :align: center

HTML files will become Freemarker templates. For this cookbook, you'll see how to adapt an index.html page, then you'll be able to adapt other pages. Start by editing the main page's ftl template, and replacing its contents with the ``index.html``'s contents:

.. image:: /_static/images/blueprint-edit-freemarker.png
	        :width: 65%
	        :alt: Copy index.html contents to page ftl file.
	        :align: center

You should keep ``<#import "/templates/system/common/cstudio-support.ftl" as studio />`` at the very start, and add ``<@studio.toolSupport/>`` right before the ``body`` tag closes to have proper Studio support. Next, all resource locations are probably pointing to the wrong location. To fix this, replace every relative url that doesn't point to a page (this would include ``<link rel="stylesheet" href="`` tags for CSS files, ``<script src="`` for JS files, ``<img src="`` for image files, and ``<source src="`` for video and sound files) such that it starts with ``/static-assets/`` and points to the corresponding file.

Modify the Rich Text Editor configuration so it uses your template's stylesheets. See :ref:`rte-setup`

At this point, you should have a static page that looks just how the template is supposed to look. For every other HTML page, you have to either create a new page content type and, like with index, replace its ftl template with the page's source; or, generalize the content type, with proper content modeling, such that multiple pages share a single ftl template and vary only in the components they contain. Let's see some tips for this.

^^^^^^^^^^^^^^^^
Content Modeling
^^^^^^^^^^^^^^^^

A powerful and extensible blueprint that can be used in a variety of pages and scenarios needs proper :ref:`content-modeling`, so you have to be familiar with it before proceeding.

A good blueprint separates each meaningful chunk of HTML code into a component. For example, whether you implement an "Our Team" section using a repeating group or multiple "Teammate" child components, it still has to be a separate type that only contains information related to "Our Team". Whether it is a Component or a Page, it shouldn't contain "Product" information. Once you have identified HTML chunks with a meaning, start by moving them into their type's ``template.ftl``. Next, replace any information with a variable from the ``contentModel`` (and add the respective control to the Content Type). Unless they are extremely simple, most pages will contain child components, even if they are just a ``header`` and ``footer`` component provided by the Section Defaults.

There are some best practices to help you:

    * Prefix all your Content Type's display label with either "Component - " or "Page - " as appropriate.
    * Make use of **Section Defaults**. Most sites will have a site logo that will be used all throughout the site, this is a perfect use case for Section Defaults.

       * Additionally, since Section Defaults have inheritance mechanics, a child folder that's meant to have private pages could have it's own Section Defaults that overrides the normal site logo with a more private looking one, signalling users that they are in the intranet.
       * You can apply this similarly for headers, footers, log in floating forms, and many more.
    * Use drag and drop but keep it to a minimum. At the moment, you can't limit what kind of components can be dropped into a container, so this enormous amount of flexibility can make for a confusing user experience. Picture having a page with a group of sections, that each contains headers. If both sections and headers are drag and droppable, an user could accidentally drop a section inside another section without noticing instead of just reordering. It could be more comfortable that only sections are drag and droppable.
    * You can use label controls to add additional information to the content type's form. This is useful to add tips or additional information for advanced controls.
    * Prefer repeating groups over child components. Child components are ultimately more versatile, but if you are only going to repeat text, and that text is not going to appear outside the repeating group again, it's a better user experience to just use a repeating group.

       * Bear in mind that you can't have nested repeating groups, so only the innermost repetition can be a repeating group.
    * You can set up folders for specific content types, and you can enforce them by using ``<paths>`` in your types' config.xml. Use ``includes`` whenever you want to *whitelist* some paths, and use ``excludes`` to *blacklist* some paths, but do not mix them.  For more examples, see :ref:`content-creation-permissions-section`

        .. code-block:: xml

            <paths>
                <includes> <pattern>REG_EXP_HERE</pattern> </includes>
                OR
                <excludes> <pattern>REG_EXP_HERE</pattern> </excludes>
            </paths>

       * You can also use this to enforce single page blueprints by using ``<excludes> <pattern>^/.*</pattern> </excludes>`` in your page type's config.xml, effectively forbidding from creating a new page.
    * Ensure your blueprint supports :ref:`in-context-editing`.
    * For most sites, you'll have to override Studio's default navigation menu tags. You can do this by reading :ref:`templating-rendering-navigation`.

Above all, blueprints should be usable and simple.

---------
Packaging
---------

Suppose ``{CRAFTER_HOME}`` is the path to your Crafter installation so that it contains the startup scripts, ``apache-tomcat/`` and ``data/`` folders.

Blueprints reside in ``{CRAFTER_HOME}/data/repos/global/blueprints`` since Crafter 3.0. Each folder corresponds to a blueprint (You may notice the empty and website_editorial blueprint folders), you can start by copying the ``empty`` folder and renaming it to your blueprint’s name, like "my_blueprint".

Your site exists in ``{CRAFTER_HOME}/data/repos/sites/your-site-name``. Inside, you'll notice 2 repos, ``sandbox`` and ``published``. Inside of either of them, lie the site's folders, but since ``sandbox`` contains your site as it currently exists in your Studio preview, we'll be grabbing the files from this one. You need to move this site's folders into an external folder named as your blueprint, but avoid copying the ``.git/`` folder contained there, as it's unnecessary for the final distributable package and may even contain sensitive information.

.. note:: Don't merge folders, before copying any folder, delete the existing one so any renamed or deleted files don't persist.

.. image:: /_static/images/blueprint-package-copy-site.png
	        :width: 100%
	        :alt: Copy ``scripts/``, ``site/``, ``static-assets/``, ``templates/``
	        :align: center

In the previous screenshot, we didn't copy the ``config/`` folder. Why? (:ref:`Warnings <blueprint-site-vs-blueprint>`). You can either:

    * **Copy the config folder and modify** ``permission-mappings-config.xml`` and ``site-config.xml`` to use ``{siteName}`` again as explained in (:ref:`Warnings <blueprint-site-vs-blueprint>`)
    * **Keep config as is** and only copy the files you've modified. This will likely include the whole ``config/studio/content-types/`` folder and ``config/studio/preview-tools/components-config.xml`` for drag and drop.
    * **Keep your blueprint in a VCS** which will allow you to compare it against your changes and interactively see when to preserve the old version. This will also help you make any updates when blueprints get updated. You can either use git or a visual diff tool.

Now that you have merged your "site" with the Empty blueprint in the proper way, the resulting folder is ready to be distributed. To install, follow the next steps.


----------
Installing
----------

^^^^^^^^^^^^^^
On Crafter 3.0
^^^^^^^^^^^^^^

    #. Copy your blueprint folder into ``{CRAFTER_HOME}/data/repos/global/blueprints``.
    #. Once you do, commit the change to the global repo (``{CRAFTER_HOME}/data/repos/global/``) by using ``git``, and your blueprint will now start appearing when you try to create a new site.
    
       * Crafter 3 uses a vanilla version of Git, so regular git commands work as intended. To commit your changes so Crafter can see it, head to ``{CRAFTER_HOME}/data/repos/global/blueprints`` and git add your modified files like this

         .. code-block:: sh

            git add <filename>

         for each filename. Or, to add all at once use:

         .. code-block:: sh

	        git add --all

       * And once you are done, commit them with the following command:

         .. code-block:: sh

            git commit -m "<the commit’s description>"

       * No need to push, there’s no remote configured. You can also use any git client. Now, it will be available when you create a new site.

^^^^^^^^^^^^^^^^^^^^^
On Crafter 3.1 and on
^^^^^^^^^^^^^^^^^^^^^

.. todo:: Write guide for 3.1 and on

-------------------------------------
Editing as a Site vs Editing directly
-------------------------------------

Since a blueprint is very similar in its layout to a site, you can modify a blueprint by modifying a site created with that blueprint and then merging the changes. This has several benefits:

* You can quickly see the effects of your modifications on Studio's preview site.
* You can create components, pages, and other file types through Studio, providing you with base templates, snippets, and type-specific UIs.

.. _blueprint-site-vs-blueprint:

.. warning:: However

    * The ``config/`` folder contains multiple configuration files with the site name. In blueprints, this is generically represented with ``{siteName}``, so you must either only edit config files directly on the blueprint's filesystem, or carefully replace your preview site name with ``{siteName}`` as appropriate. Having an initial version of the blueprint (when it was just copy of the Empty blueprint before making it a site) in a git repository will be helpful for this.

       * Specifically, ``permission-mappings-config.xml`` and ``site-config.xml`` use ``{siteName}`` in a way where Studio replaces it with the site's name when creating a site. Sample files keep their ``{siteName}``.
       * ``permission-mappings-config.xml`` uses it in ``<site id="{siteName}">``
       * ``site-config.xml`` uses it in ``<wem-project>{siteName}</wem-project>`` and ``<display-name>{siteName}</display-name>``

    * Each site is made up of 2 different git repos, ``sandbox`` and ``published``. Inside of either of them, lie the site's folders and also the ``.git/`` folder. You need to move this site folders back to the blueprint folder, but avoid copying this ``.git/`` folder, as it's unnecessary for the final distributable package and may even contain sensitive information.

Remember that whenever you edit directly in the filesystem, you need to commit your changes and then "Sync from Repository" from the Site Config to ensure they are properly reflected.

Small edits after the initial development may be faster by editing the blueprint directly and testing by creating a new site.
