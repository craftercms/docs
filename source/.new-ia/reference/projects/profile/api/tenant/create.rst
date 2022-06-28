:is-up-to-date: True

.. _newIa-crafter-profile-api-tenant-create:

=============
Create Tenant
=============

Creates the given tenant.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/tenant/create``                                         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+------------------------+-------------+---------------+-----------------------------------------+
|| Name                  || Type       || Required     || Description                            |
+========================+=============+===============+=========================================+
|| accessTokenId         || String     || |checkmark|  || The access token ID of the application |
||                       ||            ||              || making the call                        |
+------------------------+-------------+---------------+-----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST .../api/1/tenant/create?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d``

.. code-block:: json
  :linenos:

  {
      "name" : "sample-tenant",
      "verifyNewProfiles" : false,
      "availableRoles" : [
  			"APP_ADMIN",
  			"APP_USER"
      ],
      "attributeDefinitions" : [
          {
              "name" : "firstName",
              "metadata" : {
                  "label" : "First Name",
                  "type" : "TEXT",
                  "displayOrder" : 0.0
              },
              "permissions" : [
                  {
                      "application" : "*",
                      "allowedActions" : [
                          "*"
                      ]
                  }
              ]
          },
          {
              "name" : "lastName",
              "metadata" : {
                  "label" : "Last Name",
                  "type" : "TEXT",
                  "displayOrder" : 1.0
              },
              "permissions" : [
                  {
                      "application" : "*",
                      "allowedActions" : [
                          "*"
                      ]
                  }
              ]
          },
          {
              "name" : "avatarLink",
              "metadata" : {
                  "label" : "Avatar Link",
                  "type" : "TEXT",
                  "displayOrder" : 3.0
              },
              "permissions" : [
                  {
                      "application" : "*",
                      "allowedActions" : [
                          "*"
                      ]
                  }
              ]
          }
      ]
  }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
  	"name": "sample-tenant",
  	"verifyNewProfiles": false,
  	"availableRoles": [
  		"APP_ADMIN",
  		"APP_USER"
  	],
  	"ssoEnabled": false,
  	"attributeDefinitions": [
  		{
  			"permissions": [
  				{
  					"allowedActions": [
  						"*"
  					],
  					"application": "*"
  				}
  			],
  			"name": "firstName",
  			"metadata": {
  				"label": "First Name",
  				"type": "TEXT",
  				"displayOrder": 0.0
  			},
  			"defaultValue": null
  		},
  		{
  			"permissions": [
  				{
  					"allowedActions": [
  						"*"
  					],
  					"application": "*"
  				}
  			],
  			"name": "lastName",
  			"metadata": {
  				"label": "Last Name",
  				"type": "TEXT",
  				"displayOrder": 1.0
  			},
  			"defaultValue": null
  		},
  		{
  			"permissions": [
  				{
  					"allowedActions": [
  						"*"
  					],
  					"application": "*"
  				}
  			],
  			"name": "avatarLink",
  			"metadata": {
  				"label": "Avatar Link",
  				"type": "TEXT",
  				"displayOrder": 3.0
  			},
  			"defaultValue": null
  		}
  	],
  	"id": "5926ee77d4c6ad51e5e44f45"
  }

---------
Responses
---------

+---------+----------------------+---------------------------------------------------------------+
|| Status || Location            || Response Body                                                |
+=========+======================+===============================================================+
|| 200    |                      | See example above.                                            |
+---------+----------------------+---------------------------------------------------------------+
|| 400    |                      | .. code-block:: json                                          |
||        |                      |                                                               |
||        |                      |   {"errorCode":"TENANT_EXISTS", "message":"The tenant         |
||        |                      |   \"sample-tenant\" already exists"}                          |
+---------+----------------------+---------------------------------------------------------------+
|| 500    |                      | ``{ "message" : "Internal server error" }``                   |
+---------+----------------------+---------------------------------------------------------------+
