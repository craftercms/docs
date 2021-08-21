:is-up-to-date: True

.. index:: Crafter CLI Command list-remotes, list-remotes

.. _crafter-cli-list-remotes:

============
list-remotes
============

List the remote repositories of a site

-----
Usage
-----

.. code-block:: text

       crafter-cli list-remotes [--config=path] -e=<environment> [-p=<profile>]
                                -s=<siteId>

|

-------
Options
-------

.. code-block:: text

       --config=path         The folder to store configurations
   -e, --environment=<environment>
                             The name of the environment
   -p, --profile=<profile>   The name of the profile (a label to group related configurations)
   -s, --siteId=<siteId>     The id of the site

|

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli list-remotes -e local -s mysite
      origin (https://myuser@github.com/myuser/onesite.git)
      - master

------
Output
------

*list-remotes* outputs a list of a site's remote repositories in the following format:

   .. code-block:: text

      <remote_name> (remote_url)
      - <remote_branch>

   |

where:

* *remote_name* is the name of the remote repository
* *remote_url* is the url of the remote repository
* *remote_branch* is the name of the remote branch
