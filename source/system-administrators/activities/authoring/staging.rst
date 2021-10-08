:is-up-to-date: True

.. _staging-env:

========================================
Configuring Publishing to Staging Target
========================================

Crafter CMS supports an intermediate publishing target, named ``staging``, where the site can be fully exercised with regards to system and integration points.  This staging publishing target allows testing of your site.  Once validated in staging, items can be pushed live.  This ``staging`` publishing target precedes ``live``.

When staging is setup, the **Request Publish** and **Approve for Publish** dialogs gives the user the option to select to which publishing target to publish to:

.. image:: /_static/images/system-admin/staging-publish-option.jpg
    :width: 75 %
    :align: center
    :alt: System Administrator - Staging Setup for Publish dialogs

|

Users with access to the following widgets in the dashboard will see a column named **Publishing Target** indicating which publishing target an item has been/would be published to: ``Items Waiting For Approval``, ``Approved Scheduled Items`` and ``Recently Published``

.. image:: /_static/images/system-admin/staging-dashboard.png
    :width: 75 %
    :align: center
    :alt: System Administrator - Dashboard

Notice the pages published to staging and live with the same time in the above image.  When staging is setup, all items will go through staging before going to live.  So, if a user approves an item to be published directly to live, it will be published to staging first, then onto live.


---------------------------
Setting Up Staging per Site
---------------------------

Staging is setup per site and by default is not enabled.  To enable staging for your site, click on |siteConfig| from the **Sidebar**, then click on **Configuration** and select **Site Configuration** from the list.

Under the **<published-repository>** tags, set **<enable-staging-environment>** to ``true``.

   .. code-block:: xml
       :linenos:

       <published-repository>
            <enable-staging-environment>true</enable-staging-environment>
       </published-repository>

|

To view your site with respect to the staging preview, we need to set it up for delivery.  To setup your site for the staging preview, run the ``init-site`` script and follow the instructions in :ref:`setup-site-for-delivery` using the staging branch in the options.

    .. code-block:: bash

        ./init-site.sh -b staging mysite-staging /path/to/published/repo

|

-------------------------
Syncing Staging with Live
-------------------------

There are times when you need to sync the staging publishing target with the live publishing target. When adding the ``staging`` publishing target to an established site, the live repository is not cloned to the staging repository until an item has been published after setting up staging.  There may be some other scenarios, when you might need to sync the staging publishing target with the live publishing target.

To sync the staging target with the live target, simply call the ``reset-staging`` API.  See :ref:`crafter-studio-api-publish-reset-staging` for more details on the API

