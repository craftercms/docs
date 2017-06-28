.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-engine-api-site-content_store-tree:

========
Get Tree
========

Get the complete Item hierarchy under the specified folder in the content store.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || GET                                                        |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/site/content_store/tree``                         |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                          |
+----------------------------+-------------------------------------------------------------+

----------
Parameters
----------

+-------------+-------------+---------------+----------------------------------------------------+
|| Name       || Type       || Required     || Description                                       |
+=============+=============+===============+====================================================+
|| url        || String     || |checkmark|  || The folder's URL (e.g /site/website/)             |
+-------------+-------------+---------------+----------------------------------------------------+
|| depth      || Integer    ||              || Amount of levels to include (unlimited by default)|
+-------------+-------------+---------------+----------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/content_store/tree.xml?url=/site/website``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: xml

  <tree>
    <name>website</name>
    <url>/site/website</url>
    <descriptorUrl>/site/website.meta.xml</descriptorUrl>
    <isFolder>true</isFolder>
    <children>
      <tree>
        <name>articles</name>
        <url>/site/website/articles</url>
        <descriptorUrl>/site/website/articles.meta.xml</descriptorUrl>
        <isFolder>true</isFolder>
        <children>
          <tree>
            <name>2016</name>
            <url>/site/website/articles/2016</url>
            <descriptorUrl>/site/website/articles/2016.meta.xml</descriptorUrl>
            <isFolder>true</isFolder>
          </tree>
          <tree>
            <name>2017</name>
            <url>/site/website/articles/2017</url>
            <descriptorUrl>/site/website/articles/2017.meta.xml</descriptorUrl>
            <isFolder>true</isFolder>
          </tree>
          <item>
            <name>crafter-level-descriptor.level.xml</name>
            <url>
              /site/website/articles/crafter-level-descriptor.level.xml
            </url>
            <descriptorUrl>
              /site/website/articles/crafter-level-descriptor.level.xml
            </descriptorUrl>
            <descriptorDom>
              <component>
                <content-type>/component/level-descriptor</content-type>
                <display-template/>
                <merge-strategy>inherit-levels</merge-strategy>
                <file-name>crafter-level-descriptor.level.xml</file-name>
                <objectGroupId>d210</objectGroupId>
                <objectId>d210349e-3f77-95c1-37b3-cab10816347f</objectId>
                <folder-name/>
                <header>
                  <item>
                    <key>/site/components/headers/header.xml</key>
                    <value>Header</value>
                    <include>/site/components/headers/header.xml</include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </header>
                <createdDate>3/17/2017 18:56:59</createdDate>
                <createdDate_dt>3/17/2017 18:56:59</createdDate_dt>
                <lastModifiedDate>5/18/2017 15:38:1</lastModifiedDate>
                <lastModifiedDate_dt>5/18/2017 15:38:1</lastModifiedDate_dt>
                <left-rail>
                  <item>
                    <key>
                      /site/components/left-rails/left-rail-with-related-articles.xml
                    </key>
                    <value>Left Rail with Related Articles</value>
                    <include>
                      /site/components/left-rails/left-rail-with-related-articles.xml
                    </include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </left-rail>
                <placeInNav>false</placeInNav>
              </component>
            </descriptorDom>
            <isFolder>false</isFolder>
          </item>
        </children>
      </tree>
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
      <tree>
        <name>entertainment</name>
        <url>/site/website/entertainment</url>
        <descriptorUrl>/site/website/entertainment.meta.xml</descriptorUrl>
        <isFolder>true</isFolder>
        <children>
          <item>
            <name>index.xml</name>
            <url>/site/website/entertainment/index.xml</url>
            <descriptorUrl>/site/website/entertainment/index.xml</descriptorUrl>
            <descriptorDom>
              <page>
                <content-type>/page/category-landing</content-type>
                <display-template>/templates/web/pages/category-landing.ftl</display-template>
                <merge-strategy>inherit-levels</merge-strategy>
                <placeInNav>true</placeInNav>
                <file-name>index.xml</file-name>
                <objectGroupId>167e</objectGroupId>
                <objectId>167e20e8-11c2-0f26-1802-b842a068c162</objectId>
                <folder-name>entertainment</folder-name>
                <header>
                  <item>
                    <key>/site/components/headers/header.xml</key>
                    <value>Header</value>
                    <include>/site/components/headers/header.xml</include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </header>
                <createdDate>3/14/2017 15:23:12</createdDate>
                <createdDate_dt>3/14/2017 15:23:12</createdDate_dt>
                <lastModifiedDate>3/21/2017 18:16:13</lastModifiedDate>
                <lastModifiedDate_dt>3/21/2017 18:16:13</lastModifiedDate_dt>
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
                <internal-name>Entertainment</internal-name>
                <title>Entertainment</title>
                <orderDefault_f>10000</orderDefault_f>
                <category>entertainment</category>
                <max_articles>10</max_articles>
                <articles_title>Entertainment</articles_title>
              </page>
            </descriptorDom>
            <isFolder>false</isFolder>
          </item>
        </children>
      </tree>
      <tree>
        <name>health</name>
        <url>/site/website/health</url>
        <descriptorUrl>/site/website/health.meta.xml</descriptorUrl>
        <isFolder>true</isFolder>
        <children>
          <item>
            <name>index.xml</name>
            <url>/site/website/health/index.xml</url>
            <descriptorUrl>/site/website/health/index.xml</descriptorUrl>
            <descriptorDom>
              <page>
                <content-type>/page/category-landing</content-type>
                <display-template>/templates/web/pages/category-landing.ftl</display-template>
                <merge-strategy>inherit-levels</merge-strategy>
                <placeInNav>true</placeInNav>
                <file-name>index.xml</file-name>
                <objectGroupId>0557</objectGroupId>
                <objectId>05573d7a-3556-1ad0-6e34-9b085944fee2</objectId>
                <folder-name>health</folder-name>
                <header>
                  <item>
                    <key>/site/components/headers/header.xml</key>
                    <value>Header</value>
                    <include>/site/components/headers/header.xml</include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </header>
                <createdDate>3/14/2017 15:21:57</createdDate>
                <createdDate_dt>3/14/2017 15:21:57</createdDate_dt>
                <lastModifiedDate>3/28/2017 14:30:44</lastModifiedDate>
                <lastModifiedDate_dt>3/28/2017 14:30:44</lastModifiedDate_dt>
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
                <orderDefault_f>9000</orderDefault_f>
                <internal-name>Health</internal-name>
                <title>Health</title>
                <category>health</category>
                <max_articles>10</max_articles>
                <articles_title>Health</articles_title>
              </page>
            </descriptorDom>
            <isFolder>false</isFolder>
          </item>
        </children>
      </tree>
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
      <tree>
        <name>search-results</name>
        <url>/site/website/search-results</url>
        <descriptorUrl>/site/website/search-results.meta.xml</descriptorUrl>
        <isFolder>true</isFolder>
        <children>
          <item>
            <name>index.xml</name>
            <url>/site/website/search-results/index.xml</url>
            <descriptorUrl>/site/website/search-results/index.xml</descriptorUrl>
            <descriptorDom>
              <page>
                <content-type>/page/search-results</content-type>
                <display-template>/templates/web/pages/search-results.ftl</display-template>
                <merge-strategy>inherit-levels</merge-strategy>
                <file-name>index.xml</file-name>
                <objectGroupId>864c</objectGroupId>
                <objectId>864c415c-2c0d-77ad-e42e-50f4f5882cb1</objectId>
                <folder-name>search-results</folder-name>
                <header>
                  <item>
                    <key>/site/components/headers/header.xml</key>
                    <value>Header</value>
                    <include>/site/components/headers/header.xml</include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </header>
                <createdDate>3/23/2017 23:47:15</createdDate>
                <createdDate_dt>3/23/2017 23:47:15</createdDate_dt>
                <lastModifiedDate>5/18/2017 19:52:59</lastModifiedDate>
                <lastModifiedDate_dt>5/18/2017 19:52:59</lastModifiedDate_dt>
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
                <placeInNav>false</placeInNav>
                <internal-name>Search Results</internal-name>
                <title>Search Results</title>
              </page>
            </descriptorDom>
            <isFolder>false</isFolder>
          </item>
        </children>
      </tree>
      <tree>
        <name>style</name>
        <url>/site/website/style</url>
        <descriptorUrl>/site/website/style.meta.xml</descriptorUrl>
        <isFolder>true</isFolder>
        <children>
          <item>
            <name>index.xml</name>
            <url>/site/website/style/index.xml</url>
            <descriptorUrl>/site/website/style/index.xml</descriptorUrl>
            <descriptorDom>
              <page>
                <content-type>/page/category-landing</content-type>
                <display-template>/templates/web/pages/category-landing.ftl</display-template>
                <merge-strategy>inherit-levels</merge-strategy>
                <placeInNav>true</placeInNav>
                <file-name>index.xml</file-name>
                <objectGroupId>102f</objectGroupId>
                <objectId>102fb288-0dd8-806c-7651-2dd8838ca016</objectId>
                <folder-name>style</folder-name>
                <header>
                  <item>
                    <key>/site/components/headers/header.xml</key>
                    <value>Header</value>
                    <include>/site/components/headers/header.xml</include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </header>
                <createdDate>3/13/2017 22:26:52</createdDate>
                <createdDate_dt>3/13/2017 22:26:52</createdDate_dt>
                <lastModifiedDate>3/21/2017 18:15:50</lastModifiedDate>
                <lastModifiedDate_dt>3/21/2017 18:15:50</lastModifiedDate_dt>
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
                <internal-name>Style</internal-name>
                <title>Style</title>
                <orderDefault_f>8000</orderDefault_f>
                <category>style</category>
                <max_articles>10</max_articles>
                <articles_title>Style</articles_title>
              </page>
            </descriptorDom>
            <isFolder>false</isFolder>
          </item>
        </children>
      </tree>
      <tree>
        <name>technology</name>
        <url>/site/website/technology</url>
        <descriptorUrl>/site/website/technology.meta.xml</descriptorUrl>
        <isFolder>true</isFolder>
        <children>
          <item>
            <name>index.xml</name>
            <url>/site/website/technology/index.xml</url>
            <descriptorUrl>/site/website/technology/index.xml</descriptorUrl>
            <descriptorDom>
              <page>
                <content-type>/page/category-landing</content-type>
                <display-template>/templates/web/pages/category-landing.ftl</display-template>
                <merge-strategy>inherit-levels</merge-strategy>
                <placeInNav>true</placeInNav>
                <file-name>index.xml</file-name>
                <objectGroupId>49c9</objectGroupId>
                <objectId>49c9c85d-5349-158a-3001-a5d66f3ce168</objectId>
                <folder-name>technology</folder-name>
                <header>
                  <item>
                    <key>/site/components/headers/header.xml</key>
                    <value>Header</value>
                    <include>/site/components/headers/header.xml</include>
                    <disableFlattening>false</disableFlattening>
                  </item>
                </header>
                <createdDate>3/14/2017 15:24:15</createdDate>
                <createdDate_dt>3/14/2017 15:24:15</createdDate_dt>
                <lastModifiedDate>3/21/2017 18:16:22</lastModifiedDate>
                <lastModifiedDate_dt>3/21/2017 18:16:22</lastModifiedDate_dt>
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
                <orderDefault_f>11000</orderDefault_f>
                <internal-name>Technology</internal-name>
                <title>Technology</title>
                <category>technology</category>
                <max_articles>10</max_articles>
                <articles_title>Technology</articles_title>
              </page>
            </descriptorDom>
            <isFolder>false</isFolder>
          </item>
        </children>
      </tree>
    </children>
  </tree>

---------
Responses
---------

+---------+----------------------------------+-----------------------------------------------+
|| Status || Location                        || Response Body                                |
+=========+==================================+===============================================+
|| 200    ||                                 || See example above.                           |
+---------+----------------------------------+-----------------------------------------------+
|| 404    ||                                 || ``"No folder found at /site/website"``       |
+---------+----------------------------------+-----------------------------------------------+
|| 500    ||                                 || ``"Internal server error"``                  |
+---------+----------------------------------+-----------------------------------------------+
