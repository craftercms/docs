:is-up-to-date: True

.. index:: In-Context Editing

.. _in-context-editing:

==================
In-Context Editing
==================

.. Highlighting language used is "guess" (let Pygments guess the lexer based on contents, only works with certain well-recognizable languages) since there's no Pygment lexer for freemarker

.. |SiteItem| replace:: :javadoc_base_url:`SiteItem <engine/org/craftercms/engine/model/SiteItem.html>`

--------------
Studio Support
--------------

Studio support adds authoring tools to your template.  It's important to understand that these macros *ONLY RENDER IN PREVIEW* and *DO NOT* add additional structure to your markup.  A minimal amount of Javascript/css is injected in to your page to facilitate editing tool integration with your page.  

The previous template markup for Studio support still works however the new markup generates cleaner code and exposes new features.

.. note::
   If your ``cstudio-support.ftl`` uses ``siteContext.overlayCallback`` to check if Engine is running in preview mode, please update your file to use ``modePreview`` instead as ``siteContext.overlayCallback`` and related classes are being discontinued in Engine.

     Search for ``siteContext.overlayCallback`` calls in your ``cstudio-support.ftl`` file:

     .. code-block:: guess
        :caption: cstudio-support.ftl
        :emphasize-lines: 2

        <#macro toolSupport>
          <#if siteContext.overlayCallback??>
            <script src="/studio/static-assets/libs/requirejs/require.js" data-main="/studio/overlayhook?site=NOTUSED&page=NOTUSED&cs.js"></script>
            <script>document.domain = "${Request.serverName}"; </script>
          </#if>

     |

     Replace with ``modePreview`` to check if Engine is running in preview mode:

     .. code-block:: guess
        :caption: cstudio-support.ftl
        :emphasize-lines: 2

        <#macro toolSupport>
          <#if modePreview>
            <script src="/studio/static-assets/libs/requirejs/require.js" data-main="/studio/overlayhook?site=NOTUSED&page=NOTUSED&cs.js"></script>
            <script>document.domain = "${Request.serverName}"; </script>
          </#if>

     |

--------------------------
Enabling Authoring Support
--------------------------

At the top of your page or component (whatever it is you are rendering, include the following) import:

    .. code-block:: guess

	    <#import "/templates/system/common/cstudio-support.ftl" as studio/>

|

At the bottom of your template insert the following: (Note the example shows a traditional HTML page however other formats/levels of granularity are supported

    .. code-block:: guess

	        <@studio.toolSupport/>
	      </body>
	    </html>

|

--------------------------
In-Context Editing Pencils
--------------------------

In context editing renders pencils on the screen that invoke editing controls when clicked.  This allows authors to quickly/visually identify editable content and make changes.

.. image:: /_static/images/ice-example.png
        :align: center
        :width: 70 %
        :alt: In context editing example

|

To enable in-context editing simply add the following attribute to the container/element where you want to place the editing control

    .. code-block:: guess

	    <@studio.iceAttr iceGroup="author"/>

|

For embedded components, to enable in-context editing simply add the following attribute and tag attribute to the embedded component template

    .. code-block:: guess

	    <@studio.iceAttr component=contentModel/>

|

Tag Attributes
--------------

+----------------+------------------------------------+-------------------------------------------+
| Attribute Name | Required                           | Expected Value                            |
+================+====================================+===========================================+
|| iceGroup      || No (unless path is not supplied)  || the label/id assigned to iceGroup on     |
||               ||                                   || fields in your content model.            |
+----------------+------------------------------------+-------------------------------------------+
|| path          || No                                || the path of the item. This is typically  |
||               || (unless iceGroup is not supplied) || just mode.storeUrl.                      |
||               ||                                   ||                                          |
||               ||                                   || If path is not supplied the system       |
||               ||                                   || will assume the outermost object e.g.    |
||               ||                                   || the page as the path.                    |
+----------------+------------------------------------+-------------------------------------------+
|| label         || No (but it's a best practice)     || UI will use label if it exists. Otherwise|
||               ||                                   || the iceGroup or path will be used.       |
+----------------+------------------------------------+-------------------------------------------+
|| component     || No                                || a |SiteItem| object                      |
+----------------+------------------------------------+-------------------------------------------+

Example: 

    .. code-block:: guess

	    <img <@studio.iceAttr iceGroup="image" label="Promo Image 1" /> src="${contentModel.image!""}" alt="${contentModel.alttext!""}"/>``

    |

Let's take a look at an example of enabling in-context editing pencils for embedded components, using the Website Editorial bp, ``feature`` embedded component.

Here's how the features section pencils look like before adding the ``iceAttr`` with the ``component`` tag:

.. image:: /_static/images/developer/ice-embedded-component-example.png
    :align: center
    :width: 70 %
    :alt: In context editing embedded content not enabled example

|

To enable the in-context editing pencils of the features component, add the attribute ``iceAttr`` with the attribute tag ``component`` like below:

    .. code-block:: guess
        :caption: /templates/web/components/feature.ftl

        <article <@studio.iceAttr component=contentModel/> <@studio.componentAttr path=contentModel.storeUrl />>

    |

Here's how the features section pencils look like after enabling the in-context editing pencils for embedded components:

.. image:: /_static/images/developer/ice-embedded-component-example2.png
    :align: center
    :width: 70 %
    :alt: In context editing embedded content enabled example

|

----------------------------
Component Drag and Drop Zone
----------------------------

Drag and drop makes it easy for authors to visually assemble pages.  Authors simply choose a component from a pre-defined list of components/widgets, drag them on to the screen, place them where they want (in defined drop zones), and then configure them.  Authors may also move components from one zone to another or remove components.

.. image:: /_static/images/dropzone.png

|

To define a drop zone for components simply add the ``componentContainerAttr`` attribute with the ``objectId`` tag to the container element where you want your components to render

    .. code-block:: guess

	    <@studio.componentContainerAttr target="bottomPromos" objectId=contentModel.objectId />

|

To define a drop zone for embedded components, simply add the ``componentContainerAttr`` attribute with the ``component`` tag to the container element where you want your embedded components to render

    .. code-block:: guess

	    <@studio.componentContainerAttr target="bottomPromos" component=contentModel />


Tag Attributes
--------------

+----------------+------------------------------+------------------------------------------------+
| Attribute Name | Required                     | Expected Value                                 |
+================+==============================+================================================+
|| target        || Yes                         || The name of the field in the parent model     |
||               ||                             || where component references will be stored.    |
||               ||                             ||                                               |
||               ||                             || This is typically an item selector field type.|
+----------------+------------------------------+------------------------------------------------+
|| component     || No                          || a |SiteItem| object                           |
||               || (unless ``objectId`` is     ||                                               |
||               ||  not supplied)              ||                                               |
+----------------+------------------------------+------------------------------------------------+
|| objectId      || No                          || Id for component container which is typically |
||               || (unless ``component`` is    || the store URL of the current content object   |
||               ||  not supplied)              || (contentModel.objectId)                       |
+----------------+------------------------------+------------------------------------------------+

Example:

    .. code-block:: guess

	    <div class="span4 mb10" <@studio.componentContainerAttr target="bottomPromos" objectId=contentModel.objectId /> >
		    ...
	    <div>

    |

    For embedded components:

    .. code-block:: guess

	    <div class="span4 mb10" <@studio.componentContainerAttr target="bottomPromos" component=contentModel /> >
		    ...
	    <div>

    |

If you want to learn how to configure the Drag and Drop panel please read the following document: :doc:`../site-administrators/studio/drag-n-drop-configuration`.

Rendering components from the target inside the container
---------------------------------------------------------

The template needs to render the components that are referenced. The basic code to do this looks like:

    .. code-block:: guess

	    <#if contentModel.bottomPromos?? && contentModel.bottomPromos.item??>
		  <#list contentModel.bottomPromos1.item as module>
		    <@renderComponent component=module />
		  </#list>
	    </#if>

|

Note that the code is simply iterating over the collection of objects and calling render component.  NO markup is being inserted in this example.  The component template is rendering itself.  It's up to you if you want to insert markup around sub-components.
Full example of typical component drop zone

    .. code-block:: guess

	    <div class="span4 mb10" <@studio.componentContainerAttr target="bottomPromos" /> >
		  <#if contentModel.bottomPromos?? && contentModel.bottomPromos.item??>
		    <#list contentModel.bottomPromos.item as module>
		      <@renderComponent component=module />
		    </#list>
		  </#if>
	    </div>

|

If the component to be rendered is an embedded component, the tag ``parent`` with a |SiteItem| object for the value needs to be added to ``renderComponent`` if the component to be rendered is not the current item, like below:

    .. code-block:: guess

       <@renderComponent component=module parent=contentModel/>

    |

Let's take a look at an example using a site created using the Website Editorial blueprint.  In the Home page of the site, the features section contains embedded components ``feature``.  To render the embedded components from the target inside the container, note that the tag ``parent=contentModel`` is not required since the component to be rendered is the current item:

.. code-block:: guess
   :linenos:
   :emphasize-lines: 9
   :caption: */templates/web/pages/home.ftl*

   <!-- Section -->
     <section <@studio.iceAttr iceGroup="features"/>>
       <header class="major">
         <h2>${contentModel.features_title_t}</h2>
       </header>
       <div class="features" <@studio.componentContainerAttr target="features_o" objectId=contentModel.objectId/>>
         <#if contentModel.features_o?? && contentModel.features_o.item??>
           <#list contentModel.features_o.item as feature>
             <@renderComponent component=feature />
           </#list>
         </#if>
       </div>
     </section>

|

As noted above, the code is simply iterating over the collection of objects (``feature`` component) and calling render component.  The component template is rendering itself.


Identifying components in the template
--------------------------------------

In order for authors to interact with components, to drag them around the screen for example the templating system must know how to identify them.  To identify a component simply add the following attribute to the outer most element in the component template's markup

    .. code-block:: guess

	    <@studio.componentAttr path=contentModel.storeUrl />

|

Tag Attributes
--------------

+----------------+------------------------------+-------------------------------------------------+
| Attribute Name | Required                     | Expected Value                                  |
+================+==============================+=================================================+
|| path          || Yes                         || the path to the component. Typically this is   |
||               ||                             || simply contentModel.storeUrl                   |
+----------------+------------------------------+-------------------------------------------------+
|| ice           || No                          || true or false. If true the component will      |
||               ||                             || automatically render ICE (in context editing)  |
||               ||                             || controls for you. This is helpful on simple    |
||               ||                             || components. Larger components may be so complex|
||               ||                             || that multiple ice elements make sense. In the  |
||               ||                             || latter case omit this attribute or set it to   |
||               ||                             || false and manually add your own ICE attributes |
||               ||                             || to the component template                      |
+----------------+------------------------------+-------------------------------------------------+
|| iceGroup      || No (unless path is not      || the label/id assigned to iceGroup on           |
||               || supplied)                   || fields in your content model.                  |
+----------------+------------------------------------+-------------------------------------------+
|| component     || No                          || a |SiteItem| object                            |
+----------------+------------------------------------+-------------------------------------------+

Example

    .. code-block:: guess

	    <img <@studio.componentAttr path=contentModel.storeUrl ice=true /> src="${contentModel.image!""}" alt="${contentModel.alttext!""}" />

|

.. note:: Remember to have an item selector control in the form definition for each drop zone

--------------
Engine Support
--------------

At the top of your page or component (whatever it is you are rendering, include the following) import:

    .. code-block:: guess

	    <#import "/templates/system/common/crafter-support.ftl" as crafter/>

|

Components
----------

Render Component
----------------

Need to render a sub component of some kind? 

    .. code-block:: guess

	    <@renderComponent component=module />

|

Render Components
-----------------

Need to iterate through a list of components and render them WITHOUT any additional markup?


    .. code-block:: guess

	    <@crafter.renderComponents componentList=contentModel.bottomPromos />

|

Render RTE (Rich Text Editor Components)
----------------------------------------

Have components that are inserted in to the rich text editor and need to render them?

    .. code-block:: guess

	    <@crafter.renderRTEComponents />

|
