.. _crafter-social-admin:

====================================
Crafter Social System Administration
====================================

This guide covers the basic configuration for Crafter Social, if you need to manage contexts and
user generated content you can follow the :ref:`social-admin-console` guides.

.. NOTE::
  This guide assumes that you have already installed and configured Crafter Profile. For details
  see :ref:`crafter-profile-admin`


All configuration for Crafter Social is managed using a properties file:

  ``$TOMCAT_HOME/shared/classes/crafter/social/extension/server-config.properties``

---------------------
MongoDB Configuration
---------------------

Using the following properties you can change the server and database used by Crafter Social.
This will allow you to use advanced MongoDB features and also host multiple Crafter Social
databases in the same MongoDB server.

Properties prefix: ``crafter.social.mongodb.``

+------------------------------------+----------------------+------------------------------------+
| Property                           | Default Value        | Description                        |
+====================================+======================+====================================+
| connection.newConnectionStr        | [#]_                 || MongoDB URL used for all          |
|                                    |                      || connections                       |
+------------------------------------+----------------------+------------------------------------+
| connection.dbName                  | craftersocial        || Name of the MongoDB database      |
+------------------------------------+----------------------+------------------------------------+
| connection.scriptRunner.withClient | false                || If enabled a native client will   |
|                                    |                      || be used to run all scripts        |
+------------------------------------+----------------------+------------------------------------+
| connection.scriptRunner.clientPath | /usr/local/bin/mongo || Absolute path of the native       |
|                                    |                      || client                            |
+------------------------------------+----------------------+------------------------------------+
| connection.dbUsername              | None                 || Username for MongoDB              |
|                                    |                      || authentication                    |
+------------------------------------+----------------------+------------------------------------+
| connection.dbPassword              | None                 || Password for MongoDB              |
|                                    |                      || authentication                    |
+------------------------------------+----------------------+------------------------------------+
| scripts.runOnInit                  | true                 || If enabled all scripts for        |
|                                    |                      || creating the default context,     |
|                                    |                      || will run each time the            |
|                                    |                      || Crafter Social war is loaded      |
+------------------------------------+----------------------+------------------------------------+
| scripts.paths                      | [#]_                 || List of all MongoDB scripts to    |
|                                    |                      || run                               |
+------------------------------------+----------------------+------------------------------------+

-----------------------------
Crafter Profile Configuration
-----------------------------

Using these properties you can control how Crafter Social interacts with Crafter Profile.

Properties prefix: ``crafter.profile.rest.client.``

+----------------+----------------------------------------+------------------------------------+
| Property       | Default Value                          | Description                        |
+================+========================================+====================================+
| url.base       | \http://localhost:8080/profile         || URL where Crafter Profile is      |
|                |                                        || deployed                          |
+----------------+----------------------------------------+------------------------------------+
| accessToken.id | 2ba3ac10-c43e-11e3-9c1a-0800200c9a66   || Access Token included in all      |
|                |                                        || requests made to the Crafter      |
|                |                                        || Profile API                       |
+----------------+----------------------------------------+------------------------------------+

-----------------
Web Configuration
-----------------

Properties prefix: ``crafter.social.web.``

+--------------------+-----------------------+---------------------------------------------------+
| Property           | Default Value         | Description                                       |
+====================+=======================+===================================================+
| mapping.dateFormat | yyyy-MM-dd'T'HH:mm'Z' || Pattern used to format all dates                 |
+--------------------+-----------------------+---------------------------------------------------+
| maxUpload          | 10485760              || Maximum file size in bytes for attachments       |
+--------------------+-----------------------+---------------------------------------------------+
| defaultSortOrder   | ASC                   || Default sort order used for queries              |
+--------------------+-----------------------+---------------------------------------------------+

------------------------------------
User Generated Content Configuration
------------------------------------

Properties prefix: ``crafter.social.ugc.``

+------------------+---------------------------+-------------------------------------------------+
| Property         | Default Value             | Description                                     |
+==================+===========================+=================================================+
| invalidQueryKeys || ``contextId:|$where:``   || MongoDB keywords not allowed in the            |
|                  ||                          || user provided queries                          |
+------------------+---------------------------+-------------------------------------------------+
| arraySortFields  || `flags`, `votesDown`,    || MongoDB fields allowd to sort query            |
|                  || `votesUp`, `attachments`,|| results                                        |
|                  || `ancestors`              ||                                                |
+------------------+---------------------------+-------------------------------------------------+
| virusScanner     || [#]_                     || Class implementing the ``VirusScanner``        |
|                  ||                          || interface, see :ref:`crafter-social-av`        |
+------------------+---------------------------+-------------------------------------------------+

---------------------------
Notifications Configuration
---------------------------

Using these configurations you can control how Crafter Social handles email notifications.

Properties prefix: ``studio.social.notification.``

+-----------------+-------------------+----------------------------------------------------------+
| Property        | Default Value     | Description                                              |
+=================+===================+==========================================================+
| dailyCron       | ``0 0 0 * * ?``   || CRON Expressions used to control how often each type    |
+-----------------+-------------------+| of notification is sent.                                |
| weeklyCron      | ``0 0 0 ? * SUN`` |                                                          |
+-----------------+-------------------+                                                          |
| instantCron     | ``0 */2 * * * ?`` |                                                          |
+-----------------+-------------------+----------------------------------------------------------+
| startDelay      | 60                || Time in seconds to wait after the application is        |
|                 |                   || loaded to start sending notifications                   |
+-----------------+-------------------+----------------------------------------------------------+
| instantInterval | 120000            || Time in milliseconds to wait between each instant       |
|                 |                   || notification is sent                                    |
+-----------------+-------------------+----------------------------------------------------------+
| disable         | false             || If set to ``true`` notifications will not be sent       |
+-----------------+-------------------+----------------------------------------------------------+

-------------------
Other Configuration
-------------------

Properties prefix: ``studio.social.system.``

+--------------------------+---------------------+-----------------------------------------------+
| Property                 | Default Value       | Description                                   |
+==========================+=====================+===============================================+
| ugcClass                 || [#]_               || Class implementing the                       | 
|                          |                     || ``UgcFactory`` interface, will               |
|                          |                     || be used to create all new user               |
|                          |                     || generated contents                           |
+--------------------------+---------------------+-----------------------------------------------+
| defaultLocale            || EN                 || Locale used for notification                 |
|                          |                     || templates                                    |
+--------------------------+---------------------+-----------------------------------------------+
| ignoreAnonymousFlagRoles || SOCIAL_ADMIN,      || Roles not taken into account when            |
|                          || SOCIAL_SUPERADMIN, || adding flags to user generated               |
|                          || SOCIAL_MODERATOR   || content                                      |
+--------------------------+---------------------+-----------------------------------------------+

Properties prefix: ``studio.social.system.profileAgg.``

+---------------------------+----------+---------------------------------------------------------+
| Property                  || Default | Description                                             |
|                           || Value   |                                                         |
+===========================+==========+=========================================================+
| cache.ttl                 | 3600     || Total time in seconds that objects will be kept in     |
|                           |          || the cache                                              |
+---------------------------+----------+---------------------------------------------------------+
| cache.tti                 | 1800     || Time in seconds that objects will be kept in the       |
|                           |          || cache wihout being used                                |
+---------------------------+----------+---------------------------------------------------------+
| cache.maxElementsInMemory | 250      || Maximum number of objects kept in memory               |
|                           |          || by the cache                                           |
+---------------------------+----------+---------------------------------------------------------+
| attributesToReturn        | [#]_     || List of fields used by MongoDB queries                 |
+---------------------------+----------+---------------------------------------------------------+

Properties prefix: ``studio.social.system.emailConfig.``

+---------------------------+----------+---------------------------------------------------------+
| Property                  || Default | Description                                             |
|                           || Value   |                                                         |
+===========================+==========+=========================================================+
| cache.ttl                 | 3600     || Total time in seconds that objects will be kept in     |
|                           |          || the cache                                              |
+---------------------------+----------+---------------------------------------------------------+
| cache.tti                 | 1800     || Time in seconds that objects will be kept in the       |
|                           |          || cache wihout being used                                |
+---------------------------+----------+---------------------------------------------------------+
| cache.maxElementsInMemory | 250      || Maximum number of objects kept in memory               |
|                           |          || by the cache                                           |
+---------------------------+----------+---------------------------------------------------------+

Properties prefix: ``studio.social.system.tentanConfig.``

+---------------------------+----------+---------------------------------------------------------+
| Property                  || Default | Description                                             |
|                           || Value   |                                                         |
+===========================+==========+=========================================================+
| cache.ttl                 | 3600     || Total time in seconds that objects will be kept in     |
|                           |          || the cache                                              |
+---------------------------+----------+---------------------------------------------------------+
| cache.tti                 | 1800     || Time in seconds that objects will be kept in the       |
|                           |          || cache wihout being used                                |
+---------------------------+----------+---------------------------------------------------------+
| cache.maxElementsInMemory | 250      || Maximum number of objects kept in memory               |
|                           |          || by the cache                                           |
+---------------------------+----------+---------------------------------------------------------+

Properties prefix: ``studio.social.system.cors.``

Using these properties you can control the `Cross-Origin Resource Sharing` settings to assure
your sites and applications are able to access the Crafter Social API.

+-------------------------------+---------------------+------------------------------------------+
| Property                      | Default Value       | Description                              |
+===============================+=====================+==========================================+
| disableCORS                   | false               || If set to ``true`` CORS headers will    |
|                               |                     || not be added to any response            |
+-------------------------------+---------------------+------------------------------------------+
| accessControlAllowHeaders     | x-requested-with    || Value for the header                    |
|                               |                     || ``Access-Control-Allow-Headers``        |
+-------------------------------+---------------------+------------------------------------------+
| accessControlAllowMethods     | POST,GET,PUT,DELETE || Value for the header                    |
|                               |                     || ``Access-Control-Allow-Methods``        |
+-------------------------------+---------------------+------------------------------------------+
| accessControlMaxAge           | 3600                || Value for the header                    |
|                               |                     || ``Access-Control-Max-Age``              |
+-------------------------------+---------------------+------------------------------------------+
| accessControlAllowOrigin      | *                   || Value for the header                    |
|                               |                     || ``Access-Control-Allow-Origin``         |
+-------------------------------+---------------------+------------------------------------------+
| accessControlAllowCredentials | false               || Value for the header                    |
|                               |                     || ``Access-Control-Allow-Credentials``    |
+-------------------------------+---------------------+------------------------------------------+

.. _crafter-social-av:

---------------------------
Virus Scanner Configuration
---------------------------

Since users of your site or application will be able to upload files into the Crafter Social database
it is recommended to setup an antivirus for additional protection of both the server and the
client machines. By default Crafter Social is configured to use an empty implementation of the
``VirusScanner``, in a production environment you should follow these steps to enable it:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Enable ClamAV Virus Scanner
^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Install ClamAV
2. Edit the ClamAV configuration file to include the following properties:

.. code-block:: guess
  :caption: clamd.conf
  :linenos:

  # The values provided are just an example, they are fine for a local test but you should
  # use the appropriate values for production
  
  TCPSocket 3310
  TCPAddr 127.0.0.1

3. Start the ``clamd`` daemon
4. Add the following file:

.. NOTE::
  If you are going to use the default ClamAV values (localhost:3310) the only change needed is the
  property ``studio.social.ugc.virusScanner=org.craftercms.virusscanner.impl.ClamavVirusScannerImpl``.

.. code-block:: xml
  :caption: $TOMCAT/shared/classes/crafter/social/extension/virus-scanner-context.xml
  :linenos:

  <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    
      <bean id="social.ugc.virusScanner" class="org.craftercms.virusscanner.impl.ClamavVirusScannerImpl">
        <property name="host" value="localhost"/>
        <property name="port" value="3310"/>
        <property name="timeout" value="60000"/>
      </bean>
    
    </beans>

5. Reload the Crafter Social WAR file or restart the Tomcat server

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using a Custom Virus Scanner
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you need to use a different antivirus software you can create a class that implements the
``org.craftercms.virusscanner.api.VirusScanner`` interface. Your custom class should:

1. Define all configuration needed by the antivirus
2. Execute the antivirus scan for individual files
3. Throw a ``org.craftercms.virusscanner.impl.VirusScannerException`` if any threat is detected

.. rubric:: Notes

.. [#] - Default Value: ``mongodb://localhost:27017/craftersocial?readPreference=primary&maxPoolSize=150&minPoolSize=50&maxIdleTimeMS=1000&waitQueueMultiple=200&waitQueueTimeoutMS=1000&w=1&journal=true``
       - You can find more information about the format and parameters here: https://docs.mongodb.com/manual/reference/connection-string/

.. [#] - Default Value: ``classpath:/crafter/social/``
       - You can add any custom MongoDB script, more information: https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

.. [#] - Default Value: ``org.craftercms.virusscanner.impl.NullVirusScannerImpl``
       - You can extend Crafter Social to use a custom virus scanner or use the provided solution with ClamAV.

.. [#] - Default Value: ``org.craftercms.social.repositories.social.SocialUgcFactory``
       - You can extend Crafter Social to include custom fields or logic when creating User Generated Content.

.. [#] - Default Value: ``displayName,avatarLink,socialContexts,notificationLocale,autoWatch,defaultFrequency,isAlwaysAnonymous``
       - Crafter Social will expect those fields to be available in all profiles, you need to make sure they are included in all
         tenants that are needed by your site or application.
