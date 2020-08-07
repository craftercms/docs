:is-up-to-date: True

.. index:: Content Monitoring

.. _content-monitoring:

==================
Content Monitoring
==================

---------------------------
What is Content Monitoring?
---------------------------

Content Monitoring is a feature that allows you to configure watches and notifications on your site.
This will provide an easy way to detect unwanted or outdated content.
Sites created using Crafter Studio's Website Editorial blueprint out of the box will run the process that performs monitoring everyday and send notifications
indicating the items detected by the content monitors.
Content monitors are managed independently for each site and are highly customizable.

^^^^^^^^^^^^^^^^^^^^^^^^^^
Content Monitor Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^

Each monitor needs to define the following properties:

- name:
    General name for the content monitor.
- query:
    Lucene query used to match documents, can be any valid Lucene query.
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

.. image:: /_static/images/site-admin/site-configuration-open.png
    :align: center
    :alt: Configuration - Open "Site Configuration"

The file can also be located in the following path:

  ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/site-config.xml``

.. code-block:: xml
  :caption: Example Content Monitor Configuration

  <site-config>
  
    ...
    
    <contentMonitoring>
      <monitor>
        <name>Content Expiring Tomorrow</name>
        <query>expired_dt:[now+1d/d TO now+2d/d]</query>
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
        <query>expired_dt:[now+7d/d TO now+8d/d]</query>
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

  ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/workflow/notification-config.xml``

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
| Warn every day that content is past expiration | | ``expired_dt:[* TO now]``               |
+------------------------------------------------+-------------------------------------------+
| Warn 10 days ahead that content will expire    | | ``expired_dt:[now+10d/d TO now+11d/d]`` |
+------------------------------------------------+-------------------------------------------+
| Warn 10 days ahead AND on expire date          | | ``expired_dt:[now+10d/d TO now+11d/d]`` |
|                                                | | or                                      |
|                                                | | ``expired_dt:[now TO now+1d/d]``        |
+------------------------------------------------+-------------------------------------------+
| Everything that was modified today             | | ``modified_dt:[now-1d/d TO now]``       |
|                                                | | or                                      |
|                                                | | ``create_dt:[now-1d/d TO now]``         |
+------------------------------------------------+-------------------------------------------+
| Content that Contains an Old Trademark         | | ``*:"UNWANTED TRADEMARK"``              |
+------------------------------------------------+-------------------------------------------+

For more information on supported time units that you can use for your query, see https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#date-math