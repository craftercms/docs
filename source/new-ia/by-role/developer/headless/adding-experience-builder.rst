:is-up-to-date: False
:since-version: 4.0.0

.. _newIa-headless-xb:

======================================
Adding Experience Builder to a Project
======================================

CrafterCMS' Experience Builder (XB) provides a UI layer on top of your applications that enables authors
with in-context editing (ICE) for all the model fields defined in the content types of pages and components.
CrafterCMS developers must integrate their applications with XB, essentially telling XB what field of the
model each element on the view represents. See :ref:`newIa-content-modeling` to learn more about the model.

.. TODO insert <figure: example page with a sample content type side by side showing the relation between page elements
   and content type fields>

----------------------------------------------
Creating Experience Builder (XB) Enabled Sites
----------------------------------------------

The concrete integration strategy with XB depends on what kind of application you are developing, however,
overall all you need to do is mark the content element that display CrafterCMS content and initialize XB.
CrafterCMS provides native XB integration for FreeMarker and React applications. Other types of
applications (e.g. Angular, Vue, etc.) can be integrated with XB through the underlying libraries
that power the FreeMarker and React applications. For reference on how to integrate, please see the
sections below for your specific kind of application.

To integrate with XB, all you need to do is:

* Register or mark CrafterCMS content field elements: you tell the system what HTML element represents
  any give model field. Registration can be manual (i.e. invoking specific methods from the XB JavaScript
  libraries), or by putting a specific set of attributes on each tag.
* Initialize XB. Which can also be done manually or by invoking specific methods of the XB JavaScript
  libraries.

Overall, XB's ICE engine works with a coordinate system that you — the developer — use to
tell the CMS which field of the content type each element/component on your page/app maps to.

The coordinate system consists of the following pieces of data:

* **Path**: the path to the content item (e.g. ``/site/components/features/main_feature.xml``)
* **Model ID (a.k.a. object ID, local ID)**: the internal GUID that every content object in CrafterCMS has
  (e.g. ``5a06e244-64f4-4380-8619-1c726fe38e92``)
* **Field ID**: the ID of the field in the content type (e.g. ``heroTitleText_t``)

  * Field IDs may be compound, comprised of the full path to that field when such field is nested within repeat
    groups (e.g. ``carouselSlides_o.slideTitle_t``)

* **Index**: When working with collections (e.g. component selectors or repeat groups), the index of the item within
  it's container collection (e.g. ``0``)

  * Indexes can be compound, comprised of the full path of indexes to that item in the collection (e.g. ``0.1``)

XB's ICE engine requires, at times, what might be considered slightly more verbose markup structure.
In order for the system to be able to direct authors to every piece of the model, as well as allowing
them to edit inline, you need to register each piece of the model as an element on your view.

For example, consider a carousel, where the carousel is modelled as a CrafterCMS component that has
a repeat group field called ``slides_o`` which has two inner fields called ``caption_s`` and ``image_s``.

The markup for a carousel may look like this:

.. code-block:: html

     <div class="carousel">
       <div class="slide">
         <img src="slide1.png" alt="">
         <h2>Slide One</h2>
       </div>
       <div class="slide">
         <img src="slide2.png" alt="">
         <h2>Slide Two</h2>
       </div>
     </div>

In order to register each piece of the model, we would need to introduce a new element.

.. code-block:: html

   <div class="carousel">              <!-- Component (Carousel) -->
     <div>                             <!-- Repeating group (slides_o) — Additional element introduced -->
       <div class="slide">             <!-- Repeat group item (slides_o[0]) -->
         <img src="slide1.png" alt=""> <!-- Repeat group item field (slides_o[0].images_s) -->
         <h2>Slide One</h2>            <!-- Repeat group item field (slides_o[0].caption_s) -->
       </div>
       <div class="slide">             <!-- Repeat group item (slides_o[1]) -->
         <img src="slide2.png" alt=""> <!-- Repeat group item field (slides_o[1].images_s) -->
         <h2>Slide Two</h2>            <!-- Repeat group item field (slides_o[1].caption_s) -->
       </div>
     </div>
   </div>

You can vary exactly where to add this additional element to suit your needs — or those of the libraries
and frameworks that you use to develop your applications. The important aspects are that each field is
represented by an element on the page/app and that the hierarchy of the fields is followed by the
hierarchy of your markup.

Meaning, the component element is the parent of the repeat group element which is a parent of the repeat group items
which are parents of the repeat group item fields, as shown below:

.. code-block:: text

  component
    repeat-group
      item
        item-fields

For example, you could move the additional ``div`` to be the top wrapper, and hence represent the component
instead of the repeat group. Naturally, the repeat group would then be represented by the ``div`` with the
carousel class.

.. code-block:: html

   <div>                    <!-- Component (Carousel) -->
     <div class="carousel"> <!-- Repeating group (slides_o) -->
       ...
     </div>
   </div>

^^^^^^^^^^^
Rules of XB
^^^^^^^^^^^

.. TODO: Find better title?

* The HTML element that is registered with XB as a field must contain only that content, unwrapped.

  * Elements that represent fields of type text, html and other simple values, should print the content
    value directly inside of them without intermediate elements.

      .. list-table::
         :header-rows: 1

         * - Incorrect
           - Correct
         * - .. code-block:: html

                  <!-- Author field (author_s) -->
                  <div class="byline">
                     by ${author_s}
                  </div>
           - .. code-block:: html

                  <div class="byline">
                     by
                     <!-- Author field (author_s) --><span>${author_s}</span>
                  </div>

  * Elements that represent collections (i.e. repeat groups or component collections), must have their
    item elements as direct children.

      .. list-table::
         :header-rows: 1

         * - Incorrect
           - Correct
         * - .. code-block:: html

                  <!-- Component collection field (components_o) -->
                  <div>
                     <div class="column">
                        <!-- Component collection item (components_o) -->
                        <div class="feature>
                           ...
                        </div>
                     </div>
                  </div>
           - .. code-block:: html

                  <!-- Component collection field (components_o) -->
                  <div>
                     <!-- Component collection item (components_o) -->
                     <div class="column">
                        <div class="feature>
                           ...
                        </div>
                     </div>
                  </div>

^^^^^^^^^^^^^^^^^^^^^^^
JavaScript Applications
^^^^^^^^^^^^^^^^^^^^^^^

XB offers a set of JavaScript (JS) libraries and utilities that you can use in various scenarios.
When writing JS-powered applications including Single-page applications — like when using React,
Angular, Vue or similar — all you need to do is invoke the various XB methods relevant to your application.

The simplest integration strategy for JS applications consist of marking the relevant HTML elements
which represent a content model field, with a set of attributes that CrafterCMS sdk libraries generate for you based on a content
model that you've previously fetched.

You may also dig deep into the system and manage the field element registrations manually to suit your
application needs.

Usage
~~~~~

XB JS libraries can be used either via npm by importing ``@craftercms/experience-builder`` or using the
JS umd bundle and adding it into your app's runtime.

React
~~~~~

CrafterCMS provides React bindings for integrating with XB. Because XB itself is a React application,
React presents the tightest, most native integration with XB as it will essentially run as part of your
app instead of as a parallel application like when using other technologies.

React bindings can be used either via npm or using the umd bundle that comes with CrafterCMS.

The components available for using on your React applications are listed below.

.. _newIa-ExperienceBuilder:

ExperienceBuilder
"""""""""""""""""

This is the main component that orchestrates and enables all of the In-context Editing. You must declare
this component only once and it should be a parent of all the XB-enabled components.

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Prop
     - Type
     - Default
     - Description
   * - ``isAuthoring``
     - boolean
     - (Required)
     - It controls the adding or bypassing of authoring tools. Should send true when
       running in Studio and authoring tools should be enabled. Authoring tools are completely
       absent when set to false.
   * - ``isHeadlessMode``
     - boolean
     - false
     - If your App consumes content from CrafterCMS in a headless way, certain options (e.g. editing
       the freemarker template or controller) aren't applicable. Setting headless mode to true will
       disable XB options that aren't relevant to headless application such as SPAs.
   * - ``themeOptions``
     - `MUI's ThemeOptions <https://mui.com/customization/theming>`__
     - XB's defaults
     - XB is powered by MUI. This argument allows you to customize MUI theme options and override
       XB's defaults.
   * - ``sxOverrides``
     - ExperienceBuilderStylesSx
     - XB's defaults
     - You may change XB-specific theming through this argument
   * - ``documentDomain``
     - string
     - null
     - You may specify a ``documentDomain`` if your preview runs on a different domain than Studio does.
   * - ``scrollElement``
     - string
     - html, body
     - You may specify a different element for XB to scroll when scrolling the user to specific
       CrafterCMS field elements.

Model
"""""

Use this component to render elements that represent the **models themselves** (i.e. CrafterCMS pages or
components, not their fields).

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Prop
     - Type
     - Default
     - Description
   * - ``model``
     - Object (ContentInstance)
     - (Required)
     - The model being rendered
   * - ``component``
     - string | React.ElementType
     - "div"
     - The component to be rendered
   * - ``componentProps``
     - Object
     - undefined
     - Any props sent at the root that aren't own props are forwarded down to the rendered
       component so in most cases you needn't use ``componentProps``. There may be cases where your
       target component has a prop name that matches in name with a prop of the CrafterCMS React
       component so to avoid it swallowing the prop and not reaching your target component, you may
       send the prop(s) via ``componentProps`` instead.

ContentType
"""""""""""

Use this component to render a specific component of your own library based on the content type of the
model. ``ContentType`` component works with a "content type map" which you must supply as a prop. The
content type map, is essentially a plain object, a lookup table of your components indexed by content
type id. You may use it in conjunction with ``React.lazy`` to optimize your app; specially considering the
content type map should contain all the possible components that you will be rendering via ``ContentType``
component on a given piece of your app.

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Prop
     - Type
     - Default
     - Description
   * - ``model``
     - Object (ContentInstance)
     - (Required)
     - The model being rendered
   * - ``contentTypeMap``
     - Object
     - (Required)
     - A map of components indexed by CrafterCMS content type id. The content type id of the model passed
       will be used to pick from the map the component that should render said model.
   * - ``notFoundComponent``
     - React.ComponentType
     -
     - If the model passed to ``ContentType`` is ``null``, it's taken as a 404 and the notFoundComponent
       is rendered.
   * - ``notMappedComponent``
     - React.ComponentType
     -
     - If the content type of the model is not found in the ``contentTypeMap``, the ``notMappedComponent``
       is rendered.

RenderField
"""""""""""

Use this component to render CrafterCMS model **fields**. Although it can also render collection-type
fields, CrafterCMS provides specific components (see below) to render component collections or repeat groups.

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Prop
     - Type
     - Default
     - Description
   * - ``model``
     - Object (ContentInstance)
     - (Required)
     - The model being rendered
   * - ``fieldId``
     - string
     - (Required)
     - The id of the field to render
   * - ``index``
     - string | number
     - undefined
     - If applicable, the index within the parent collections.
   * - ``component``
     - string | React.ElementType
     - "div"
     - The component to be rendered
   * - ``componentProps``
     - Object
     - undefined
     - Any props sent at the root that aren't own props are forwarded down to the rendered
       component so in most cases you needn't use ``componentProps``. There may be cases where your
       target component has a prop name that matches in name with a prop of the CrafterCMS React
       component so to avoid it swallowing the prop and not reaching your target component, you may
       send the prop(s) via ``componentProps`` instead.
   * - ``renderTarget``
     - string
     - "children"
     - The value(s) to be rendered will be passed with this prop name to the target element type
       (see ``component`` prop). By default, the value is passed as children, but if you were to
       render for example an image, you would do ``<RenderField ... component="img" renderTarget="src" />``
   * - ``render``
     - function
     - (value, fieldId) => value
     - If you need to do custom rendering logic for the value of the field being rendered, you may
       supply a ``render`` function. The function receives the field value and the ``fieldId``

.. _newIa-RenderComponents:

RenderComponents
""""""""""""""""

Use this component to render item selectors that hold components. This component renders the field
element (i.e. the item selector), the item element, and the component itself.

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Prop
     - Type
     - Default
     - Description
   * - ``*``
     -
     -
     - ``RenderComponents`` shares all the `RenderRepeat <#renderrepeat>`__ props.
   * - ``contentTypeMap``
     - Object
     - (Required)
     - A map of components indexed by CrafterCMS content type id. The content type id of the model
       passed will be used to pick from the map the component that should render said model.
   * - ``contentTypeProps``
     - Props Object
     - {}
     - Props to be passed down to the ``ContentType`` component — which renders your target component
       based on the ``contentTypeMap``. Props will be passed all the way down to the target component.
   * - ``nthContentTypeProps``
     - Record<number, object>
     - ``{}``
     - You can pass specific props to components based on their index in the collection with this prop.
   * - ``renderItem``
     - function
     - (component, index) => <ContentType ... />
     - If the default component renderer is not sufficient for your use case, you can supply a custom
       renderer which is invoked with the current component and the current index in the collection.

.. _newIa-RenderRepeat:

RenderRepeat
""""""""""""

Use this component to render repeat groups and their items. This component renders the field element
(i.e. the repeat group) and the item element. The body of each repeat group item is rendered by a function
supplied by you, which is provided with the item, the index in the collection, the computed compound
index (when applicable) and the collection itself.

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Prop
     - Type
     - Default
     - Description
   * - ``model``
     - Object (ContentInstance)
     - (Required)
     - The model being rendered
   * - ``fieldId``
     - string
     - (Required)
     - The id of the repeat group field
   * - ``index``
     - string | number
     - undefined
     - When nested inside other repeats, the index inside the parent repeat
   * - ``component``
     - React.ElementType
     - "div"
     - The React component to render the field element as
   * - ``componentProps``
     - Object
     - undefined
     - Any props sent at the root that aren't own props are forwarded down to the rendered
       component so in most cases you needn't use ``componentProps``. There may be cases where your
       target component has a prop name that matches in name with a prop of the CrafterCMS React
       component so to avoid it swallowing the prop and not reaching your target component, you may
       send the prop(s) via ``componentProps`` instead.
   * - ``itemComponent``
     - React.ElementType
     - "div"
     -
   * - ``itemProps``
     - Object
     - undefined
     -
   * - ``itemKeyGenerator``
     - function
     - (item, index) => index
     - A function that receives the item and the current index and should return the ``key``
       (React special's prop attribute) to be used on the item being rendered. By default, just the
       current index is used, so you can make the key more robust through this prop.
   * - ``renderItem``
     - function
     - (Required)
     - Should return/render the inner item (``RenderRepeat`` renders the field and item elements,
       you're responsible for rendering the fields of each item). The function receives the item,
       the compound index (nested collections), the index in the current repeat collection and the
       collection itself.

Angular, Vue and Other JS Applications
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The easiest way to integrate XB with your JS application is by putting attributes on each HTML element that
represents a model, field or item of a CrafterCMS content type and then invoking XB initializer.

.. _newIa-fetchIsAuthoring:

fetchIsAuthoring
""""""""""""""""

This function checks against the specified CrafterCMS server if it is running against an authoring server.
When running in authoring, in-context editing tools should be enabled in the application whilst in
delivery (i.e. "production"), they should not.

The function returns a promise which will resolve as true or false. This value should be fetched early
on your application bootstrap and cached for the rest of the app lifecycle. Depending on the value,
you should then carry on to initialize XB or bypass it's initialization and assume the app is running
in "production", where authoring tools are completely absent.

.. TODO Internally it uses `crafterConf < add docs on readme and link to them >`_

.. code-block:: js

      import { fetchIsAuthoring, initExperienceBuilder } from '@craftercms/experience-builder';

      // Check if we're in authoring
      fetchIsAuthoring().then((isAuthoring) => {
         // If we're in authoring, initialize XB
         if (isAuthoring) {
            initExperienceBuilder()
         }
      })

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Parameter
     - Type
     - Default
     - Description
   * - ``config``
     - Record<'baseUrl' | 'site', string>
     - undefined
     - You can supply a baseUrl and/or site to make the check. ``fetchIsAuthoring`` uses ``crafterConf``
       (from ``@craftercms/classes`` package) values when not supplied.

.. TODO
   Is addAuthoringSupport still needed? If used via npm, everything is imported from the package and,
   if imported as a script, everything is already loaded.

   addAuthoringSupport
   """""""""""""""""""

   Add authoring support will import the XB scripts on to your page.

.. _newIa-getICEAttributes:

getICEAttributes
""""""""""""""""

Use this method to get the set of attributes to place on each element that represents a CrafterCMS
model, field or item. Once you've fetched your content, you'd invoke ``getICEAttributes`` and it will
return all the necessary attributes to inform the system how to make such element editable in XB.

You should first set all the attributes on your markup and afterwards, invoke `initExperienceBuilder <#initexperiencebuilder>`_

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Parameter
     - Type
     - Default
     - Description
   * - ``config``
     - `ICEConfig <https://github.com/craftercms/studio-ui/blob/33b003c49fdde3ea00e1d95ca02d9f1e6869b301/ui/guest/src/index.tsx#L40>`_
     - (Required)
     - You must supply at a minimum the ``model`` and ``isAuthoring``. The ``fieldId`` must be
       supplied when the artifact being rendered is a field. The ``index`` must be specified when
       the artifact being rendered is inside a collection (repeat groups or item selectors).

.. _newIa-js-app-initExperienceBuilder:

initExperienceBuilder
"""""""""""""""""""""

Use this method to initialize experience builder once you have printed all the attributes (see
`getICEAttributes <#geticeattributes>`__) on your markup.

.. list-table::
   :widths: 10 10 10 70
   :header-rows: 1

   * - Parameter
     - Type
     - Default
     - Description
   * - ``props``
     - `ExperienceBuilderProps <#experiencebuilder>`_
     - (Required)
     - See `XB props <#experiencebuilder>`_.

Example Applications
~~~~~~~~~~~~~~~~~~~~

- `React Example <https://github.com/craftercms/wordify-blueprint/tree/react>`_
- `Next JS Example <https://github.com/craftercms/craftercms-example-nextjs>`_
- `Angular Example <https://github.com/craftercms/craftercms-example-angular>`_

.. TODO
   Npm
   ~~~

      yada

      UMD Bundle
      ~~~~~~~~~~

      craftercms-guest.umd.js
      craftercms-guest.no-react.umd.js

      React Native
      ~~~~~~~~~~~~

      React native...

      API
      ~~~

      Api...

      ContentType
      """""""""""

      <ContentType />

      RenderField
      """""""""""

      <RenderField />

      useICE hook
      """""""""""

      The useICE hook

      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      Other Html or JavaScript applications
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

      XB uses DOM events to power authoring. Because XB sits on top of your applications, you may need to
      make your applications aware of XB's behaviours to facilitate the authoring experience.

      END

      **Plugins**


      * The z key
      * The e & m keys
      * ICE on hints (class & event)
