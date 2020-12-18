:is-up-to-date: True

.. index:: Crafter CLI Command sync-from, sync-from

.. _crafter-cli-sync-from:

=========
sync-from
=========

Sync the content of a site from a remote repository

-----
Usage
-----

.. code-block:: text

      crafter-cli sync-from [-b=<remoteBranch>] [--config=path]
                             -e=<environment> [-m=none|ours|theirs]
                             [-n=<remoteName>] [-p=<profile>] -s=<siteId>

|

-------
Options
-------

.. code-block:: text

   -b, --branch=<remoteBranch>
                             The name of the remote branch
       --config=path         The folder to store configurations
   -e, --environment=<environment>
                             The name of the environment
   -m, --mergeStrategy=none|ours|theirs
                             The merge strategy to use
   -n, --name=<remoteName>   The name of the remote
   -p, --profile=<profile>   The name of the profile
   -s, --siteId=<siteId>     The id of the site

|

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli sync-from -e local -s mysite -n origin -b master
      OK


