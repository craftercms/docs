:is-up-to-date: True

.. index:: Multi-Environment Configuration

.. _multi-environment-configurations:

===============================
Multi-Environment Configuration
===============================

Users may want multiple environments setup with different configurations for each environment, e.g. QA, Prod, Dev, etc.  To setup an environment, do the following:

#. Create a folder under ``CRAFTER_HOME/data/repos/site/mysite/sandbox/config/studio`` called ``env``
#. Inside the folder, create a directory called ``myenv`` (or whatever you want to call the environment)
#. Copy the configuration file you want to override in the new environment you are setting up, inside your ``myenv`` folder
   following the folder structure under ``config/studio``.
#. Remember to commit the files copied so Studio will pick it up.
#. In the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` set the
   following property to desired environment:

      .. code-block:: bash
         :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=myenv}

      |

#. Restart Studio

-------
Example
-------

Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``rte-setup-tinymce5.xml`` file overridden in the new environment:

#. We'll create a folder called ``env`` under ``CRAFTER_HOME/data/repos/site/mysite/sandbox/config/studio``

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
#. We will now copy the configuration file for the ``rte-setup-tinymce5.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder, following the folder structure under ``config/studio``.  For our example, the ``rte-setup-tinymce5.xml`` file is under ``config/studio/form-control-config/rte``:

      .. code-block:: text
         :emphasize-lines: 5

         env/
           mycustomenv/
             form-control-config/
               rte/
                 rte-setup-tinymce5.xml

      |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add updated rte-setup-tinymce5.xml file for mycustomenv"

      |

#. Open the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` and set the value of ``CRAFTER_ENVIRONMENT`` to the
   environment we setup above to make it the active environment:

      .. code-block:: bash
         :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=mycustomenv}

      |

#. Restart Studio.  To verify our newly setup environment, open the ``Sidebar`` and click on |siteConfig|, then select ``Configuration``.  Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations drop-down box:

   .. image:: /_static/images/site-admin/env-custom-configurations.png
      :align: center
      :alt: Active Environment Displayed in Site Config Configuration

