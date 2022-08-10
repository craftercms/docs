:is-up-to-date: True
:last-updated: 4.0.1
:nosearch:

.. index:: Create a Project Blueprint, Project Blueprint

.. _newIa-create-a-blueprint:

==================
Project Blueprints
==================

----------------------------
What are Project Blueprints?
----------------------------

Project blueprints are CrafterCMS project templates.  It provides an initial set of styles, pages, behaviors, content types and more, containing one or more of the following: content types such as pages and components as described in :ref:`newIa-content-modeling`, static assets such as images, videos, etc., and project configuration files for managing items in the project blueprint such as taxonomies (categories, segments), roles, permissions, etc.

.. image:: /_static/images/blueprint/blueprint-anatomy.webp
   :alt: Cook Books - Blueprint Anatomy
   :width: 65 %
   :align: center

|

The project blueprint that comes out of the box with CrafterCMS, ``Website Editorial Blueprint``, provides us with an initial structure for our project, along with the project navigation, content inheritance, taxonomies for organizing the content such as categories and segments, which is also used for targeting content, static assets such as the initial images and fonts used for the project and configuration files for managing things like the segments for targeting, the permissions for all the items in the project, the role mappings, the RTE configuration, etc.  To see more of the ``Website Editorial Blueprint``, please see :ref:`newIa-your-first-editorial-project` where we create a project based on the ``Website Editorial Blueprint``.

As mentioned earlier, project blueprints allows us to generate projects with predefined layouts, contents and configuration.  Blueprints could be a project theme or an API only project.  New project blueprints can be created from a project and added into CrafterCMS allowing the creation of more projects based on the new project blueprint.  In the section that follows, we will see how the ``Empty Blueprint`` that comes out of the box from CrafterCMS and an existing project is used to create a new project blueprint.

Developers may submit their project blueprints to the `CrafterCMS Marketplace <http://marketplace.craftercms.org>`__. Users can browse the marketplace catalog where submitted project blueprints are listed, and power users of CrafterCMS can create projects based on marketplace plugins directly from the ``Create Project`` dialog in the CMS. See :ref:`newIa-submit-plugin-to-marketplace` for more information on how to submit your project blueprint to the marketplace.

---------------------------------------
How do I make my own Project Blueprint?
---------------------------------------

Start by following ``How do I install CrafterCMS`` :ref:`here <newIa-getting-started>`.

Blueprints are almost the same as a project (:ref:`Warnings <newIa-blueprint-project-vs-blueprint>`). So, you can use a new project created from the ``Empty`` project blueprint as the starting point for your project blueprint. (See :ref:`newIa-your-first-editorial-project` but create it from the ``Empty`` project blueprint).

^^^^^^^^^^^^^^^^^^^^^^^^^
Adapting an HTML template
^^^^^^^^^^^^^^^^^^^^^^^^^

If you have an existing pure HTML template (and if you don't, you can find free ones, even with commercial friendly licenses like MIT and some flavors of Creative Commons), you can adapt it into a project blueprint.

.. image:: /_static/images/blueprint/blueprint-sample-template-anatomy.webp
	        :alt: Cook Books - Template Anatomy
	        :align: center

|

Generally, pure HTML templates have a file structure similar to the picture above. To start, you'll want to copy all files except for ``index.html`` and any other ``.html`` files to your project's ``static-assets`` like this:

.. image:: /_static/images/blueprint/blueprint-template-static-assets.webp
	        :width: 45%
	        :alt: Copy folders to static-assets
	        :align: center

|

HTML files will become Freemarker templates. For this cookbook, you'll see how to adapt an index.html page, then you'll be able to adapt other pages. Start by editing the main page's ftl template, and replacing its contents with the ``index.html``'s contents:

.. image:: /_static/images/blueprint/blueprint-edit-freemarker.webp
	        :width: 45%
	        :alt: Copy index.html contents to page ftl file.
	        :align: center

|

You should keep ``<#import "/templates/system/common/crafter.ftl" as crafter />`` at the very start to have proper Studio support. Next, all resource locations are probably pointing to the wrong location. To fix this, replace every relative url that doesn't point to a page (this would include ``<link rel="stylesheet" href="`` tags for CSS files, ``<script src="`` for JS files, ``<img src="`` for image files, and ``<source src="`` for video and sound files) such that it starts with ``/static-assets/`` and points to the corresponding file.

Modify the Rich Text Editor configuration so it uses your template's stylesheets. See :ref:`newIa-rte-configuration`

At this point, you should have a static page that looks just how the template is supposed to look. For every other HTML page, you have to either create a new page content type and, like with index, replace its ftl template with the page's source; or, generalize the content type, with proper content modeling, such that multiple pages share a single ftl template and vary only in the components they contain. Let's see some tips for this.

^^^^^^^^^^^^^^^^
Content Modeling
^^^^^^^^^^^^^^^^

A powerful and extensible project blueprint that can be used in a variety of pages and scenarios needs proper :ref:`newIa-content-modeling`, so you have to be familiar with it before proceeding.

A good project blueprint separates each meaningful chunk of HTML code into a component. For example, whether you implement an "Our Team" section using a repeating group or multiple "Teammate" shared components, it still has to be a separate type that only contains information related to "Our Team". Whether it is a Component or a Page, it shouldn't contain "Product" information. Once you have identified HTML chunks with a meaning, start by moving them into their type's ``template.ftl``. Next, replace any information with a variable from the ``contentModel`` (and add the respective control to the Content Type). Unless they are extremely simple, most pages will contain shared components, even if they are just a ``header`` and ``footer`` component provided by the :ref:`newIa-section-defaults`.

Here are some best practices to help you:

    * Prefix all your Content Type's display label with either "Component - " or "Page - " as appropriate.
    * Make use of **Section Defaults**. Most projects will have a project logo that will be used all throughout the project, this is a perfect use case for Section Defaults.

       * Additionally, since Section Defaults have inheritance mechanics, a child folder that's meant to have private pages could have it's own Section Defaults that overrides the normal project logo with a more private looking one, signalling users that they are in the intranet.
       * You can apply this similarly for headers, footers, log in floating forms, and many more.
    * Use drag and drop but keep it to a minimum. At the moment, you can't limit what kind of components can be dropped into a container, so this enormous amount of flexibility can make for a confusing user experience. Picture having a page with a group of sections, that each contains headers. If both sections and headers are drag and droppable, an user could accidentally drop a section inside another section without noticing instead of just reordering. It could be more comfortable that only sections are drag and droppable.
    * You can use label controls to add additional information to the content type's form. This is useful to add tips or additional information for advanced controls.
    * Prefer repeating groups over shared/embedded components. Shared/embedded components are ultimately more versatile, but if you are only going to repeat text, and that text is not going to appear outside the repeating group again, it's a better user experience to just use a repeating group.

       * Bear in mind that you can't have nested repeating groups, so only the innermost repetition can be a repeating group.
    * You can set up folders for specific content types, and you can enforce them by using ``<paths>`` in your types' config.xml. Use ``includes`` whenever you want to *whitelist* some paths, and use ``excludes`` to *blacklist* some paths, but do not mix them.  For more examples, see :ref:`newIa-content-creation-permissions-section`

        .. code-block:: xml

            <paths>
                <includes> <pattern>REG_EXP_HERE</pattern> </includes>
                OR
                <excludes> <pattern>REG_EXP_HERE</pattern> </excludes>
            </paths>

       * You can also use this to enforce single page project blueprints by using ``<excludes> <pattern>^/.*</pattern> </excludes>`` in your page type's config.xml, effectively forbidding from creating a new page.
    * Ensure your project blueprint supports Experience Builder (xb), more information on xb :ref:`here <newIa-templated-xb>` or :ref:`here <newIa-headless-xb>`.

Above all, project blueprints should be usable and simple.

.. _newIa-section-defaults:

Section Defaults
^^^^^^^^^^^^^^^^
Section Defaults provides inherited values to all children and sibling content items.
To learn more about content inheritance see :ref:`newIa-content-inheritance` and for an example to see how Section Defaults is used in the Website Editorial project blueprint :ref:`newIa-inherit-levels-example` .

---------
Packaging
---------

Suppose ``{CRAFTER_HOME}`` is the path to your Crafter installation so that it contains the startup scripts, ``apache-tomcat/`` and ``data/`` folders.

Blueprints reside in ``{CRAFTER_HOME}/data/repos/global/blueprints`` since Crafter 3.0. Each folder corresponds to a project blueprint (You may notice the empty and 1000_website_editorial project blueprint folders), you can start by copying the ``empty`` folder and renaming it to your project blueprint’s name, like "my_blueprint".

Your project exists in ``{CRAFTER_HOME}/data/repos/sites/your-project-name``. Inside, you'll notice 2 repos, ``sandbox`` and ``published``. Inside of either of them, lie the project's folders, but since ``sandbox`` contains your project as it currently exists in your Studio preview, we'll be grabbing the files from this one. You need to move this project's folders into an external folder named as your project blueprint, but avoid copying the ``.git/`` folder contained there, as it's unnecessary for the final distributable package and may even contain sensitive information.

.. note:: Don't merge folders, before copying any folder, delete the existing one so any renamed or deleted files don't persist.

.. image:: /_static/images/blueprint/blueprint-package-copy-site.webp
	        :width: 100%
	        :alt: Copy ``scripts/``, ``site/``, ``static-assets/``, ``templates/``
	        :align: center

|

In the previous screenshot, we didn't copy the ``config/`` folder. Why? (:ref:`Warnings <newIa-blueprint-project-vs-blueprint>`). You can either:

    * **Copy the config folder and modify** ``permission-mappings-config.xml`` and ``site-config.xml`` to use ``{siteName}`` again as explained in (:ref:`Warnings <newIa-blueprint-project-vs-blueprint>`)
    * **Keep config as is** and only copy the files you've modified. This will likely include the whole ``config/studio/content-types/`` folder and ``config/studio/preview-tools/components-config.xml`` for drag and drop.
    * **Keep your project blueprint in a VCS** which will allow you to compare it against your changes and interactively see when to preserve the old version. This will also help you make any updates when project blueprints get updated. You can either use Git or a visual diff tool.

Now that you have merged your "project" with the Empty project blueprint in the proper way, the resulting folder is ready to be distributed. To install, follow the next steps.


----------
Installing
----------

#. Copy your project blueprint folder into ``{CRAFTER_HOME}/data/repos/global/blueprints``.
#. Check in your project blueprint folder if it contains a ``craftercms-plugin.yaml`` file.  Add in the file if it does not exist by copying a ``craftercms-plugin.yaml`` file from one of the default project blueprints, such as from the folder ``4000_empty``, which contains the empty project blueprint and modifying it as needed.  See :ref:`newIa-craftercms-plugin-yaml-file` for details on the file
#. Once you do, commit the change to the global repo (``{CRAFTER_HOME}/data/repos/global/``) by using ``git``, and your project blueprint will now start appearing when you try to create a new project.

   * CrafterCMS uses a vanilla version of Git, so regular Git commands work as intended. To commit your changes so Crafter can see it, head to ``{CRAFTER_HOME}/data/repos/global/blueprints`` and git add your modified files like this

     .. code-block:: sh

        git add <filename>

     for each filename. Or, to add all at once use:

     .. code-block:: sh

         git add --all

   * And once you are done, commit them with the following command:

     .. code-block:: sh

        git commit -m "<the commit’s description>"

   * No need to push, there’s no remote configured. You can also use any Git client. Now, it will be available when you create a new project.

.. _newIa-adding-default-image-for-bp:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a default image for a project blueprint
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

CrafterCMS uses a default path for CrafterCMS to look for a default representative image of a project plugin or project blueprint, the url ``../.crafter/screenshots/default.png``

In the ``Projects`` screen where your projects are listed, if your project displays an image with the message **Screenshot not Set**, this means that there is no default image  under the ``.crafter/screenshots/`` folder in your project blueprint:

.. image:: /_static/images/developer/plugins/screenshot-not-set.webp
   :alt: Plugin Descriptor - Screenshot not Set
   :width: 60%
   :align: center

|

To replace the **Screenshot not Set** image for your project blueprint, simply add an image file (e.g.  ``default.png``) under the ``.crafter/screenshots/`` folder of your project blueprint.

Let's take a look at an example of fixing the **Screenshot not Set** image for an installed project as seen in the above image.

Below are the folders/files for the project blueprint used to install the project ``Sample Site``:

.. image:: /_static/images/developer/plugins/bp-files-w-o-default-image.webp
   :alt: Plugin Descriptor - Blueprint files and folders without a default image
   :width: 30%
   :align: center

|

We'll now fix the image displayed in the ``Projects`` screen after the project blueprint is installed by adding a ``default.png``  file under the ``.crafter/screenshots/``  folder, so now, the project blueprint files/folders looks like  this:

.. image:: /_static/images/developer/plugins/bp-files-w-default-image.webp
   :alt: Plugin Descriptor - Blueprint files and folders with a default image added
   :width: 30%
   :align: center

|

When you create a project using the project blueprint we fixed above, ``Another Sample Site`` for our example, the project will now have the default image we added to the project blueprint:

.. image:: /_static/images/developer/plugins/screenshot-default-set.webp
   :alt: Plugin Descriptor - Project created using a project blueprint with a default image in ".crafter/screenshots`` folder
   :width: 60%
   :align: center

|

^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a plugin descriptor
^^^^^^^^^^^^^^^^^^^^^^^^^^

All project blueprints need to include a plugin descriptor as described in :ref:`newIa-craftercms-plugin-yaml-file`


.. _newIa-passing-parameters-to-bp:

Passing Parameters to Project Blueprints
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Some parameters may need to be passed to the project blueprint instead of left in the project blueprint, say, AWS credentials, Box credentials, CommerceTools credentials, etc.  CrafterCMS supports passing parameters to project blueprints during creation.

To add parameters to be passed to project blueprints, simply add the following to the ``craftercms-plugin.yaml`` file

.. code-block:: yaml

   parameters:
    - label: My Parameter Label
      name: myParam
      type: string
      description: My parameter
      required: true

|

where:

- ``label``: Label to display for parameter on Create Project dialog
- ``name``: Name of the parameter in *camelCase* notation
- ``type``: Type of the parameter, possible values are ``STRING`` and ``PASSWORD``.  The default is ``STRING``
- ``description``: Description of the parameter
- ``required``: Indicates whether the parameter is required.  The default is ``true``


To use the parameters in configuration files, simply use ``${plugin:PARAM_NAME}`` where PARAM_NAME is the name of the parameter.

**Example**

Let's take a look at an example of adding parameters to the **Website Editorial** project blueprint.
In our example, we will be passing AWS credentials when the project is created to be used for storing files in an S3 bucket and will setup the configuration file that will be using the passed parameters, along with the changes required in the content type and template so users can upload files to S3 once the project is up.

To store files in an S3 bucket, we'll follow :ref:`this <newIa-use-s3-to-store-assets>` guide, but instead of manually adding the AWS credentials so the user can upload files, we'll pass the AWS credentials through the project blueprint when the project is created.

#. The first thing we need to do is to add the parameters to the ``craftercms-plugin.yaml`` file of the Website Editorial project blueprint.  Open the ``craftercms-plugin.yaml`` which is under the ``{CRAFTER_HOME}/data/repos/global/blueprints/1000_website_editorial`` folder and add the following lines to the end of the file:

   .. code-block:: yaml
      :linenos:
      :caption: *{CRAFTER_HOME}/data/repos/global/blueprints/1000_website_editorial/craftercms-plugin.yaml*
      :emphasize-lines: 12-30

      # This file describes a plugin for use in CrafterCMS

      # The version of the format for this file
      descriptorVersion: 2

      # Describe the project blueprint
      plugin:
        type: blueprint
        id: org.craftercms.blueprint.editorial
        name: Website Editorial Blueprint
      ...
      parameters:
        - label: Access Key
          name: accessKey
          description: AWS Access Key
          required: true
          type: PASSWORD
        - label: Secret Key
          name: secretKey
          description: AWS Secret Key
          required: true
          type: PASSWORD
        - label: AWS Region
          name: awsRegion
          description: AWS region for the service
          required: true
        - label: Bucket Name
          name: bucketName
          description: Name of the bucket where files will be uploaded
          required: true

   |

#. Next, we'll add the ``aws.xml`` file which will contain all the parameters passed from the project blueprint which we'll use to create an S3 profile, so files can be uploaded to an S3 bucket. To access the parameters passed from the project blueprint when the project was created, simply use ``${plugin:PARAM_NAME}``, where PARAM_NAME is the name of the parameter passed through the project blueprint that you would like to use.

   Create the folder ``aws`` under ``CRAFTER_HOME/data/repos/global/blueprints/config`` then inside the newly create folder, create the file ``aws.xml``.  Add the following inside the file:

   .. code-block:: xml
      :linenos:
      :caption: *CRAFTER_HOME/data/repos/global/blueprints/config/aws/aws.xml*
      :emphasize-lines: 8-9, 11-12

      <?xml version="1.0" encoding="UTF-8"?>
      <aws>
        <version>2</version>
        <s3>
          <profile>
            <id>s3-default</id>
            <credentials>
              <accessKey>${plugin:accessKey}</accessKey>
              <secretKey>${plugin:secretKey}</secretKey>
            </credentials>
            <region>${plugin:awsRegion}</region>
            <bucketName>${plugin:bucketName}</bucketName>
          </profile>
        </s3>
      </aws>


#. Next we'll modify the content type ``Page - Article`` and the template for it, ``article.ftl`` to allow the user to select files to be uploaded like in the example :ref:`here <newIa-use-s3-to-store-assets>`.  We'll end up with two files modified.  The ``article.ftl`` and ``form-definition.xml`` files.

   .. code-block:: text
      :caption: *CRAFTER_HOME/data/repos/global/blueprints/1000_website_editorial/templates/web/pages/article.ftl*
      :linenos:

      <#if contentModel.attachments??>
        <h2>Attachments</h2>
        <ul>
          <#list contentModel.attachments.item as a>
            <li><a href="${a.attachment.item.key}">${a.attachmentName}</a></li>
          </#list>
        </ul>
      </#if>

   |

   .. code-block:: xml
      :caption: *CRAFTER_HOME/data/repos/global/blueprints/1000_website_editorial/config/studio/content-types/page/article/form-definition.xml*
      :linenos:

      ...

      <field>
        <type>repeat</type>
		<id>attachments_o</id>
      ...

      <datasource>
        <type>S3-upload</type>
        <id>s3Upload</id>
        <title>S3 Upload</title>
        <interface>item</interface>
        <properties>
          <property>
            <name>repoPath</name>
              <value></value>
              <type>string</type>
          </property>
          <property>
            <name>profileId</name>
            <value>s3-default</value>
            <type>string</type>
          </property>
        </properties>
      </datasource>

   |


#. Commit your changes using ``git add`` and ``git commit``

   .. code-block:: text

      ➜  craftercms git:(develop) cd CRAFTER_HOME/data/repos/global/blueprints
      ➜  blueprints git:(master) ✗ git add 1000_website_editorial/config/studio/aws/
      ➜  blueprints git:(master) ✗ git add 1000_website_editorial/config/studio/content-types/page/article/form-definition.xml
      ➜  blueprints git:(master) ✗ git add 1000_website_editorial/craftercms-plugin.yaml
      ➜  blueprints git:(master) ✗ git add 1000_website_editorial/templates/web/pages/article.ftl
      ➜  blueprints git:(master) ✗ git commit -m "Add storing assets to S3"

   |

#. Refresh your browser.  We will now try creating a project using the **Website Editorial** project blueprint to see the parameters we added to the project blueprint earlier.

   Click on the ``Navigation Menu`` ➜ ``Projects`` ➜ ``Create Project`` button, then finally select the ``Website Editorial`` project blueprint.  You will then be presented with the ``Create Project`` dialog.  Notice that the parameters we added to the ``craftercms-plugin.yaml`` file is near the bottom of dialog.  The values entered there will now be available to the project being created which for our example, will be used for the AWS profile in ``aws.xml``.  Enter the requested information then click on ``Create Project``

   .. image:: /_static/images/blueprint/blueprint-param-added.webp
      :width: 80%
      :alt: Parameter added in Create Project
      :align: center

   |

#. Once your new project is up, users can upload files to S3 from an article page.  Let's verify the parameters you passed through the project blueprint by checking the ``aws.xml`` file.  Open the **Sidebar**, then click on |projectTools|.  Click on ``Configuration``, then select ``AWS Profiles`` from the dropdown.

   .. image:: /_static/images/blueprint/blueprint-param-added-verify.webp
      :width: 80%
      :alt: Parameter added in Create Project
      :align: center

   |


----------------------------------------
Editing as a Project vs Editing directly
----------------------------------------

Since a project blueprint is very similar in its layout to a project, you can modify a project blueprint by modifying a project created with that project blueprint and then merging the changes. This has several benefits:

* You can quickly see the effects of your modifications on Studio's preview project.
* You can create components, pages, and other file types through Studio, providing you with base templates, snippets, and type-specific UIs.

.. _newIa-blueprint-project-vs-blueprint:

.. warning:: However

    * The ``config/`` folder contains multiple configuration files with the project name. In project blueprints, this is generically represented with ``{siteName}``, so you must either only edit config files directly on the project blueprint's filesystem, or carefully replace your preview project name with ``{siteName}`` as appropriate. Having an initial version of the project blueprint (when it was just copy of the Empty project blueprint before making it a project) in a Git repository will be helpful for this.

       * Specifically, ``permission-mappings-config.xml`` and ``site-config.xml`` use ``{siteName}`` in a way where Studio replaces it with the project's name when creating a project. Sample files keep their ``{siteName}``.
       * ``permission-mappings-config.xml`` uses it in ``<site id="{siteName}">``
       * ``site-config.xml`` uses it in ``<wem-project>{siteName}</wem-project>`` and ``<display-name>{siteName}</display-name>``

    * Each project is made up of 2 different Git repos, ``sandbox`` and ``published``. Inside of either of them, lie the project's folders and also the ``.git/`` folder. You need to move this project folders back to the project blueprint folder, but avoid copying the ``.git/`` folder, as it's unnecessary for the final distributable package and may even contain sensitive information.

Remember that whenever you edit directly in the filesystem, you need to commit your changes to ensure they are properly reflected.

Small edits after the initial development may be faster by editing the project blueprint directly and testing by creating a new project.
