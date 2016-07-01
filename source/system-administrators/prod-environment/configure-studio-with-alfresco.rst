==============================
Configure Studio with Alfresco
==============================

The following guide explains how to configure Studio to use Alfresco as the content repository. As pre-requisites,
make sure you finish the :doc:`install-studio` guide and have Alfresco already installed.

#.	Go to INSTALL_DIR/apache-tomcat/shared/classes/crafter/cstudio/extension/server-config.properties.
#.	Add the following properties to change the repository type to alfresco, and remove the current properties in
	there with the same name (remember to replace the ``{}`` with the actual values):

	.. code-block:: properties

		repositoryType=alfrescoext
		securityType=alfresco
		crafter.repository.previewRootPath={PREVIEW_CONTENT_DIR}/content
		alfrescoUrl=http://{ALFRESCO_SERVER_HOST}:{ALFRESCO_SERVER_PORT}/alfresco
		repositoryJob.password={ALFRESCO_ADMIN_USER}
		repositoryJob.username={ALFRESCO_ADMIN_PASSWORD}
