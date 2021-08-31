:is-up-to-date: True

.. index:: Content Modeling, Modeling, Content Model

.. _content-modeling:

================
Content Modeling
================

Every content object in Crafter CMS is an object associated with a Content Model. Content Models allow you to add structure to your content and facilitate consumption via various visual representations or via APIs. One of the great things about Crafter CMS content models is that your content can be semi-structured which allows content authors the freedom to be as creative as they'd like to be, but provide the template/UI and API developers enough structure to produce solid multi-channel renditions of the content. This section will walk you through Content Type management in Crafter Studio to help you create the models that best fit your requirements.

-------------------------------
Content Types in Crafter Studio
-------------------------------

Content Type Management in Crafter Studio is located in the |siteConfig|.

.. image:: /_static/images/content-model/site-config-link.png
	:width: 40%
	:alt: Site Config Link
	:align: center

Content Types are limited to two core types: Pages and Components. Both are made up of three ingredients:

#. Model: The content pieces that will be captured from the content authors for the page or component
#. View: The view template that will render the content, typically to HTML markup
#. Controller: The controller that handles the incoming request for the page or component

^^^^^
Pages
^^^^^

Pages are top-level container types. Pages hold content, and optionally components. Content within pages is made up of various types, for example content can be a date, an image, or a rich text field.

^^^^^^^^^^
Components
^^^^^^^^^^

Components only differ from pages in that they can't render by themselves, instead, they must render within a container page or another component.

.. _content-model:

-----------------------------
Content Type Model Definition
-----------------------------
Content models are defined via Crafter Studio's graphical modeling tool under Content Types:

.. image:: /_static/images/content-model/content-type-management.png
	:width: 50%
	:alt: Site Config - Content Types
	:align: center

|

You can now either create a new content type or open an existing type. Creating a new content type brings up a dialog that requests some basic content type information.

.. image:: /_static/images/content-model/create-content-type-1.png
	:width: 40%
	:alt: Site Config - Create Content Type
	:align: center

|

You now specify:

* Display Label: The name of your new content type as you'll see it in Crafter Studio.
* Content Type Name: The low-level system name of your content type, this field will be automatically generated for you. Modify this only if you know what you're doing.
* Type: Choose if you're defining a Page or a Component.

.. note:: Content Type Name will be removed in a future release in favor of full automation of name generation with collision resolution mechanics.

.. _form-builder-basics:

^^^^^^^^^^^^^^^^^^^
Form Builder Basics
^^^^^^^^^^^^^^^^^^^

.. figure:: /_static/images/content-model/create-content-type-2.png
	:alt: Content Type Editor
	:align: center

|

Crafter Studio's Form Builder

+--------+---------------------------------------------------------------------------------------+
|| Label || Description                                                                          |
+--------+---------------------------------------------------------------------------------------+
|| 1     || Content Type Actions: Open Existing Content Type or Create a New Type.               |
+--------+---------------------------------------------------------------------------------------+
|| 2     || Form Builder: The beginning of the form builder and it's headed by the name of the   |
||       || currently open Content Type.                                                         |
||       || Click here to explore the global properties of the type in the Properties Explorer,  |
||       || #3.                                                                                  |
+--------+---------------------------------------------------------------------------------------+
|| 3     || Properties Explorer: Helps configure the properties of the currently                 |
||       || selected item. Clicking on an item on the left side of the screen,                   |
||       || like #2 or #7 will populate this control and allow you to modify                     |
||       || the selected item.                                                                   |
+--------+---------------------------------------------------------------------------------------+
|| 4     || Form Controls: This is a list of available form controls for you to build your own   |
||       || form with. Note that the list has a scrollbar for many types of useful controls.     |
||       || Controls can be dragged from the controls list onto the form builder.                |
+--------+---------------------------------------------------------------------------------------+
|| 5     || Data Sources: Shows the list of available data sources that can be attached to this  |
||       || content type such that the content authors can pull content and incorporate it into  |
||       || pages or components. Data Sources can be dragged over to the form builder            |
||       || and configured as needed.                                                            |
||       || The content author will then use the control to pull data from that data source into |
||       || the content object.                                                                  |
+--------+---------------------------------------------------------------------------------------+
|| 6     || Form Section: Form sections help cluster a number of controls together to make it    |
||       || easier for content authors. Click on the form section to edit its properties in      |
||       || the Properties Explorer.                                                             |
+--------+---------------------------------------------------------------------------------------+
|| 7     || Form Canvas: Actual controls that have been placed on this form.                     |
||       || Clicking on a control will allow you to configure this control in the Properties     |
||       || Explorer.                                                                            |
+--------+---------------------------------------------------------------------------------------+
|| 8     || Data Source: The data sources configured for this content type.                      |
||       || To configure a data source, click on it and then edit the properties                 |
||       || in the Properties Explorer.                                                          |
+--------+---------------------------------------------------------------------------------------+
|| 9     || Save or Cancel the changes to the Content Type.                                      |
+--------+---------------------------------------------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Properties of Content Types
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let's select the content type itself, by clicking on the content type name at the top of the Form Builder and explore its properties.

.. image:: /_static/images/content-model/create-content-type-3.png
    :width: 80%
    :alt: Properties Explorer
	:align: center

|

The fields available at this level are:

+---------------+--------------------------------------------------------------------------------+
|| Field        || Description                                                                   |
+---------------+--------------------------------------------------------------------------------+
|| Title        || Content Type's friendly name                                                  |
+---------------+--------------------------------------------------------------------------------+
|| Description  || Description of the Content Type                                               |
+---------------+--------------------------------------------------------------------------------+
|| Object Type  || Page or Component (read only)                                                 |
+---------------+--------------------------------------------------------------------------------+
|| Content Type || System name and path of this content type (read only)                         |
+---------------+--------------------------------------------------------------------------------+
|| Preview      ||                                                                               |
|| Image        ||                                                                               |
+---------------+--------------------------------------------------------------------------------+
|| Configuration|| Contains config.xml which holds information about the content type such as the|
||              || limit where content can be created, is it previewable, etc.                   |
+---------------+--------------------------------------------------------------------------------+
|| Controller   || Contains controller.groovy which provides an extension/hook to authoring      |
||              || lifecycle events                                                              |
+---------------+--------------------------------------------------------------------------------+
|| Display      || View template to use when rendering this content                              |
|| Template     ||                                                                               |
+---------------+--------------------------------------------------------------------------------+
|| Merge        || The inheritance pattern to use with content of this type, please see Content  |
|| Strategy     || Inheritance for more detail on this feature :ref:`content-inheritance`        |
+---------------+--------------------------------------------------------------------------------+
|| Show in Quick|| Show this content type in the quick create menu from the context nav          |
|| Create       ||                                                                               |
+---------------+--------------------------------------------------------------------------------+
|| Destination  || Path pattern where the content created from quick create will be stored.      |
|| Path Pattern || The patterns available are the following:                                     |
||              ||    **{objectId}** Inserts a GUID.                                             |
||              ||    **{year}** Inserts the current year (4 digit year).                        |
||              ||    **{month}** Inserts the current month (2-digit month of the year).         |
||              ||    **{yyyy}** Inserts the current year (4 digit year).                        |
||              ||    **{mm}** Inserts the current month (2-digit month of the year).            |
||              ||    **{dd}** Inserts the current day (2-digit day of the month).               |
+---------------+--------------------------------------------------------------------------------+

The 2 key properties are: the display template (:ref:`content-view-templates`) which is the HTML template that renders the final Web page; the content inheritance (:ref:`content-inheritance`) which determines how this content type will inherit from parent XML files in the system.

.. _content-creation-permissions-section:

Content Creation Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Limiting where a content type can be created is through the Configuration Property of a content type (config.xml) using the following tags:

.. code-block:: xml
    :linenos:

    <paths>
      <includes>
        <pattern>REG_EXP_HERE</pattern>
      </includes>
    </paths>

|

OR

.. code-block:: xml
    :linenos:

    <paths>
      <excludes>
        <pattern>REG_EXP_HERE</pattern>
      </excludes>
    </paths>

|

You can only use one of either include or exclude. Use Include when you need to whitelist places, use exclude when you need to blacklist.

We'll look at an example of limiting where you can create content from the Website_Editorial blueprint that comes out of the box.

From the **Sidebar**, click on |siteConfig| at the bottom.  Next, click on **Content Types** then either create a new content type or open an existing content type.  In the image below, we have the content type **Page - Article** open for editing.  Go to the **Properties Explorer** and click on **Configuration**.  A pencil will appear next to the file name *config.xml*, click on that pencil to edit.

.. figure:: /_static/images/content-model/form-engine-prop-configuration.png
    :alt: Form Engine Properties Configuration
	:align: center

|

To limit where this particular content type can be created, the tags, <paths><includes><pattern>some_regex_pattern</pattern></includes></paths> are included towards the bottom of the file.  Here, we can see that content type **Page - Article** can be created anywhere under */site/website/articles*

.. figure:: /_static/images/content-model/form-engine-prop-config-file.png
    :alt: Form Engine Properties Configuration File config.xml
    :align: center

|

.. code-block:: xml
    :linenos:

    <paths>
      <includes>
        <pattern>^/site/website/articles/.*</pattern>
      </includes>
    </paths>

|

To see how the above tags/example works, go to the **Sidebar** and right click on the **Home** folder and select **New Content**.  Notice that content type **Page - Article** is not available from the content types listed.

.. figure:: /_static/images/content-model/form-engine-prop-config-sample-no.png
    :alt: Form Engine Properties Config File "Page - Articles" Not Available
    :align: center

|

From the **Sidebar** again, navigate from the **Pages** folder to the /Home/articles/2016/12/ folder then right click and select **New Content**, notice that the content type **Page - Article** is available from the list.

.. figure:: /_static/images/content-model/form-engine-prop-config-sample-yes.png
    :alt: Form Engine Properties Config File "Page - Articles" Available
    :align: center

|

To see more examples, try creating content types in the other folders in the **Sidebar** such as the **Taxonomy** folder, the **Components** folder and anywhere under the **Pages** folder.

Cascade on Delete Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Cascade on delete allows the automatic deletion of child items matching a regexp when a content is deleted.

Enabling cascade on delete is configured through the content type **Configuration** property (config.xml) using the following tags:

.. code-block:: xml
    :linenos:

    <delete-dependencies>
      <delete-dependency>
        <pattern>REG_EXP_HERE</pattern>
        <remove-empty-folder>false</remove-empty-folder>
      </delete-dependency>
    </delete-dependencies>

|

We'll look at an example of how to enable cascade on delete on the **Page - Article** content type in the Website_editorial blueprint.

From the **Sidebar**, click on |siteConfig| at the bottom.  Next, click on **Content Types**, then **Open an existing content type**.  We will select the content type **Page - Article** for editing.  Next, go to the **Properties Explorer** and click on **Configuration**.  A pencil will appear next to the file name **config.xml**, click on that pencil to edit.

We're going to enable cascade on delete for articles (**Page - Article** content type) containing images under ``/static-assets/images/page``, and we'll also delete empty folders under ``/static-assets/images/page`` by adding the following code in the **config.xml** file:

.. code-block:: xml
    :linenos:

    <delete-dependencies>
      <delete-dependency>
        <pattern>(^/static-assets/images/page/.*)</pattern>
        <remove-empty-folder>true</remove-empty-folder>
      </delete-dependency>
    </delete-dependencies>

|

To see cascade on delete in action, let's create a new article (**Page - Article** content type) under one of the article folders in the **Sidebar**.  Enter data in the required fields and remember to upload from desktop an image in the **Image** field in the **Content** section.  Click on the **Save & Close** button.

.. figure:: /_static/images/content-model/new-article-image-uploaded.jpg
    :alt: New article with image uploaded activity list in Dashboard
    :align: center

|

Let's look at the dependencies of our newly created article, where we expect the image under the ``static-assets/images/page`` will be deleted when we delete the article since we have configured cascade on delete for content type **Page - Article** for items under the directory ``static-assets/images/page``:

.. figure:: /_static/images/content-model/new-article-dependencies.png
    :alt: New article with image uploaded dependencies
    :align: center

|

Open the **Sidebar** and navigate to the newly created article.  Right click on the newly created article and select **Delete**.  Open the **Dashboard** and notice the items listed as deleted in the **My Recent Activity** widget.

.. figure:: /_static/images/content-model/new-article-child-items-deleted.png
    :alt: New article with image uploaded deleted activity list in Dashboard
    :align: center

|

.. _copy-dependencies-configuration:

Copy Dependencies Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Copy dependencies allows the automatic copying of child items matching a regexp when a content is copied.

Enabling copy dependencies is configured through the content type **Configuration** property (config.xml) using the following tags:

.. code-block:: xml
    :linenos:

    <copy-dependencies>
      <copy-dependency>
        <pattern>REG_EXP_HERE</pattern>
        <target>FOLDER_FOR_COPIES</target>
      </copy-dependency>
    </copy-dependencies>

|

We'll look at an example of how to enable copy dependencies on the **Page - Article** content type in the Website_editorial blueprint.

From the **Sidebar**, click on |siteConfig| at the bottom.  Next, click on **Content Types**, then click on **Open Existing Type**.  We will select the content type **Page - Article** for editing.  Next, go to the **Properties Explorer** and click on **Configuration**.  A pencil will appear next to the file name **config.xml**, click on that pencil to edit.

We're going to enable copy dependencies for articles (**Page - Article** content type) containing images under ``/static-assets/images/`` and placing the copies in folder ``/static-assets/images/articles/`` by adding the following code in the **config.xml** file:

.. code-block:: xml
    :linenos:

    <copy-dependencies>
      <copy-dependency>
        <pattern>(^/static-assets/images/.*)</pattern>
        <target>/static-assets/images/articles/</target>
      </copy-dependency>
    </copy-dependencies>

|

Click on **Update**, then save changes made to the content type by clicking on **Save**.

To see copy dependencies in action, let's copy an article under one of the article folders from the **Sidebar**.  First, we'll create the folder ``articles`` under ``/static-assets/images``.  Next, we'll navigate to ``articles/2016/12/Top Books For Young Women``.  Right click on the article and select **Copy**.  Navigate to ``articles/2016/7``, right click on the folder and select **Paste**.

Let's look at the dependencies of our copied article, where we expect a copy of the image under the ``static-assets/images/articles`` will be located since we have configured cop dependencies for content type **Page - Article** for items under the directory ``static-assets/images``:

.. figure:: /_static/images/content-model/copied-article-dependencies.png
    :alt: Copy of article with copy of image
    :align: center

|

.. _item-specific-dependencies:

Item Specific Dependencies
^^^^^^^^^^^^^^^^^^^^^^^^^^

Item specific dependencies allows for the automatic copying of child items matching the regex pattern in the ``studio-config.yaml`` file when a content is copied.  It also allows the automatic deletion of child items matching the regex pattern in the ``studio-config.yaml`` file when a content is deleted.

Below is the regex pattern for item specific dependencies:

.. code-block:: yaml

   # Regex pattern for item specific dependencies
   studio.configuration.dependency.itemSpecificPatterns: /site/components/page/.*,/static-assets/page/.*,/site/components/item/.*,/static-assets/item/.*

|

``/site/components/page/.*`` and ``/static-assets/page/.*`` are legacy regex pattern for backwards compatibility.  Moving forward, we suggest using the following regex patterns for item specific dependencies: ``/site/components/item/.*`` and ``/static-assets/item/.*``

Item specific dependencies are configured during content type creation.  We'll look at an example of how content is modeled to take advantage of item specific dependencies, using the **Page - Article** content type in the Website_editorial blueprint.

From the **Sidebar**, click on |siteConfig| at the bottom.  Next, click on **Content Types**, then click on **Open Existing Type**.  We will select the content type **Page - Article** for editing.

Scroll to the ``Data Sources`` section, and click on **Upload Images**.  Notice the value in the **Repository Path** property, which is the path where to store the new file uploaded from desktop.

.. figure:: /_static/images/content-model/item-specific-dependencies.png
    :alt: Modeling content for item specific dependencies
    :align: center

|

Let's take a closer look at the value for the **Repository Path** property.  The value listed is:

`/static-assets/item/images/{yyyy}/{mm}/{dd}/`

where:

    * **{yyyy}** inserts the current year when the image is uploaded (4 digit year)
    * **{mm}** inserts the current month when the image is uploaded (2-digit month of the year)
    * **{dd}** inserts the current day when the image is uploaded (2-digit day of the month)

To take advantage of item specific dependencies for copying and deleting, we will place uploaded items in ``/static-assets/item/``.  We added a folder ``image`` to better organize our items, since in this location, we will only be storing images.  We also used the macros **{yyyy}**, **{mm}** and **{dd}**, again to better organize our image (we can browse by year, or by month, or by date).  So, when an image is uploaded from the Desktop say on May 17, 2016, the image will be stored in the following location:

`/static-assets/item/images/2016/05/17/`

The macros **{yyyy}**, **{mm}** and **{dd}** are available for content modelers to use to better organize their site items.  To see other macros available for content modelers, see :ref:`macros-for-data-sources`.

Let's take a look at item specific dependencies in action for copying and deleting content.  Let's create a new article (**Page-Article** content type) under one of the article folders in the **Sidebar**.  Enter data in the required fields and remember to upload from desktop an image in the **Image** field in the **Content** section.  Click on the **Save & Close** button.  Note the location where the image is uploaded.

.. figure:: /_static/images/content-model/new-article-item-dependencies.png
    :alt: New article created with image uploaded from Desktop
    :align: center

|

From the **Sidebar**, navigate to the newly created article.  Right click on the article and select **Copy**.  Navigate to a different folder, right click on the folder and select **Paste**.

Let's look at the dependencies of our copied article, where we expect a copy of the image under the ``/static-assets/item/images/2018/05/17`` will be located since we have taken advantage of the item specific dependencies regex pattern of ``/static-assets/item/*``.

.. figure:: /_static/images/content-model/copied-article-item-dependencies.png
    :alt: Copy of image uploaded from Desktop created when article was copied in dependencies
    :align: center

|

Let's also take a look at the ``static-assets`` folder to see the copy of the uploaded image

.. figure:: /_static/images/content-model/copied-article-sidebar.png
    :alt: Copy of image uploaded from Desktop created when article was copied in Sidebar
    :align: center

|

Now let's take a look at what happens when we delete content with item specific dependencies.  From the **Sidebar**, navigate to the article that we created.  Right click on the article and select **Delete**.  Click on the **Delete** button when the Delete dialog appears.  Notice the items that will be deleted when we delete the article.

.. figure:: /_static/images/content-model/delete-article-dialog.png
    :alt: Delete dialog showing items to be deleted
    :align: center

|

Open the **Sidebar** and the **Dashboard** and notice the items that are deleted.  We deleted an article, and since the image is located in a path matching the regex pattern for item specific dependencies, the image is deleted along with the article.

.. figure:: /_static/images/content-model/delete-article-sidebar.jpg
    :alt: Sidebar and Dashboard showing items that were deleted when the article was deleted
    :align: center

|

.. _setting-up-quick-create:

Quick Create
^^^^^^^^^^^^

Quick create allows content authors to create content with as few clicks as possible through a button from the context nav for configured content types.

.. figure:: /_static/images/content-model/quick-create-button.png
    :alt: Context Nav showing the quick create button
    :align: center

|

Let's take a look at an example on how to configure a content type to be available from the quick create button in the context nav for authors using the out of the box blueprint **Website Editorial**.  In the image below, we have a site named **mysite** with the quick create button expanded.  Notice that we have one content type available for quick create, the **Page - Article** content type.

.. figure:: /_static/images/content-model/quick-create-btn-expanded.png
    :alt: Context Nav showing the expanded quick create button
    :align: center

|

If you look at the site tree as shown above, most of the content (the articles) is organized in a dated folder structure.  Adding quick create for the **Page - Article** content type lets the content author skip having to open the **Sidebar**, then navigate through the site tree, create the year/month folder if it does not exist yet, then finally create their content.

To setup quick create for a content type, from the **Sidebar**, click on |siteConfig| at the bottom.  Next, click on **Content Types**, then click on **Open Existing Type**.  We will select the content type **Page - Article** for editing.  Next, go to the **Properties Explorer** and scroll to the **Quick Create** section of the properties.

.. figure:: /_static/images/content-model/quick-create-properties.png
    :alt: Page - Article Content Type Quick Create Properties
    :align: center

|

Check the **Show in Quick Create** property to make the content type available from the quick create button of the **Page - Article** content type.

In the **Destination Path Pattern**, fill in the path pattern where the content created from quick create will be stored.  For our example, notice that the articles are arranged in the following folder structure:

.. code-block:: text

   /articles
     /{year}
       /{month}

|

We will then put in ``/site/website/articles/{year}/{month}`` as the path pattern, which will put the new content into the year and month folder when the content author used quick create.

Below is the site tree after using the quick create button to create a new article titled ``New article using quick create``, where the year and month folders were created for the new article using the value in the ``Destination Path Pattern`` property of the content type.

.. figure:: /_static/images/content-model/quick-create-article-created.png
    :alt: Article created using quick create
    :align: center

.. _form-controls:

^^^^^^^^^^^^^
Form Controls
^^^^^^^^^^^^^

Form Controls are data input controls that, once placed on a form, will capture that input from the content authors and store it in the content object. Crafter CMS ships with a number of out-of-the-box controls and you can also create your own by reading :ref:`form-engine-control`.

.. figure:: /_static/images/content-model/form-engine-controls.png
    :alt: Form Engine Controls
	:align: center

|

Each Form Control type has it's own properties and constraints.  Some constraints are common, like "Variable Name" and "Required" while others apply only to the type, e.g. Height and Width limitations on the Image Picker control.  

Here's a list of available Form Engine Controls:

.. include:: form-controls/list-form-controls.rst

.. _form-control-variable-names:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Form Control Variable Names
^^^^^^^^^^^^^^^^^^^^^^^^^^^
Every Form Control has a Variable Name property.  The Variable Name is used by the form engine to store the content entered by the user in the content model and search index.  This same Variable Name is used later by templates and controllers to retrieve the value.

**Variable Name Best Practices**

#. Be descriptive.  Well thought out Variable Names help with template and controller readability.
#. Use camel case. Example: "productSummary".
#. Use regex constraints on input boxes to enforce additional validation rules
#. Do not use Reserved names.

.. _reserved-variable-names:

**Reserved Variable Names**

The following variable names are used by Crafter CMS.

+----------------------+------------------------------------------------------------------+
|| Variable Name       || Description                                                     |
+======================+==================================================================+
|| file-name*          || Used by the File Name and Auto File Name control.               |
+----------------------+------------------------------------------------------------------+
|| internal-name       || Used by Crafter Studio to label the content object              |
+----------------------+------------------------------------------------------------------+
|| placeInNav          || Used by the Page Order control.                                 |
+----------------------+------------------------------------------------------------------+
|| disabled            || Used to logically remove an object in content delivery.         |
+----------------------+------------------------------------------------------------------+
|| expired             || Used to logically remove an object after date                   |
+----------------------+------------------------------------------------------------------+
|| expired_dt          || Used to logically remove an object after date                   |
+----------------------+------------------------------------------------------------------+
|| objectId            || UUID. Auto assigned by Crafter                                  |
+----------------------+------------------------------------------------------------------+
|| objectGroupId       || First part of objectId. Auto assigned by Crafter                |
+----------------------+------------------------------------------------------------------+
|| createdDate         || create date. Auto assigned by Crafter                           |
+----------------------+------------------------------------------------------------------+
|| createdDate_dt      || Alternate name for create date. Auto assigned by Crafter        |
+----------------------+------------------------------------------------------------------+
|| lastModifiedDate    || Last modified date. Auto assigned by Crafter                    |
+----------------------+------------------------------------------------------------------+
|| lastModifiedDate_dt || Alternate name for last modified date. Auto assigned by Crafter |
+----------------------+------------------------------------------------------------------+
|| content-type        || Content type name                                               |
+----------------------+------------------------------------------------------------------+
|| display-template    || Path to default template for type                               |
+----------------------+------------------------------------------------------------------+
|| merge-strategy      || Crafter Core/Engine "Merge Strategy" for content type           |
+----------------------+------------------------------------------------------------------+
|| id                  || reserved by Solr                                                |
+----------------------+------------------------------------------------------------------+
|| authorizedRoles     || Used to restrict pages based on roles                           |
+----------------------+------------------------------------------------------------------+
|| role                || Contains the role required to access a page                     |
+----------------------+------------------------------------------------------------------+
|| mime-type           || Mime-type name                                                  |
+----------------------+------------------------------------------------------------------+
|| force-https         || HTTPS connection needs to be forced to access the page          |
+----------------------+------------------------------------------------------------------+
|| navLabel            || Navigation label                                                |
+----------------------+------------------------------------------------------------------+
|| redirect-url        || Redirect URL                                                    |
+----------------------+------------------------------------------------------------------+
|| crafterSite         || Used to set the site value                                      |
+----------------------+------------------------------------------------------------------+
|| localId             || Name of the field for paths.  Used by the deployer              |
+----------------------+------------------------------------------------------------------+
|| rootId              || Root Id name.  Used by the deployer                             |
+----------------------+------------------------------------------------------------------+
|| includedDescriptors || Included descriptors field name.  Used by the deployer          |
+----------------------+------------------------------------------------------------------+
|| crafterPublishedDate|| The name for the publish date field.  Used by the deployer      |
+----------------------+------------------------------------------------------------------+
|| disableFlattening   || Used to indicate if XML flattening should be disabled when      |
||                     || indexing XML. Used by the deployer                              |
+----------------------+------------------------------------------------------------------+
|| content             || Used by the deployer                                            |
+----------------------+------------------------------------------------------------------+
|| contentType         || Name of field for mimeType.  Used by the deployer               |
+----------------------+------------------------------------------------------------------+
|| width               || Used by the deployer                                            |
+----------------------+------------------------------------------------------------------+
|| height              || Used by the deployer                                            |
+----------------------+------------------------------------------------------------------+
|| contentLength       || Name of field for file size.  Used by the deployer              |
+----------------------+------------------------------------------------------------------+
|| lastEditedOn        || Name of field for last edit date. Used by the deployer          |
+----------------------+------------------------------------------------------------------+
|| internalName        || Name of field for internal name. Used by the deployer           |
+----------------------+------------------------------------------------------------------+

\* **Note on file names**

.. include:: /includes/valid-file-names.rst

.. _variable-names-search-indexing:

**Variable Names and Search Indexing**

Crafter CMS indexes your content in the search index using your content model variable name as the field name.

To facilitate indexing, the following suffix should be appended to variable names depending on the variable data type:

+------------+---------+-------------+----------------------------------------------------+
||           || Field  || Multivalue || Description                                       |
|| Type      || Suffix || Suffix     ||                                                   |
||           ||        || (repeating ||                                                   |
||           ||        || groups)    ||                                                   |
+============+=========+=============+====================================================+
|| integer   || _i     || _is        || a 32 bit signed integer                           |
+------------+---------+-------------+----------------------------------------------------+
|| string    || _s     || _ss        || String (UTF-8 encoded string or Unicode). A string|
||           ||        ||            ||  value is indexed as a single unit.               |
+------------+---------+-------------+----------------------------------------------------+
|| long      || _l     || _ls        || a 64 bit signed integer                           |
+------------+---------+-------------+----------------------------------------------------+
|| text      || _t     || _txt       || Multiple words or tokens                          |
+------------+---------+-------------+----------------------------------------------------+
|| boolean   || _b     || _bs        || true or false                                     |
+------------+---------+-------------+----------------------------------------------------+
|| float     || _f     || _fs        || IEEE 32 bit floating point number                 |
+------------+---------+-------------+----------------------------------------------------+
|| double    || _d     || _ds        || IEEE 64 bit floating point number                 |
+------------+---------+-------------+----------------------------------------------------+
|| date      || _dt    || _dts       || A date in ISO 8601 date format                    |
+------------+---------+-------------+----------------------------------------------------+
|| time      || _to    || _tos       || A time in ``HH:mm:ss`` format (the value will be  |
||           ||        ||            || set to date 1/1/1970 automatically)               |
+------------+---------+-------------+----------------------------------------------------+
|| text with || _html  ||            ||                                                   |
|| html tags ||        ||            ||                                                   |
+------------+---------+-------------+----------------------------------------------------+

Model fields require their respective data type postfix as listed above.  The UI autofills the **Name/ Variable Name** field and adds postfixes as you're typing in the **Title** field.

When setting up reserved variable names for your model, remember to remove the postfix auto-added by the UI since the variable name needs to be exactly the same as listed :ref:`above<reserved-variable-names>`.

Remember to also remove the postfix auto-added by the UI when using ``key`` or ``value`` for your variable names being setup as key-value pairs in a content type, such as the ``Taxonomy`` content type used in the Website Editorial blueprint.

Please note that indexed ``text`` fields are case insensitive when performing a search, while ``string`` fields are case sensitive. Also, queries using ``string`` fields will only match full values besides being case sensitive.

If performing a case insensitive search on a ``string`` field is desired, Crafter CMS provides a way by enabling tokenization of the field in the content type.  To enable tokenization of a ``string`` field in Studio, put a check in the checkbox labeled **Tokenize for Indexing** in the properties section of the content type field.  Below is the ``Page - Article`` content type in a site created using the Website Editorial blueprint, showing the field ``Author`` with the ``Tokenize for Indexing`` option:

.. image:: /_static/images/content-model/tokenize-for-indexing-property.jpg
   :alt: Enable case insensitive keyword search for string fields in content type by clicking on "Tokenize for Indexing"
   :width: 90%
   :align: left

|

It should also be noted that when the tokenize option is enabled, a second field will be created with the ``_t`` postfix.  This second field with the ``_t`` postfix should be used in queries to be case insensitive and match tokens.  In our example above, the field ``author_t`` should be used in queries instead of ``author_s`` to be case insensitive and match tokens.

Let's take a look at an example of queries performed on a ``string`` field with ``tokenize`` enabled and compare the results of using the field with the ``_s`` postfix and the second field created when we enabled ``tokenize`` with the  ``_t`` postfix. We'll use the ``Author`` field shown above with ``Tokenize for Indexing`` enabled. Here are the results of the queries using the ``author_s`` and ``author_t`` fields:

+---------+-------------------+------------------+
|Query	  |Matches author_s?  |Matches author_t? |
+=========+===================+==================+
|Jane	  |No	              |Yes               |
+---------+-------------------+------------------+
|jane	  |No	              |Yes               |
+---------+-------------------+------------------+
|Jane Doe |Yes	              |Yes               |
+---------+-------------------+------------------+
|jane doe |No	              |Yes               |
+---------+-------------------+------------------+
|Jane doe |No	              |Yes               |
+---------+-------------------+------------------+

.. _data-sources:

^^^^^^^^^^^^
Data Sources
^^^^^^^^^^^^
.. index:: Data Sources

.. image:: /_static/images/content-model/form-engine-data-sources.png
    :alt: Form Engine Data Sources
    :width: 50%
    :align: left

|

Data Sources are pickers that help pull in content from internal or external storage/systems.  For example, data source include: desktop video uploader, desktop image uploader, and so on. Crafter CMS ships with a number of out-of-the-box data sources and you can also create your own by reading :ref:`form-engine-data-source`.

Data Sources allows the content model designer to decide where different assets uploaded via different controls go (for instance icons, images, RTE related assets, etc.).  It has it's own properties, like "Repository Path", which specifies the path where assets are stored, which help keep the system consistent over time.  The storage destination designed in the model dictates how those assets are handled during a duplicate event (duplicate the asset or duplicate the reference to the asset).

There are a couple of data source that also dictates how components are handled during duplicate/copy events.  The :ref:`Shared Content<form-source-shared-content>` data source will duplicate/copy the reference to a component during a duplicate/copy event and is used for components that need to be shared across pages or components. For components that belong exclusively to a content object, use the :ref:`Embedded Content<form-source-embedded-content>` data source.

The ``shared-content`` data sources also provides an option to allow users to search for existing items (``Enable Search Existing`` property) in addition to browsing.  This provides users ease of managing lots of items/assets.

Data sources are usually used in conjunction with a control in the content type, for example, the :ref:`form-item-selector` is used for selecting files to be uploaded when bound with the :ref:`form-source-file-desktop` data source.

Let's take a look at a shared content data source in a site created using the Video Center blueprint from the Marketplace.

.. image:: /_static/images/content-model/create-site-video-center-bp.jpg
    :alt: Form Engine Data Sources Example - Create Site Using Video Center Blueprint
    :width: 70%
    :align: left

|

Open the ``Sidebar`` then click on |siteConfig|.  Click on ``Content Types`` and select ``Stream``, then click on the ``Open Type`` button.  Scroll down  to the ``Data Sources`` section, then click on ``Origins``, a shared content data source.  Notice how a :ref:`form-item-selector` control is used for selecting shared content ``Origin``.  In the ``Properties Explorer`` on the right  side, put a check mark on  ``Enable Search Existing`` property so users can search for existing items.

.. image:: /_static/images/content-model/shared-content-ds-enable-search-existing.jpg
    :alt: Form Engine Data Sources Example - Shared Content Data Source
    :width: 100%
    :align: left

|

To see the property we setup in action, open the ``Sidebar``, then navigate to ``/streams``.  Right click on any of the items, say, ``AlphaGo``, then click on ``Edit``.  Scroll down to the ``Content`` section of the form.  In the ``Origin`` field, select the item next to it (``ShakaDemo``) then click on the ``x`` button to remove it.  We'll now add a new one, by clicking on the ``Add`` button, then select ``Search for Existing - Origins``.

.. image:: /_static/images/content-model/author-search-for-existing.png
   :alt: Form Engine Data Sources Example - Author Search for Existing Option
   :width: 70%
   :align: left

|

A search dialog will open displaying in a grid view, items the user can search through, select, filter, etc.  As we can see, the search option makes it easier for users to pick items instead of scrolling through all the available items, especially for say sites with hundreds or even thousands of items/assets.

.. image:: /_static/images/content-model/author-search-for-existing-dialog.jpg
   :alt: Form Engine Data Sources Example - Author Search for Existing Dialog
   :width: 70%
   :align: left

|

Form Engine Data Sources (please use the scrollbar to see more data sources)

.. include:: form-sources/list-form-sources.rst

.. _macros-for-data-sources:

Macros for Data Sources
^^^^^^^^^^^^^^^^^^^^^^^
There are a number of macros available for the content model designer to use in data sources. These macros are used when uploading assets to better organize site items, usually in the **Repository Path** property of the data source for uploading.  Here are the available macros:

+---------------------+--------------------------------------------------------------------------------+
|| Macro              || Description                                                                   |
+=====================+================================================================================+
|| {objectId}         || Inserts a GUID                                                                |
+---------------------+--------------------------------------------------------------------------------+
|| {objectGroupId}    || Inserts the first 4 characters of a GUID                                      |
+---------------------+--------------------------------------------------------------------------------+
|| {objectGroupId2}   || Inserts the first 2 characters of a GUID                                      |
+---------------------+--------------------------------------------------------------------------------+
|| {year}             || Inserts the current year (4 digit year)                                       |
+---------------------+--------------------------------------------------------------------------------+
|| {month}            || Inserts the current month (2-digit month of the year)                         |
+---------------------+--------------------------------------------------------------------------------+
|| {parentPath}       || Inserts the parent path of the component/page containing the upload controls  |
+---------------------+--------------------------------------------------------------------------------+
|| {parentPath[index]}|| Inserts the sub element of a parent path using an index, of the component/page|
||                    || containing the upload controls                                                |
+---------------------+--------------------------------------------------------------------------------+
|| {yyyy}             || Inserts the current year (4 digit year)                                       |
+---------------------+--------------------------------------------------------------------------------+
|| {mm}               || Inserts the current month (2-digit month of the year)                         |
+---------------------+--------------------------------------------------------------------------------+
|| {dd}               || Inserts the current day (2-digit day of the month)                            |
+---------------------+--------------------------------------------------------------------------------+

For an example of how the macros are used when modeling your content, the website_editorial blueprint uses some of the macros available in the content type Page -  Article.

The section :ref:`item-specific-dependencies` above details the use of some of the macros in the website_editorial blueprint, content type Page -  Article.

   .. note::
      For both the ``parentPath`` and ``parentPath[index]`` macros, the path starts **without** ``/site/website`` and ``/site/components``.

      For example, if in the repository the parent is a page, and the page URL in the repository is ``/site/website/en/about-us/index.xml``, then the parentPath is ``/en/about-us/index.xml``.

      If in the repository the parent is a component, and the component URL in the repository is ``/site/components/en/products/myproduct.xml``, then the  parentPath is ``/en/products/myproduct.xml``.

|
|

**Data Sources macro: parentPath[index]**

The ``parentPath[index]`` macro provides resolution support for sub elements of a parent path in Crafter Studio.
It pulls a single sub **/** of the parent path with the following syntax ``{parentpath[index]}``

Here are some examples:

If the parentPath is ``/en/mypage``, then to get the sub element ``en``, use **0** as the index in the macro like so  ``{parentpath[0]}``

If the parentPath is ``/products/household/cleaning`` then to get  the sub  element ``household``, use **1** as the index in the macro like so ``{parentpath[1]}``


^^^^^^^^^^^
Form Canvas
^^^^^^^^^^^

The canvas is where the form actually gets built. The building process is performed by simply dragging the controls from the Form Controls over to the canvas, rearranging the controls in the order you'd like to present to the content authors, and configuring the controls individually.

Controls on the canvas are configured by clicking on the control, and then editing the control's configuration in the Properties Explorer, see item #3 in :ref:`form-builder-basics`. Different controls have different configuration, so please review the individual form control configuration listed in :ref:`form-controls`.

Two controls have a special significance to the form canvas: :ref:`form-section` and :ref:`form-repeating-group`. Form Section Control creates a form section that can be expanded and collapsed and holds within it other controls. This is typically used to group together controls that cover a similar concern and help provide the content authors with a clear and organized form when editing in form mode.
Like the Form Section Control, Repeating Group Control is also a container that holds other controls, but the purpose is to allow a set of controls to repeat as configured. This is typically used to allow content authors to enter a set of meta-data and repeat it as many times as desired and permitted by configuration.

The canvas allows the form-based content capture only, and is used by content authors when they're in that mode. In-Context Editing will leverage the form components, but not the canvas when authors are in that mode. Learn more about In-Context Editing configuration in :ref:`in-context-editing`.

.. _content-view-templates:

---------------------------
Content Type View Templates
---------------------------

View templates control how the model is rendered as HTML. Crafter uses `FreeMarker <http://freemarker.org>`_ as the templating engine, and provide the full model defined by the model in the previous section. Every element in the model is accessible to the view template via a simple API ``${contentModel.VARIABLE_NAME}`` where variable name is the ``Name / Variable Name`` definition in the Form Control. View templates are primarily written in HTML, backed by CSS with API calls weaved within to pull content from the primary Crafter CMS model or additional model (via APIs, please read :ref:`groovy-api` for that topic).

An example view template


.. code-block:: html
   :force:
   :linenos:

   <#import "/templates/system/common/cstudio-support.ftl" as studio />

   <!DOCTYPE html>
   <html lang="en">
     <head>
       <!-- Basic Page Need
       ================================================== -->
       <meta charset="utf-8">
       <title>${contentModel.browser_title}</title>
       <meta name="description" content="${contentModel.meta_description}">
       <meta name="keywords" content="${contentModel.meta_keywords}">
     </head>
     <body>
       <div class="body" <@studio.iceAttr iceGroup="body"/>>
         ${contentModel.body_html}
       </div>

       <#if (contentModel.analytics_script)??>${contentModel.analytics_script}</#if>
     </body>
   </html>

|

The simple example renders a simple HTML page with a very basic model. Let's review the model first:

+-------------------+--------------+-------------------------------------------------------------+
|| Model Element    || Control     || Purpose                                                    |
+-------------------+--------------+-------------------------------------------------------------+
|| browser_title    || Input       || Provide a browser title for the page                       |
+-------------------+--------------+-------------------------------------------------------------+
|| meta_keywords    || Input       || SEO keywords associated with the page                      |
+-------------------+--------------+-------------------------------------------------------------+
|| body_html        || Rich Text   || The page's main HTML body (in this case, it's              |
||                  || Editor      || just a static HTML block).                                 |
+-------------------+--------------+-------------------------------------------------------------+
|| analytics_script || Text Area   || Analytics's Engine JavaScript                              |
+-------------------+--------------+-------------------------------------------------------------+

The `FreeMarker <http://freemarker.org>`_ language is supported. For detailed Freemarker documentation, please visit: `http://freemarker.org <http://freemarker.org>`_ 

.. _content-type-controller-definition:

----------------------------------
Content Type Controller Definition
----------------------------------

Crafter page and components can have their own controller scripts too, that are executed before the page or component
is rendered, and that can contribute to the model of the template. These scripts, besides the common variables, have
the ``templateModel`` and the ``contentModel`` available. The ``templateModel`` is the actual map model of the
template, and any variable put in it will be accessible directly in the template, eg. if the script has the line
``templateModel.var = 5``, then in the template the var's value can be printed with ``${var}``. The ``contentModel``
is the XML descriptor content, of type SiteItem. The scripts don't have to return any result, just populate the
``templateModel``.

There are 2 ways in which you can "bind" a script to a page or component:

#.  Put the script under Scripts > pages or Scripts > components, and name it after the page or component content type.
#.  When creating the content type for the page or component, add an Item Selector with the variable name ``scripts``. Later when creating
    a page or component of that type, you can select multiple scripts that will be associated to the page or component.

The following is an example of a component script. The component content type is ``/component/upcoming-events``. We can then place the
script in Scripts > components > upcoming-events.groovy so that it is executed for all components of that type.

.. code-block:: groovy
    :linenos:

    import org.craftercms.engine.service.context.SiteContext

    import utils.DateUtils

    def now = DateUtils.formatDateAsIso(new Date())
    def queryStr = "crafterSite:\"${siteContext.siteName}\" AND content-type:\"/component/event\" AND disabled:\"false\" AND date_dt:[${now} TO *]"
    def start = 0
    def rows = 1000
    def sort = "date_dt asc"
    def query = searchService.createQuery()

    query.setQuery(queryStr)
    query.setStart(start)
    query.setRows(rows)
    query.addParam("sort", sort)
    query.addParam("fl", "localId")

    def events = []
    def searchResults = searchService.search(query)
    if (searchResults.response) {
      searchResults.response.documents.each {
        def event = [:]
        def item = siteItemService.getSiteItem(it.localId)

        event.image = item.image.text
        event.title = item.title_s.text
        event.date = DateUtils.parseModelValue(item.date_dt.text)
        event.summary = item.summary_html.text

        events.add(event)
      }
    }

    templateModel.events = events

|

You might notice that we're importing a ``utils.DateUtils`` class. This class is not part of Crafter CMS, but instead it is a Groovy class
specific to the site. To be able to use this class, you should place it under ``scripts > classes`` and name it DateUtils.groovy,
where everything after the groovy directory is part of the class' package. It's recommended for all Groovy classes to follow this
convention.

.. code-block:: groovy
    :linenos:

    package utils

    import java.text.SimpleDateFormat

    class DateUtils {

      static def parseModelValue(value){
        def dateFormat = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss")
        dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"))
        return dateFormat.parse(value)
      }

      static def formatDateAsIso(date) {
        def dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
        dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"))
        return dateFormat.format(date)
      }
    }

|

For more information on the FreeMarker (Templating) APIs, please see :ref:`templating-api`.

For more information on the Groovy APIs, please see :ref:`groovy-api`

  .. include:: /includes/scripts-templates-security.rst

------------------------------
Creating Content Type Examples
------------------------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   content-type-page
   content-type-component

