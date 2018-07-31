.. _staging-env:

===============================================
Crafter CMS Intermediate Publishing Environment
===============================================

Crafter CMS supports an intermediate environment to publish to, named ``staging``, where the site can be fully exercised with regards to system and integration points.  This staging environment allows testing of your site.  Once validated in the staging environment, items can be pushed live.  This ``staging`` environment precedes the ``live`` environment.

------------------------------------------------
Setting Up the Intermediate Environment per Site
------------------------------------------------

The intermediate environment is setup per site and by default is not enabled.  To enable the intermediate environment for your site, click on |siteConfig| from the bottom of the **Sidebar**, then click on **Configuration** and select **Site Configuration** from the dropdown list.

Under the **<published-repository>** tags, set **<enable-staging-environment>** to ``true``.  You can also change the default names for your staging environment and your live environment repos here.

   .. code-block:: xml
       :linenos:

       <published-repository>
          <enable-staging-environment>true</enable-staging-environment>
          <staging-environment>staging</staging-environment>
          <live-environment>live</live-environment>
       </published-repository>

|

To view your site with respect to the staging environment, we need to set it up for delivery.  To setup your site for the staging environment, run the ``init-site`` script and follow the instructions in :ref:`setup-site-for-delivery` using the staging branch in the options.

    .. code-block:: bash

        ./init-site.sh -b staging mysite-staging /path/to/published/repo

|

---------------------------------
Setting Default Repo Branch Names
---------------------------------

Crafter CMS allows you to set default branch names for the ``live`` and ``staging`` environments when not using the *environment-config.xml*.  In your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and open the file ``studio-config-override.yaml``. The current default names are **live** and **staging**.  To change the default names, uncomment and change the defaults set:

.. code-block:: yaml
   :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml
   :linenos:

   # If not using environment-config.xml, environments are configured here
   # Git repository branch for the `live` environment, default "live"
   # studio.repo.published.live: live
   # Git repository branch for the `staging` environment, default "staging"
   # studio.repo.published.staging: staging
