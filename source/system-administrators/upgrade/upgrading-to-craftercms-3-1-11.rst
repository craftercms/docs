:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-11:

====================================
Upgrade Notes for Crafter CMS 3.1.11
====================================

There's an error when upgrading a cluster to Crafter CMS 3.1.11 causing an upgrade failure.

To fix the issue when upgrading a cluster, for each node in the cluster, open the ``studio-config-override.yaml`` file under
``CRAFTER_HOME/data/repos/global/configuration/``, and remove the following lines:

   .. code-block:: yaml
      :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

      # Sandbox Sync Job interval in milliseconds which is how often to sync the work-area
      # studio.clustering.sandboxSyncJob.interval: 2000
      # Published Sync Job interval in milliseconds which is how often to sync the published repos
      # studio.clustering.publishedSyncJob.interval: 60000
      # Global Repo Sync Job interval in milliseconds which is how often to sync the global repo
      # studio.clustering.globalRepoSyncJob.interval: 45000

   |

You will need to do add and commit the changes to the ``studio-config=override.yaml`` file for the changes to take effect for all the nodes in the cluster.

   .. code-block:: bash

      $ cd data/repos/global
      $ git add configuration/studio-config-override.yaml
      $ git commit -m "Update cluster config"

   |

After performing the steps above, you may now proceed to upgrade Crafter CMS to 3.1.11.


