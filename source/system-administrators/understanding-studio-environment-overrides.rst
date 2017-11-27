============================================
Understanding Studio's Environment Overrides
============================================

It is very common for organizations to have several environments including:

    * Production
    * Staging
    * QA
    * Dev
    * Local developer installs

The challenge in these scenarios with most CMS technology is moving content and configuration from one environment to another.  One of the major differences between environments is typically anything with a server name in it and where content should be deployed.  Crafter Studio manages these configurations in the repository and it stores each environment's configuration as a different file so that all environment configurations can coexist at the same time in the repository.  Studio is then configured to look at a specific environment file.


---------------------------------------------------
Changing the Environment Studio is Configured to Be
---------------------------------------------------

.. code-block:: java
    :caption: TOMCAT/shared/classes/crafter/studio/extension/server-config.properties

    environment=local 
    environmentConfig.environment=local

Note: After setting these two properties, please restart the server.


------------------------------------
Modifying an Environment Config File
------------------------------------

    * In the repository you will find the environment overrides files at: REPO/cstudio/config/sites/environment-overrides
    * Each environment will have a folders for it with a name that should match the values in server-config.properties (see above.)
    * Inside the environment folder you will see a file called environment-config.xml that contains configuration similar to what is listed below.

    .. code-block:: xml
        :linenos:

        <environment-config>
            <preview-server-url>http://localhost:8080</preview-server-url>
            <authoring-server-url>http://localhost8080/studio</authoring-server-url>
            <form-server-url>NOT USED</form-server-url>
            <live-server-url>http://mysite.com</live-server-url>
            <publishing-channels>
                <channel-group>
                    <label>Production</label>
                    <channels>
                        <channel>prod-server-01</channel>
                        <channel>prod-server-02</channel>
                    </channels>
                    <live-environment>true</live-environment>
                    <roles>
                        <role>admin</role>
                    </roles>
                </channel-group>
            </publishing-channels>
            <cookie-domain>localhost</cookie-domain>
            <open-site-dropdown>false</open-site-dropdown>
        </environment-config>

The addresses in preview-server-url and authoring-server-url should match your protocol, servername and port exactly.  For example if your CMS is running on a over https on a server called cms.myco.com your environment-config.xml might looks something like:

    .. code-block:: xml
        :linenos:

        <environment-config>
            <preview-server-url>https://cms.myco.com</preview-server-url>
            <authoring-server-url>https://cms.myco.com/studio</authoring-server-url>
            <form-server-url>NOT USED</form-server-url>
            <live-server-url>http://mysite.com</live-server-url>
            <publishing-channels>
                <channel-group>
                    <label>Production</label>
                    <channels>
                        <channel>prod-server-01</channel>
                        <channel>prod-server-02</channel>
                    </channels>
                    <live-environment>true</live-environment>
                    <roles>
                        <role>admin</role>
                    </roles>
                </channel-group>
            </publishing-channels>
            <cookie-domain>myco.com</cookie-domain>
            <open-site-dropdown>false</open-site-dropdown>
        </environment-config>


---------------------------
Ordering Publishing Targets
---------------------------

In the case where you have multiple environments, you can order the publishing targets.  Below is an example:

.. code-block:: xml
   :linenos:

   <environment-config>
      <preview-server-url>http://127.0.0.1:8080</preview-server-url>
      <authoring-server-url>http://127.0.0.1:8080/studio</authoring-server-url>
      <form-server-url>http://127.0.0.1:8080/form-server</form-server-url>
      <live-server-url>http://SITENAME</live-server-url>
      <publishing-channels>
         <channel-group>
            <label>Stage</label>
            <order>2</order>
            <channels>
               <channel>samplez</channel>
            </channels>
            <live-environment>false</live-environment>
         </channel-group>

         <channel-group>
            <label>Z-Env</label>
            <order>3</order>
            <channels>
               <channel>samplex</channel>
            </channels>
            <live-environment>false</live-environment>
         </channel-group>

         <channel-group>
            <label>Production</label>
            <order>1</order>
            <channels>
               <channel>sample</channel>
            </channels>
            <live-environment>true</live-environment>
         </channel-group>

      </publishing-channels>
      <cookie-domain>127.0.0.1</cookie-domain>
      <open-site-dropdown>false</open-site-dropdown>
   </environment-config>

The above example will produce the following list for the publishing targets:

   * Production
   * Stage
   * Z-Env


---------------------------------------------------------------
Editing environment-config.xml via Crafter Studio Admin Console
---------------------------------------------------------------

You can use Crafter Studio's admin console configuration tool to edit environment-config.xml files.  You may need to add them to the configuration in order for them to show up.

If your environment config file is not listed in the configurations dropdown simple select the option call configurations and add the following entry to the list of files

    .. code-block:: xml

        <file>
            <path>/environment-overrides/YOUR_NVIRONMENT_NAME/environment-config.xml</path>
            <title>YOUR_NVIRONMENT_NAME environment overrides configuration</title>
            <description>YOUR_NVIRONMENT_NAME environment overrides configuration</description>
            <samplePath>/administration/samples/sample-dev-environment-config.xml</samplePath>
        </file>

After adding the content, save the configuration and reload the page.  You should now see an option to edit your configuration file in the dropdown.