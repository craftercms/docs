.. _content-monitoring:

==================
Content Monitoring
==================

---------------------------
What is Content Monitoring?
---------------------------

Content Monitoring is a feature that allows you to configure watches and notifications on your site.
This will provide an easy way to detect unwanted or outdated content.
Crafter Studio will run the process that performs monitoring every 5 minutes and send notifications
indicating the items detected by the content monitors.
Content monitors are managed independently for each site and are highly customizable.

^^^^^^^^^^^^^^^^^^^^^^^^^^
Content Monitor Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^

Each monitor needs to define the following properties:

- name:
    General name for the content monitor.
- query:
    Solr query used to match documents, can be any valid Solr query.
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
        <name>Expired Content</name>
        <query>expired_dt:[* TO NOW]</query>
        <paths>
          <path>
            <name>Expired Content: 'About' Section</name>
            <pattern>/site/website/about/.*</pattern>
            <emailTemplate>expiredContentAboutNotice</emailTemplate>
            <emails>admin@example.com,authors@example.com</emails>
            <locale>en</locale>
          </path>
          <path>
            <name>Expired Content: All Site</name>
            <pattern>/site/.*</pattern>
            <emailTemplate>expiredContentNotice</emailTemplate>
            <emails>authors@example.com</emails>
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
on **Site Config** > **Configuration** > **Notification Configuration**

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
      
      <emailTemplate key="expiredContentNotice">
          <subject>Expired Content Notice</subject>
          <body>
            <![CDATA[
              <p>Monitor '${monitorName}' for site '${siteName}' has found the following expired items:</p>
                <ul>
                  <#list items as item>
                      <li><a href="${item.url!authoringUrl}">${item.internalName!item.id}</a></li>
                  </#list>
                </ul>
            ]]>
          </body>
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
