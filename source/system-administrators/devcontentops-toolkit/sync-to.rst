:is-up-to-date: True

.. index:: Crafter CLI Command sync-to, sync-to

.. _crafter-cli-sync-to:

=======
sync-to
=======

|

Sync the content of a site to a remote repository

|

   .. note::

      The connection to CrafterCMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command before using the command listed here.

-----
Usage
-----

.. code-block:: text

   crafter-cli sync-to [-f] [-b=<remoteBranch>] [--config=path]
                       -e=<environment> [-n=<remoteName>] [-p=<profile>]
                       -s=<siteId>

-------
Options
-------

.. code-block:: text

   -b, --branch=<remoteBranch>
                             The name of the remote branch
       --config=path         The folder to store configurations
   -e, --environment=<environment>
                            The name of the environment
   -f, --force               Forces the update of the remote repository
   -n, --name=<remoteName>   The name of the remote
   -p, --profile=<profile>   The name of the profile (a label to group related configurations)
   -s, --siteId=<siteId>     The id of the site

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli sync-to -e local -s mysite -n origin -b master
      OK

   |

