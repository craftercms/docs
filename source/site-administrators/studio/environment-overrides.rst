
=====================
Environment Overrides
=====================

This configuration file allows you to configure the site specific environments Crafter Studio can publish to, such as your preview server url, authoring server url, etc.
To modify the environment overrides, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Environment Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-env-config.png
    :alt: Configurations - Open Environment Configuration
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/environment/environment-config.xml
    :linenos:

    <!--
        This file configures the environments Crafter Studio can publish to.

        The file structure is:

        <environment-config>
            <preview-server-url />
            <authoring-server-url />
            <live-server-url />
            <open-sidebar />
            <publishing-targets>
                <target>
                    <repo-branch-name />
                    <display-label />
                </target>
            </publishing-targets>
        </environment-config>

    -->
    <environment-config>
        <preview-server-url>http://localhost:8080</preview-server-url>
        <authoring-server-url>http://localhost:8080/studio</authoring-server-url>
        <live-server-url>http://localhost:9080/?crafterSite={siteName}</live-server-url>
        <open-sidebar>false</open-sidebar>
        <publishing-targets>
            <target>
                <repo-branch-name>live</repo-branch-name>
                <display-label>Live</display-label>
            </target>
        </publishing-targets>
    </environment-config>



-----------
Description
-----------

    * ``/environment-config/preview-server-url``
        * Preview url

    * ``/environment-config/authoring-server-url``
        * Authoring url

    * ``/environment-config/live-server-url``
        * Live server url

    * ``/environment-config/open-sidebar``
        * Defines whether the Sidebar is open or not when loading Studio

    * ``/environment-config/publishing-targets``
        * Defines publishing targets

