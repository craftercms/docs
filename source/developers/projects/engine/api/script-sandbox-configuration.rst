:is-up-to-date: True

:orphan:

.. _script-sandbox-configuration:

============================
Script Sandbox Configuration
============================

When a script is executed all code is validated against a blacklist of insecure expressions to prevent code that could
compromise the system. When you try to execute a script that contains insecure expressions you will see an error
similar to this:

.. code-block:: none

  UnsupportedOperationException: Insecure call staticMethod java.lang.Runtime getRuntime ...

|

It is recommended to keep the default configuration if possible. However, if a site requires access to one or more of
the blacklisted expressions it is possible to override the configuration:

.. warning:: When you allow a script to make an insecure call you should make sure it can only be executed with known
             arguments and **never** with unverified user input.

|

------------------------
Using a custom blacklist
------------------------

Crafter Engine includes a default blacklist that you can find 
`here <https://github.com/craftercms/engine/blob/develop/src/main/resources/crafter/engine/groovy/blacklist>`_. Make sure you review the branch/tag you're using.

To use a custom blacklist follow these steps:

#.  Copy the default blacklist file to your classpath, for example:
    
    ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/groovy/blacklist``
    
#.  Remove or comment (adding a ``#`` at the beginning of the line) the expressions that your scripts require
#.  Update the configuration to load the custom blacklist:
    
    .. code-block:: none
      :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``
    
      # Use a custom blacklist for the sandbox
      crafter.engine.groovy.sandbox.blacklist=classpath:crafter/engine/extension/groovy/blacklist
    
#.  Restart Crafter CMS

Now you can execute the same script without any issues.

---------------------
Disabling the sandbox
---------------------

It is possible to completely disable the sandbox for all scripts, this should be used as the last option and is provided
only for backward compatibility with sites that heavily rely on insecure code.

To disable the sandbox for all sites update the server configuration file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Disable the script sandbox for all sites
  crafter.engine.groovy.sandbox.enable=false
