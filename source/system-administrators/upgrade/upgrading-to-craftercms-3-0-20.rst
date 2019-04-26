:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-0-20:

==============================================================================
Instructions for Upgrading to Crafter CMS 3.0.20 from a previous 3.0.x version
==============================================================================

After upgrading your Crafter CMS install, you will need to update the site-config configuration file in your existing site.

If you were using the Site Configuration file located in ``config/studio/site-config.xml`` to configure your preview server: <previewServer>http://localhost:3000</previewServer>

You will need to remove it and instead configure it in the Environment Configuration file located in: ``config/studio/environment-config/environment.xml`` <preview-server-url>http://localhost:3000</preview-server-url>

You can access the configuration files by following the locations listed above, or, you can use Studio.  To change the configuration in Studio, open the **Sidebar** then click on |siteConfig| **Site Config**.  Click on **Configuration** next and select **Environment Configuration** or **Site Configuration** from the dropdown box.
