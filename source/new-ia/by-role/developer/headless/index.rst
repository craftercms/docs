:is-up-to-date: False
:last-updated: 4.0.0
:nosearch:

.. _newIa-developer-headless:

========
Headless
========

CrafterCMS is natively headless.  CrafterCMS simply retrieves content that the developer models in the
modeling tool, applies actions/rules like inheritance, security, versioning, etc. and returns the
transformed content to the caller as JSON.

This section details how you can model any type of content, provide your content authors the ability to visually
author content items and then retrieve that content for your SPA, iOS, Android or other applications.

This section details building headless projects, its purpose and examples.

.. toctree::
    :maxdepth: 1
    :titlesonly:

    content-modeling
    content-access
    ../common/adding-experience-builder
    security
    ../common/redirects
    examples/index