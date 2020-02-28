:is-up-to-date: True

.. index:: Create Your First Website

.. _your_first_website:

==================
Your First Website
==================

This section assumes that you have followed the steps in the :ref:`Quick Start Guide <quick_start_guide>` to get Crafter CMS and login. We will be using an out-of-the-box blueprint, called "Website_Editorial" to create your first website.

Let's get started building your first website!

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating your website from out of the box blueprint Website Editorial
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
After logging in, you'll see the Sites screen (Below).  Click on **Create Site**

.. image:: /_static/images/first-site/sites-screen.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Sites Screen - needs update

In the **Create Site** screen, the user is presented with the available blueprints or the option to use a remote Git repository instead of selecting a blueprint from the list.  To see all available blueprints, scroll through the two tabs available, ``Private Blueprints`` which contains default blueprints available out of the box from Crafter Studio including the option use a remote Git repository to create a new site, and ``Public Marketplace``. which contains blueprints submitted to `Crafter's Marketplace <https://github.com/marketplace/crafter-marketplace>`_

We're going to be using the "Website Editorial Blueprint".  Blueprints offer you a starting point for your website. New blueprints can be created and installed into the system.  Click on **Use** for the "Website Editorial Blueprint".

.. image:: /_static/images/first-site/create-site-choose-bp.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Create Site: Choose a Blueprint

Give the site a friendly name for the **Site Id** and a description.  As you are entering the Site Id, spaces are removed and upper case letters are converted to lower case letters.  Click on the ``Review`` button.

.. image:: /_static/images/first-site/create-site-basic-info.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Create Site: Basic Information


The next step is to review your entries and finally create your new site.  Click on the **Create Site** button and wait for the system to create your site based on the blueprint.

.. image:: /_static/images/first-site/create-site-review-create.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Create Site: Review and Create

A spinner will appear while it's creating the following: configuration, site content, and permissions based on the template provided by the blueprint.

.. image:: /_static/images/first-site/creating-spinner.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Creating a Site Spinner Dialog

When it's done you will be taken to the Home Page of your site:

.. image:: /_static/images/first-site/home-page.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Home Page

Your site is setup, we can now start adding/editing content!  To edit content you see on the page, click on **Edit** at the top (see above).  This will open a form (see below) where you can edit the page content.  To see other ways of editing page content, see :ref:`editing-a-page`.

.. image:: /_static/images/first-site/first-site-editing-content.jpg
    :width: 90 %
    :align: center
    :alt: Your First Website - Editing Content

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a new article page to the site
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We'll be adding a new article to the site.  To add a new article (or a new page), navigate to the level and location within the site navigation tree in the **Sidebar** where we want to create the new page.  In this case, we are adding an article under **articles** -> **2017** -> **3**.  Right click, then select **New Content**

.. image:: /_static/images/first-site/first-site-new-content.jpg
    :width: 80 %
    :align: center
    :alt: Your First Website - New Content

We'll then select the page template we want.  Since we are adding a new article to the site, we will be selecting the template **Page - Article**

.. image:: /_static/images/first-site/first-site-select-page-template.png
    :width: 80 %
    :align: center
    :alt: Your First Website - Select Page Template

We'll start filling out the form for our new article, "Where to find cherry blossoms in Virginia".  For the **Page URL**, replace spaces with dashes.  You can write the **Internal Name** and **Title** however you like as long as it is 50 characters or less as indicated on the right of the input boxes.  For the **Header** and **Left Rail**, we will be using the default provided by the template.

.. image:: /_static/images/first-site/first-site-page-properties.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Page Properties

The next section on the form is the **Metadata** section, where we can select the category for our article, the targeted segments of the article and whether our new article should be added to the **Featured** section.  Our new article, will be under **Entertainment** for the **Categories** and the targeted segments is **Gal**.  We will also be placing our new article in the **Featured** section.

.. image:: /_static/images/first-site/first-site-page-metadata.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Page Metadata Section

Finally, we add our blurb in the **Content** section of the form.  Here, we fill out the **Subject**, **Author**, **Date**, **Summary**, **Image** and **Section**, which contains the content of our article.

.. image:: /_static/images/first-site/first-site-page-content.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Page Content Section

Here's the site, with our newly created article in the featured section.

.. image:: /_static/images/first-site/first-site-home-page.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Newly Created Site Home Page

You can add more pages or modify/remove the existing pages from the blueprint, depending on your needs.  To remove or edit an existing page, navigate to the location of the article you want to edit/remove.  Right click on it, then select the action you would like to do on the page.

.. image:: /_static/images/first-site/first-site-edit-page.jpg
    :width: 50 %
    :align: center
    :alt: Your First Website - Edit a Page

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Updating the Contact Us section in the sidebar
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Another thing that we may want to modify from the blueprint, is the left rail.  For this example, we are going to modify the **Contact Us** section in the left rail (contact widget).  To edit items in the left rail, click on the pencil on the top right of your screen to enable in-context editing.  Pencils should appear on sections editable on the page.  Go to the top left of the left rail and click on the pencil there.

.. image:: /_static/images/first-site/first-site-edit-left-rail.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Edit the Left Rail

A form with all the editable content of the left rail will appear.  Go to the **Widgets** section of the form, select **Contact Widget** and then click on the **Edit** button on the right of the list of widgets.

.. image:: /_static/images/first-site/first-site-form-left-rail.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Left Rail Form

A form containing all the editable fields in the **Contact Us** section will appear.  Modify the fields that you want to change.

.. image:: /_static/images/first-site/first-site-contact-widget.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Contact Widget

Here's the sidebar with the **Contact Us** section updated.

.. image:: /_static/images/first-site/first-site-contact-us-updated.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Updated Contact Us Section

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Editing the features section, "Erat lacinia"
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We will now edit the features section in our blueprint.  The features in this section has been configured as components, as you will see in the images below.  There are multiple ways of editing the features section in the blueprint.

.. image:: /_static/images/first-site/first-site-add-features-drag-n-drop.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Add Features through Drag and Drop

We'll start out by adding a feature using the pencil at the top of the features section (In the image above, we will use the pencil captioned "Edit the whole features section").  Click on the pencil at the top of the features section.  A form will open containing the content of the section.  As you can see in the image below, there are currently two features in the section.

.. image:: /_static/images/first-site/first-site-pencil-edit.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Edit by Clicking on the Pencil

In this form, you can add another feature, by clicking on the **Add** button, which will give you a menu to **Create New - Features** or **Browse for Existing - features**

We will add a feature by selecting **Create New - Features** as seen on the image above.  This will open a form, where we will now enter our content.

.. image:: /_static/images/first-site/first-site-new-feature.png
    :width: 100 %
    :align: center
    :alt: Your First Website - New Feature

.. image:: /_static/images/first-site/first-site-new-feature-added.png
    :width: 100 %
    :align: center
    :alt: Your First Website - New Feature Added

We will now add another feature, by selecting **Browse for Existing - Features**, after clicking on the **Add** button.  This will bring up a form containing a list of existing features in the blueprint.  Select one, then click on **Add & Close** or, click on the radio button of your selection, then click on **Add Selection**.  This will add your selected existing feature to the features section of the page.

.. image:: /_static/images/first-site/first-site-browse-for-existing.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Browse for Existing Features Component

We will again add another feature, this time by opening the **Preview Tools** panel, and then clicking on **Page Components**.  A **Components** panel will open where the **Preview Tools** panel used to be, containing components that you can drag and drop onto the drop zone highlighted on the page.  To click and drag a new feature onto the drop zone, click and drag **Feature**, under the general heading.  This will then open up a form for you to add your new feature content.  To click and drag an existing feature onto the drop zone, click on **Browse Features**.  This will then open up a form containing a list of existing features that you may choose from.  Make your selection, the form with the list will then close and now you can drag and drop your selected existing feature onto the drop zone.

.. image:: /_static/images/first-site/first-site-drop-zone.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Drag and Drop Zone

From inside the drop zone, you may also re-arrange the features by clicking and dragging on a feature and placing it in your desired position.  Notice the positioning of the newly added feature and the existing features, which have been re-arranged compared to the previous image.  To delete/remove a feature from the drop zone, just click on the **X** as show in the image below.

.. image:: /_static/images/first-site/first-site-drag-n-drop.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Drag and Drop

To edit a feature, select a feature from the list and click on the **Edit** button on the right of the list.  Edit the fields you would like to modify, then click on **Save and Close** or **Save Draft** to save your changes or click on **Cancel** to discard all changes in the form.

.. image:: /_static/images/first-site/first-site-edit-feature.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Edit Feature

To remove a feature, select a feature from the list and click on the **X** button on the right of the list.  Or, from the drag and drop zone when you click on "Page Components" in the Preview Tools panel, click on the **X** next to the feature.

.. image:: /_static/images/first-site/first-site-remove-feature.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Remove Feature

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Your New/Edited Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Your site is published after creating the site from the Website_Editorial blueprint.  If you make edits to any of the pages or created new pages, it will need to be published for your site visitors to see the changes.  There are a couple of ways to publish your page edits.  The first thing you need to do is to navigate to the page you want to publish in the Site Navigation Tree (Enabled by clicking on **Sidebar** on the right of the Crafter CMS logo on the upper left hand corner of Studio).  After navigating to the page you want to publish, there are two ways to publish:

- Click on the page you want to publish.  In the context menu, click on **Approve & Publish**
- Right click on the page you want to publish from the Site Navigation Tree, then click on **Approve & Publish**

.. image:: /_static/images/first-site/first-site-publish.jpg
    :width: 100 %
    :align: center
    :alt: Your First Website - Publish Your New Content

You will then be prompted whether you want to publish the page now (**Items should go live now**), or publish the page at a later date and time (**Items go live on a specific date & time**).

.. image:: /_static/images/first-site/first-site-publish-option.png
    :width: 100 %
    :align: center
    :alt: Your First Website - Publish Options


For more information on content authoring, please see the documentation section: :ref:`Content Authoring <content_authors>`

