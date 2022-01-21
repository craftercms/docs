:is-up-to-date: True

.. index:: Page Redirect

.. _page-redirect:

=========
Redirects
=========

A redirect sends users from one URL to another URL.  CrafterCMS provides a couple of ways to setup redirects.

--------------------------------
Redirect using the Tuckey Filter
--------------------------------

CrafterCMS comes with tuckey filter, a Java Web Filter which allows you to rewrite URLs, like Apache's mod_rewrite, for setting up rewrite rules.  For more details on how to use the filter in CrafterCMS for setting up rewrite rules, please see: :ref:`configure-url-rewrite`

-------------------------------------------
Redirect using a content type in CrafterCMS
-------------------------------------------

Another way to perform redirects is by using a ``/page/redirect`` content type containing a field named ``redirect-url`` which Crafter Engine picks up, then acts on.  Let's take a look at an example where we want the URL **localhost:8080/fashion** to redirect to the category landing page for style **localhost:8080/style**

Create content type for redirecting
-----------------------------------

Open the **Sidebar** then click on |siteConfig|.  Click on **Content Types** -> **Create New Type**.  In the **Display Label** field, enter ``Page - Redirect`` and in the **Content Type Name** enter ``redirect``.  Remember to select **Type** as ``Page``.

.. image:: /_static/images/developer/redirect/create-redirect-content-type.png
    :alt: Redirect - Create redirect content type
    :width: 45 %
    :align: center

|

After clicking on the **Create** button, the form for the content type will open.  Add an ``Input`` control in the properties and set the **Title** as ``Redirect URL`` and the **Name / Variable Name** as ``redirect-url``

.. image:: /_static/images/developer/redirect/page-redirect-content-type-form.png
    :alt: Redirect - Page redirect content type form
    :width: 75 %
    :align: center

|

Save the changes by clicking on the ``Save`` button.  A dialog will pop up with a warning that there is no template associated with the content type.  The content type does not need a template, so just click on ``Save``.

Create the page for redirecting
-------------------------------

Go back to site preview or dashboard and open the **Sidebar**.  Right click on ``Home`` and select ``New Content``.  Select the content type ``Page - Redirect`` created above.  Fill in **Page URL** with ``fashion``, **Internal Name** with ``fashion`` and **Redirect URL** with ``/style`` since we want the page to redirect to the category landing page for style, then click on **Save and Close**

.. image:: /_static/images/developer/redirect/page-redirect-fashion.png
    :alt: Redirect - Page redirect - fashion
    :width: 75 %
    :align: center

|

Go back to preview or the dashboard.  In the **Sidebar**, click on **fashion** under **Home**, notice that the page opened is the category landing page for style!

Publish the page **fashion** to make it available in delivery.  To test it out in delivery, after publishing, in your browser, type in ``localhost:9080/fashion``.  You should then be taken to the category landing page for style.

Next, let's try redirecting to another site instead of another page in our site.  Edit the **fashion** page by right clicking on **fashion** in the **Sidebar** and selecting **Edit**.  In the **Redirect URL** field, enter ``https://www.google.com``. Save and publish the changes.  Go back to your browser and type in ``localhost:9080/fashion``, the page should go to ``https://www.google.com``.
