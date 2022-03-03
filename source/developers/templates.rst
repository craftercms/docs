:is-up-to-date: True

=========
Templates
=========

CrafterCMS uses templates to help produce your experiences.  When creating a page or a component, you need to select a template.  This section describes templates, templating APIs and how to create a component template and a page template.

Templates are a starting point for your pages/components, providing a layout/structure for your content.  In the previous section, :ref:`Content Modeling<content-modeling>`, it mentioned that there are two core content types, pages and components, made up of three ingredients: the model, the view and controller.  Content type templates holds these three ingredients to provide the initial structure/layout of a page or component.

Page templates are top level container types that lets you define the layout and functionality of content/components.  It contains editable sections for Authors to place content into.  Any changes made to the template is immediately available to all pages that uses that template.

As mentioned in the previous section, components only differ from pages in that they can’t render by themselves, instead, they must render within a container page or another component.  Component templates allows you to reuse common design elements.  One use for component templates is to simplify your page templates when the layout gets complicated.  Examples of common design elements are headers, left rails, etc.

Here are the topics discussed in this section:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   /developers/projects/engine/api/templating-api
   in-context-editing

