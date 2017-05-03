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


-----------
Error Pages
-----------

.. todo:: Add description on error pages setup, etc.