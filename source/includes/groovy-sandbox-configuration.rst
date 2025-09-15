When a Groovy script is executed all code is validated against either a whitelist of allowed expressions and/or a blacklist
of insecure expressions, depending on what is used by your installation, to prevent code that could compromise the system.

When you try to execute a script that contains insecure expressions from the blacklist, or contains an expression not in
the whitelist depending on your configuration, you will see an error similar to this:

.. code-block:: none
    :caption: *Error message encountered for scripts containing insecure expressions*

    UnsupportedOperationException: Insecure call to staticMethod java.lang.Runtime getRuntime ...

|

It is recommended to keep the default configuration if possible. However, if access to one or more of the blacklisted
expressions is required, or access to one or more expressions not in the whitelist is required, it is possible to
override the blacklist and/or whitelist configuration. Configuration is global and affects all scripts on the server.

.. warning:: When you allow a script to make an insecure call you should make sure it can only be executed with known
             arguments and **never** with unverified user input.

|
