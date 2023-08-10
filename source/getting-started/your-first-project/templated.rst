:is-up-to-date: False
:last-updated: 4.1.1

.. index:: Your First Project (templated), templated project

.. _your-first-editorial-project:

==============================
Your First Project (templated)
==============================

In this section, we will create a project using an out-of-the-box blueprint called "Website Editorial" and show you:

- how to add a new page to your project,
- how to update the contact section on the left-rail
- how to edit a section in the project
- how to publish the page we created above

It is assumed that you have followed the steps in the :ref:`Getting Started <getting-started>` to install CrafterCMS and login.

Let's get started building your first editorial website!

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating a Project from the Editorial Blueprint
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
After logging in, you'll see the Projects screen (Below). Click on **Create Project**

.. image:: /_static/images/first-project/projects-screen.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Projects Screen

|

In the **Create Project** screen, the user is presented with the available blueprints or the option to use a remote Git repository instead of selecting a blueprint from the list. To see all available blueprints, scroll through the dialog to see the default blueprints available out of the box from Crafter Studio including the option to use a remote Git repository to create a new project, and ``Public Marketplace`` blueprints which contains blueprints submitted to the `Crafter Marketplace GitHub App <https://github.com/marketplace/crafter-marketplace>`__

We're going to be using the "Website Editorial Blueprint". Blueprints offer you a starting point for your website. New blueprints can be created and installed into the system. Click on **Use** for the "Website Editorial Blueprint".

.. image:: /_static/images/first-project/create-project-choose-bp.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Create Project: Choose a Blueprint

|

Give the project a friendly name for the **Project Name** and a description. Click on the ``Review`` button.

.. image:: /_static/images/first-project/create-project-basic-info.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Create project: Basic Information

|

The next step is to review your entries and finally create your new project. Click on the **Create Project** button and wait for the system to create your project based on the blueprint.  A spinner will then appear while it's creating the following: configuration, project content, and permissions based on the template provided by the blueprint.

.. image:: /_static/images/first-project/create-project-review-create.webp
   :width: 50 %
   :alt: Your First Website - Create Project: Review and Create

.. image:: /_static/images/first-project/creating-spinner.webp
   :width: 48 %
   :alt: Your First Website - Creating a Project Spinner Dialog

|

When it's done you will be taken to the Home Page of your project:

.. image:: /_static/images/first-project/home-page.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Home Page

|

Your project is setup, we can now start adding/editing content!

To edit content you see on the page, click on the pencil icon on the top right to turn on in-context editing of the page (Edit mode).  Just hover your mouse on sections of the page you'd like to edit, and a pencil will be displayed on editable items on the page. Once the pencil appears, just click and you can now start adding/editing.

.. image:: /_static/images/content-author/preview-page-in-context-editing.webp
    :width: 65 %
    :align: center
    :alt: Your First Website - Preview In-Context Editing

|

To edit metadata in the page, click on the three dots next to the page url at the toolbar at the top, then select **Edit**. This will open a form (see below) where you can edit the page content. To see other ways of editing page content, see :ref:`editing-a-page`.

.. image:: /_static/images/first-project/first-project-editing-content.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Editing Content

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a New Article Page to the Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We'll be adding a new article to the project. To add a new article (or a new page), we'll use the
quick create button (``+``) next to the project name on the top left of your screen. This will
open a form for your new article under ``/articles/{year}/{month}``, where ``{year}`` is the current year and
``{month}`` is the current month

.. image:: /_static/images/page/quick-create-btn-expanded.webp
   :width: 30 %
   :align: center
   :alt: Your First Website - Add New Page Via Quick Create

|

Another way to start creating your new article is to navigate to the level and location within the project navigation tree in the Sidebar where we want to create the new page. In this case, we are adding an article under **articles** -> **2023** -> **6**. Click on the three dots next to the folder, then select **New Content**. We'll then select the page template we want. Since we are adding a new article to the project, we will be selecting the template **Article**


.. image:: /_static/images/first-project/first-project-new-content.webp
   :width: 48 %
   :alt: Your First Website - New Content

.. image:: /_static/images/first-project/first-project-select-page-template.webp
   :width: 48 %
   :alt: Your First Website - Select Page Template

|

We'll start filling out the form for our new article, "Where to find cherry blossoms in Virginia". For the **Page URL**, replace spaces with dashes. You can write the **Internal Name** and **Title** however you like as long as it is 50 characters or less as indicated on the right of the input boxes. For the **Header** and **Left Rail**, we will be using the default provided by the template.

.. image:: /_static/images/first-project/first-project-page-properties.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Page Properties

|

The next section on the form is the **Metadata** section, where we can select the category for our article, the targeted segments of the article and whether our new article should be added to the **Featured** section. Our new article, will be under **Entertainment** for the **Categories** and the targeted segments is **Gal**. We will also be placing our new article in the **Featured** section.

.. image:: /_static/images/first-project/first-project-page-metadata.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Page Metadata Section

|

Finally, we add our blurb in the **Content** section of the form. Here, we fill out the **Subject**, **Author**, **Date**, **Summary**, **Image** and **Section**, which contains the content of our article.

.. image:: /_static/images/first-project/first-project-page-content.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Page Content Section

|

Here's the project, with our newly created article in the featured section.

.. image:: /_static/images/first-project/first-project-home-page.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Newly Created project Home Page

|

You can add more pages or modify/remove the existing pages from the blueprint, depending on your needs. To remove or edit an existing page, navigate to the location of the article you want to edit/remove. Right click on it, then select the action you would like to do on the page.

.. image:: /_static/images/first-project/first-project-edit-page.webp
   :width: 40 %
   :align: center
   :alt: Your First Website - Edit a Page

|

You can also use the address bar at the top to search for pages that you'd like to edit

.. image:: /_static/images/first-project/first-project-search-for-page.webp
   :width: 75 %
   :align: center
   :alt: Your First Website - Search for a Page in Address Bar

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Updating the Contact Us Section in the Sidebar
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Another thing that we may want to modify from the blueprint, is the left rail. For this example,
we are going to modify the **Contact Us** section in the left rail (contact widget). To edit
items in the left rail, toggle the ``Edit Mode`` switch on the top right of your screen to the
``on`` position to enable in-context editing. A pencil should appear on sections editable on
the page when you hover your mouse on them.

Let's update the address listed under ``Contact Us``, and to do this, mouse over on the address
section then click on it.  A cursor will appear and you may now edit the address. To edit the
other items in the ``Contact Us`` section, simply do the same as you did for the address.  Mouse
over on the item, then click on it and start editing. The image on the right displays the edited
``Contact Us`` section.

.. image:: /_static/images/first-project/first-project-edit-contact-address.webp
   :width: 20 %
   :alt: Your First Website - Edit the Contact Address in the Left Rail

.. image:: /_static/images/first-project/first-project-edit-contact-paragraph.webp
   :width: 45 %
   :alt: Your First Website - Edit the Contact Paragraph in the Left Rail

.. image:: /_static/images/first-project/first-project-edited-contact.webp
   :width: 18 %
   :alt: Your First Website - Contact Us section Edited

|

There are other ways to edit the items in the ``Contact Us`` section.

You can open the Sidebar, then navigate to ``/components/contacts``, mouse over ``Contact Widget``,
then click on ``Options`` (the three dots next to the ``Contact Widget`` in the Sidebar), then
finally select ``Edit``. A form with all the editable content of the contact widget will appear.

You can enable ``Edit Mode`` (pencil at the top right), then click on the ``Contact Us`` area to
highlight the ``Contact Widget``.  From there, you will be given some options for editing the
widget.  Clicking on the pencil will allow you to edit the content via a form.

.. image:: /_static/images/first-project/first-project-edit-left-rail.webp
   :width: 75 %
   :align: center
   :alt: Your First Website - Edit the "Contact Us" Section in the Left-Rail

|

A form containing all the editable fields in the **Contact Us** section will appear using the two
methods describe above. Modify the fields that you want to change.

.. image:: /_static/images/first-project/first-project-contact-widget.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Contact Widget

|


^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Editing the Features Section
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We will now edit the features section in our blueprint. The features in this section has been configured as components, as you will see in the images below. There are multiple ways of editing the features section in the blueprint.

.. image:: /_static/images/first-project/first-project-add-features-drag-n-drop.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Add Features through Drag and Drop

|

We will add another feature, by using the ``Add Components`` tool in the Experience Builder (XB) panel
located on the right. First, make sure that ``Edit Mode`` is enabled by clicking on the pencil icon
at the top right.  Click  on the ``Add Components`` tool on the right hand and it will list all components that
you can drag and drop onto drop targets on the page. To click and drag a new feature onto the
feature's drop target, click and drag ``Feature`` from the XB panel on to the feature drop target
area on the page. This will then add a new feature component on the page containing some default
items that you can then modify.

.. image:: /_static/images/first-project/first-project-drop-zone.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Drag and Drop Zone

|

From inside the drop zone, you may also re-arrange the features by enabling ``Move mode``
(double column of three dots icon on the top right next to the pencil) then clicking and dragging
on a feature and placing it in your desired position.

.. image:: /_static/images/first-project/first-project-drag-n-drop.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Drag and Drop

|

To delete/remove a feature from the drop zone, just drag the feature to the trash bin that appears on
the bottom right of the screen when dragging around a component.

.. image:: /_static/images/first-project/first-project-drag-n-drop-delete.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Drag and Drop Delete via XB

|

In ``Edit mode``, another way to remove a feature, is by clicking on the feature,
then selecting the trash can icon (see image below on the left).

Yet another way to remove a feature from ``Edit mode``, is to edit the features section via
the content form, then select a feature from the list and click on the trash can icon on the right
(see image below on the right).

.. image:: /_static/images/first-project/first-project-remove-feature2.webp
   :width: 35 %
   :alt: Your First Website - Delete Feature via XB

.. image:: /_static/images/first-project/first-project-remove-feature.webp
   :width: 55 %
   :alt: Your First Website - Remove Feature

|


To edit a feature via the content form from XB, simply mouse over the area of the feature you want to edit,
then click on it and start editing

.. image:: /_static/images/first-project/first-project-xb-edit2-feature.webp
   :width: 65 %
   :alt: Your First Website - Edit Feature via XB

.. image:: /_static/images/first-project/first-project-xb-edit-feature.webp
   :width: 25 %
   :alt: Your First Website - Edit Feature via XB

|

Another way to edit a feature, is to mouse over the feature you want to edit (as shown on the right above),
click on it then select **Edit**. Edit the fields you would like to modify, then click on **Save & Close**
or **Save & Minimize** to save your changes or click on **Cancel** to discard all changes in the form.

.. image:: /_static/images/first-project/first-project-edit-feature.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Edit Feature

|

In the next example, we'll add a feature via the content form either using the pencil that appears when you
hover your mouse over the middle of the features section then click on it and finally select ``Edit``.  Or
through ``Options`` -> ``Edit`` from the context nav of the Home page.  This will open the content form.
As you can see in the image below, there are currently four features in the section.

.. image:: /_static/images/first-project/first-project-pencil-edit.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Edit by Clicking on the Pencil

|

In this form, you can add another feature, by clicking on ``Add +``, which will give you a menu to ``Create new embedded Feature`` (Uses an embedded data source available only on the current page/component) or ``Create new shared Feature`` (Uses a shared data source available to other pages/components)

We will add a feature by selecting **Create new embedded Feature** after you click on ``Add +``. This will open a form, where we will now enter our content.

.. image:: /_static/images/first-project/first-project-new-feature.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - New Feature

|

.. image:: /_static/images/first-project/first-project-new-feature-added.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - New Feature Added

|

We will now add another feature, by using the ``Browse Components`` tool in the Page Builder panel located on the right that is available when ``Edit Mode`` is on. This will bring up a list of existing shared features in the blueprint. Select one, then drag it to the drop target area on the page. This will add your selected existing feature to the features section of the page.

.. image:: /_static/images/first-project/first-project-browse-for-existing.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Browse for Existing Features Component

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Your New/Edited Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Your project is not yet published after creating the project from the Website_Editorial blueprint. Once your project is published, if you make edits to any of the pages or created new pages, it will need to be published for your project visitors to see the changes. There are a couple of ways to publish your page edits. The first thing you need to do is to navigate to the page you want to publish in the Sidebar enabled by toggling on the Crafter logo with hamburger icon on the upper left hand corner of Studio. After navigating to the page you want to publish, there are two ways to publish:

- Click on the page you want to publish. In the toolbar at the top, click on the three dots next to the page address url, then select **Publish**
- Click on the three dots next to the page you want to publish from the Sidebar, then click on **Publish**

.. image:: /_static/images/first-project/first-project-publish.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Publish Your New Content

|

   You will then be prompted whether you want to publish the page now (**Now**), or publish the page at a later date and time (**Later**).

.. image:: /_static/images/first-project/first-project-publish-option.webp
   :width: 65 %
   :align: center
   :alt: Your First Website - Publish Options

|

For more information on content authoring, please see the documentation section: :ref:`Content Authoring <author>`

