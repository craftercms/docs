.. index:: System Administrators

.. _social-admin-console:

===============================
Crafter Social Admin Console UI
===============================

Crafter Social Admin Console consists of a single WAR file that depends on access to both Crafter
Social and Crafter Profile. This web application provides a simple way to manage all data related
to permissions and user generated content without the need to call the :ref:`crafter-social-api`
directly.

------------
Installation
------------

^^^^^^^^^^^^^^^^
New Installation
^^^^^^^^^^^^^^^^

You can follow the instructions for building a complete bundle as described 
:ref:`here <installing-craftercms-from-gradle>`, if you add the parameter ``-P includeProfile=true``
the bundle will contain crafter-social.war and crafter-social-admin.war.

^^^^^^^^^^^^^^^^^^^^^
Existing Installation
^^^^^^^^^^^^^^^^^^^^^

If you want to add Crafter Social Admin Console to an existing installation you only need to 
build or download the WAR file making sure it matches the version of all other components.

To deploy the application you only need to move the WAR file into ``INSTALL_DIR/apache-tomcat/webapps``

-------------------
Configuration Guide
-------------------

Similar to other CrafterCMS components you can configure the Social Admin Console using a simple
properties files placed in the following location:

  ``INSTALL_DIR/apache-tomcat/shared/classes/crafter/social/management/extension/server-config.properties``

You can change any of the default configuration, some of the more relevant properties are:

.. code-block:: guess

  crafter.social.app.rootUrl=
  crafter.social.app.name=crafter-social
  
  crafter.profile.rest.client.url.base=http://localhost:8080/crafter-profile
  crafter.profile.rest.client.accessToken.id=e8f5170c-877b-416f-b70f-4b09772f8e2d

^^^^^^^^^^
Properties
^^^^^^^^^^

+-------------------------------+----------------------------------------------------------------+
| Property                      | Description                                                    |
+===============================+================================================================+
| crafter.social.app.rootUrl    || URL where Crafter Social is deployed, if its empty then it is |
|                               || assumed that both WAR files are deployed in the same server   |
+-------------------------------+----------------------------------------------------------------+
| crafter.social.app.name       || Name of the Crafter Social WAR file                           |
+-------------------------------+----------------------------------------------------------------+
| ..rest.client.url.base        || URL where Crafter Profile is deployed, can be an              |
|                               || external server                                               |
+-------------------------------+----------------------------------------------------------------+
| ...rest.client.accessToken.id || Access Token used by the Admin Console application,           |
|                               || can be changed in the first login                             |
+-------------------------------+----------------------------------------------------------------+

-----------
User Guides
-----------

In the next sections you can find detailed steps for all available operations in the application.

.. toctree::
  :maxdepth: 2
  
  guides/login.rst
  guides/contexts.rst
  guides/security.rst
  guides/preferences.rst
  guides/profiles.rst
  guides/moderation.rst
