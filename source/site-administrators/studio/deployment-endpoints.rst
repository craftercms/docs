====================
Deployment Endpoints
====================

------
Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/deployment/endpoints-config.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <config>
        <endpoint>
            <name>sample</name>
            <type>craftercms-deployer</type>
            <server-url>http://localhost:9191/publish</server-url>
            <status-url>http://localhost:9191/api/1/monitoring/status</status-url>
            <version-url>http://localhost:9191/api/1/version</version-url>
            <bucket-size>10</bucket-size>
            <password>admin</password>
            <target>sample</target>
            <send-metadata>false</send-metadata>
        </endpoint>
    </config>

-----------
Description
-----------

    ``/config/endpoint/name``
        Endpoint name
    ``/config/endpoint/type``
        Type of deployer (the only possible value is ``craftercms-deployer``)
    ``/config/endpoint/server-url``
        Url to publish content
    ``/config/endpoint/status-url``
        Url to check deployers' checking status
    ``/config/endpoint/version-url``
        Url to check target's version for deployment sync
    ``/config/endpoint/bucket-size``
        Number of files to be sent per one publishing http request
    ``/config/endpoint/password``
        Password for target
    ``/config/endpoint/target``
        Target name
    ``/config/endpoint/send-metadata``
        Send metadata with file content

Deployment endpoints configuration is stored in configuration space of the site (relative path: deployment/endpoints-config.xml). Configuration file should contain configuration for all endpoints used to deploy content to different publishing environments.
Each endpoint configuration is separated by ``<endpoint>`` elements in configuration file. Endpoint is identified in the system by its name (``/config/endpoint/name``). Endpoint name is used in publishing environment configuration to reference endpoints which belong to a publishing environment (channel).
Type of deployer is an inessential value since only possible value is ``craftercms-deployer``. This endpoint property is reserved for future use.
Server URL is URL of the deployment agent's service that is used for publishing content. Authoring will publish content by sending HTTP request containing content files to this URL.
Status URL is URL of the deployment agent's service that is used to check agent's status (if it is available). Authoring is using this servis to determine if deployment agent is accessible before publishing content.
Version URL is URL of the deployment agent's service that is used to determine which version of content is currently available (deployed) on the deployment agent's target. Version is a timestamp of the last deployment that was performed on selected endpoint. It is used to synchronize content deployed on endpoint with publishing queue. Meaning of version value is how far behind the deployment queue is selected endpoint.
Bucket size defines maximum number of files that can be sent within one HTTP request when publishing content. If deployment package has more files than the this value, package is divided and sent using required number of HTTP requests to deploy all content files. Deployment is successful only of all HTTP requests are successful.
Password represents password value that is configured for deployment agent's target. It needs to be sent as parameter with HTTP request when publishing content in order to "authenticate" service call.
Target name represents name of the deployment agent's target where content files will be deployed. This value needs to match name of the target as it is defined in deployment agent's target configuration.
Send metadata is a flag that defines whether file metadata should be sent together with content file. When value set to true, it will send file metadata with content file. Currently it is not in use (legacy functionality).
