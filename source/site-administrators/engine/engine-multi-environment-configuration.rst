:is-up-to-date: True

.. index:: Engine Multi-Environment Configuration

.. _engine-multi-environment-configurations:

======================================
Engine Multi-Environment Configuration
======================================

Users may want multiple environments setup with different engine configurations for each environment, e.g. QA, Prod, Dev, etc.

The following engine configuration files can be setup for different environments:

* site-config.xml
* application-context.xml
* urlrewrite.xml

-------------------------
Setting up an environment
-------------------------

To setup an environment for engine configuration files, do the following:

#. Create a folder under ``data/repos/site/mysite/sandbox/config/engine`` called ``env``
#. Inside the folder, create a directory called ``myenv`` (or whatever you want to call the environment)
#. Copy the configuration file you want to override in the new environment you are setting up, inside your ``myenv`` folder
#. Remember to commit the files copied so Studio will pick it up.
#. In the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` set the
   following property to desired environment:

      .. code-block:: bash
         :caption: *bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=myenv}

      |

#. Restart Crafter

-------
Example
-------

Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``urlrewrite.xml`` file overridden in the new environment for a site created using the Website Editorial blueprint:

#. We'll create a folder called ``env`` under ``data/repos/site/mysite/sandbox/config/engine``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 8

         data/
           repos/
             sites/
               mysite/
                 sandbox/
                   config/
                     engine/
                       env/

      |

#. Inside the ``env`` folder, create a directory called ``mycustomenv``
#. We will now create the configuration file for the ``urlrewrite.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder:

      .. code-block:: text
         :emphasize-lines: 3

             env/
               mycustomenv/
                 urlrewrite.xml

     |

   We will redirect the page to ``/articles/2017/12/Top Books For Young Women`` when the page ``/articles/2016/12/Top Books For Young Women`` is previewed.  Copy the following inside the ``urlrewrite.xml`` file.

     .. code-block:: xml
        :linenos:
        :caption: *Urlrewrite.xml file for environment mycustomenv*

        <?xml version="1.0" encoding="utf-8"?>
        <urlrewrite>
          <rule>
            <from>/articles/2016/12/(.*)$</from>
            <to type="redirect">/articles/2017/12/$1</to>
          </rule>
        </urlrewrite>

     |

   For our example, the folder ``articles/2016/12`` was copied to ``articles/2017`` with the page under ``articles/2017/12``, modified to display the title as a dupe.  This was done so when we click on the page under ``articles/2016/12``, we can easily tell that it's being redirected to the page under ``articles/2017/12``.  Of course, you can also just look at the url of the page previewed to verify that it was redirected to the right page.

   .. image:: /_static/images/site-admin/env-copy-page-for-urlrewrite.png
       :align: center
       :width: 35%
       :alt: Folder with page copied from 2016 to 2017

   |

   Here's the original page:

   .. image:: /_static/images/site-admin/env-original-page.jpg
      :align: center
      :alt: Original page before being redirected

   |

   Here's the page we want to be redirected to when previewing the page above:

   .. image:: /_static/images/site-admin/env-redirect-page.jpg
      :align: center
      :alt: Page we want to be redirected to

   |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add urlrewrite.xml file for mycustomenv"

      |

#. Open the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` and set the value of ``CRAFTER_ENVIRONMENT`` to the
   environment we setup above (*myenv*) to make it the active environment:

      .. code-block:: bash
         :caption: *bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=mycustomenv}

      |

#. Restart Crafter.  To verify our newly setup environment, open the ``Sidebar`` and click on |siteConfig|, then select ``Configuration``.  Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations drop-down box and when you select the *Engine URL Rewrite Configuration (XML Style)*, it should display the file we created in one of the previous step:

   .. image:: /_static/images/site-admin/env-custom-configurations.png
      :align: center
      :alt: Active Environment Displayed in Site Config Configuration

   |

   Let's verify that our *urlrewrite.xml* is in effect.  From the *Sidebar*, click on *Home* -> *Entertainment* -> *Top Books For Young Women*  or, navigate to */articles/2016/12/* and click on *Top Books For Young Women*.

   .. image:: /_static/images/site-admin/env-preview-page.jpg
      :align: center
      :alt: Preview the page mentioned in the urlrewrite.xml that will be redirected

   |

   The preview page should take you to */articles/2017/12/Top Books For Young Women*
