:is-up-to-date: True

.. index:: CMIS Configuration

.. _cmis-configuration:

==================
CMIS Configuration
==================

The CMIS configuration file allows you to configure 0 or more CMIS-capable respositories as data-sources for content authors to pick from.
To modify the CMIS configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **CMIS Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-cmis-config.png
    :alt: Configurations - Open CMIS Configuration
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/data-sources/cmis-config.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        CMIS repositories configuration file. This files configures 0 or more
        CMIS-capable repositories as data-sources for content authors to pick
        from.

    Items can be selected in one of two modes:
    - Reference: the item selected is referenced via URL and CrafterCMS will
        simply insert a direct link to the CMIS repository so the end-user
        will pull the content directly from the CMIS repo
    - Clone: the item selected is downloaded into CrafterCMS and the end-user
        will pull the content from CrafterCMS

    For every repository you need to specify:
        <cmis>
            <repositories>
                <repository>
                    <id />
                    <type />
                    <url />
                    <username />
                    <password />
                    <base-path />
                    <download-url-regex />
                </repository>
            </repositories>
        </cmis>

        id:	a unique id for this repository, this will be referenced in the
            data source defined in the content type
        type: type of the repository, currently Alfresco is the only supported
            type
        url: url to the CMIS repository
        username: username to use to browse the CMIS repository. You only need
            read access
        password: password to use for the username above
        base-path: the base-path to limit browsing under (this means authors
            using this repository will be limited to browsing under this path)
        download-url-regex: a regular expression that includes the variable
            {item_id}. The regular expression contains the full download URL
            pattern to the item in the CMIS repository, and {item_id} will be
            replaced by CrafterCMS with the selected item ID.
    -->
    <cmis>
        <repositories>
            <!--
                <repository>
                    <id>alfresco</id>
                    <type>alfresco</type>
                    <url>http://localhost:8080/alfresco</url>
                    <username>guest</username>
                    <password>guest</password>
                    <base-path>/</base-path>
                    <download-url-regex>http://localhost:8080/alfresco/service/api/node/content/workspace/SpacesStore/{item_id}</download-url-regex>
                </repository>
            -->
        </repositories>
    </cmis>