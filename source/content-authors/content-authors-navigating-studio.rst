:is-up-to-date: True

.. index:: Navigating Studio

..  _content-authors-navigating-studio:

================================
Navigating Around Crafter Studio
================================

^^^^^
Sites
^^^^^
**Sites** is the first screen you will encounter after logging in to Crafter Studio.  This screen lists all of the websites you have been granted permission to.
From this screen you can navigate to any site's preview or dashboard.

.. image:: /_static/images/content-author/my-sites-screen.png
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - My Sites Screen

You can get back to the **Sites** screen by:
    * Selecting  |mainMenu| **Main Menu** in the top right corner
    * Or logging out (sign out) and logging back in (sign in)

.. image:: /_static/images/content-author/get-to-my-sites.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Get to My Sites Screen


Sites (Admin)
^^^^^^^^^^^^^
Crafter Studio administrators can also create and delete sites from this screen.

.. image:: /_static/images/content-author/site-delete.png
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - Delete Site

^^^^^^^^^^^^^^^^^^
Account Management
^^^^^^^^^^^^^^^^^^
Account Management is where you go to change your personal Crafter Studio settings like language or to change your password.

.. image:: /_static/images/content-author/site-account.png
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - Open My Account Settings Screen

To get to Account Management:
    * Click on your username in the toolbar
    * Select **Settings** in the dropdown

.. image:: /_static/images/content-author/settings-account-management.png
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - Account Settings Screen

^^^^^^^^^^^^^^
Site Dashboard
^^^^^^^^^^^^^^
Each site has a Site Dashboard.  To view a site's dashboard, click on the Crafter CMS logo at the top left of the screen, or click on **Dashboard** at the top of the Sidebar.  This screen is an overview of the workflow for that given site.  The site dashboard has different widgets depending on your role.

Each dashboard has a header

   Expand Collapse control.  Each widget can be closed and opened to hide the items shown by the widget.  This setting is remembered by your browser

   Widget title and count.  Most widgets include a count at the end of the name for the number of items in the widget

   Widget level options.  Options are different on each widget

   Show count.  Some widgets allow the author to decide how many items they want to see in the widget

   Content "type" filter:  Some widgets allow you to filter them by a broad content type (All, Pages, Components, Documents)


.. image:: /_static/images/content-author/site-dashboard.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Site Dashboard

For the dashboard shown above, here are the widgets listed:

    * Items Waiting for Approval
        * Shows all items currently in workflow
        * Viewable only to admins and publishers

    * Approved Scheduled Items
        * Shows all items approved for a specific scheduled deployment date
        * Viewable only to admins and publishers

    * Recently Published
        * Shows all items that have been previously deployed
        * Viewable only to admins and publishers

    * My Recent Activity
        * Shows all items recently modified by the current user
        * Viewable by all users

    * Icon Guide
        * The Icon guide is simply a legend to help authors and content managers with the iconography on the system. While it can be very complex to sum up the state and nature of content in a glance, Crafter Studio attempts to achieve a high level visual summary for each object icons. You will see these icons throughout the application whenever an object is presented to the user. The icon always shows the Current state of the object.
        * Describes the meaning of icons within Crafter Studio
        * Viewable by all users
        * The Icon guide breaks down icons in to their elements.  You have two basic elements which can be combined to form a specific icon: the item type and the worfkflow indicator.

            **Item Types**

            Item types are high level archetypes of content objects within the system.  These types and the iconography associated with them provide a basic classification of the type of object at a glance.

            Page:	A page is exactly what you would expect, it's a URI addressable object that represents a web page or resource.

                |workflowNavPage|: This is a resource that has a URI and should be shown in a dynamically generated navigation on the site

                |workflowFloatingPage|: This is a resource that has a URI but should not be shown in dynamically generated navigation elements on the site

            |workflowComponent|: A component is an object that is generally not URI addressable on the website.  Examples are objects like Banners, Touts, Sidebar content etc. Components are usually re-usable assets that can be assigned and shared across many pages.

            |workflowTaxonomy|: A taxonomy is an object the same as a component used for classifying items.

            Below is a list of all the other item types available:

             - |workflowMsWord|
             - |workflowCss|
             - |workflowTemplateScript|
             - |workflowGroovy|
             - |workflowZip|
             - |workflowMsExcel|
             - |workflowMsPowerPoint|
             - |workflowPdf|
             - |workflowFont|
             - |workflowVideo|
             - |workflowImage|
             - |workflowOtherFiles|

            **Workflow Indicators**

            Workflow indicators help authors and content managers understand at a glance what is going on with the content at a high level.  Is it Live?  Is it work in progress?  Is it currently checked out? In some sort of approval process?

            |workflowNeverPub|:	You will find a * asterisk at the end of a content object's name if the content has never been pushed live. This helps authors quickly identify which objects that are in progress are already live and which ones are entirely new.

            |workflowDisabled|:	You will find that some objects have a strike-through on their name, this means that the object is not deleted but it should not be displayed on the site.  It's essentially a logical delete.  Imagine a scenario where you need to take an object down immediately because of an inaccuracy while you make corrections.  Disable is perfect for this and several other scenarios.

            |workflowInWorkflow|: Any item which carries the blue flag is in some sort of workflow

            Submitted for Delete:	Items which carry the * red X * but are editable and previewable have been submitted for delete

            |workflowDeleted|: Items which carry the * red X * but are not editable and previewable are deleted.  You will only see these items in dashboards which show historical data
 
            |workflowEdited|: Edited means that the item has been edited since it was made live. Items move to edited as soon as they are created or when they are edited.

            |workflowLocked|: A locked item is currently in the process of being edited by another author.

            |workflowProcessing|: Item is currently being handled by the system

            |workflowScheduled|: Item has a launch schedule associated with it.


    Selecting a dashboard item        
        Dashboard items have the ability to be selected.  Selecting an item allows the user to interact with the selected items via the context navigation

        Items in the dashboard has a state icon which shows the type and current workflow status of the item

        Clicking on the item's name will take the user to preview if the object is previewable

        Edit link.  Clicking edit will check out the item and open the form for the item

.. image:: /_static/images/content-author/site-dashboard-selected.jpg
   :width: 95 %
   :align: center
   :alt: Navigating Studio - Dashboard Selected

^^^^^^^
Preview
^^^^^^^

Every site has a preview.  This allows users to see, edit and test the site in a safe authoring sandbox prior to publishing changes.

    * Preview is a fully functional site but in a safe-to-edit environment.
    * Toolbar shows workflow options for the current page
    * Author can change the type of preview from one channel to another
    * Author can turn on in-context and drag and drop editing features
    * Author can change the targeting attributes used to view the site
    * Author can view the publish status of the site

.. image:: /_static/images/content-author/site-preview.jpg
   :width: 95 %
   :align: center
   :alt: Navigating Studio - Site Preview

Preview Tools
    * When in preview mode your context navigation will show additional controls beside the authoring search.
    * The pencil provides a shortcut to turn on/off in-context editing.
    * The wrench turns on/off the preview tools palette.
    * The bulls eye provides a shortcut to targeting which allows the user to view and set targeting attributes for the site.

.. image:: /_static/images/content-author/preview-tools.png
    :width: 35 %
    :align: center
    :alt: Navigating Studio - Preview Tools


In-Context Editing
^^^^^^^^^^^^^^^^^^

The in-context editing panel gives access to a number of features:

    * The ability to turn on/off in-context editing controls on the page
    * A jump to region selector that makes it easy to find a region by name
    * The ability to edit the current page template depending on your user account permissions

When in-context editing is turned on, pencils will show up around regions of the page that have been wired for in-context edit.

    * A yellow pencil relates to a specific field in the main model e.g the page
    * A blue pencil indicates that you are editing a component
    * </> allows you to edit the template of a component

.. image:: /_static/images/content-author/preview-in-context-editing.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview In-Context Editing

When a user clicks on a pencil, a dialog will be presented to the user that contains ONLY the fields wired to that specific region. 
The user may cancel to quit without making a change or save and close (will save your changes and close the dialog)/ save draft (will save your changes and leave the dialog open) 

.. image:: /_static/images/content-author/preview-in-context-edit.png
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview Panel In-Context Edit

Template Editing
^^^^^^^^^^^^^^^^

The template editor provides users who have the proper permission with an ability to edit the Freemarker templates that are used to construct the page.  Users who do not have write access may open the editor but have no ability to save edits.

A simple syntax highlighting editor is provided.   

.. image:: /_static/images/content-author/preview-template-editing.png
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview Panel Template Editing

Page Components
^^^^^^^^^^^^^^^

The Page Components (drag and drop panel) puts the page in component construction mode.  Regions on the page that are wired to accept components ("drop zones") are highlighted.

The user may drag a component from one region to another. 
The user may create new components by dragging components from the panel out and on to the screen.  A dialog is presented to the user when a new component is dropped on the screen so that the author can configure the component.
Crafter Studio administrators can configure what components are available in this panel.

.. image:: /_static/images/content-author/preview-page-components.png
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview Panel Page Components


Publishing Channel
^^^^^^^^^^^^^^^^^^
The Publishing Channel preview allows an author to review the current page in the context of all channels supported by the website.

The smart phone and tablet can be rotated through the use of the purple rotation control next to the drop down box selection of publishing channel preview presets.  The channels are browsable

.. image:: /_static/images/content-author/preview-publishing-channel.jpg
    :width: 60 %
    :align: center
    :alt: Navigating Studio - Preview Panel Publishing Channel


^^^^^^^^^^^^^^^^^^^^^^^^^^
Common Navigation Elements
^^^^^^^^^^^^^^^^^^^^^^^^^^

Contextual Navigation
^^^^^^^^^^^^^^^^^^^^^
The Navigation Bar is a fixed element at the top of the page and cannot be scrolled off the page.  The navigation bar provide contextual workflow and
other options relative to the page you are looking at, content you have selected or tool you are using.

The basic elements of the Contextual Navigation bar are:

    * Branded Logo Button: Takes the user back to the Dashboard.
    * Sidebar: Opens a menu that allows navigation to all pages, components and documents in the system.
    * Contextual Navigation Links: An area reserved for the quick create button and dynamic links that will change based off of the current page view.  The quick create button is a shortcut for content authors to create configured content without having to navigate through the site tree.
    * Search: Allows a user to search all site content or choose a subset of content to search from the drop-down menu (Please see the later section on Search for more details about the search field.)
    * Publish Status: Allows the user to view the site's publish status.
    * Main Menu: Allows the user (depending on permissions granted to the user) to view/edit sites, the groups, the users, etc..
    * Help: Provides the user a shortcut to Crafter CMS documentation and the about screen, listing the Crafter Studio version, etc.
    * Username: Allows a user to log out of the system or manage settings.
    
.. image:: /_static/images/content-author/site-context-nav.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Site Context Navigation

Sidebar
^^^^^^^
The Sidebar menu/panel allows for browsing all site content in the system. This includes Pages, Components and Documents.

* The menu width can be resized freely by the user.
* Users can have multiple tree paths open at the same time.
* If closed, the menu should retain it's last state when re-opened.
* Clicking the **Sidebar** menu button a second time, or clicking anywhere off the menu will close the menu with the following exceptions:

    * Any action executed by a right click in the menu should be allowed to complete without closing the menu (e.g.: a copy/paste operation or a delete operation.)
    * The top level blocks "Pages, Components, Documents" can be hidden from users based on their privilege settings.
* The Sidebar menu panel can be stretched and will remember where you set the length and width on your browser

.. image:: /_static/images/content-author/sidebar-dashboard-item-selected.png
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Sidebar Panel

* Clicking the main folders will toggle them open or closed.
* Root folders allow a user to drill in to a hierarchy of content. If the item is previewable it will also be clickable.
* Clicking on an item will take the author to a preview of the item.
* Also, tooltips featuring extended information will be available when hovering over any item in the Sidebar Menu or on the dashboard.


.. image:: /_static/images/content-author/sidebar-tooltips.png
    :width: 95%
    :align: center
    :alt: Navigating Studio - Sidebar Tooltips

* Right-clicking on an item opens a contextual right click menu for that item.

.. image:: /_static/images/content-author/sidebar-right-click-menu.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Sidebar Right Click Menu

Occasionally you have so many pages or components in your information architecture that it is not practical to list them or you simply want to provide your authors with a quick way to get to a specific search.

For these use cases Crafter Studio's site dropdown IA folders support the configuration of dedicated searches. That configuration can be made by an administrator on the Crafter Studio |siteConfig|.


.. image:: /_static/images/content-author/crafter-studio-site-content-ia-folders.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Site Content IA Folders

.. workflow icons=======================================================================================================

.. |workflowLocked| image:: /_static/images/content-author/workflow-icon-locked.png
             :width: 20%
             :alt: Workflow Icons - Locked for Edit

.. |workflowProcessing| image:: /_static/images/content-author/workflow-icon-processing.png
             :width: 18%
             :alt: Workflow Icons - Processing

.. |workflowEdited| image:: /_static/images/content-author/workflow-icon-edited.png
             :width: 13%
             :alt: Workflow Icons - Edited

.. |workflowDisabled| image:: /_static/images/content-author/workflow-icon-disabled.png
             :width: 10%
             :alt: Workflow Icons - Disabled

.. |workflowNeverPub| image:: /_static/images/content-author/workflow-icon-never-published.png
             :width: 23%
             :alt: Workflow Icons - Never Published

.. |workflowDeleted| image:: /_static/images/content-author/workflow-icon-deleted.png
             :width: 13%
             :alt: Workflow Icons - Deleted

.. |workflowScheduled| image:: /_static/images/content-author/workflow-icon-scheduled.png
             :width: 17%
             :alt: Workflow Icons - Scheduled

.. |workflowInWorkflow| image:: /_static/images/content-author/workflow-icon-in-workflow.png
             :width: 18%
             :alt: Workflow Icons - In Workflow

.. |workflowComponent| image:: /_static/images/content-author/workflow-icon-component.png
             :width: 18%
             :alt: Workflow Icons - Component

.. |workflowFloatingPage| image:: /_static/images/content-author/workflow-icon-floating-page.png
             :width: 20%
             :alt: Workflow Icons - Floating Page

.. |workflowNavPage| image:: /_static/images/content-author/workflow-icon-nav-page.png
             :width: 23%
             :alt: Workflow Icons - Navigation Page

.. |workflowTaxonomy| image:: /_static/images/content-author/workflow-icon-taxonomy.png
             :width: 17%
             :alt: Workflow Icons - Taxonomy

.. |workflowImage| image:: /_static/images/content-author/workflow-icon-image.png
             :width: 13%
             :alt: Workflow Icons - Image

.. |workflowVideo| image:: /_static/images/content-author/workflow-icon-video.png
             :width: 13%
             :alt: Workflow Icons - Video

.. |workflowFont| image:: /_static/images/content-author/workflow-icon-font.png
             :width: 11%
             :alt: Workflow Icons - Font

.. |workflowPdf| image:: /_static/images/content-author/workflow-icon-pdf.png
             :width: 10%
             :alt: Workflow Icons - Pdf

.. |workflowMsPowerPoint| image:: /_static/images/content-author/workflow-icon-ms-powerpoint.png
             :width: 23%
             :alt: Workflow Icons - MS PowerPoint

.. |workflowMsExcel| image:: /_static/images/content-author/workflow-icon-ms-excel.png
             :width: 16%
             :alt: Workflow Icons - MS Excel

.. |workflowZip| image:: /_static/images/content-author/workflow-icon-zip.png
             :width: 10%
             :alt: Workflow Icons - Zip

.. |workflowGroovy| image:: /_static/images/content-author/workflow-icon-groovy.png
             :width: 14%
             :alt: Workflow Icons - Groovy

.. |workflowTemplateScript| image:: /_static/images/content-author/workflow-icon-template-script.png
             :width: 27%
             :alt: Workflow Icons - Template/Script

.. |workflowCss| image:: /_static/images/content-author/workflow-icon-css.png
             :width: 10%
             :alt: Workflow Icons - CSS

.. |workflowMsWord| image:: /_static/images/content-author/workflow-icon-ms-word.png
             :width: 16%
             :alt: Workflow Icons - MS Word

.. |workflowOtherFiles| image:: /_static/images/content-author/workflow-icon-other-files.png
             :width: 19%
             :alt: Workflow Icons - Other Files

.. end of workflow icons================================================================================================

