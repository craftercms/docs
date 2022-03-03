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

It is recommended to keep the default configuration if possible. However, if access to one or more of the blacklisted expressions
is required, it is possible to override the blacklist configuration. Configuration is global and affects all scripts on the server.

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
#.  Update the :ref:`server-config.properties <engine-configuration-files>` configuration file to load the custom blacklist:
    
    .. code-block:: none
      :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

      # The location of the blacklist to use for all sites (this will have no effect if the sandbox is disabled)
      crafter.engine.groovy.sandbox.blacklist.path=classpath:crafter/engine/groovy/blacklist

    .. note::
      In CrafterCMS v3.1.14 and prior, the name of the property is ``crafter.engine.groovy.sandbox.blacklist``

#.  Restart CrafterCMS

Now you can execute the same script without any issues.


-------------------------------
Adding dependencies with Grapes
-------------------------------

If your Groovy code need to use external dependencies you can use Grapes, however, when the Groovy sandbox is enabled
dependencies can only be downloaded during the initial compilation and not during runtime. For this reason it is
required to add an extra parameter ``initClass=false`` in the annotations to prevent them to be copied to the classes:

.. code-block:: groovy
  :caption: Example grapes annotations

  @Grab(group='org.apache.commons', module='commons-pool2', version='2.8.0', initClass=false)
  
  @Grab(value='org.apache.commons:commons-pool2:2.8.0', initClass=false)

|

-------------------------------
Disabling the Sandbox Blacklist
-------------------------------

It is possible to disable the blacklist to allow the execution of most expressions, in
case you need to use a considerable number of the expression included in the blacklist while keeping some basic
restrictions. To disable the blacklist for all sites update the server configuration file
:ref:`server-config.properties <engine-configuration-files>`:

.. code-block:: none
  :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

  # Indicates if the blacklist should be enabled for all sites (this will have no effect if the sandbox is disabled)
  crafter.engine.groovy.sandbox.blacklist.enable=false

|

----------------------------
Disabling the Groovy Sandbox
----------------------------

It is possible to completely disable the Groovy sandbox for all scripts. To disable the sandbox for all sites update the server configuration file :ref:`server-config.properties <engine-configuration-files>`:

.. code-block:: none
  :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

  # Indicates if the sandbox is enabled for all sites
  crafter.engine.groovy.sandbox.enable=false

|

---------------
Important Notes
---------------

There are some limitations that should be noted when working with the Groovy Sandbox.

One limitation is that an exception is thrown during execution when a Groovy class has a property and a getter method for the property.  Here's an example code that throws an exception during execution:

   .. code-block::

      class Test {
        private String message

        public String getMessage() {
           return this.message
        }
      }

      def t = new Test()
      t.message = "this is a test"

      return t.getMessage()

   |

Here's the error thrown in the logs by the code above:

.. code-block:: text

   Caused by: java.lang.StackOverflowError
	at groovy.lang.GroovyClassLoader.loadClass(GroovyClassLoader.java:693)
	at groovy.lang.GroovyClassLoader$InnerLoader.loadClass(GroovyClassLoader.java:450)
	at groovy.lang.GroovyClassLoader.loadClass(GroovyClassLoader.java:812)
	at groovy.lang.GroovyClassLoader.loadClass(GroovyClassLoader.java:800)
	at sun.reflect.GeneratedMethodAccessor340.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)
	at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)
	at groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:1845)
	at groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:3773)
	at Test.getProperty(test.get.groovy)
	at org.codehaus.groovy.runtime.InvokerHelper.getProperty(InvokerHelper.java:190)
	at org.codehaus.groovy.runtime.ScriptBytecodeAdapter.getProperty(ScriptBytecodeAdapter.java:469)
	at org.kohsuke.groovy.sandbox.impl.Checker$7.call(Checker.java:392)
	at org.kohsuke.groovy.sandbox.GroovyInterceptor.onGetProperty(GroovyInterceptor.java:68)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onGetProperty(SandboxInterceptor.java:297)
	at org.kohsuke.groovy.sandbox.impl.Checker$7.call(Checker.java:390)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedGetProperty(Checker.java:394)
	at org.kohsuke.groovy.sandbox.impl.Checker$checkedGetProperty$1.callStatic(Unknown Source)
	at Test.getMessage(test.get.groovy:5)

|

**Workarounds**

There are a couple of things you can do to get around the exception being thrown:

* Do not use getter methods and instead access the property directly |br|
  Using the example above, we'll access the property directly:

     .. code-block::

        class Test {
          private String message
        }

        def t = new Test()
        t.message = "this is a test"

        return t.message

     |

* Use a different name for the property and the getter method |br|
  Again, using the example above, we'll use a different name from the property for the getter method:

     .. code-block::

        class Test {
          private String theMessage

          public String getMessage() {
             return this.theMessage
          }
        }

        def t = new Test()
        t.theMessage = "this is a test"

        return t.getMessage()

     |


