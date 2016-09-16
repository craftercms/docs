..  _content_authors:

***************
Content Authors
***************

-----------------
How Crafter Works
-----------------
.. include:: /includes/how-craftercms-works.rst

* Authors work in Crafter Studio
    * Web based application. There is nothing to install.
    * Crafter Studio is multi-tenant so you can manage as many sites as you need to
    * Studio provides a safe environment to make and preview content changes
    * All changes are versioned and audited
    * Once ready content is submitted to workflow for approval
* On approval content is published to the live environment.
    * Content can be published immediately
    * Or on a schedule
* Crafter Studio can publish to anywhere including social networks however, we often Publish to Crafter Engine.
    * Crafter Engine is a high performance, Spring MVC based content delivery engine.
    * Crafter Engine delivers highly personalized HTML (and other markup) based content and Content APIS (Content as a Service).
    * Crafter Engine is multi-channel.  It supports Responsive Design and Adaptive Design as well as Content as API(s)
    * Crafter Engine is multi-tenant so you can deliver as many sites as you need to.

--------------
Logging in
--------------
To log in to Crafter Studio:
* Enter the following in the URL of your browser http://SERVERNAMEHERE/studio
* Enter your user name
* Enter your password
* Click "Sign in"

Note: You can change the language used for the Studio UI by selecting a language on the sign in screen.


--------------------------------
Navigating Around Crafter Studio
--------------------------------

^^^^^^^^^^
My Sites
^^^^^^^^^^
My Sites is the first screen you will encounter after logging in to Crafter Studio.  This screen lists all of the websites you have been granted permission to.
From this screen you can navigate to any site's preview, dashboard or live url.

You can get back to the My Sites dashboard by:
* Clicking on the Crafter CMS Logo in the toolbar
* Or selecting all sites in the site selector within the site content dropdown
* Or logging out and logging back in

^^^^^^^^^^
My Sites (Admins)
^^^^^^^^^^
Crafter Studio administrators can also create and delete sites from this screen.

^^^^^^^^^^
My Account
^^^^^^^^^^
My Account is where you go to change your personal Crafter Studio settings like language or to change your password.

To get to My Account:
* Click on Account in the toolbar
* Select settings in the dropdown

^^^^^^^^^^^^^^
Site Dashboard
^^^^^^^^^^^^^^
Each site has a Site Dashboard.  This screen is an overview of the workflow for that given site.  The site dashbaord has different widgets depending on your role.

Each dashboard has a header
Expand Collapse control.  Each widget can be closed and opened to hide the items shown by the widget.  This setting is remembered by your browser
Widget title and count.  Most widgets include a count at the end of the name for the number of items in the widget
Widget level options.  Options are different on each widget
Show count.  Some widgets allow the author to decide how many items they want to see in the widget
Content "type" filter:  Some widgets allow you to filter them by a broad content type (All, Pages, Components, Documents)

IMAGE

Ability to be selected. Selecting an item allows the user to interact with the selected items via the context nav
A state icon which shows the type and current workflow status of the item
Clicking on the item's name will take the user to preview if the object is previewable
Edit link, clicking edit will check out the item and open the form for the item

IMAGE


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
The Icon guide is simply a legend to help authors and content managers with the iconography on the system. While it can be very complex to sum up the state and nature of content in a glance, Crafter Studio attempts to achieve a high level visual summary via for each object object icons. You will see these icons throughout the application whenever an object is presented to the user. The icon always shows the Current state of the object.
The Icon guide breaks down icons in to their elements.  You have three basic elements which can be combined to form a specific icon: The object type, The Status Indicator, The Worfkflow Indicator.
    * Describes the meaning of workflow icons within Crafter Studio
    * Viewable by all users


^^^^^^^^^^
Preview
^^^^^^^^^^

Every site has a preview.  This allows users to see, edit and test the site in a safe authoring sandbox prior to publishing changes.
* Preview is a fully functional site but in a safe-to-edit environment.
* Toolbar shows workflow options for the current page
* Author can change the type of preivew from one channel to another
* Author can turn on in-context and drag and drop editing features
* Author can change the persona used to view the site


Preview Tools
When in preview mode your context navigation will show additional controls beside the authoring search.
The pencil provide a shortcut to turn on/off in-context editing
The wrench turns on/off the preview tools palette.
The image show the current persona you are browsing the site with.  Hover over the image with the mouse to see the name of the persona.













Object Types
Object types are high level archetypes of content objects within the system.  These types and the iconography associated with them provide a basic classification of the type of object at a glance.



	Page	A page is exactly what you would expect, it's a URI addressable object that represents a web page or resource.
Navigation Page:  This is a resource that has a URI should be shown in a dynamically generated navigation on the site
Floating Page:  This is a resource that has a URI but should not be shown in dynamically generated navigation elements on the site
	Component	A component is an object that is generally not URI addressable on the website.  Examples are objects like Banners, Touts, Videos, Sidebar content etc. Components are usually re-usable assets that can be assigned and shared across many pages.
	Document	A Document, like pages are URI addressable objects.  In our experience many sites commonly have some usecase that involves a download of documents or other collateral.  While we could cover this need with the "Page" icon, these type of assets generally have specific workflows and we have found it beneficial to specifically identify them in the system.
Status Indicators
There are a number of states about content that are helpful for authors



	New	You will find a * asterisk at the end of a content object's name if the content has never been pushed live. This helps authors quickly identify which objects that are in progress are already live and which ones are entirely new.
	Disabled	You will find that some objects have a strike-through on their name, this means that the object is not deleted but it should not be displayed on the site.  It's essentially a logical delete.  Imagine a scenario where you need to take an object down immediately because of an inaccuracy while you make corrections.  Disable is perfect for this and several other scenarios.
Workflow Indicators
Workflow indicators help authors and content managers understand at a glance what is going on with the content at a highlevel.  Is it Live?  Is it work in progress?  Is it currently checked out? In some sort of approval process?



	Submitted for Approval	Any item which carries the green flag is in some sort of workflow
	Submitted for Delete	items which carry the red X but are editable and previewable are have been submitted for delete
	Deleted	Items which carry the* red X *but are not editable and previewable are deleted.  You will only see these items in dashboards which show historical data
	In-Progress	 In process means that the item has been edited since it was made live. Items move to in-process as soon as they are created or they when they are edited.
	Locked	A locked item is currently in the process of being edited by another author.
	In System Processing	Item is currently being handled by the system
	Has associated Launch Schedule	Item has a launch schedule associated with it.





--------------------------
Common Navigation Elements
--------------------------

^^^^^^^^^^^^^^^^^^^^^
Contextual Navigation
^^^^^^^^^^^^^^^^^^^^^
The Navigation Bar is a fixed element at the top of the page and cannot be scrolled off the page.  The naviagation bar provide contextual workflow and
other options relative to the page you are looking at, content you have selected or tool you are using.

The basic elements of the Contextual Navigation bar are:
* Branded Logo Button: Takes the user back to the Dashboard.
* Site Content Menu: Opens a menu that allows navigation to all pages, components and documents in the system.
* Contextual Navigation Links: An area reserved for dynamic links that will changed based off of the current page view.
* Search Field: Allows a user to search all site content or choose a subset of content to search from the drop-down menu (please see the later section on Search for more details about the search field.
* Log Out Button: Allows a user to log out of the system.

^^^^^^^^^^^^^^^^^^
Site Content Panel
^^^^^^^^^^^^^^^^^^
The Site content menu/panel allows for browsing all site content in the system. This includes Pages, Components and Documents.

* The "View" menu will allow selections of separate site properties.
* The menu width can be resized freely be the user.
* Users can have multiple tree paths open at the same time.
* If closed, the menu should retain it's last state when re-opened.
* Clicking the "Site Content" menu button a second time, or clicking anywhere off the menu will close the menu with the following exceptions:
* Any action executed by a right click in the menu should be allowed to complete without closing the menu (e.g.: a copy/paste operation or a delete operation.)
* The top level blocks "Pages, Components, Documents" can be hidden from users based on their privilege settings.
* The context can be stretched and will remember where you set the length and width on your browser

IMAGE

Clicking the main folders will toggle them open or closed.
Root folders allow a user to drill in to a hierarchy of content. If the item is previewable it will also be clickable.
Clicking on an item will take the author to a preview of the item.

IMAGE

Tooltips featuring extended information will be available when hovering over any item in the Site Content Menu or on the dashboard.

IMAGE

Right-clicking on an item opens a contextual right click menu for that item.

IMAGE

Occasionally you have so many pages or components in your information architecture that it is not practical to list them or you simply want to provide your authors with a quick way to get to a specific search.
For these use cases Crafter Studio's site dropdown IA folders support the configuration of dedicated searches.

IMAGE

--------------------
Making Content Edits
--------------------

^^^^^^^^^^^^^^^^^^
Form based editing
^^^^^^^^^^^^^^^^^^

Write up form based editing

^^^^^^^^^^^^^^^^^^^^^^^^
In-Context based Editing
^^^^^^^^^^^^^^^^^^^^^^^^
----------------
Editing Controls
----------------
Input boxes
Text areas
Rich text editors
Date pickers
Dropdowns
Checkboxes
Group checkboxes
Image pickers
Child content selectors
File Selectors
Repeat Groups


--------------------------
Placing Content Components
--------------------------
Drop Zones
Available components
Placing new components
Placing existing components
Moving components around
deleting components

-------------------------------
Submitting Content for Approval
-------------------------------

------------------
Publishing Content
------------------

------------------------
Common Editing Questions
------------------------
* I forgot my passowrd

* The template dictates the markup, how do I change the markup and CSS?

* A component I want is not available, what do I do?

* I don't see an option to edit when I right click on the content tree, what's wrong?

