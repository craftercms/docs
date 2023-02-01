:is-up-to-date: True
:last-updated: 4.0.3

.. _crafter-deployer-api-target-deploy:

=============
Deploy Target
=============

Deploy a Crafter Deployer target.

--------------------
Resource Information
--------------------

.. include:: /includes/deployer-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/target/deploy/:env/:site_name``                         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

.. list-table::
   :widths: 20 10 12 50
   :header-rows: 1

   * - Name
     - Type
     - Required
     - Description
   * - env
     - String
     - |checkmark|
     - The target's environment (e.g. dev).
   * - site_name
     - Boolean
     - |checkmark|
     - The target's project name (e.g. my-editorial).
   * - reprocess_all_files
     - Boolean
     -
     - If all files in all the target repos should be reprocessed.
   * - from_commit_id

       .. version_tag::
          :label: Since
          :version: 4.0.0

     - String
     -
     - The id of the commit to start processing changes
   * - deployment_mode

       .. version_tag::
          :label: Since
          :version: 4.0.0

     - String
     -
     - The deployment mode to execute. Possible values: |br|
       ``PUBLISH``: All processors will run |br|
       ``SEARCH_INDEX``: Only the indexing processor will run


-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST .../api/1/target/deploy/dev/mysite``

.. code-block:: json

  {
    "reprocess_all_files": false
  }

^^^^^^^^
Response
^^^^^^^^

``Status 202 OK``

---------
Responses
---------

+---------+----------------------------------+---------------------------------------------------+
|| Status || Location                        || Response Body                                    |
+=========+==================================+===================================================+
|| 202    ||                                 || See example above                                |
+---------+----------------------------------+---------------------------------------------------+
|| 404    ||                                 || ``{ "message" : "Target not found" }``           |
+---------+----------------------------------+---------------------------------------------------+
|| 500    ||                                 || ``{ "message" : "Internal server error" }``      |
+---------+----------------------------------+---------------------------------------------------+
