:is-up-to-date: True

.. index:: Crafter CLI Command copy-plugin, copy-plugin

.. _crafter-cli-copy-plugin:

===========
copy-plugin
===========

Copies a plugin from a Studio local folder into a site

-----
Usage
-----

.. code-block:: text

       crafter-cli copy-plugin [--config=path] -e=<environment> [-p=<profile>]
                               --path=<path> -s=<siteId>

|

-------
Options
-------

.. code-block:: text

       --config=path         The folder to store configurations
   -e, --environment=<environment>
                             The name of the environment
   -p, --profile=<profile>   The name of the profile
       --path=<path>         The plugin source path (must be a local folder to
                              Crafter Studio)
   -s, --siteId=<siteId>     The id of the site

|

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli copy-plugin -e local -s editorial --path
      Created

   |