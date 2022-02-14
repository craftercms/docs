:is-up-to-date: False

.. index:: Engine Multi-Target Configuration

.. _newIa-engine-multi-target-configurations:

=================================
Engine Multi-Target Configuration
=================================

There are some cases where the Engine configuration files need to have different values per publishing target.  Say
for a production environment where you have **staging** to test out your site and **live** , the site to be used by
end users, you may need different SAML authentication mechanics or different URL rewrites.

The :ref:`engine-multi-environment-configurations` section detailed how to setup Engine configuration files per environment.
CrafterCMS supports overriding Engine configuration files, not just per environment, but also per publishing target.
It supports a base configuration per environment with the ability to override per publishing target.

The following engine configuration files can be setup for different publishing targets:

* site-config.xml
* application-context.xml
* urlrewrite.xml

Here are the available publishing targets for the configuration files listed above:

* preview
* staging
* live

-----------------------------------------------------------
Overriding Engine Configuration Files per Publishing Target
-----------------------------------------------------------
To override a configuration file in any of the publishing targets

#. Add the new configuration file/s for overriding to **Configurations** under |siteTools| -> **Configuration**

   .. image:: /_static/images/site-admin/configuration.png
      :alt: Multi-target Configuration - Open Configurations
      :width: 55 %
      :align: center

   |

   The overriding configuration file should be named **configuration-to-be-overridden.publishing-target.xml**.  Depending on the publishing target you wish the configuration file to override, the files should look like one of the following:

   - *configuration-to-be-overridden.preview.xml*
   - *configuration-to-be-overridden.staging.xml*
   - *configuration-to-be-overridden.live.xml*

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

   For more information on **Configurations** config file, see :ref:`site-config-configuration`

#. Fill in your desired additions/modifications to the override configuration file.  Refresh your browser.  The configuration file you added from above should now be available from |siteTools| -> **Configuration**.  Open the new configuration file and make the necessary additions/modifications for the override file then save your changes.

   .. image:: /_static/images/site-admin/new-configuration-added.jpg
      :alt: Multi-target Configuration - New configuration files added to dropdown list
      :width: 55 %
      :align: center

   |

#. If the configuration file to be overridden is not for preview, publish the configuration file to the intended publishing target, **staging** or **live**

-------
Example
-------

Let's take a look at an example of overriding the Site Configuration used by Engine ``site-config.xml`` for the **staging** and **live** publishing targets so that each target has a different SAML authentication mechanics (different identity provider in ``staging`` and ``live``).  In our example, we will use a site created using the Website Editorial blueprint named **mysite**

#. Add the new configuration file/s for overriding to **Configurations** under |siteTools| -> **Configuration**.  We will be overriding the ``site-config.xml`` file in the **staging** and **live** publishing targets, so we will add to the configuration a ``site-config.staging.xml`` and ``site-config.live.xml`` files.

   .. code-block:: xml
      :caption: *Configurations* - *SITENAME/sandbox/config/studio/administration/config-list.xml*
      :linenos:
      :emphasize-lines: 3,10

      <file>
        <module>engine</module>
        <path>site-config.staging.xml</path>
        <title>Engine Site Configuration Staging</title>
        <description>Site Configuration used by Engine for the Staging publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>
      <file>
        <module>engine</module>
        <path>site-config.live.xml</path>
        <title>Engine Site Configuration Live</title>
        <description>Site Configuration used by Engine for the Live publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>

   |

#. The configurations we added above will now be available from |siteTools| -> **Configuration**.

   .. image:: /_static/images/site-admin/site-config-override-added.jpg
      :alt: Multi-target Configuration - Site Config override configuration files now listed in "Site Config" -> "Configuration"
      :width: 55 %
      :align: center

   |

   Enable SAML2 in the configuration with identity provider *My IDP1* for the ``site-config.staging.xml`` and use identity provider *My IDP2* for the ``site-config.live.xml``.

   .. code-block:: xml
      :linenos:
      :caption: *SITENAME/sandbox/config/engine/site-config.staging.xml*

      <site>
        <version>2</version>

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

   To publish the override configuration files setup above, open the **Dashboard** by clicking on the site name at the top left of the screen.  Scroll to the **My Recent Activity** widget.

   .. image:: /_static/images/site-admin/view-override-config-on-dashboard.png
      :alt: Multi-target Configuration - New configuration files listed in the "My Recent Activity" widget in the Dashboard
      :width: 85 %
      :align: center

   |

   To publish the ``site-config.live.xml`` configuration file to publishing target ``live``, put a check mark next to the file in the widget, then click on ``Approve & Publish`` from the context nav.  Remember to set the ``Publishing Target`` to **live** in the ``Approve for Publish`` dialog

   .. image:: /_static/images/site-admin/publish-override-file.jpg
      :alt: Multi-target Configuration - Set "Publishing Target" to "live" in dialog for site-config.live.xml
      :width: 55 %
      :align: center

   |

   To publish the ``site-config.staging.xml`` file to publishing target ``staging`` put a check mark next to the file in the widget, then click on ``Approve & Publish`` from the context nav.  Remember to set the ``Publishing Target`` to **staging** in the ``Approve for Publish`` dialog.

   The Engine ``site-config.live.xml`` configuration will now be loaded when viewing your site in ``live`` and the Engine ``site-config.staging.xml`` configuration will now be loaded when viewing your site in ``staging`` instead of the default Engine ``site-config.xml`` files





