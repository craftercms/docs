.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-core-api-content_store-item:

========
Get Item
========

Get an Item from the content store.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || GET                                                        |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/content_store/item``                              |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                          |
+----------------------------+-------------------------------------------------------------+

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

``GET .../api/1/content_store/item.xml?contextId=405ffc233d075b010536bd2eb786b86c&url=/site/website/index.xml``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: xml

  <item>
    <name>index.xml</name>
    <url>/site/website/index.xml</url>
    <descriptorUrl>/site/website/index.xml</descriptorUrl>
    <descriptorDom>
      <page>
        <content-type>/page/home</content-type>
        <display-template>/templates/web/pages/home.ftl</display-template>
        <merge-strategy>inherit-levels</merge-strategy>
        <placeInNav>false</placeInNav>
        <file-name>index.xml</file-name>
        <objectGroupId>8d7f</objectGroupId>
        <objectId>8d7f21fa-5e09-00aa-8340-853b7db302da</objectId>
        <folder-name/>
        <header>
          <item>
            <key>/site/components/headers/header.xml</key>
            <value>Header</value>
            <include>/site/components/headers/header.xml</include>
            <disableFlattening>false</disableFlattening>
          </item>
        </header>
        <createdDate>1/31/2017 16:18:14</createdDate>
        <createdDate_dt>1/31/2017 16:18:14</createdDate_dt>
        <lastModifiedDate>5/18/2017 15:52:21</lastModifiedDate>
        <lastModifiedDate_dt>5/18/2017 15:52:21</lastModifiedDate_dt>
        <left-rail>
          <item>
            <key>
              /site/components/left-rails/left-rail-with-latest-articles.xml
            </key>
            <value>Left Rail with Latest Articles</value>
            <include>
              /site/components/left-rails/left-rail-with-latest-articles.xml
            </include>
            <disableFlattening>false</disableFlattening>
          </item>
        </left-rail>
        <internal-name>Home</internal-name>
        <orderDefault_f>-1</orderDefault_f>
        <title>Editorial</title>
        <hero_text>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
        </hero_text>
        <hero_title>
          <h1><span>Hi, I&rsquo;m Editorial</span></h1> <h3><span style="font-size: 1.5em;">by HTML5 UP</span></h3>
        </hero_title>
        <features>
          <item>
            <value>Quam lorem ipsum</value>
            <key>/site/components/features/quam-lorem-ipsum.xml</key>
            <include>/site/components/features/quam-lorem-ipsum.xml</include>
            <disableFlattening>false</disableFlattening>
          </item>
          <item>
            <key>/site/components/features/sapien-veroeros.xml</key>
            <value>Sapien Veroeros</value>
            <include>/site/components/features/sapien-veroeros.xml</include>
            <disableFlattening>false</disableFlattening>
          </item>
        </features>
        <hero_image>/static-assets/images/strawberries.jpg</hero_image>
        <features_title>Erat lacinia</features_title>
      </page>
    </descriptorDom>
    <isFolder>false</isFolder>
  </item>

---------
Responses
---------

+---------+------------------------------+-------------------------------------------------------+
|| Status || Location                    || Response Body                                        |
+=========+==============================+=======================================================+
|| 200    ||                             || See example above.                                   |
+---------+------------------------------+-------------------------------------------------------+
|| 404    ||                             || ``"No item found at /site/website/index.xml"``       |
+---------+------------------------------+-------------------------------------------------------+
|| 500    ||                             || ``"Internal server error"``                          |
+---------+------------------------------+-------------------------------------------------------+
