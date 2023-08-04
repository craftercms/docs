:is-up-to-date: False
:last-updated: 4.1.0

.. index:: Modules; Crafter Profile

.. _crafter-profile:

===============
Crafter Profile
===============

.. figure:: /_static/images/architecture/crafter-profile.webp
    :alt: Crafter Profile
    :width: 60 %
    :align: center

|

Crafter Profile is a multi-tenant, platform independent, highly secure and scalable profile and attribute store. It allows web developers to easily add user login and user profile management to website applications. The module enables web developers to create secure login features and gather user profile information for use in targeting and personalization.

Crafter Profile is built on MongoDB for extensibility and extreme scalability and includes a multi-tenant profile attribute store, an admin console for user profile management, chained authentication with any existing authentication services including Active Directory, TAM, Crowd, Open Social  and others. In addition, Crafter Profile can easily extend existing profiles without interfering with core repositories.

Crafter Profile provides a secure and scalable platform for storing, querying and analyzing user data at each interaction in your customer journey.

-------------
Configuration
-------------

To configure Crafter Profile, please see :ref:`crafter-profile-admin`

|hr|

--------
REST API
--------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api/index.rst

.. Comment out for now for when OAS file is ready
.. To view the Crafter Profile REST APIs:

.. .. open_iframe_modal_button::
      :label: Open here
      :url: ../../../_static/api/social.html
      :title: Profile API

.. .. raw:: html

..    or <a href="../../../_static/api/profile.html" target="_blank">in a new tab</a>

|

|hr|

-----------
Source Code
-----------

Crafter Profile's source code is managed in GitHub: https://github.com/craftercms/profile
