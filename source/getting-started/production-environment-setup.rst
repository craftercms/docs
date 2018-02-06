.. _production-environment-setup:

===============================================
Setting up a Crafter CMS production environment
===============================================

This section lets you get started on setting up your Crafter CMS for production. A production environment normally consists of one authoring instance
and one or more delivery instances. Before we begin, please review the following for requirements and supported platforms: :ref:`requirements_supported_platforms`

#. We'll first install the authoring instance. You can follow the :ref:`quick_start_guide` to install and start authoring.

   Alternatively, you can also install craftercms and start authoring by cloning the craftercms repo and building and deploying it using gradle.

      `git clone https://github.com/craftercms/craftercms.git`
      `./gradlew init build deploy -Penv=authoring`
      `./gradlew start -Penv=authoring`

#. Create your site in authoring. You can follow the guide :ref:`your_first_website` to use one of the out-of-the-box blueprints provided by Crafter CMS.

#. Now that you have a site setup in authoring, the next thing to do is to setup your site in the delivery instance(s).  Let's begin the delivery installation.

   Installing the delivery instance is almost the same as installing the authoring instance.  The difference is, if you're installing from a zip or archive built
   by the gradle environment builder, you need to download/use ``crafter-cms-delivery.zip`` or ``crafter-cms-delivery.tar.gz``.  Follow the same steps used to
   install your authoring environment using the delivery zip files.

   If using the alternate way of installing craftercms, to install and start the delivery, simply run the following:

      `git clone https://github.com/craftercms/craftercms.git`
      `./gradlew init build deploy -Penv=delivery`
      `./gradlew start -Penv=delivery`

#. After starting delivery, we'll setup the site we created in step 2 in our delivery instance. Crafter CMS comes with a script, ``init-site.sh``, to help
   us setup our site for delivery.

      `./init-site.sh  <site name> [site's published repo git url] [ssh private key path]`

   See the guide :ref:`setup-site-for-delivery` for more information on setting up your site for delivery.

#. For the rest of the delivery instances, you can just repeat the previous 2 steps for each one of them, or alternatively just duplicate the delivery installation
   directory for each instance.

#. Your production environment is now ready.

For more information on using gradle, please see :ref:`crafter-cms`.
