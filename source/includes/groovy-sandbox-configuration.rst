When a Groovy script is executed, all code is validated to prevent operations that could compromise the system.
Depending on your installation, validation may use a whitelist (allowed expressions), a blacklist (blocked expressions),
or both. If both are enabled, an expression must be allowed by the whitelist and must not match the blacklist.

When you try to execute a script that contains an expression not included in the whitelist, or an expression blocked by
the blacklist , you’ll see an error similar to the following:

.. code-block:: none
    :caption: *Error message encountered for scripts containing insecure expressions*

    UnsupportedOperationException: Insecure call to staticMethod java.lang.Runtime getRuntime ...

|

It is recommended to keep the default configuration. However, if access to one or more of the blacklisted
expressions is required, or access to one or more expressions not in the whitelist is required, it is possible to
override the blacklist and/or whitelist configuration. Configuration is global and affects all scripts on the server.

.. warning:: When you allow a script to make an insecure call you should make sure it can only be executed with known
             arguments and **never** with unverified user input.

|
