.. _content-monitoring:

==================
Content Monitoring
==================

.. TODO:: This article requires editing and clean up

--------------------------
What is Content Monitoring
--------------------------

Content Monitoring allows you to configure watches and notifications on your content.
Each day Crafter Studio will run a process that performs monitoring.  Each site can configure the monitors that run against the site.
A monitor defines the query to run, the paths that matter and the notification to be sent for items that match.

-----------------------------------
How to Configure Content Monitoring
-----------------------------------

Content monitoring can be configured through Crafter Studio.  Go to the **Sidebar**, then click on **Site Confirg** -> **Configuration** -> **Site Configuration**

.. image:: /_static/images/site-configuration-open.png
    :align: center
    :alt: Configuration - Open "Site Configuration" Configuration


``{REPOSITORY_ROOT}/sites/SITENAME/config/studio/site-config.xml``

.. code-block:: xml

	<site-config>
	.
	.
	.

	    <contentMonitoring>
	        <monitor>
	            <!-- this query will email every expired item, every day -->
	             <name>Expired Content</name>
	            <query>expired_dt:[* TO NOW]</query>
	            <paths>
	                <path>
	                    <name>Expired About Content</name>
	                    <pattern>/site/website/about/.*</pattern>
	                    <notificationMessageId>expiredContentAboutNotice</notificationMessageId>
	                    <notifyEmail>USERNAME</notifyEmail>
	                </path>
	                <path>
	                    <name>Expired ALL Content</name>
	                    <pattern>/site/.*</pattern>
	                    <notificationMessageId>expiredContentNotice</notificationMessageId>
	                    <notifyEmail>USERNAME</notifyEmail>
	                </path>
	            </paths>
	        </monitor>
	    </contentMonitoring>
	</site-config>


^^^^^^^^^^^^^^^^^
Multiple Monitors
^^^^^^^^^^^^^^^^^

You can define as many monitor groups as you want. Each monitor must have at least one paths/path item.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Notification Messages Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Templates for the notifications are defined in ````{REPOSITORY_ROOT}/sites/SITENAME/config/studio/notification-config.xml``

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
