:is-up-to-date: True

.. index:: Crafter CLI Command copy-plugin, copy-plugin

.. _newIa-crafter-cli-copy-plugin:

===========
copy-plugin
===========

|

Copies a plugin from a Studio local folder into a site

|

   .. note::

      The connection to CrafterCMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command before using the command listed here.

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
   -p, --profile=<profile>   The name of the profile (a label to group related configurations)
       --path=<path>         The plugin source path (must be a local folder to
                              Crafter Studio)
   -s, --siteId=<siteId>     The id of the site

|

-------
Example
-------

   .. code-block:: bash

      ➜  ./crafter-cli copy-plugin -e local -s editorial --path /users/myuser/myplugin
      OK

   |


See :ref:`how-do-i-make-my-own-site-plugin` for the folder structure required for your plugin and more information on creating a plugin
