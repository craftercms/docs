:is-up-to-date: True

.. _newIa-crafter-deployer-api-target-create:

=============
Create Target
=============

Create a Crafter Deployer target. If a target already exists and ``replace`` is **true**, then the new target
will replace the existing one. If ``replace`` is **false** and the target exists, a ``409`` is returned.

Target creation is based on templates. The deployer comes with two out of the box: ``remote`` and ``local``.
The ``remote`` template creates targets that pull changes from a remote Git repository, making it ideal to
create targets for **delivery** environments. The ``local`` template instead generates targets that use a
local Git repo and the last processed commit to infer the changes, without executing a pull, so it's used
mostly to create targets for **authoring** environments.

--------------------
Resource Information
--------------------

.. include:: /includes/deployer-api-url-prefix.rst

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

+-----------------------------+-------------+---------------+----------------------------------------+
|| Name                       || Type       || Required     || Description                           |
+=============================+=============+===============+========================================+
|| env                        || String     || |checkmark|  || The target's environment (e.g dev).   |
+-----------------------------+-------------+---------------+----------------------------------------+
|| site_name                  || String     || |checkmark|  || The target's site name (e.g mysite).  |
+-----------------------------+-------------+---------------+----------------------------------------+
|| replace                    || Boolean    ||              || Replace the existing target.          |
+-----------------------------+-------------+---------------+----------------------------------------+
|| template_name              || String     ||              || The template to use for configuration |
||                            ||            ||              || generation. Out of the box            |
||                            ||            ||              || ``remote`` and ``local``              |
||                            ||            ||              || are provided. If not specified        |
||                            ||            ||              || ``remote`` will be used.              |
+-----------------------------+-------------+---------------+----------------------------------------+
|| disable_deploy_cron        || Boolean    ||              || Disables the cron job the runs        |
||                            ||            ||              || deployments every certain amount of   |
||                            ||            ||              || time.                                 |
+-----------------------------+-------------+---------------+----------------------------------------+
|| repo_url                   || String     || |checkmark|  || Depends on the template. If           |
||                            ||            ||              || ``remote`` is being used, it          |
||                            ||            ||              || specifies the URL of the remote repo  |
||                            ||            ||              || to pull from (e.g. ssh://...). If     |
||                            ||            ||              || instead the template is ``local``,    |
||                            ||            ||              || ``repo_url`` is the filesystem path   |
||                            ||            ||              || of the local repo (e.g. /opt/..).     |
+-----------------------------+-------------+---------------+----------------------------------------+
|| repo_branch                || String     ||              || *Only use with "remote" template*.    |
||                            ||            ||              || The branch name of the remote Git     |
||                            ||            ||              || repo to pull from. If not specified,  |
||                            ||            ||              || the branch will be whatever branch is |
||                            ||            ||              || the current one in the remote repo.   |
+-----------------------------+-------------+---------------+----------------------------------------+
|| repo_username              || String     ||              || *Only use with "remote" template*.    |
||                            ||            ||              || The username of the remote Git repo.  |
+-----------------------------+-------------+---------------+----------------------------------------+
|| repo_password              || String     ||              || *Only use with "remote" template*.    |
||                            ||            ||              || The password of the remote Git repo.  |
+-----------------------------+-------------+---------------+----------------------------------------+
|| ssh_private_key_path       || String     ||              || *Only use with "remote" template*.    |
||                            ||            ||              || The path for the private key used     |
||                            ||            ||              || for the remote Git repo.              |
+-----------------------------+-------------+---------------+----------------------------------------+
|| ssh_private_key_passphrase || String     ||              || *Only use with "remote" template*.    |
||                            ||            ||              || The passphrase for the private key    |
||                            ||            ||              || for the remote Git repo (only if the  |
||                            ||            ||              || key is passphrase-protected).         |
+-----------------------------+-------------+---------------+----------------------------------------+
|| engine_url                 || String     ||              || Base URL of Engine, used to make API  |
||                            ||            ||              || calls like clear cache and rebuild    |
||                            ||            ||              || context. If not specified the default |
||                            ||            ||              || is http://localhost:8080.             |
+-----------------------------+-------------+---------------+----------------------------------------+
|| notification_addresses     || String     ||              || The email addresses that should       |
||                            ||            ||              || receive deployment notifications.     |
+-----------------------------+-------------+---------------+----------------------------------------+
|| search_engine              || String     ||              || Search engine options for the site    |
||                            ||            ||              ||   ``Elasticsearch``: use Elastic      |
||                            ||            ||              ||       Search as search engine         |
||                            ||            ||              ||   ``CrafterSearch``: use Crafter      |
||                            ||            ||              ||       Search as search engine         |
||                            ||            ||              || Default value is ``Elasticsearch``    |
+-----------------------------+-------------+---------------+----------------------------------------+

.. _remote Clear Cache URL: http://localhost:8080/api/1/cache/clear_all.json

-------
Example
-------

^^^^^^^^
Requests
^^^^^^^^

``POST .../api/1/target/create``

.. code-block:: json
  :linenos:

  {
    "env": "dev",
    "site_name": "mysite",
    "replace": false,
    "template_name" : "remote",
    "repo_url" : "ssh://crafter@server/opt/crafter/data/repos/sites/mysite/published",
    "repo_username" : "crafter",
    "repo_password" : "crafter",
    "repo_branch" : "live",
    "engine_url" : "http://localhost:8080",
    "notification_addresses" : ["admin1@mysite.com", "admin2@mysite.com"]
  }

``POST .../api/1/target/create``

.. code-block:: json
  :linenos:

  {
    "env": "preview",
    "site_name": "mysite",
    "replace": true,
    "disable_deploy_cron": true,
    "template_name" : "local",
    "repo_url" : "/opt/crafter/data/repos/sites/mysite/sandbox",
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
