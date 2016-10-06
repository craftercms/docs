==============================
Configure Studio with Alfresco
==============================

The following guide explains how to configure Studio to use Alfresco as the content repository. As pre-requisites,
make sure you finish the :doc:`install-studio` guide and have Alfresco already installed.

	1.	Go to INSTALL_DIR/apache-tomcat/shared/classes/crafter/cstudio/extension/server-config.properties.
	2.	Add the following properties to change the repository type to alfresco, and remove the current properties in
	there with the same name (remember to replace the ``{}`` with the actual values):

	.. code-block:: properties

		repositoryType=alfrescoext
		securityType=alfresco
		crafter.repository.previewRootPath={PREVIEW_CONTENT_DIR}/content
		alfrescoUrl=http://{ALFRESCO_SERVER_HOST}:{ALFRESCO_SERVER_PORT}/alfresco
		repositoryJob.password={ALFRESCO_ADMIN_USER}
		repositoryJob.username={ALFRESCO_ADMIN_PASSWORD}

---------------
Session Timeout
---------------

Crafter Studio will time a user out after inactivity based on a number of factors
	1. Application Server inactivity settings.  See: https://tomcat.apache.org/tomcat-7.0-doc/config/manager.html
	2. Crafter Studio Web.XML inactivity settings. By default, this timeout is set to 15 minutes

.. code-block:: xml

	<session-config>
        	<session-timeout>15</session-timeout>
    	</session-config>

#. External authentication configuration

---------------------------------------
Alfresco Security Timeout Configuration
---------------------------------------

Alfresco is set up to use 1 hour ticket life by default.  A better model for users is to configure Alfresco to expire tickets after an inactivity period by modifying TOMCAT/shared/classes/alfresco-global.properties

.. code-block:: java

	authentication.ticket.ticketsExpire=true
	authentication.ticket.expiryMode=AFTER_INACTIVITY
	authentication.ticket.validDuration=PT1H

or

.. code-block:: java

	authentication.ticket.expiryMode=DO_NOT_EXPIRE
	authentication.ticket.ticketsExpire=false
	authentication.ticket.useSingleTicketPerUser=false
	authentication.ticket.validDuration=PT1H
