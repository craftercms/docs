:is-up-to-date: True

.. _crafter-studio-api-aws-mediaconvert:

=========================
MediaConvert (deprecated)
=========================

Transcode and/or compress media files using AWS Elemental MediaConvert.

.. NOTE::
     Make sure that the aws profile id to be used has been configured.

.. important::
    This API is deprecated and provided only as a reference.  Please see :studio_swagger_url:`#/aws/uploadVideo` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+-------------------------+-----------------------------------------------------------------------+
|| HTTP Verb              || POST                                                                 |
+-------------------------+-----------------------------------------------------------------------+
|| URL                    || ``/api/1/services/api/1/aws/mediaconvert/upload.json``               |
+-------------------------+-----------------------------------------------------------------------+
|| Response Formats       || ``JSON``                                                             |
+-------------------------+-----------------------------------------------------------------------+
|| Required Role          || N/A                                                                  |
+-------------------------+-----------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+
|| profile      || String     || |checkmark|  || Profile Id to use                               |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------
^^^^^^^
Request
^^^^^^^

``POST .../api/1/services/api/1/aws/mediaconvert/upload.json?site_id=mysite&profile=mediaconvert-default``

.. NOTE::
    This request needs to be sent with ``Content-Type=multipart/form-data`` and the file as parameter ``file``.


^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {"job_id":"1234567890123-abc123","job_arn":"arn:aws:mediaconvert:us-east-1:111111111111:jobs/0123456789012-abc123","output_bucket":"mytranscodebucket","base_key":"708213662/8bd2e16f-cc84-4822-ac9a-aa9613ec2cf6"}

---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Bad request" }``                |
+---------+-------------------------------------------+---------------------------------------------------+
|| 500    ||                                          || ``{ "message" : "Internal server error" }``      |
+---------+-------------------------------------------+---------------------------------------------------+
