:is-up-to-date: False
:last-updated: 4.1.0

.. index:: Modules; Crafter Social

.. _crafter-social:

==============
Crafter Social
==============

.. figure:: /_static/images/architecture/crafter-social.webp
    :alt: Crafter Social
    :width: 60 %
    :align: center

|

Crafter Social is a multi-tenant, platform independent user-generated content management system for handling all actions related to user-generated content (UGC), including the creation, updating and moderation of the content. It is built on MongoDB and uses :ref:`crafter-profile` for profile, tenant, roles management, and authentication. Crafter Social is highly scalable in terms of both the users & data, and secures the generated content using Crafter Profile and the Crafter Profile Security library. As a headless, RESTful application, Crafter Social allows for loosely coupled integration with the vertical applications using it. Some examples of these vertical applications include:

    - a products site, for example a books site with reviews & ratings,
    - a ratings site and
    - a blogging application with threaded comments.

-------------
Configuration
-------------

To configure Crafter Social, please see :ref:`crafter-social-admin`

|hr|

--------
REST API
--------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api/index.rst

.. Comment out for now for when OAS file is ready
.. To view the Crafter Social REST APIs:

.. .. open_iframe_modal_button::
      :label: Open here
      :url: ../../../_static/api/social.html
      :title: Social API

.. .. raw:: html

..     or <a href="../../../_static/api/social.html" target="_blank">in a new tab</a>

|

|hr|

-----------
Source Code
-----------

Crafter Social's source code is managed in GitHub: https://github.com/craftercms/social
