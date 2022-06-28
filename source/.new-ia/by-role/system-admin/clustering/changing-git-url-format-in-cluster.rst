:is-up-to-date: True

.. index:: Changing the Cluster Git URL, Studio Clustering, Clustering

.. _newIa-changing-the-cluster-git-url:

=============================================
Changing the Cluster Git URL |enterpriseOnly|
=============================================

When the cluster Git URL for syncing members is changed after a cluster has been setup and started, the nodes on the disk may contain the old URL format when starting up. The following error appears in the log when switching the URL from SSH to HTTPS:

   .. code-block:: text

      [ERROR] 2021-03-12T18:54:02,887 [pool-5-thread-10] [job.StudioClockExecutor] | Error executing Studio Clock Job
      java.lang.ClassCastException: org.eclipse.jgit.transport.TransportHttp cannot be cast to org.eclipse.jgit.transport.SshTransport

   |

To sync the Git URL format on disk with the new format set in the config, the remotes will need to be recreated

To recreate a remote:

#. Stop the cluster
#. Update the configuration file with the desired URL format in all your nodes

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

      # Cluster Git URL format for synching members.
      # - Typical SSH URL format: ssh://{username}@{localAddress}{absolutePath}
      # - Typical HTTPS URL format: https://{localAddress}/repos/sites
      studio.clustering.sync.urlFormat: ssh://{username}@{localAddress}{absolutePath}

   |

#. Remove the remotes in all your nodes via the command line interface using ``git`` in the ``global`` repo and the ``sandbox`` and ``published`` repos of all the sites in the cluster.

   The global repo is located in *CRAFTER_HOME/data/repos/global*, the ``sandbox`` repo of a site is located in *CRAFTER_HOME/data/repos/sites/<site-name>/sandbox* and the ``published`` repo of a site is located in  *CRAFTER_HOME/data/repos/sites/<site-name>/published*

   The cluster remote names are available from ``Cluster`` in the Studio global menu.

   .. image:: /_static/images/system-admin/clustering-remote-name.png
      :alt: Studio Clustering Screen - Remote names of nodes listed in Studio Main Menu - Cluster
      :width: 100%
      :align: center

   |

   Remember to only remove the cluster remotes.  Cluster remote names start with ``cluster_``.  See example below:

   .. code-block:: sh
      :caption: *List of remotes for the sandbox repository of site video*
      :emphasize-lines: 2, 3

      $ git remote -v
      cluster_node_192.168.1.103	ssh://myuser@192.168.1.103/opt/crafter/data/repos/sites/video/sandbox (fetch)
      cluster_node_192.168.1.103	ssh://myuser@192.168.1.103/opt/crafter/data/repos/sites/video/sandbox (push)
      origin	https://github.com/craftercms/video-center-blueprint.git (fetch)
      origin	https://github.com/craftercms/video-center-blueprint.git (push)

   |

   To remove a remote, run ``git remote rm <remote_name>``, where ``remote_name`` is the name of remote as seen from the ``Cluster`` screen in the Studio Main Menu.  Let's use the remote name ``cluster_node_192.168.1.103`` for our example on removing a remote

   .. code-block:: sh
      :caption: *Remove remote*

      $ git remote rm cluster_node_192.168.1.103

   |

   To verify the remotes are gone on disk, view the current remotes and make sure that the list does not contain a remote with a name beginning with ``cluster_xxxx``:

   .. code-block:: sh
      :caption: *View current remotes*

      $ git remote -v
      origin	https://github.com/craftercms/video-center-blueprint.git (fetch)
      origin	https://github.com/craftercms/video-center-blueprint.git (push)


   |

#. Start the cluster.
   Once the cluster is started, the remotes will be recreated.  Verify that the URL format displayed in ``Cluster`` in the Studio global menu is the desired URL format.

