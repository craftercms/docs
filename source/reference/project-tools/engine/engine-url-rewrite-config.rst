:is-up-to-date: True
:last-updated: 4.1.1

:orphan:

.. index:: Configurations

.. highlight:: xml

.. _engine-url-rewrite-configuration:

================================
Engine URL Rewrite Configuration
================================

URL rewriting turns hard to remember, long and complicated URLs into easier to remember URLs.

CrafterCMS comes with the Tuckey URLRewrite filter, a Java Web Filter with functionality like Apache's mod_rewrite,
that lets you setup rewrite rules for your site.

To add a URL rewrite rule, in Studio, open the **Sidebar** then click on |projectTools|. Click on **Configuration**
then select **Engine URL Rewrite Configuration (XML Style)**.

.. image:: /_static/images/site-admin/config-urlrewrite-select.webp
    :alt: Configurations - Open URL Rewrite Configuration
    :width: 45 %
    :align: center

|

------
Sample
------

Here's a sample urlrewrite.xml file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "urlrewrite.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-urlrewrite.xml
   :caption: *CRAFTER_HOME/data/repos/sites/PROJECTNAME/sandbox/config/engine/urlrewrite.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|

After making your changes and saving the configuration, remember to publish the configuration file just saved
(``urlrewrite.xml`` file).  To publish the configuration file, from the **Sidebar**, click on **Dashboard**.
In the **Unpublished Work** dashlet, check the box next to the ``urlrewrite.xml`` file, and click **Publish**
from the context nav to publish.

.. image:: /_static/images/site-admin/publish-urlrewrite.webp
    :alt: Configurations - Publish URL Rewrite Config File from Dashboard
    :width: 85 %
    :align: center

|

For more information on the UrlRewriteFilter, see http://tuckey.org/urlrewrite/
