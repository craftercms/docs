:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Crafter CLI Command add-remote, add-remote

.. _newIa-crafter-cli-add-remote:

==========
add-remote
==========

|

Adds a remote repository to a site

|

   .. note::

      The connection to CrafterCMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command before using the command listed here.

-----
Usage
-----

.. code-block:: text

       crafter-cli add-remote [--config=path] -e=<environment> -n=<remoteName>
                              [-p=<profile>] -s=<siteId> -u=<remoteUrl>
                              [[--username=<username>] (--password=<password> |
                              --token=<token> | --key=<privateKey>)]

|

-------
Options
-------

.. code-block:: text

       --config=path         The folder to store configurations
   -e, --environment=<environment>
                             The name of the environment
       --key=<privateKey>    The path of the private key for authentication
   -n, --name=<remoteName>   The name of the remote repository
   -p, --profile=<profile>   The name of the profile (a label to group related configurations)
       --password=<password> The password for authentication
   -s, --siteId=<siteId>     The id of the site
       --token=<token>       The token for authentication
   -u, --url=<remoteUrl>     The url of the remote repository
       --username=<username> The username for authentication

|

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli add-remote -e local -s editorial -n origin -u http://github.com/john.doe/editorial.git
      Created

   |