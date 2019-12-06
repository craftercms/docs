.. index:: Projects; Crafter Social

.. _crafter-social:

==============
Crafter Social
==============

.. figure:: /_static/images/architecture/crafter-social.png
    :alt: Crafter Social
    :width: 60 %
    :align: center

Crafter Social is a multi-tenant, platform independent user-generated content management system for handling all actions related to user-generated content (UGC), including the creation, updating and moderation of the content.  It is built on MongoDB and uses :ref:`crafter-profile` for profile, tenant, roles management, and authentication.  Crafter Social is highly scalable in terms of both the users & data, and secures the generated content using Crafter Profile and the Crafter Profile Security library.  As a headless, RESTful application, Crafter Social allows for loosely coupled integration with the vertical applications using it.  Some examples of these vertical applications include:

    - a products site, for example a books site with reviews & ratings,
    - a ratings site and
    - a blogging application with threaded comments.

-----------
Source Code
-----------

Crafter Social's source code is managed in GitHub: https://github.com/craftercms/social

--------
Java Doc
--------

Crafter Social's Java Doc is here: :javadoc_base_url:`social/index.html`

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

To configure Crafter Social, please see :ref:`crafter-social-admin`
