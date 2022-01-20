:is-up-to-date: True

.. _crafter-studio-api-repo-add-remote:

=======================
Add Remote (deprecated)
=======================

Add remote repository to site content repository.

.. important::
    This API is deprecated and provided only as a reference.  Please see :studio_swagger_url:`#/repository/addRemoteRepository` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

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
||                     ||            ||               ||   ``none``: No authentication                               |
||                     ||            ||               ||   ``basic``: username and password authentication           |
||                     ||            ||               ||   ``token``: token authentication                           |
||                     ||            ||               ||   ``key``: key-based authentication                         |
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
    "remote_name" : "origin",
    "remote_url" : "https://github.com/craftercms/remoterepo.git",
    "authentication_type" : "basic",
    "remote_username" : "joe.bloggs",
    "remote_password" : "SuperSecret$$587"
  }

|

.. code-block:: json

  {
    "site_id" : "mysite",
    "remote_name" : "origin",
    "remote_url" : "https://github.com/craftercms/remoterepo.git",
    "authentication_type" : "token",
    "remote_token" : "SuperSecretToken"
  }

|

.. code-block:: json

  {
    "site_id" : "mysite",
    "remote_name" : "origin",
    "remote_url" : "git@github.com:craftercms/remoterepo.git",
    "authentication_type" : "key",
    "remote_private_key" : "-----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQCqGKukO1De7zhZj6+H0qtjTkVxwTCpvKe4eCZ0FPqri0cb2JZfXJ/DgYSF6vUp
    wmJG8wVQZKjeGcjDOL5UlsuusFncCzWBQ7RKNUSesmQRMSGkVb1/3j+skZ6UtW+5u09lHNsj6tQ5
    1s1SPrCBkedbNf0Tp0GbMJDyR4e9T04ZZwIDAQABAoGAFijko56+qGyN8M0RVyaRAXz++xTqHBLh
    3tx4VgMtrQ+WEgCjhoTwo23KMBAuJGSYnRmoBZM3lMfTKevIkAidPExvYCdm5dYq3XToLkkLv5L2
    pIIVOFMDG+KESnAFV7l2c+cnzRMW0+b6f8mR1CJzZuxVLL6Q02fvLi55/mbSYxECQQDeAw6fiIQX
    GukBI4eMZZt4nscy2o12KyYner3VpoeE+Np2q+Z3pvAMd/aNzQ/W9WaI+NRfcxUJrmfPwIGm63il
    AkEAxCL5HQb2bQr4ByorcMWm/hEP2MZzROV73yF41hPsRC9m66KrheO9HPTJuo3/9s5p+sqGxOlF
    L0NDt4SkosjgGwJAFklyR1uZ/wPJjj611cdBcztlPdqoxssQGnh85BzCj/u3WqBpE2vjvyyvyI5k
    X6zk7S0ljKtt2jny2+00VsBerQJBAJGC1Mg5Oydo5NwD6BiROrPxGo2bpTbu/fhrT8ebHkTz2epl
    U9VQQSQzY1oZMVX8i1m5WUTLPz2yLJIBQVdXqhMCQBGoiuSoSjafUhV7i1cEGpb88h5NBYZzWXGZ
    37sJ5QsW+sJyoNde3xH8vdXhzU7eT82D6X/scw9RZz+/6rCJ4p0=
    -----END RSA PRIVATE KEY-----"
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
|| 201    ||                                          || See example above.                                            |
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
|| 409    ||                                          || ``{ "message" : "Remote already exists" }``                   |
+---------+-------------------------------------------+----------------------------------------------------------------+
|| 500    ||                                          || ``{ "message" : "Internal server error" }``                   |
+---------+-------------------------------------------+----------------------------------------------------------------+
