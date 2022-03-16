:is-up-to-date: False

========
Headless
========

CrafterCMS is an API-first CMS, and therefore it's natively headless. This is in stark contrast to traditional CMSs
that became headless with the addition of an API that tries to translate page-oriented data-structures into something
more general.

Fundamentally, CrafterCMS simply retrieves content that the developer models in the modeling tool, applies actions/rules
like inheritance, security, versioning, etc. and returns the transformed content to the caller as JSON.

This means you can model any type of content, provide your content authors the ability to visually author content items
and then retrieve that content for your SPA, iOS, Android or other applications.

Modeling, managing, and retrieving content may be enough for many simple use-cases, there are other more advanced
considerations that CrafterCMS supports. Considerations include:

* In-context and in-place editing of headless content (Headless+)
* Workflow of authored content from the first edit, through staging, and finally to a live state
* DevContentOps and the flow of code, content, and team cadence

--------------
Available APIs
--------------

CrafterCMS supports a number of APIs to access content for headless applications, including:

* ReST API
* GraphQL
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