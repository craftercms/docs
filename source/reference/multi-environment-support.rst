:is-up-to-date: True
:last-updated: 4.1.0

.. index:: Multi-Environment, Multi-Environment Support

.. _multi-environment-support:

=========================
Multi-environment Support
=========================
.. contents::

----------------------------------
What is Multi-environment Support?
----------------------------------
Most CrafterCMS deployments have multiple environments, e.g. Prod, QA, Dev, local, etc. CrafterCMS supports multiple environments by allowing users to setup multiple environments with different configurations for each environment.

Additionally, CrafterCMS delivery-tier (Crafter Engine) supports the deployment targets: Preview, Staging, and Live. These deployment targets are _within_ an environment and can have different configurations for the delivery tier. The use-case here is that Preview and Staging can point to non-production integration services and Live can point to the production integration services.

--------------------------------
Studio Multi-environment Support
--------------------------------
To setup a Studio environment, do the following:

#. Create a folder under ``CRAFTER_HOME/data/repos/site/${site}/sandbox/config/studio`` called ``env``
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

^^^^^^^
Example
^^^^^^^

Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``rte-setup-tinymce5.xml`` file overridden in the new environment:

#. We'll create a folder called ``env`` under ``CRAFTER_HOME/data/repos/site/my-awesome-editorial/sandbox/config/studio``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 12

         data/
           repos/
             sites/
               my-awesome-editorial/
                 sandbox/
                   config/
                     studio/
                       administration/
                       content-types/
                       data-sources/
                       dependency/
                       env/
                       permission-mappings-config.xml
                       role-mappings-config.xml
                       site-config.xml
                       studio_version.xml
                       translation-config.xml
                       ui.xml
                       workflow/

      |

#. Inside the ``env`` folder, create a directory called ``mycustomenv``
#. We will now copy the configuration file for the ``ui.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder, following the folder structure under ``config/studio``. For our example, the ``ui.xml`` file is under ``config/studio/``:

      .. code-block:: text
         :emphasize-lines: 3

         env/
           mycustomenv/
             ui.xml

      |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add updated ui.xml file for mycustomenv"

      |

#. Open the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` and set the value of ``CRAFTER_ENVIRONMENT`` to the
   environment we setup above to make it the active environment:

      .. code-block:: bash
         :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=mycustomenv}

      |

#. Restart Studio. To verify our newly setup environment, open the ``Sidebar`` and click on |projectTools|, then select ``Configuration``. Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations list:

   .. image:: /_static/images/site-admin/env-custom-configurations.webp
      :align: center
      :alt: Active Environment Displayed in Project Config Configuration

.. _engine-multi-environment-support:

--------------------------------
Engine Multi-Environment Support
--------------------------------
The following engine configuration files can be setup for different environments:

* ``site-config.xml``
* ``application-context.xml``
* ``urlrewrite.xml``

To setup an environment for engine configuration files, do the following:

#. Create a folder under ``data/repos/sites/${site}/sandbox/config/engine`` called ``env``
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

^^^^^^^
Example
^^^^^^^

Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``urlrewrite.xml`` file overridden in the new environment for a project created using the Website Editorial blueprint:

#. We'll create a folder called ``env`` under ``data/repos/sites/my-editorial/sandbox/config/engine``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 8

         data/
           repos/
             sites/
               my-editorial/
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

   We will redirect the page to ``/articles/2021/12/Top Books For Young Women`` when the page ``/articles/2020/12/Top Books For Young Women`` is previewed. Copy the following inside the ``urlrewrite.xml`` file.

     .. code-block:: xml
        :linenos:
        :caption: *Urlrewrite.xml file for environment mycustomenv*

        <?xml version="1.0" encoding="utf-8"?>
        <urlrewrite>
          <rule>
            <from>/articles/2020/12/(.*)$</from>
            <to type="redirect">/articles/2021/12/$1</to>
          </rule>
        </urlrewrite>

     |

   For our example, the folder ``articles/2020/12`` was copied to ``articles/2021`` with the page under ``articles/2021/12``, modified to display the title as a dupe. This was done so when we click on the page under ``articles/2020/12``, we can easily tell that it's being redirected to the page under ``articles/2021/12``. Of course, you can also just look at the url of the page previewed to verify that it was redirected to the right page.

   .. image:: /_static/images/site-admin/env-copy-page-for-urlrewrite.webp
       :align: center
       :width: 35%
       :alt: Folder with page copied from 2020 to 2021

   |

   Here's the original page:

   .. image:: /_static/images/site-admin/env-original-page.webp
      :align: center
      :alt: Original page before being redirected

   |

   Here's the page we want to be redirected to when previewing the page above:

   .. image:: /_static/images/site-admin/env-redirect-page.webp
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

#. Restart Crafter. To verify our newly setup environment, open the ``Sidebar`` and click on |projectTools|, then select ``Configuration``. Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations drop-down box and when you select the *Engine URL Rewrite Configuration (XML Style)*, it should display the file we created in one of the previous step:

   .. image:: /_static/images/site-admin/env-custom-configurations.webp
      :align: center
      :alt: Active Environment Displayed in Project Tools Configuration

   |

   Let's verify that our *urlrewrite.xml* is in effect. From the *Sidebar*, click on *Home* -> *Entertainment* -> *Top Books For Young Women*  or, navigate to */articles/2020/12/* and click on *Top Books For Young Women*.

   .. image:: /_static/images/site-admin/env-preview-page.webp
      :align: center
      :alt: Preview the page mentioned in the urlrewrite.xml that will be redirected

   |

   The preview page should take you to */articles/2021/12/Top Books For Young Women*

.. raw:: html

   <hr>

.. _saml2-multi-environment-support:

------------------------------------------------
SAML2 Multi-Environment Support |enterpriseOnly|
------------------------------------------------

When configuring SAML2 in an environment-specific project configuration file (*site-config.xml*), since the
SAML2 configuration folder sits outside the environment folder, you can point to environment-specific SAML2
files in the SAML2 folder for the following path/file configuration of SAML2:

+------------------------------------+-------------------------------------------+-------------------------------------+
|| Property                          || Description                              || Default Value                      |
+====================================+===========================================+=====================================+
|``keystore.path``                   |The path of the keystore file in the repo  |``/config/engine/saml2/keystore.jks``|
+------------------------------------+-------------------------------------------+-------------------------------------+
|``identityProviderDescriptor``      |The path of the identity provider metadata |``/config/engine/saml2/idp.xml``     |
|                                    |XML descriptor in the repo                 |                                     |
+------------------------------------+-------------------------------------------+-------------------------------------+
|``serviceProviderDescriptor``       |The path of the service provider metadata  |``/config/engine/saml2/sp.xml``      |
|                                    |XML descriptor in the repo                 |                                     |
+------------------------------------+-------------------------------------------+-------------------------------------+

Use the format ``/config/engine/saml2/saml2-path-file-config-{myCustomEnv}.***`` for naming your SAML2 environment
specific configuration files where ``{myCustomEnv}`` is the name of your environment.

^^^^^^^
Example
^^^^^^^

Say we're setting up SAML2 files for an environment named ``dev``. Using the format mentioned above, our environment
specific SAML2 files will be the following:

- ``/config/engine/saml2/keystore-dev.jks``
- ``/config/engine/saml2/idp-dev.xml``
- ``/config/engine/saml2/sp-dev.xml``

Below is the SAML2 configuration using the above files in the project configuration file:

.. code-block:: xml
   :caption: *Example SAML2 configuration for a custom environment*
   :emphasize-lines: 5,15,17

   <saml2>
     ...
     <keystore>
       <defaultCredential>abc-crafter-saml</defaultCredential>
       <path>/config/engine/saml2/keystore-dev.jks</path>
       <password encrypted="true">${enc:value}</password>
       <credentials>
         <credential>
           <name>abc-crafter-saml</name>
           <password encrypted="true">${enc:value}</password>
         </credential>
       </credentials>
     </keystore>
     <identityProviderName>http://www.okta.com/abc</identityProviderName>
     <identityProviderDescriptor>/config/engine/saml2/idp-dev.xml</identityProviderDescriptor>
     <serviceProviderName>https://intranet.abc.org/saml/SSO</serviceProviderName>
     <serviceProviderDescription>/config/engine/saml2/sp-dev.xml</serviceProviderDescription>
   </saml2>


See :ref:`engine-saml2-configuration` for more information on configuring SAML2.

.. _engine-multi-target-configurations:

---------------------------
Engine Multi-target Support
---------------------------
There are some cases where the Engine configuration files need to have different values per publishing target. Say for a production environment where you have **staging** to test out your project and **live** , the project to be used by end users, you may need different SAML authentication mechanics or different URL rewrites.

The :ref:`engine-multi-environment-support` section detailed how to setup Engine configuration files per environment. CrafterCMS
supports overriding Engine configuration files, not just per environment, but also per publishing target.
It supports a base configuration per environment with the ability to override per publishing target.

The following engine configuration files can be setup for different publishing targets:

* site-config.xml
* application-context.xml
* urlrewrite.xml

Here are the available publishing targets for the configuration files listed above:

* preview
* staging
* live

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Overriding Engine Configuration Files per Publishing Target
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To override a configuration file in any of the publishing targets

#. Add the new configuration file/s for overriding to **Configurations** under |projectTools| -> **Configuration**

   .. image:: /_static/images/site-admin/configuration.webp
      :alt: Multi-target Configuration - Open Configurations
      :width: 45 %
      :align: center

   |

   The overriding configuration file should be named **configuration-to-be-overridden.publishing-target.xml**. Depending on the publishing target you wish the configuration file to override, the files should look like one of the following:

   - *configuration-to-be-overridden.preview.xml*
   - *configuration-to-be-overridden.staging.xml*
   - *configuration-to-be-overridden.live.xml*

   |

   Say, to add a ``urlrewrite.xml`` file override for **staging**, add the following in the **Configurations**

     .. code-block:: xml
        :caption: *Configurations* - *SITENAME/config/studio/administration/config-list.xml*
        :emphasize-lines: 3

        <file>
          <module>engine</module>
          <path>urlrewrite.staging.xml</path>
          <title>Engine URL Rewrite (XML Style) Staging</title>
          <description>Engine URL Rewrite (XML Style) Staging</description>
          <samplePath>sample-urlrewrite.xml</samplePath>
        </file>

     |

   For more information on **Configurations** config file, see :ref:`project-config-configuration`

#. Fill in your desired additions/modifications to the override configuration file. Refresh your browser. The configuration file you added from above should now be available from |projectTools| -> **Configuration**. Open the new configuration file and make the necessary additions/modifications for the override file then save your changes.

   .. image:: /_static/images/site-admin/new-configuration-added.webp
      :alt: Multi-target Configuration - New configuration files added to dropdown list
      :width: 55 %
      :align: center

   |

#. If the configuration file to be overridden is not for preview, publish the configuration file to the intended publishing target, **staging** or **live**

"""""""
Example
"""""""

Let's take a look at an example of overriding the Project Configuration used by Engine ``site-config.xml`` for the **staging** and **live** publishing targets so that each target has a different SAML authentication mechanics (different identity provider in ``staging`` and ``live``). In our example, we will use a project created using the Website Editorial blueprint named **mysite**

#. Add the new configuration file/s for overriding to **Configurations** under |projectTools| -> **Configuration**. We will be overriding the ``site-config.xml`` file in the **staging** and **live** publishing targets, so we will add to the configuration a ``site-config.staging.xml`` and ``site-config.live.xml`` files.

   .. code-block:: xml
      :caption: *Configurations* - *SITENAME/sandbox/config/studio/administration/config-list.xml*
      :linenos:
      :emphasize-lines: 3,10

      <file>
        <module>engine</module>
        <path>site-config.staging.xml</path>
        <title>Engine Project Configuration Staging</title>
        <description>Project Configuration used by Engine for the Staging publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>
      <file>
        <module>engine</module>
        <path>site-config.live.xml</path>
        <title>Engine Project Configuration Live</title>
        <description>Project Configuration used by Engine for the Live publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>

   |

#. The configurations we added above will now be available from |projectTools| -> **Configuration**.

   .. image:: /_static/images/site-admin/project-config-override-added.webp
      :alt: Multi-target Configuration - Project Tools override configuration files now listed in "Project Tools" -> "Configuration"
      :width: 55 %
      :align: center

   |

   Enable SAML2 in the configuration with identity provider *My IDP1* for the ``site-config.staging.xml`` and use identity provider *My IDP2* for the ``site-config.live.xml``.

   .. code-block:: xml
      :linenos:
      :caption: *SITENAME/sandbox/config/engine/site-config.staging.xml*

      <site>
        <version>4.0.1</version>

        <security>
          <saml2>
            <enable>true</enable>
            <attributes>
              <mappings>
                <mapping>
                  <name>DisplayName</name>
                  <attribute>fullName</attribute>
                </mapping>
              </mappings>
            </attributes>
            <role>
               <mappings>
                  <mapping>
                     <name>editor</name>
                     <role>ROLE_EDITOR</role>
                  </mapping>
               </mappings>
            </role>
            <keystore>
               <defaultCredential>my-site</defaultCredential>
               <password>superSecretPassword</password>
               <credentials>
                  <credential>
                     <name>my-site</name>
                     <password>anotherSecretPassword</password>
                  </credential>
               </credentials>
            </keystore>
            <identityProviderName>My IDP1</identityProviderName>
            <serviceProviderName>Crafter Engine</serviceProviderName>
         </saml2>
        </security>

      </site>

   |

   For more information on SAML2 configuration, see :ref:`engine-saml2-configuration`

#. Publish ``site-config.live.xml`` to live and ``site-config.staging.xml`` to staging.

   To publish the override configuration files setup above, open the **Dashboard** via the Navigation Menu on the top right or via the Sidebar.  Scroll to the **Unpublished Work** dashlet.

   .. image:: /_static/images/site-admin/view-override-config-on-dashboard.webp
      :alt: Multi-target Configuration - New configuration files listed in the "Unpublished Work" dashlet in the Dashboard
      :width: 85 %
      :align: center

   |

   To publish the ``site-config.live.xml`` configuration file to publishing target ``live``, put a check mark next to the file in the dashlet, then click on ``Publish`` from the context nav. Remember to set the ``Publishing Target`` to **live** in the ``Publish`` dialog

   .. image:: /_static/images/site-admin/publish-override-file.webp
      :alt: Multi-target Configuration - Set "Publishing Target" to "live" in dialog for site-config.live.xml
      :width: 55 %
      :align: center

   |

   To publish the ``site-config.staging.xml`` file to publishing target ``staging`` put a check mark next to the file in the dashlet, then click on ``Publish`` from the context nav. Remember to set the ``Publishing Target`` to **staging** in the ``Publish`` dialog.

   The Engine ``site-config.live.xml`` configuration will now be loaded when viewing your project in ``live`` and the Engine ``site-config.staging.xml`` configuration will now be loaded when viewing your project in ``staging`` instead of the default Engine ``site-config.xml`` files





