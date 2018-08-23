.. _changing-session-timeout:

============================
Changing the Session Timeout
============================

Session timeout is the amount of time of user inactivity before requiring the user to re-authenticate.

In some cases, some operations in Crafter may last longer than the user session timeout settings.  For this scenario, the session timeout will need to be modified to allow the operation to finish without the session timing out.  Also, you may want to change the session timeout from the default settings.

To change the session timeout, follow the instructions below:

#. In your ``TOMCAT/webapps/studio/WEB-INF/web.xml`` file, change the value in between the session-timeout tags to desired amount of time the session will exist in minutes:

   .. code-block:: xml

      <session-config>
         <session-timeout>75</session-timeout>
      </session-config>

   |

#. In your ``TOMCAT/shared/classes/crafter/studio/extension/studio-config-override.yaml``, change the value for ``studio.security.sessionTimeout`` to desired amount of time the session will exist in minutes (the same value from the previous step):

   .. code-block:: properties

      studio.security.sessionTimeout: 60

|

Make sure to stop and restart your Studio after making your changes.