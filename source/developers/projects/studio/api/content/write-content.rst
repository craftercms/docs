.. _crafter-studio-api-content-write-content:

=============
Write Content
=============

Write Content.

--------
Option 1
--------

Save content using Create/Edit web form.

^^^^^^^^^^^^^^^^^^^^
Resource Information
^^^^^^^^^^^^^^^^^^^^

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/content/write-content.json``             |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Author                                                           |
+----------------------------+-------------------------------------------------------------------+

^^^^^^^^^^
Parameters
^^^^^^^^^^

+-----------------+-------------+---------------+--------------------------------------------------+
|| Name           || Type       || Required     || Description                                     |
+=================+=============+===============+==================================================+
|| site_id        || String     || |checkmark|  || Site to use                                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| path           || String     || |checkmark|  || Path of the content                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| fileName       || String     || |checkmark|  || File name of the content                        |
+-----------------+-------------+---------------+--------------------------------------------------+
|| contentType    || String     || |checkmark|  || Content type of the content                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| edit           || String     ||              || True if it is edit, otherwise it is create      |
+-----------------+-------------+---------------+--------------------------------------------------+
|| user           || String     ||              || User that executes action                       |
+-----------------+-------------+---------------+--------------------------------------------------+
|| oldContentPath || String     ||              || If renaming content old path                    |
+-----------------+-------------+---------------+--------------------------------------------------+
|| draft          || String     ||              || True if saving as draft                         |
+-----------------+-------------+---------------+--------------------------------------------------+
|| unlock         || String     || |checkmark|  || false to keep content locked, otherwise true    |
+-----------------+-------------+---------------+--------------------------------------------------+

^^^^^^^
Example
^^^^^^^

Request
^^^^^^^

.. code-block:: guess

    POST ../api/1/services/api/1/content/write-content.json?site_id=mysite&phase=onSave&path=/site/website/index.xml&fileName=index.xml&user=admin&contentType=/page/home&unlock=true

|

.. code-block:: guess
    :caption: Request body

    <page>
	    <content-type>/page/home</content-type>	<display-template>/templates/web/pages/home.ftl</display-template>
	    <merge-strategy>inherit-levels</merge-strategy>
	    <placeInNav  >false</placeInNav>
	    <file-name  >index.xml</file-name>
	    <internal-name  >Home example</internal-name>
	    <orderDefault_f  >-1</orderDefault_f>
	    <objectGroupId  >8d7f</objectGroupId>
	    <objectId  >8d7f21fa-5e09-00aa-8340-853b7db302da</objectId>
	    <folder-name  ></folder-name>
	    <createdDate  >2017-1-31T16:18:14.000Z</createdDate>
	    <createdDate_dt  >2017-1-31T16:18:14.000Z</createdDate_dt>
	    <lastModifiedDate  >2017-12-22T21:49:29.275Z</lastModifiedDate>
	    <lastModifiedDate_dt  >2017-12-22T21:49:29.275Z</lastModifiedDate_dt>
	    <title  >Editorial</title>
	    <hero_text  >&lt;p&gt;Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.&lt;/p&gt;</hero_text>
	    <hero_title  >&lt;h1&gt;&lt;span&gt;Hi, I&amp;rsquo;m Editorial&lt;/span&gt;&lt;/h1&gt;
        &lt;h3&gt;&lt;span style=&quot;font-size: 1.5em;&quot;&gt;by HTML5 UP&lt;/span&gt;&lt;/h3&gt;</hero_title>
	    <features  >	<item>	<value>Two</value>
	    <key>/site/components/features/quam-lorem-ipsum.xml</key>
	    <include>/site/components/features/quam-lorem-ipsum.xml</include>
	    <disableFlattening>false</disableFlattening>
	    </item>	<item>	<key>/site/components/features/sapien-veroeros.xml</key>
	    <value>Three</value>
	    <include>/site/components/features/sapien-veroeros.xml</include>
	    <disableFlattening>false</disableFlattening>
	    </item></features>
	    <header  ></header>
	    <hero_image  >/static-assets/images/strawberries.jpg</hero_image>
	    <left-rail  >	<item>	<key>/site/components/left-rails/left-rail-with-latest-articles.xml</key>
	    <value>Left Rail with Latest Articles</value>
	    <include>/site/components/left-rails/left-rail-with-latest-articles.xml</include>
	    <disableFlattening>false</disableFlattening>
	    </item></left-rail>
	    <features_title  >Erat lacinia</features_title>
	    <disabled  >false</disabled>
    </page>

|

Response
^^^^^^^^

``Status 200 OK``


^^^^^^^^^
Responses
^^^^^^^^^

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          ||                                                  |
+---------+-------------------------------------------+---------------------------------------------------+

--------
Option 2
--------

Save content using asset form (templates, javascript, css, groovy).

^^^^^^^^^^^^^^^^^^^^
Resource Information
^^^^^^^^^^^^^^^^^^^^

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/content/write-content.json``             |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Author                                                           |
+----------------------------+-------------------------------------------------------------------+

^^^^^^^^^^
Parameters
^^^^^^^^^^

+-----------------+-------------+---------------+--------------------------------------------------+
|| Name           || Type       || Required     || Description                                     |
+=================+=============+===============+==================================================+
|| site           || String     || |checkmark|  || Site to use                                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| path           || String     || |checkmark|  || Path of the content                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| fileName       || String     || |checkmark|  || File name of the content                        |
+-----------------+-------------+---------------+--------------------------------------------------+
|| contentType    || String     ||              || Content type of the content                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| user           || String     ||              || User that executes action                       |
+-----------------+-------------+---------------+--------------------------------------------------+
|| isImage        || String     ||              || True if it is image                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| allowedWidth   || Integer    ||              || Allowed image width                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| allowedHeight  || Integer    ||              || Allowed image height                            |
+-----------------+-------------+---------------+--------------------------------------------------+
|| allowLessSize  || String     ||              || Allow less size                                 |
+-----------------+-------------+---------------+--------------------------------------------------+
|| draft          || String     ||              || True if saving as draft                         |
+-----------------+-------------+---------------+--------------------------------------------------+
|| unlock         || String     || |checkmark|  || false to keep content locked, otherwise true    |
+-----------------+-------------+---------------+--------------------------------------------------+
|| systemAsset    || String     ||              || true if it is private asset                     |
+-----------------+-------------+---------------+--------------------------------------------------+

^^^^^^^
Example
^^^^^^^

Request
^^^^^^^

.. code-block:: guess

    POST ../api/1/services/api/1/content/write-content.json?site_id=mysite&phase=onSave&path=/templates/web/pages&fileName=home.ftl&user=admin&unlock=true

|

.. code-block:: guess
    :caption: Request body

    <#import "/templates/system/common/cstudio-support.ftl" as studio />
    <!DOCTYPE HTML>
    <!--
        Editorial by HTML5 UP
        html5up.net | @ajlkn
        Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
    -->
    <!-- example -->
    <html>
        <head>
            <title>${contentModel.title}</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <!--[if lte IE 8]><script src="/static-assets/js/ie/html5shiv.js"></script><![endif]-->
            <link rel="stylesheet" href="/static-assets/css/main.css" />
            <!--[if lte IE 9]><link rel="stylesheet" href="/static-assets/css/ie9.css" /><![endif]-->
            <!--[if lte IE 8]><link rel="stylesheet" href="/static-assets/css/ie8.css" /><![endif]-->
            <link rel="stylesheet" href="/static-assets/css/jquery-ui.min.css" />
        </head>
        <body>
            <!-- Wrapper -->
                <div id="wrapper">
                    <!-- Main -->
                        <div id="main">
                            <div class="inner">
                                <!-- Header -->
                                <@renderComponent component=contentModel.header.item />
                                <!-- Banner -->
                                    <section id="banner" <@studio.iceAttr iceGroup="hero"/>>
                                        <div class="content">
                                            <header>${contentModel.hero_title}</header>
                                            ${contentModel.hero_text}
                                        </div>
                                        <span class="image object">
                                            <img src="${contentModel.hero_image !""}" alt="" />
                                        </span>
                                    </section>
                                <!-- Section -->
                                    <section <@studio.iceAttr iceGroup="features"/>>
                                        <header class="major">
                                            <h2>${contentModel.features_title}</h2>
                                        </header>
                                        <div class="features" <@studio.componentContainerAttr target="features" objectId=contentModel.objectId/>>
                                            <#if contentModel.features?? && contentModel.features.item??>
                                              <#list contentModel.features.item as feature>
                                                  <@renderComponent component=feature />
                                              </#list>
                                            </#if>
                                        </div>
                                    </section>
                                <!-- Section -->
                                    <section>
                                        <header class="major">
                                            <h2>Featured Articles</h2>
                                        </header>
                                        <div class="posts">
                                            <#list articles as article>
                                            <article>
                                                <a href="${article.url}" class="image">
                                                    <#if article.image??>
                                                        <#assign articleImage = article.image/>
                                                    <#else>
                                                        <#assign articleImage = "/static-assets/images/placeholder.png"/>
                                                    </#if>
                                                    <img src="${articleImage}" alt="" />
                                                </a>
                                                <h3><a href="${article.url}">${article.title}</a></h3>
                                                <p>${article.summary}</p>
                                                <ul class="actions">
                                                    <li><a href="${article.url}" class="button">More</a></li>
                                                </ul>
                                            </article>
                                            </#list>
                                        </div>
                                    </section>
                            </div>
                        </div>
                    <!-- Left Rail -->
                    <@renderComponent component=contentModel.left\-rail.item />
                </div>
            <!-- Scripts -->
                <script src="/static-assets/js/jquery.min.js"></script>
                <script src="/static-assets/js/jquery-ui.min.js"></script>
                <script src="/static-assets/js/skel.min.js"></script>
                <script src="/static-assets/js/util.js"></script>
                <!--[if lte IE 8]><script src="/static-assets/js/ie/respond.min.js"></script><![endif]-->
                <script src="/static-assets/js/main.js"></script>
            <@studio.toolSupport/>
        </body>
    </html>

|

Response
^^^^^^^^

``Status 200 OK``


^^^^^^^^^
Responses
^^^^^^^^^

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          ||                                                  |
+---------+-------------------------------------------+---------------------------------------------------+


--------
Option 3
--------

File upload (multipart request)

^^^^^^^^^^^^^^^^^^^^
Resource Information
^^^^^^^^^^^^^^^^^^^^

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST (multipart/form-data)                                       |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/content/write-content.json``             |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Author                                                           |
+----------------------------+-------------------------------------------------------------------+

^^^^^^^^^^
Parameters
^^^^^^^^^^

+-----------------+-------------+---------------+--------------------------------------------------+
|| Name           || Type       || Required     || Description                                     |
+=================+=============+===============+==================================================+
|| site           || String     || |checkmark|  || Site to use                                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| path           || String     || |checkmark|  || Path of the content                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| fileName       || String     || |checkmark|  || File name of the content                        |
+-----------------+-------------+---------------+--------------------------------------------------+
|| contentType    || String     ||              || Content type of the content                     |
+-----------------+-------------+---------------+--------------------------------------------------+
|| user           || String     ||              || User that executes action                       |
+-----------------+-------------+---------------+--------------------------------------------------+
|| isImage        || String     ||              || True if it is image                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| allowedWidth   || Integer    ||              || Allowed image width                             |
+-----------------+-------------+---------------+--------------------------------------------------+
|| allowedHeight  || Integer    ||              || Allowed image height                            |
+-----------------+-------------+---------------+--------------------------------------------------+
|| allowLessSize  || String     ||              || Allow less size                                 |
+-----------------+-------------+---------------+--------------------------------------------------+
|| draft          || String     ||              || True if saving as draft                         |
+-----------------+-------------+---------------+--------------------------------------------------+
|| unlock         || String     || |checkmark|  || false to keep content locked, otherwise true    |
+-----------------+-------------+---------------+--------------------------------------------------+

^^^^^^^
Example
^^^^^^^

Request
^^^^^^^

.. code-block:: guess

    POST ../api/1/services/api/1/content/write-content.json?site_id=mysite&phase=onSave&path=/static-assets&fileName=undefined&user=admin&unlock=true

|

This request needs to be sent with ``Content-Type=multipart/form-data`` with the following parameters:

    Text Part:

    * field: ``site``    value: mysite (the site id)
    * field: ``path``    value: /static-assets (the folder in your site where you want to upload your file)

    File Part:

    * field: ``file``    value: (the_file_to_be_uploaded)

Your request payload should look like this:

.. code-block:: guess

   ------WebKitFormBoundaryl9p1lhdx4gWpuCMM
   Content-Disposition: form-data; name="site"

   mysite
   ------WebKitFormBoundaryl9p1lhdx4gWpuCMM
   Content-Disposition: form-data; name="path"

   /static-assets
   ------WebKitFormBoundaryl9p1lhdx4gWpuCMM
   Content-Disposition: form-data; name="file"; filename="test.txt"
   Content-Type: text/plain

   Hello world!

   ------WebKitFormBoundaryl9p1lhdx4gWpuCMM--

|

Response
^^^^^^^^

``Status 200 OK``


^^^^^^^^^
Responses
^^^^^^^^^

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          ||                                                  |
+---------+-------------------------------------------+---------------------------------------------------+
