:is-up-to-date: False

=========
Templated
=========

While CrafterCMS is an API-first CMS, it has first-class support for templated (page-based) sites. CrafterCMS embeds
FreeMarker to provide a high-performance, clean, flexible, and tolerant of syntax variance, templating engine
to render HTML directly from CrafterCMS.

CrafterCMS allows developers to model the content as general reusable items, and fold those into pages. Pages aggregate
content from components as needed and are associated with a FreeMarker template that can render the final page.
The choice of HTML tools and frameworks doesn't matter to CrafterCMS. Developers can use whatever front-end technology
they want. For development React, Vue, Angular, Flutter or similar SPA, please see [HEADLESS]. .. todo add link

The use of templated sites as opposed to Headless sites doesn't detract from CrafterCMS' full support of building
custom APIs. CrafterCMS allows developers to quickly drop a Groovy file that becomes a server-side API
and/or REST endpoint. The project being developed can then invoke this API call from FreeMarker or as a REST API call.

Given the freedom available to developers in creating their HTML, CSS, and JS from scratch, concerns like Responsive
Design are a non-issue for CrafterCMS. Whatever developers can build in HTML CrafterCMS can happily render, and can
augment with in-context and in-place editing for content authors.

Features like workflow, review and approval processes, staging and final go-live are of course all built-in.

Finally, given that CrafterCMS is Git-based, full DevContentOps support is native and fully supports templated sites.

.. todo: link DevContentOps

--------------
Available APIs
--------------

CrafterCMS supports a number of APIs to access content for templated projects, including:

* FreeMarker API
* Groovy API
* Search API
* Custom API

.. todo: link the above

-----------
Inheritance
-----------

Having content authors enter the same meta-data/content for every content item where it doesn't change is both
laborious and wasteful. It's best for common meta-data for a section or the whole application to be entered once
and inherited by all child items. This is content inheritance, and the implementation in CrafterCMS is very
powerful supporting many inheritance mechanisms. More on this

.. todo add a link to the content inheritance article

--------
Security
--------

Securing content access and providing role-based access to different content items or hierarchies is critical to any
enterprise-grade content-rich application. It's critical that the security be implemented at the content API-level.
CrafterCMS provides enterprise-grade authentication and authorization mechanics to help achieve this.

Authentication
==============

CrafterCMS support authentication integration with:

* SAML2 providers
* LDAP, AD, ADFS
* Headers-based providers (most SSO vendors)
* OAuth 2.0 (coming soon)

.. todo add links

Authorization
=============

CrafterCMS provides role-based access to all content items, per item or per section/hierarchy/URL-space. This is across
all APIs, and it includes search.

------------------
In-Context Editing
------------------

CrafterCMS provides an SDK that lets developers focused on a headless use-case add the tools content authors expect,
like visual in-context and in-place editing of Web content regardless of the development platform and tools.

.. todo add a link to the SDK and ICE