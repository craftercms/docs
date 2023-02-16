:is-up-to-date: True
:since-version: 4.0.1

.. index:: Upgrading CrafterCMS, Upgrading

.. _newIa-upgrading-in-context-editing-headless:

=====================================================
Upgrading JavaScript Applications' In Context Editing
=====================================================

.. Intro

CrafterCMS 3.x and below had mechanisms for "in-context editing" (ICE) which are now deprecated when
upgrading to CrafterCMS 4.x. This article contains information on how to move from the 3.x ICE system
to the 4.x Experience Builder (XB) system. If you're starting your project from scratch, please refer to the
Experience builder docs for :ref:`<newIa-xb>`.

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
JavaScript
----------

The approach to upgrade JavaScript applications will depend on how you first integrated your app with ICE.
If you didn't have in-context editing on your app, head to :ref:`XB docs <newIa-xbJsApps>` to learn how to integrate.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Migrating From Setting Attributes Manually
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you manually set the data attributes on your elements, technically, you could replace the old attributes
with the new. However, the best approach would be to use `CrafterCMS JavaScript SDK libraries <https://www.npmjs.com/search?q=%40craftercms>`_
to integrate your application with XB. Whether you use it straight from npm or download a build, is
up to you, but using these will facilitate integrating with XB and avoid mistakes.

The old in-context editing relied on a set of attributes which differ from :ref:`the new XB attributes <newIa-xbAttributes>`.
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
Once you install or download the package, from its `index`, you should use :ref:`newIa-getICEAttributes` which will
create and return an object with all the necessary attributes and values for you to simply apply the
attributes to your elements in whatever way suits your app. If you're using React, you should use the
:ref:`React-specific bindings <newIa-xb-react-bindings>` that the package offers.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Migrating From ``@craftercms/ice``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``@craftercms/ice`` package is superseded by `@craftercms/experience-builder <https://www.npmjs.com/package/@craftercms/experience-builder>`_.
You should replace the usage of the old package with the new.

- The new package also exports function :ref:`newIa-getICEAttributes` to get the attributes you must set
  onto your elements. Their arguments are fairly similar but not identical so be sure to update the
  arguments too.

- If you were using ``repaintPencils``, you can safely remove it. No replacement is required.

- The use of ``getDropZoneAttributes`` is also replaced with getICEAttributes, no special function is
  needed with the new function. All fields would use getICEAttributes.

- The ``reportNavigation`` method is `replaced` by :ref:`initExperienceBuilder <newIa-js-app-initExperienceBuilder>`.
  If you are using report navigation, there's a good chance you should initialize XB manually; for that purpose,
  you should add ``initializeInContextEditing=false`` to your ``crafter.body_bottom`` invocation (i.e.
  ``<@crafter.body_bottom initializeInContextEditing=false />``). Once you've done that, you're responsible
  for initializing XB programmatically on your own using ``initExperienceBuilder``. You should invoke,
  ``initExperienceBuilder`` after each new page is rendered and you want to tell Studio it is now viewing
  a different page. Before initializing a new view, once the navigation has occurred you should invoke
  the unmount function that's returned by ``initExperienceBuilder`` (e.g. ``initExperienceBuilder({ ... }).unmount()``).

- The new package also exports ``fetchIsAuthoring`` and ``addAuthoringSupport`` and the methods on both packages are equivalent.
