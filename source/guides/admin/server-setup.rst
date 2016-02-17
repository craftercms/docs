==================
Server Setup
==================
.. todo:: Write Server Setup guide

--------------
Studio 
--------------

--------------------------
Session Timeout
--------------------------

Crafter Studio will time a user out after inactivity based on a number of factors
#. Application Server inactivity sesstings.  See: https://tomcat.apache.org/tomcat-7.0-doc/config/manager.html
#. Crafter Studio Web.XML inactivity settings. By default, this timeout is set to 15 minutes
.. code-block:: xml
		<session-config>
        	<session-timeout>15</session-timeout>
    	</session-config>
#. External authentication configuration

------------------
Alfresco Security Timeout configuration
------------------
Alfresco is set up to use 1 hour ticket life by default.  A better model for users is to configure Alfresco to expire tickets after an inactivity period by modifying TOMCAT/shared/classes/alfresco-global.properties

.. code-block:: java
	authentication.ticket.ticketsExpire=true
	authentication.ticket.expiryMode=AFTER_FIXED_TIME
	authentication.ticket.validDuration=PT1H