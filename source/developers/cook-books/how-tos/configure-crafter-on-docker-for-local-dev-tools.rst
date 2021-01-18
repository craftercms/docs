:is-up-to-date: True

.. index:: Configuring Crafter on Docker for Local Development Tools

.. _configuring-crafter-on-docker-for-local-dev-tools:

=========================================================
Configuring Crafter on Docker for Local Development Tools
=========================================================

Sometimes you'll need to have the Authoring site repositories in your docker container available in the host filesystem, specially if you want to update the files from your IDE. To support access to your sites via a local IDE, we need to mount the Authoring site repositories directory to a host directory.

Here are the steps:

   .. NOTE::
      This will only work on an Authoring install with no existing data. To clear the current data, run the same command you've been using to start up the environment, but replace the ``up`` part for ``down -v``, e.g.

      .. code-block:: bash

         docker-compose down -v

      |

#. Check the site directory is a shared drive

   Make sure the drive with the directory that will contain the sites is a shared drive by clicking on Docker Desktop ``Preferences`` -> ``File Sharing``)

   .. image:: /_static/images/developer/docker/docker-desktop-file-sharing.png
       :alt: Docker Desktop - File Sharing
       :width: 65 %
       :align: center

   |


#. Edit the ``docker-compose.yml`` file

   Navigate to the ``authoring`` directory and open the ``docker-compose.yml`` file in an editor and add the following volume ``- c:/host/path/to/sites:/opt/crafter/data/repos/sites`` to both the ``tomcat`` and the ``deployer`` service (assume C is the shared drive, and replace the ``/host/path/to/sites`` for the actual host path):

   .. code-block:: yaml
       :emphasize-lines: 16,17,33,34
       :caption: *authoring/docker-compose.yml*

       ...

       tomcat:
         image: craftercms/authoring_tomcat:3.1.4 # craftercms version flag
         depends_on:
           - elasticsearch
           - deployer
         ports:
           - 8080:8080
         volumes:
           - crafter_data:/opt/crafter/data
           - crafter_logs:/opt/crafter/logs
           - crafter_temp:/opt/crafter/temp
           # Elastic Search dirs needed for backup/restore
           - elasticsearch_data:/opt/crafter/data/indexes-es
           # Mount authoring sites repository to host directory
           - c:/host/path/to/sites:/opt/crafter/data/repos/sites
         environment:
           - DEPLOYER_HOST=deployer
           - DEPLOYER_PORT=9191
           - ES_HOST=elasticsearch
           - ES_PORT=9200
       deployer:
         image: craftercms/deployer:3.1.4 # craftercms version flag
         depends_on:
           - elasticsearch
         ports:
           - 9191:9191
         volumes:
           - crafter_data:/opt/crafter/data
           - crafter_logs:/opt/crafter/logs
           - crafter_temp:/opt/crafter/temp
           # Mount authoring sites repository to host directory
           - c:/host/path/to/sites:/opt/crafter/data/repos/sites
         environment:
           - TOMCAT_HOST=tomcat
           - TOMCAT_HTTP_PORT=8080
           - ES_HOST=elasticsearch
           - ES_PORT=9200

       ...

   |

#. Start Authoring.

   Go to the Authoring browser URL and create a site.  In the image below, site ``mysite`` was created using the website editorial blueprint:

   .. image:: /_static/images/developer/docker/docker-install-site-created.jpg
      :alt: Docker Desktop - File Sharing
      :width: 65 %
      :align: center

   |

#. Access your site files from your host directory

   You should now be able to see the files in your host directory and use any IDE for editing the files in the site.

   Let's take a look at an example of modifying a file in your host directory then verifying that the changes are reflected in your site.  In your browser, open the ``Sidebar``, then navigate to ``scripts`` -> ``pages`` then right click on ``home.groovy`` and select ``edit``.

   .. image:: /_static/images/developer/docker/docker-install-script-file-orig.png
      :alt: Docker Desktop - unedited script file in browser
      :width: 65 %
      :align: center

   |

   We'll now edit the same ``home.groovy`` file from the host directory using any of your favorite IDE.  For our example, the files in the site were put in a project in IntelliJ IDEA, and some text was added to the comments

   .. image:: /_static/images/developer/docker/docker-install-script-file-on-host.png
      :alt: Docker Desktop - Edited script file on host
      :width: 65 %
      :align: center

   |

   After making your edits, remember to commit your changes by using git so Studio is aware of the changes made.

   To commit your changes , head to ``/host/path/to/sites/mysite/sandbox`` and git add your edited file like this

   .. code-block:: bash

      git add scripts/pages/home.groovy

   |

   And once you are done, commit them with the following command:

   .. code-block:: bash

      git commit -m "<the commit’s description>"

   |

   You can also use any Git client. Now, it will be available in your site in the Docker container. Remember that whenever you edit directly in the filesystem instead of through Studio, you need to commit your changes to ensure they are properly reflected.

   Finally, let's check the ``home.groovy`` file from Studio to verify that changes we made from the host are reflected on Studio, by opening the file in Studio again:

   .. image:: /_static/images/developer/docker/docker-install-script-file-edited.png
      :alt: Docker Desktop - Edited script file from host in Studio
      :width: 65 %
      :align: center

   |
