:is-up-to-date: False
:last-updated: 4.0.0

.. index:: Author Screens

..  _newIa-author-screens:

==============
Author Screens
==============

As mentioned earlier, Crafter Studio provides authors the tools for creating/managing content in experiences.
In this section we'll take a look at various screens in Crafter Studio an author may encounter.

----------
Logging in
----------

To log in to Crafter Studio:
    * Enter the following in the URL of your browser:  *http://SERVERNAMEHERE/studio*
    * Enter your user name
    * Enter your password
    * Click "Log In"

.. image:: /_static/images/content-author/login-screen-full.jpg
    :alt: Getting Started - Login Screen
    :width: 85 %
    :align: center

|

   Note: You can change the language used for the Studio UI by clicking on ``Language`` on the log in screen.

^^^^^
Roles
^^^^^

After logging in, depending on what access rights have been setup for your user account, you can have one of two
primary roles as a content author:

* **Content Manager (Publisher Role)** A content Manager has the ability to approve and reject workflow.
  A content manager also has access to a number of dashboards which are not available to content contributors
  including Recently Published and Approved Scheduled Items.

* **Content Contributor(Author Role)** A content contributor has access to create, edit and submit content


--------
Projects
--------
**Projects** is the first screen you will encounter after logging in to Crafter Studio.  This screen lists all of
the projects you have been granted permission to.  From this screen you can navigate to any project.  Your projects
can be viewed either in a list or in a grid.

Here's the **Projects** screen with the projects in a list:

.. image:: /_static/images/content-author/my-projects-screen.png
    :width: 75 %
    :align: center
    :alt: Navigating Studio - My Projects Screen List View

|

Here's the **Projects** screen with the projects in a grid:

.. image:: /_static/images/content-author/my-projects-screen-grid.jpg
    :width: 75 %
    :align: center
    :alt: Navigating Studio - My Projects Screen Grid View

|

You can get back to the **Projects** screen by:
* Clicking on the ``Navigation Menu`` icon at the top right corner, then click on "Projects" on the top left
of the *Global* panel

.. image:: /_static/images/content-author/get-to-my-projects-1.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Get to My Projects Screen via the Navigation Menu

|

.. image:: /_static/images/content-author/get-to-my-projects-2.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Get to My Projects Screen

|

^^^^^^^^^^^^^^^^
Projects (Admin)
^^^^^^^^^^^^^^^^
Crafter Studio administrators can also create and delete projects from this screen.

.. image:: /_static/images/content-author/project-delete.jpg
    :width: 75 %
    :align: center
    :alt: Navigating Studio - Delete Project

|

.. _newIa-account-management:

------------------
Account Management
------------------
Account Management is where you go to change your personal Crafter Studio settings like language or
to change your password.

To get to Account Management:

* Click on the ``Navigation Menu`` icon at the top right corner
* Click on **Account** under *Global*

.. image:: /_static/images/content-author/project-account.png
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Open My Account Settings Screen

|

.. image:: /_static/images/content-author/settings-account-management.jpg
    :width: 75 %
    :align: center
    :alt: Navigating Studio - Account Settings Screen

|

.. _newIa-project-dashboard:

-----------------
Project Dashboard
-----------------
Each project has a Project Dashboard.  To view a project's dashboard, click on the ``Navigation Menu`` icon at the
top right corner of the screen, or click on **Dashboard** at the top of the Sidebar.

Access the ``Dashboard`` from the ``Navigation Menu``

.. image:: /_static/images/content-author/project-dashboard-alt.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Project Dashboard from the Navigation Menu

|

Access the ``Dashboard`` from the ``Sidebar``

.. image:: /_static/images/content-author/project-dashboard-sidebar.jpg
    :width: 65 %
    :align: center
    :alt: Navigating Studio - Project Dashboard from Sidebar

|


This screen is an overview of the workflow for that given project.  The project dashboard has different dashlets
depending on your role.

Each dashboard has a header

   Expand Collapse control.  Each widget can be closed and opened to hide the items shown by the widget.
   This setting is remembered by your browser

   Dashlet title and count.  Most dashlets include a count at the end of the name for the number of items in the widget

   Dashlet level options.  Options are different on each widget

   Show count.  Some dashlets allow the author to decide how many items they want to see in the dashlet

   Content "type" filter:  Some dashlets allow you to filter them by a broad content type (All, Pages, Components)

|
|

.. image:: /_static/images/content-author/project-dashboard.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Project Dashboard

|

For the dashboard shown above, here are the dashlets listed:

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
        * The Icon guide is simply a legend to help authors and content managers with the iconography on
          the system. While it can be very complex to sum up the state and nature of content in a glance,
          Crafter Studio attempts to achieve a high level visual summary for each object icons. You will
          see these icons throughout the application whenever an object is presented to the user. The icon
          always shows the Current state of the object.
        * Describes the meaning of icons within Crafter Studio
        * Viewable by all users
        * The Icon guide breaks down icons in to their elements.  You have two basic elements which can
          be combined to form a specific icon: the item type and the worfkflow indicator.

            **Item Types**

            Item types are high level archetypes of content objects within the system.  These types and the
            iconography associated with them provide a basic classification of the type of object at a glance.

            |workflowPage|:	A page is exactly what you would expect, it's a URI addressable object that
            represents a web page or resource.

            |workflowComponent|: A component is an object that is generally not URI addressable on the project.
            Examples are objects like Banners, Touts, Sidebar content etc. Components are usually re-usable
            assets that can be assigned and shared across many pages.

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

            Workflow States help authors and content managers understand at a glance what is going on with the
            content at a high level.  Is it Live?  Is it work in progress?  Is it currently checked out?
            In some sort of approval process?

            |workflowNeverPub|:	The content has never been pushed live. This helps authors quickly identify which objects that are in progress are already live and which ones are entirely new.

            |workflowEdited|: Edited means that the item has been edited since it was made live. Items move to edited as soon as they are created or when they are edited.

            |workflowDeleted|: Items which carry the red trash can icon but are not editable and previewable are deleted.  You will only see these items in dashboards which show historical data

            |workflowLocked|: A locked item is currently in the process of being edited by another author.

            |workflowProcessing|: Item is currently being handled by the system

            |workflowSubmittedForLive|: |br|
            |workflowSubmittedForStaging|: Any item which carries the airplane icon is in some sort of workflow

            |workflowScheduledForLive|: |br|
            |workflowScheduledForStaging|: Item has a launch schedule associated with it

            |workflowPublishing|: Item is currently being published

            |workflowDisabled|:	You will find that some objects have a red circle with a slash in the middle, this means that the object is not deleted but it should not be displayed on the project.  It's essentially a logical delete.  Imagine a scenario where you need to take an object down immediately because of an inaccuracy while you make corrections.  Disable is perfect for this and several other scenarios.

            **Publishing Status/Target**

            |publishStaging|: Item has been published to the ``staging`` publishing target

            |publishLive|: Item has been published to the ``live`` publishing target

    |
    |

    **Selecting a dashboard item**

        Dashboard items have the ability to be selected.  Selecting an item allows the user to interact with the
        selected items via the context navigation

        Items in the dashboard has a icons which shows the type and current workflow status of the item

        Clicking on ``Options`` (the three dots next to the item) shows the type and current workflow status of
         the item, plus all oprions available e.g. ``Edit``, ``Publish``, etc.

|
|

.. image:: /_static/images/content-author/project-dashboard-selected.jpg
   :width: 95 %
   :align: center
   :alt: Navigating Studio - Dashboard Selected

|
|


-------
Preview
-------

Every project has a preview.  This allows users to see, edit and test the project in a safe authoring sandbox
prior to publishing changes.

    * Preview is a fully functional project but in a safe-to-edit environment.
    * The top center shows workflow status and options (three dots) for the current page
    * Author can change the type of preview from one channel to another
    * Author can turn on in-context and drag and drop editing features
    * Author can change the targeting attributes used to view the project
    * Author can view the publish status of the project

.. image:: /_static/images/content-author/project-preview.jpg
   :width: 95 %
   :align: center
   :alt: Navigating Studio - Project Preview

|

^^^^^^^^^^^^^^^^^^^^^^^^
Experience Builder Panel
^^^^^^^^^^^^^^^^^^^^^^^^

* When in preview mode your context navigation will show an additional control beside the publishing status.
* The ``Edit Mode`` and ``Move mode`` icons turns on the Experience Builder panel which allows you to use
  in-context editing and various tools for creating your page in a panel on the right
* ``Search`` allows you to search for items such as components, images, etc. in your project
* ``Components`` allows you to create a component and also lists all available components in your project
  which can then be dragged and dropped into your page
* ``Browse Components`` allows you to browse for components which can then be dragged and dropped into your page
* ``Component Drop Targets`` allows you to select a content type, which then shows you the drag and drop area
  for that content type
* ``Assets`` allows you to search/list assets such as images in the project
* ``Audience Targeting`` allows you to view and set targeting attributes for the project.
* ``Page Explorer`` allows you to browse/list pages in the project
* ``Device Simulator`` allows you to change the type of preview from one device to another e.g. phone to tablet
* ``Settings`` allows you to turns on/off in-context editing and setup highlighting of drop zones

|
|

.. image:: /_static/images/content-author/preview-in-context-editing.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview In-Context Editing

|

In-Context Editing
^^^^^^^^^^^^^^^^^^

When in-context editing is turned on (``Edit mode`` pencil is green or ``Move mode`` two vertical ellipsis
is blue at the top), it puts the page in construction mode.  When you hover your mouse around regions of
the page that have been wired for in-context editing, a pencil will show up instead of the mouse cursor.

.. image:: /_static/images/content-author/preview-page-in-context-editing.jpg
    :width: 75 %
    :align: center
    :alt: Navigating Studio - Preview Page In-Context Editing

|

This pencil allows you to edit the content of the wired region, including the current page's template and
controller depending on your user account permissions

.. image:: /_static/images/content-author/preview-in-context-edit.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Preview In-Context Editing

|

To turn off in-context editing, click on the ``Switch off editing`` off switch icon at the top, which will
then turn the ``Edit mode``/``Move mode`` icon to gray.

Convenient keyboard shortcuts are also provided, press ``?`` to see the list of commands.

Search
^^^^^^

The Search tool allows you to search for components and static assets in the project then display the
results from which the user can drag and drop into the current page being viewed if there are configured
drop targets in it

.. image:: /_static/images/content-author/preview-experience-builder-search.jpg
    :width: 20 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Search Components and Static Assets

|

Add Components
^^^^^^^^^^^^^^
The ``Add Components`` tool allows you to create new components by dragging components from the panel and
on to the screen to configured drop targets.  A new component with default values will then be visible and
ready for editing when a new component is dropped on the screen.

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

You may drag around a component from one position to a different position by enabling the ``Move mode``
(by clicking the ``Move mode`` icon at the top right, or by using the keyboard shortcut).
Crafter Studio administrators can configure what components are available in this panel.

.. image:: /_static/images/content-author/preview-page-components-drag.jpg
    :width: 85 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Page Drag Component

|

Browse Components
^^^^^^^^^^^^^^^^^
The Browse Components tool allows you to search / select a content type in the project then display the
existing components for that content type that can be dragged and dropped into the current page being
viewed if there are configured drop targets in it

.. image:: /_static/images/content-author/preview-page-builder-browse-components.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Browse Components

|

When you drag a component into the page being previewed and there are no drop zones configured in the page,
you will see a snack bar like below:

.. image:: /_static/images/content-author/preview-page-builder-no-drop-targets.jpg
    :width: 80 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel No Drop Targets

|

Component Drop Targets
^^^^^^^^^^^^^^^^^^^^^^
The Component Drop Targets tool allows you to select a content type in the project then display the
configured drop target for that content type on the current page being previewed

.. image:: /_static/images/content-author/preview-page-builder-component-drop-targets.jpg
    :width: 70 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Component Drop Targets

|

Assets
^^^^^^
The Assets tool allows you to search/list assets such as images that can be dragged into configured
drop targets in the project

.. image:: /_static/images/content-author/preview-page-builder-assets.jpg
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Assets

|

Audience Targeting
^^^^^^^^^^^^^^^^^^
The Audience Targeting tool allows you to view and set targeting attributes for the project

.. image:: /_static/images/content-author/preview-page-builder-audience-targeting.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Audience Targeting

|


Page Explorer
^^^^^^^^^^^^^
The Page Explorer tool allows you to browse/list content items such as pages, components and level
descriptors in the project and make edits to them by clicking on the three dots next to the content
item that appears when you hover your mouse on it

.. image:: /_static/images/content-author/preview-page-builder-page-explorer.png
    :width: 30 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Page Explorer

|

Device Simulator
^^^^^^^^^^^^^^^^
The Device Simulator tool allows an author to review the current page in the context of all devices
supported by the project.

The phone and tablet can be rotated through the use of the rotation control next to the width and
height input boxes.

.. image:: /_static/images/content-author/preview-publishing-channel.jpg
    :width: 60 %
    :align: center
    :alt: Navigating Studio - Experience Builder Panel Device Simulator

|

Settings
^^^^^^^^

The Settings tool allows you to switch on/off the ``Edit Mode`` (in-context editing) and setup
highlighting of drop targets

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
The Toolbar is a fixed element at the top of the page and cannot be scrolled off the page.  The toolbar
provides contextual workflow and other options relative to the page you are looking at, content you have
selected or tool you are using.

The basic elements of the Contextual Navigation bar are:

    * Branded Logo Button: Toggles the sidebar on/off.
    * Project Name and Project switcher: Displays the project's name and lets you switch the project being
      previewed through a dropdown
    * Quick Create: A shortcut for content authors to create configured content without having to navigate
      through the project tree.
    * Preview Address Bar: An area reserved for navigation buttons (back, forward and reload page), the address
      of the current  page being previewed, and an options link whose content will change based off of the
      current page view and user role.
    * Edit Mode Switch: Toggles the in-context editing and Experience Builder panel on/off
    * Publish Status: Allows the user to view the project's publish status.
    * Search: Allows the user to search for items in the project
    * Navigation Menu: Takes the user to a panel with ``Global`` and ``Project`` options containing various
      links such as Dashboard, About, Help, etc.

.. image:: /_static/images/content-author/project-context-nav.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Project Context Navigation

|

Sidebar
^^^^^^^
The sidebar opens a menu that allows access to the following:

    - *Dashboard:* An overview of the workflow for that given project.
      See :ref:`above <newIa-project-dashboard>` for more information
    - *Project Explorer:* Allows navigation to all pages, components and documents in the system
    - *Project Tools (available depending on your role):* Contains project administration tools
      such as Plugin Management, Encryption Tool, etc.  See :ref:`here <newIa-navigating-project-tools>`
      for more information

The menu/panel width can be resized freely by the user and will remember where you set the length and
width on your browser

.. image:: /_static/images/content-author/sidebar-panel-width.jpg
    :width: 95 %
    :align: center
    :alt: Navigating Studio - Sidebar Panel menu width

|

**Project Explorer**

* Users can have multiple navigation paths / path tree open at the same time e.g. templates, pages, etc.
* If closed, the menu should retain it's last state when re-opened.
* Each item listed has item state and publish target icons next to them
* Root folders allow a user to drill in to a hierarchy of content. If the item is previewable it will
  also be clickable.
* Clicking on an item will take the author to a preview of the item.

.. image:: /_static/images/content-author/project-tools-path-nav.jpg
    :width: 25 %
    :align: center
    :alt: Navigating Studio - Project Tools Navigation

|

* Clicking the three dots next to each item or right-clicking on an item provides the user options whose
  content will change based off of the item selected and user role.

.. image:: /_static/images/content-author/sidebar-right-click-menu.jpg
    :width: 80 %
    :align: center
    :alt: Navigating Studio - Sidebar Right Click Menu

|

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
             :width: 12%
             :alt: Workflow Icons - Disabled

.. |workflowNeverPub| image:: /_static/images/content-author/workflow-icon-new.png
             :width: 10%
             :alt: Workflow Icons - New

.. |workflowDeleted| image:: /_static/images/content-author/workflow-icon-deleted.png
             :width: 12%
             :alt: Workflow Icons - Deleted

.. |workflowScheduledForLive| image:: /_static/images/content-author/workflow-icon-scheduled-for-live.png
             :width: 21%
             :alt: Workflow Icons - Scheduled for live

.. |workflowScheduledForStaging| image:: /_static/images/content-author/workflow-icon-scheduled-for-staging.png
             :width: 23%
             :alt: Workflow Icons - Scheduled for staging

.. |workflowSubmittedForLive| image:: /_static/images/content-author/workflow-icon-submitted-for-live.png
             :width: 21%
             :alt: Workflow Icons - Submitted for live

.. |workflowSubmittedForStaging| image:: /_static/images/content-author/workflow-icon-submitted-for-staging.png
             :width: 23%
             :alt: Workflow Icons - Submitted for staging

.. |workflowPublishing| image:: /_static/images/content-author/workflow-icon-publishing.png
             :width: 14%
             :alt: Workflow Icons - Publishing

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
