.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-engine-api-site-content_store-children:

============
Get Children
============

Get the list of Items directly under the folder in the content store.

--------------------
Resource Information
--------------------

+----------------------------+-----------------------------------------------------------------+
|| HTTP Verb                 || GET                                                            |
+----------------------------+-----------------------------------------------------------------+
|| URL                       || ``/api/1/site/content_store/children``                         |
+----------------------------+-----------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                              |
+----------------------------+-----------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+--------------------------------------+
|| Name                   || Type       || Required     || Description                         |
+=========================+=============+===============+======================================+
|| url                    || String     || |checkmark|  || The folder's url (e.g /site/website)|
+-------------------------+-------------+---------------+--------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/content_store/children.xml?url=/site/website``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: xml

  <list>
    <item>
      <name>articles</name>
      <url>/site/website/articles</url>
      <descriptorUrl>/site/website/articles.meta.xml</descriptorUrl>
      <isFolder>true</isFolder>
    </item>
    <item>
      <name>crafter-component.xml</name>
      <url>/site/website/crafter-component.xml</url>
      <descriptorUrl>/site/website/crafter-component.xml</descriptorUrl>
      <descriptorDom>
        <page>
          <display-template xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="false">/templates/system/common/component.ftl</display-template>
          <merge-strategy>inherit-levels</merge-strategy>
          <content-type>/component/level-descriptor</content-type>
          <placeInNav>false</placeInNav>
          <file-name>crafter-level-descriptor.level.xml</file-name>
          <objectGroupId>0a68</objectGroupId>
          <objectId>0a68e8ad-77d8-0a58-e7bf-09a71fb3077b</objectId>
          <folder-name/>
          <header>
            <item>
              <key>/site/components/headers/header.xml</key>
              <value>Header</value>
              <include>/site/components/headers/header.xml</include>
              <disableFlattening>false</disableFlattening>
            </item>
          </header>
          <createdDate>3/13/2017 20:26:50</createdDate>
          <createdDate_dt>3/13/2017 20:26:50</createdDate_dt>
          <lastModifiedDate>5/18/2017 15:38:58</lastModifiedDate>
          <lastModifiedDate_dt>5/18/2017 15:38:58</lastModifiedDate_dt>
          <left-rail>
            <item>
              <key>
                /site/components/left-rails/left-rail-with-no-articles.xml
              </key>
              <value>Left Rail with No Articles</value>
              <include>
                /site/components/left-rails/left-rail-with-no-articles.xml
              </include>
              <disableFlattening>false</disableFlattening>
            </item>
          </left-rail>
          <hideInAuthoring>true</hideInAuthoring>
        </page>
      </descriptorDom>
      <isFolder>false</isFolder>
    </item>
    <item>
      <name>crafter-level-descriptor.level.xml</name>
      <url>/site/website/crafter-level-descriptor.level.xml</url>
      <descriptorUrl>/site/website/crafter-level-descriptor.level.xml</descriptorUrl>
      <descriptorDom>
        <component>
          <content-type>/component/level-descriptor</content-type>
          <display-template/>
          <merge-strategy>inherit-levels</merge-strategy>
          <placeInNav>false</placeInNav>
          <file-name>crafter-level-descriptor.level.xml</file-name>
          <objectGroupId>0a68</objectGroupId>
          <objectId>0a68e8ad-77d8-0a58-e7bf-09a71fb3077b</objectId>
          <folder-name/>
          <header>
            <item>
              <key>/site/components/headers/header.xml</key>
              <value>Header</value>
              <include>/site/components/headers/header.xml</include>
              <disableFlattening>false</disableFlattening>
            </item>
          </header>
          <createdDate>3/13/2017 20:26:50</createdDate>
          <createdDate_dt>3/13/2017 20:26:50</createdDate_dt>
          <lastModifiedDate>5/18/2017 15:38:58</lastModifiedDate>
          <lastModifiedDate_dt>5/18/2017 15:38:58</lastModifiedDate_dt>
          <left-rail>
            <item>
              <key>
                /site/components/left-rails/left-rail-with-no-articles.xml
              </key>
              <value>Left Rail with No Articles</value>
              <include>
                /site/components/left-rails/left-rail-with-no-articles.xml
              </include>
              <disableFlattening>false</disableFlattening>
            </item>
          </left-rail>
        </component>
      </descriptorDom>
      <isFolder>false</isFolder>
    </item>
    <item>
      <name>entertainment</name>
      <url>/site/website/entertainment</url>
      <descriptorUrl>/site/website/entertainment.meta.xml</descriptorUrl>
      <isFolder>true</isFolder>
    </item>
    <item>
      <name>health</name>
      <url>/site/website/health</url>
      <descriptorUrl>/site/website/health.meta.xml</descriptorUrl>
      <isFolder>true</isFolder>
    </item>
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
    <item>
      <name>search-results</name>
      <url>/site/website/search-results</url>
      <descriptorUrl>/site/website/search-results.meta.xml</descriptorUrl>
      <isFolder>true</isFolder>
    </item>
    <item>
      <name>style</name>
      <url>/site/website/style</url>
      <descriptorUrl>/site/website/style.meta.xml</descriptorUrl>
      <isFolder>true</isFolder>
    </item>
    <item>
      <name>technology</name>
      <url>/site/website/technology</url>
      <descriptorUrl>/site/website/technology.meta.xml</descriptorUrl>
      <isFolder>true</isFolder>
    </item>
  </list>

---------
Responses
---------

+---------+--------------------------------------+-----------------------------------------------+
|| Status || Location                            || Response Body                                |
+=========+======================================+===============================================+
|| 200    || ``.../site/content_store/children`` || See example above.                           |
+---------+--------------------------------------+-----------------------------------------------+
|| 404    ||                                     || ``"No folder found at /site/website"``       |
+---------+--------------------------------------+-----------------------------------------------+
|| 500    ||                                     || ``"Internal server error"``                  |
+---------+--------------------------------------+-----------------------------------------------+
