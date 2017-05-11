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

Blueprints are almost the same as a site (:ref:`Warnings <blueprint-site-vs-blueprint>`). So, you can use a new site created from the ``Empty`` blueprint as the starting point for your blueprint. (See :ref:`your_first_website` but create it from the ``Empty`` blueprint)

---------
Packaging
---------

Suppose ``{CRAFTER_HOME}`` is the path to your Crafter installation so that it contains the startup scripts, ``apache-tomcat/`` and ``data/`` folders.

Blueprints reside in ``{CRAFTER_HOME}/data/repos/global/blueprints`` since Crafter 3.0. Each folder corresponds to a blueprint (You may notice the empty and website_editorial blueprint folders), you can start by copying the ``empty`` folder and renaming it to your blueprint’s name, like "my_blueprint".

Your site exists in ``{CRAFTER_HOME}/data/repos/sites/your-site-name``. Inside, you'll notice 2 repos, ``sandbox`` and ``published``. Inside of either of them, lie the site's folders, but since ``sandbox`` contains your site as it currently exists in your Studio preview, we'll be grabbing the files from this one. You need to move this site's folders into an external folder named as your blueprint, but avoid copying the ``.git/`` folder contained there, as it's unnecessary for the final distributable package and may even contain sensitive information.

.. note:: Before copying any folder, delete the existing one so any renamed or deleted files don't persist.

.. image:: /_static/images/blueprint-package-copy-site.png
	        :width: 100%
	        :alt: Copy ``scripts/``, ``site/``, ``static-assets/``, ``templates/``
	        :align: center

In the previous screenshot, we didn't copy the ``config/`` folder. Why? (:ref:`Warnings <blueprint-site-vs-blueprint>`). You can either:

    * **Copy the config folder and modify** ``permission-mappings-config.xml`` and ``site-config.xml`` to use ``{siteName}`` again as explained in (:ref:`Warnings <blueprint-site-vs-blueprint>`)
    * **Keep config as is** and only copy the files you've modified. This will likely include the whole ``config/studio/content-types/`` folder and ``config/studio/preview-tools/components-config.xml`` for drag and drop.
    * **Keep your blueprint in a VCS** which will allow you to compare it against your changes and interactively see when to preserve the old version. This will also help you make any updates when blueprints get updated. You can either use git or a visual diff tool.


^^^^^^^^^^^^^^
On Crafter 3.0
^^^^^^^^^^^^^^

Edit any files as desired. You can either edit them directly with a text editor, or with the help of Crafter Studio as detailed in :ref:`blueprint-edit`.

Once you do, commit the change to the global repo (``{CRAFTER_HOME}/data/repos/global/``) by using ``git``, and your blueprint will now start appearing when you try to create a new site.

Committing Changes
^^^^^^^^^^^^^^^^^^^^^^^

Crafter 3 uses a vanilla version of Git, so regular git commands work as intended. To commit your changes so Crafter can see it, head to ``{CRAFTER_HOME}/data/repos/global/blueprints`` and git add your modified files like this

.. code-block:: sh

	git add <filename>

for each filename. Or, to add all at once use:

.. code-block:: sh

	git add --all

And once you are done, commit them with the following command:

.. code-block:: sh

    git commit -m "<the commit’s description>"

No need to push, there’s no remote configured. You can also use any git client. Now, it will be available when you create a new site.

^^^^^^^^^^^^^^^^^^^^^
On Crafter 3.1 and on
^^^^^^^^^^^^^^^^^^^^^

.. todo:: Write guide for 3.1 and on

.. _blueprint-edit:

===============================
Editing a Blueprint with Studio
===============================

Since a blueprint is very similar in its layout to a site, you can modify a blueprint by modifying a site created with that blueprint and then merging the changes. This has several benefits:

* You can quickly see the effects of your modifications on Studio's preview site.
* You can create components, pages, and other file types through Studio, providing you with base templates, snippets, and type-specific UIs.

.. _blueprint-site-vs-blueprint:

.. warning:: However

    * The ``config/`` folder contains multiple configuration files with the site name. In blueprints, this is generically represented with ``{siteName}``, so you must either only edit config files directly on the blueprint's filesystem, or carefully replace your preview site name with ``{siteName}`` as appropriate (having an initial version of the blueprint in a git repository will be helpful for this.)

       * Specifically, ``permission-mappings-config.xml`` and ``site-config.xml`` use ``{siteName}`` in a way where Studio replaces it with the site's name when creating a site. Sample files keep their ``{siteName}``.
       * ``permission-mappings-config.xml`` uses it in ``<site id="{siteName}">``
       * ``site-config.xml`` uses it in ``<wem-project>{siteName}</wem-project>`` and ``<display-name>{siteName}</display-name>``

    * Each site is made up of 2 different git repos, ``sandbox`` and ``published``. Inside of either of them, lie the site's folders and also the ``.git/`` folder. You need to move this site folders back to the blueprint folder, but avoid copying this ``.git/`` folder, as it's unnecessary for the final distributable package and may even contain sensitive information.

Remember that whenever you edit directly in the filesystem, you need to commit your changes and then "Sync from Repository" from the Site Config to ensure they are properly reflected.
