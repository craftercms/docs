:is-up-to-date: True
:nosearch:

.. _newIa-crafter-studio-api-site-create:

===========
Create Site
===========

Create a Crafter Studio site.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/create.json``                       |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin                                                            |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+----------------------+------------+----------------+--------------------------------------------------------------+
|| Name                || Type      || Required      || Description                                                 |
+======================+============+================+==============================================================+
|| site_id             || String    || |checkmark|   || Site ID to use                                              |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| name                || String    || |checkmark|   || Label to use for the site                                   |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| sandbox_branch      || String    ||               || Name for sandbox branch (default master)                    |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| description         || String    ||               || Site description                                            |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| blueprint           || String    || |checkmark| * || Blueprint to use for bootstrapping the site                 |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| use_remote          || Boolean   || |checkmark| * || Use remote repository option if true, otherwise false       |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_name         || String    ||               || Remote repository name (default origin)                     |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_url          || String    || |checkmark| * || Remote repository url                                       |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_branch       || String    ||               || Branch to clone repo from                                   |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| single_branch       || Boolean   ||               || Clone single branch if true, otherwise clone all            |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| authentication_type || String    || |checkmark| * || Authentication type to use to access remote repository      |
||                     ||           ||               ||   ``none``: No authentication                               |
||                     ||           ||               ||   ``basic``: username password authentication               |
||                     ||           ||               ||   ``token``: username token authentication                  |
||                     ||           ||               ||   ``key``: key-based authentication                         |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_username     || String    || |checkmark| * || Username to access remote repository                        |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_password     || String    || |checkmark| * || Password to access remote repository                        |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_token        || String    || |checkmark| * || Token to use to access remote repository                    |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| remote_private_key  || String    || |checkmark| * || Private key to access remote repository                     |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| create_option       || String    || |checkmark| * || Create options for remote repository:                       |
||                     ||           ||               ||   ``clone``: clone from remote repository                   |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| site_params         || Object    ||               || Object containing all parameters for the blueprint. It      |
||                     ||           ||               || should include all required parameters from the descriptor  |
+----------------------+------------+----------------+--------------------------------------------------------------+
|| create_as_orphan    || Boolean   ||               || Create the site from a remote repository as orphan          |
||                     ||           ||               || (no git history) - default is false                         |
+----------------------+------------+----------------+--------------------------------------------------------------+

.. note::
    ``*`` Required parameters:
        * some remote parameters are required if ``use_remote`` is true
        * ``blueprint`` is required if ``use_remote`` is false
        * ``authentication_type`` is required if ``authentication_type`` to be used is not ``none``
        * ``remote_username`` is required if ``authentication_type`` is set to ``basic``
        * ``remote_password`` is required if ``authentication_type`` is set to ``basic``
        * ``remote_token`` is required if ``authentication_type`` is set to ``token``
        * ``remote_private_key`` is required if ``authentication_type`` is set to ``key``

-------
Example
-------

^^^^^^^^^^^^^
Create a site
^^^^^^^^^^^^^

Example of creating a site:

``POST .../api/1/services/api/1/site/create.json``

.. code-block:: json

  {
    "site_id" : "my-site",
    "description" : "My very first site!",
    "blueprint" : "org.craftercms.blueprint.empty"
  }


--------
Response
--------

+--------+----------------------------------------+-------------------------------------------------------------------+
|| Status|| Location                              || Response Body                                                    |
+========+========================================+===================================================================+
|| 201   || ``.../site/get.json?site_id=:site_id``|| ``{ "message" : "OK" }``                                         |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 400   ||                                       || ``{ "message" : "Invalid parameter(s)" }``                       |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 400   ||                                       || ``{ "message" : "Bad Request" }``                                |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 400   ||                                       || ``{ "message" : "Remote repository URL invalid" }``              |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 400   ||                                       || ``{ "message" : "Remote branch does not exist" }``               |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 400   ||                                       || ``{ "message" : "Bad credentials or read only repository" }``    |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 400   ||                                       || ``{ "message" : "Invalid create option for remote repository" }``|
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 401   ||                                       || ``{ "message" : "Unauthorized" }``                               |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 404   ||                                       || ``{ "message" : "Blueprint not found" }``                        |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 404   ||                                       || ``{ "message" : "Remote repository not found" }``                |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 409   || ``.../site/get.json?site_id=:site_id``|| ``{ "message" : "Site already exists" }``                        |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 409   ||                                       || ``{ "message" : "Remote repository is not bare" }``              |
+--------+----------------------------------------+-------------------------------------------------------------------+
|| 500   ||                                       || ``{ "message" : "Internal server error" }``                      |
+--------+----------------------------------------+-------------------------------------------------------------------+
