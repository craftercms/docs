:is-up-to-date: True

.. _newIa-changing-session-timeout:

============================
Changing the Session Timeout
============================

Session timeout is the amount of time of user inactivity before requiring the user to re-authenticate.

In some cases, some operations in Crafter may last longer than the user session timeout settings.  For this scenario, the session timeout will need to be modified to allow the operation to finish without the session timing out.  Also, you may want to change the session timeout from the default settings.

To change the session timeout, follow the instructions below:

#. In your ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file, change the value in between the session-timeout tags to desired amount of time the session will exist in minutes:

   .. code-block:: xml

      <session-config>
         <session-timeout>75</session-timeout>
      </session-config>

   |

#. In your ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``, change the value for ``studio.security.sessionTimeout`` to desired amount of time the session will exist in minutes (the same value or less from the previous step):

   .. code-block:: properties

      # HTTP Session timeout for studio (value is in minutes).
      studio.security.sessionTimeout: 60

   |

   You can also change the Studio session timeout from the |mainMenu| **Main Menu** in Studio under ``Global Config``

Remember to keep the Studio session timeout from the :ref:`studio-config-override.yaml <newIa-studio-configuration-files>` file less than the Tomcat session-timeout (``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file).  Also make sure to stop and **restart your Studio after making your changes**.