:is-up-to-date: True

.. index:: Crafter CLI Command list-sites, list-sites

.. _crafter-cli-list-sites:

============
list-sites
============

List the sites that the current user can access

-----
Usage
-----

.. code-block:: text

       crafter-cli list-sites [--config=path] -e=<environment> [-p=<profile>]

|

-------
Options
-------

.. code-block:: text

       --config=path         The folder to store configurations
   -e, --environment=<environment>
                            The name of the environment
   -p, --profile=<profile>   The name of the profile (a label to group related configurations)

|

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli list-sites -e local
      foo (another-hello)
      hello (hello)
      mysite (mysite)

------
Output
------

*list-sites* outputs a list of sites in the following format:

   .. code-block:: text

      <site_name> (site_id)

   |

where:

* *site_name* is the friendly name of the site
* *site_id* is the ID of the site

