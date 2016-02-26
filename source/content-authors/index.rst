=============
Content Authors Guide
=============

What is Crafter Studio?
-------------------
Crafter Studio is the content authoring, management and publishing application that allows marketers and content editors to create rich web experiences.  With a set of powerful and easy-to-use tools, content creators and managers can create timely content without any involvement from developers or IT administrators.  The power of creating rich content and delivering dynamic experiences is in the hands of business users with Crafter Studio.

With Crafter Studio, marketers are able to create different personas of the target audience and deliver tailored content to individual users or groups, building an engaging experience across the web, mobile, and social channels. Using its native integration with Google Analytics, or by easily integrating a third-party web analytics engine, Crafter Studio analytics are used to optimize the site’s performance for SEO, conversions, and other relevant web metrics.

Installing / Using Crafter Studio
-------------------
Crafter Studio is a thin-client, browser-based application.  There is no software to install on your local computer. The following browsers are supported:
Chrome
Firefox
IE

Logging in
-------------------
If you have not logged in or your session has expired, you will be challenged for a user name and password.  

What Credentials should I use
-------------------
Crafter Studio can be integrated with oner or more of a number of authentication systems
Alfresco OOTB accounts
NTLM
CAS
TAM Junction
Roles

Once you have logged in you will have identified your user to the system. As a member of a Crafter Site each user can have one of two primary roles:
Content Manager A content Manager has the ability to approve and reject workflow. A content manager also has access to a number of dashboards which are not available to content contributors including Recently Made Live and Approved Scheduled Items.
Content Contributor A content contributor has access to create, edit and submit content
Personal Dashboard


Once an author logs in to Crafter Studio they will be directed to their personal dashboard

Contextual Navigation
-------------------
Branded Logo Button: Takes the user back to the Dashboard.
Site Content Menu: Opens a menu that allows navigation to all pages, components and documents in the system.
Contextual Navigation Links: An area reserved for dynamic links that will changed based off of the current page view.
Search Field: Allows a user to search all site content or choose a subset of content to search from the drop-down menu (please see the later section on Search for more details about the search field.
Log Out Button: Allows a user to log out of the system.
The Navigation Bar is a fixed element at the top of the page and cannot be scrolled off the page. This behavior is necessary as many pages are comprised of long forms. The action buttons for these forms will become Contextual Navigation Links in the bar and will need to be visible in a persistent manner to avoid necessary scrolling.


Site Drop down
-------------------
The Site content menu allows for browsing all site content in the system. This includes Pages, Components and Documents.
The "View" menu will allow selections of separate site properties.
The menu width and height can be resized freely be the user.
Users can have multiple tree paths open at the same time.
If closed, the menu should retain it's last state when re-opened.
Clicking the "Site Content" menu button a second time, or clicking anywhere off the menu will close the menu with the following exceptions:
Any action executed by a right click in the menu should be allowed to complete without closing the menu (e.g.: a copy/paste operation or a delete operation.)
The top level blocks "Pages, Components, Documents" can be hidden from users based on their privilege settings.
The context can be stretched and will remember where you set the length and width on your browser

Clicking the main folders will toggle them open or closed. No minimize control should be used at this level for space saving reasons.
Root folders allow a user to drill in to a hierarchy of content. If the item is previewable it will also be clickable. Clicking on an item will take the author to a preview of the item.

Tooltips featuring extended information will be available when hovering over any item in the Site Content Menu or on the dashboard.


Right-clicking on an item opens a contextual right click menu for that item

Occasionally you have so many pages or components in your information architecture that it is not practical to list them or you simply want to provide your authors with a quick way to get to a specific search. For these use cases Crafter Studio's site dropdown IA folders support the configuration of dedicated searches.

 
 

clicking on the item takes you to the search
clicking on add will open a form for this type

Web Site Dashboard
-------------------
Common Dashboard Widgets Behaviors
Each dashboard has a header

Expand Collapse control.  Each widget can be closed and opened to hide the items shown by the widget.  This setting is remembered by your browser
Widget title and count.  Most widgets include a count at the end of the name for the number of items in the widget
Widget level options.  Options are different on each widget
Show count.  Some widgets allow the author to decide how many items they want to see in the widget
Content "type" filter:  Some widgets allow you to filter them by a broad content type (All, Pages, Components, Documents)
Each item in the dashboards have the following

Ability to be selected. Selecting an item allows the user to interact with the selected items via the context nav
A state icon which shows the type and current workflow status of the item
Clicking on the item's name will take the user to preview if the object is previewable
Edit link, clicking edit will check out the item and open the form for the item

My Recent Activity
-------------------
My Recent Activity tracks a user's authoring activity.
A user can choose to see only those items which are in-progress or submitted to workflow
Users cannot sort the recent activity list, most recent activities show up at the top.

Icon Guide
-------------------
The Icon guide is simply a legend to help authors and content managers with the iconography on the system. While it can be very complex to sum up the state and nature of content in a glance, Crafter Studio attempts to achieve a high level visual summary via for each object object icons. You will see these icons throughout the application whenever an object is presented to the user. The icon always shows the Current state of the object.
The Icon guide breaks down icons in to their elements.  You have three basic elements which can be combined to form a specific icon: The object type, The Status Indicator, The Worfkflow Indicator.

Object Types
-------------------
Object types are high level archetypes of content objects within the system.  These types and the iconography associated with them provide a basic classification of the type of object at a glance.
 
 
Page	
-------------------
A page is exactly what you would expect, it's a URI addressable object that represents a web page or resource. 
# Navigation Page:  This is a resource that has a URI should be shown in a dynamically generated navigation on the site
# Floating Page:  This is a resource that has a URI but should not be shown in dynamically generated navigation elements on the site

Component	
-------------------
A component is an object that is generally not URI addressable on the website.  Examples are objects like Banners, Touts, Videos, Sidebar 
content etc. Components are usually re-usable assets that can be assigned and shared across many pages.
	
Document	
-------------------
A Document, like pages are URI addressable objects.  In our experience many sites commonly have some usecase that involves a download of documents or other collateral.  While we could cover this need with the "Page" icon, these type of assets generally have specific workflows and we have found it beneficial to specifically identify them in the system.

Status Indicators
-------------------
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
Icon Matrix

Deployment Dashboard Widgets
Approved Scheduled Items

Approved Scheduled Items is a dashboard widget which lists all the pending launch dates and times.
Each date/time pair can be expanded to see the items that will be launched at that time.
Only Admins / Site Managers can see the Approved Scheduled Items Widget
Go Live Queue

For sites with extremely simple workflow in which content contributors simply submit work for approval and content managers approve it a simplified dashboard exists called the Go Live Queue. The user experience of this widget is not capable of handling multi-step workflow.
Recently Made Live

Recently made live is a dashboard which lists all of the items which have been pushed live / published, grouped by launch date.* Each date/time pair can be expanded to see the items that will be launched at that time.
Only Admins / Site Managers can see the Approved Scheduled Items Widget
Preview

Whenever you click on a page item the system will go in to preview mode.  Preview mode is exactly like your live site except for the following:
You are able to see the changes made in the authoring environment which are not yet live
Performance is different because every asset is coming out of the repository which is a slower storage system than that used by live
Search indexes are generally not updated
User accounts and other environment specific data may not be current
You have access to all of your authoring capabilities through the toolbar which is overlayed on your previewThe primary purpose of preview is to enable authors to see their changes before sending them in to workflow and through content launch.  Because preview is actually your site running against the authoring repository and not just a rendering of the page you can browse and navigate the site just as you would the live one.  This means toy can use Preview to find objects/pages in the system you want to edit.
Preview Tools
When in preview mode your context navigation will show additional controls beside the authoring search.  
The pencil provide a shortcut to turn on/off in-context editing
The wrench turns on/off the preview tools palette.
The image show the current persona you are browsing the site with.  Hover over the image with the mouse to see the name of the persona.

 

In-Context Editing
The in-context editing panel gives access to a number of features:
The ability to turn on/off in-context editing controls on the page
A jump to region selector that makes it easy to find a region by name
The ability to edit the current page template

When in-context editing is turned on, pencils will show up around regions of the page that have been wired for in-context edit.
A yellow pencil relates to a specific field in the main model e.g the page
A blue pencil indicates that you are editing a component
</> allows you to edit the template of a component 

When a user clicks on a pencil a dialog will be presented to the user that contains ONLY the fields weird to that specific region. 
The user may cancel to quit without making a change or save and close / save and preview (both are effectively the same) 

 
Template Editing
The template editor provides users who have the proper permission with an ability to edit the Freemarker templates that are used to construct the page.
Users who do not have write access may open the editor but have no ability to save edits.
A simple syntax highlighting editor is provides.   

Drag and Drop Components
The drag and drop panel put the page in component construction mode.  Regions on the page that wired to accept components ("drop zones") are high lighted.
The user may drag a component from one region to another
The user may create new components by dragging components from the panel out and on to the screen.  A dialog is presented to the user when a new component is dropped on the screen so that the author can configure the component.
Crafter Studio administrators can configure what components are available in this panel.
There is no support in 2.2.x for searching / browsing and placing existing components in drop zones.


Multi Channel Preview
Multi-channel preview allows an author to review the current page in the context of all channels supported by the website.
Phone/Tablet can be rotated through the use of the purple rotation control in the upper right of the device
Channels are browsable

Targeting Tools
Targeting tools allow an author to see what the website would look like if it were being browsed by a user with a given set of attributes.  Crafter Studio allows administrators to configure sets of persona for authors to choose from.  A persona is a collection of profile and environmental attributes.
 
The current active persona is displayed in the context nav
Hovering on the persona image will produce a tool tip containing the name of the persona 

When an author opens the targeting pane they are presented with an ability to see all of the configured personas for the site.  Each persona has a name, an image, and a description to make it easy for authors to remember them.  Additionally a persona has an arbitrary set of attribues.
Click on the thumbnails in the persona panel to switch between personas
The details of the persona will be displayed over top of the preview
To switch to a given persona click ASSUME in the details dialog.
Persona attribute values for the current persona are editable.
Crafter Studio administrators can configure personas to contain any properties required.

Assuming the persona will cause the preview for all channels to immediately respond with content for a user with properties specified in the persona.

On page Analytics
The analytics panel allows authors to quickly pull up reports that are relevant to the current page
Crafter Studio administrators configure what reports are available and how they should be visualized.

Search

Search allows you to find objects in the system by filtering for them with keywords and canned filter options.
Filters.  By default (from the search box on the context nav) the filter is generic and provides basic cross cutting filters that allow you to augment a keyword search to find the content you want.  Filters are pluggable which means that it is possible to create custom filters that enable authors to quickly find specific kinds of content without needing to know how to use complete logical operators or construct queries.
Result Templates: Each result is a content type of one sort or another.  Crafter Studio uses a template to render each result.  If a custom template is found for a given type it will be used, otherwise a default result template is used.  When you are looking for content the information you can quickly see about that content has a lot to do with how good your search experience is.  Authors need to see different information for different types of content.  For example, with an article you may want to see the category, the publish date and the summary.   For a banner, you want to see the banner creative.
Result Selection: Note the checkboxes to the left of each result type.  Just as you can select multiple items on the dasboard and then interact with them in bulk, the same is true with search.  If you are in general search mode you will have checkboxes that allow you to choose many items and access to the context nav to take action on those items.  If you are selecting specific items for a control in a form you will be able to choose whatever number of items are expected by the control.  In selection mode you will note that the site context nav does not show.  A select/cancel bar shows at the bottom of search instead to confirm or cancel your selection.  If only one item is expected you will have radio buttons rather than checkboxes.
Search Pagination:  You can choose how many results you want to see per page.  Controls at the bottom of the page allow you to move through the results.
Sort controls:  Each filter can define what the sort controls are for that filter.  In general you will find things like
relevance,
alpha on title,
create date etc
Creating and Editing Content
Safe Editing
Crafter Studio makes sure users do not overwrite each others content while creating and editing existing content
Feature
Purpose 
Work Area / Sandbox 
A sandbox allows an author to make a change to one or more changes without any other user seeing those changes. 
Check out -- check in / locking 
While a user is editing content it will appear locked to other authors 
Creating new Content
There are several ways to create new content in Crafter Studio:
Create a new Content item
Copy / Paste an existing Item
"Duplicate" and existing ItemTo create a new content item directly you must use the Site Drop-down Menu in the Contextual Navigation Toolbar.

Pull down site content tree
Open Pages
Navigate to the level and location within the Information Architecture where you want to create the content
Right Click on the parent page
Click New
If more than one content type is available for this location a dialog for choose template will open. 
!choose-template.png|align=center!### Select the type you wish to create. A preview for each item will be provided in the right pane of the dialog.
click OK to open the form for this item or cancel to abort creating a new item
If only one content type is available for this location the form for that content type will open.
Forms
Forms are the means by which content is captured in Crafter Studio. A form generally maps to or represents an type of object in the system for example a certain kind of page - like a section page or a banner or video. Let's look at some common elements of a form and examine some of the controls that we use to get content in to the system.

When a new page is created or a page is edited, the form interface for these functions will open in a new browser tab. Aside from the different titles that appear at the top ("New Page" or "Edit Page") the actual contents and controls on the page are generally the same.
The top section is always open by default, with all other sections on the page closed by default.
A user can Expand or Collapse all of the sections on the page using the "Expand All" or "Collapse All" links at the top of the page.
Clicking the +/- control or the Section Label will toggle the expanded or collapsed state for each section.
The number of required fields within each section is displayed in the Section bar for that section.
An icon in front of the Section Label will display a red asterisk (when required fields are not complete), or a green check mark (when all required fields are complete) to denote status.
Every required field will have a red asterisk icon after it's Field Label.
When data is entered into a field the red asterisk will swap to a green checkmark and the section bar will update with the new status.# An action bar is available at the bottom of the screen that cannot be scrolled away. This bar allows uses to Save & Preview, Save & Close or Cancel.
"Save & Preview" will bring the preview window forward and reload it's content with the newly saved data.
"Save & Close" will close the New Page/Editing screen and load the preview screen with the newly saved data.
Cancel will close the New Page/Editing screen without making any changes.
The fields within each section are completely modular and can be applied to any given page as needed. This modularity allows us to craft edit pages for any new screens as they arise without the need for specific UI work on the edit screen.
These are the modular variables that will need to be specified for the data elements of an edit page (*required):
For the Page
Page Name (Text)*
Content Type Note (Text)
For Each Section Section
Header Label (Text)*
Section Note (Text)
For Each Field
Field Label (Text)*
Required Field (Yes or No)*
Field Type (Select)*
Field Note (Text)
Info (Text)
Form Controls
Form controls are the building blocks of forms.
Generic Text Input

The character limit will specify both the MAXLENGTH and SIZE attributes for the field. If no character limit is provided the SIZE will be 50 and MAXLENGTH will be blank.
The character counter will count up as the user types into the field.
Generic Non-Editable Field

Non editable data will be wrapped in a box to denote that it is a data element.
The box wrapping the data will stretch to accommodate it.
URL / File name Input

Generic Drop down Box

The width of the drop-down box will be automatically determined by the length of the data within it.
Generic Text Area

A pixel width will need to be specified for each text area field.
The text area field will default to 3 lines in height.
As the user types into the field it will expand vertically to accommodate more text.
When the text entry box reaches 500 pixels in height it will stop expanding vertically and a scrollbar will appear.
The character counter will count up as the user types into the field.
Generic Date and Time Input Selector

The Date and Time input can allow entry of both Date and Time, only Date or only Time.
Generic Checkbox Input

The checkbox input has extra attributes that can be specified to allow for groupings and descriptors a shown below.
Descriptors are optional and in most cases will not be used but need to be allowed for.
Groups of Checkbox items can be designated, each with a unique label.
Groups will always have an expand/collapse control. Clicking on the group name will also expand/collapse the group.
Groups can be set to be collapsed or expanded by default.
If more than two groups exist in an input field a toggle link for "Expand All/Collapse All" will appear below the Field Label.
Navigation Ordering Field

If a user selects "Yes" an edit button will appear.
Clicking "Edit" will open the ordering tool in a modal foreground div layer.
Navigation Ordering Dialog

When "Edit" is clicked in the Navigation Ordering Field above, an editing dialog will open that allows the editor to change the position of the page in the navigation structure.
The user will only be able to drag and drop "This Page" for placement.
"This Page" will always default to the top position when navigation is turned on.
Clicking "OK" will close the editing dialog and the change will be reflected in the non-editable text box on the originating field.
Generic Image Selector

The image selector will allow a user to select an image of a fixed or fluid size.
Preset dimensions should be set for this field if they are available.
It should be possible to only specify a fixed width.
Clicking "Edit' will open an image selection tool in a modal foreground div layer.
After selection the chosen image will appear within the box.
Generic Waterfall Selector

Clicking Add will open a menu system of items and sub-items.
Clicking any item or sub-item will add it to the box.
Clicking items in the menu will not close the menu (this allows multiple items to be selected)
Clicking outside the menu area, or moving the mouse out of the menu area for 1 second will close the menu.
Clicking the same item in a menu more than once will not add multiple instances of that item to the list.
The text area box will grow in height to accommodate items as they are added and removed. Defaults to 3 lines when empty.
Items that have been placed into the box can be selected and removed using the "Remove" button.
Selecting an item and then clicking "X" will delete it.
Content Item Selector

Clicking the Add button will open a menu of ways a user can add documents.
Add "by Searching" will open a customized version of search in a new window. After selecting items in that window and clicking Add, that new window will close and the documents will be added to the document selector list.
Add "by Document ID" will open a JavaScript alert with a text input field that says "Enter document IDs separated by commas."
Add "by URL" will open a JavaScript alert with a text input field that says "Enter Document URL."
Add "Upload New" will open a normal upload document page in a new window. After Uploading the document, the new window will close and the document will be added to the document selector list.
The text area box will grow in height to accommodate items as they are added and removed. Defaults to 3 lines when empty.
A maximum number of documents can be set as an option. If this option is enabled the counter below the Add button will show how many can be added.
Document ordering can be changed via drag and drop (Example using YUI).
Documents should have a blue selected state and a gray resting state.
If Add is clicked when the document counter is full a Javascript alert will state "This document area is full. Please remove a document before adding another."
If "Edit" is clicked while a document is selected the document editor will open in a new window.
If "X" is clicked while a document is selected it will be removed from the list.
Child Forms
When you edit an existing item or create a new item using the Document/Content Item Selector Crafter Studio will open a new window for this item with the proper form. When you save and close that form you will return to the parent form (or a chain of parent forms) and Crafter Studio will link the two items together. Cancel simply closes the form without saving and returns the user to the parent form
Example of Document Selection Via Search


The document Search would open in a new window.
This would be a modified version of the document search which allows for selecting multiple items.
A checkbox will precede each search result.
A fixed button bar will run at the bottom of the screen. It should be persistent and cannot be scrolled away.
The user can check single or multiple documents and click "Add Selected Documents" to add them to the document selector list.
When the "Add Selected Documents" button is clicked, the window will close and the documents will be added to the document selector list.
When Cancel is clicked the Window will close with no actions being performed.
If a user checks items and then refines the search any checked items will be wiped out.
Field Groupings
In addition to having normal input fields, groups of fields can be created. 

Field groups must have a name associated with them.
Any number of fields can make up a field group.
Any type of field can make up a field group.
Field groups can have an "Add another" link which will add another instance of the field group below it.
Field groups can have "Move Up" and "Move Down" links which will move the field up or down in relation to it's sisters.
Field groups can have a "Delete" link which will delete the group from the page. When only one field group is present delete will clear all of it's fields instead of deleting the module.
Move Up and Move Down links should gray out when movement is not possible.
Rich Text Editing

The RTE (rich text editor)is intended to provide an in-context editing experience from within a form (rather than a preview.)

RTE's can be sized to match the size of the region they represent exactly.
Content entered in to the RTE should be styled and wrap as it will on the web page. 
Users of the RTE are not required to know HTML, but through the capabilities provided by the RTE be able to create reach web content.
 
Key Features

RTE can be set to allow only a certain number of characters
RTE will count the number of characters the user has entered
Markup currently is NOT included in the count.
RTE can have constraints applied to it
A constraint is field required, or length > 1000 chars or contains x
The most common constraint is required
If required RTE shows a red * next to label until satisfied, once satisfied the RTE show a green check mark next to the label
RTE can be set to specific width and height dimensions. Dimensions match or the RTE canvas match exactly the region dimensions of a web page.
Height can be allowed to grow / Stretch
RTE Toolbar floats anchored to the top of the screen for two key reasons:
The toolbar is always available to the use regardless of how far down they scroll
Layout of the Toolbar is consistent regardless of RTE width dimension
RTE Toolbar applies always to the canvas the user is currently editing
If the user focus on a non-RTE widget the toolbar should be removed
If the RTE toolbar is not present on the screen, it should appear when the user focuses on an RTE canvas.
Paragraph styles made available by the RTE match the sites styles
This can be controlled per site
CSS is pulled from the preview server. If it is updated in the CMS the styles will take effect in the RTE and on the preview of the site immediately.
Users have the ability to use standard formatting controls
Bullets Lists
Numbered Lists
Subscripts
Superscripts
Indent
Outdent
Text Align: Right, left, center
Bold
Italic
Redo and Undo action
Code Edit mode
Opens editor up to a full screen edit mode for HTML
RTE Widget HTML code is removed and replaced only by a marker element
Image tags which have repository URLs show web URI
Advanced objects
RTE Widgets
Each website project can specify its own available RTE Widgets
Widgets are essentially child forms
Widgets can have any number of properties
When a user clicks on the object they are presented with controls:
Move
User clicks move button and then clicks a position in the RTE. The object should move to this location
Delete
Edit
Forms usually provide formatting options
Padding
Text Wrapping
Sizing etc
If possible a "Live" preview is pulled from the preview server so that users can see their exact object and copy fit to it in a way that is as near to what they can expect on the web page a possible
For certain widgets a preview is not possible (Flash, Javascript etc), for these a static "Prototype" XML can be configured.
During rendering the user will see a spinner visualization until the object is inserted.
If an error occurs and the object cannot be rendered a red X is displayed
Insert Link / Edit / Remove
standard link functionality but also includes ability to set a named style which means you can turn links in to buttons etc.
Insert Image
Images get uploaded and placed in CMS
Images are previewed to size in the Editor
Images have formatting controls
padding
wrapping
size
link
border
Insert Layout
Layouts are essentially tables with a certain number of columns
RTE shows borders but preview should not
Each web project (site) can configure the available layouts
columns align to top and have a fixed padding on the right and left of the column
Users can remove and add columns
Users can use more than one layout in an RTE
Layouts are removed by selecting the table and deleting it (cut/delete key)
Insert Table
User has a list of pre-styled tables to pick from. Tables should be re-styled by the delivery tier to ensure that alternating colors and such are applied appropriately
Control to allow simple delete of layout
Users can remove and add columns
Users can use more than one layout in an RTE
Tables are removed by selecting the table and deleting it (cut/delete)
Control to allow simple delete of table
Paste from Word
headings, italic, bold, alignment, basic bullets, numbers and tables are preserved
Paste from web
headings, italic, bold, alignment, basic bullets, numbers and tables are preserved
 
Questions:
 
Can the RTE render an IFRAME: Yes
Can the RTE render flash: No,however we do put a place holder in it's place
<object width="425" height="349"><param name="movie" value="http://www.youtube.com/v/BD-y8F1Fa7g?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/BD-y8F1Fa7g?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="349"></embed></object>
Can the RTE render or execute inline javascript: No, we can't allow JS to modify the RTE DOM
Can I code inline javascript in the code mode: Yes
{color:#000000}<div id={color}{color:#000000}"xyz"{color}{color:#000000}>THIS WAS MY TEXT</div>{color} {color:#000000}<script lanugage={color}{color:#000000}"javascript"{color}{color:#000000}>{color} {color:#000000}&nbsp;&nbsp;&nbsp;&nbsp; document.getElementById({color}{color:#000000}"xyz"{color}{color:#000000}).innerHTML ={color} {color:#000000}"{color}{color:#000000}this{color} {color:#000000}IS my{color} {color:#000000}new{color} {color:#000000}Text"{color}{color:#000000};{color}</script>
Can the RTE render inline styles in a <style> tag: Yes
Can I code a <style> tag in the code mode: Yes
<style> .example { font-family:"Times New Roman"; font-size:20px; } </style>
 
Why YUI and not TinyMCE: Tiny MCE is more feature rich to date than YUI however the coding model is much better for YUI. YUI has been used to create all the form components and given the steam behind this well known and used JS library we have integrated this RTE as a first step.
Do you support spell checker: It's not integrated today but it is possible to integrate the RTE with a spell checker
Can I cut and paste from word: Yes
Can I cut and paste from the web: Yes
In Context Edit
In Context edit is a feature that makes your preview server aware of the content model (the regions, fields and so on) that are editable. Once the server is aware of where these items it can then render an edit button (like a pencil) next to each item. When the user clicks on the pencil/edit the page prompts the user with the appropriate control for the field type right on the page so the user can quickly make an edit.
When is In-Context Edit Useful?
In-context editing is a great feature for a small set of usecases.
When you are editing content which is visible on the page.
In-context edit deals with content and metadata you can see. If you must edit metadata and other non visual data you need more a more expressive capture mechanism.
When your changes are small and apply to one or a few visual fields on the page.
Workflow and Scheduled Deployments
Workflow is the act of moving content through its lifecycle.

Workflow is managed through dialogs.

Submit to Go Live
A Go-Live submission can be initiated from a preview screen (for single items) or from the Dashboard (where items can be batch checked).

Scheduling Policy
When the "Scheduling Policy" link is clicked on the "Submit to Go Live" screen, the previous screen content will be replaced with the scheduling policy. Clicking the "OK" button will take the user back to the "Submit to Go Live" screen.

Submittal Complete
After Submitting, a confirmation will be shown containing follow up information. Clicking OK will close the screen.

Go Live
The admin's Go Live interface will allow batches of scheduled and non-scheduled items to be pushed live at the same time.
Clicking 'Set everything to "Now"' will change the schedule of all items in the list to "Now."
Clicking on any Go Live time will open a quick editor allowing the admin to change/add scheduling information.
Clicking Cancel after making changes to this screen will wipe out any changes that were made.
All dependencies for an item being pushed live must be checked before the "Go Live" button will become active.

Go-Live Complete:
After clicking "Go Live," a confirmation will be shown containing follow up information. Clicking OK will close the screen.
 
Schedule:
Schedule dialog allows the admin to schedule or reschedule a submitted item
Admin Only
The calendar icon can be clicked to quickly pick a date.
The calendar should default to tomorrow's date.
All dependencies for an item being pushed live must be checked before the "Approve & Schedule to Go Live" button will become active.
 
Scheduling Complete
After clicking "Approve & Schedule to Go Live," a confirmation will be shown containing follow up information. Clicking OK will close the screen.

Reject:
Admins may pick canned rejection reasons from the drop-down menu. Once selected, the editable text area field will be filled with the corresponding rejection notice.

Rejection Complete
After clicking "Send Rejection," a confirmation will be shown containing follow up information. Clicking OK will close the screen.

Rejection Notice: User Only
If a user clicks the link to read a rejection notice on the dashboard. They will be able to open and read their rejection notice.

 
Analytics Dashboard

 


.. toctree::
	:maxdepth: 1

	best-practices
