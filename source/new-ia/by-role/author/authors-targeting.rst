:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:

.. index:: Targeting

..  _newIa-content_authors_targeting:

==================
Audience Targeting
==================

This section describes how authors can use audience targeting in creating/previewing experiences.

Targeting allows an author to see what the project would look like if it were being browsed by a
user with a given set of attributes.  It also allows an author to tag the content being authored to
the configured attributes on the project.

-------------
Tagging Pages
-------------

When creating a page in a project created using the Website Editorial blueprint, content can be targeted
to the page visitor's segment.  This is done by tagging which segment the page is targeted for.

To tag a page, in the Sidebar panel, click on the **Pages** folder.  Navigate to the level and location
within the project navigation tree where you want to tag the content, then right click and select **Edit**.
Depending on how tagging was named/setup, go to the section for tagging content and check the box next to
the attribute the page is targeted for.

In the example below, targeting is in the **Metadata** section, under **Segments**, where the available
segments are Anonymous, Guy and Gal, and the page is currently tagged for the segment **Guy**.

.. image:: /_static/images/page/page-targeting-tags.webp
    :width: 75 %    
    :align: center

|

.. |targetingIcon| image:: /_static/images/content-author/page-targeting-icon.webp
                      :width: 3%
                      :alt: Targeting Icon

.. _newIa-content_authors_site_views_diff_segments:

-------------------------------------------
Viewing the project with different segments
-------------------------------------------

The authoring environment can be configured with any number of predefined attributes for targeting. A set
of attributes is like a profile, in fact it behaves exactly the same way but instead of setting up and
signing in as specific users to test different scenarios authors can simply switch back and forth between
the available configured attributes.

To find out the current active targeting attributes, switch ``Edit Mode`` to on (pencil icon found on the
top right of Studio, which then opens the experience builder panel on the right hand side).  Click on
``Audience Targeting`` and the current attribute values will be displayed in the panel.  You can have as
many attributes as you need for your project.  To add other attributes, please see the section
:ref:`newIa-targeting` in the developer's section of the documentation.

.. image:: /_static/images/page/page-targeting-open.webp
    :width: 80 %
    :align: center

|

In the Website Editorial blueprint that we are using, the targeting attribute used is ``Segment``.

.. image:: /_static/images/page/page-targeting-curr-attributes.webp
    :width: 30 %
    :align: center

|

To view what the project would look like if it were being browsed by a certain segment, open
``Audience Targeting`` by switching on ``Edit Mode`` on the upper right hand of Studio, click on
``Audience Targeting`` then select the segment you would like to see the project with.

.. image:: /_static/images/page/page-targeting-segment.webp
    :width: 30 %
    :align: center
    
|

Below is a page with the segment set to **Anonymous**.  Notice the articles available on the page.

.. image:: /_static/images/page/page-targeting-anonymous.webp
    :width: 75 %    
    :align: center

|

Selecting a different segment than the currently selected one, will cause the preview for all
channels to immediately respond with content for a user with the attributes selected.  Below,
the segment **Guy** is selected.  Notice the articles available on the page has changed to display
only articles targeted to segment **Guy**


.. image:: /_static/images/page/page-targeting-guy.webp
    :width: 75 %    
    :align: center

|

Here, the segment **Gal** is selected.  Again, notice the articles available on the page.

.. image:: /_static/images/page/page-targeting-gal.webp
    :width: 75 %    
    :align: center    

|

As mentioned above, you can setup/configure as many attributes as needed to target your content
and for more information.  Please see the sections on targeting, :ref:`newIa-targeting` in the
developers section of the documentation and :ref:`newIa-targeting-configuration`  and
:ref:`newIa-targeting-guide` in the site administrators section of the documentation
for more information.
 

