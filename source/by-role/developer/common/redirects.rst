:is-up-to-date: False


.. index:: Page Redirect

.. _page-redirect:

=========
Redirects
=========

A redirect sends users from one URL to another URL.  CrafterCMS provides a couple of ways to setup redirects.

----------------------------
URL Rewrites and Vanity URLs
----------------------------

CrafterCMS supports URL rewriting and vanity URLs. It uses a Java Web Filter which allows you to rewrite URLs, like Apache's mod_rewrite, for setting up rewrite rules.  For more details on how to use the filter in CrafterCMS for setting up rewrite rules, please see: :ref:`configure-url-rewrite`

---------------------------------
URL Redirect Using a Content Item
---------------------------------

Another way to perform redirects is by using a ``/page/redirect`` content type containing a field named ``redirect-url`` which Crafter Engine picks up, then acts on.  Let's take a look at an example where we want the URL **localhost:8080/fashion** to redirect to the category landing page for style **localhost:8080/style**

This may be easier for some content authors that just want to create a redirect item quickly without access to the rewrite rules.

Simply install the plugin https://craftercms.com/marketplace/redirect-file-plugin to get started.

Create the Page for Redirecting
-------------------------------

Open the **Sidebar**.  Right click on ``Home`` and select ``New Content``.  Select the content type ``Page - Redirect``.  Fill in **Page URL** with ``fashion``, **Internal Name** with ``fashion`` and **Redirect URL** with ``/style`` since we want the page to redirect to the category landing page for style, then click on **Save and Close**

.. image:: /_static/images/developer/redirect/page-redirect-fashion.webp
    :alt: Redirect - Page redirect - fashion
    :width: 75 %
    :align: center

|

Go back to preview or the dashboard.  In the **Sidebar**, click on **fashion** under **Home**, notice that the page opened is the category landing page for style!

Publish the page **fashion** to make it available in delivery.  To test it out in delivery, after publishing, in your browser, type in ``localhost:9080/fashion``.  You should then be taken to the category landing page for style.

Next, let's try redirecting to another project instead of another page in our project.  Edit the **fashion** page by right clicking on **fashion** in the **Sidebar** and selecting **Edit**.  In the **Redirect URL** field, enter ``https://www.google.com``. Save and publish the changes.  Go back to your browser and type in ``localhost:9080/fashion``, the page should go to ``https://www.google.com``.
