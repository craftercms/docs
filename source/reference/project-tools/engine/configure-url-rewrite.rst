:is-up-to-date: False
:last-updated: 4.0.0


.. index:: URL Rewrite

.. _configure-url-rewrite:

=========================
Configuring URL Rewriting
=========================

URL rewriting turns hard to remember, long and complicated URLs into easier to remember URLs. Simple URL rewrite rules per site can be done through Crafter Engine.

CrafterCMS comes with the Tuckey URLRewrite filter, a Java Web Filter with functionality like Apache's mod_rewrite, that lets you setup rewrite rules for your site.

To add a URL rewrite rule, in Studio, open the **Sidebar** then click on |projectTools|. Click on **Configuration** then select **Engine URL Rewrite Configuration (XML Style)**.

.. image:: /_static/images/site-admin/config-urlrewrite-select.webp
    :alt: Configurations - Open URL Rewrite Configuration
    :width: 45 %
    :align: center

|

Below is a sample URL rewrite configuration.


.. code-block:: xml
    :linenos:

    <?xml version="1.0" encoding="utf-8"?>

    <!DOCTYPE urlrewrite
            PUBLIC "-//tuckey.org//DTD UrlRewrite 4.0//EN"
            "http://www.tuckey.org/res/dtds/urlrewrite4.0.dtd">

    <urlrewrite>

        <rule>
            <from>^/some/olddir/(.*)$</from>
            <to type="redirect">/very/newdir/$1</to>
        </rule>

        <rule match-type="wildcard">
            <from>/blog/archive/**</from>
            <to type="redirect">/roller/history/$1</to>
        </rule>

    </urlrewrite>

|

After saving the configuration, remember to publish the configuration file just saved (``urlrewrite.xml`` file).  To publish the configuration file, from the **Sidebar**, click on **Dashboard**.  In the **Unpublished Work** dashlet, check the box next to the ``urlrewrite.xml`` file, and click **Publish** from the context nav to publish.

.. image:: /_static/images/site-admin/publish-urlrewrite.webp
    :alt: Configurations - Publish URL Rewrite Config File from Dashboard
    :width: 85 %
    :align: center

|

For more information on the UrlRewriteFilter, see http://tuckey.org/urlrewrite/
