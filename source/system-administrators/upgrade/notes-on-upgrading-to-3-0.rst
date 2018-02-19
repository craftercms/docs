--------------------------------------------------
Notes on Upgrading to Crafter CMS 3.0.0 from 2.5.x
--------------------------------------------------

^^^^^^^^^^^^^^^^^
1. Crafter Studio
^^^^^^^^^^^^^^^^^

1.1. Repository Changes
^^^^^^^^^^^^^^^^^^^^^^^

**1.1.1 Structure**

The entire repository is now divided in two separate spaces. One space is for global content and configurations, and the other is for sites content and configurations.
Global space contains site blueprints and studio (global) configuration.
Sites space is further divided into separate spaces for each site. Site subspace contains content and configuration. Major difference from previous versions is that site specific configuration is part of site content (site content and configuration are unified within same space)
Example:
Content types configuration in previous version was stored in following location: ``/cstudio/config/sites/{SITENAME}/content-types/{CONTENT_TYPE}``. Since 3.0.0 content types are stored in: ``repos/sites/{SITENAME}/sandbox/config/studio/content-types/{CONTENT_TYPE}``

**1.1.2 Source control**

Git is used as the source control system. Regarding new repository structure, multiple git repositories are used for the entire studio repository. One git repository is used for global space, and for sites, two git repositories are used per site (one for sandbox and one for published content).