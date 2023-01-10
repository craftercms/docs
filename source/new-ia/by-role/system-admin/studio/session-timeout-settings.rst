:is-up-to-date: True
:last-updated: 4.0.3

:nosearch:

.. _newIa-changing-session-timeout:

============================
Changing the Session Timeout
============================

CrafterCMS has configurable timeouts for session lifetime and session inactivity.

Session lifetime timeout is the amount of time a session is valid before requiring the user to re-authenticate.

Session inactivity timeout is the amount of time of user inactivity before requiring the user to re-authenticate.

In some cases, some operations in CrafterCMS may last longer than the user session inactivity timeout settings.
For this scenario, the session inactivity timeout will need to be modified to allow the operation to finish
without the session timing out.  Also, you may want to change the timeouts from the default settings.

Here's a summary of the session timeouts available in CrafterCMS:

.. list-table::
   :widths: 1 1 8
   :header-rows: 1

   * - Timeout Name
     - Default Value |br|
       *(in minutes)*
     - Description
   * - ``sessionTimeout``
     - 480
     - **Studio session lifetime timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml* |br| |br|
       The amount of time a session is valid counting from when a user is logged in. |br|
       After this amount of time,a session timeout will be forced in the application layer even if the user is active.
   * - ``inactivityTimeout``
     - 30
     - **Studio session inactivity timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml* |br| |br|
       The amount of time of user inactivity, tracked by Studio, before requiring the user to re-authenticate. |br|
       Remember to set the ``inactivityTimeout`` value less than the ``session-timeout`` value in the ``web.xml`` file. |br|
       The session inactivity time tracked by Studio is different from the session inactivity time tracked by Tomcat. |br|
       This is because there are some API calls that are not tracked as active by Studio.
   * - ``session-timeout``
     - 30
     - **Tomcat session timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml* |br| |br|
       The amount of time of user inactivity, tracked by Tomcat, before requiring the user to re-authenticate. |br|
       This value must be greater than or equal to ``inactivityTimeout`` since that timeout can and does kick in |br|
       before this one.


-------------------------------
Change Session Lifetime Timeout
-------------------------------

To change the session lifetime timeout, in your
``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``,
change the value for ``studio.security.sessionTimeout`` to desired amount of time the session is valid
in minutes for users.

.. code-block:: properties

   # Time in minutes after which active users will be required to login again
   # studio.security.sessionTimeout: 480

|

Make sure to stop and **restart Studio** after making your change.

---------------------------------
Change Session Inactivity Timeout
---------------------------------
There are two timeouts you can configure for the session inactivity timeout as described in the above table.

- ``session-timeout`` in the Tomcat ``web.xml`` file
  This is the default Tomcat timeout for handling idle connections (inactive)
- ``inactivityTimeout`` in the Studio override configuration file
  This is the Studio session inactivity timeout

To change the session inactivity timeout, follow the instructions below:

#. In your ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``,
   change the value for ``studio.security.inactivityTimeout`` to set the amount of time in minutes the amount of
   time a user can be inactive before the user's session times out.

   .. code-block:: properties

      # Time in minutes after which inactive users will be required to login again
      # studio.security.inactivityTimeout: 30

   |

#. In your ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file, change the value in
   between the ``session-timeout`` tags to desired amount of time the session will exist in minutes:

   .. code-block:: xml

      <session-config>
        <session-timeout>30</session-timeout>
        <tracking-mode>COOKIE</tracking-mode>
	  </session-config>

   |


Remember to keep the Studio session inactivity timeout ``inactivityTimeout`` from the :ref:`studio-config-override.yaml <newIa-studio-configuration-files>` file less than the Tomcat ``session-timeout`` from the ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file.

Make sure to stop and **restart Studio after making your changes**.

You can also change the Studio session timeouts from the |mainMenu| **Main Menu** in Studio under ``Global Config``

