:is-up-to-date: True

.. index:: Getting Started on Authoring; Author

..  _content_authors_getting_started:

============================
Getting Started on Authoring
============================

This section contains an overview on how an Author works in CrafterCMS.  Content authors creates, edits and submits content for a site.  CrafterCMS's Crafter Studio provides the content author an easy to use authoring and management system for developing and optimizing the content and dynamic site visitor experience for any and all of your Web properties.

.. include:: /includes/how-craftercms-works.rst

* Authors work in Crafter Studio

    * It is a web based application. There is nothing to install.
    * It is multi-tenant so you can manage as many sites as you need to
    * It provides a safe environment to make and preview content changes
    * All changes are versioned and audited
    * Once ready, content is submitted to workflow for approval

* On approval, content is published to the live environment.

    * Content can be published immediately
    * Or on a schedule

* Crafter Studio can publish to anywhere including social networks however, we often Publish to Crafter Engine.

    * Crafter Engine is a high performance, Spring MVC based content delivery engine.
    * Crafter Engine delivers highly personalized HTML (and other markup) based content and Content APIS (Content as a Service).
    * Crafter Engine is multi-channel.  It supports Responsive Design and Adaptive Design as well as Content as API(s)
    * Crafter Engine is multi-tenant so you can deliver as many sites as you need to.


----------
Logging in
----------

To log in to Crafter Studio:
    * Enter the following in the URL of your browser:  *http://SERVERNAMEHERE/studio*
    * Enter your user name
    * Enter your password
    * Click "Log In"

.. image:: /_static/images/content-author/login-screen-full.jpg
    :alt: Getting Started - Login Screen
    :width: 85 %
    :align: center
    
Note: You can change the language used for the Studio UI by clicking on ``Language`` on the log in screen.

^^^^^
Roles
^^^^^

After logging in, depending on what access rights have been setup for your user account, you can have one of two primary roles as a content author:

    * **Content Manager (Publisher Role)** A content Manager has the ability to approve and reject workflow. A content manager also has access to a number of dashboards which are not available to content contributors including Recently Published and Approved Scheduled Items.

    * **Content Contributor(Author Role)** A content contributor has access to create, edit and submit content

