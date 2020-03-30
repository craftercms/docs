:is-up-to-date: True

.. index:: Blob Stores Configuration

.. _blob-stores-configuration:

=========================
Blob Stores Configuration
=========================

The Blob Stores configuration file allows you to configure 0 or more stores for assets with the corresponding information required by the store being used.
To modify the Blob Stores configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Blob Stores** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-blob-stores.png
    :alt: Configurations - Open Blob Stores Configuration
    :width: 65 %
    :align: center


------
Sample
------

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/blob-stores-config.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
      ~ Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
      ~
      ~ This program is free software: you can redistribute it and/or modify
      ~ it under the terms of the GNU General Public License as published by
      ~ the Free Software Foundation, either version 3 of the License, or
      ~ (at your option) any later version.
      ~
      ~ This program is distributed in the hope that it will be useful,
      ~ but WITHOUT ANY WARRANTY; without even the implied warranty of
      ~ MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      ~ GNU General Public License for more details.
      ~
      ~ You should have received a copy of the GNU General Public License
      ~ along with this program.  If not, see <http://www.gnu.org/licenses/>.
      -->

    <!--
      Blob stores configuration file.

      For every store you need to specify:
      <blobStore>
        <id/>
        <type/>
        <pattern/>
        <mappings>
          <mapping>
            <publishingTarget/>
            <storeTarget/>
            <prefix/>
          </mapping>
        </mappings>
        <configuration/>
      </blobStore>

      id:	a unique id for the store
      type: the type of store to use
      pattern: the regex to match file paths
      mappings.mapping.publishingTarget: the name of the publishing storeTarget (preview, staging, live)
      mappings.mapping.storeTarget: the name of the storeTarget inside the store
      mappings.mapping.prefix: the prefix to use for all paths (optional)
      configuration: configuration specific for the store type

      Every store can require additional properties.
    -->
    <blobStores>
      <!--
        AWS S3 Store

        Configuration properties:

        <credentials>
          <accessKey/>
          <secretKey/>
        </credentials>
        <region/>
        <endpoint/>
        <pathStyleAccess/>

        credentials.accessKey: AWS access key (optional)
        credentials.secretKey: AWS secret key (optional)
        region: AWS region for the service (optional)
        pathStyleAccess: indicates if path style access should be used for all requests (defaults to false)

      -->

      <blobStore>
        <id>s3-store</id>
        <type>s3BlobStore</type>
        <pattern>/static-assets/s3/.*</pattern>
        <mappings>
          <mapping>
            <publishingTarget>preview</publishingTarget>
            <storeTarget>my-authoring-bucket</storeTarget>
            <prefix>sandbox</prefix>
          </mapping>
          <mapping>
            <publishingTarget>staging</publishingTarget>
            <storeTarget>my-authoring-bucket</storeTarget>
            <prefix>staging</prefix>
          </mapping>
          <mapping>
            <publishingTarget>live</publishingTarget>
            <storeTarget>my-delivery-bucket</storeTarget>
          </mapping>
        </mappings>
        <configuration>
          <credentials>
            <accessKey>xxxxxxxxx</accessKey>
            <secretKey>xxxxxxxxx</secretKey>
          </credentials>
          <region>us-west-1</region>
          <pathStyleAccess>true</pathStyleAccess>
        </configuration>
      </blobStore>
    </blobStores>

    |
