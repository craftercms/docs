:is-up-to-date: True

.. index:: Bucket Storage Publishing

.. _bucket-storage-publishing:

=========================
Bucket Storage Publishing
=========================

Crafter CMS supports managing external assets in bucket storage (S3) including workflow and publishing mechanics.
This allows uploading assets to a bucket storage (S3) for preview, that can then be published to a staging bucket storage, then finally to a live bucket storage, thus making the external assets available to delivery only after the assets have been published to the live bucket storage.

-----------------------------------
Publishing to AWS S3 Bucket Storage
-----------------------------------

Let's take a look at an example of setting up buckets (AWS S3) for preview, staging and live and then uploading then publishing assets to the buckets we setup.  Here are the steps:


#. Enable staging
#. Setup the blob store
#. Create an ``s3`` folder under ``static-assets``
#. Upload files to bucket storage
#. Publish the files to staging
#. Publish the files into live

Let's begin:

^^^^^^^^^^^^^^^^^
1. Enable Staging
^^^^^^^^^^^^^^^^^

In your Studio, click on |siteConfig| -> *Configuration* -> *Site Configuration* and set ``enable-staging-environment`` to ``true`` to enable staging

  .. code-block:: xml
     :emphasize-lines: 2

     <published-repository>
         <enable-staging-environment>true</enable-staging-environment>
         <staging-environment>staging</staging-environment>
         <live-environment>live</live-environment>
     </published-repository>

  |

For more information on staging, see :ref:`staging-env`

^^^^^^^^^^^^^^^^^^^
2. Setup Blob Store
^^^^^^^^^^^^^^^^^^^

In your Studio, click on |siteConfig| -> *Configuration* -> *Blob Stores* and fill in the required information to setup the S3 buckets for the preview, staging and live.

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 9,14,19,24,25,27

      <blobStores>
        <blobStore>
          <id>s3-default</id>
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

To see more information on the Blob Stores configuration, see :ref:`blob-stores-configuration`

^^^^^^^^^^^^^^^^^^^
3. Create s3 folder
^^^^^^^^^^^^^^^^^^^

Create an ``s3`` folder under ``static-assets``.  This folder is automatically  mapped to the AWS S3 buckets we setup in the previous step.
To create the folder, open the ``Sidebar`` and navigate to ``static-assets``.  Right click on the ``static-assets`` folder, then select ``Create Folder``.  Enter ``s3`` as folder name then click ``OK``

.. image:: /_static/images/site-admin/bucket/create-s3-folder.png
    :align: center
    :alt: "s3" folder created under "static-assets"
    :width: 35%

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4. Upload files to bucket storage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To upload files to the S3 buckets we setup earlier, open the ``Sidebar`` then navigate to ``static-assets`` -> ``s3``.  Create a folder named ``docs`` under ``s3``.  Right click on the newly created folder and select ``Upload`` to upload a single file, or ``Bulk Upload`` to upload multiple files

In the example below, two files were uploaded to the ``docs`` folder.

.. image:: /_static/images/site-admin/bucket/uploaded-files-to-s3.png
    :align: center
    :alt: "s3" folder created under "static-assets"
    :width: 35%

|

When you upload files to the ``s3`` folder, the files get uploaded to the ``sandbox`` of the ``my-authoring-bucket`` previously setup.

.. image:: /_static/images/site-admin/bucket/s3-preview-bucket.png
    :align: center
    :alt: Files in preview in "s3" my-authoring-bucket
    :width: 85%

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
5. Publish the files to staging
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The next step in our example is to publish the files to ``staging``.  To publish a file to ``staging``, navigate to the file in the ``Sidebar`` then right click on the file, and select ``Approve & Publish`` or open the ``Dashboard`` and select the file/s you want to publish to ``staging`` in the ``My Recent Activity`` widget and click on ``Approve & Publish`` from the context nav.

The ``Approve for Publish`` dialog will come up.  Remember to select ``staging`` for the ``Publishing Options``

.. image:: /_static/images/site-admin/bucket/publish-to-staging.png
    :align: center
    :alt: Publish file to staging in Studio
    :width: 65%

|

When the file/s are published to ``staging``, the files get published to the ``staging`` branch of the ``my-authoring-bucket`` in s3.

.. image:: /_static/images/site-admin/bucket/s3-staging-bucket.png
    :align: center
    :alt: Published files to staging in "s3" my-authoring-bucket
    :width: 85%

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
6. Publish the files to delivery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Finally, we'll publish the files to ``live``.  To publish a file to ``live``, navigate to the file in the ``Sidebar`` then right click on the file, and select ``Approve & Publish`` or open the ``Dashboard`` and select the file/s you want to publish to ``live`` in the ``My Recent Activity`` widget and click on ``Approve & Publish`` from the context nav.

The ``Approve for Publish`` dialog will come up.  Remember to select ``live`` for the ``Publishing Options``

.. image:: /_static/images/site-admin/bucket/publish-to-live.png
    :align: center
    :alt: Publish file to live in Studio
    :width: 65%

|

When the file/s are published to ``live``, the files get published to the ``my-delivery-bucket`` in s3.

.. image:: /_static/images/site-admin/bucket/s3-delivery-bucket.png
    :align: center
    :alt: Published file/s to live in "s3" my-delivery-bucket
    :width: 85%

|
