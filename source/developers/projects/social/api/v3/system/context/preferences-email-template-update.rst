.. _crafter-social-api-context-preferences-email-template-update:

=====================
Update Email Template
=====================

Updates an email template for a given Social Context.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-social/api/3/system/context/preferences/email``       |
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
|| template           || String     || |checkmark|  || The body of the email template            |
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

  POST .../api/3/system/context/preferences/email

.. code-block:: guess

  template=Sample template for email
  type=INSTANT
  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  true

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
