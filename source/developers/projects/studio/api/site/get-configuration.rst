.. _crafter-studio-api-site-get-configuration:

=================
Get Configuration
=================

Get configuration.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/get-configuration.json``            |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || N/A                                                              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+
|| path         || String     || |checkmark|  || Path of the configuration file                  |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    GET .../api/1/services/api/1/site/get-configuration.json?site_id=mysite&path=/site-config.xml

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {
        "contentMonitoring": {
            "monitor": [
                {
                    "paths": {
                        "path": {
                            "emails": "admin@example.com",
                            "emailTemplate": "contentExpiringSoon",
                            "name": "All Site",
                            "pattern": "/site/.*",
                            "locale": "en"
                        }
                    },
                    "query": "expired_dt:[NOW/DAY+1DAY TO NOW/DAY+2DAY]",
                    "name": "Content Expiring Tomorrow"
                },
                {
                    "paths": {
                        "path": {
                            "emails": "admin@example.com",
                            "emailTemplate": "contentExpiringSoon",
                            "name": "All Site",
                            "pattern": "/site/.*",
                            "locale": "en"
                        }
                    },
                    "query": "expired_dt:[NOW/DAY+7DAYS TO NOW/DAY+8DAYS]",
                    "name": "Content Expiring In One Week"
                },
                {
                    "paths": {
                        "path": {
                            "emails": "admin@example.com",
                            "emailTemplate": "contentExpiringSoon",
                            "name": "All Site",
                            "pattern": "/site/.*",
                            "locale": "en"
                        }
                    },
                    "query": "expired_dt:[NOW/DAY+30DAYS TO NOW/DAY+32DAYS]",
                    "name": "Content Expiring In One Month"
                },
                {
                    "paths": {
                        "path": {
                            "emails": "admin@example.com",
                            "emailTemplate": "contentExpiringSoon",
                            "name": "All Site",
                            "pattern": "/site/.*",
                            "locale": "en"
                        }
                    },
                    "query": "expired_dt:[NOW/DAY+60DAYS TO NOW/DAY+62DAYS]",
                    "name": "Content Expiring In Two Months"
                }
            ]
        },
        "display-name": "mysite",
        "wem-project": "mysite",
        "default-timezone": "EST5EDT",
        "repository": {
            "display-in-widget-patterns": {
                "display-in-widget-pattern": ".*"
            },
            "folders": {
                "folder": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            "patterns": {
                "pattern-group": [
                    {
                        "pattern": "/site/website/([^<]+)\\.xml"
                    },
                    {
                        "pattern": [
                            "/site/components/([^<]+)\\.xml",
                            "/site/system/page-components/([^<]+)\\.xml",
                            "/site/component-bindings/([^<]+)\\.xml",
                            "/site/indexes/([^<]+)\\.xml",
                            "/site/resources/([^<]+)\\.xml"
                        ]
                    },
                    {
                        "pattern": "/static-assets/([^<\"'\\)]+)"
                    },
                    {
                        "pattern": "/templates/([^<\"]+)\\.ftl"
                    },
                    {
                        "pattern": "/scripts/([^<\"]+)\\.groovy"
                    },
                    {
                        "pattern": [
                            "image/(.*)",
                            "application/pdf",
                            "video/(.*)",
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            "application/vnd.ms-excel",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "application/vnd.ms-powerpoint"
                        ]
                    }
                ]
            },
            "level-descriptor": "crafter-level-descriptor.level.xml"
        }
    }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
