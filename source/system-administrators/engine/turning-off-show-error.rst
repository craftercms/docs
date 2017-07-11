
===================
Turn Off Show Error
===================

Templates in Crafter CMS will display the errors in line with content as they encounter them to help the template developer during the coding process.  On production environments, you do not want the errors to show up because it will highlight site issues and expose information that may be a security concern.  

------
Step 1
------

Place the following property and value in the file below

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/engine/extension/server-config.properties

	crafter.engine.template.error.displayInView=false

------
Step 2
------

Restart the Crafter Engine application or the Tomcat service.

------
Step 3
------

Test by deploying an FTL file with an error in it.
Note that the error will not show up but is printed out in the server's log file.

