:is-up-to-date: True

.. index:: WebDAV Profiles Configuration

.. _webdav-profiles-configuration:

=============================
WebDAV Profiles Configuration
=============================

The WebDAV Profiles configuration file allows you to configure 0 or more profiles with the information required to connect to a WebDAV server.
To modify the WebDAV Profiles configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **WebDAV Profiles** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-webdav-config.png
    :alt: Configurations - Open WebDAV Profiles Configuration
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/webdav/webdav.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        WebDAV profiles configuration file. This files configures 0 or more
        profiles with the information required to connect to a WebDAV server.

        For every profile you need to specify:
        <profile>
            <id/>
            <baseUrl/>
            <deliveryBaseUrl/> (deprecated)
            <username/>
            <password/>
            <preemptiveAuth/>
        </profile>

        id:	a unique id for this profile, this will be referenced in the
            control defined in the content type
        baseUrl: Full URL of the WebDAV server
        deliveryBaseUrl: Full URL of the delivery server to override for files, deprecated and will be ignored
        username: WebDAV account username
        password: WebDAV account password
        preemptiveAuth: Indicates if the client should use preemptiveAuth, defaults to false
    -->
    <webdav>
      <webdav>
        <profile>
          <id>webdav-default</id>
          <baseUrl>...</baseUrl>
          <username>...</username>
          <password>...</password>
          <preemptiveAuth>...</preemptiveAuth>
        </profile>
      </webdav>
    </webdav>

