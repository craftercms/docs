:is-up-to-date: True

.. _newIa-crafter-profile-api-profile-attachment-get:

======================
Get Profile Attachment
======================

Gets the requested attachment of the given profile.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+--------------------------+---------------------------------------------------------------------+
|| HTTP Verb               || GET                                                                |
+--------------------------+---------------------------------------------------------------------+
|| URL                     || ``/api/1/profile/:id/attachment/:attachmentName``                  |
+--------------------------+---------------------------------------------------------------------+
|| Response Formats        || Will change based on the mime type of the attachment requested.    |
+--------------------------+---------------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| accessTokenId    || String     || |checkmark|  || The access token ID of the application      |
||                  ||            ||              || making the call                             |
+-------------------+-------------+---------------+----------------------------------------------+
|| id               || String     || |checkmark|  || The profile's ID                            |
+-------------------+-------------+---------------+----------------------------------------------+
|| attachmentName   || String     || |checkmark|  || Name of the attachment get                  |
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/1/profile/59284659d4c650213cc2f3fc/attachment/picture1?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d


^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``
``Content-Type image/jpeg;charset=UTF-8``
``Content-Length 23193``

.. code-block:: none

  Binary file content

---------
Responses
---------

+---------+------------------------------------------------+---------------------------------------------+
|| Status || Location                                      || Response Body                              |
+=========+================================================+=============================================+
|| 200    ||                                               || See example above.                         |
+---------+------------------------------------------------+---------------------------------------------+
|| 500    ||                                               || ``{ "message" : "Internal server error" }``|
+---------+------------------------------------------------+---------------------------------------------+
