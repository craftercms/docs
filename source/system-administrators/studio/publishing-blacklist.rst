:is-up-to-date: True

.. index:: Publishing Blacklist

.. _publishing-blacklist:

====================
Publishing Blacklist
====================

Crafter CMS allows creating a publishing blacklist to prevent certain unwanted items from being published.

A comma separated list of regexes is used to configure items that should not be published.

To configure the publishing blacklist, using your favorite editor open ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml`` or open the Global Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/data/repos/global/configuration`` that can be accessed from Studio from the ``Main Menu`` under ``Global Config``.

Add the following lines with the regex for the item you wish not to be published.  By default, ``.keep`` files are not published by Crafter CMS.  Just add a ``,`` then your regex after ``.*/\.keep``:

   .. code-block:: yaml
      :caption: *studio-config-override.yaml*

      # Publishing blacklist configuration, items matching regexes on this list will never be published
      studio.configuration.publishing.blacklist.regex: >-
        .*/\.keep

   |

Items in the publishing blacklist will not be published but will instead be marked as published and logged in the tomcat log, why the item was not published.

   .. code-block:: text

      [DEBUG] 2021-04-22T08:16:01,023 [studio.clockTaskExecutor-42] [deployment.PublishingManagerImpl] | File /static-assets/css/.keep of the site mysite will not be published because it matches the configured publishing blacklist regex patterns.

-------
Example
-------

Let's take a look at an example.

Create a site using the website editorial blueprint, then create the folder ``mytempimages`` under ``/static-assets/images``.

Say, you do not want files under ``/static-assets/images/mytempimages`` to be published when a user performs a bulk publish or *Approve & Publish* of multiple items from the dashboard.  We'll add to the ``studio.configuration.publishing.blacklist.regex`` the regex for items under ``/static-assets/images/mytempimages``

   .. code-block:: yaml
      :caption: *studio-config-override.yaml*

      # Publishing blacklist configuration, items matching regexes on this list will never be published
      studio.configuration.publishing.blacklist.regex: >-
        .*/\.keep,\/static-assets\/images\/mytempimages\/.*

   |

Save your changes and restart Studio.

Upload an image under ``/static-assets/images/mytempimages``

.. image:: /_static/images/system-admin/studio/publishing-blacklist-example.png
   :alt: System Administrator - Publishing blacklist example file uploaded that will not be published"
   :width: 30 %
   :align: center

Do a bulk publish by opening the **Sidebar** then click on **Site Config** -> **Publishing**.  Click on the **Bulk Publish** tab and enter ``/`` in the **Path to Publish** field then click on the **Publish** button.

After publishing, open the **Sidebar** again and navigate to ``/static-assets/images/mytempimages``.  Notice that your file has been marked published.

.. image:: /_static/images/system-admin/studio/publishing-blacklist-example-published.png
   :alt: System Administrator - Publishing blacklist example file published"
   :width: 45 %
   :align: center

Let's take a look at the tomcat log, notice that it was logged that the file we uploaded will not be published because it is in the publishing blacklist:

.. code-block:: text
   :caption: *Tomcat log of item in publishing blacklist*
   :emphasize-lines: 3

   [INFO] 2021-04-22T11:10:25,272 [studio.clockTaskExecutor-42] [job.StudioPublisherTask] | Starting publishing on environment live for site mysite
   [DEBUG] 2021-04-22T11:10:25,339 [studio.clockTaskExecutor-42] [deployment.PublishingManagerImpl] | Environment is live, transition item to LIVE state mysite:/static-assets/images/mytempimages/26072150271_848c0008f0_o.jpg
   [DEBUG] 2021-04-22T11:10:25,342 [studio.clockTaskExecutor-42] [deployment.PublishingManagerImpl] | File /static-assets/images/mytempimages/26072150271_848c0008f0_o.jpg of the site mysite will not be published because it matches the configured publishing blacklist regex patterns.
   [INFO] 2021-04-22T11:10:25,362 [studio.clockTaskExecutor-42] [job.StudioPublisherTask] | Finished publishing environment live for site mysite



