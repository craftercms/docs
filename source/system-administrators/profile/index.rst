.. _crafter-profile-admin:

=====================================
Crafter Profile System Administration
=====================================

This guide covers the basic configuration for Crafter Profile, if you need to manage tenants and
profiles you can follow the :ref:`profile-admin-console` guides.

.. NOTE::
  This guide assumes that you have already installed and configured MongoDB, or you've used
  Crafter CMS's Gradle build system (which will install MongoDB for you). You can find more
  information in the official documentation: https://docs.mongodb.com/manual/installation/


All configuration for Crafter Profile is managed using a properties file:

  ``$TOMCAT_HOME/shared/classes/crafter/profile/extension/server-config.properties``

---------------------
MongoDB Configuration
---------------------

Using the following properties you can change the server and database used by Crafter Profile.
This will allow you to use advanced MongoDB features and also host multiple Crafter Profile
databases in the same MongoDB server.

Properties prefix: ``crafter.profile.mongodb.``

+------------------------------------+----------------------+------------------------------------+
| Property                           | Default Value        | Description                        |
+====================================+======================+====================================+
| connection.newConnectionStr        | [#]_                 || MongoDB URL used for all          |
|                                    |                      || connections                       |
+------------------------------------+----------------------+------------------------------------+
| connection.dbName                  | crafterprofile       || Name of the MongoDB database      |
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
|                                    |                      || creating the default tenant,      |
|                                    |                      || profile and access tokens in the  |
|                                    |                      || db will run each time the         |
|                                    |                      || Crafter Profile war is loaded     |
+------------------------------------+----------------------+------------------------------------+
| scripts.paths                      | [#]_                 || List of all MongoDB scripts to    |
|                                    |                      || run                               |
+------------------------------------+----------------------+------------------------------------+

-------------------
Email Configuration
-------------------

Using the following properties you can change the server used by Crafter Profile to send emails.

Properties prefix: ``crafter.profile.mail.``

+----------------------+---------------+--------------------------------------------------+
| Property             | Default Value | Description                                      |
+======================+===============+==================================================+
| host                 | localhost     || Email server host name                          |
+----------------------+---------------+--------------------------------------------------+
| port                 | 25            || Email server port                               |
+----------------------+---------------+--------------------------------------------------+
| protocol             | smtp          || Email server protocol                           |
+----------------------+---------------+--------------------------------------------------+
| username             | None          || Email server username                           |
+----------------------+---------------+--------------------------------------------------+
| password             | None          || Email server password                           |
+----------------------+---------------+--------------------------------------------------+
| encoding             | UTF-8         || Character encoding used for the                 |
|                      |               || emails                                          |
+----------------------+---------------+--------------------------------------------------+
| smtp.auth            | false         || If enabled the connection will try to use the   |
|                      |               || username and password for authentication        |
+----------------------+---------------+--------------------------------------------------+
| smtp.starttls.enable | false         || If enabled the connection will be secured       |
+----------------------+---------------+--------------------------------------------------+
| templates.path       | [#]_          || Location for resolving email templates          |
+----------------------+---------------+--------------------------------------------------+

----------------------------
Authentication Configuration
----------------------------

Using the following properties you can change how Crafter Profile handles the authentication
process.

Properties prefix: ``crafter.profile.auth.``

+--------------------------------+---------------+-----------------------------------------------+
| Property                       | Default Value | Description                                   |
+================================+===============+===============================================+
| ticket.maxAge                  | 900           || Maximum time in seconds to keep the          |
|                                |               || cookie                                       |
+--------------------------------+---------------+-----------------------------------------------+
| ticket.cleaner.startDelay      | 0             || Time in milliseconds to wait before          |
|                                |               || starting                                     |
+--------------------------------+---------------+-----------------------------------------------+
| ticket.cleaner.repeatInterval  | 30000         || Time interval in milliseconds to run the     |
|                                |               ||  cleaner task                                |
+--------------------------------+---------------+-----------------------------------------------+
| lockTime                       | 10            || Time in minutes to lock a profile after      |
|                                |               || the specified failed attempts to login       |
+--------------------------------+---------------+-----------------------------------------------+
| failedLoginAttemptsBeforeLock  | 8             || Limit of failed attempts to login before     |
|                                |               || locking the profile                          |
+--------------------------------+---------------+-----------------------------------------------+
| failedLoginAttemptsBeforeDelay | 2             || Number of consecutive login attempts before  |
|                                |               || a delay is added                             |
+--------------------------------+---------------+-----------------------------------------------+

--------------------------
Verification Configuration
--------------------------

Using the following properties you can change how Crafter Profile handles the profile verification
process.

Properties prefix: ``crafter.profile.verification.``

+---------------------------------+------------------------------+-------------------------------+
| Property                        | Default Value                | Description                   |
+=================================+==============================+===============================+
| token.maxAge                    | 86400                        || Maximum time in seconds      |
|                                 |                              || to keep the verification     |
|                                 |                              || token                        |
+---------------------------------+------------------------------+-------------------------------+
| token.cleaner.startDelay        | 0                            || Time in milliseconds to      |
|                                 |                              || wait before starting the     |
|                                 |                              || task that deletes expired    |
|                                 |                              || tokens                       |
+---------------------------------+------------------------------+-------------------------------+
| ticket.cleaner.repeatInterval   | 30000                        || Time interval in milliseconds|
|                                 |                              || to run the cleaner task      |
+---------------------------------+------------------------------+-------------------------------+
| newProfile.mail.from            | noreply\@example.com         || Email address to send        |
|                                 |                              || the verification mail        |
+---------------------------------+------------------------------+-------------------------------+
| newProfile.mail.subject         | Verify Account               || Subject for the              |
|                                 |                              || verification mail            |
+---------------------------------+------------------------------+-------------------------------+
| newProfile.mail.templateName    | verify-new-profile-email.ftl || Name of the template for     |
|                                 |                              || the verification mail        |
+---------------------------------+------------------------------+-------------------------------+
| resetPassword.mail.from         | noreply\@example.com         || Email address to send        |
|                                 |                              || the reset password mail      |
+---------------------------------+------------------------------+-------------------------------+
| resetPassword.mail.subject      | Reset Password               || Subject for the              |
|                                 |                              || reset password mail          |
+---------------------------------+------------------------------+-------------------------------+
| resetPassword.mail.templateName | reset-password-email.ftl     || Name of the template for     |
|                                 |                              || the reset password mail      |
+---------------------------------+------------------------------+-------------------------------+

-------------------------
Remember Me Configuration
-------------------------

Using the following properties you can change how Crafter Profile validates the `Remember Me`
cookies.

Properties prefix: ``crafter.profile.auth.``

+-------------------------------+---------------+------------------------------------------------+
| Property                      | Default Value | Description                                    |
+===============================+===============+================================================+
| ticket.maxAge                 | 900           || Maximum time in seconds to keep the           |
|                               |               || ticket                                        |
+-------------------------------+---------------+------------------------------------------------+
| ticket.cleaner.startDelay     | 0             || Time in milliseconds to wait before           |
|                               |               || starting the task that deletes expired        |
|                               |               || tickets                                       |
+-------------------------------+---------------+------------------------------------------------+
| ticket.cleaner.repeatInterval | 30000         || Time interval in milliseconds to run the      |
|                               |               ||  cleaner task                                 |
+-------------------------------+---------------+------------------------------------------------+

-------------------
Tasks Configuration
-------------------

Using the following properties you can change how Crafter Profile handles the concurrent tasks.

Properties prefix: ``crafter.profile.task.``

+------------------------+---------------+------------------------------------------------+
| Property               | Default Value | Description                                    |
+========================+===============+================================================+
| executor.poolSize      | 5-50          || Range of allowed concurrent tasks             |
+------------------------+---------------+------------------------------------------------+
| executor.queueCapacity | 100           || Total maximum of tasks                        |
+------------------------+---------------+------------------------------------------------+

-------------------------
Attachments Configuration
-------------------------

Using the following properties you can change how Crafter Profile handles file attachments for
profiles.

Properties prefix: ``crafter.profile.attachments.``

+----------------+----------------------------+------------------------------------------------+
| Property       | Default Value              | Description                                    |
+================+============================+================================================+
| validMimeTypes || image/bmp, image/gif,     || List of file types that will be accepted as   |
|                || image/jpeg, image/png,    || attachments in the profiles                   |
|                || image/tiff, image/svg+xml ||                                               |
+----------------+----------------------------+------------------------------------------------+
| maxSizeUpload  || 5242880                   || Maximum file size in bytes to be uploaded     |
+----------------+----------------------------+------------------------------------------------+
| maxSizeMem     || 1048576                   || Maximum file size in bytes to store in        |
|                ||                           || memory                                        |
+----------------+----------------------------+------------------------------------------------+

----------------------------
Using Custom Email Templates
----------------------------

By default Crafter Profile only uses two email templates, but in the future more could be added.

Email Templates
 - verify-new-profile-email.ftl
 - reset-password-email.ftl

If you want the emails to match the styles from your site or application you can create your own
templates and configure Crafter Profile to use them following this steps:

1. Change the property ``crafter.profile.mail.templates.path`` to something like ``classpath:crafter/profile/extension/templates``
2. Place the new templates in the folder ``TOMCAT/shared/classes/crafter/profile/extension/templates``
3. Reload the ``crafter-profile.war`` file

The templates will have available the ``verificationLink`` variable.

.. code-block:: guess
  :caption: Example Email Template

  Click on the link below to verify your Crafter Profile account.
  <br/><br/>
  <a id="verificationLink" href="${verificationLink}">${verificationLink}</a>
  <br/><br/>
  If it does not work copy and paste the URL to your browser.
  <br/><br/>
  Best regards,
  <br/>
  Crafter Team


.. rubric:: Notes

.. [#] - Default Value: ``mongodb://localhost:27017/crafterprofile?readPreference=primary&maxPoolSize=150&minPoolSize=50&maxIdleTimeMS=1000&waitQueueMultiple=200&waitQueueTimeoutMS=1000&w=1&journal=true``
       - You can find more information about the format and parameters here: https://docs.mongodb.com/manual/reference/connection-string/

.. [#] - Default Value: ``classpath:crafter/profile/init-data.js,classpath:crafter/profile/upgrade-db.js``
       - You can add any custom MongoDB script, more information: https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

.. [#] - Default Value: ``classpath:crafter/profile/mail/templates``
       - If you change this property be sure to include all templates needed by Crafter Profile in the new location
