:is-up-to-date: True

.. index:: Setting up a CrafterCMS production environment, Production Environment

.. _production-environment-setup:

===============================================
Setting up a CrafterCMS production environment
===============================================

This section lets you get started on setting up your CrafterCMS for production. A production environment normally consists of one authoring instance
and one or more delivery instances.

Before we begin, please review the following for requirements and supported platforms: :ref:`requirements_supported_platforms`

-------------------------------------
Setting up the production environment
-------------------------------------

#. We'll first install the authoring instance. You can follow the :ref:`quick_start_guide` to install and start authoring.

   Alternatively, you can also install craftercms and start authoring by cloning the craftercms repo and building and deploying it using gradle.

      `git clone https://github.com/craftercms/craftercms.git`
      `./gradlew clone build deploy -Penv=authoring`
      `./gradlew start -Penv=authoring`

#. Create your site in authoring. You can follow the guide :ref:`your_first_website` to use one of the out-of-the-box blueprints provided by CrafterCMS.

#. Now that you have a site setup in authoring, the next thing to do is to setup your site in the delivery instance(s).  Let's begin the delivery installation.

   Installing the delivery instance is almost the same as installing the authoring instance.  The difference is, if you're installing from a binary built
   by the gradle environment builder, you need to download/use ``crafter-cms-delivery-VERSION.tar.gz``.  Follow the same steps used to
   install your authoring environment using the delivery tar files.

   If using the alternate way of installing craftercms, to install and start the delivery, simply run the following:

      `git clone https://github.com/craftercms/craftercms.git`
      `./gradlew clone build deploy -Penv=delivery`
      `./gradlew start -Penv=delivery`

#. After starting delivery, we'll setup the site we created in step 2 in our delivery instance. CrafterCMS comes with a script, ``init-site.sh``, to help
   us setup our site for delivery.

      `./init-site.sh [options] [site] [repo-path]`

   See the guide :ref:`setup-site-for-delivery` for more information on setting up your site for delivery.

#. For the rest of the delivery instances, you can just repeat the previous 2 steps for each one of them, or alternatively just duplicate the delivery installation
   directory for each instance.

#. Your production environment is now ready.

For more information on using gradle, please see :ref:`crafter-cms`.

-------------------------------------------
Server Hardware Configuration Consideration
-------------------------------------------

CrafterCMS performs multiple reads/writes to disk from various concerns such as the database, the repository, logs, etc. with very different I/O patterns.  One of the primary factor for hardware bottlenecks is disk I/O.

For optimal performance, the server should have different storage systems (disks) mounted for different concerns, for example:

|    /dev/{dev0} -> /
|    /dev/{dev1} -> /opt/crafter/data/db
|    /dev/{dev2} -> /opt/crafter/data/repos
|    /dev/{dev3} -> /opt/crafter/data/indexes
|    /dev/{dev4} -> /opt/crafter/logs
|    /dev/{dev5} -> /opt/crafter/data/mongodb
|    /dev/{dev6} -> /var
|    /dev/{dev7} -> /home
|    /dev/{dev8} -> /usr

|

For more information on tuning your authoring environment for better performance, please see: :ref:`authoring-env-performance-tuning.rst`

-----------------------------
Set Profile Cookies to Secure
-----------------------------

For production environments using Crafter Profile and/or the Security Provider, these properties should be added to  :ref:`server-config.properties <engine-configuration-files>` configuration file to make the Crafter Profile cookies be sent only through HTTPS

.. code-block:: Properties
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
   :linenos:

   # Indicates whether the cookie should be only sent using a secure protocol, like HTTPS or SSL
   crafter.security.cookie.ticket.secure=true
   # Indicates whether the cookie should be only sent using a secure protocol, like HTTPS or SSL
   crafter.security.cookie.profileLastModified.secure=true
   # Indicates whether the cookie should be only sent using a secure protocol, like HTTPS or SSL
   crafter.security.cookie.rememberMe.secure=true


--------------------------------------
System Configuration for Elasticsearch
--------------------------------------

Elasticsearch uses a lot of file descriptors or file handles.  Elasticsearch recommends increasing the number of open file descriptors for the user running Elasticsearch to 65,536 or higher.

CrafterCMS uses the .zip ELasticsearch package.  When using the .zip package, the system settings for increasing the number of open file descriptors can be configured:

* temporarily with ``ulimit``, or
* permanently in ``/etc/security/limits.conf``

^^^^^^^^^^^^^^^^^^^^
Set Temporary Limits
^^^^^^^^^^^^^^^^^^^^
To set temporary limits for the open file handles (ulimit -n) to 65,536:

.. code-block:: sh
    :linenos:

    sudo su
    ulimit -n 65535
    su elasticsearch

|

Here's what the above lines of code is doing:

#. Become root.
#. Change the max number of open files.
#. Become the elasticsearch user in order to start Elasticsearch.

Remember that this new limit is only valid for the current session.

^^^^^^^^^^^^^^^^^^^^^
Set Persistent Limits
^^^^^^^^^^^^^^^^^^^^^

To set persistent limits, edit the ``/etc/security/limits.conf`` file. To set the maximum number of open files for the ``elasticsearch`` user to 65,536, add the following line to the ``limits.conf`` file:

.. code-block:: sh

    elasticsearch  -  nofile  65535

|

Remember to restart your system as this change will only take effect the next time the ``elasticsearch`` user opens a new session.

.. note:: Ubuntu ignores the ``limits.conf`` file for processes started by init.d. To enable the ``limits.conf`` file, edit ``/etc/pam.d/su`` and uncomment the following line:

    .. code-block:: sh

        # session    required   pam_limits.so

|


For more information on configuring system settings in Elasticsearch, see: https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-system-settings.html

For more information on file descriptors in Elasticsearch, see: https://www.elastic.co/guide/en/elasticsearch/reference/current/file-descriptors.html

