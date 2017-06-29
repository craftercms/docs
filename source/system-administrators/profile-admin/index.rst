.. index:: System Administrators

.. _profile_admin:

=============================
Crafter Profile Admin Console
=============================

Crafter Profile Admin Console consists of a single WAR file, which only dependecy is access to Crafter Profile.
This web application provides a simple way to manage all data related to tenants and profiles without 
the need to call the :ref:`crafter-profile-api` direclty.

------------
Installation
------------

^^^^^^^^^^^^^^^^
New Installation
^^^^^^^^^^^^^^^^

You can follow the instructions for building a complete bundle as described :ref:`here <installing-craftercms-from-gradle>`, if you add
the following parameter the bundle will contain crafter-profile.war and crafter-profile-admin-console.war.

  ``-P includeProfile=true``

^^^^^^^^^^^^^^^^^^^^^
Existing Installation
^^^^^^^^^^^^^^^^^^^^^

If you want to add Crafter Profile Admin Console to an existing installation you only need to build or download
the WAR file making sure it matches the version of all other components.

To deploy the application you only need to move the WAR file into ``INSTALL_DIR/apache-tomcat/webapps``

-------------------
Configuration Guide
-------------------

Similar to other CrafterCMS components you can configure the Profile Admin Console using a simple
properties files placed in the following location:

  ``INSTALL_DIR/apache-tomcat/shared/classes/crafter/profile/management/extension/server-config.properties``

You can change any of the default configuration, some of the more relevant properties are:

.. code-block:: guess

  crafter.profile.management.profile.verificationUrl=
  
  crafter.profile.rest.client.url.base=http://localhost:8080/crafter-profile
  crafter.profile.rest.client.accessToken.id=e8f5170c-877b-416f-b70f-4b09772f8e2d

^^^^^^^^^^
Properties
^^^^^^^^^^

+---------------------------------------+--------------------------------------------------------+
| Property                              | Description                                            |
+=======================================+========================================================+
| ...management.profile.verificationUrl || URL set to all profiles created from the Admin Console|
|                                       || for completing the verification process               |
+---------------------------------------+--------------------------------------------------------+
| ..rest.client.url.base                || URL where Crafter Profile is deployed, can be an      |
|                                       || external server                                       |
+---------------------------------------+--------------------------------------------------------+
| ...rest.client.accessToken.id         || Access Token used by the Admin Console application,   |
|                                       || can be changed in the first login                     |
+---------------------------------------+--------------------------------------------------------+

More details on the ``verificationUrl`` can be found here: :ref:`crafter-profile-api-profile-create`

-----------
User Guides
-----------

Once the WAR file has been deployed, you can access the application in the following URL: ``HOST:PORT/crafter-profile-admin-console``

.. figure:: /_static/images/profile-admin/login.png
  :align: center
  :width: 50%

  Crafter Profile Admin Console login dialog.

By default there is only one user created:

.. code-block:: none

  Username: admin
  Password: admin

In the next sections you can find detailed steps for all available operations in the application.

.. toctree::
  :maxdepth: 2
  
  guides/access_tokens.rst
  guides/tenants.rst
  guides/profiles.rst
