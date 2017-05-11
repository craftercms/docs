==================
Create a Blueprint
==================

--------------------
What are Blueprints?
--------------------

Blueprints are Crafter CMS project templates.  It provides an initial structure/layout for your site containing one or more of the following: content types such as pages and components as described in :ref:`content-modeling`, static assets such as images, videos, etc., and site configuration files for managing items in the blueprint such as taxonomies (categories, segments), roles, permissions, etc.

.. image:: /_static/images/blueprint-anatomy.png
   :alt: Cook Books - Blueprint Anatomy
   :width: 65 %
   :align: center

In the blueprint that comes out of the box with Crafter CMS, Website_Editorial blueprint, it provides us with an initial structure for our site, along with the site navigation, content inheritance, taxonomies for organizing the content such as categories and segments, which was also used for targeting content, static assets such as the initial images and fonts used for the site and configuration files for managing things like the personas for targeting, the permissions for all the items in the site, the role mappings, the RTE configuration, etc.  To see more of the Website Editorial blueprint, please see :ref:`your_first_website` where we create a site based on the Website_Editorial blueprint.

As mentioned earlier, blueprints allows us to generate sites with predefined layouts, contents and configuration.  Blueprints could be a site theme or an API only site.  New blueprints can be created from a site and added into Crafter CMS allowing the creation of more sites based on the new blueprint.  In the section that follows, we will see how the Empty blueprint that comes out of the box from Crafter CMS and an existing site is used to create a new blueprint.