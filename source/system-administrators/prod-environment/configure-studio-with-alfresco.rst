:orphan:

==============================
Configure Studio with Alfresco
==============================

The following guide explains how to configure Studio to use Alfresco as the content repository. As pre-requisites,
make sure you finish the :doc:`install-studio` guide and have Alfresco already installed.

    #.  Go to INSTALL_DIR/apache-tomcat/shared/classes/crafter/cstudio/extension/server-config.properties.
    #.	Add the following properties to change the repository type to alfresco, and remove the current properties in
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

	#.  Application server inactivity settings. See: https://tomcat.apache.org/tomcat-7.0-doc/config/manager.html
	#.  Crafter Studio web.xml inactivity settings. By default, this timeout is set to 15 minutes:

        .. code-block:: xml

            <session-config>
                <session-timeout>15</session-timeout>
            </session-config>

---------------------------------------
Alfresco Security Timeout Configuration
---------------------------------------

Alfresco is set up to use 1 hour ticket life by default.  A better model for users is to configure Alfresco to expire
tickets after an inactivity period by modifying TOMCAT/shared/classes/alfresco-global.properties

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

--------------
Single-Sign On
--------------

For SSO to work with both Studio and Alfresco, Alfresco's authentication needs to be configured as external in
the authentication chain. You can check with more detail how to do this in
http://docs.alfresco.com/5.1/concepts/auth-basics.html, but you need at least this properties in
Alfresco's TOMCAT/shared/classes/alfresco-global.properties file:

.. code-block:: properties

    authentication.chain=alfrescoNtlm1:alfrescoNtlm,external1:external
    external.authentication.proxyUserName=
    external.authentication.enabled=true
    external.authentication.defaultAdministratorUserNames=admin
    external.authentication.proxyHeader={USER_HEADER}

Please replace ``{USER_HEADER}`` with the actual user header name (e.g. SiteMinder's user header is ``SM_USER``).

After you've configured Alfresco, you need to configure Studio so that it forwards the user header to Alfresco
in every call (add this to Studio's TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties):

.. code-block:: properties

    # If SSO is enabled
    crafter.studio.sso.enabled=true
    # The name of the SSO header
    crafter.studio.sso.headerName={USER_HEADER}
    # The name of the Alfresco External Authentication header that should be used on calls to the Alfresco API
    crafter.studio.sso.alfresco.externalAuth.headerName={USER_HEADER}
    # The regular expression used to extract the actual username. The first group will be the actual username
    crafter.studio.sso.username.pattern=

One important property to point out is the ``crafter.studio.sso.username.pattern``. Sometimes the username passed
by the SSO and Alfresco's respective username are slightly different, so this regex pattern can be used to extract
the username that Studio finally transmits to Alfresco. For example, let's assume the SSO user name includes a
Windows domain, like ``MYDOMAIN\MYUSER``, and you only need MYUSER for Alfresco, then your regex should look
like this: ``\\w+\\\\(\\w+)``.
