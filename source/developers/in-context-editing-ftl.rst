:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Freemarker Templates In-Context Editing

.. _in-context-editing-ftl:

======================================
Freemarker Template In-Context Editing
======================================

.. Highlighting language used is forced "html" since there's no Pygment lexer for freemarker

.. |SiteItem| replace:: :javadoc_base_url:`SiteItem <engine/org/craftercms/engine/model/SiteItem.html>`

--------------
Studio Support
--------------
Studio support contains various tools that allow developers to integrate and enable Crafter CMS’s In-Context Editing (ICE) features.  It's important to understand that these macros *ONLY RENDER IN PREVIEW* and *DO NOT* add additional structure to your markup.   It only adds attributes to your markup (i.e. no additional elements will be inserted to your HTML tree). A minimal amount of JavaScript/CSS is injected in to your page to enable ICE controls on your marked sections.

--------------------------
Enabling Authoring Support
--------------------------

At the top of your page or component (whatever it is you are rendering, include the following) import:

    .. code-block:: html
       :force:

	    <#import "/templates/system/common/crafter.ftl" as crafter/>

    |

In your template insert the following: (Note the example shows a traditional HTML page however other formats/levels of granularity are supported

    .. code-block:: html
       :force:
       :emphasize-lines: 3, 6, 8

        <html>
          <head>
            <@crafter.head/>
            ...
          <body>
            <@crafter.body_top/>
            ...
            <@crafter.body_bottom/>
          </body>
        </html>

    |

Here's an example taken from a site created using the ``Empty`` blueprint showing how to use the above:

.. code-block:: html
    :force:
    :linenos:
    :emphasize-lines: 1, 23, 26, 31

    <#import "/templates/system/common/crafter.ftl" as crafter />

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${model.title_t}</title>
    	<style>
          html, body {
            color: #333;
            height: 100%;
            background: #f3f3f3;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          main {
            max-width: 800px;
            padding: 40px;
            background: rgba(255,255,255,0.6);
            border-radius: 20px;
            margin: 100px auto;
          }
        </style>
        <@crafter.head/>
      </head>
      <body>
        <@crafter.body_top/>
        <main>
          <@crafter.h1 $field="title_t">${model.title_t}</@crafter.h1>
          <@crafter.div $field="body_html">${model.body_html}</@crafter.div>
        </main>
        <@crafter.body_bottom/>
      </body>
    </html>

|

.. _in-context-editing-pencils:

--------------------------
In-Context Editing Pencils
--------------------------

In context editing renders pencils on the screen that invoke editing controls when clicked.  This allows authors to quickly/visually identify editable content and make changes.

.. image:: /_static/images/ice-example.jpg
        :align: center
        :width: 70 %
        :alt: In context editing example

|


Crafter CMS provides macros that adds all the necessary markup to the tag for the in-context editing engine to pick up the field and allow authors to edit inline, and such.  These macros correspond to most of the HTML elements.

To use the macros, use the following syntax in your Freemarker file:

.. code-block:: html
   :force:

    <@crafter.ELEMENT $model=MODEL $field=CONTENT_TYPE_FIELD $index=INDEX [$label=YOUR_LABEL]>
      ${FIELD_YOU_WANT_ICE_ENABLED}
    </@crafter.ELEMENT>

|

where:

- ELEMENT: The macro name
- CONTENT_TYPE_FIELD: The field, must be the id of the field on the content type — in the example above, hero_title_html, which is a field of the Home (i.e. /page/home) content type.
- MODEL: The model is defaulted to the active ``contentModel`` so in most cases doesn't need to be specified.
- YOUR_LABEL: You can optionally specify a $label so when authors hover on top of that field, the system tooltip will show that custom label instead of the default one which is the name of the field in the content type definition.
- INDEX: Must be specified when working with collections, namely item selectors or repeat groups. See the Website Editorial  blueprint ``article.ftl`` for an example of specifying an index.

Remember that any ``@crafter.element``, requires you to specify the model (i.e. $model), field (i.e. $field) and index (i.e. $index).

For example, below will print out to the HTML  ``<header>Your Heading</header>``, but in addition to that, it will enable in-context editing for the field as shown in the image above when the mouse hovers over the header:

.. code-block:: html
   :force:

   <@crafter.header $field="hero_title_html" $label="Hero Title">
     ${contentModel.hero_title_html}
   </@crafter.header>

|


As mentioned above, most html elements are available as macros, such as: ``crafter.div``, ``crafter.section``, ``crafter.img``, etc.

In the odd case of a tag that our macros do not implement, you can use ``crafter.tag`` like so: <@crafter.tag $tag="my-custom-tag">.

Here's a list of macros available from the ``ice.ftl``: 

.. list-table:: Macros from ice.ftl
   :widths: auto

   * - tag
     - article
     - a
     - img
   * - header
     - footer
     - div
     - section
   * - span
     - h1
     - h2
     - h3
   * - h4
     - h5
     - h6
     - ul
   * - html
     - body
     - head
     - p
   * - ol
     - li
     - iframe
     - em
   * - strong
     - b
     - i
     - small
   * - caption
     - tr
     - td
     - abbr
   * - address
     - aside
     - audio
     - video
   * - blockquote
     - cite
     - code
     - nav
   * - figure
     - figcaption
     - pre
     - time
   * - map
     - picture
     - source
     - componentRootTag

|

There are two more macros available from *ice.ftl*, ``renderComponentCollection`` and  
``renderRepeatCollection``.  See :ref:`here <rendering-components-ice>` for more information on the macro attributes and :ref:`below <rendering-components-in-drop-targets-example>` for an example.

Here's an example using the macros ``@crafter.header`` and ``@crafter.div`` for adding a pencil to the ``Hero Title`` and ``Hero Text`` respectively in the Home page of a site created using the Website Editorial blueprint

  .. code-block:: html
      :force:

	    <section id="banner">
          <div class="content">
            <@crafter.header $field="hero_title_html">
              ${contentModel.hero_title_html}
            </@crafter.header>
            <@crafter.div $field="hero_text_html">
              ${contentModel.hero_text_html}
            </@crafter.div>
          </div>
        ...

  |

To see the above in action, enable in-context editing in Studio by clicking on the pencil at the top right.  The pencil at the top will be colored green when in-context editing is enabled, and notice too that the experience builder panel will be open on the right side.  Hover the mouse over the header of the Home page and notice a pencil will appear:

.. image:: /_static/images/ice-example-2.jpg
   :align: center
   :width: 70 %
   :alt: In context editing example

|


------------------------------
Component Drag and Drop Target
------------------------------

Drag and drop makes it easy for authors to visually assemble pages.  Authors simply choose a component from a pre-defined list of components/widgets, drag them on to the screen, place them where they want (in defined drop targets), and then configure them.  Authors may also move components from one target to another or remove components.

.. image:: /_static/images/drop-target.jpg
   :align: center
   :width: 70 %
   :alt: Component drop target example

|

To define a drop target for components, in your content type, simply add a ``Drop Targets`` data source (component you want in the drop target) and bind it to an ``Item Selector`` control (the  drop target for the component in the data source).

Below is the content type for the ``Home`` page of a site created using the Website Editorial blueprint, with a drop target setup for ``feature`` components:

.. image:: /_static/images/drop-target-setup.jpg
   :align: center
   :width: 70 %
   :alt: Component drop target setup example

|


.. _rendering-components-in-drop-targets-example:

Rendering components from the target inside the container
---------------------------------------------------------

The template needs to render the components that are in the drop target.  The basic code to do this looks like:

.. code-block:: html
    :force:
    :emphasize-lines: 8
    :caption: */templates/web/pages/home.ftl*

	  <!-- Section: Features -->
    <section>
      <header class="major">
        <@crafter.h2 $field="features_title_t">
          ${contentModel.features_title_t}
        </@crafter.h2>
      </header>
      <@crafter.renderComponentCollection $field="features_o" class="features" $itemAttrs={ "class": "feature-container" }/>
    </section>
    <!-- /Section: Features -->

|

Note that ``crafter.renderComponentCollection`` will iterate over the collection of components and render it.  
NO markup is being inserted in this example.  The component template is rendering itself.  


--------------
Engine Support
--------------

At the top of your page or component (whatever it is you are rendering, include the following) import:

  .. code-block:: html
      :force:

	    <#import "/templates/system/common/crafter.ftl" as crafter/>

  |

Components
----------

Render Component
----------------

Need to render a sub component of some kind? 

    .. code-block:: html
        :force:

	    <@renderComponent component=module />

|

Render Components
-----------------

Need to iterate through a list of components and render them WITHOUT any additional markup?


    .. code-block:: html
        :force:

	    <@crafter.renderComponentCollection $field="header_o"/>

|

