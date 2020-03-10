:is-up-to-date: True

.. index:: Multi-Environment Configuration

.. _multi-environment-configurations:

===============================
Multi-Environment Configuration
===============================

Users may want multiple environments setup with different configurations for each environment, e.g. qa, prod, dev, etc.  To setup an environment, do the following:

#. Create a folder under ``data/repos/site/mysite/sandbox/config/studio`` called ``env``
#. Inside the folder, create a directory called ``myenv`` (or whatever you want to call the environment)
#. Copy the configuration file you want to override in the new environment you are setting up, inside your ``myenv`` folder
   following the folder structure under ``config/studio``.
#. Remember to commit the files copied so Studio will pick it up.
#. In the ``studio-override.yaml`` file in ``TOMCAT/shared/classes/crafter/studio/extension`` set the
   following property:

      .. code-block:: yaml

         # The active environment for multi environment configuration, e.g. qa, prod, dev
         studio.configuration.environment.active: myenv

      |

#. Restart studio

-------
Example
-------

Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``environment-config.xml`` file overridden in the new environment:

#. We'll create a folder called ``env`` under ``data/repos/site/mysite/sandbox/config/studio``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 14

         data/
           repos/
             sites/
               mysite/
                 sandbox/
                   config/
                     studio/
                       administration/
                       code-editor-config.xml
                       content-types/
                       context-nav/
                       data-sources/
                       dependency/
                       env/
                       environment/
                       form-control-config/
                       mime-type.xml
                       permission-mappings-config.xml
                       preview-tools/
                       role-mappings-config.xml
                       site-config.xml
                       studio_version.xml
                       targeting/
                       workflow/

      |

#. Inside the ``env`` folder, create a directory called ``mycustomenv``
#. We will now copy the configuration file for the ``environment-config.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder, following the folder structure under ``config/studio``.  For our example, the ``environment-config.xml`` file is under ``config/studio/environment``:

      .. code-block:: text
         :emphasize-lines: 4

         env/
           mycustomenv/
             environment/
               environment-config.xml

      |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add updated environment-config.xml file for mycustomenv"

      |

#. Open the ``studio-config-override.yaml`` file in ``TOMCAT/shared/classes/crafter/studio/extension`` and add the following lines to enable the environment we setup:

      .. code-block:: yaml
         :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

         # The active environment for multi environment configuration, e.g. qa, prod, dev
         studio.configuration.environment.active: mycustomenv

      |

#. Restart Studio.  To verify our newly setup environment, open the ``Sidebar`` and click on |siteConfig|, then select ``Configuration``.  Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations drop-down box:

   .. image:: /_static/images/site-admin/env-custom-configurations.png
      :align: center
      :alt: Active Environment Displayed in Site Config Configuration

