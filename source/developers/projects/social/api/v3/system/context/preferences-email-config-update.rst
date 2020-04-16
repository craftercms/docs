.. _crafter-social-api-context-preferences-email-config-update:

==========================
Update Email Configuration
==========================

Updates the email configuration for a given Social Context.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/system/context/preferences/email/config``               |
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
|| encoding           || String     || |checkmark|  || Character encoding for the email body     |
+---------------------+-------------+---------------+--------------------------------------------+
|| host               || String     || |checkmark|  || The hostname of the email server          |
+---------------------+-------------+---------------+--------------------------------------------+
|| port               || String     || |checkmark|  || The port of the email server              |
+---------------------+-------------+---------------+--------------------------------------------+
|| auth               || Boolean    || |checkmark|  || Enable if the email server requires       |
|                     |             |               || authentication                            |
+---------------------+-------------+---------------+--------------------------------------------+
|| username           || String     || |checkmark|  || The username for the email server         |
+---------------------+-------------+---------------+--------------------------------------------+
|| password           || String     || |checkmark|  || The password for the email server         |
+---------------------+-------------+---------------+--------------------------------------------+
|| tls                || Boolean    || |checkmark|  || Enable if the email server requires       |
|                     |             |               || a secure connection                       |
+---------------------+-------------+---------------+--------------------------------------------+
|| replyTo            || String     || |checkmark|  || Email address used for replies            |
+---------------------+-------------+---------------+--------------------------------------------+
|| from               || String     || |checkmark|  || Email address used to send notifications  |
+---------------------+-------------+---------------+--------------------------------------------+
|| priority           || Integer    || |checkmark|  || The priority for the emails               |
+---------------------+-------------+---------------+--------------------------------------------+
|| subject            || String     || |checkmark|  || The subject for the emails                |
+---------------------+-------------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/system/context/preferences/email/config

.. code-block:: none

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9
  password=passw0rd
  port=25
  auth=true
  subject=Site1 Updates
  host=mail.example.com
  replyTo=reply@example.com
  tls=true
  from=site1@example.com
  encoding=UTF-8
  priority=3
  username=user

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
  	"password": "passw0rd",
  	"port": 25,
  	"auth": true,
  	"subject": "Site1 Updates",
  	"host": "mail.example.com",
  	"replyTo": "reply@example.com",
  	"tls": true,
  	"from": "site1@example.com",
  	"encoding": "UTF-8",
  	"priority": 3,
  	"username": "user"
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
