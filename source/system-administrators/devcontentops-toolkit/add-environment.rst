:is-up-to-date: True

.. index:: Crafter CLI Command add-environment, add-environment

.. _crafter-cli-add-environment:

===============
add-environment
===============

Adds the configuration to connect to CrafterCMS

-----
Usage
-----

.. code-block:: text

       crafter-cli add-environment --password [--config=path] -e=<environment>
                                   [-p=<profile>] -u=<url> --username=<username>

|

-------
Options
-------

.. code-block:: text

       --config=path         The folder to store configurations
   -e, --environment=<environment>
                             The name of the environment
   -p, --profile=<profile>   The name of the profile (a label to group related configurations)
       --password            The password for authentication
       --token               The access token for authentication
   -u, --url=<url>           The URL of the server
       --username=<username> The username for authentication

|

-------
Example
-------

Here's an example of issuing the ``add-environment`` command to setup the connection to CrafterCMS.  We'll use ``local`` for the name, ``http://localhost:8080`` for the url, and a token for the authentication.  (See :ref:`here <access-tokens>` for the steps on how to create a token.)  Leave the token blank, you will be prompted for the token after issuing the ``add-environment`` command:

.. code-block:: bash

   ➜  ./crafter-cli add-environment -e local -u http://localhost:8080 --token
   Enter value for --token (The access token for authentication):
   Environment added

|

If you're using HTTP basic for authentication when issuing the ``add-environment`` command, use ``username`` and ``password`` for the authentication.  Remember to enable the flag for HTTP basic auth to enable using the ``username`` and ``password`` for authentication as described :ref:`here <http-basic-authentication>`.

We'll use ``local`` for the name, ``http://localhost:8080`` for the url, and ``john`` for the username.  Leave the password blank, you will be prompted for the password after issuing the ``add-environment`` command:

.. code-block:: bash

    ➜  ./crafter-cli add-environment -e local -u http://localhost:8080 --username john --password
    Enter value for --password (The password for authentication):
    Environment added

|
