
======================
Preferences Management
======================

.. WARNING::
  Most preferences managed from the Crafter Social Admin Console are specific for each Social
  Context, please be sure to select the right context from the dropdown before saving any change.

-------------------------
Notifications Preferences
-------------------------

You can access the email notifications by clicking the ``Notification Preferences`` link in the
left sidebar.

.. figure:: /_static/images/social-admin/preferences.png
  :align: center

^^^^^^^^^^^^^^^
Email Templates
^^^^^^^^^^^^^^^

This section includes Context specific templates for all supported event notifications

+------------------+---------------------------------------------------------------+
| Event            |  Description                                                  |
+==================+===============================================================+
| Instant          || New changes from all subscribed threads (Individual)         |
+------------------+---------------------------------------------------------------+
| Daily            || New changes from all subscribed threads (Aggregated by day)  |
+------------------+---------------------------------------------------------------+
| Weekly           || New changes from all subscribed threads (Aggregated by week) |
+------------------+---------------------------------------------------------------+
| Approver Email   || New changes that need to be moderated                        |
+------------------+---------------------------------------------------------------+
| Approve UGC Page || New changes that have been approved                          |
+------------------+---------------------------------------------------------------+

All email templates need to be valid HTML pages and can use any feature from Freemarker.

.. code-block:: guess
  :caption: Example Email Template

  <html>
    <head>
      <title></title>
    </head>
    <body>
      <p>Hi ${profile.username} this are changes that happen on your subscribe Threads</p>
      <#list digest as change>
        <h1>${change["_id"]}</h1>
      
        <dl>
          <#list change.ugcList as ugc>
            <dt>Subject</dt>
            <dd>${ugc.subject!""}</dd>
            <dt>Body</dt>
            <dd>${ugc.body!""}</dd>
            <dt>Changed by</dt>
            <dt></dt>
            <dd>${ugc.lastModifiedBy.username}</dd>
            <dd></dd>
          </#list>
        </dl>
      </#list>
    </body>
  </html>

^^^^^^^^^^^^^^^^^^^
Email Configuration
^^^^^^^^^^^^^^^^^^^

This section includes the basic configuration that applies to all Social Contexts

+--------------------+---------------------------------------------------------------+
| Property           |  Description                                                  |
+====================+===============================================================+
| Server Host        || SMTP server for sending email notifications                  |
+--------------------+---------------------------------------------------------------+
| Port               || SMTP port using for connection to the server                 |
+--------------------+---------------------------------------------------------------+
| Use Authentication || If enabled the username and passwords will be used           |
+--------------------+---------------------------------------------------------------+
| Username           || Authentication used for connections to the server            |
+--------------------+                                                               +
| Password           ||                                                              |
+--------------------+---------------------------------------------------------------+
| Use TLS            || If enabled the connection will be secured                    |
+--------------------+---------------------------------------------------------------+
| Reply To           || Email address used by users for replies                      |
+--------------------+---------------------------------------------------------------+
| From               || Email address used to send all email notifications           |
+--------------------+---------------------------------------------------------------+
| Email Priority     || Value goes from 1 (highest) to 5 (lowest)                    |
+--------------------+---------------------------------------------------------------+
| Subject            || Subject used for all content change notifications            |
+--------------------+---------------------------------------------------------------+
| Encoding           || Encoding used for sending the email body                     |
+--------------------+---------------------------------------------------------------+

------------------
Tenant Preferences
------------------

These preferences allow you change the behavior of Crafter Social depending on the Social Context,
for example one context could send daily notifications and other send them weekly instead. You can
access them by clicking the ``Tenant Preferences`` link in the left sidebar.

.. figure:: /_static/images/social-admin/preferences-tenant.png
  :align: center

^^^^^^^^^^
Properties
^^^^^^^^^^

+-----------------------+----------------------+-------------------------------------------------+
| Property              | Default Value        | Description                                     |
+=======================+======================+=================================================+
| baseUrl               || myDomain.com        || URL for the server used in the                 |
|                       ||                     || email templates                                |
+-----------------------+----------------------+-------------------------------------------------+
| defaultFrequency      || INSTANT             || Frequency for sending the email                |
|                       ||                     || notifications                                  |
+-----------------------+----------------------+-------------------------------------------------+
| hiddenUgcStatus       || SPAM,TRASH          || List of status that should not appear          |
|                       ||                     || in the email notifications                     |
+-----------------------+----------------------+-------------------------------------------------+
| moderateByMailEnable  || false               || If enabled moderation emails will be           |
|                       ||                     || sent when new content is created               |
+-----------------------+----------------------+-------------------------------------------------+
| moderateByMailRole    || SOCIAL_APPROVER     || All users with this role will receive          |
|                       ||                     || the moderation emails                          |
+-----------------------+----------------------+-------------------------------------------------+
| moderateByMailSubject || A new Comment needs || Subject to use for the moderation              |
|                       || to be approved      || emails                                         |
+-----------------------+----------------------+-------------------------------------------------+
| setupAutoWatch        || false               || If enabled users will be automatically         |
|                       ||                     || subscribed to all content they create          |
+-----------------------+----------------------+-------------------------------------------------+
| timezone              || EST                 || Timezone used to format dates in               |
|                       ||                     || notifications                                  |
+-----------------------+----------------------+-------------------------------------------------+

^^^^^^^^^^^^^^^^^
Custom Properties
^^^^^^^^^^^^^^^^^

You can also extend Crafter Social to add custom business rules, in which case you can also
include custom configuration from the Admin Console. When you click the ``Add`` button you can
set new properties with any name and value. If you are not using a custom Crafter Social WAR all
custom properties will be ignored.

.. figure:: /_static/images/social-admin/preferences-tenant-new.png
  :align: center
  :width: 75%

