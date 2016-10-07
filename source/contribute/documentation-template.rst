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

``monospace``
_underline_
*italics*
**bold**

^^^^^
Links
^^^^^

External URL: `URL <http://example.com>`_
External URL: http://example.com
Sphinx-doc reference: :ref:`content-view-templates`

^^^^^^^
Anchors
^^^^^^^

.. _documentation-template

==================================================
Titles, Sections, sub-sections and sub-subsections
==================================================

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

.. image:: /_static/images/admin-console-link.png
        :width: 25%
        :alt: Admin Console Link
        :align: center

^^^^^^
Figure
^^^^^^

.. figure:: /_static/images/create-content-type-3.png
        :alt: Properties Explorer
        :align: center

---------------------
Bullets and Numbering
---------------------

Numbered bullets 1
# lorem ipsum
# lorem ipsum
# lorem ipsum

Numbered bullets 2
#. lorem ipsum
#. lorem ipsum
#. lorem ipsum

Bullets
* lorem ipsum
* lorem ipsum
* lorem ipsum


-------------------------
Notes, Todos and Warnings
-------------------------

.. note:: Important note

.. todo:: Todo

.. warning:: Warning!

------
Tables
------

=============== ============================================================================================
Short Column    Long Column
=============== ============================================================================================
Row 1 Column 1  Row 1 Column 2
Row 2 Column 1  Row 2 Column 2
=============== ============================================================================================


-----------
Code Blocks
-----------

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

.. include:: ../includes/unicode-checkmark.rst

