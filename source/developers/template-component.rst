.. _template-component:

===================
Component Templates
===================

Component content type templates are very similar to page content type templates, as mentioned in :ref:`content-modeling`, the only difference between components and pages is that components cannot render by itself, it needs a container to render into.  In this section, we will show you how to create a component content type template that can be rendered in the sidebar of the Website_Editorial blueprint.

To create a new component template, click on Admin Console in the Sidebar.  Click on *Content Types*, then select *Create New Type*.  Enter a Display Label and content type name for your new page template, then select **Component** as Type and then click on the **Create** button.

.. figure:: /_static/images/templates/templates-component-new.png
    :alt: Template Create New Type Component Dialog
    :width: 50 %
    :align: center


We'll now start to construct the layout of our component.  Just like a Page Template, a Component Template has three ingredients: the model, the view and the controller.

^^^^^
Model
^^^^^
The dialog that opens after clicking on the **Create** button is the form that is presented to authors to enter content into.  The controls available are on the right side of the dialog, in the **Controls** section.  Simply drag the desired control to the form section to add.

We will add two input controls, one for the *Title* and one for the *Max Blog Entries*.  Under the *Properties Explorer* we'll mark both inputs as *Required* and for the *Max Blog Entries*, we will set the *Display Size* and *Max Length* as 3

.. figure:: /_static/images/templates/templates-comp-add-input.png
    :alt: Template Create New Type Component Dialog
    :width: 95 %
    :align: center


We will also add an item selector and label it as *Controllers*

.. figure:: /_static/images/templates/templates-comp-add-item-selector.png
    :alt: Template Component Add an Item Selector Control
    :width: 95 %
    :align: center

We'll then add the corresponding *Child Content* data source labeled *Scripts* and set the *Repository Path* to */scripts/components*

.. figure:: /_static/images/templates/templates-comp-add-child-content.png
    :alt: Template Component add a Child Content Data Source
    :width: 95 %
    :align: center

We'll then bind the data source *Scripts* to the item selector *Controllers* by checking *Scripts* for the *Item Manager* under the *Properties Explorer* of the *Controller* item selector control

.. figure:: /_static/images/templates/templates-comp-bind-ctrl-src.png
    :alt: Template Component Bind the Child Content Data Source to the Item Selector Control
    :width: 95 %
    :align: center

The model for our template is done.  You can add some other controls by dragging and dropping controls from the **Controls** section to the form.  To learn more about all the controls available, please see :ref:`form-controls`.  To learn more about the data sources available, please see :ref:`data-sources`.

^^^^
View
^^^^

We'll now build the view for our template, which is the freemarker template file that renders the content, typically to HTML markup.  There are two ways to create the freemarker template file for our template.  One way is to open the **Sidebar** menu in Studio, then navigate to the **Templates** folder, depending on how your site is setup, you may want to navigate to the subfolder in your Templates folder where you want to create the freemarker template file.  Once you are in the desired subfolder, right click on that folder then select **Create Template**.  In our example here, we navigated to **Templates->templates->components**, then right click on the **components** folder then select *Create Template*

.. figure:: /_static/images/templates/templates-comp-create-controller.png
    :alt: Template Component Create Controller
    :width: 50 %
    :align: center

Give the view template a name.  We're naming our view template *blog-widget*, then click on the **Create** button.

.. figure:: /_static/images/templates/templates-comp-create-ctrler-dialog.png
    :alt: Template Component Create Controller Dialog
    :width: 50 %
    :align: center

A dialog will open where we can now enter how we want to display the content.

.. figure:: /_static/images/templates/templates-comp-view-template.png
    :alt: Template Component View
    :width: 95 %
    :align: center

We will now bind the view template to the model we created earlier by clicking on the **Display Template** under the *Properties Explorer*

.. figure:: /_static/images/templates/templates-comp-bind-view-model.png
    :alt: Template Component Display Template
    :width: 95 %
    :align: center

We will now select the view template we just created by clicking on the magnifying glass and selecting *blog-widget.ftl* from the list.

.. figure:: /_static/images/templates/templates-comp-bind-select.png
    :alt: Template Component Bind View to Model
    :width: 95 %
    :align: center


Our view template is now done.  Next we'll create a controller for our component and bind it to the blog-widget component content type template.

^^^^^^^^^^
Controller
^^^^^^^^^^

We will add a controller that allows us to display the latest blog entries in the sidebar of our site.

There are two ways to bind a script/controller to a page/component.  The first way, as we have seen in the previous section :ref:`template-page` is to put the script under Scripts->Pages or Scripts->Components, and name the script after the page or component type.  We'll show the other way how to bind a script to a page/component in this section, by adding an item selector to the the model with a corresponding data source *Child Content* named ``scripts``.  When we were building the model for our content type template, you may have noticed that we have already added an item selector named **Controllers** with a corresponding data source child content named **Scripts**, we are now going to construct a script that can be used by the item selector of our content type.

.. figure:: /_static/images/templates/templates-comp-bind-select.png
    :alt: Template Create New Type Component Dialog
    :width: 95 %
    :align: center

Now that we have our controller, we just need to create a component named *Latest Blogs Widget* under the **Components** folder in the Sidebar.

.. figure:: /_static/images/templates/templates-comp-bind-select.png
    :alt: Template Create New Type Component Dialog
    :width: 95 %
    :align: center

We will then create a Sidebar component with the *Latest Blogs Widget*

.. figure:: /_static/images/templates/templates-comp-bind-select.png
    :alt: Template Create New Type Component Dialog
    :width: 95 %
    :align: center