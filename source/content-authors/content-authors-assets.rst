:is-up-to-date: True

.. index:: Assets

..  _content_authors_assets:

===================
Working with Assets
===================

Assets are binary files, typically images, videos, etc. which can be uploaded directly by Authors from the site navigation tree to Crafter CMS.

.. note::
	.. include:: /includes/valid-file-names.rst

-------------
Adding Assets
-------------
To upload a file (images, videos, etc.), in the Site Content Panel click on **Static Assets**, then click again on the folder named **static-assets**.  This will show you a list of folders containing assets already uploaded, such as images, fonts, etc.  

^^^^^^^^^^^^^^^^^
Creating a folder
^^^^^^^^^^^^^^^^^
If the file you are uploading does not belong in any of the existing folders, you can just create another folder to upload your file to by doing the following:

Click on the three dots next to the folder **static-assets**, then select **New Folder**

.. image:: /_static/images/page/page-asset-folders.jpg
    :alt: Static Assets - Create a Folder
    :width: 40 %
    :align: center


Enter a name for the new folder then click on the **Create** button.

.. image:: /_static/images/page/page-asset-create-folder.png
    :alt: Static Assets - Create Folder Dialog
    :width: 30 %
    :align: center

^^^^^^^^^^^^^
Adding a file
^^^^^^^^^^^^^
To add a file, from the folder **static-assets**, navigate to the folder you want to add the files to, then click on the three dots next to the folder and select **Upload**

.. image:: /_static/images/page/page-asset-upload.jpg
    :alt: Static Assets - Upload a File
    :width: 40 %
    :align: center

|

The upload dialog will come up and if you have multiple files to upload, you can drag and drop or browse for files that you want to upload.

.. image:: /_static/images/page/page-asset-bulk-upload.png
    :alt: Static Assets - Upload File/s Dialog
    :width: 50 %
    :align: center

Click on the ``X`` to close the  upload dialog or click on "Add more" if you want to add more files

.. image:: /_static/images/page/page-asset-upload-done.png
   :alt: Static Assets - Bulk Upload Done Dialog
   :width: 50 %
   :align: center

Adding a file from one of the upload controls
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A file may also be added via one of the upload controls and data source in a content form, such as the ``Image`` control together with the ``Image uploaded from desktop`` data source.

To upload using one of the controls, while editing a content form, click on the button for adding/replacing an asset which would give you an option to use an existing asset or to upload an asset.

.. image:: /_static/images/page/page-asset-single-upload.jpg
   :alt: Static Assets - Upload a file from a control/data source in the content form
   :width: 60 %
   :align: center

|

The upload dialog will come up.  Click on the ``Choose File`` button to browse for the file you want to upload.

.. image:: /_static/images/page/page-asset-single-file-upload-dlg.jpg
   :alt: Static Assets - Upload File Dialog
   :width: 60 %
   :align: center

|

Once the file is uploaded, the dialog will close and the asset will now be in the content form.

.. image:: /_static/images/page/page-asset-single-file-upload-done.jpg
   :alt: Static Assets - Single file upload done and asset in content form
   :width: 60 %
   :align: center


---------------
Removing Assets
---------------

To delete an asset, navigate to the asset you want to delete in the site navigation tree.  Click on the three dots next to the asset, then select **Delete**

.. image:: /_static/images/page/page-asset-delete.jpg
    :alt: Static Assets - Delete
    :width: 40 %
    :align: center

Put a checkmark on ``By submitting, deleted items will be published immediately.`` to enable the **Delete** button.  Click on the **Delete** button if you want to delete the listed files, or click on **Cancel** if you don't want to delete the asset.

.. image:: /_static/images/page/page-asset-confirm-delete.jpg
    :alt: Static Assets - Delete Confirmation Dialog
    :width: 60 %
    :align: center

After clicking on the **Delete** button, a snackbar at the top right of your browser will appear to inform you that the item/asset has been pushed for delete.

.. image:: /_static/images/page/page-asset-delete-submitted.png
    :alt: Static Assets - Delete Action Information Dialog
    :width: 40 %
    :align: center

----------------
Asset Versioning
----------------
All changes to static assets are tracked and can be reverted to an older version.  For static assets, like images, videos, etc., to access the History dialog, select the static asset that you want to view the history of from the site navigation tree, under the folder **Static Assets**, then click on the **History** menu of the context navigation menu at the top of your browser or, click on the three dots next to the asset you want to view then select **History**

.. image:: /_static/images/page/page-asset-access-history.jpg
    :alt: Static Assets - Open History
    :width: 50 %
    :align: center


Notice that for assets, you can only revert to the version selected.

.. image:: /_static/images/page/page-asset-history.jpg
    :alt: Static Assets - History Dialog
    :width: 65 %
    :align: center
