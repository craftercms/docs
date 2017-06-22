.. _errors:

======
Errors
======

-----------
Error Codes
-----------

When things go wrong with an API request, an error message is generated.  These error messages contain an error code and a short description of what went wrong with the request.  Below is a list of error codes you might encounter when using Crafter CMS and example responses for the corresponding error code:

========== ===================== ============================================
Error Code Description           Response Body Example
========== ===================== ============================================
400        Bad Request           ``{ "message" : "Invalid parameter(s)" }``
401        Unauthorized          ``{ "message" : "Unauthorized" }``
403        Forbidden             ``{ "message" : "Externally managed user" }``
404        Not Found             ``{ "message" : "User not found" }``
409        Conflict              ``{ "message" : "Site already exists" }``
500        Internal Server Error ``{ "message" : "Internal server error" }``
========== ===================== ============================================

For more details on error codes for specific APIs, please see the ReST API section in the following project specific documentation:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   projects/studio/api/index
   projects/search/api/index
   projects/deployer/api/index
   projects/engine/api/index
   projects/core/api/index
   projects/profile/api/index
   projects/social/api/index

-----------
Error Pages
-----------

When Crafter Engine detectes an error trying to fulfill a request it will also look for a custom
error page to display in the browser, the process to add custom error pages is the following:

1. Create a new folder under ``/templates/web/errors``
2. Create a Freemarker template using as name the error code for which the page will be displayed, e.g., ``404.ftl``

In the custom error templates developers are free to include any HTML/CSS/JS to make sure that the page matches
the rest of the site.

.. note::
  Custom Error pages are standalone templates, they are not associated with any site item and will not have
  the ``model`` object available.

Once the file is saved it will be used automatically in preview, for a delivery node you need to publish
the new file so that it takes effect in the live site.

Example
^^^^^^^

Adding a Custom Error Page for the ``404 Not Found`` code:

.. figure:: /_static/images/error-page-default.png
        :alt: Default Error Page
        :align: center
        
        Before adding a custom error page.

.. figure:: /_static/images/error-page-custom.png
        :alt: Custom Error Page
        :align: center
        
        After adding a custom error page.
