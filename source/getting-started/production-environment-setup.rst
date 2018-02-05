.. _production-environment-setup:

===============================================
Setting up a Crafter CMS production environment
===============================================

This section lets you get started on setting up your Crafter CMS authoring and delivery environment.
Before we begin, please review the following for requirements and supported platforms: :ref:`requirements_supported_platforms`

1. We'll first install our authoring environment.  You can follow the :ref:`quick_start_guide` to install and start the Crafter CMS authoring environment.

   Alternatively, you can also install craftercms and start your authoring environment by cloning the craftercms repo and building and deploying it using gradle.

      `git clone https://github.com/craftercms/craftercms.git`
      `./gradlew init build deploy -Penv=authoring`
      `./gradlew start -Penv=authoring`

2. Create your site in the authoring environment.  You can follow the guide :ref:`your_first_website` to use one of the out-of-the-box blueprints provided by Crafter CMS.

3.  Now that you have a site setup, the next thing to do is to setup your site in the delivery environment.  Let's install our delivery environment.

   Installing the delivery environment is almost the same as installing the authoring environment.  The difference is, if you're installing from a zip or archive built by the gradle environment builder, you need to download/use ``crafter-cms-delivery.zip`` or ``crafter-cms-delivery.tar.gz``.  Follow the same steps used to install your authoring environment using the delivery zip files.

   If using the alternate way of installing craftercms, to install and start the delivery environment, simply run the following:

      `git clone https://github.com/craftercms/craftercms.git`
      `./gradlew init build deploy -Penv=delivery`
      `./gradlew start -Penv=delivery`

4. After starting the delivery environment, we'll setup the site we created in step 2 in our delivery environment.  Crafter CMS comes with a script, ``init-site.sh`` out of the box, to help us setup our site for delivery.

      `./init-site.sh  <site name> [site's published repo git url] [ssh private key path]`

   See the guide :ref:`setup-site-for-delivery` for more information on setting up your site for delivery.

5. Your site is now setup for both authoring and delivery environments.

For more information on using gradle, please see :ref:`crafter-cms`.
