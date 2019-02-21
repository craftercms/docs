.. _crafter-social-api-context-preferences-email-template-get:

==================
Get Email Template
==================

Returns an email template for a given Social Context.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/system/context/preferences/email``                      |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+--------------------------------------------+
|| Name               || Type       || Required     || Description                               |
+=====================+=============+===============+============================================+
|| context            || String     || |checkmark|  || The ID of the Social Context              |
+---------------------+-------------+---------------+--------------------------------------------+
|| type               || String     || |checkmark|  || The type of the email template            |
+---------------------+-------------+---------------+--------------------------------------------+

.. NOTE::
  The possible values for the ``type`` parameter are:
  
  - DAILY
  - WEEKLY
  - INSTANT
  - APPROVEREMAIL
  - APPROVER_RESULT_TEMPLATE

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/3/system/context/preferences/email?type=WEEKLY&context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "template": "Hi ${profile.username} this are changes that happen on your subscribe Threads<#list digest as change><h1> ${change[\"_id\"]} </h1><dl><#list change.ugcList as ugc><dt>Subject</dt><dd> ${ugc.subject!\"\"} </dd><dt>Body</dt>  <dd>${ugc.body!\"\"} </dd><dt>Changed by<dt><dd>${ugc.lastModifiedBy.username}<dd></#list></dl></#list>"
  }

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject does not have      |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
