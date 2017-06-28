.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-engine-api-site-content_store-descriptor:

==============
Get Descriptor
==============

Get the descriptor data of an Item in the content store.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/site/content_store/descriptor``                         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                                |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| url              || String     || |checkmark|  || The item's url (e.g /site/website/index.xml)|
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/content_store/descriptor.json?url=/site/website/index.xml``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
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
  }

---------
Responses
---------

<<<<<<< HEAD
+---------+-----------------------------------------------------------------+
|| Status || Response Body                                                  |
+=========+=================================================================+
|| 200    || See example above.                                             |
+---------+-----------------------------------------------------------------+
|| 404    || ``{ "message": "No item found at /site/website/index.xml" }``  |
+---------+-----------------------------------------------------------------+
|| 500    || ``{ "message": "..." }``                                       |
+---------+-----------------------------------------------------------------+
=======
+--------+--------------------------------------+------------------------------------------------+
|| Status|| Location                            || Response Body                                 |
+========+======================================+================================================+
|| 200   ||                                     || See example above.                            |
+--------+--------------------------------------+------------------------------------------------+
|| 404   ||                                     || ``"No item found at /site/website/index.xml"``|
+--------+--------------------------------------+------------------------------------------------+
|| 500   ||                                     || ``"Internal server error"``                   |
+--------+--------------------------------------+------------------------------------------------+
>>>>>>> 2e0d0368b6fa6dcf25376c796fbe1043c31b2971
