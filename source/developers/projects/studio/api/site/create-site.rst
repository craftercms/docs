.. _crafter-studio-api-site-create:

===========
Create Site
===========

Create a Crafter Studio site.

--------------------
Resource Information
--------------------

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

+----------------+-------------+---------------+------------------------------------------------------------+
|| Name          || Type       || Required     || Description                                               |
+================+=============+===============+============================================================+
|| site_id       || String     || |checkmark|  || Site ID to use                                            |
+----------------+-------------+---------------+------------------------------------------------------------+
|| description   || String     ||              || Site description                                          |
+----------------+-------------+---------------+------------------------------------------------------------+
|| blueprint     || String     || |checkmark|* || Blueprint to use for bootstrapping the site               |
+----------------+-------------+---------------+------------------------------------------------------------+
|| use_remote    || Boolean    || |checkmark|* || Use remote repository option if true, otherwise false     |
+----------------+-------------+---------------+------------------------------------------------------------+
|| remote_name   || String     || |checkmark|* || Remote repository name                                    |
+----------------+-------------+---------------+------------------------------------------------------------+
|| remote_url    || String     || |checkmark|* || Remote repository url                                     |
+----------------+-------------+---------------+------------------------------------------------------------+
|| username      || String     || |checkmark|* || Username to access remote repository                      |
+----------------+-------------+---------------+------------------------------------------------------------+
|| password      || String     || |checkmark|* || Password to access remote repository                      |
+----------------+-------------+---------------+------------------------------------------------------------+
|| create_pption || String     || |checkmark|* || Create options for remote repository:                     |
||               ||            ||              ||     `clone`: clone from remote repository                 |
||               ||            ||              ||     `push`: push to remote repository after creating site |
+----------------+-------------+---------------+------------------------------------------------------------+

``*`` Required parameters:
* all remote parameters are required if ``use_remote`` is true
* ``blueprint`` is required if ``use_remote`` is true and ``create_option`` is set to ``push``
* ``blueprint`` is required if ``use_remote`` is false

-------
Example
-------

.. code-block:: guess

	POST .../api/1/services/api/1/site/create.json

.. code-block:: json

  {
    "site_id" : "my-site",
    "description" : "My very first site!",
    "blueprint" : "empty"
  }

.. code-block:: json

  {
    "site_id" : "my-site",
    "description" : "My very first site!",
    "blueprint" : "empty",
    "use_remote" : true,
    "remote_name" : "upstream",
    "remote_url" : "https://github.com/craftercms/remoterepo.git"
    "username" : "joe.bloggs"
    "password" : "SuperSecret$$587"
    "create_option" : "push"
  }

--------
Response
--------

+---------+-------------------------------------------+----------------------------------------------------+
|| Status || Location                                 || Response Body                                     |
+=========+===========================================+====================================================+
|| 201    || ``.../site/get.json?site_id=:site_id``   || ``{ "message" : "OK" }``                          |
+---------+-------------------------------------------+----------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Invalid parameter(s)" }``        |
+---------+-------------------------------------------+----------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Bad Request" }``                 |
+---------+-------------------------------------------+----------------------------------------------------+
|| 401    ||                                          || ``{ "message" : "Unauthorized" }``                |
+---------+-------------------------------------------+----------------------------------------------------+
|| 404    ||                                          || ``{ "message" : "Remote repository not found" }`` |
+---------+-------------------------------------------+----------------------------------------------------+
|| 409    || ``.../user/get.json?username=:username`` || ``{ "message" : "Site already exists" }``         |
+---------+-------------------------------------------+----------------------------------------------------+
|| 500    ||                                          || ``{ "message" : "Internal server error" }``       |
+---------+-------------------------------------------+----------------------------------------------------+
