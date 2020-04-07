:is-up-to-date: True

.. index:: Publishing Assets in External Storage

.. _publishing-assets-in-external-storage:

=====================================
Publishing Assets in External Storage
=====================================

Crafter CMS supports managing assets in external storage through workflow and publishing mechanics.
This allows uploading assets to an external storage for preview, that can then be published to either a live or a staging (depending on if staging is setup for your Crafter install) external storage, thus making the external assets available to delivery only after the assets have been published to the live external storage.

The external storage could be in the cloud, such as AWS S3 or some other storage solution that is outside of where Crafter CMS is installed.

--------------------------------
Configuring the External Storage
--------------------------------
First we'll need to setup the external storage to be used by Crafter CMS.
To setup an external storage for assets, open the **Sidebar**, then click on |siteConfig| -> *Configurations*.  Select ``Blob Stores`` from the dropdown and fill in the required information.

.. code-block:: xml

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

|

To see more information on the Blob Stores configuration, see :ref:`blob-stores-configuration`

After setting up the ``Blob Stores`` configuration, you may now use the external storage for uploading using the various upload methods provided by Crafter Studio, and publishing to live or staging if it's setup.


-------
Example
-------

Let's take a look at an example of setting up an external storage for preview, staging and live and then uploading and finally publishing assets to the external storage we setup.  In the example, we will use AWS S3 as the external storage and the Website Editorial blueprint in Crafter Studio to create our site.

**Prerequisites:**

#. Site created using the Website Editorial blueprint.
#. AWS S3 bucket/s. A single bucket can be used as long as all the ``publishingTarget`` uses a unique ``prefix``, or a separate bucket can be created for each ``publishingTarget``, or a combination of both.

   For our example, we will be using two buckets.  One for authoring and another for delivery.  The following buckets were setup in AWS S3: *my-authoring-bucket* for authoring (used by publishing target ``preview`` with the prefix *sandbox* and publishing target ``staging`` with the prefix *staging*) and *my-deli-bucket* for delivery.

**Here are the steps:**

#. Enable staging (optional)
#. Setup the blob store
#. Upload files
#. Publish the files to staging (if setup)
#. Publish the files into live

Let's begin:

^^^^^^^^^^^^^^^^^
1. Enable Staging
^^^^^^^^^^^^^^^^^

This step is optional but for our example, we wanted to be able to publish to staging, so in this step, we will first enable staging.  In your Studio, click on |siteConfig| -> *Configuration* -> *Site Configuration* and set ``enable-staging-environment`` to ``true`` to enable staging

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
      :emphasize-lines: 5,9,14,19,24,25,27

      <blobStores>
        <blobStore>
          <id>s3-default</id>
          <type>s3BlobStore</type>
          <pattern>/static-assets/item/.*</pattern>
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

**where the highlighted items above refers to:**

* **pattern:** the regex to match file paths (the path in Studio that when used will access the external storage, ``/static-assets/item/.*`` for our example above)
* **mappings.mapping.storeTarget:** the name of the storeTarget inside the store (AWS S3 buckets, ``my-authoring-bucket`` and ``my-deli-bucket`` for our example above)
* **configuration:** configuration specific for the store type (For AWS S3, it requires credentials to access the buckets)


To see more information on the Blob Stores configuration, see :ref:`blob-stores-configuration`


^^^^^^^^^^^^^^^
3. Upload files
^^^^^^^^^^^^^^^

There are various ways to upload files in Crafter Studio.  Here's a few ways we can upload to the external storage:

#. Upload through a picker with corresponding data source setup in a content type
#. Upload using the ``Bulk Upload`` or ``Upload`` right-click option

Let's take a closer look:

#. One way of uploading files is through the use of a picker (image, video, item selector) with its corresponding data source with the ``Repository Path`` property set to the ``pattern`` we defined in the ``Blob Stores`` configuration file.

   For our example, open the **Page - Article** content type by opening the **Sidebar**, then click on |siteConfig| -> *Content Types*, then choose the template name ``Page - Article``.

   In the **Page - Article** content type, notice that the ``Repository Path`` property of the ``Upload Image`` data source is set to: ``/static-assets/item/images/{yyyy}/{mm}/{dd}/``, which falls into the file path pattern ``/static-assets/item/.*`` we setup in the ``Blob Stores`` configuration file

   .. image:: /_static/images/site-admin/ext-storage/setup-datasource.png
      :align: center
      :alt: Setup data source to use the file path pattern in Blob Stores
      :width: 95%

   Let's change the image used in one of the articles in the site.

   From the **Sidebar**, navigate to ``/articles/2016/6`` then right click on ``Coffee is Good for Your Health`` then select ``Edit``.

   Scroll down to the ``Content`` section, then click on the ``Replace`` button next to the **Image** field, then select ``Upload Images``.  Select the file you want to upload.  In our example, the file ``new1.png`` will be uploaded to ``static-assets/item/images/2020/03/27``.

   .. image:: /_static/images/site-admin/ext-storage/upload-image-with-picker.png
      :align: center
      :alt: Upload image using an image picker
      :width: 95%

   |

   After uploading the file, we should see it in the AWS S3 bucket for authoring ``my-authoring-bucket`` in the sandbox:

   .. image:: /_static/images/site-admin/ext-storage/picker-uploaded-img-in-bucket.png
      :align: center
      :alt: Image uploaded using the image picker is now in the S3 bucket
      :width: 95%

#. Next we'll try uploading using the ``Upload`` right-click option.

   Open the **Sidebar** and navigate to ``static-assets/item``.  Create a folder named ``docs`` under ``item``.  Right click on the newly created folder and select ``Upload`` to upload a single file, or ``Bulk Upload`` to upload multiple files

   In the example below, two files were uploaded to the ``docs`` folder.

   .. image:: /_static/images/site-admin/ext-storage/uploaded-files-to-s3.png
       :align: center
       :alt: "s3" folder created under "static-assets"
       :width: 35%

   |

   When you upload files to the ``docs`` folder, the files get uploaded to the ``sandbox`` of the ``my-authoring-bucket`` previously setup.

   .. image:: /_static/images/site-admin/ext-storage/s3-preview-bucket.png
       :align: center
       :alt: Files in preview in "s3" my-authoring-bucket
       :width: 85%

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
5. Publish the files to staging
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The next step in our example is to publish the files to ``staging``.  To publish a file to ``staging``, navigate to the file in the ``Sidebar`` then right click on the file, and select ``Approve & Publish`` or open the ``Dashboard`` and select the file/s you want to publish to ``staging`` in the ``My Recent Activity`` widget and click on ``Approve & Publish`` from the context nav.

The ``Approve for Publish`` dialog will come up.  Remember to select ``staging`` for the ``Publishing Options``

.. image:: /_static/images/site-admin/ext-storage/publish-to-staging.png
    :align: center
    :alt: Publish file to staging in Studio
    :width: 65%

|

When the file/s are published to ``staging``, the files get published to the ``staging`` branch of the ``my-authoring-bucket`` in s3.

.. image:: /_static/images/site-admin/ext-storage/s3-staging-bucket.png
    :align: center
    :alt: Published files to staging in "s3" my-authoring-bucket
    :width: 85%

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
6. Publish the files to delivery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Finally, we'll publish the file/s to ``live``.  To publish a file to ``live``, navigate to the file in the ``Sidebar`` then right click on the file, and select ``Approve & Publish`` or open the ``Dashboard`` and select the file/s you want to publish to ``live`` in the ``My Recent Activity`` widget and click on ``Approve & Publish`` from the context nav.

The ``Approve for Publish`` dialog will come up.  Remember to select ``live`` for the ``Publishing Options``

.. image:: /_static/images/site-admin/ext-storage/publish-to-live.png
    :align: center
    :alt: Publish file to live in Studio
    :width: 65%

|

When the file/s are published to ``live``, the file/s get published to the ``my-deli-bucket`` in s3.

.. image:: /_static/images/site-admin/ext-storage/s3-delivery-bucket.png
    :align: center
    :alt: Published file/s to live in "s3" my-delivery-bucket
    :width: 85%

|

-------------------------------------
Setting up Staging for Existing Sites
-------------------------------------

When adding the ``staging`` publishing target to an established site that uses external storage, Studio does not clone the assets in external storage for ``live`` into ``staging``.  Performing a bulk publish to ``staging`` also does not work at this time.  This is because Studio does not publish to ``staging``, assets in a LIVE, UNEDITED state.

To sync the external storage for ``staging`` with ``live``, you must copy the assets in the ``live`` external storage to the ``staging`` external storage.

Let's take a look at an example of adding ``staging`` to an existing site.

**Prerequisites:**

#. Site created using the Website Editorial blueprint with external storage setup for ``live`` and assets already published to ``live`` (See example above for setting up external storage for a site.  Remember to not setup ``staging`` as we will be doing it in this example)
#. AWS S3 bucket to be used by the ``staging`` publishing target.  For our example, we will be using the bucket ``my-staging`` setup in AWS S3.

**Here are the steps:**

#. Enable staging in Studio
#. Setup the blob store in Studio
#. Copy assets in live to staging in external storage

Let's begin:

#. Enable staging.

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

2. Setup Blob Store

   Setup ``staging`` in the Blob Store by adding the following to your ``Blob Stores`` configuration.  In your Studio, click on |siteConfig| -> *Configuration* -> *Blob Stores* and fill in the required information to setup the S3 bucket for staging.

   .. code-block:: xml

      <mapping>
        <publishingTarget>staging</publishingTarget>
        <storeTarget>my-staging</storeTarget>
      </mapping>

   |

  
   To see more information on the Blob Stores configuration, see :ref:`blob-stores-configuration`

#. Copy assets in ``live`` to ``staging`` in external storage

   In your AWS console, copy the contents of your delivery bucket

   .. image:: /_static/images/site-admin/ext-storage/s3-copy-delivery.png
      :align: center
      :alt: Copy assets in the delivery bucket
      :width: 85%

   |

   Paste the copied content into the staging bucket ``my-staging``

   .. image:: /_static/images/site-admin/ext-storage/s3-staging-bucket-content.png
      :align: center
      :alt: Assets copied from delivery bucket to staging bucket
      :width: 85%

   |

   The ``live`` and ``staging`` external storage is now synced.