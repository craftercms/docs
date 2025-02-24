:is-up-to-date: True
:last-updated: 4.1.1

.. index:: JavaScript SDK

.. _javascript-sdk:

==============
JavaScript SDK
==============

CrafterCMS has a JavaScript SDK that enable easy interaction with several
CrafterCMS modules/utilities for creating websites and applications.

The JavaScript SDK has the following packages published on `NPM <https://www.npmjs.com/org/craftercms>`__:

**Delivery**

* `@craftercms/content <https://www.npmjs.com/package/@craftercms/content>`__ - Contains services for retrieving content and navigation using APIs offered by CrafterCMS.
* `@craftercms/classes <https://www.npmjs.com/package/@craftercms/classes>`__ - Contains useful classes for developing CrafterCMS websites & applications.
* `@craftercms/models <https://www.npmjs.com/package/@craftercms/models>`__ - Contains data model definitions of different structures of CrafterCMS. This interfaces are useful when developing in TypeScript.
* `@craftercms/redux <https://www.npmjs.com/package/@craftercms/redux>`__ - Contains tools for integrating your application with Crafter Engine and Crafter Search using Redux as the state container.
* `@craftercms/search <https://www.npmjs.com/package/@craftercms/search>`__ - Contains tools for integrating your application with Crafter Search.
* `@craftercms/utils <https://www.npmjs.com/package/@craftercms/utils>`__ - Contains various utilities useful when developing with CrafterCMS
* `@craftercms/ice <https://www.npmjs.com/package/@craftercms/ice>`__ - Contains JavaScript utilities to use CrafterCMS In Context Editing in your Apps and Sites

The `Video Center Blueprint <https://craftercms.com/marketplace/video-center-blueprint>`__ in the *Public Marketplace* is an example of using the above JavaScript SDK NPM packages.

**Authoring**

* `@craftercms/experience-builder <https://www.npmjs.com/package/@craftercms/experience-builder>`__ - Contains JavaScript utilities to integrate Experience Builder in your Apps and Sites
* `@craftercms/studio-ui <https://www.npmjs.com/package/@craftercms/studio-ui>`__ - Contains tools to enable building CrafterCMS extensions using all of its native UI components, utils and APIs

The `Authoring Plugin Examples <https://github.com/craftercms/authoring-ui-plugin-examples>`__ repo showcases how to use the above JavaScript SDK packages to build Authoring Plugins.

Compatibility with CrafterCMS Version
=========================================

As of version 4.0.3, CrafterCMS NPM libraries adhere to a product versioning scheme aligned with the platform version.
Users should utilize the library version that corresponds to their current platform version.

Beginning with versions released after 4.3.0, CrafterCMS NPM libraries will adopt Semantic Versioning.
Refer to this document for detailed compatibility information between your CrafterCMS installation and the corresponding SDK versions.
