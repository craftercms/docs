.. _template-page:

==============
Page Templates
==============

To create a new page template, click on **Site Config**

.. figure:: /_static/images/templates/templates-admin-console.png
	:alt: Template Admin Console
	:align: center

Click on *Content Types*, then select *Create New Type*

.. figure:: /_static/images/templates/templates-content-type.png
	:alt: Template Content Type
	:align: center

.. figure:: /_static/images/templates/templates-create-new-type.png
	:alt: Template Create New Type
	:align: center

Enter a Display Label and content type name for your new page template, then select **Page** as Type and then click on the **Create** button

.. figure:: /_static/images/templates/templates-create-new-filled.png
	:alt: Template Create New Type Dialog
	:align: center

We'll now start to construct the layout of the page.  A template has three ingredients: the model, the view and the controller.

^^^^^
Model
^^^^^

We'll start building the model first, which is the form that Authors will be using to enter content into.  We'll add a form section called *Content* to the form and name it accordingly.

.. figure:: /_static/images/templates/templates-add-form-section.png
	:alt: Template Add Form Section to Model
	:align: center

We'll add a few more things to our model by dragging controls and data sources to the form.  We're creating a page template for a blog entry, so at a minimum, we'll add some input fields for the title and author names, a date/time field, an image picker and it's corresponding data sources and a rich text editor inside a repeating group control so Authors can add as many sections as they want.

.. figure:: /_static/images/templates/templates-add-controls-input.png
	:alt: Template Add Input Fields to the Form
	:align: center

Here we're adding an image picker to the form.  Notice that we'll need to add data sources for the image picker to get images from.  There are at least two sources that the image picker can get images from.  One is from images uploaded from the desktop, the other is for existing images listed in the Static Assets folder in the Sidebar.

.. figure:: /_static/images/templates/templates-add-image-picker.png
	:alt: Template Add Image Picker to Form
	:align: center

We're now going to add a data source for our image picker, by dragging the **Image Uploaded from Desktop** from the Data Sources list on the right to the form in the section **Data Sources**.  Don't forget to enter the path where to store the new image uploaded from desktop in the **Repository Path** field under the Properties Explorer

.. figure:: /_static/images/templates/templates-image-desktop-src.png
	:alt: Template Add Desktop Image Source
	:align: center

We'll also add the data source **Image from repository** by dragging it to the **Data Sources** section in the form.  Don't forget to add the path where to browse existing images from the repository

.. figure:: /_static/images/templates/templates-image-existing-src.png
	:alt: Template Add Existing Image Source
	:align: center

We'll go back to the Image Picker control on the form to make sure the two data sources we added are checked as sources for the Image Picker

.. figure:: /_static/images/templates/templates-add-img-src.png
	:alt: Template Add Image Sources to Image Picker
	:align: center

We'll be adding a header component and a sidebar component inherited from the home page.  To add a component to the form, drag the **Item Selector** control to the form in the *Page - Blog Properties* section.  We'll be adding two components to the form, one for the *Header* and one for the *Sidebar*

.. figure:: /_static/images/templates/templates-add-item-selector.png
	:alt: Template Add Item Selector
	:align: center

We'll need to add a data source for the two *Item Selectors* we just added to the form by dragging **Child Content** to the *Data Sources* section to the form and naming it **Components**. Don't forget to add the path where to store new content created under the **Repository Path** field in the Properties Explorer.

.. figure:: /_static/images/templates/templates-add-item-selector-src.png
	:alt: Template Add Item Selector Source
	:align: center

We're going back to the Item Selectors we added to the form and check  **Components** as data source for our control

.. figure:: /_static/images/templates/templates-add-item-sel-src.png
	:alt: Template Check Item Selector Source
	:align: center

Next we'll add a **Repeating Group** control to the form,  with a minimum of 1 occurrence, which can be specified in the *Properties Explorer* section, in the **Minimum Occurrences** field

.. figure:: /_static/images/templates/templates-add-repeating-group.png
	:alt: Template Add Repeating Group Control
	:align: center

In the Repeating Group control, we will add an RTE (Rich Text Editor).  In order for the content to be searchable, it needs to be indexed to Solr.  To facilitate indexing to Solr, *_html* suffix should be appended to the variable name given to the RTE.  In this case, the RTE's variable name is *section_html*.  For more information on variable names and search indexing , please see the section :ref:`form-control-variable-names`

.. figure:: /_static/images/templates/templates-add-rte.png
	:alt: Template Add Rich Text Editor to Repeating Group Control
	:align: center

The model for our template is done.  You can add some other controls by dragging and dropping controls from the **Controls** section to the form.  To learn more about all the controls available, please see :ref:`form-controls`.  To learn more about the data sources available, please see :ref:`data-sources`.

^^^^
View
^^^^

We'll now build the view for our template, which is the freemarker template file that renders the content, typically to HTML markup.
There are two ways to create the freemarker template file for our template.  One way is to open the Sidebar menu in Studio, then navigate to the **Templates** folder, depending on how your site is setup, you may want to navigate to the subfolder in your Templates folder where you want to create the freemarker template file.  Once you are in the desired subfolder, right click on that folder then select **Create Template**

.. figure:: /_static/images/templates/templates-ftl-create-sidebar.png
	:alt: Template Create FTL from Sidebar
	:align: center

The other way of creating your freemarker template, is to go to the Properties Explorer, then click on the **Display Template** field, a magnifying glass and a pencil will appear on the field.  To create a template, click on the pencil.

.. figure:: /_static/images/templates/templates-ftl-create-properties.png
	:alt: Template Create FTL from Content Type Properties Display Template Field
	:align: center

Either way of starting to create your new ftl template, a Create Template dialog will appear.  It will then ask you for a filename for the freemarker template you're creating, then click on the **Create** button.

.. figure:: /_static/images/templates/templates-ftl-create-dialog.png
	:alt: Template FTL Create Template Dialog
	:align: center

A dialog will appear with a blank template.

.. figure:: /_static/images/templates/templates-ftl-dialog.png
	:alt: Template FTL Dialog
	:align: center

At the top of the dialog, you can use some *Template code examples* from a drop down list.  Here's the list of available template code examples.

.. figure:: /_static/images/templates/templates-ftl-sample-codes.png
	:alt: Template FTL Code Examples
	:align: center

For the template we are creating, we will select **Studio support** from  the drop down list and then click on the **Add Code** button to enable authoring support.

.. figure:: /_static/images/templates/templates-ftl-studio-support-sample.png
	:alt: Template FTL Studio Support Code Example
	:align: center

We will now start filling in the template of how we want the content captured in the model is rendered to html in this case.  In the image below, we render the header component and the other fields in the Content section of our model.  Please note how fields in the model are rendered through the FTL template.  To learn more, please see the section :ref:`templating-api`

.. figure:: /_static/images/templates/templates-ftl.png
	:alt: Template FTL
	:align: center

^^^^^^^^^^
Controller
^^^^^^^^^^

To complete the content type template we are building, we will create a custom controller.  In the preceding section, we created a new content type (template) Page - Blog.  We will now add a couple of featured articles at the bottom of the page depending on the active Persona.  To be able to display articles depending on the active Persona, we will need to get a list of articles tagged for the active Persona.  This can be done by adding a script that gets executed to get the list of articles tagged for the persona selected before the page is rendered.

Open the **Sidebar** menu and navigate to the **Scripts** folder.  Click on the **Scripts** folder then **scripts**.  Right click on the folder **pages**, then select **Create Controller**

.. figure:: /_static/images/templates/templates-create-controller.png
	:alt: Template Create Controller
	:align: center

Enter a name for the controller, then click on the **Create** button.  Since we are creating this controller for our Page-Blog template, we will name the script ``blog.groovy``.  Putting the script under *scripts->pages* and naming it after the page content type, binds the script to our page.

.. figure:: /_static/images/templates/templates-dialog-create-controller.png
	:alt: Template Dialog Create Controller
	:align: center

We can now start adding the script to get a list of articles depending on the active Persona.

.. figure:: /_static/images/templates/templates-input-script-controller.png
	:alt: Template Controller Script
	:align: center

There are two ways to bind a script/controller to a page/component.  The first way, as we have seen is to put the script under Scripts->Pages or Scripts->Components, and name the script after the page or component type.  We'll show the other way how to bind a script to a page/component in the next section :ref:`template-component`

To find out more about page and component scripts, please see :ref:`page-and-component-scripts`.

Now that we have our controller, we just need to add code to the freemarker template (view) to display the list of articles returned by the script.

.. figure:: /_static/images/templates/templates-controller-added.png
	:alt: Template Modify FTL to Display Controller Script Output
	:align: center

As you can see from the controller we just added, the controller is used to customize your page by enabling you to run codes before the page is rendered.  To find out more about groovy APIs in Crafter CMS, please see the section :ref:`groovy-api`.