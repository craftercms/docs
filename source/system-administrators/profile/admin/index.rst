.. _profile-admin-console:

================================
Crafter Profile Admin Console UI
================================

Crafter Profile Admin Console consists of a single WAR file, with a dependency on access to
Crafter Profile. This web application provides a simple way to manage all data related to tenants
and profiles without the need to call the :ref:`crafter-profile-api` directly.

------------
Installation
------------

^^^^^^^^^^^^^^^^
New Installation
^^^^^^^^^^^^^^^^

You can follow the instructions for building a complete bundle as described
:ref:`here <installing-craftercms-from-gradle>`, if you add the parameter ``-P includeProfile=true``
the bundle will contain crafter-profile.war and crafter-profile-admin-console.war.

^^^^^^^^^^^^^^^^^^^^^
Existing Installation
^^^^^^^^^^^^^^^^^^^^^

If you want to add Crafter Profile Admin Console to an existing installation you only need to
build or download the WAR file making sure it matches the version of all other components.

To deploy the application you only need to move the WAR file into ``$CRAFTER_HOME/bin/apache-tomcat/webapps``

-------------------
Configuration Guide
-------------------

Similar to other Crafter CMS components you can configure the Profile Admin Console using a simple
properties file placed in the following location:

  ``$CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/profile/management/extension/server-config.properties``

You can change any of the default configuration, some of the more relevant properties are:

.. code-block:: properties

  crafter.profile.rest.client.url.base=http://localhost:8080/crafter-profile
  crafter.profile.rest.client.accessToken.id=e8f5170c-877b-416f-b70f-4b09772f8e2d

^^^^^^^^^^
Properties
^^^^^^^^^^

+---------------------------------------+--------------------------------------------------------+
| Property                              | Description                                            |
+=======================================+========================================================+
| ...rest.client.url.base               || URL where Crafter Profile is deployed, can be an      |
|                                       || external server                                       |
+---------------------------------------+--------------------------------------------------------+
| ...rest.client.accessToken.id         || Access Token used by the Admin Console application,   |
|                                       || can be changed in the first login                     |
+---------------------------------------+--------------------------------------------------------+

-----------
User Guides
-----------

In the next sections you can find detailed steps for all available operations in the application.

.. toctree::
  :maxdepth: 2

  guides/login.rst
  guides/access_tokens.rst
  guides/tenants.rst
  guides/profiles.rst
