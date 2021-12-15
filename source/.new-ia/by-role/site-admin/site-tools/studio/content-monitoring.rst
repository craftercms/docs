:is-up-to-date: False

.. index:: Content Monitoring

.. _newIa-content-monitoring:

==================
Content Monitoring
==================

---------------------------
What is Content Monitoring?
---------------------------

Content Monitoring is a feature that allows you to configure watches and notifications on your site.
This will provide an easy way to detect unwanted or outdated content.

The monitoring process always runs in Studio for all existing sites once a day at noon (time zone of the server) and sends notifications indicating the items detected by the content monitors.  Content monitors are managed independently for each site and are highly customizable.

All the built-in blueprints in Studio include a default configuration for monitors and users just need to add the field ``expired_dt`` in the content type they want monitored.  We'll take a look at an example later on of adding the ``expired_dt`` field in one of the content type of a site using the Website Editorial blueprint.

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
**Site Tools** > **Configuration** > **Site Configuration**

.. image:: /_static/images/site-admin/config-open-site-config.jpg
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

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Notification Templates Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Notification templates can be configured through Crafter Studio.  Go to the **Sidebar**, then click
on |siteConfig| > **Configuration** > **Notification Configuration**

.. figure:: /_static/images/site-admin/notification-config-open.png
  :align: center
  :alt: Configuration - Open "Notification Configuration"

|

The file can also be located in the following path:

  ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/workflow/notification-config.xml``

.. code-block:: xml
  :caption: Example Notification Template for Content Monitoring
  :linenos:

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

|

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

|

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

-----------------------------------------------------------------------------------------
Example Content Monitoring Setup for a Site Created Using the Website Editorial Blueprint
-----------------------------------------------------------------------------------------

Let's take a look at content monitoring for a site created using the Website Editorial blueprint.

Open the ``Sidebar`` then click on ``Site Config`` -> ``Configuration``, then select ``Site Configuration`` from the drop down.  Notice that the monitor is checking for content that's about to expire by looking at the ``expired_dt`` field.  The following content monitoring is setup by default in all the built-in blueprints:

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/site-config.xml*

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
     <monitor>
       <name>Content Expiring In One Month</name>
       <query>expired_dt:[now+30d/d TO now+32d/d]</query>
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
       <name>Content Expiring In Two Months</name>
       <query>expired_dt:[now+60d/d TO now+62d/d]</query>
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

|

We need to setup the ``expired_dt`` field for the content types that we want monitored.  For our example, we'll add the ``expired_dt`` field to the ``Page - Article`` content type.

Open the ``Sidebar`` then click on ``Site Config`` -> ``Content Types``.  Select the ``Page - Article`` content type.  Drag a ``Date/Time`` control into the  ``Page Properties`` form section.  Set the ``Title`` to ``Expire Date`` and the ``Name/Variable Name`` to ``expired_dt``.  Save your changes.

.. figure:: /_static/images/site-admin/content-mon-add-field-exp.png
   :align: center
   :alt: Content Monitoring - Add "expired_dt" field to content type

|

We have a monitor for content expiring tomorrow as shown above.  We'll set one of the articles to expire the next day.  For our example. we'll set the ``Expire Date`` of the article *Top Books For Young Women*

.. figure:: /_static/images/site-admin/content-mon-update-article-exp.png
   :align: center
   :alt: Content Monitoring - Set article to expire the next day

|

The monitoring process of Studio runs everyday at noon (based on the server time zone).  To test right away if the monitors are working as expected, we can call the :ref:`monitor-content <crafter-studio-api-site-monitor-content>` API.

Enter the following in your browser: `http://localhost:8080/studio/api/1/services/api/1/site/monitor-content.json`

You should see the following response, where the article we set to expire the next day should be listed in the response:

.. code-block:: text
   :caption: *monior-content API response*

   [{"siteId":"mysite","contentMonitoring":{"monitors":[{"name":"All Site","emails":"admin@example.com","items":[{"id":"/site/website/articles/2016/12/top-books-for-young-women/index.xml","internalName":"Top Books For Young Women","url":"http://localhost:8080/preview/#/?page=/articles/2016/12/top-books-for-young-women&site=mysite"}]}]}}]

|

If you have setup a mail server, you should also receive an email about the article about to expire, similar to the email example shown above.

You can also check the tomcat log to see the results of the monitoring process:

.. code-block:: text

   [INFO] 2020-08-07T17:05:09,474 [http-nio-8080-exec-5] [impl.GroovyScript] | executing monitor: Content Expiring Tomorrow
   [INFO] 2020-08-07T17:05:10,434 [http-nio-8080-exec-5] [impl.GroovyScript] | content monitor (Content Expiring Tomorrow) found 2 items
   [INFO] 2020-08-07T17:05:10,453 [http-nio-8080-exec-5] [impl.GroovyScript] | content monitor: Content Expiring Tomorrow Sending notification (contentExpiringSoon)
   [INFO] 2020-08-07T17:05:10,488 [http-nio-8080-exec-5] [impl.GroovyScript] | executing monitor: Content Expiring In One Week
   [INFO] 2020-08-07T17:05:10,503 [http-nio-8080-exec-5] [impl.GroovyScript] | content monitor (Content Expiring In One Week) found 0 items
   [INFO] 2020-08-07T17:05:10,505 [http-nio-8080-exec-5] [impl.GroovyScript] | executing monitor: Content Expiring In One Month
   [INFO] 2020-08-07T17:05:10,516 [http-nio-8080-exec-5] [impl.GroovyScript] | content monitor (Content Expiring In One Month) found 0 items
   [INFO] 2020-08-07T17:05:10,518 [http-nio-8080-exec-5] [impl.GroovyScript] | executing monitor: Content Expiring In Two Months
   [INFO] 2020-08-07T17:05:10,528 [http-nio-8080-exec-5] [impl.GroovyScript] | content monitor (Content Expiring In Two Months) found 0 items
