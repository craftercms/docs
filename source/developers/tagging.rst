.. _tagging:

=======
Tagging
=======

Tagging allows you to organize your content to make it easy for your site users to browse content they want and allows you to deliver content appropriate for your users.  It also allows you to search for content faster.  The following sections describe how you can use tagging to organize content.

---------
Targeting
---------

The :ref:`Content Authors - Personalization<content_authors_targeting>` section of the documentation, described how Content Authors can target content by tagging pages based on segments and how to view the site depending on who is browsing.  This section describes how to add the segments and segment targeting on pages as seen in the Website_Editorial blueprint, so that content authors can target their content.

For the segments, we have Anonymous, Guy and Gal.

^^^^^^^^^^^
Configuring
^^^^^^^^^^^

Persona Configuration

.. figure:: /_static/images/tagging-personas-configuration.png
    :alt: Tagging-Open Personas Configuration
    :width: 50 %
    :align: center

Personas can be configured by clicking on **Site Config** in the Sidebar, then clicking on **Configuration** and finally selecting **Personas Configuration** from the dropdown box.  Below is a sample persona configuration for Anonymous, Guy and Gal, that is used in the Website_Editorial blueprint.

persona-config.xml

.. code-block:: xml

    <personas>
        <persona>
            <name>Anonymous</name>
            <description>User is unknown.</description>
            <thumb>anonymous.png</thumb>
            <settings>
                <property>
                    <name>segment</name>
                    <label>Segment</label>
                    <value>unknown</value>
                </property>
                <property>
            	    <name>name</name>
                    <label>Name</label>
                    <value>unknown</value>
                </property>
            </settings>
        </persona>

        <persona>
            <name>Guy</name>
            <description>User is a guy.</description>
            <thumb>guy.png</thumb>
            <settings>
                <property>
            	    <name>segment</name>
            	    <label>Segment</label>
            	    <value>guy</value>
                </property>
			    <property>
            	    <name>name</name>
                    <label>Name</label>
                    <value>John</value>
                </property>
            </settings>
        </persona>

        <persona>
            <name>Gal</name>
            <description>User is gal.</description>
            <thumb>gal.png</thumb>
            <settings>
                <property>
            	    <name>segment</name>
            	    <label>Segment</label>
            	    <value>gal</value>
                </property>
                <property>
            	    <name>name</name>
                    <label>Name</label>
                    <value>Jane</value>
                </property>
            </settings>
        </persona>
    </personas>


Segments Configured List

Here's the list that will be used by the Website_Editorial blueprint when modeling the segments into the content.  It can be configured by clicking on **Site Config** in the Sidebar, then clicking on **Configuration** and finally selecting **Segments Configured List** from the dropdown box.

segments.xml

.. code-block:: xml

    <list>
	    <values>
		    <item>
			    <key>guy</key>
			    <value>Guy</value>
		    </item>
		    <item>
			    <key>gal</key>
			    <value>Gal</value>
		    </item>
	    </values>
    </list>

^^^^^^^^^^^^^^^^^^^^^^^^^
Model Criteria in Content
^^^^^^^^^^^^^^^^^^^^^^^^^

We will now see how to add the personas/segments you just configured into a page.  From the Sidebar, click on **Site Config**, next click on **Content Types**.  Click on **Open Existing Types**, then select **Page - Articles**

.. figure:: /_static/images/tagging-personas-model-open.png
    :alt: Tagging-Open Model Personas
    :width: 80 %
    :align: center

In the Metadata section of the form, a *Grouped Checkboxes* control is used to model our segments.  The control is then named **Segments**, with the *Data Source* property in the Properties Explorer Section set to *Segments*.

.. figure:: /_static/images/tagging-personas-model.png
    :alt: Tagging-Model Personas
    :width: 80 %
    :align: center

^^^^^^^^^^^^^^^
Tag the Content
^^^^^^^^^^^^^^^

Now that we have modeled the criteria, we can now tag content.  When you create a new article page, you will see the grouped check boxes that we added in the previous section, in the Metadata section, ready for the content author to tag which segment the page is targeted for.  We will look at one of the articles in the blueprint, "Coffee is good for your health" as an example of tagging content for targeting.  Click on the article from the Sidebar, then click on **Edit** in the context nav.  Notice that the article is tagged for both Guy and Gal (Guy and Gal checkbox checked), which in this case is targeted for persona *Anonymous*

.. figure:: /_static/images/targeting-personas-tag-content.png
    :alt: Tagging-Personas Tag the Content
    :width: 80 %
    :align: center


^^^^^^^^^^^^^^^^^^^^^^^^
Build Dynamic Components
^^^^^^^^^^^^^^^^^^^^^^^^

After tagging the content, we will now see how we can display pages depending on which persona is logged in.  Let's take a look at the home page of the Website_Editorial blueprint.  We have the persona browsing as Gal, and we're looking at the featured articles:

.. figure:: /_static/images/tagging-personas-home-page.png
    :alt: Tagging-Personas Home Page
    :width: 80 %
    :align: center

In order to display only articles tagged for gal, a groovy script is used that is run before the page renders so it knows which articles are supposed to be displayed for the Persona Gal.  Here is the groovy script used to get the articles for the persona browsing the site:

.. figure:: /_static/images/tagging-personas-home-page-groovy.png
    :alt: Tagging-Personas Home Page Groovy Script
    :width: 80 %
    :align: center

From the script, you can see that it gets the persona/segment currently active, then it searches for articles tagged for the current active persona/segment, which it then returns to the template, ready to be displayed when the page renders.  To see how the articles displayed differ depending on who the current active persona is, please see the section: :ref:`content_authors_site_views_diff_personas`


----------
Categories
----------

Another way of using tags for organizing content is by tagging pages based on categories.  First, decide on the categories that you'd like to use.  After deciding on the categories, we will now work on adding in tags to our site that content authors can use.  In the Website Editorial blueprint, the following categories are used:

- Health
- Style
- Entertainment
- Technology

^^^^^^^^^^^
Configuring
^^^^^^^^^^^

Here's the list that will be used by the Website_Editorial blueprint when modeling the categories into the content.  It can be configured by clicking on **Site Config** in the Sidebar, then clicking on **Configuration** and finally selecting **Categories Configured List** from the dropdown box.

categories.xml

.. code-block:: xml

     <list>
	    <values>
		    <item>
			    <key>technology</key>
			    <value>Technology</value>
		    </item>
		    <item>
			    <key>entertainment</key>
			    <value>Entertainment</value>
		    </item>
		    <item>
			    <key>health</key>
			    <value>Health</value>
		    </item>
		    <item>
			    <key>style</key>
			    <value>Style</value>
		    </item>
	    </values>
    </list>

^^^^^^^^^^^^^^^^^^^^^^^^^
Model Criteria in Content
^^^^^^^^^^^^^^^^^^^^^^^^^

We will now see how to add the categories you just configured into a page.  From the Sidebar, click on **Site Config**, next click on **Content Types**.  Click on **Open Existing Types**, then select **Page - Articles**

.. figure:: /_static/images/tagging-personas-model-open.png
    :alt: Tagging-Open Model Categories
    :width: 80 %
    :align: center

In the Metadata section of the form, a *Grouped Checkboxes* control is used to model our categories.  The control is then named **Categories**, with the *Data Source* property in the Properties Explorer Section set to *categories*.

.. figure:: /_static/images/tagging-categories-model.png
    :alt: Tagging-Model Categories
    :width: 80 %
    :align: center

^^^^^^^^^^^^^^^
Tag the Content
^^^^^^^^^^^^^^^

Now that we have modeled the criteria, we can now tag content.  When you create a new article page, you will see the grouped check boxes that we added in the previous section, in the Metadata section, ready for the content author to tag which category the page falls into.  We will look at one of the articles in the blueprint, "Women Styles for Winter" as an example of tagging content based on category.  Click on the article from the Sidebar, then click on **Edit** in the context nav.  Notice that the article is tagged for the *Style* category.

.. figure:: /_static/images/tagging-categories-tag-content.png
    :alt: Tagging-Categories Tag the Content
    :width: 80 %
    :align: center

^^^^^^^^^^^^^^^^^^^^^^^^
Build Dynamic Components
^^^^^^^^^^^^^^^^^^^^^^^^
After tagging the content, we can now see how we can use the categories we just setup on displaying content.  Let's take a look at the homepage of our site.  On the left side of the page, you can see the left rail of our site.  If your screen is not wide enough, look at the top left corner of the page, there is a hamburger icon/button (multiple lines in red that sort of looks like a hamburger), click on that icon to display the left rail.

.. figure:: /_static/images/tagging-hamburger-icon.png
    :alt: Tagging Hamburger Icon
    :width: 80 %
    :align: center

Let us look at the navigation menu on the left rail.  As you can see, the categories we used to tag our pages can be used as navigation headings for the site.

.. figure:: /_static/images/tagging-categories-left-rail.png
    :alt: Tagging-Categories Left Rail
    :width: 80 %
    :align: center

We'll now take a closer look on how our tags for categories, are used for displaying articles in the landing pages of our site.  On the left rail of our site, click on **Health**, notice how all the articles listed on the page is tagged for category *Health*.  (To check the category tagged for an article, just click on the article then click on **Edit** on the context nav at the top of the page.  Go down to the *Metadata* section to see which category the article is tagged for.)

.. figure:: /_static/images/tagging-categories-landing.png
    :alt: Tagging-Categories Landing Page
    :width: 80 %
    :align: center

In order to display just the articles tagged for a certain category, a groovy script is run before the page renders.  To do this, we need to create a script named after the page we want the script to run before rendering, under *scripts -> pages*   In the groovy script below, a query is sent to ask for all articles tagged for the requested category. (To see the script in Studio, from the Sidebar. navigate to scripts -> pages -> category-landing.groovy) Please see :ref:`content-type-controller-definition` for more details on binding a script to a page or component.

.. figure:: /_static/images/tagging-landing-page-script.png
    :alt: Tagging-Landing Page Script
    :width: 80 %
    :align: center


Another way of using the categories tag is for displaying a list of related articles based on the article being browsed.  We will look at the content type component **Component - Articles Widget** to see how this is done in our Website_Editorial blueprint.  We will open the model for the component article widget by going to the *Sidebar*, then clicking on **Content Types -> Open Existing Type -> Component Articles Widget**

.. figure:: /_static/images/tagging-component-article-open.png
    :alt: Tagging-Open Component Article Widget
    :width: 80 %
    :align: center

In the dialog, notice the item selector control labelled **Controllers** with data source **Scripts**.  This picker will be used to select which script we want to run before the component renders in its container.

.. figure:: /_static/images/tagging-component-article-form.png
    :alt: Tagging-Form Component Article Widget
    :width: 80 %
    :align: center

We'll now take a look at the component created to display related articles.  In the Sidebar, navigate to the **Components** folder, then right click on **Related Articles Widget** and click on **Edit**

.. figure:: /_static/images/tagging-component-related-open.png
    :alt: Tagging-Open Component Related Articles
    :width: 80 %
    :align: center

In the **Controllers** section, you'll see the groovy script that will be run before rendering the component.

.. figure:: /_static/images/tagging-component-related-form.png
    :alt: Tagging-Open Component Related Articles
    :width: 80 %
    :align: center

To open the groovy script, click on the Sidebar and navigate the tree to **scripts -> components ** then right click on **related-articles.groovy** and select **Edit**.  In the groovy script, it sends a query for articles in the same category as the article being viewed, then passes on the articles to the template model of the component ready for rendering.

.. figure:: /_static/images/tagging-component-related-script.png
    :alt: Tagging-Script Component Related Articles
    :width: 80 %
    :align: center

To see the component in action, click on one of the articles to view.  In the image below, the article **Coffee is Good for Your Health** is being viewed, which is tagged for the Health category, then the left rail is expanded by clicking on the hamburger icon at the top left of the page.  In the left rail, we can see the related articles to the one currently being viewed in the page (articles tagged for category Health).

.. figure:: /_static/images/tagging-component-related-display.png
    :alt: Tagging-Script Component Related Articles
    :width: 80 %
    :align: center

