.. _crafter-studio-api-repo-add-remote:

==========
Add Remote
==========

Add remote repository to site content repository.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/repo/add-remote.json``                   |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin, site admin                                                |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+----------------------+-------------+----------------+--------------------------------------------------------------+
|| Name                || Type       || Required      || Description                                                 |
+======================+=============+================+==============================================================+
|| site_id             || String     || |checkmark|   || Site to use                                                 |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| remote_name         || String     || |checkmark|   || Remote repository name                                      |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| remote_url          || String     || |checkmark|   || URL to access remote repository                             |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| authentication_type || String     || |checkmark|   || Authentication type to use to access remote repository      |
||                     ||            ||               ||   ``basic``: username and password authentication           |
||                     ||            ||               ||   ``token``: token authentication                           |
||                     ||            ||               ||   ``key``: key-based authentication                          |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| remote_username     || String     || |checkmark| * || Username to use to access remote repository                 |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| remote_password     || String     || |checkmark| * || Password to use to access remote repository                 |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| remote_token        || String     || |checkmark| * || Token to use to access remote repository                    |
+----------------------+-------------+----------------+--------------------------------------------------------------+
|| remote_private_key  || String     || |checkmark| * || Private key to access remote repository                     |
+----------------------+-------------+----------------+--------------------------------------------------------------+

.. note::
    ``*`` Required parameters:
        * ``remote_username`` is required if ``authentication_type`` is set to ``basic``
        * ``remote_password`` is required if ``authentication_type`` is set to ``basic``
        * ``remote_token`` is required if ``authentication_type`` is set to ``token``
        * ``remote_private_key`` is required if ``authentication_type`` is set to ``key``

-------
Example
-------
^^^^^^^
Request
^^^^^^^

``POST .../api/1/services/api/1/repo/add-remote.json``

.. code-block:: json

  {
    "site_id" : "mysite",
    "remote_name" : "myremote",
    "remote_url" : "https://github.com/craftercms/remoterepo.git",
    "authentication_type" : "basic",
    "remote_username" : "joe.bloggs",
    "remote_password" : "SuperSecret$$587"
  }

.. code-block:: json

  {
    "site_id" : "mysite",
    "remote_name" : "myremote",
    "remote_url" : "https://github.com/craftercms/remoterepo.git",
    "authentication_type" : "token",
    "remote_username" : "joe.bloggs",
    "remote_token" : "SuperSecretToken"
  }

.. code-block:: json

  {
    "site_id" : "mysite",
    "remote_name" : "myremote",
    "remote_url" : "https://github.com/craftercms/remoterepo.git",
    "authentication_type" : "key",
    "remote_auth_key" : "SuperSecretKey"
  }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    { "message" : "OK" }

---------
Responses
---------

+---------+-------------------------------------------+----------------------------------------------------------------+
|| Status || Location                                 || Response Body                                                 |
+=========+===========================================+================================================================+
|| 200    ||                                          || See example above.                                            |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Invalid parameter(s)" }``                    |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Bad Request" }``                             |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Remote repository URL invalid" }``           |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Bad credentials or read only repository" }`` |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 401    ||                                          || ``{ "message" : "Unauthorized" }``                            |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 404    ||                                          || ``{ "message" : "Site not found" }``                          |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 500    ||                                          || ``{ "message" : "Internal server error" }``                   |
+---------+-------------------------------------------+----------------------------------------------------------------+