:is-up-to-date: False

===================================
Crafter CMS |version| Documentation
===================================

.. default-domain:: craftercms

.. Section outline:
   1.1 What is Crafter CMS
   1.2 When/where to use Crafter CMS
   1.3 Who uses Crafter CMS
   1.4 FAQ

This documentation introduces key concepts in Crafter CMS |version|, presents the authoring and development environment, and provides operational and administrative considerations and procedures as well as a comprehensive reference section.


###################
What is Crafter CMS
###################

Crafter CMS is a modern content management platform for building digital experience applications including:

* Single Page Applications (SPAs) using frameworks like React, Vue, and Angular
* Native mobile apps and headless applications (IOT, digital signage, wearables, etc.)
* HTML5 websites using Bootstrap or other HTML frameworks
* e-commerce front-ends
* OTT video experiences on AWS Elemental Media Services
* AR/VR applications using A-Frame

Crafter is a dynamic CMS based on Git and supports DevOps processes for code and content. It is also a hybrid-headless, API-first (GraphQL, REST, in-process) CMS, and that allows developers to use their favorite UI frameworks and tools.

Crafter CMS differentiates itself from existing CMSs with its architecture: microservices-based, serverless, elastic and planet-wide scalability. To learn more, see the :ref:`newIa-architecture`.

#############################
When/where to use Crafter CMS
#############################

####################
Who uses Crafter CMS
####################

###
FAQ
###

---------------------------------
What do I need to run Crafter CMS
---------------------------------

Follow these instructions to run Crafter CMS and to download and install Crafter on your machine or server: :ref:`Quick Start Guide <getting-started>`

--------------------------------------------------------------------------------
Does Crafter CMS require Git?  My company uses XYZ source code control system...
--------------------------------------------------------------------------------

No.  Crafter CMS does not require your development team to use Git.  Crafter CMS employs a Git-based repository and publishing system, which comes embedded in every Crafter CMS. Using Crafter's Git-based repository for your content application's source code is optional.  You may continue to use the Source Code Management System of your choice for development.

-------------------------------
Do my authors need to know Git?
-------------------------------

No.  Authors do not need to know or work directly with Git at all in order to use Crafter CMS.

Authoring activities such as creating or editing content, uploading images, participating in workflow and publishing are performed via Crafter Studio, a web-based authoring tool. Crafter Studio sits on top of a headless Git-based repository and publishing system.  While content authors are performing their work via Crafter Studio, Crafter is managing all of the Git mechanics for them on their behalf behind the scenes.

-----------------------------------------------------
Do I need to run MongoDB in order to run Crafter CMS?
-----------------------------------------------------

No.  MongoDB is not mandatory for Crafter CMS to operate. MongoDB backs optional functionality in the platform.

Crafter CMS is composed of independent services that you can activate/de-activate as needed.  Two Crafter CMS services rely on MongoDB:

Crafter Profile which provides identity management, a distributed user attribute store and advanced targeting capabilities.
Crafter Social which provides support for User Generated Content (UGC).
These components add powerful capabilities to support your digital experiences but are not mandatory for Crafter CMS to deliver dynamic/personalized digital experiences.

-----------------------------------------------
Do I need to connect Crafter CMS to a database?
-----------------------------------------------

No.  It is not mandatory for Crafter CMS to connect to any external databases.  Crafter Studio embeds and manages its own database.  Crafter Social and Crafter Profile leverage MongoDB.  These are optional components.


------------------------------------
Can Crafter CMS be used as a portal?
------------------------------------
Yes. Crafter CMS is running portals for some of the most well known companies in the world.  Use cases include intranets, global extranets, B2B portals, B2E portals and B2C portals in hospitality, finance, logistics, education and telecom and many others.

Many people hear the word portal and immediately search for a "portal" technology that meets the JSR-268 standard.  Crafter CMS does not support JSR-268 natively.  We do integrate with Liferay Portal and have been deployed in cases where stronger WCM capabilities were required than what Liferay provides out of the box.

You only need JSR-268 if you want to build and deploy your application as "portlets."  Doing so certainly has some advantages like the ability to leverage different application stacks for different applications in the portal.  However, from an IT management perspective, unless there is good justification for different technology, doing so creates issues with technology management and total cost of ownership.


---------------------------------------
Can Crafter CMS be used for E-Commerce?
---------------------------------------

Yes.  Crafter helps build great e-commerce sites which gives marketing total control of the user experience while integrating with the back-end e-commerce functionality of your choosing.

--------------------------------------------------
Can Crafter CMS be used to build a marketing site?
--------------------------------------------------

Yes. Marketing sites are one of the top use cases for Crafter CMS.  Crafter gives marketers powerful tools to create and deploy dynamic, personalized experiences for users. Crafter also integrates with sales and marketing tools such as Salesforce, Marketo, Hubspot, Omniture, Google Analytics, iContact and many others.

-----------------------------------------------------
How long does it take to build a Crafter CMS website?
-----------------------------------------------------

Project duration depends on complexity of the website or other digital experience you are building.  A project might be as short as a day or it could take 9 months to complete.  Typical real-world sites with a sophisticated design, personalization and back end integration will take between 3 and 6 months to complete.

Crafter's tools enable an agile development methodology.  Many organizations create and deploy a phase one project quickly and then leveraging Crafter's capabilities quickly iterate to deliver continuous value in the form of new features to the site on a regular cadence.

-----------------------------------
How do I contribute to Crafter CMS?
-----------------------------------

You can find out more about contributing bug reports, code, documentations and tests here: :ref:`contribute`


-------------------------------------
What's Crafter CMS's licensing terms?
-------------------------------------

* Crafter CMS, the open source project is licensed under the GPLv3 Open Source license.
* Customers who purchase Crafter Software's support subscription receive a commercial license that alleviates them from the terms of the open source license.

.. toctree::
   :maxdepth: 2
   :hidden:

   by-role/architect/index
   by-role/author/index
   by-role/developer/index
   by-role/site-admin/index
   by-role/system-admin/index
   security/index
   release-notes/index
   contribute/index
   roadmap/index
   support/index
   reference/index
   getting-started/index

