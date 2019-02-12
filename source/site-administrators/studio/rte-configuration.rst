.. index:: Rich Text Editor (RTE) Configuration;
.. _rte-configuration:

==============================
Rich Text Editor Configuration
==============================

RTEs are more effective/productive for authors  when they are configured properly for the specific type of content the author is managing.  A properly and effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a different look  and feel, different editing/menu options, available styles, components and other configurations.  You can also SHARE setups between similar RTEs in your project.  This document will help you understand how to configure RTEs in Crafter Studio.

----------------------------------------
Common Configurations for Effective RTEs
----------------------------------------
Here are some things to consider for setting up effective RTEs:

#. The rich text editor's width should be set to the same width as the region it is intended to edit
#. Site style sheet of your site is imported so it can be applied to the RTE
#. Site styles are being applied appropriately to the markup in the RTE.  Note that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configured to match the part of the site being edited
#. Toolbar is configured with only what is required for the specific use case (reducing options makes it easier for editors)
#. If plugins like ``insert component``, ``insert layout`` and so on are enabled it should be fully configured.

--------------
RTEs Supported
--------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   rte-setup
   rte2-setup
