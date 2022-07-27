:is-up-to-date: True
:since-version: 4.0.1

.. index:: Upgrading CrafterCMS, Upgrading

.. _upgrading-in-context-editing:

============================
Upgrading In Context Editing
============================

.. Intro

CrafterCMS 3.x and below had mechanisms for "in-context editing" (ICE) which are now deprecated when
upgrading to CrafterCMS 4.x. This article contains information on how to move from the 3.x ICE system
to the 4.x Experience Builder (XB) system. If you're starting your project from scratch, please refer to the
:ref:`Experience builder docs <experience-builder>`.

.. Motivation

CrafterCMS 4 has new mechanisms that enable authors to edit the content directly in its preview, short-cut
menus to open specific pieces of the content form, better and more reliable drag and drop of components and
assets from desktop or from the new Assets Panel.

With the old system, you were able to declare zones that would later on show a pencil to open the
content form of the model. With the new system, you can declare each field of the model allowing authors
direct manipulation of each field, whilst still being able to invoke the content form on demand, either
for the entire model or a single field, all without needing to declare "ice groups" on the content type
editor like before.

.. How to...

----------
FreeMarker
----------

Prior to version 4, ICE relied on the use of FreeMarker macros invoked in between your regular HTML
tags.

For example:

.. code-block:: html
    :force:

    <!-- Declare an element which should show a pencil that opens
    <section id="banner" <@studio.iceAttr iceGroup="hero"/>>...</section>

    <!-- Declares a component drop target called `features_o` -->
    <div class="features" <@studio.componentContainerAttr target="features_o" component=contentModel/>>...</div>

In XB, ICE groups are now deprecated as authors now have more granular access to fields,
being able to open the content for a single field or more direct manipulation in a WYSIWYG-style depending
on the field type. Developers no longer need to declare "ice groups" on the content model.

^^^^^^^^^^^^^^^^^^^
Beginning Migration
^^^^^^^^^^^^^^^^^^^

To begin migration, start by locating all the old ``cstudio-support.ftl`` import on your FreeMarker templates.

.. code-block:: html
    :force:

    <#import "/templates/system/common/cstudio-support.ftl" as studio />

Replace the ``cstudio-support.ftl`` import with the new ``crafter.ftl``,

.. code-block:: html
    :force:

    <#import "/templates/system/common/crafter.ftl" as crafter />

Remove the ``@studio.toolSupport`` macro call and add ``<@crafter.head/>`` to your ``head`` tag,
``<@crafter.body_top/>`` to the top of your ``body`` tag and ``<@crafter.body_bottom/>`` to the
bottom of your body tag.

.. code-block:: html
    :force:

    <html>
    <head>
      <meta charset="utf-8">
      <title>${model.title_t}</title>
      <@crafter.head />
    </head>
    <body>
      <@crafter.body_top/>
      <main>
        ...
      </main>
      <@crafter.body_bottom/>
    </body>
    </html>

All of the invocations of the macros in ``cstudio-support.ftl`` need to be replaced. Examples of these are
``@studio.iceAttr``, ``@studio.componentAttr``, ``@studio.componentContainerAttr``, etc. All of these need
to be removed and replaced with the new system.

The new system relies on you specifying each field of the model that's on the page on a per-element basis. Each
tag in the page that prints out something from the CrafterCMS content type model should have its own element
and that element needs to be marked with the relevant attributes which the new out of the box macros do for you.

^^^^^^^^^^^^^
Simple Values
^^^^^^^^^^^^^

Starting with simple values (e.g. strings printed on tags), locate each of the FreeMarker interpolation expressions
(i.e. ``${contentModel.someFieldId}``). Make sure that the interpolation expression is by itself on a HTML tag.

For example, ``By <span>${contentModel.authorName_s}</span>`` is correct since the interpolated value
is alone in its container tag, as opposed to ``<span>By ${contentModel.authorName_s}</span>``, where
there's a piece of text inside the same element as the interpolation.

Once you've located the interpolations and made sure each expression is alone in its element, replace
the plain-HTML tag with a CrafterCMS macro.

For example ``<span>${contentModel.authorName_s}</span>`` would become ``<@crafter.span>${contentModel.authorName_s}</@crafter.span>``.
In addition to converting the plain tag to a macro, you must specify some additional metadata depending
on the portion of the model that you're working with. Typically, interpolations refer to a field of
the model, which is the missing piece of metadata on the latter example. Add the ``$field`` attribute
to your model with the value being the field id of what you're printing.

.. code-block:: html
    :force:

    <@crafter.span $field="authorName_s">${contentModel.authorName_s}</@crafter.span>

Most HTML tags have an :ref:`equivalent macro <xbMacros>`, but if you happen to be using a *rare*
or custom tag that doesn't have a macro, you can use the ``@crafter.tag`` macro, which will print
any tag you specify in it's ``$tag`` argument.

.. code-block:: html
    :force:

    <@crafter.tag $tag="author-name" $field="authorName_s">${contentModel.authorName_s}</@crafter.tag>

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Collections (components and repeat groups)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Moving on to collections, there are new powerful macros that cover the most typical cases and usages
of component collections or repeat groups.

Previous macros you're using to render a collection (e.g. ``componentContainerAttr``, ``componentContainerAttr``,
``draggableComponent``) should be replaced with either :ref:`renderComponentCollection` or
:ref:`renderRepeatGroup`. In case the new macros don't quite fit your use case, first,
consider the reason why they don't and preferably update your app to work with these macros. In
case of a valid complex scenario where these macros don't fit your use case, to enable XB you need to
manually follow the necessary collection markup structure where you have an element representing the
field itself, an element for each item in the collection and in the case of components, an element
inside the item element representing the component.

Like with other fields, there shouldn't be any intermediate markup in between the field elements and
their item elements.

----------
JavaScript
----------

The approach to upgrade JavaScript applications will depend on how you first integrated your app with ICE.
If you didn't have in-context editing on your app, head to :ref:`XB docs <xbJsApps>` to learn how to integrate.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Migrating From Setting Attributes Manually
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you manually set the data attributes on your elements, technically, you could replace the old attributes
with the new. However, the best approach would be to use `CrafterCMS JavaScript SDK libraries <https://www.npmjs.com/search?q=%40craftercms>`_
to integrate your application with XB. Whether you use it straight from npm or download a build, is
up to you, but using these will facilitate integrating with XB and avoid mistakes.

The old in-context editing relied on a set of attributes which differ from :ref:`the new XB attributes <xbAttributes>`.
You should remove any of the old attributes listed below:

- ``data-studio-ice``
- ``data-studio-ice-path``
- ``data-studio-ice-label``
- ``data-studio-component``
- ``data-studio-component-path``
- ``data-studio-embedded-item-id``

The new attributes you would be setting are

- ``data-craftercms-model-id``: the UUID of the model you're rendering (i.e. the value of the ``objectId`` tag on the xml)
- ``data-craftercms-model-path``: path to the model you're rendering
- ``data-craftercms-field-id``: the id of the field within the content model (only applicable for fields, not for models)
- ``data-craftercms-index``: the index within the collection (only applicable for collection items, or fields nested inside the repeat group)

As mentioned before, the recommended approach is to use the JavaScript SDK, specifically the
`@craftercms/experience-builder <https://www.npmjs.com/package/@craftercms/experience-builder>`_ package.
Once you install or download the package, from its `index`, you should use :ref:`getICEAttributes` which will
create and return an object with all the necessary attributes and values for you to simply apply the
attributes to your elements in whatever way suits your app. If you're using React, you should use the
:ref:`React-specific bindings <xb-react-bindings>` that the package offers.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Migrating From ``@craftercms/ice``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``@craftercms/ice`` package is superseded by `@craftercms/experience-builder <https://www.npmjs.com/package/@craftercms/experience-builder>`_.
You should replace the usage of the old package with the new.

- The new package also exports function :ref:`getICEAttributes` to get the attributes you must set
  onto your elements. Their arguments are fairly similar but not identical so be sure to update the
  arguments too.

- If you were using ``repaintPencils``, you can safely remove it. No replacement is required.

- The use of ``getDropZoneAttributes`` is also replaced with getICEAttributes, no special function is
  needed with the new function. All fields would use getICEAttributes.

- The ``reportNavigation`` method is `replaced` by :ref:`initExperienceBuilder <js-app-initExperienceBuilder>`.
  If you are using report navigation, there's a good chance you should initialize XB manually; for that purpose,
  you should add ``initializeInContextEditing=false`` to your ``crafter.body_bottom`` invocation (i.e.
  ``<@crafter.body_bottom initializeInContextEditing=false />``). Once you've done that, you're responsible
  for initializing XB programmatically on your own using ``initExperienceBuilder``. You should invoke,
  ``initExperienceBuilder`` after each new page is rendered and you want to tell Studio it is now viewing
  a different page. Before initializing a new view, once the navigation has occurred you should invoke
  the unmount function that's returned by ``initExperienceBuilder`` (e.g. ``initExperienceBuilder({ ... }).unmount()``).

- The new package also exports ``fetchIsAuthoring`` and ``addAuthoringSupport`` and the methods on both packages are equivalent.
