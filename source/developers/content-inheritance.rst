.. index:: Content Inheritance, Inheritance

.. _content-inheritance:

===================
Content Inheritance
===================

Crafter CMS support content inheritance out of the box, and supports it via a pluggable mechanism that allows developers to augment or override what's out of the box.

--------------------------
Content Inheritance Basics
--------------------------

Content objects in Crafter CMS are essentially structured markup, XML by default, and house data authored via Crafter Studio by content authors. Content objects are typically structured as a tree which naturally suits the notion of inheriting from a parent (not to say that the inheritance mechanics are limited to that topology). Inheritance works as follows:

Assume we have two objects, one called Parent and one called Child and they're set up as follows:

**Parent**: Below you'll see a typical *level descriptor* which will be the parent of another object. You'll note the *level descriptor* defines multiple elements that are common to everything at this level in the hierarchy and below it. This *level descriptor* defines a primary CSS file ``main.css``, a common header component ``default-header.xml`` and a common footer component ``default-footer.xml``.

.. code-block:: xml

	<?xml version="1.0" encoding="UTF-8"?>
	<component>
        	<content-type>/component/level-descriptor</content-type>
		<display-template/>
        	<merge-strategy>inherit-levels</merge-strategy>
        	<objectGroupId>4123</objectGroupId>
        	<objectId>41d1c0c5-bfc9-8fe8-2461-dc57a82b6cab</objectId>
        	<file-name>crafter-level-descriptor.level.xml</file-name>
        	<folder-name/>
        	<cssGroup>
			<item>
				<key>/static-assets/css/main.css</key>
        			<value>/static-assets/css/main.css</value>
        			<fileType_s>css</fileType_s>
        		</item>
		</cssGroup>
        	<jsGroup/>
        	<createdDate>2/7/2016 19:40:03</createdDate>
        	<lastModifiedDate>10/8/2016 19:58:30</lastModifiedDate>
        	<defaultHeader>
			<item>
				<key>/site/components/components/header/default-header.xml</key>
        			<value>Default Header</value>
        			<include>/site/components/components/header/default-header.xml</include>
        			<disableFlattening>false</disableFlattening>
        		</item>
		</defaultHeader>
        	<defaultFooter>
			<item>
				<key>/site/components/components/footer/default-footer.xml</key>
        			<value>Default Footer</value>
        			<include>/site/components/components/footer/default-footer.xml</include>
        			<disableFlattening>false</disableFlattening>
        		</item>
		</defaultFooter>
        	<lastModifiedDate_dt>10/8/2016 19:58:30</lastModifiedDate_dt>
	</component>

**Child**: Below is the XML file of a page residing under the above *level descriptor* and is setup to inherit from it. You'll note the definition of the ``merge-strategy`` as ``inherit-levels``, this invokes the level-based inheritance mechanics that require Crafter CMS to look at current and higher levels for files named ``crafter-level-descriptor.level.xml`` (this is configurable). You'll also note that this page doesn't specify the CSS file/group of files to include, nor will it need to specify the header nor footer components.

.. code-block:: xml

	<?xml version="1.0" encoding="UTF-8"?>
	<page>
	        <content-type>/page/one-col-parallax</content-type>
		<display-template>/templates/web/pages/one-col-parallax.ftl</display-template>
	        <merge-strategy>inherit-levels</merge-strategy>
	        <objectGroupId>9cef</objectGroupId>
	        <objectId>001f0955-6da3-8b7a-4e6b-6b373139d0ba</objectId>
	        <file-name>index.xml</file-name>
	        <folder-name>child-page</folder-name>
	        <internal-name>Child</internal-name>
	        <navLabel>CHILD</navLabel>
	        <title>Child Page</title>
	        <headerOverlap>no-overlap</headerOverlap>
	        <placeInNav>true</placeInNav>
	        <orderDefault_f>12000</orderDefault_f>
	        <description>This is the Child page.</description>
	        <disabled>false</disabled>
	        <createdDate>7/31/2016 16:52:39</createdDate>
	        <lastModifiedDate>8/1/2016 18:55:09</lastModifiedDate>
		<body>
			<h1>Hello World</h1>
		</body>
	</page>

Crafter CMS will invoke the inheritance mechanics implemented in the merge strategy ``inherit-levels`` to merge the page and the *level descriptor* and the merge strategy will pull in the elements defined in the *level descriptor* into the child page before handing the new model (XML) to the rendering system. This means that when the page renders, the model will automatically contain the meta-data defined in the parent *level descriptor*. In our example above, the page will automatically inherit the meta-data fields ``cssGroup``, ``defaultHeader``, and ``defaultFooter``.

.. note:: When an element is defined by the **level descriptor** and then subsequently defined by a child, the child's definition overrides the **level descriptor**.

This mechanism allows you to define meta-data that flows down the information architecture of the site such that an entire site can have defaults and those defaults can be overwritten by sections individual page. Some examples of real-life use of inheritance:

* Site logo
* Global stylesheet and JS includes
* Global headers and footers
* Section meta-data (flows to all pages/subsections)

.. note:: The ``inherit-levels`` mechanism allows you to set **level descriptors** at various levels of the information architecture with lower levels overriding upper levels.

What we discussed thus far is a single inheritance strategy implementation, ``inherit-levels``, the code to which is available here: `InheritLevelsMergeStrategy.java <https://github.com/craftercms/core/blob/master/src/main/java/org/craftercms/core/xml/mergers/impl/strategies/InheritLevelsMergeStrategy.java>`_. There are more inheritance strategies implemented out of the box with Crafter CMS and you can build your own to suit your needs.

-------------------------
Out of the Box Strategies
-------------------------

+-----------------------+------------------------------------------------------------------------+
+-----------------------+------------------------------------------------------------------------+
|| Strategy             || Description                                                           |
+=======================+========================================================================+
|| ``single-file``      || No content should be inherited.                                       |
+-----------------------+------------------------------------------------------------------------+
|| ``inherit-levels``   || Content from Crafter level descriptors (crafter-level-descriptor.xml) |
||                      || in the current and upper levels should be inherited.                  |
+-----------------------+------------------------------------------------------------------------+
|| ``explicit-parent``  || The parent descriptor to inherit is specified explicitly in the XML   |
||                      || tag ``parent-descriptor``.                                            |
+-----------------------+------------------------------------------------------------------------+
|| ``targeted-content`` || The page will be merged with other pages in a targeted content        |
||                      || hierarchy, including level descriptors. For example,                  |
||                      || ``/en_US/about-us`` will generate the following merging list:         |
||                      || ``/en_US/about-us/index.xml``,                                        |
||                      || ``/en_US/about-us/crafter-level-descriptor.xml``,                     |
||                      || ``/en/about-us/index.xml``,                                           |
||                      || ``/en/about-us/crafter-level-descriptor.xml``,                        |
||                      || ``/about-us/index.xml``, ``/about-us/crafter-level-descriptor.xml``,  |
||                      || ``/crafter-level-descriptor.xml``.                                    |
+-----------------------+------------------------------------------------------------------------+

.. TODO:: Describe how to add your own merge strategy. Describe merge cues.

