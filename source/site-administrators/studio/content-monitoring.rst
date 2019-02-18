.. _content-monitoring:

==================
Content Monitoring
==================

---------------------------
What is Content Monitoring?
---------------------------

Content Monitoring is a feature that allows you to configure watches and notifications on your site.
This will provide an easy way to detect unwanted or outdated content.
Crafter Studio using the Website_editorial blueprint out of the box will run the process that performs monitoring everyday  and send notifications
indicating the items detected by the content monitors.
Content monitors are managed independently for each site and are highly customizable.

^^^^^^^^^^^^^^^^^^^^^^^^^^
Content Monitor Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^

Each monitor needs to define the following properties:

- name:
    General name for the content monitor.
- query:
    Luecene query used to match documents, can be any valid Lucene query.
- paths:
    List of paths with notification configurations, there must be at least one path item for each
    monitor.

^^^^^^^^^^^^^^^
Path Properties
^^^^^^^^^^^^^^^

Each path item needs to define the following properties:

- name:
    General name for the path.
- pattern:
    Regular expression describing the path that documents must have to be included in the
    notifications.
- emailTemplate:
    Key of the email template that will be used for the notifications.
- emails:
    List of emails to send the notifications, must be separated by commas.
- locale:
    Key of the language to search the email template for the notifications. If this property is
    not defined or the value is not found in the configuration it will fallback to ``en``.

-----------------------------------
How to Configure Content Monitoring
-----------------------------------

Content monitoring can be configured through Crafter Studio.  Go to the **Sidebar**, then click on
**Site Config** > **Configuration** > **Site Configuration**

.. image:: /_static/images/site-configuration-open.png
    :align: center
    :alt: Configuration - Open "Site Configuration"

The file can also be located in the following path:

  ``/config/studio/site-config.xml``

.. code-block:: xml
  :caption: Example Content Monitor Configuration

  <site-config>
  
    ...
    
    <contentMonitoring>
      <monitor>
        <name>Content Expiring Tomorrow</name>
        <query>expired_dt:[NOW/DAY+1DAY TO NOW/DAY+2DAY]</query>
        <paths>
          <path>
            <name>All Site</name>
            <pattern>/site/.*</pattern>
            <emailTemplate>contentExpiringSoon</emailTemplate>
            <emails>admin@example.com</emails>
            <locale>en</locale>
          </path>
        </paths>
      </monitor>
      <monitor>
        <name>Content Expiring In One Week</name>
        <query>expired_dt:[NOW/DAY+7DAYS TO NOW/DAY+8DAYS]</query>
        <paths>
          <path>
            <name>All Site</name>
            <pattern>/site/.*</pattern>
            <emailTemplate>contentExpiringSoon</emailTemplate>
            <emails>admin@example.com</emails>
            <locale>en</locale>
          </path>
        </paths>
      </monitor>
    </contentMonitoring>

    ...
    
  </site-config>

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Notification Templates Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Notification templates can be configured through Crafter Studio.  Go to the **Sidebar**, then click
on |siteConfig| > **Configuration** > **Notification Configuration**

.. figure:: /_static/images/site-admin/notification-config-open.png
  :align: center
  :alt: Configuration - Open "Notification Configuration"

The file can also be located in the following path:

  ``/config/studio/workflow/notification-config.xml``

.. code-block:: xml
  :caption: Example Notification Template for Content Monitoring

  <notificationConfig>
  
    ...
    
    <lang name="en">
    
      ...

      <emailTemplate key="contentExpiringSoon">
        <subject>Content Expiring Soon</subject>
        <body><![CDATA[
          <html>
            <head>
              <meta charset="utf-8"/>
            </head>
            <body>
              <p>
                 ${monitorName} in site '${siteName}':
                 <ul>
                   <#list items as item>
                     <#if item.url??>
                       <li><a href="${item.url}">${item.internalName!item.id}</a></li>
                     <#else>
                       <li>${item.internalName!item.id}</li>
                     </#if>
                   </#list>
                 </ul>
              </p>
            </body>
          </html>
        ]]></body>
      </emailTemplate>

      ...
      
    </lang>
    
    ...
    
  </notificationConfig>

The notification templates will have available the following variables:

- siteName
- liveUrl
- previewUrl
- authoringUrl
- monitorName
- items

Each item will have the following properties:

- id
- internalName
- url (only present if the item is a page)

.. figure:: /_static/images/site-admin/expired-content-email.png
  :align: center
  :alt: Example Content Monitor Notification Email

^^^^^^^^^^^^^^^^^^^^^^^^^^
Example Monitoring Queries
^^^^^^^^^^^^^^^^^^^^^^^^^^

Content Expiration
------------------

+------------------------------------------------+-------------------------------------------+
| Purpose                                        | Query                                     |
+================================================+===========================================+
| Warn every day that content is past expiration | | ``expired_dt:[* TO NOW]``               |
+------------------------------------------------+-------------------------------------------+
| Warn 10 days ahead that content will expire    | | ``expired_dt:[NOW+10DAY TO NOW+11DAY]`` |
+------------------------------------------------+-------------------------------------------+
| Warn 10 days ahead AND on expire date          | | ``expired_dt:[NOW+10DAY TO NOW+11DAY]`` |
|                                                | | or                                      |
|                                                | | ``expired_dt:[NOW TO NOW+1DAY]``        |
+------------------------------------------------+-------------------------------------------+
| Everything that was modified today             | | ``modified_dt:[NOW-1DAY TO NOW]``       |
|                                                | | or                                      |
|                                                | | ``create_dt:[NOW-1DAY TO NOW]``         |
+------------------------------------------------+-------------------------------------------+
| Content that Contains an Old Trademark         | | ``*:"UNWANTED TRADEMARK"``              |
+------------------------------------------------+-------------------------------------------+
