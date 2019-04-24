:is-up-to-date: True

.. _crafter-profile-api-profile-attachment-upload:

=========================
Upload Profile Attachment
=========================

Upload a attachment to the specified profile.

.. NOTE::
  If the mime type of the attachment is not on the valid list will fail.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/:id/uploadAttachment``                          |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| accessTokenId    || String     || |checkmark|  || The access token ID of the application      |
||                  ||            ||              || making the call                             |
+-------------------+-------------+---------------+----------------------------------------------+
|| id               || File       || |checkmark|  || The profile's ID                            |
+-------------------+-------------+---------------+----------------------------------------------+
|| attachment       || String     || |checkmark|  || File to be uploaded                         |
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/profile/59284659d4c650213cc2f3fc/uploadAttachment?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d

.. NOTE::
  This request needs to be sent with ``Content-Type=multipart/form-data`` and the binary file as parameter ``attachment``.

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "md5": "498a1e16be56873ef53a1a61295d1781",
    "contentType": "image/jpeg",
    "fileSize": "22.6 KB",
    "fileName": "picture1",
    "fileSizeBytes": 23193,
    "id": "59285cd3d4c650213cc2f3fd"
  }

---------
Responses
---------

+---------+---------------------------------------+----------------------------------------------+
|| Status || Location                             || Response Body                               |
+=========+=======================================+==============================================+
|| 200    ||                                      || See example above.                          |
+---------+---------------------------------------+----------------------------------------------+
|| 500    ||                                      || ``{ "message" : "Internal server error" }`` |
+---------+---------------------------------------+----------------------------------------------+
