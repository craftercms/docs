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