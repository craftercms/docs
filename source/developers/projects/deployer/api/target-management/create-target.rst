.. include:: /includes/unicode-checkmark.rst

.. _crafter-deployer-api-target-create:

=============
Create Target
=============

Create a Crafter Deployer target. If a target already exists and ``replace`` is **true**, then the new target
will replace the existing one. If ``replace`` is **false** and the target exists, a ``409`` is returned.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/target/create``                                         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+----------------------------------------+
|| Name                   || Type       || Required     || Description                           |
+=========================+=============+===============+========================================+
|| target_id              || String     || |checkmark|  || The target ID. Can be any unique ID   |
+-------------------------+-------------+---------------+----------------------------------------+
|| replace                || Boolean    ||              || Replace the existing target           |
+-------------------------+-------------+---------------+----------------------------------------+
|| template_name          || String     ||              || The template to use for configuration |
||                        ||            ||              || generation. Out of the box            |
||                        ||            ||              || ``default`` and ``preview``           |
||                        ||            ||              || are provided. If not specified        |
||                        ||            ||              || ``default`` will be used.             |
+-------------------------+-------------+---------------+----------------------------------------+
|| site_name              || String     || |checkmark|  || The target's site name                |
+-------------------------+-------------+---------------+----------------------------------------+
|| remote_repo_url        || String     || |checkmark|  || The URL of the remote Git repo to     |
||                        ||            ||              || pull from.                            |
+-------------------------+-------------+---------------+----------------------------------------+
|| remote_repo_branch     || String     ||              || The branch name of the remote Git     |
||                        ||            ||              || repo to pull from. If not specified   |
||                        ||            ||              || ``master`` will be used.              |
+-------------------------+-------------+---------------+----------------------------------------+
|| remote_repo_username   || String     ||              || The username of the remote Git repo   |
+-------------------------+-------------+---------------+----------------------------------------+
|| remote_repo_password   || String     ||              || The password of the remote Git repo   |
+-------------------------+-------------+---------------+----------------------------------------+
|| clear_cache_url        || String     ||              || *Only use with "default" template*.   |
||                        ||            ||              || URL to clear the Crafter Engine       |
||                        ||            ||              || cache. If not specified               |
||                        ||            ||              || `Default Clear Cache URL`_ will be    |
||                        ||            ||              || used.                                 |
+-------------------------+-------------+---------------+----------------------------------------+
|| notification_addresses || String     ||              || *Only use with "default" template*.   |
||                        ||            ||              || The email addresses that should       |
||                        ||            ||              || receive deployment notifications.     |
+-------------------------+-------------+---------------+----------------------------------------+

.. _Default Clear Cache URL: http://localhost:8080/api/1/cache/clear_all.json

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST .../api/1/target/create``

.. code-block:: json

  {
    "target_id": "mysite",
    "replace": true,
    "template_name" : "default",
    "remote_repo_url" : "ssh://crafter@server/opt/crafter/deployer/target/mysite",
    "remote_repo_password" : "crafter",
    "remote_repo_branch" : "master",
    "clear_cache_url" : "http://localhost:9080/api/1/cache/clear_all.json ",
    "notification_addresses" : ["admin1@mysite.com", "admin2@mysite.com"]
  }

^^^^^^^^
Response
^^^^^^^^

``Status 201 CREATED``

.. code-block:: json

  { "message" : "OK" }

---------
Responses
---------

+---------+--------------------------------+------------------------------------------------------------+
|| Status || Location                      || Response Body                                             |
+=========+================================+============================================================+
|| 201    || ``.../target/get/:target_id`` || ``{ "message" : "OK" }``                                  |
+---------+--------------------------------+------------------------------------------------------------+
|| 422    ||                               || ``{ "message" : "Missing parameter 'remote_repo_url'" }`` |
+---------+--------------------------------+------------------------------------------------------------+
|| 409    || ``.../target/get/:target_id`` || ``{ "message" : "Target already exists" }``               |
+---------+--------------------------------+------------------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``               |
+---------+--------------------------------+------------------------------------------------------------+
