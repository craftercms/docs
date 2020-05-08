
.. note::

   **Scripts and Templates Security**


   Crafter Engine limits access to services when developing templates or scripts, and sandboxes scripts for security by default.

   Crafter Engine only allows a small list of services available to use when developing templates or scripts.
   There are some sites that may require services not included by default.

   To expose other services, follow the guide :ref:`access-to-services`

   Scripts are executed in a sandbox that has a blacklist of insecure expressions
   to prevent code that could compromise the system.
   There are some cases though where a site requires access to one or more of
   the blacklisted expressions.

   To override the default script sandbox configuration, follow the guide :ref:`script-sandbox-configuration`

