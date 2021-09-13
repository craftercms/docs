:is-up-to-date: True

.. index:: Navigating Studio

..  _content-authors-navigating-studio:

================================
Navigating Around Crafter Studio
================================

-----
Sites
-----
**Sites** is the first screen you will encounter after logging in to Crafter Studio.  This screen lists all of the websites you have been granted permission to.
From this screen you can navigate to any site.  Your sites can be viewed either in a list or in a grid.


Here's the **Sites** screen with the sites in a list:

.. image:: /_static/images/content-author/my-sites-screen.png
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - My Sites Screen List View

|

Here's the **Sites** screen with the sites in a grid:

.. image:: /_static/images/content-author/my-sites-screen-grid.jpg
    :width: 75 %
    :align: center
    :alt: Navigating Studio - My Sites Screen Grid View

You can get back to the **Sites** screen by:
    * Clicking on the ``Navigation Menu`` icon at the top right corner, then click on "Sites" on the top left of the *Global* panel
    * Or logging out (sign out) and logging back in (sign in) by selecting the ``Navigation Menu`` icon at the top right corner, then click on the logout icon on the bottom right of the *Global* panel

.. image:: /_static/images/content-author/get-to-my-sites-1.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Get to My Sites Screen Crafter logo

|

.. image:: /_static/images/content-author/get-to-my-sites-2.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Get to My Sites Screen

^^^^^^^^^^^^^
Sites (Admin)
^^^^^^^^^^^^^
Crafter Studio administrators can also create and delete sites from this screen.

.. image:: /_static/images/content-author/site-delete.jpg
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - Delete Site

------------------
Account Management
------------------
Account Management is where you go to change your personal Crafter Studio settings like language or to change your password.

To get to Account Management:
    * Click on the ``Navigation Menu`` icon at the top right corner
    * Click on **Account** under *Global*

.. image:: /_static/images/content-author/site-account.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Open My Account Settings Screen

|

.. image:: /_static/images/content-author/settings-account-management.jpg
    :width: 75 %    
    :align: center
    :alt: Navigating Studio - Account Settings Screen

.. _site-dashboard:

--------------
Site Dashboard
--------------
Each site has a Site Dashboard.  To view a site's dashboard, click on the ``Navigation Menu`` icon at the top right corner of the screen, or click on **Dashboard** at the top of the Sidebar.

Access the ``Dashboard`` from the ``Navigation Menu``

.. image:: /_static/images/content-author/site-dashboard-alt.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Site Dashboard from the Navigation Menu

|

Access the ``Dashboard`` from the ``Sidebar``

.. image:: /_static/images/content-author/site-dashboard-sidebar.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Site Dashboard from Sidebar

|


This screen is an overview of the workflow for that given site.  The site dashboard has different widgets depending on your role.

Each dashboard has a header

   Expand Collapse control.  Each widget can be closed and opened to hide the items shown by the widget.  This setting is remembered by your browser

   Widget title and count.  Most widgets include a count at the end of the name for the number of items in the widget

   Widget level options.  Options are different on each widget

   Show count.  Some widgets allow the author to decide how many items they want to see in the widget

   Content "type" filter:  Some widgets allow you to filter them by a broad content type (All, Pages, Components)

|
|

.. image:: /_static/images/content-author/site-dashboard.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Site Dashboard

|

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

            |workflowPage|:	A page is exactly what you would expect, it's a URI addressable object that represents a web page or resource.

            |workflowComponent|: A component is an object that is generally not URI addressable on the website.  Examples are objects like Banners, Touts, Sidebar content etc. Components are usually re-usable assets that can be assigned and shared across many pages.

            |workflowTaxonomy|: A taxonomy is an object the same as a component used for classifying items.

            Below is a list of all the other item types available:

             - |workflowCss|
             - |workflowFolder|
             - |workflowLevelDescriptor|
             - |workflowTemplateScript|
             - |workflowGroovy|
             - |workflowImage|
             - |workflowJavaScript|
             - |workflowJson|
             - |workflowHTML|
             - |workflowCss|
             - |workflowPlainText|
             - |workflowXML|
             - |workflowFont|
             - |workflowIcon|

            |
            |

            **Workflow States**

            Workflow States help authors and content managers understand at a glance what is going on with the content at a high level.  Is it Live?  Is it work in progress?  Is it currently checked out? In some sort of approval process?

            |workflowNeverPub|:	You will find a * asterisk at the end of a content object's name if the content has never been pushed live. This helps authors quickly identify which objects that are in progress are already live and which ones are entirely new.

            |workflowDisabled|:	You will find that some objects have a strike-through on their name, this means that the object is not deleted but it should not be displayed on the site.  It's essentially a logical delete.  Imagine a scenario where you need to take an object down immediately because of an inaccuracy while you make corrections.  Disable is perfect for this and several other scenarios.

            |workflowInWorkflow|: Any item which carries the blue flag is in some sort of workflow

            Submitted for Delete:	Items which carry the * red X * but are editable and previewable have been submitted for delete

            |workflowDeleted|: Items which carry the * red X * but are not editable and previewable are deleted.  You will only see these items in dashboards which show historical data
 
            |workflowEdited|: Edited means that the item has been edited since it was made live. Items move to edited as soon as they are created or when they are edited.

            |workflowLocked|: A locked item is currently in the process of being edited by another author.

            |workflowProcessing|: Item is currently being handled by the system

            |workflowScheduled|: Item has a launch schedule associated with it

            **Publishing Status/Target**

            |publishStaging|: Item has been published to the ``staging`` publishing target

            |publishLive|: Item has been published to the ``live`` publishing target

    |
    |

    **Selecting a dashboard item**

        Dashboard items have the ability to be selected.  Selecting an item allows the user to interact with the selected items via the context navigation

        Items in the dashboard has a icons which shows the type and current workflow status of the item

        Clicking on ``Options`` (the three dots next to the item) shows the type and current workflow status of the item, plus all oprions available e.g. ``Edit``, ``Publish``, etc.

|
|

.. image:: /_static/images/content-author/site-dashboard-selected.jpg
   :width: 95 %
   :align: center
   :alt: Navigating Studio - Dashboard Selected

|
|


-------
Preview
-------

Every site has a preview.  This allows users to see, edit and test the site in a safe authoring sandbox prior to publishing changes.

    * Preview is a fully functional site but in a safe-to-edit environment.
    * The top center shows workflow status and options (three dots) for the current page
    * Author can change the type of preview from one channel to another
    * Author can turn on in-context and drag and drop editing features
    * Author can change the targeting attributes used to view the site
    * Author can view the publish status of the site

.. image:: /_static/images/content-author/site-preview.jpg
   :width: 95 %
   :align: center
   :alt: Navigating Studio - Site Preview

|

^^^^^^^^^^^^^^^^^^^^^^^^
Experience Builder Panel
^^^^^^^^^^^^^^^^^^^^^^^^

    * When in preview mode your context navigation will show an additional control beside the publishing status.
    * The ``Edit Mode`` switch turns on/off the Experience Builder panel which allows you to use in-context editing and various tools for creating your page in a panel on the right
    * ``Search`` allows you to search for items such as components, images, etc. in your site
    * ``Components`` allows you to create a component and also lists all available components in your site which can then be dragged and dropped into your page
    * ``Browse Components`` allows you to browse for components which can then be dragged and dropped into your page
    * ``Component Drop Targets`` allows you to select a content type, which then shows you the drag and drop area for that content type
    * ``Assets`` allows you to search/list assets such as images in the site
    * ``Audience Targeting`` allows you to view and set targeting attributes for the site.
    * ``Page Explorer`` allows you to browse/list pages in the site
    * ``Device Simulator`` allows you to change the type of preview from one device to another e.g. phone to tablet
    * ``Settings`` allows you to turns on/off in-context editing and setup highlighting of drop zones

|
|

.. image:: /_static/images/content-author/preview-in-context-editing.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview In-Context Editing


In-Context Editing
^^^^^^^^^^^^^^^^^^

When in-context editing is turned on (``Edit Mode`` is switched to on), it puts the page in construction mode.  When you hover your mouse around regions of the page that have been wired for in-context editing, a pencil will show up instead of the mouse cursor.

.. image:: /_static/images/content-author/preview-page-in-context-editing.jpg
    :width: 75 %
    :align: center
    :alt: Navigating Studio - Preview Page In-Context Editing


This pencil allows you to edit the content of the wired region, including the current page's template and controller depending on your user account permissions

.. image:: /_static/images/content-author/preview-in-context-edit.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview In-Context Editing



Search
^^^^^^

The Search tool allows you to search for components and static assets in the site then display the results from which the user can drag and drop into the current page being viewed if there are configured drop targets in it

.. image:: /_static/images/content-author/preview-experience-builder-search.jpg
    :width: 20 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Search Components and Static Assets

|

Components
^^^^^^^^^^
The Components tool allows you to create new components by dragging components from the panel and on to the screen to configured drop targets.  A new component with default values will then be visible and ready for editing when a new component is dropped on the screen.

.. image:: /_static/images/content-author/preview-page-components-list.png
    :width: 20 %
    :alt: Navigating Studio - Experience Builder Panel Page Components

.. image:: /_static/images/content-author/preview-page-components-space.png
    :width: 5 %

.. image:: /_static/images/content-author/preview-page-components.png
    :width: 20 %
    :alt: Navigating Studio - Experience Builder Panel Page Components

.. image:: /_static/images/content-author/preview-page-components-space.png
    :width: 5 %

.. image:: /_static/images/content-author/preview-page-components-instances.png
    :width: 20 %
    :alt: Navigating Studio - Experience Builder Panel Page Components Instances

|

You may drag around a component from one position to a different position.
Crafter Studio administrators can configure what components are available in this panel.

.. image:: /_static/images/content-author/preview-page-components-drag.jpg
    :width: 85 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Page Drag Component

|

Browse Components
^^^^^^^^^^^^^^^^^
The Browse Components tool allows you to search / select a content type in the site then display the existing components for that content type that can be dragged and dropped into the current page being viewed if there are configured drop targets in it

.. image:: /_static/images/content-author/preview-page-builder-browse-components.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Browse Components

|

When you drag a component into the page being previewed and there are no drop zones configured in the page, you will see a snackbar like below:

.. image:: /_static/images/content-author/preview-page-builder-no-drop-targets.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel No Drop Targets

|

Component Drop Targets
^^^^^^^^^^^^^^^^^^^^^^
The Component Drop Targets tool allows you to select a content type in the site then display the configured drop target for that content type on the current page being previewed

.. image:: /_static/images/content-author/preview-page-builder-component-drop-targets.jpg
    :width: 70 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Component Drop Targets

|

Assets
^^^^^^
The Assets tool allows you to search/list assets such as images that can be dragged into configured drop targets in the site

.. image:: /_static/images/content-author/preview-page-builder-assets.jpg
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Assets

|

Audience Targeting
^^^^^^^^^^^^^^^^^^
The Audience Targeting tool allows you to view and set targeting attributes for the site

.. image:: /_static/images/content-author/preview-page-builder-audience-targeting.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Audience Targeting

|


Page Explorer
^^^^^^^^^^^^^
The Page Explorer tool allows you to browse/list content items such as pages, components and level descriptors in the site and make edits to them by clicking on the three dots next to the content item that appears when you hover your mouse on it

.. image:: /_static/images/content-author/preview-page-builder-page-explorer.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Page Explorer

|

Device Simulator
^^^^^^^^^^^^^^^^
The Device Simulator tool allows an author to review the current page in the context of all devices supported by the website.

The phone and tablet can be rotated through the use of the rotation control next to the width and height input boxes.

.. image:: /_static/images/content-author/preview-publishing-channel.jpg
    :width: 60 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Device Simulator

|

Settings
^^^^^^^^

The Settings tool allows you to switch on/off the ``Edit Mode`` (in-context editing) and setup highlighting of drop targets

.. image:: /_static/images/content-author/preview-page-builder-settings.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Settings

|

^^^^^^^^^^^^^^^^^^^^^^^^^^
Common Navigation Elements
^^^^^^^^^^^^^^^^^^^^^^^^^^

Toolbar
^^^^^^^
The Toolbar is a fixed element at the top of the page and cannot be scrolled off the page.  The toolbar provides contextual workflow and
other options relative to the page you are looking at, content you have selected or tool you are using.

The basic elements of the Contextual Navigation bar are:

    * Branded Logo Button: Toggles the sidebar on/off.
    * Site Name and Site switcher: Displays the site's name and lets you switch the site being previewed through a dropdown
    * Quick Create: A shortcut for content authors to create configured content without having to navigate through the site tree.
    * Preview Address Bar: An area reserved for navigation buttons (back, forward and reload page), the address of the current  page being previewed, and an options link whose content will change based off of the current page view and user role.
    * Edit Mode Switch: Toggles the in-context editing and Experience Builder panel on/off
    * Publish Status: Allows the user to view the site's publish status.
    * Navigation Menu: Takes the user to a panel with ``Global`` and ``Site`` options containing various links such as Dashboard, About, Help, etc.

.. image:: /_static/images/content-author/site-context-nav.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Site Context Navigation

Sidebar
^^^^^^^
The sidebar opens a menu that allows access to the following:

    - *Dashboard:* An overview of the workflow for that given site.  See :ref:`above <site-dashboard>` for more information
    - *Site Explorer:* Allows navigation to all pages, components and documents in the system
    - *Site Tools (available depending on your role):* Contains site administration tools such as Plugin Management, Encryption Tool, etc.  See :ref:`here <navigating-site-tools>` for more information

The menu/panel width can be resized freely by the user and will remember where you set the length and width on your browser

.. image:: /_static/images/content-author/sidebar-panel-width.png
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Sidebar Panel menu width

**Site Explorer**

* Users can have multiple navigation paths / path tree open at the same time e.g. templates, pages, etc.
* If closed, the menu should retain it's last state when re-opened.
* Each item listed has item state and publish target icons next to them
* Root folders allow a user to drill in to a hierarchy of content. If the item is previewable it will also be clickable.
* Clicking on an item will take the author to a preview of the item.

.. image:: /_static/images/content-author/site-tools-path-nav.png
    :width: 25 %
    :align: center
    :alt: Navigating Studio - Site Tools Navigation

* Clicking the three dots next to each item or right-clicking on an item provides the user options whose content will change based off of the item selected and user role.

.. image:: /_static/images/content-author/sidebar-right-click-menu.jpg
    :width: 80 %
    :align: center
    :alt: Navigating Studio - Sidebar Right Click Menu


.. workflow icons=======================================================================================================

.. |workflowLocked| image:: /_static/images/content-author/workflow-icon-locked.png
             :width: 12%
             :alt: Workflow Icons - Locked for Edit

.. |workflowProcessing| image:: /_static/images/content-author/workflow-icon-system-processing.png
             :width: 19%
             :alt: Workflow Icons - System Processing

.. |workflowEdited| image:: /_static/images/content-author/workflow-icon-modified.png
             :width: 13%
             :alt: Workflow Icons - Modified

.. |workflowDisabled| image:: /_static/images/content-author/workflow-icon-disabled.png
             :width: 8%
             :alt: Workflow Icons - Disabled

.. |workflowNeverPub| image:: /_static/images/content-author/workflow-icon-new.png
             :width: 10%
             :alt: Workflow Icons - New

.. |workflowDeleted| image:: /_static/images/content-author/workflow-icon-deleted.png
             :width: 12%
             :alt: Workflow Icons - Deleted

.. |workflowScheduled| image:: /_static/images/content-author/workflow-icon-scheduled.png
             :width: 14%
             :alt: Workflow Icons - Scheduled

.. |workflowInWorkflow| image:: /_static/images/content-author/workflow-icon-submitted.png
             :width: 14%
             :alt: Workflow Icons - Submitted


.. Start of Item Types icons=============================================================

.. |workflowComponent| image:: /_static/images/content-author/workflow-icon-component.png
             :width: 18%
             :alt: Item Types Icons - Component

.. |workflowPage| image:: /_static/images/content-author/workflow-icon-page.png
             :width: 11%
             :alt: Item Types Icons - Page

.. |workflowFolder| image:: /_static/images/content-author/workflow-icon-folder.png
             :width: 12%
             :alt: Item Types Icons - Folder

.. |workflowLevelDescriptor| image:: /_static/images/content-author/workflow-icon-level-descriptor.png
             :width: 22%
             :alt: Item Types Icons - levelDescriptor

.. |workflowTemplateScript| image:: /_static/images/content-author/workflow-icon-template-script.png
             :width: 27%
             :alt: Item Types Icons - Template/Script

.. |workflowGroovy| image:: /_static/images/content-author/workflow-icon-groovy.png
             :width: 21%
             :alt: Item Types Icons - Groovy

.. |workflowTaxonomy| image:: /_static/images/content-author/workflow-icon-taxonomy.png
             :width: 17%
             :alt: Item Types Icons - Taxonomy

.. |workflowImage| image:: /_static/images/content-author/workflow-icon-image.png
             :width: 13%
             :alt: Item Types Icons - Image

.. |workflowJavaScript| image:: /_static/images/content-author/workflow-icon-js.png
             :width: 16%
             :alt: Item Types Icons - JavaScript

.. |workflowJson| image:: /_static/images/content-author/workflow-icon-json.png
             :width: 13%
             :alt: Item Types Icons - Json

.. |workflowHTML| image:: /_static/images/content-author/workflow-icon-html.png
             :width: 13%
             :alt: Item Types Icons - Html

.. |workflowPlainText| image:: /_static/images/content-author/workflow-icon-plain-text.png
             :width: 16%
             :alt: Item Types Icons - Plain Text

.. |workflowXML| image:: /_static/images/content-author/workflow-icon-xml.png
             :width: 13%
             :alt: Item Types Icons - Xml

.. |workflowIcon| image:: /_static/images/content-author/workflow-icon-icon.png
             :width: 13%
             :alt: Item Types Icons - Icon

.. |workflowFont| image:: /_static/images/content-author/workflow-icon-font.png
             :width: 11%
             :alt: Workflow Icons - Font

.. |workflowCss| image:: /_static/images/content-author/workflow-icon-css.png
             :width: 10%
             :alt: Workflow Icons - CSS

.. end of workflow icons================================================================================================

.. Start of Publishing Status/Target  icons=============================================================

.. |publishStaging| image:: /_static/images/content-author/publish-target-icon-staged.png
             :width: 11%
             :alt: Publishing Status/Target Icons - Staged

.. |publishLive| image:: /_static/images/content-author/publish-target-icon-live.png
             :width: 10%
             :alt: Item Types Icons - Live
