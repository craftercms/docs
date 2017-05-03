.. index:: Navigation Studio

..  _content_authors_navigating_studio:

^^^^^^^^
My Sites
^^^^^^^^
My Sites is the first screen you will encounter after logging in to Crafter Studio.  This screen lists all of the websites you have been granted permission to.
From this screen you can navigate to any site's preview, dashboard or live url.

.. image:: /_static/images/my-sites-screen.png
    :width: 75 %    
    :align: center
    
You can get back to the My Sites screen by:    
    * Selecting *Sites* in the top right corner
    * Or logging out and logging back in

.. image:: /_static/images/get-to-my-sites.png
    :width: 75 %    
    :align: center


My Sites (Admins)
^^^^^^^^^^^^^^^^^
Crafter Studio administrators can also create and delete sites from this screen.

.. image:: /_static/images/site-delete.png
    :width: 75 %    
    :align: center

^^^^^^^^^^
My Account
^^^^^^^^^^
My Account is where you go to change your personal Crafter Studio settings like language or to change your password.

.. image:: /_static/images/site-account.png
    :width: 75 %    
    :align: center

To get to My Account:
    * Click on Account in the toolbar
    * Select settings in the dropdown

.. image:: /_static/images/settings-account-management.png
    :width: 75 %    
    :align: center


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


.. image:: /_static/images/site-dashboard.png
    :width: 95 %
    :align: center

For the dashboard shown above, here are the widgets listed:
    * Waiting for Approval
        * Shows all items currently in workflow
        * Viewable only to admins and publishers

    * Approved Scheduled Items
        * Shows all items approved for a specific scheduled deployment date
        * Viewable only to admins and publishers

    * Recently Published
        * Shows all items that have been previously deployed
        * Viewable only to admins and publishers

    * My Recent Activity
        * Shows all items recently modified by the curent user
        * Viewable by all users

    * Workflow Icon Guide
        * The Icon guide is simply a legend to help authors and content managers with the iconography on the system. While it can be very complex to sum up the state and nature of content in a glance, Crafter Studio attempts to achieve a high level visual summary via for each object object icons. You will see these icons throughout the application whenever an object is presented to the user. The icon always shows the Current state of the object.
        * Describes the meaning of workflow icons within Crafter Studio
        * Viewable by all users
        * The Icon guide breaks down icons in to their elements.  You have three basic elements which can be combined to form a specific icon: The object type, The Status Indicator, The Worfkflow Indicator.

            Object Types
            Object types are high level archetypes of content objects within the system.  These types and the iconography associated with them provide a basic classification of the type of object at a glance.

            Page:	A page is exactly what you would expect, it's a URI addressable object that represents a web page or resource.

                Navigation Page:  This is a resource that has a URI and should be shown in a dynamically generated navigation on the site

                Floating Page:  This is a resource that has a URI but should not be shown in dynamically generated navigation elements on the site

            Component:	A component is an object that is generally not URI addressable on the website.  Examples are objects like Banners, Touts, Videos, Sidebar content etc. Components are usually re-usable assets that can be assigned and shared across many pages.

            Document:	A Document, like pages are URI addressable objects.  In our experience many sites commonly have some usecase that involves a download of documents or other collateral.  While we could cover this need with the "Page" icon, these type of assets generally have specific workflows and we have found it beneficial to specifically identify them in the system.


            Status Indicators
            There are a number of states about content that are helpful for authors

            New:	        You will find a * asterisk at the end of a content object's name if the content has never been pushed live. This helps authors quickly identify which objects that are in progress are already live and which ones are entirely new.

            Disabled:	You will find that some objects have a strike-through on their name, this means that the object is not deleted but it should not be displayed on the site.  It's essentially a logical delete.  Imagine a scenario where you need to take an object down immediately because of an inaccuracy while you make corrections.  Disable is perfect for this and several other scenarios.


            Workflow Indicators
            Workflow indicators help authors and content managers understand at a glance what is going on with the content at a highlevel.  Is it Live?  Is it work in progress?  Is it currently checked out? In some sort of approval process?

            Submitted for Approval:	Any item which carries the green flag is in some sort of workflow

            Submitted for Delete:	Items which carry the * red X * but are editable and previewable have been submitted for delete

            Deleted:    Items which carry the * red X * but are not editable and previewable are deleted.  You will only see these items in dashboards which show historical data
 
            In-Progress:    In-progess means that the item has been edited since it was made live. Items move to in-progess as soon as they are created or they when they are edited.

            Locked:    A locked item is currently in the process of being edited by another author.

            In System Processing:	Item is currently being handled by the system

            Has associated Launch Schedule:	Item has a launch schedule associated with it.


    Selecting a dashboard item        
        Dashboard items have the ability to be selected.  Selecting an item allows the user to interact with the selected items via the context navigation

        Items in the dashboard has a state icon which shows the type and current workflow status of the item

        Clicking on the item's name will take the user to preview if the object is previewable

        Edit link.  Clicking edit will check out the item and open the form for the item

.. image:: /_static/images/site-dashboard-selected.png
   :width: 95 %
   :align: center


^^^^^^^
Preview
^^^^^^^

Every site has a preview.  This allows users to see, edit and test the site in a safe authoring sandbox prior to publishing changes.

    * Preview is a fully functional site but in a safe-to-edit environment.
    * Toolbar shows workflow options for the current page
    * Author can change the type of preview from one channel to another
    * Author can turn on in-context and drag and drop editing features
    * Author can change the persona used to view the site

.. image:: /_static/images/site-preview.png
   :width: 95 %
   :align: center

Preview Tools
    * When in preview mode your context navigation will show additional controls beside the authoring search.
    * The pencil provides a shortcut to turn on/off in-context editing
    * The wrench turns on/off the preview tools palette.
    * The image shows the current persona you are browsing the site with.  Hover over the image with the mouse to see the name of the persona.

.. image:: /_static/images/preview-tools.png
    :width: 35 %
    :align: center


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

.. image:: /_static/images/preview-in-context-editing.png
    :width: 95 %
    :align: center

When a user clicks on a pencil, a dialog will be presented to the user that contains ONLY the fields wired to that specific region. 
The user may cancel to quit without making a change or save and close (will save your changes and close the dialog)/ save draft (will save your changes and leave the dialog open) 

.. image:: /_static/images/preview-in-context-edit.png
    :width: 95 %
    :align: center

Template Editing
^^^^^^^^^^^^^^^^

The template editor provides users who have the proper permission with an ability to edit the Freemarker templates that are used to construct the page.  Users who do not have write access may open the editor but have no ability to save edits.

A simple syntax highlighting editor is provided.   

.. image:: /_static/images/preview-template-editing.png
    :width: 95 %
    :align: center


Page Components
^^^^^^^^^^^^^^^

The Page Components (drag and drop panel) puts the page in component construction mode.  Regions on the page that are wired to accept components ("drop zones") are highlighted.

The user may drag a component from one region to another. 
The user may create new components by dragging components from the panel out and on to the screen.  A dialog is presented to the user when a new component is dropped on the screen so that the author can configure the component.
Crafter Studio administrators can configure what components are available in this panel.

.. image:: /_static/images/preview-page-components.png
    :width: 95 %
    :align: center


Publishing Channel
^^^^^^^^^^^^^^^^^^
The Publishing Channel preview allows an author to review the current page in the context of all channels supported by the website.

The smart phone and tablet can be rotated through the use of the purple rotation control next to the drop down box selection of publishing channel preview presets.  The channels are browsable

.. image:: /_static/images/preview-publishing-channel.png
    :width: 95 %
    :align: center


Targeting Tools
^^^^^^^^^^^^^^^

Targeting tools allows an author to see what the website would look like if it were being browsed by a user with a given set of attributes.  Crafter Studio allows administrators to configure sets of persona for authors to choose from.  A persona is a collection of profile and environmental attributes.
 
The current active persona is displayed in the context nav.
Hovering on the persona image will produce a tool tip containing the name of the persona 

.. image:: /_static/images/preview-targeting.png
    :width: 95 %
    :align: center

When an author opens the targeting pane they are presented with an ability to see all of the configured personas for the site.  Each persona has a name, an image, and a description to make it easy for authors to remember them.  Additionally a persona has an arbitrary set of attribues.

Click on the thumbnails in the persona panel to switch between personas.  The details of the persona will be displayed over the top of the preview. To switch to a given persona click ASSUME in the details dialog.
Persona attribute values for the current persona are editable.  Crafter Studio administrators can configure personas to contain any properties required.


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
    * Contextual Navigation Links: An area reserved for dynamic links that will change based off of the current page view.
    * Search: Allows a user to search all site content or choose a subset of content to search from the drop-down menu (Please see the later section on Search for more details about the search field.)
    * Account: Allows a user to log out of the system or manage settings.
    
.. image:: /_static/images/site-context-nav.png
    :width: 95 %
    :align: center


Sidebar
^^^^^^^
The Sidebar menu/panel allows for browsing all site content in the system. This includes Pages, Components and Documents.

* The "View" menu will allow selections of separate site properties.
* The menu width can be resized freely by the user.
* Users can have multiple tree paths open at the same time.
* If closed, the menu should retain it's last state when re-opened.
* Clicking the "Site Content" menu button a second time, or clicking anywhere off the menu will close the menu with the following exceptions:
* Any action executed by a right click in the menu should be allowed to complete without closing the menu (e.g.: a copy/paste operation or a delete operation.)
* The top level blocks "Pages, Components, Documents" can be hidden from users based on their privilege settings.
* The context can be stretched and will remember where you set the length and width on your browser

.. image:: /_static/images/sidebar-dashboard-item-selected.png
    :width: 95 %
    :align: center


* Clicking the main folders will toggle them open or closed.
* Root folders allow a user to drill in to a hierarchy of content. If the item is previewable it will also be clickable.
* Clicking on an item will take the author to a preview of the item.
* Also, tooltips featuring extended information will be available when hovering over any item in the Site Content Menu or on the dashboard.


.. image:: /_static/images/sidebar-tooltips.png
    :width: 55%
    :align: center

* Right-clicking on an item opens a contextual right click menu for that item.

.. image:: /_static/images/sidebar-right-click-menu.png
    :width: 90 %
    :align: center


Occasionally you have so many pages or components in your information architecture that it is not practical to list them or you simply want to provide your authors with a quick way to get to a specific search.

For these use cases Crafter Studio's site dropdown IA folders support the configuration of dedicated searches. That configuration can be made by an administrator on the Crafter Studio Admin Console.


.. image:: /_static/images/crafter-studio-site-content-ia-folders.png
    :width: 80 %
    :align: center

