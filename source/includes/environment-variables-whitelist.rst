CrafterCMS supports a whitelisted list of variable names or patterns for a secure environment variables access.
By default, custom environment variables prefixed by ``crafter_`` are accessible using ``System.getenv()``.  If you wish
to use a different prefix, or add other variable names to the whitelist, this may be configured in Studio, Engine and
Deployer as shown below:

.. code-block:: properties
    :caption: *Studio configuration for environment variables whitelist - studio-config.yaml*

    # List of patterns for that is allowed to call as `staticMethod java.lang.System getenv java.lang.String` parameter (regexes separated by commas)
    studio.scripting.sandbox.whitelist.getenvRegex: crafter_.*


.. code-block:: properties
    :caption: *Engine configuration for environment variables whitelist - server-config.properties*

    # List of patterns for that is allowed to call as `staticMethod java.lang.System getenv java.lang.String` parameter (regexes separated by commas)
    crafter.engine.groovy.sandbox.whitelist.getenvRegex=crafter_.*

.. code-block:: properties
    :caption: *Deployer configuration for environment variables whitelist - application.yaml*

     whitelist:
          # List of patterns for that is allowed to call as `staticMethod java.lang.System getenv java.lang.String` parameter (regexes separated by commas)
          getenvRegex: crafter_.*
