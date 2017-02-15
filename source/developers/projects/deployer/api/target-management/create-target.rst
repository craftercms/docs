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
|| env                    || String     || |checkmark|  || The target's environment (e.g dev).   |
+-------------------------+-------------+---------------+----------------------------------------+
|| site_name              || String     || |checkmark|  || The target's site name (e.g mysite).  |
+-------------------------+-------------+---------------+----------------------------------------+
|| replace                || Boolean    ||              || Replace the existing target.          |
+-------------------------+-------------+---------------+----------------------------------------+
|| template_name          || String     ||              || The template to use for configuration |
||                        ||            ||              || generation. Out of the box            |
||                        ||            ||              || ``default`` and ``preview``           |
||                        ||            ||              || are provided. If not specified        |
||                        ||            ||              || ``default`` will be used.             |
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
|| remote_repo_password   || String     ||              || The password of the remote Git repo.  |
+-------------------------+-------------+---------------+----------------------------------------+
|| engine_url             || String     || |checkmark|  || Base URL of Engine, used to make API  |
||                        ||            ||              || calls like clear cache and rebuild    |
||                        ||            ||              || context.                              |
+-------------------------+-------------+---------------+----------------------------------------+
|| notification_addresses || String     ||              || *Only use with "default" template*.   |
||                        ||            ||              || The email addresses that should       |
||                        ||            ||              || receive deployment notifications.     |
+-------------------------+-------------+---------------+----------------------------------------+

.. _Default Clear Cache URL: http://localhost:8080/api/1/cache/clear_all.json

-------
Example
-------

^^^^^^^^^^^^^^^
Default Request
^^^^^^^^^^^^^^^

``POST .../api/1/target/create``

.. code-block:: json

  {
    "env": "dev",
    "site_name": "mysite",
    "replace": false,
    "template_name" : "default",
    "remote_repo_url" : "ssh://crafter@server/opt/crafter/deployer/target/mysite",
    "remote_repo_username" : "crafter",
    "remote_repo_password" : "crafter",
    "remote_repo_branch" : "master",
    "engine_url" : "http://localhost:8080",
    "notification_addresses" : ["admin1@mysite.com", "admin2@mysite.com"]
  }

^^^^^^^^^^^^^^^
Preview Request
^^^^^^^^^^^^^^^

``POST .../api/1/target/create``

.. code-block:: json

  {
    "env": "preview",
    "site_name": "mysite",
    "replace": true,
    "template_name" : "preview",
    "remote_repo_url" : "ssh://crafter@server/opt/studio/deployer/target/mysite",
    "remote_repo_branch" : "master",
    "engine_url" : "http://localhost:8080",
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

+---------+--------------------------------+-----------------------------------------------------------------+
|| Status || Location                      || Response Body                                                  |
+=========+================================+=================================================================+
|| 201    || ``.../target/get/:target_id`` || ``{ "message" : "OK" }``                                       |
+---------+--------------------------------+-----------------------------------------------------------------+
|| 400    ||                               || ``{ "message" : "Validation failed", "field_errors": [...] }`` |
+---------+--------------------------------+-----------------------------------------------------------------+
|| 409    || ``.../target/get/:target_id`` || ``{ "message" : "Target already exists" }``                    |
+---------+--------------------------------+-----------------------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``                    |
+---------+--------------------------------+-----------------------------------------------------------------+
