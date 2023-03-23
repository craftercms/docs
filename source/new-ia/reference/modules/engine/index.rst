:is-up-to-date: True
:nosearch:

.. index:: Projects; Crafter Engine

.. _newIa-crafter-engine:

==============
Crafter Engine
==============

Engine provides content delivery services to power any type of Web or mobile application. It consumes content published from Studio via the Deployer and provides developers with APIs to consume the content (content, search, GraphQL, etc.).

.. include:: /new-ia/includes/content-retrieval-apis

.. include:: /includes/scripts-templates-security.rst

---------------------------
Crafter Engine Architecture
---------------------------
.. TODO update the image to show the whole arch and highlight Engine

.. figure:: /_static/images/architecture/crafter-engine.webp
    :alt: Crafter Engine
    :width: 60 %
    :align: center

-----------
Source Code
-----------

Crafter Engine's source code is managed in GitHub: https://github.com/craftercms/engine

.. _newIa-engine-configuration-files:

--------------------------
Engine Configuration Files
--------------------------

The main files for configuring Crafter Engine are the following:

+-------------------------------+----------------------------------------------------------------+
| File                          | Description                                                    |
+===============================+================================================================+
| services-context.xml          | Contains the bean definition for services layer                |
+-------------------------------+----------------------------------------------------------------+
| server-config.properties      | Contains server configurable parameters such as urls,          |
|                               | paths, etc.                                                    |
+-------------------------------+----------------------------------------------------------------+
| rendering-context.xml         | Contains the bean definition for rendering                     |
+-------------------------------+----------------------------------------------------------------+
| logging.xml                   | Contains loggers, appenders, etc.                              |
+-------------------------------+----------------------------------------------------------------+

These configuration files for Crafter Engine is located under  ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension``, where ``CRAFTER_HOME`` is the install directory of your CrafterCMS authoring or delivery environment.

The files can be accessed by opening the files using your favorite editor.  Any changes made to any of the files listed above will require a restart of Crafter.

For more information on the properties in ``server-config.properties``, see :ref:`newIa-engine-config-override`

.. _newIa-engine-site-configuration-files:

-------------------------------
Engine Site Configuration Files
-------------------------------

The main configuration files related to Crafter Engine for a site are the following:

+----------------------------------------------+--------------------------------------------------+
| Configuration File                           | Description                                      |
+==============================================+==================================================+
|| Engine Site Configuration                   | Contains site properties used by Crafter Engine  |
|| ``site-config.xml``                         |                                                  |
+----------------------------------------------+--------------------------------------------------+
|| Engine Site Application Context             | Contains bean definitions for the site context   |
|| ``application-context.xml``                 | associated with the webapp                       |
+----------------------------------------------+--------------------------------------------------+
|| Engine URL Rewrite Configuration (XML Style)| Contains URL rewrite rules                       |
|| ``urlrewrite.xml``                          |                                                  |
+----------------------------------------------+--------------------------------------------------+

These site configuration files are located under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine`` where ``CRAFTER_HOME`` is the install directory of your CrafterCMS and ``SITENAME`` is the name of the site being configured.

These files can be accessed by navigating from the Studio Sidebar to |projectTools| ➜ ``Configuration``, then selecting the desired Engine configuration option from the dropdown.

For more information on how to configure site settings related to Crafter Engine see :ref:`newIa-engine_configuration`

.. include:: /new-ia/includes/engine-project-configuration

.. include:: /new-ia/includes/engine-project-security-guide