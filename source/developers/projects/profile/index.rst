:is-up-to-date: True

.. index:: Projects; Crafter Profile

.. _crafter-profile:

===============
Crafter Profile
===============

.. figure:: /_static/images/architecture/crafter-profile.png
    :alt: Crafter Profile
    :width: 60 %
    :align: center

Crafter Profile is a multi-tenant, platform independent, highly secure and scalable profile and attribute store. It allows web developers to easily add user login and user profile management to website applications. The module enables web developers to create secure login features and gather user profile information for use in targeting and personalization.

Crafter Profile is built on MongoDB for extensibility and extreme scalability and includes a multi-tenant profile attribute store, an admin console for user profile management, chained authentication with any existing authentication services including Active Directory, TAM, Crowd, Open Social  and others. In addition, Crafter Profile can easily extend existing profiles without interfering with core repositories.

Crafter Profile provides a secure and scalable platform for storing, querying and analyzing user data at each interaction in your customer journey.

-----------
Source Code
-----------

Crafter Profile's source code is managed in GitHub: https://github.com/craftercms/profile

--------
Java Doc
--------

Crafter Profile's Java Doc is here:
    - :javadoc_base_url:`profile`

    .. ..- :javadoc_base_url:`profile-api`
    .. ..- :javadoc_base_url:`profile-client`
    .. ..- :javadoc_base_url:`security-provider`

--------
ReST API
--------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api/index

-------------
Configuration
-------------

To configure Crafter Profile, please see :ref:`crafter-profile-admin`
