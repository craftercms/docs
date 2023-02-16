:is-up-to-date: False
:last-updated: 4.0.3
:nosearch:

.. index:: Storing Large Files

========================
Working with Large Files
========================

.. Git doesn't like large binary files, and therefore it's best to keep these out of the git repository. CrafterCMS allows for a number of external storage mechanisms to be integrated into your project.
    These include: S3, WebDAV, Box, and more via plugins.
    S3 is supported in two ways:
    - BlobStore (this is the recommended and best tooled path)
    - S3 Picker
    - WebDAV
    TODO discuss these from a developer lens first and then link the articles
    Video assets are special in that they often need to be transcoded TODO discuss that a bit then link


.. toctree::
   :maxdepth: 2
   :titlesonly:

   use-s3-to-store-assets

.. Working with images
    asset processing link

.. Working with video files
   upload-transcode-video
