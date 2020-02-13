.. _crafter-core-api-content_store-children:

============
Get Children
============

Get the list of Items directly under a folder in the content store.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-----------------------------------------------------------------+
|| HTTP Verb                 || GET                                                            |
+----------------------------+-----------------------------------------------------------------+
|| URL                       || ``/api/1/content_store/children``                              |
+----------------------------+-----------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                              |
+----------------------------+-----------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+---------------------------------------+
|| Name                   || Type       || Required     || Description                          |
+=========================+=============+===============+=======================================+
|| contextId              || String     || |checkmark|  || The context id                       |
+-------------------------+-------------+---------------+---------------------------------------+
|| url                    || String     || |checkmark|  || The folder's url (e.g /site/website) |
+-------------------------+-------------+---------------+---------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: text

  GET .../api/1/content_store/children.json?contextId=405ffc233d075b010536bd2eb786b86c&url=/site/website

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "name": "articles",
      "url": "/site/website/articles",
      "descriptorUrl": "/site/website/articles.meta.xml",
      "descriptorDom": null,
      "properties": null,
      "folder": true
    },
    {
      "name": "crafter-component.xml",
      "url": "/site/website/crafter-component.xml",
      "descriptorUrl": "/site/website/crafter-component.xml",
      "descriptorDom": {
        "page": {
          "display-template": {
            "nil": "false",
            "text": "/templates/system/common/component.ftl"
          },
          "merge-strategy": "inherit-levels",
          "content-type": "/component/level-descriptor",
          "placeInNav": "false",
          "file-name": "crafter-level-descriptor.level.xml",
          "objectGroupId": "0a68",
          "objectId": "0a68e8ad-77d8-0a58-e7bf-09a71fb3077b",
          "folder-name": null,
          "header": {
            "item": {
              "key": "/site/components/headers/header.xml",
              "value": "Header",
              "include": "/site/components/headers/header.xml",
              "disableFlattening": "false"
            }
          },
          "createdDate": "3/13/2017 20:26:50",
          "createdDate_dt": "3/13/2017 20:26:50",
          "lastModifiedDate": "5/18/2017 15:38:58",
          "lastModifiedDate_dt": "5/18/2017 15:38:58",
          "left-rail": {
            "item": {
              "key": "/site/components/left-rails/left-rail-with-no-articles.xml",
              "value": "Left Rail with No Articles",
              "include": "/site/components/left-rails/left-rail-with-no-articles.xml",
              "disableFlattening": "false"
            }
          },
          "hideInAuthoring": "true"
        }
      },
      "properties": null,
      "folder": false
    },
    {
      "name": "crafter-level-descriptor.level.xml",
      "url": "/site/website/crafter-level-descriptor.level.xml",
      "descriptorUrl": "/site/website/crafter-level-descriptor.level.xml",
      "descriptorDom": {
        "component": {
          "content-type": "/component/level-descriptor",
          "display-template": null,
          "merge-strategy": "inherit-levels",
          "placeInNav": "false",
          "file-name": "crafter-level-descriptor.level.xml",
          "objectGroupId": "0a68",
          "objectId": "0a68e8ad-77d8-0a58-e7bf-09a71fb3077b",
          "folder-name": null,
          "header": {
            "item": {
              "key": "/site/components/headers/header.xml",
              "value": "Header",
              "include": "/site/components/headers/header.xml",
              "disableFlattening": "false"
            }
          },
          "createdDate": "3/13/2017 20:26:50",
          "createdDate_dt": "3/13/2017 20:26:50",
          "lastModifiedDate": "5/18/2017 15:38:58",
          "lastModifiedDate_dt": "5/18/2017 15:38:58",
          "left-rail": {
            "item": {
              "key": "/site/components/left-rails/left-rail-with-no-articles.xml",
              "value": "Left Rail with No Articles",
              "include": "/site/components/left-rails/left-rail-with-no-articles.xml",
              "disableFlattening": "false"
            }
          }
        }
      },
      "properties": null,
      "folder": false
    },
    {
      "name": "entertainment",
      "url": "/site/website/entertainment",
      "descriptorUrl": "/site/website/entertainment.meta.xml",
      "descriptorDom": null,
      "properties": null,
      "folder": true
    },
    {
      "name": "health",
      "url": "/site/website/health",
      "descriptorUrl": "/site/website/health.meta.xml",
      "descriptorDom": null,
      "properties": null,
      "folder": true
    },
    {
      "name": "index.xml",
      "url": "/site/website/index.xml",
      "descriptorUrl": "/site/website/index.xml",
      "descriptorDom": {
        "page": {
          "content-type": "/page/home",
          "display-template": "/templates/web/pages/home.ftl",
          "merge-strategy": "inherit-levels",
          "placeInNav": "false",
          "file-name": "index.xml",
          "objectGroupId": "8d7f",
          "objectId": "8d7f21fa-5e09-00aa-8340-853b7db302da",
          "folder-name": null,
          "header": {
            "item": {
              "key": "/site/components/headers/header.xml",
              "value": "Header",
              "include": "/site/components/headers/header.xml",
              "disableFlattening": "false"
            }
          },
          "createdDate": "1/31/2017 16:18:14",
          "createdDate_dt": "1/31/2017 16:18:14",
          "lastModifiedDate": "5/18/2017 15:52:21",
          "lastModifiedDate_dt": "5/18/2017 15:52:21",
          "left-rail": {
            "item": {
              "key": "/site/components/left-rails/left-rail-with-latest-articles.xml",
              "value": "Left Rail with Latest Articles",
              "include": "/site/components/left-rails/left-rail-with-latest-articles.xml",
              "disableFlattening": "false"
            }
          },
          "internal-name": "Home",
          "orderDefault_f": "-1",
          "title": "Editorial",
          "hero_text": "<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>",
          "hero_title": "<h1><span>Hi, I&rsquo;m Editorial</span></h1>\n<h3><span style=\"font-size: 1.5em;\">by HTML5 UP</span></h3>",
          "features": {
            "item": [
              {
                "value": "Quam lorem ipsum",
                "key": "/site/components/features/quam-lorem-ipsum.xml",
                "include": "/site/components/features/quam-lorem-ipsum.xml",
                "disableFlattening": "false"
              },
              {
                "key": "/site/components/features/sapien-veroeros.xml",
                "value": "Sapien Veroeros",
                "include": "/site/components/features/sapien-veroeros.xml",
                "disableFlattening": "false"
              }
            ]
          },
          "hero_image": "/static-assets/images/strawberries.jpg",
          "features_title": "Erat lacinia"
        }
      },
      "properties": null,
      "folder": false
    },
    {
      "name": "search-results",
      "url": "/site/website/search-results",
      "descriptorUrl": "/site/website/search-results.meta.xml",
      "descriptorDom": null,
      "properties": null,
      "folder": true
    },
    {
      "name": "style",
      "url": "/site/website/style",
      "descriptorUrl": "/site/website/style.meta.xml",
      "descriptorDom": null,
      "properties": null,
      "folder": true
    },
    {
      "name": "technology",
      "url": "/site/website/technology",
      "descriptorUrl": "/site/website/technology.meta.xml",
      "descriptorDom": null,
      "properties": null,
      "folder": true
    }
  ]

---------
Responses
---------

+---------+--------------------------------------+-----------------------------------------------+
|| Status || Location                            || Response Body                                |
+=========+======================================+===============================================+
|| 200    ||                                     || See example above.                           |
+---------+--------------------------------------+-----------------------------------------------+
|| 404    ||                                     || ``"No folder found at /site/website"``       |
+---------+--------------------------------------+-----------------------------------------------+
|| 500    ||                                     || ``"Internal server error"``                  |
+---------+--------------------------------------+-----------------------------------------------+
