:is-up-to-date: True

.. index::Contextual Navigation Configuration

.. _contextual-navigation-configuration:

###################################
Contextual Navigation Configuration
###################################

The contextual navigation configuration file drives the top contextual navigation bar.
To modify the contextual navigation configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Contextual Navigation Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-context-nav-config.png
    :alt: Configurations - Open Contextual Navigation Configuration
    :width: 65 %
    :align: center


------
Sample
------

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/targeting/targeting-config.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--

      This configuration file drives the top contextual navigation bar in Crafter Studio.

    -->
    <app-context-menu>
      <context>
        <name>default</name>
        <left> <!-- left-aligned modules -->
          <menuItem>
            <item><modulehook>wcm_logo</modulehook></item>
            <item><modulehook>wcm_dropdown</modulehook></item>
            <item><modulehook>wcm_content</modulehook></item>
            <item><modulehook>admin_console</modulehook></item>
          </menuItem>
        </left>

        <right> <!-- right-aligned modules -->
          <menuItem>
            <item><modulehook>ice_tools</modulehook></item>
            <item><modulehook>preview_tools</modulehook></item>
            <item><modulehook>targeting</modulehook></item>
            <item><modulehook>search</modulehook></item>
            <item><modulehook>status</modulehook></item>
            <item><modulehook>logout</modulehook></item>
          </menuItem>
        </right>

        <modules> <!-- module definitions -->
          <module><moduleName>wcm_logo</moduleName><value>wcm_logo</value></module>
          <module><moduleName>wcm_dropdown</moduleName><value>wcm_dropdown</value></module>
          <module><moduleName>wcm_content</moduleName><value>wcm_content</value></module>
          <module><moduleName>admin_console</moduleName><value>admin_console</value></module>

          <module><moduleName>preview_tools</moduleName><value>preview_tools</value></module>
          <module><moduleName>ice_tools</moduleName><value>ice_tools</value></module>
          <module><moduleName>targeting</moduleName><value>targeting</value></module>
          <module><moduleName>search</moduleName><value>search</value></module>
          <module><moduleName>status</moduleName><value>status</value></module>
          <module><moduleName>logout</moduleName><value>logout</value></module>
        </modules>
      </context>
    </app-context-menu>
