.. _documentation-template:

======================
Documentation Template
======================

Please view the source of this document to view and follow the template.

----
Text
----

^^^^^
Style
^^^^^

``monospaced text is done using``  

.. code-block:: restructured

    ``monospace``


*italics are done using*

.. code-block:: restructured

    *italics*

**And finally bold using**

.. code-block:: restructured

    **bold**

^^^^^
Links
^^^^^

External URL with Tag: `URL <http://example.com>`_

.. code-block:: restructured

	External URL with Tag: `URL <http://example.com>`_

External URL without Tag: http://example.com

.. code-block:: restructured

	External URL without Tag: http://example.com

Sphinx-doc reference: :ref:`content-view-templates`

.. code-block:: restructured

	Sphinx-doc reference: :ref:`content-view-templates`


^^^^^^^
Anchors
^^^^^^^

.. code-block:: restructured

   .. _documentation-templates:

==================================================
Titles, Sections, sub-sections and sub-subsections
==================================================

.. code-block:: restructured

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

.. code-block:: restructured

	.. image:: /_static/images/admin-console-link.png
	        :width: 25%
	        :alt: Admin Console Link
	        :align: center

^^^^^^
Figure
^^^^^^

.. code-block:: restructured

	.. figure:: /_static/images/create-content-type-3.png
	        :alt: Properties Explorer
	        :align: center

---------------------
Bullets and Numbering
---------------------

^^^^^^^
Bullets
^^^^^^^

.. code-block:: restructured

	* lorem ipsum
	* lorem ipsum
	* lorem ipsum

^^^^^^^^^^^^^^^^
Numbered bullets
^^^^^^^^^^^^^^^^

.. code-block:: restructured

	#. lorem ipsum
	#. lorem ipsum
	#. lorem ipsum

-------------------------
Notes, Todos and Warnings
-------------------------

.. code-block:: restructured

	.. note:: Important note

.. code-block:: restructured

	.. seealso:: See also this :math:`\alpha`

.. code-block:: restructured

	.. todo:: Todo

.. code-block:: restructured

	.. warning:: Warning!

------
Tables
------

.. code-block:: restructured

	=============== ============================================================================================
	Short Column    Long Column
	=============== ============================================================================================
	Row 1 Column 1  Row 1 Column 2
	Row 2 Column 1  Row 2 Column 2
	=============== ============================================================================================

-----------
Code Blocks
-----------

^^^^
HTML
^^^^

.. code-block:: restructured

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

.. code-block:: restructured

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

.. code-block:: restructured

	.. include:: ../includes/unicode-checkmark.rst

