.. _documentation-standard:

======================
Documentation Standard
======================

Please view the source of this document to view and follow the template.

----
Text
----

^^^^^
Style
^^^^^

``monospaced text is done using``  

.. code-block:: rst

    ``monospace``


*italics are done using*

.. code-block:: rst

    *italics*

**And finally bold using**

.. code-block:: rst

    **bold**

^^^^^
Links
^^^^^

External URL with Tag: `URL <http://example.com>`_

.. code-block:: rst

	External URL with Tag: `URL <http://example.com>`_

External URL without Tag: http://example.com

.. code-block:: rst

	External URL without Tag: http://example.com

Sphinx-doc reference: :ref:`content-view-templates`

.. code-block:: rst

	Sphinx-doc reference: :ref:`content-view-templates`


^^^^^^^
Anchors
^^^^^^^

.. code-block:: rst

   .. _documentation-templates:

--------------------------------------------------
Titles, Sections, sub-sections and sub-subsections
--------------------------------------------------

.. code-block:: rst

	=====
	Title
	=====
	
	Text...
	
	-------
	Section
	-------
	
	Text...
	
	^^^^^^^^^^^
	Sub-section
	^^^^^^^^^^^
	
	Text...
	
	Sub-sub-section
	^^^^^^^^^^^^^^^
	
	Text...

------------------
Images and Figures
------------------

^^^^^
Image
^^^^^

.. code-block:: rst

	.. image:: /_static/images/admin-console-link.png
	        :width: 25%
	        :alt: Admin Console Link
	        :align: center

^^^^^^
Figure
^^^^^^

.. code-block:: rst

	.. figure:: /_static/images/create-content-type-3.png
	        :alt: Properties Explorer
	        :align: center

---------------------
Bullets and Numbering
---------------------

^^^^^^^
Bullets
^^^^^^^

.. code-block:: rst

	* lorem ipsum
	* lorem ipsum
	* lorem ipsum

^^^^^^^^^^^^^^^^
Numbered bullets
^^^^^^^^^^^^^^^^

.. code-block:: rst

	#. lorem ipsum
	#. lorem ipsum
	#. lorem ipsum

-------------------------
Notes, Todos and Warnings
-------------------------

.. code-block:: rst

	.. note:: Important note

.. code-block:: rst

	.. seealso:: See also this :math:`\alpha`

.. code-block:: rst

	.. todo:: Todo

.. code-block:: rst

	.. warning:: Warning!

------
Tables
------

^^^^^^^^^^^^^
Simple Tables
^^^^^^^^^^^^^

.. note:: The number of characters per line is no more than 99. Please copy the template and start with it and don't make the lines any longer.

.. code-block:: rst

	=============== =================================================================================
	Short Column    Long Column
	=============== =================================================================================
	Row 1 Column 1  Row 1 Column 2

	Row 2 Column 1  Row 2 Column 2
	=============== =================================================================================

^^^^^^^^^^^^^^
Complex Tables
^^^^^^^^^^^^^^

.. note:: The number of characters per line is no more than 99. Please copy the template and start with it and don't make the lines any longer.

.. code-block:: rst

	+-----------------+------------------------------------------------------------------------------+
	|| Short Column   || Long Column                                                                 |
        || (More stuff)   ||                                                                             |
	+-----------------+------------------------------------------------------------------------------+
	|| Row 1 Column 1 || Row 1 Column 2 Line 1                                                       |
	||                || Row 1 Column 2 Line 2                                                       |
	+-----------------+                                                                              |
	|| Row 2 Column 1 || Row 1 Column 2 Line 3 (merged cell)                                         |
	+-----------------+------------------------------------------------------------------------------+

-----------
Code Blocks
-----------

^^^^
HTML
^^^^

.. code-block:: rst

	.. code-block:: html

        <#import "/templates/system/common/cstudio-support.ftl" as studio />

        <!DOCTYPE html>
        <html lang="en">
            <head>
                <!-- Basic Page Need
        	    ================================================== -->
        	    <meta charset="utf-8">
        	    <title>${contentModel.browser_title}</title>
        	    <meta name="description" content="${contentModel.meta_description}">
        	    <meta name="keywords" content="${contentModel.meta_keywords}">
        	</head>
        	<body>
        	     <div class="body" <@studio.iceAttr iceGroup="body"/>>
        	          ${contentModel.body_html}
        	     </div>

        	     <#if (contentModel.analytics_script)??>${contentModel.analytics_script}</#if>
        	</body>
        </html>

^^^^^^
Groovy
^^^^^^

.. code-block:: rst

	.. code-block:: groovy

		import org.craftercms.engine.service.context.SiteContext
		
		import utils.DateUtils
		
		def now = DateUtils.formatDateAsIso(new Date())
		def start = 0
		def rows = 1000
		def sort = "date_dt asc"
		def query = searchService.createQuery()
		
		query.setQuery(queryStr)
		
		def events = []
		if (searchResults.response) {
			searchResults.response.documents.each {
				events.add(event)
			}
		}
		
		contentModel.events = events

------------------------
Include Another Document
------------------------

.. code-block:: rst

	.. include:: ../includes/unicode-checkmark.rst

