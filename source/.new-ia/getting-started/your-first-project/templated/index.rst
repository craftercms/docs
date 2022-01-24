:is-up-to-date: False

.. index:: Your First Project

.. Section outline
   14.4.2 Site Example (P)
   14.4.2.1 Editorial

.. _newIa-your-first-editorial-website:

==============================
Your First Project (templated)
==============================

In this section, we will create a site using an out-of-the-box blueprint called "Website Editorial" and show you:

- how to add a new page to your site,
- how to update the contact section on the left-rail
- how to edit a section in the site
- how to publish the page we created above

It is assumed that you have followed the steps in the :ref:`Getting Started <newIa-getting-started>` to install CrafterCMS and login.

Let's get started building your first editorial website!

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating your website from out of the box blueprint Website Editorial
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
After logging in, you'll see the Sites screen (Below).  Click on **Create Site**

.. image:: /_static/images/first-site/sites-screen.png
   :width: 100 %
   :align: center
   :alt: Your First Website - Sites Screen

|

In the **Create Site** screen, the user is presented with the available blueprints or the option to use a remote Git repository instead of selecting a blueprint from the list.  To see all available blueprints, scroll through the two tabs available, ``Private Blueprints`` which contains default blueprints available out of the box from Crafter Studio including the option to use a remote Git repository to create a new site, and ``Public Marketplace``. which contains blueprints submitted to `Crafter's Marketplace <https://github.com/marketplace/crafter-marketplace>`_

We're going to be using the "Website Editorial Blueprint".  Blueprints offer you a starting point for your website. New blueprints can be created and installed into the system.  Click on **Use** for the "Website Editorial Blueprint".

.. image:: /_static/images/first-site/create-site-choose-bp.jpg
   :width: 90 %
   :align: center
   :alt: Your First Website - Create Site: Choose a Blueprint

|

Give the site a friendly name for the **Site Name** and a description.  Click on the ``Review`` button.

.. image:: /_static/images/first-site/create-site-basic-info.png
   :width: 90 %
   :align: center
   :alt: Your First Website - Create Site: Basic Information

|

The next step is to review your entries and finally create your new site.  Click on the **Create Site** button and wait for the system to create your site based on the blueprint.

.. image:: /_static/images/first-site/create-site-review-create.png
   :width: 90 %
   :align: center
   :alt: Your First Website - Create Site: Review and Create

|

A spinner will appear while it's creating the following: configuration, site content, and permissions based on the template provided by the blueprint.

.. image:: /_static/images/first-site/creating-spinner.png
   :width: 90 %
   :align: center
   :alt: Your First Website - Creating a Site Spinner Dialog

|

When it's done you will be taken to the Home Page of your site:

.. image:: /_static/images/first-site/home-page.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Home Page

Your site is setup, we can now start adding/editing content!  To edit content you see on the page, click on the three dots next to the page url at the toolbar at the top, then select **Edit**.  This will open a form (see below) where you can edit the page content.  To see other ways of editing page content, see :ref:`newIa-editing-a-page`.

.. image:: /_static/images/first-site/first-site-editing-content.jpg
   :width: 90 %
   :align: center
   :alt: Your First Website - Editing Content

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a new article page to the site
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We'll be adding a new article to the site.  To add a new article (or a new page), navigate to the level and location within the site navigation tree in the **Site Explorer** where we want to create the new page.  In this case, we are adding an article under **articles** -> **2021** -> **3**.  Click on the three dots next to the folder, then select **New Content**

.. image:: /_static/images/first-site/first-site-new-content.jpg
   :width: 80 %
   :align: center
   :alt: Your First Website - New Content

|

We'll then select the page template we want.  Since we are adding a new article to the site, we will be selecting the template **Article**

.. image:: /_static/images/first-site/first-site-select-page-template.jpg
   :width: 80 %
   :align: center
   :alt: Your First Website - Select Page Template

|

We'll start filling out the form for our new article, "Where to find cherry blossoms in Virginia".  For the **Page URL**, replace spaces with dashes.  You can write the **Internal Name** and **Title** however you like as long as it is 50 characters or less as indicated on the right of the input boxes.  For the **Header** and **Left Rail**, we will be using the default provided by the template.

.. image:: /_static/images/first-site/first-site-page-properties.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Page Properties

|

The next section on the form is the **Metadata** section, where we can select the category for our article, the targeted segments of the article and whether our new article should be added to the **Featured** section.  Our new article, will be under **Entertainment** for the **Categories** and the targeted segments is **Gal**.  We will also be placing our new article in the **Featured** section.

.. image:: /_static/images/first-site/first-site-page-metadata.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Page Metadata Section

|

Finally, we add our blurb in the **Content** section of the form.  Here, we fill out the **Subject**, **Author**, **Date**, **Summary**, **Image** and **Section**, which contains the content of our article.

.. image:: /_static/images/first-site/first-site-page-content.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Page Content Section

|

Here's the site, with our newly created article in the featured section.

.. image:: /_static/images/first-site/first-site-home-page.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Newly Created Site Home Page

|

You can add more pages or modify/remove the existing pages from the blueprint, depending on your needs.  To remove or edit an existing page, navigate to the location of the article you want to edit/remove.  Right click on it, then select the action you would like to do on the page.

.. image:: /_static/images/first-site/first-site-edit-page.jpg
   :width: 50 %
   :align: center
   :alt: Your First Website - Edit a Page

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Updating the Contact Us section in the sidebar
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Another thing that we may want to modify from the blueprint, is the left rail.  For this example, we are going to modify the **Contact Us** section in the left rail (contact widget).  To edit items in the left rail, toggle the ``Edit Mode`` switch on the top right of your screen to the ``on`` position to enable in-context editing.  A pencil should appear on sections editable on the page when you hover your mouse on them.  Go to the the left rail and click there, then select ``Edit``

.. image:: /_static/images/first-site/first-site-edit-left-rail.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Edit the Left Rail

|

A form with all the editable content of the left rail will appear.  Go to the **Widgets** section of the form, select **Contact Widget** and then click on the **Edit** button on the right of the list of widgets.

.. image:: /_static/images/first-site/first-site-form-left-rail.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Left Rail Form

|

A form containing all the editable fields in the **Contact Us** section will appear.  Modify the fields that you want to change.

.. image:: /_static/images/first-site/first-site-contact-widget.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Contact Widget

|

Here's the sidebar with the **Contact Us** section updated.  Notice that you can also modify the text in the ``Contact Us`` section directly by turning on ``Edit Mode`` and hovering the mouse over the area you wanted to edit, then clicking on it.

.. image:: /_static/images/first-site/first-site-contact-us-updated.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Updated Contact Us Section

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Editing the features section, "Erat lacinia"
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We will now edit the features section in our blueprint.  The features in this section has been configured as components, as you will see in the images below.  There are multiple ways of editing the features section in the blueprint.

.. image:: /_static/images/first-site/first-site-add-features-drag-n-drop.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Add Features through Drag and Drop

|

We'll start out by adding a feature using the pencil  that appears when you hover your mouse over the middle of the features section as shown in the image above.  Click on the section then select ``Edit``.  A form will open containing the content of the section.  As you can see in the image below, there are currently four features in the section.

.. image:: /_static/images/first-site/first-site-pencil-edit.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Edit by Clicking on the Pencil

|

In this form, you can add another feature, by clicking on ``Add +``, which will give you a menu to ``Create new embedded Feature`` (Uses an embedded data source available only on the current page/component) or ``Create new shared Feature`` (Uses a shared data source available to other pages/components)

We will add a feature by selecting **Create new embedded Feature** after you click on ``Add +``.  This will open a form, where we will now enter our content.

.. image:: /_static/images/first-site/first-site-new-feature.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - New Feature

|

.. image:: /_static/images/first-site/first-site-new-feature-added.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - New Feature Added

|

We will now add another feature, by using the ``Browse Components`` tool in the Page Builder panel located on the right that is available when ``Edit Mode`` is on.  This will bring up a list of existing shared features in the blueprint.  Select one, then drag it to the drop target area on the page.  This will add your selected existing feature to the features section of the page.

.. image:: /_static/images/first-site/first-site-browse-for-existing.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Browse for Existing Features Component

|

We will again add another feature, this time by using the ``Components`` tool in the Page Builder panel located on the right.  Click  on the ``Components`` tool and it will list all components that you can drag and drop onto drop targets on the page.  To click and drag a new feature onto the feature's drop target, click and drag ``Feature`` from the Page Builder panel on to the feature drop target area on the page.  This will then add a new feature component on the page containing some default items that you can then modify.

.. image:: /_static/images/first-site/first-site-drop-zone.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Drag and Drop Zone

|

From inside the drop zone, you may also re-arrange the features by clicking and dragging on a feature and placing it in your desired position.

.. image:: /_static/images/first-site/first-site-drag-n-drop.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Drag and Drop

|

To delete/remove a feature from the drop zone, just drag the feature to the trash bin that appears on the bottom right of the screen when dragging around a component.

.. image:: /_static/images/first-site/first-site-drag-n-drop-delete.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Drag and Drop Delete

|

To edit a feature, mouse over the feature you want to edit, click on it then select **Edit**.  Edit the fields you would like to modify, then click on **Save & Close** or **Save & Minimize** to save your changes or click on **Cancel** to discard all changes in the form.

.. image:: /_static/images/first-site/first-site-edit-feature.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Edit Feature

|

Another way to remove a feature, is to edit the features section, then select a feature from the list and click on the trash can icon on the right.

.. image:: /_static/images/first-site/first-site-remove-feature.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Remove Feature

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Your New/Edited Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Your site is not yet published after creating the site from the Website_Editorial blueprint.  Once your site is published, if you make edits to any of the pages or created new pages, it will need to be published for your site visitors to see the changes.  There are a couple of ways to publish your page edits.  The first thing you need to do is to navigate to the page you want to publish in the ``Site Explorer`` enabled by toggling on the **Sidebar** (Crafter logo with hamburger icon on the upper left hand corner of Studio).  After navigating to the page you want to publish, there are two ways to publish:

- Click on the page you want to publish.  In the toolbar at the top, click on the three dots next to the page address url, then select **Publish**
- Click on the three dots next to the page you want to publish from the Site Explorer, then click on **Publish**

.. image:: /_static/images/first-site/first-site-publish.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Publish Your New Content

|

   You will then be prompted whether you want to publish the page now (**Now**), or publish the page at a later date and time (**Later**).

.. image:: /_static/images/first-site/first-site-publish-option.jpg
   :width: 100 %
   :align: center
   :alt: Your First Website - Publish Options

|

For more information on content authoring, please see the documentation section: :ref:`Content Authoring <newIa-author>`

