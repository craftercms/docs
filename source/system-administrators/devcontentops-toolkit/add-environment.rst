:is-up-to-date: True

.. index:: Crafter CLI Command add-environment, add-environment

.. _crafter-cli-add-environment:

===============
add-environment
===============

Adds the configuration to connect to Crafter CMS

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
   -u, --url=<url>           The URL of the server
       --username=<username> The username for authentication

|

-------
Example
-------

Here's an example of issuing the ``add-environment`` command to setup the connection to Crafter CMS.  We'll use ``local`` for the name, ``http://localhost:8080`` for the url, and username ``john`` for the authentication.  Leave the password blank, you will be prompted for the password after issuing the ``add-environment`` command:

   .. code-block:: bash

       ➜  ./crafter-cli add-environment -e local -u http://localhost:8080 --username john --password
       Enter value for --password (The password for authentication):
       Added

   |
