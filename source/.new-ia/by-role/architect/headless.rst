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

While that may be enough for many simple use-cases, there are other more advanced considerations that CrafterCMS
supports.

--------------
Available APIs
--------------

CrafterCMS supports a number of APIs to access content for headless applications, including:

* ReST API
* GraphQL
* Custom API



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


------------------
In-Context Editing
------------------
