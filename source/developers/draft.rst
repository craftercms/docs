Crafter 4 Docs
==============

Table of contents
-----------------

Developers
~~~~~~~~~~

-  Plugins
-  The z key
-  The e & m keys
-  ICE on hints (class & event)
-  Experience Builder
-  Creating Experience Builder enabled sites
-  Freemarker
-  React
-  Other frameworks
-  Enabling Experience Builder on an existing site
-  Freemarker
-  React
-  Other frameworks

Authors
~~~~~~~

-  Experience Builder
-  Editing text
-  Editing Images
-  Editing …

Experience Builder
------------------

Crafter CMS’ Experience Builder (XB) provides an UI layer on top of your
applications that enables authors with in-context editing (ICE) for all
the model fields defined in the content types of pages and components.
Crafter CMS developers must integrate their applications with XB,
essentially telling XB what field of the model each element on the view
represents.

Creating Experience Builder (XB) enabled sites
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The concrete integration strategy with XB depends on what kind of
application you are developing. Crafter CMS provides native XB
integration for Freemarker and React applications. Other types of
applications (e.g. Angular, Vue, etc.) can still be integrated with XB
through the underlying libraries that power the Freemarker and React
applications. For reference on how to integrate, please see the sections
below for your specific kind of application.

Overall, XB’s ICE engine works with a sort of coordinate system that you
— the developer — use to tell the CMS which field of the content type
each element/component on your page/app maps to.

The coordinate system is comprised of the following pieces of data:

-  Path: the path in the file system relative to the site repository
   sandbox (e.g. ``/site/components/features/main_feature.xml``).
-  Model id (a.ka. object id, local id): the internal GUID that every
   content object in Crafter CMS has (e.g.
   ``5a06e244-64f4-4380-8619-1c726fe38e92``)
-  Field id: the id of the field in the content type (e.g.
   ``heroTitleText_t``)
-  Field ids may be compound, comprised of the full path to that field
   when such field is nested within repeat groups (e.g.
   ``carouselSlides_o.slideTitle_t``).
-  Index: When working with collections (e.g. component selectors or
   repeat groups), the index of the item within it’s container
   collection (e.g. ``0``)
-  Indexes can be compound, comprised of the full path of indexes to
   that item in the collection (e.g. ``0.1``).

XB’s ICE engine requires — at times — what might be considered slightly
more verbose markup structure than if one wouldn't’t be concerned with
integrating with XB. In order for the system to be able to direct
authors to every piece of the model as well as allowing them to edit in
line, you need to register each piece of the model as an element on your
app/page.

For example, consider a carousel, where the carousel is modelled as a
Crafter CMS component that has a repeat group field called ``slides_o``
which has two inner fields called ``caption_s`` and ``image_s``\ …

Disregarding specific demands of any given carousel/slider library, the
markup for a carousel may look like this:

.. code:: html

      <div class=“carousel”>
        <div class="slide">
          <img src="slide1.png" alt="">
          <h2>Slide One</h2>
        </div>
        <div class="slide">
          <img src="slide2.png" alt="">
          <h2>Slide Two</h2>
        </div>
      </div>

In order to register each piece of the model, we would need to introduce
a new element.

.. code:: html

    <div class=“carousel”><!-- Component (Carousel) -->
      <div><!-- Repeating group (slides_o) — Additional element introduced -->
        <div class="slide"><!-- Repeat group item (slides_o[0]) -->
          <img src="slide1.png" alt=""><!-- Repeat group item field (slides_o[0].images_s) -->
          <h2>Slide One</h2><!-- Repeat group item field (slides_o[0].caption_s) -->
        </div>
        <div class="slide"><!-- Repeat group item (slides_o[1]) -->
          <img src="slide2.png" alt=""><!-- Repeat group item field (slides_o[1].images_s) -->
          <h2>Slide Two</h2><!-- Repeat group item field (slides_o[1].caption_s) -->
        </div>
      </div>
    </div>

You can vary exactly where to add this additional element exactly to
suit your needs — or those of the libraries and frameworks that you use
to develop your application. The important aspects are that each field
is represented by an element on the page/app and that the hierarchy of
the fields is followed by the hierarchy of your markup (i.e. the
component element is the parent of the repeat group element which is a
parent of the repeat group items which are parents of the repeat group
item fields). For example, you could move the additional div to be the
top wrapper — and hence represent the component instead of the repeat
group. Naturally, then the repeat group would be represented by the div
with the carousel class.

.. code:: html

    <div><!-- Component (Carousel) -->
      <div class=“carousel”><!-- Repeating group (slides_o) -->
        ...
      </div>
    </div>

Freemarker
^^^^^^^^^^

In Freemarker applications, in order to integrate with XB, you use the
macros included in the system which in turn will set all the right hints
(i.e. html attributes) on the markup for the ICE engine to make things
editable to authors.

As mentioned earlier, you need to give XB's ICE engine the *coordinates*
to identify each model/field, so — in addition to their other arguments
— each macro receives the following base parameters:

-  Model (``$model``)
-  By providing the model, internally we extract the path and model id
   (a.k.a object id).
-  Model is optional since by default it uses the ``contentModel``
   freemarker context variable for the current template

   -  If you need to use a different model, please specify the
      ``$model`` argument of the macros.

-  Field id (``$field``)
-  Index (``$index``)

For example, the following ``div`` element macro...

.. code:: html

    <@crafter.div $field="columns_o.items_o" $index="0.1">
      ...
    </@crafter.div>

The above will print out to the html a div with all the relevant hints
for the ICE engine to pick up this element as an editable zone. Such div
would look as shown below:

.. code:: html

    <div
      data-craftercms-model-path="/site/website/index.xml"
      data-craftercms-model-id="f830b94f-a6e9-09eb-9978-daafbfdf63ef"
      data-craftercms-field-id="columns_o.items_o"
      data-craftercms-index="0.1"
    >...</div>

Start by importing the crafter freemarker library on to your freemarker
template.

.. code:: ftl

    <#import "/templates/system/common/crafter.ftl" as crafter />

Once you’ve imported ``crafter.ftl``, you can start converting tags to
editable elements by switching each of the tags that represent Crafter
CMS content model fields, from plain html tags to a macro tag. Will use
the previous carousel example to illustrate.

As seen on the previous section, we introduced an additional element to
represent the repeat group and we ended up with the following markup.

.. code:: html

    <div class=“carousel”><!-- Component (Carousel) -->
      <div><!-- Repeating group (slides_o) — Additional element introduced -->
        <div class="slide"><!-- Repeat group item (slides_o[0]) -->
          <img src="slide1.png" alt=""><!-- Repeat group item field (slides_o[0].images_s) -->
          <h2>Slide One</h2><!-- Repeat group item field (slides_o[0].caption_s) -->
        </div>
        <div class="slide"><!-- Repeat group item (slides_o[1]) -->
          <img src="slide2.png" alt=""><!-- Repeat group item field (slides_o[1].images_s) -->
          <h2>Slide Two</h2><!-- Repeat group item field (slides_o[1].caption_s) -->
        </div>
      </div>
    </div>

Assume you’re using a particular *CarouselJS* library that requires the
``div.carousel`` element to be the direct parent of the ``div.slide``
elements; as mentioned earlier, we can flip around the elements for the
component and the repeat group.

.. code:: html

    <div><!-- Component (Carousel) -->
      <div class=“carousel”><!-- Repeating group (slides_o) -->
        ...
      </div>
    </div>

Now, to start converting to editable zones, replace each tag, with the
appropriate Crafter macro. For the most part, with some exceptions (read
on), you just need to append ``@crafter.`` to every tag so that
``<div>…</div>`` ends up being ``<@crafter.div>...</@crafter.div>``.

Exceptions to simply appending ``@crafter.`` to the relevant tags are:

-  Page/Component root tags (Use ``@crafter.componentRootTag``)
-  Repeat group field elements and their children (Use
   ``@crafter.renderRepeatGroup``)
-  Item selector controls that hold components to be rendered (Use
   ``@crafter.renderComponentCollection``)

| Following the conversion of the carousel example, first, mark the
component root by using ``@crafter.componentRootTag``.
| See `macro docs <>`__ for all the available customizations and
configuration.

.. code:: html

    <#import "/templates/system/common/crafter.ftl" as crafter />
    <@crafter.componentRootTag>
      ...
    </@crafter.componentRootTag>

Next, let's do the repeat group, and it's items. We use
``@crafter.renderRepeatGroup`` to render repeat groups. See `macro
docs <>`__ for all the available customizations and configuration.

.. code:: html

    <@crafter.renderRepeatGroup
      $field="slides_o"
      $containerAttributes={ "class": "carousel" }
      $itemAttributes={ "class": "slide" };
      item, index
    >
      <@crafter.img
        $field="slides_o.image_s"
        $index="${index}"
        src="${item.image_s}"
        alt=""
      />
      <@crafter.h2 $field="slides_o.caption_s" $index="${index}">
        ${item.caption_html!''}
      </@crafter.h2>
    </@crafter.renderRepeatGroup>

The ``renderRepeatGroup`` macro does several things for us:

-  Prints the repeat group *container element*.
-  Prints the repeat group *item elements*.
-  Per-item, prints out what you pass down as the body (i.e.
   ``<#nested />``) to the macro.
-  It provides you with the ``item`` and ``index`` for each item, so you
   can use them appropriately as if you were iterating manually.

The complete Freemarker template for the carousel component now looks
like below.

.. code:: html

    <#import "/templates/system/common/crafter.ftl" as crafter />
    <@crafter.componentRootTag>
      <@crafter.renderRepeatGroup
        $field="slides_o"
        $containerAttributes={ "class": "carousel" }
        $itemAttributes={ "class": "slide" };
        item, index
      >
        <@crafter.img
          $field="slides_o.image_s"
          $index="${index}"
          src="${item.image_s!''}"
          alt=""
        />
        <@crafter.h2 $field="slides_o.caption_s" $index="${index}">
          ${item.caption_html!''}
        </@crafter.h2>
      </@crafter.renderRepeatGroup>
    </@crafter.componentRootTag>

Freemarker Macros & Utilities
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

initInContextEditing
''''''''''''''''''''

Html elements tag macros
''''''''''''''''''''''''

Crafter provides a comprehensive list of macros for the most common html
elements that are used to develop content-managed websites/webapps. All
these tags provided are essentially an alias to the underlying
``@crafter.tag`` macro, which you can use when you wish to use an
element that isn't provided in the out-of-the-box macros (e.g. if you're
using custom html elements).

The following tags are available:

| ``article``, ``a``, ``img``, ``header``, ``footer``, ``div``,
``section``, ``span``, ``h1``, ``h2``, ``h3``, ``h4``, ``h5``,
| ``h6``, ``ul``, ``p``, ``ul``, ``li``, ``ol``, ``iframe``, ``em``,
``strong``, ``b``, ``i``, ``small``, ``th``, ``caption``, ``tr``,
| ``td``, ``table``, ``abbr``, ``address``, ``aside``, ``audio``,
``video``, ``blockquote``, ``cite``, ``em``, ``code``, ``nav``,
| ``figure``, ``figcaption``, ``pre``, ``time``, ``map``, ``picture``,
``source``, ``meta``, ``title``

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameters        |                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
+===================+=============================================================================================================================================================================================================================================================================================================================================================================================================================================================+
| $model            | The content model for which this element belongs to. ``$model`` is defaulted to the ``contentModel`` freemarker template context variable, so in most cases it is not necessary to specify it. Only required it when you want to use a different model.                                                                                                                                                                                                     |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| $field            | The field id on the content type definition of the present model. When inside repeat groups, a dot-separated-string of the full field *path* to the present field (e.g. ``slides_o.image_s``).                                                                                                                                                                                                                                                              |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| $index            | When inside a collection (i.e. repeat group or component collection), the index of the present item. When nested inside repeat groups, the full index *path* to this item (e.g. ``0.1``).                                                                                                                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Html attributes   | For convenience, macro tags will print out to the html all the attributes you pass to them that aren't one of the Crafter custom arguments (i.e. $model, $field, etc). For example, if you have ``<div class="carousel">``, you can convert to a Crafter tag like ``<@crafter.div class="carousel" ...>``. If you use attributes that go against freemarker syntax (e.g. ``data-my-attribute="foo"``), use the ``$attrs`` argument of the macros instead.   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| $attrs            | Html attributes to print on to the element. Particularly useful for attributes that you can't supply to the macro as a direct argument due to freemarker syntax restrictions. For example, ``<div data-foo="bar">``, transforming it as ``<@crafter.div data-foo="bar" ...>`` would produce a freemarker exception; use ``<@crafter.div $attrs={ "data-foo": "bar" } ...>`` instead.                                                                        |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| $tag              | Specify which tag to use. For example ``<@crafter.tag $tag="article"... />`` will print out an ``<article>`` tag. Use only if you're using ``@crafter.tag``, which in most cases you don't need to as you can use the tag alias (e.g. ``<@crafter.article ... />``).                                                                                                                                                                                        |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Examples
        

.. code:: html

    <@crafter.section>
      <@crafter.h1 $field="heading_t">${contentModel.heading_t}</@crafter.h1>
    </@crafter.section>

componentRootTag
''''''''''''''''

renderComponentCollection
'''''''''''''''''''''''''

renderRepeatGroup
'''''''''''''''''

mergeAttributes
'''''''''''''''

forEach
'''''''

cleanDotNotationString
''''''''''''''''''''''

isEmptyCollection
'''''''''''''''''

shouldAddEmptyStyles
''''''''''''''''''''

printIfIsEmptyCollection
''''''''''''''''''''''''

printIfPreview
''''''''''''''

React
^^^^^

Npm
'''

React Native
''''''''''''

Other frameworks
^^^^^^^^^^^^^^^^

