:is-up-to-date: True
:since-version: 4.0.1

.. index:: Upgrading CrafterCMS, Upgrading

.. _newIa-upgrading-in-context-editing-templated:

=====================================================
Upgrading Freemarker Applications' In Context Editing
=====================================================

.. Intro

CrafterCMS 3.x and below had mechanisms for "in-context editing" (ICE) which are now deprecated when
upgrading to CrafterCMS 4.x. This article contains information on how to move from the 3.x ICE system
to the 4.x Experience Builder (XB) system. If you're starting your project from scratch, please refer to the
Experience builder docs for :ref:`templated <newIa-templated-xb>` or :ref:`headless <newIa-headless-xb>`
depending on your project.

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

Most HTML tags have an :ref:`equivalent macro <newIa-xbMacros>`, but if you happen to be using a *rare*
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
``draggableComponent``) should be replaced with either :ref:`newIa-renderComponentCollection` or
:ref:`newIa-renderRepeatGroup`. In case the new macros don't quite fit your use case, first,
consider the reason why they don't and preferably update your app to work with these macros. In
case of a valid complex scenario where these macros don't fit your use case, to enable XB you need to
manually follow the necessary collection markup structure where you have an element representing the
field itself, an element for each item in the collection and in the case of components, an element
inside the item element representing the component.

Like with other fields, there shouldn't be any intermediate markup in between the field elements and
their item elements.
