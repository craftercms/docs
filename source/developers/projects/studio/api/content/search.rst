.. _crafter-studio-api-content-search:

==============
Search Content
==============

Search content.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/content/search.json``                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || N/A                                                              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-----------------+-------------+---------------+--------------------------------------------------+
|| Name           || Type       || Required     || Description                                     |
+=================+=============+===============+==================================================+
|| site_id        || String     || |checkmark|  || Site to use                                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| contentTypes   || String     || |checkmark|  || Filter results by specified content types       |
+-----------------+-------------+---------------+--------------------------------------------------+
|| includeAspects || String     || |checkmark|  || Filter by included aspects                      |
+-----------------+-------------+---------------+--------------------------------------------------+
|| excludeAspects || String     || |checkmark|  || Filter by excluded aspects                      |
+-----------------+-------------+---------------+--------------------------------------------------+
|| keyword        || String     || |checkmark|  || Search by keyword                               |
+-----------------+-------------+---------------+--------------------------------------------------+
|| page           || int        || |checkmark|  || Results page number                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| pageSize       || String     || |checkmark|  || Number of results per page                      |
+-----------------+-------------+---------------+--------------------------------------------------+
|| sortBy         || String     || |checkmark|  || Sort results                                    |
+-----------------+-------------+---------------+--------------------------------------------------+
|| sortAscending  || String     || |checkmark|  || Sort order                                      |
+-----------------+-------------+---------------+--------------------------------------------------+
|| filters        || String     || |checkmark|  || Filter results by                               |
+-----------------+-------------+---------------+--------------------------------------------------+
|| columns        || String     || |checkmark|  || Display columns of results set                  |
+-----------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: guess

    POST ../api/1/services/api/1/content/search.json?site_id=mysite

.. code-block:: json

    {
        "contentTypes": [ ],
        "includeAspects": [ ],
        "excludeAspects": [ ],
        "keyword": "example",
        "page": "1",
        "pageSize": "20",
        "sortBy": "",
        "sortAscending": "true",
        "filters": [],
        "columns":[]
    }


^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {
        "objectList":
            [
                {
                    "item":
                        {
                            "id" : "mysite:/site/website/index.xml",
                            "rootId" : "mysite:/site/website/index.xml",
                            "crafterSite" : "mysite",
                            "localId" : "/site/website/index.xml",
                            "crafterPublishedDate" : "2017-12-22T21:49:43.989Z",
                            "crafterPublishedDate_dt" : 1513979383989,
                            "content-type" : "/page/home",
                            "display-template" : "/templates/web/pages/home.ftl",
                            "merge-strategy" : "inherit-levels",
                            "placeInNav" : "false",
                            "file-name" : "index.xml",
                            "objectGroupId" : "8d7f",
                            "objectId" : "8d7f21fa-5e09-00aa-8340-853b7db302da",
                            "header.item.key" : "/site/components/headers/header.xml",
                            "header.item.value" : "Header",
                            "header.item.component.content-type" : "/component/header",
                            "header.item.component.display-template" : "/templates/web/components/header.ftl",
                            "header.item.component.merge-strategy" : "inherit-levels",
                            "header.item.component.objectGroupId" : "af02",
                            "header.item.component.objectId" : "af023d71-d5ea-f8e5-2ec9-07a8b239d0c5",
                            "header.item.component.file-name" : "header.xml",
                            "header.item.component.internal-name" : "Header",
                            "header.item.component.business_name" : "Editorial",
                            "header.item.component.social_media_links.item.url" : [
                                "http://twitter.com",
                                "http://facebook.com",
                                "http://plus.google.com"
                            ],
                            "header.item.component.social_media_links.item.social_media" : [
                                "fa-twitter",
                                "fa-facebook",
                                "fa-google-plus"
                            ],
                            "header.item.component.createdDate" : "2017-2-3T23:27:50.000Z",
                            "header.item.component.createdDate_dt" : 1486164470000,
                            "header.item.component.lastModifiedDate" : "2017-3-13T20:37:41.000Z",
                            "header.item.component.lastModifiedDate_dt" : 1489437461000,
                            "header.item.disableFlattening" : "false",
                            "createdDate" : "2017-1-31T16:18:14.000Z",
                            "createdDate_dt" : 1485879494000,
                            "lastModifiedDate" : "2017-12-22T21:49:29.275Z",
                            "lastModifiedDate_dt" : 1513979369275,
                            "left-rail.item.key" : "/site/components/left-rails/left-rail-with-latest-articles.xml",
                            "left-rail.item.value" : "Left Rail with Latest Articles",
                            "left-rail.item.component.content-type" : "/component/left-rail",
                            "left-rail.item.component.display-template" : "/templates/web/components/left-rail.ftl",
                            "left-rail.item.component.merge-strategy" : "inherit-levels",
                            "left-rail.item.component.objectGroupId" : "458a",
                            "left-rail.item.component.objectId" : "458af2ea-368d-9167-0233-b1d346f5baaa",
                            "left-rail.item.component.file-name" : "left-rail-with-latest-articles.xml",
                            "left-rail.item.component.internal-name" : "Left Rail with Latest Articles",
                            "left-rail.item.component.createdDate" : "2017-3-17T18:23:14.000Z",
                            "left-rail.item.component.createdDate_dt" : 1489774994000,
                            "left-rail.item.component.lastModifiedDate" : "2017-5-18T15:53:42.000Z",
                            "left-rail.item.component.lastModifiedDate_dt" : 1495122822000,
                            "left-rail.item.component.widgets.item.key" : [
                                "/site/components/articles-widget/latest-articles-widget.xml",
                                "/site/components/contacts/contact-widget.xml"
                            ],
                            "left-rail.item.component.widgets.item.value" : [
                                "Latest Articles Widget",
                                "Contact Widget"
                            ],
                            "left-rail.item.component.widgets.item.component.content-type" : [
                                "/component/articles-widget",
                                "/component/contact-widget"
                            ],
                            "left-rail.item.component.widgets.item.component.display-template" : [
                                "/templates/web/components/articles-widget.ftl",
                                "/templates/web/components/contact-widget.ftl"
                            ],
                            "left-rail.item.component.widgets.item.component.merge-strategy" : [
                                "inherit-levels",
                                "inherit-levels"
                            ],
                            "left-rail.item.component.widgets.item.component.objectGroupId" : [
                                "cb76",
                                "3756"
                            ],
                            "left-rail.item.component.widgets.item.component.objectId" : [
                                "cb760193-06a0-e1d9-6653-0f0dd1e2650e",
                                "37562d94-04ad-289b-eb35-d76b91b86431"
                            ],
                            "left-rail.item.component.widgets.item.component.file-name" : [
                                "latest-articles-widget.xml",
                                "contact-widget.xml"
                            ],
                            "left-rail.item.component.widgets.item.component.internal-name" : [
                                "Latest Articles Widget",
                                "Contact Widget"
                            ],
                            "left-rail.item.component.widgets.item.component.title" : [
                                "Latest Articles",
                                "Contact Us"
                            ],
                            "left-rail.item.component.widgets.item.component.max_articles" : "3",
                            "left-rail.item.component.widgets.item.component.scripts.item.key" : "/scripts/components/latest-articles.groovy",
                            "left-rail.item.component.widgets.item.component.scripts.item.value" : "latest-articles.groovy",
                            "left-rail.item.component.widgets.item.component.createdDate" : [
                                "2017-3-28T22:27:45.000Z",
                                "2017-3-28T21:12:5.000Z"
                            ],
                            "left-rail.item.component.widgets.item.component.lastModifiedDate" : [
                                "2017-3-28T22:27:45.000Z",
                                "2017-3-28T21:22:31.000Z"
                            ],
                            "left-rail.item.component.widgets.item.disableFlattening" : [
                                "false",
                                "false"
                            ],
                            "left-rail.item.component.widgets.item.component.email" : "info@example.com",
                            "left-rail.item.component.widgets.item.component.phone" : "(999) 999-9999",
                            "left-rail.item.component.widgets.item.component.text_html" : "\nSed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.\n","left-rail.item.component.widgets.item.component.address":"<p>5321 Somewhere Road #789<br /> Reston, Virginia</p>",
                            "left-rail.item.component.widgets.item.component.address_html" : "\n5321 Somewhere Road #789\nReston, Virginia\n",
                            "left-rail.item.disableFlattening" : "false",
                            "internal-name" : "Home example",
                            "orderDefault_f" : -1.0,
                            "title" : "Editorial",
                            "hero_text" : "<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>",
                            "hero_title" : "<h1><span>Hi, I&rsquo;m Editorial</span></h1> <h3><span style=\"font-size: 1.5em;\">by HTML5 UP</span></h3>",
                            "features.item.value" : [
                                "Two",
                                "Three"
                            ],
                            "features.item.key" : [
                                "/site/components/features/quam-lorem-ipsum.xml",
                                "/site/components/features/sapien-veroeros.xml"
                            ],
                            "features.item.component.content-type" : [
                                "/component/feature",
                                "/component/feature"
                            ],
                            "features.item.component.display-template" : [
                                "/templates/web/components/feature.ftl",
                                "/templates/web/components/feature.ftl"
                            ],
                            "features.item.component.merge-strategy" : [
                                "inherit-levels",
                                "inherit-levels"
                            ],
                            "features.item.component.objectGroupId" : [
                                "036c",
                                "0496"
                            ],
                            "features.item.component.objectId" : [
                                "036cd26c-48e9-7b34-ae54-757183317d38",
                                "04967205-0cdf-991e-3bfd-8096b700a609"
                            ],
                            "features.item.component.icon" : [
                                "fa-users",
                                "fa-paper-plane"
                            ],
                            "features.item.component.internal-name" : [
                                "Two",
                                "Three"
                            ],
                            "features.item.component.title" : [
                                "Two",
                                "Three"
                            ],
                            "features.item.component.file-name" : [
                                "quam-lorem-ipsum.xml",
                                "sapien-veroeros.xml"
                            ],
                            "features.item.component.body_html" : [
                                "\nAenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.\n",
                                "\nAenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.\n"
                            ],
                            "features.item.component.createdDate" : [
                                "2017-3-27T14:9:16.000Z",
                                "2017-3-23T20:46:31.000Z"
                            ],
                            "features.item.component.lastModifiedDate" : [
                                "2017-3-27T14:9:16.000Z",
                                "2017-3-23T20:46:31.000Z"
                            ],
                            "features.item.disableFlattening" : [
                                "false",
                                "false"
                            ],
                            "hero_image" : "/static-assets/images/strawberries.jpg",
                            "features_title" : "Erat lacinia",
                            "disabled" : "false",
                            "left-rail.item.component.widgets.item.component.createdDate_dts" : [
                                1490740065000,
                                1490735525000
                            ],
                            "left-rail.item.component.widgets.item.component.lastModifiedDate_dts" : [
                                1490740065000,
                                1490736151000
                            ],
                            "features.item.component.createdDate_dts" : [
                                1490623756000,
                                1490301991000
                            ],
                            "features.item.component.lastModifiedDate_dts" : [
                                1490623756000,
                                1490301991000
                            ],
                            "_version_" : 1587522446557184000,
                            "path" : "/site/website/index.xml",
                            "name" : "/site/website/index.xml",
                            "internalName" : "Home example",
                            "contentType" : "/page/home",
                            "lastEditDate" : "2017-12-22T21:49:29.275Z"
                        }
                }
        ],
        "query" : "crafterSite:\"mysite\"  AND (localId: (\"example\" OR *example* OR (example)) OR internal-name: (\"example\" OR *example* OR (example)) OR title: (\"example\" OR *example* OR (example)) OR _text_main_: (\"example\" OR *example* OR (example)))",
        "resultCount" : 1,
        "pageTotal" : 1,
        "resultPerPage" : 20,
        "searchFailed" : false
    }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
