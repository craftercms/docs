.. _faq:

.. index:: FAQ

###
FAQ
###

-------------------
What is Crafter CMS
-------------------

Crafter CMS is an open-source, Java-based, Web content management system for Web sites, mobile apps, AR, VR and more, designed for ease of development and scaling. Crafter CMS is comprised of several independent, integrated components including: a core content repository, an authoring application for content editors/managers (Crafter Studio), a dynamic content delivery system (Crafter Engine), a user profile store and personalization server (Crafter Profile), a query/search server (Crafter Search) and a social content store and server (Crafter Social).


---------------------------------
What do I need to run Crafter CMS
---------------------------------

Follow these instructions to run Crafter CMS and to download and install Crafter on your machine or server: :ref:`Quick Start Guide <getting-started>`

-----------------------------------------------------
Do I need to run MongoDB in order to run Crafter CMS?
-----------------------------------------------------

No.  MongoDB is not mandatory for Crafter CMS to operate. MongoDB backs optional functionality in the platform.

Crafter CMS is composed of independent microservices that you can activate/de-activate as needed.  Two Crafter CMS microservices rely on MongoDB:

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

Yes.  Crafter has an e-commerce API that you can plug an implementation in to.  This gives marketing total control of the user experience while integrating with the back-end e-commerce functionality of your choosing.

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

