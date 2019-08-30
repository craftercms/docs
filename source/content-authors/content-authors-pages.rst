:is-up-to-date: True

.. index:: Content Authors Working with Pages, Pages

..  _content_authors_pages:

==================
Working with Pages
==================

This section describes how content authors can create and use pages to manage content.
Templates are used for page layouts in Crafter CMS.  A developer usually creates the templates that authors can then use to manage content.

-------------
Adding a Page
-------------
To add a page, in the Sidebar panel, click on the **Pages** folder.  Navigate to the level and location within the site navigation tree where you want to create the content, then right click on the parent page and select *New Content*

.. image:: /_static/images/page/page-add-new-content.png
    :width: 40 %    
    :align: center
    :alt: Content Author - Add New Page Content

You will then be prompted to choose a content type.  Select a starter page template from the list shown, then click *Ok* to open the form. If you need a template that's not available or want to modify the template, ask a developer to add/modify the template that you want.

.. image:: /_static/images/page/page-add-choose-content.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Add New Page Choose Content

A form will open containing the template selected. You can now start adding content.  Required fields have a red 'x' after the field label.  The number of required fields within each section is displayed in the Section bar for that section.

When data is entered into a field, the red 'x' will change to a green checkmark and the section bar will update with the new status.

.. image:: /_static/images/page/page-add-template-open.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Add New Page Open Template

An action bar is available at the bottom of the screen that cannot be scrolled away. This bar allows users to Save & Close, Save Draft or Cancel.

    * **Save Draft** will save the content entered on the form
    * **Save & Close** will close the form and load the preview screen with the newly saved data.
    * **Cancel** will close the form without making any changes and will warn users if there are unsaved changes.
    * |pageActionBarMinMax| (arrow pointing up) will minimize/maximize the form.

.. |pageActionBarMinMax| image:: /_static/images/page/page-action-bar-min-max.png
                            :width: 5%
                            :alt: Page - Action Bar Minimize/Maximize Icon

An error form will appear when you try to *Save and Close* without filling out all the required fields.

.. image:: /_static/images/page/page-save-error.png
    :width: 50 %    
    :align: center
    :alt: Content Author - Page Save Error

.. _editing-a-page:

--------------
Editing a Page
--------------
There are multiple ways to edit a page.  
    
    #. In the Sidebar panel, click on the **Pages** folder.  Navigate to the level and location within the site navigation tree where you want to edit the content, then right click and select **Edit**.  A form containing the page content you want to edit will open.
    
    #. In the Sidebar panel, click on the **Pages** folder.  Navigate to the level and location within the site navigation tree where you want to edit the content and click on it to display the page.  Click on the pencil on the top right corner (context nav) to turn on in-context editing if it's not turned on yet.  Click on the pencil on top of the content you want to edit.  A form containing the page content you want to edit will open.

    #. In the Sidebar panel, click on the **Pages** folder.  Navigate to the level and location within the site navigation tree where you want to edit the content and click on it to display the page.  Click **Edit** on the context navigation menu. A form containing the page content you want to edit will open.

.. image:: /_static/images/page/page-edit.jpg
    :width: 95 %
    :align: center
    :alt: Content Author - Edit a Page


----------
Versioning
----------
Crafter CMS tracks all changes to pages/contents/static assets in your site.  

All page changes/versions can be viewed, compared with other versions and reverted to an older version.  There are a couple of ways to view the History of your desired page.  Navigate to the page you want to view the history of from the site navigation tree.

After selecting the page you want, click on the **History** menu of the context navigation menu at the top of your browser.

.. image:: /_static/images/page/page-access-history.png
    :width: 95 %
    :align: center
    :alt: Content Author - Access Page History

Another way to view the history of a page is by right clicking on the page you want and then selecting **History**

.. image:: /_static/images/page/page-access-history-tree.png
    :width: 30 %
    :align: center
    :alt: Content Author - Page Access History Tree
    

^^^^^^^^^^^^^^^
Version History
^^^^^^^^^^^^^^^
There are a number of things that you can do in the Version History dialog.  On the right hand side of the dialog, for each entry/version on the list, there are a number of actions that you can perform on the version you selected, represented by icons.    

+------------------------+--------------------------------------------------------+
|| Actions               || Description                                           |
+========================+========================================================+
|| View this version     || View details of the selected version of the page such |
||                       || as the creation date, last modified date, page content|
+------------------------+--------------------------------------------------------+
|| Compare to current    || Compares the selected version to the current version  |
||                       || of the page                                           |
+------------------------+--------------------------------------------------------+
|| Revert to this version|| Reverts the page content to selected version          | 
+------------------------+--------------------------------------------------------+

For each version listed, there's a checkbox on the left, allowing you to select two versions and then compare them by selecting the **Compare** button.  Please see figure below.

.. image:: /_static/images/page/page-history.png
    :width: 95 %
    :align: center
    :alt: Content Author - Page History

------------------
Form based editing
------------------

Form controls are the building blocks of forms.  It lets you get content into the system.  

Forms are the means by which content is captured in Crafter Studio. A form generally maps to or represents a type of object in the system for example a certain kind of page - like a section page or a banner or video. Let's look at some common elements of a form and examine some of the controls that we use to get content in to the system.

.. image:: /_static/images/page/page-form.png
    :width: 95 %
    :align: center
    :alt: Content Author - Page Form

When a new page is created or a page is edited, the form interface for these functions will open in a new dialog. A user can Expand or Collapse all of the sections on the page using the "Expand All" or "Collapse All" links at the top of the page.  
Clicking the +/- control on the Section Label will toggle the expanded or collapsed state for each section.

The number of required fields within each section is displayed in the Section bar for that section.

An icon in front of the Section Label will display a red 'x' (when required fields are not complete), or a green check mark (when all required fields are complete) to denote status.

Every required field will have a red 'x' icon after it's Field Label.

When data is entered into a field the red 'x' will change to a green check mark and the section bar will update with the new status. An action bar is available at the bottom of the screen that cannot be scrolled away. This bar allows users to Save & Close, Save Draft or Cancel, and minimize/maximize the form.

**Save & Close** will close the New Page/Editing dialog and load the preview screen with the newly saved data.

**Save Draft** will save your changes and leave the New Page/Editing dialog open

**Cancel** will close the New Page/Editing screen without making any changes.

The fields within each section are completely modular and can be applied to any given page as needed. This modularity allows us to craft edit pages for any new screens as they arise without the need for specific UI work on the edit screen.

^^^^^^^^^^^^^^^^
Editing Controls
^^^^^^^^^^^^^^^^

Here are some controls that authors may encounter while editing content:

* Dropdowns - Allows the user to select an item from the list.  When not selecting an item from the dropdown, the selected item is shown on the box.

.. image:: /_static/images/page/form-control-dropdown-expand.png
    :width: 40 %    
    :align: center
    :alt: Content Author - Form Control Dropdown Expanded

.. image:: /_static/images/page/form-controls-dropdown.png
    :width: 40 %    
    :align: center
    :alt: Content Author - Form Controls Dropdown

* Text areas - Allows the user to enter text up to the character limit indicated at the top of the text area input box.

.. image:: /_static/images/page/form-control-text-area.png
    :width: 50 %    
    :align: center
    :alt: Content Author - Form Control Text Area

* Checkbox - Allows the user to make two choices, depending on what was setup.

.. image:: /_static/images/page/form-control-checkbox.png
    :width: 20 %
    :align: center
    :alt: Content Author - Form Control Checkbox

* Group checkboxes - Allows users to select one or more items in a group
* Input boxes - Simple text input control allows users to input text up to the character limit indicated next to the input box.  The character limit specifies both the MAXLENGTH and SIZE attributes for the field.  The character counter will count up as the user types into the field.
* Date/Time pickers - The Date and Time input can allow entry of both Date and Time, only Date or only Time, depending on what was setup.
* Rich text editors - What You See Is What You Get (WYSIWYG) editor that allows authors to arrange and style content without needing to know HTML.  Below is a more detailed description on working in the RTE.
* Repeating Group - Group of controls (1 or more controls) that can be duplicated multiple times by clicking on **Add Another**.  If there are two or more instances, "Move Up" and "Move Down" links will be available which will move the group up or down in relation to the other group instances.

.. image:: /_static/images/page/form-controls.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Form Controls

* Image pickers - Allows the user to select an image from whatever source is allowed, such as Upload Image or Existing Image (asset uploaded to the system).  To select an image, click on **Add** (when there's no image selected yet) or **Replace** to change the selected image

.. image:: /_static/images/page/form-control-image-picker.png
    :width: 60 %    
    :align: center
    :alt: Content Author - Form Control Image Picker

* Video pickers - Allows the user to select a video from whatever source is allowed, such as Upload Video (video to be uploaded) or Existing Video (asset uploaded to the system)

.. image:: /_static/images/page/form-control-video-picker.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Form Control Video Picker

* Page Order - Allows the user to change the position of the page in the navigation structure.  To change the position of the page, select **Yes**, an **Edit Position** button will appear.  Click on the **Edit Position** button, a form will appear that lets the user drag and drop the position of the page the user is editing, called **Current Page**.  The first time navigation is turned on for the page, the **Current Page** will always default to the top position.

.. image:: /_static/images/page/form-control-page-order-no.png
    :width: 30 %    
    :align: center
    :alt: Content Author - Form Control No Page Order

.. image:: /_static/images/page/form-control-page-order-yes.png
    :width: 45 %
    :align: center
    :alt: Content Author - Form Control Yes Page Order

.. image:: /_static/images/page/form-control-page-order.png
    :width: 50 %    
    :align: center
    :alt: Content Author - Form Control Page Order
            
* Item Selector - Allows the user to select an item from configured sources.  Clicking the **Add** button opens a menu that lets the user pick from the list.  Clicking on **Add & Close** or **Add Selection** adds the selected item to the selector list

.. image:: /_static/images/form-controls/form-control-item-selector.png
    :width: 50 %    
    :align: center
    :alt: Content Author - Form Control Item Selector

.. image:: /_static/images/page/form-control-item-select.png
    :width: 70 %
    :align: center
    :alt: Content Author - Form Control Item Select

* File name - Allows the user to enter a name for the file.  Whitespaces are replaced by a dash automatically and a maximum length for the name is specified next to the filename input box.

.. image:: /_static/images/page/form-control-filename.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Form Control Filename

^^^^^^^^^^^^^^^^^^^^^^^^^^
Placing Content Components
^^^^^^^^^^^^^^^^^^^^^^^^^^
Drag and drop makes it easy for authors to visually assemble pages. Authors simply choose a component from a pre-defined list of components/widgets, drag them on to the screen, place them where they want (in defined drop zones), and then configure them. Authors may also move components from one zone to another or remove components.

The drag and drop panel puts the page in component construction mode.  Regions on the page that are wired to accept components ("drop zones") are highlighted.  In the component construction mode, the user may drag an existing component or place a new component to be configured in the drop zone.  The user may also drag a component from one region to another.  Crafter Studio administrators can configure what components are available in this panel.


.. image:: /_static/images/page/page-components.png
    :width: 95 %    
    :align: center
    :alt: Content Author - Page Components

Drag and Drop Components
^^^^^^^^^^^^^^^^^^^^^^^^

* Placing new components

The user may create new components by dragging components from the panel (**General** section) out and on to the screen.  A dialog is presented to the user when a new component is dropped on the screen so that the author can configure the component.

.. image:: /_static/images/page/page-components-general.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Page Components General

* Placing existing components

The user may add existing components into the panel by clicking on **Browse Features**.  A list of existing components will be presented.  

.. image:: /_static/images/page/page-components-browse-features.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Page Components Browse Features

Select a component and the list will close then prompt you to place the component somewhere in the drop zone.

.. image:: /_static/images/page/page-components-browse-selected.png
    :width: 95 %    
    :align: center
    :alt: Content Author - Page Components Browse Selected

* Moving components around

Components inside the drop zones may be moved around to the desired position.  Simply click, then drag and drop to the desired position in the drop zone.  Notice the positions of the features in the image below compared to the image above.

.. image:: /_static/images/page/page-components-move.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Page Components Move

* Deleting components

To remove a component from the drop zone, simply click on the "x"

.. image:: /_static/images/page/page-components-remove.png
    :width: 75 %    
    :align: center
    :alt: Content Author - Page Components Remove

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Working in the Rich Text Editor(RTE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The RTE (Rich Text Editor) is intended to provide an in-context editing experience from within a form (rather than a preview) that allows authors to arrange and style content without needing to know HTML.  In an RTE field, the RTE toolbar is at the top, and is always available regardless of how far down you scroll in the RTE field.

.. image:: /_static/images/page/rte-screen.png
    :width: 75 %    
    :align: center
    :alt: Content Author - RTE Screen


There are a number of tools available from the RTE out of the box for editing your content.  Custom tools may also be added to the RTE, depending on your needs.  Please see the developer section :ref:`rte2-setup` of the docs for more details.

--------------
Copying a Page
--------------

To copy a page, in the Sidebar panel, click on the **Pages** folder.  Navigate to the level and location within the site navigation tree where you want to copy content, then right click on the page and select **Copy**

.. image:: /_static/images/page/page-copy-menu.png
    :width: 50 %
    :align: center
    :alt: Content Author - Copy Page Menu

In the Sidebar panel, navigate to the level and location within the site navigation tree where you want to paste the copied content, then right click and select **Paste**

.. image:: /_static/images/page/page-paste-menu.png
    :width: 50 %
    :align: center
    :alt: Content Author - Paste Page Menu

Depending on how the page content type has been modeled (dependencies), copying and pasting a page may also create copies of items in the page. These dependencies are setup by the developers when creating the content type.  Generally, when an item on a page is uploaded to the following locations: ``/site/components/item/.*`` or  ``/static-assets/item/.*``, when the page containing those items is copied, a copy of the uploaded items are created.

To learn more about these dependencies and see examples, see :ref:`item-specific-dependencies` or :ref:`copy-dependencies-configuration`.

