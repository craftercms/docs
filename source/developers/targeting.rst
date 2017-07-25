.. _targeting:

=================
Content Targeting
=================

Targeting is a Crafter CMS feature that allows delivering the right experience, with the right
content, to the right people at the right time.  Crafter CMS provides the ability to render content
adapted to specific users, depending on different aspects like geographical location, language,
preferences, etc. The following sections describe how you can use this feature to organize content.

--------------------------
Targeting Using Taxonomies
--------------------------

Taxonomies allow you to organize your content to make it easy for your site users to browse what
they want and deliver content appropriate for them. It also allows you to search for content faster.

The :ref:`Content Authors - Personalization<content_authors_targeting>` section of the documentation,
describes how Content Authors can target content with taxonomies based on segments and how to view
the site depending on who is browsing. This section describes how to add the segments and segment
targeting on pages as seen in the Website Editorial blueprint, so that content authors can target
their content.

For the segments, we will have the values ``Guy`` and ``Gal``.

^^^^^^^^^^^
Configuring
^^^^^^^^^^^

**Targeting Configuration**

.. figure:: /_static/images/targeting/targeting-config-open.png
    :alt: Targeting - Open Configuration
    :width: 50 %
    :align: center

Targeting can be configured by clicking on **Site Config** in the Sidebar, then clicking on 
**Configuration** and finally selecting **Targeting Configuration** from the dropdown box.
Below is the sample configuration for Guy and Gal, that is used in the Website Editorial
blueprint.

The file can also be found in the path ``/config/studio/targeting/targeting-config.xml``

.. code-block:: xml
  :caption: Example targeting-config.xml
  :linenos:

  <targeting>
  
    <property>
      <name>segment</name>
      <label>Segment</label>
      <description>User segment.</description>
      <type>dropdown</type>
      <possible_values>
        <value>guy</value>
        <value>gal</value>
        <value></value>
      </possible_values>
      <default_value></default_value>
      <hint>Setting the segment will change content targeting to the audience selected.</hint>
    </property>
    
    <property>
      <name>name</name>
      <label>Name</label>
      <description>User's first and last name.</description>
      <type>input</type>
      <default_value>Joe Bloggs</default_value>
      <hint>Enter user's first and last name.</hint>
    </property>
    
  </targeting>

**Segments List**

Here's the list that will be used by the Website Editorial blueprint when modeling the segments
into the content.  The list was created by right clicking on **Taxonomy** in the Sidebar, then
clicking on **New Content**.

Here's the list after entering the desired segments:

.. figure:: /_static/images/targeting/tagging-segments.png
    :alt: Targeting - Segments Taxonomy
    :width: 80 %
    :align: center

Here's the resulting xml file:

.. code-block:: xml
  :linenos:
  :caption: segments.xml

  <component>
  
    ...
    
    <items>
      <item>
        <key>guy</key>
        <value>Guy</value>
      </item>
      <item>
        <key>gal</key>
        <value>Gal</value>
      </item>
    </items>
    
    ...
    
  </component>

^^^^^^^^^^^^^^^^^^^^^^^^^
Model Criteria in Content
^^^^^^^^^^^^^^^^^^^^^^^^^

We will now see how to add the segments you just configured into a page.  From the Sidebar, click
on **Site Config**, next click on **Content Types**.  Click on **Open Existing Types**, then select
 **Page - Articles**

.. figure:: /_static/images/targeting/tagging-personas-model-open.png
    :alt: Targeting - Open Model Personas
    :width: 80 %
    :align: center

In the Metadata section of the form, a *Grouped Checkboxes* control is used to model our segments.
The control is then named **Segments**, with the *Data Source* property in the Properties Explorer
Section set to *Segments*.

.. figure:: /_static/images/targeting/tagging-personas-model.png
    :alt: Targeting - Model Taxonomy
    :width: 80 %
    :align: center

^^^^^^^^^^^^^^^^^^
Update the Content
^^^^^^^^^^^^^^^^^^

Now that we have modeled the criteria, we can now update the content. When you create a new article
page, you will see the grouped check boxes that we added in the previous section, in the Metadata
section, ready for the content author to select which segment the page is targeted for. We will
look at one of the articles in the blueprint, "Coffee is good for your health" as an example of
content for targeting.  Click on the article from the Sidebar, then click on **Edit** in the
context nav.  Notice that the article is targeted for both Guy and Gal (Guy and Gal checkbox
checked).

.. figure:: /_static/images/targeting/targeting-personas-tag-content.png
    :alt: Targeting - Segments Metadata in Content
    :width: 80 %
    :align: center


^^^^^^^^^^^^^^^^^^^^^^^^
Build Dynamic Components
^^^^^^^^^^^^^^^^^^^^^^^^

After targeting the content, we will now see how we can display pages depending on which user is
logged in. Let's take a look at the home page of the Website Editorial blueprint. We are browsing
as an user with the segment Gal, and we're looking at the featured articles:

.. figure:: /_static/images/targeting/tagging-personas-home-page.png
    :alt: Targeting - Targeted Home Page
    :width: 80 %
    :align: center

In order to display only articles targeted for gal, a groovy script is used that is run before the
page renders so it knows which articles are supposed to be displayed for the current user.  Here is
the groovy script used to get the articles according to the right segment:

.. code-block:: groovy
  :caption: Home Page Groovy Script
  :linenos:
  :emphasize-lines: 4,6

  import org.craftercms.sites.editorial.SearchHelper
  import org.craftercms.sites.editorial.ProfileUtils

  def segment = ProfileUtils.getSegment(profile, siteItemService)
  def searchHelper = new SearchHelper(searchService, urlTransformationService)
  def articles = searchHelper.searchArticles(true, null, segment)

  templateModel.articles = articles

From the script, you can see that it gets the segment currently active, then it searches for
articles targeted for the right value, which it then returns to the template, ready to be displayed
when the page renders. To see how the articles displayed differ depending on who the current active
user is, please see the section: :ref:`content_authors_site_views_diff_personas`


--------------------------
Targeting Using Categories
--------------------------

Another way of using taxonomies for organizing content is by targeting pages based on categories.
First, decide on the categories that you'd like to use. After deciding on the categories, we will
now work on adding in metadata to our site that content authors can use. In the Website Editorial
blueprint, the following categories are used:

- Health
- Style
- Entertainment
- Technology

^^^^^^^^^^^
Configuring
^^^^^^^^^^^

Here's the list that will be used by the Website Editorial blueprint when modeling the categories
into the content. The list was created by right clicking on **Taxonomy** in the Sidebar, then
clicking on **New Content**.

Here's the list after entering the desired categories:

.. figure:: /_static/images/targeting/tagging-categories.png
    :alt: Targeting - Categories
    :width: 80 %
    :align: center

Here's the resulting xml file:

.. code-block:: xml
  :caption: categories.xml

  <items>
    <item>
      <key>style</key>
      <value>Style</value>
    </item>
    <item>
      <key>health</key>
      <value>Health</value>
    </item>
    <item>
      <key>entertainment</key>
      <value>Entertainment</value>
    </item>
    <item>
      <key>technology</key>
      <value>Technology</value>
    </item>
  </items>

^^^^^^^^^^^^^^^^^^^^^^^^^
Model Criteria in Content
^^^^^^^^^^^^^^^^^^^^^^^^^

We will now see how to add the categories you just configured into a page.  From the Sidebar, click
on **Site Config**, next click on **Content Types**.  Click on **Open Existing Types**, then select
**Page - Articles**

.. figure:: /_static/images/targeting/tagging-personas-model-open.png
    :alt: Targeting - Open Model Categories
    :width: 80 %
    :align: center

In the Metadata section of the form, a *Grouped Checkboxes* control is used to model our categories.
The control is then named **Categories**, with the *Data Source* property in the Properties Explorer
Section set to *categories*.

.. figure:: /_static/images/targeting/tagging-categories-model.png
    :alt: Targeting - Model Categories
    :width: 80 %
    :align: center

^^^^^^^^^^^^^^^^^^
Update the Content
^^^^^^^^^^^^^^^^^^

Now that we have modeled the criteria, we can now target content. When you create a new article page,
you will see the grouped check boxes that we added in the previous section, in the Metadata section,
ready for the content author to select which category the page falls into. We will look at one of the
articles in the blueprint, "Women Styles for Winter" as an example of targeting content based on
category. Click on the article from the Sidebar, then click on **Edit** in the context nav. Notice
that the article is targeted for the *Style* category.

.. figure:: /_static/images/targeting/tagging-categories-tag-content.png
    :alt: Targeting - Categories Metadata in Content
    :width: 80 %
    :align: center

^^^^^^^^^^^^^^^^^^^^^^^^
Build Dynamic Components
^^^^^^^^^^^^^^^^^^^^^^^^

After updating the content, we can now see how we can use the categories we just setup on displaying
content. Let's take a look at the homepage of our site.  On the left side of the page, you can see
the left rail of our site.  If your screen is not wide enough, look at the top left corner of the
page, there is a hamburger icon/button (multiple lines in red that sort of looks like a hamburger),
click on that icon to display the left rail.

.. figure:: /_static/images/targeting/tagging-hamburger-icon.png
    :alt: Targeting - Hamburger Icon
    :width: 80 %
    :align: center

Let us look at the navigation menu on the left rail.  As you can see, the categories we used to
target our pages can be used as navigation headings for the site.

.. figure:: /_static/images/targeting/tagging-categories-left-rail.png
    :alt: Targeting - Categories Left Rail
    :width: 80 %
    :align: center

We'll now take a closer look on how our taxonomy for categories is used for displaying articles in
the landing pages of our site. On the left rail of our site, click on **Health**, notice how all
the articles listed on the page are targeted for category *Health*.  (To check the category for
an article, just click on the article then click on **Edit** on the context nav at the top of the
page. Go down to the *Metadata* section to see which category is selected.)

.. figure:: /_static/images/targeting/tagging-categories-landing.png
    :alt: Targeting - Categories Landing Page
    :width: 80 %
    :align: center

In order to display just the articles targeted for a certain category, a groovy script is run before
the page renders.  To do this, we need to create a script named after the page we want the script
to run before rendering, under *scripts -> pages*   In the groovy script below, a query is sent to
ask for all articles targeted for the requested category. (To see the script in Studio, from the
Sidebar. navigate to scripts -> pages -> category-landing.groovy) Please see
:ref:`content-type-controller-definition` for more details on binding a script to a page or component.

.. code-block:: groovy
  :caption: Category Landing Page Script
  :linenos:
  :emphasize-lines: 5, 8

  import org.craftercms.sites.editorial.SearchHelper
  import org.craftercms.sites.editorial.ProfileUtils

  def segment = ProfileUtils.getSegment(profile, siteItemService)
  def category = contentModel.category.text
  def maxArticles = contentModel.max_articles.text as Integer
  def searchHelper = new SearchHelper(searchService, urlTransformationService)
  def articles = searchHelper.searchArticles(false, category, segment, 0, maxArticles)

  templateModel.articles = articles

Another way of using the categories tag is for displaying a list of related articles based on the
article being browsed.  We will look at the content type component **Component - Articles Widget**
to see how this is done in our Website Editorial blueprint.  We will open the model for the
component article widget by going to the *Sidebar*, then clicking on **Content Types -> Open
Existing Type -> Component Articles Widget**

.. figure:: /_static/images/targeting/tagging-component-article-open.png
    :alt: Targeting - Open Component Article Widget
    :width: 80 %
    :align: center

In the dialog, notice the item selector control labeled **Controllers** with data source
**Scripts**.  This picker will be used to select which script we want to run before the component
renders in its container.

.. figure:: /_static/images/targeting/tagging-component-article-form.png
    :alt: Targeting - Form Component Article Widget
    :width: 80 %
    :align: center

We'll now take a look at the component created to display related articles. In the Sidebar,
navigate to the **Components -> articles-widget** folder, then right click on **Related Articles
Widget** and click on **Edit**

.. figure:: /_static/images/targeting/tagging-component-related-open.png
    :alt: Targeting - Open Component Related Articles
    :width: 50 %
    :align: center

In the **Controllers** section, you'll see the groovy script that will be run before rendering
the component.

.. figure:: /_static/images/targeting/tagging-component-related-form.png
    :alt: Targeting - Open Component Related Articles
    :width: 80 %
    :align: center

To open the groovy script, click on the Sidebar and navigate the tree to **scripts -> components
then right click on related-articles.groovy** and select **Edit**.  In the groovy script, it
sends a query for articles in the same category as the article being viewed, then passes on the
articles to the template model of the component ready for rendering.

.. code-block:: groovy
  :caption: Related Articles Component Script
  :linenos:
  :emphasize-lines: 8

  import org.craftercms.sites.editorial.SearchHelper
  import org.craftercms.sites.editorial.ProfileUtils

  def segment = ProfileUtils.getSegment(profile, siteItemService)
  def searchHelper = new SearchHelper(searchService, urlTransformationService)
  // articleCategories and articlePath should be provided as additionalModel of the component and
  // should be the categories of the current article
  def articles = searchHelper.searchArticles(false, articleCategories, segment, 0, 3, "-localId:\"${articlePath}\"")

  templateModel.articles = articles

To see the component in action, click on one of the articles to view.  In the image below, the
article **Coffee is Good for Your Health** is being viewed, which is tagged for the Health
category, then the left rail is expanded by clicking on the hamburger icon at the top left of
the page.  In the left rail, we can see the related articles to the one currently being viewed
in the page (articles tagged for category Health).

.. figure:: /_static/images/targeting/tagging-component-related-display.png
    :alt: Targeting - Script Component Related Articles
    :width: 80 %
    :align: center

