.. _crafter-studio-api-site-write-configuration:

===================
Write Configuration
===================

Write site configuration.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/write-configuration.json``          |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin                                                            |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site         || String     || |checkmark|  || Site ID to use                                  |
+---------------+-------------+---------------+--------------------------------------------------+
|| path         || String     || |checkmark|  || Path where to save configuration file           |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

.. code-block:: guess

	POST .../api/1/services/api/1/site/write-configuration.json?site=mysite&path=/config/studio/site-config.xml

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- site-config.xml
        This contains the primary site configuration.

    -->
    <site-config>
        <wem-project>mysite</wem-project>
        <display-name>mysite</display-name>
        <default-timezone>EST5EDT</default-timezone>
        <repository rootPrefix="/site">
            <!-- default inheritance file name -->
            <level-descriptor>crafter-level-descriptor.level.xml</level-descriptor>
            <!-- The section below classifies items into folders for two dashboard widgets:
                - Items Waiting For Approval
                - Approved Scheduled Items
                Items that match the paths specified will be grouped together in the dashboard widget
            -->
            <folders>
                <folder name="Pages" path="/website" read-direct-children="false" attach-root-prefix="true"/>
                <folder name="Components" path="/components" read-direct-children="false" attach-root-prefix="true"/>
                <folder name="Assets" path="/static-assets" read-direct-children="false" attach-root-prefix="false"/>
                <folder name="Templates" path="/templates" read-direct-children="false" attach-root-prefix="false"/>
            </folders>
            <!-- Item Patterns -->
            <patterns>
                <!-- The section below helps determine the type of content based on regex. This shows up in two places:
                    - The activity audit log.
                    - The UI icon used for the item
                -->
                <pattern-group name="page">
                    <pattern>/site/website/([^&lt;]+)\.xml</pattern>
                </pattern-group>
                <pattern-group name="component">
                    <pattern>/site/components/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/system/page-components/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/component-bindings/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/indexes/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/resources/([^&lt;]+)\.xml</pattern>
                </pattern-group>
                <pattern-group name="asset">
                    <pattern>/static-assets/([^&lt;"'\)]+)</pattern>
                </pattern-group>
                <pattern-group name="rendering-template">
                    <pattern>/templates/([^&lt;"]+)\.ftl</pattern>
                </pattern-group>
                <pattern-group name="scripts">
                    <pattern>/scripts/([^&lt;"]+)\.groovy</pattern>
                </pattern-group>
                <!-- The section below enumerates the mime-types we can preview -->
                <pattern-group name="previewable-mimetypes">
                    <pattern>image/(.*)</pattern>
                    <pattern>application/pdf</pattern>
                    <pattern>video/(.*)</pattern>
                    <pattern>application/msword</pattern>
                    <pattern>application/vnd.openxmlformats-officedocument.wordprocessingml.document</pattern>
                    <pattern>application/vnd.ms-excel</pattern>
                    <pattern>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pattern>
                    <pattern>application/vnd.ms-powerpoint</pattern>
                </pattern-group>
            </patterns>
            <!-- The patterns below identify what is allowed to show up in the Dashboard widgets -->
            <display-in-widget-patterns>
                <display-in-widget-pattern>.*</display-in-widget-pattern>
            </display-in-widget-patterns>
        </repository>
        <contentMonitoring>
            <monitor>
                <name>Content Expiring Tomorrow</name>
                <query>expired_dt:[NOW/DAY+1DAY TO NOW/DAY+2DAY]</query>
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
                <query>expired_dt:[NOW/DAY+7DAYS TO NOW/DAY+8DAYS]</query>
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
                <query>expired_dt:[NOW/DAY+30DAYS TO NOW/DAY+32DAYS]</query>
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
                <query>expired_dt:[NOW/DAY+60DAYS TO NOW/DAY+62DAYS]</query>
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
    </site-config>

--------
Response
--------

.. code-block:: json

    { "result" : true }

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example                                      |
+---------+-------------------------------------------+---------------------------------------------------+
