:is-up-to-date: True

.. index:: DevContentOps Toolkit, CrafterCMS Command Line Interface, crafter-cli

.. _devcontentops-toolkit:

=====================
DevContentOps Toolkit
=====================

CrafterCMS provides a DevContentOps Toolkit to support :ref:`DevContentOps <developer-workflow>` processes in CrafterCMS.  The DevContentOps Toolkit contains the CrafterCMS Command Line Interface (CLI), that allows you to authenticate with CrafterCMS and exercise its APIs via a Unix or Windows command line interface.

To run the command line tool (CrafterCMS Command line Interface (CLI) for DevContentOps processes), in your terminal program, navigate to the ``bin`` folder  ``CRAFTER_HOME/bin/cli/bin/``.  There you will find two versions of the tool:

* **crafter-cli:** - for users on a Linux/macOS operating system
* **crafter-cli.bat** - for users on a Windows operating system

When using the **crafter-cli**, we first need to setup the connection to CrafterCMS before we can use the other available commands.  To setup the connection, run the ``add-environment`` command,  provide a name, the url for a CrafterCMS authoring server and the authentication information.

For the example below, we'll use ``local`` for the name, ``http://localhost:8080`` for the url, and your access token for the authentication.  See :ref:`here <access-tokens>` for the steps on how to create a token.  Leave the token blank, you will be prompted for the token after issuing the ``add-environment`` command:

   .. code-block:: bash

      ➜  ./crafter-cli add-environment -e local -u http://localhost:8080 --token
      Enter value for --token (The access token for authentication):
      Environment added

   |

After setting up the connection to CrafterCMS, you may now create sites or sync a remote repository from the command line, etc:

Here's an example  of creating a site:

   .. code-block:: bash

      ➜  ./crafter-cli create-site -e local -s myeditorial --blueprint org.craftercms.blueprint.editorial
      OK

   |

Here's an example of adding a remote to a site:

   .. code-block:: bash

      ➜  ./crafter-cli add-remote -e local -s editorial -n origin -u http://github.com/john.doe/editorial.git
      Created

   |

Here's an example of syncing to a remote repository:

   .. code-block:: bash

       ➜  ./crafter-cli sync-to -e local -s editorial -n origin -b site-updates
       OK

   |

To view the available commands, type in ``./crafter-cli -h``

   .. code-block:: bash

      ➜  ./crafter-cli -help
      Usage: crafter-cli [-hV] [COMMAND]
        -h, --help      Show this help message and exit.
        -V, --version   Print version information and exit.
      Commands:
        help             Displays help information about the specified command
        add-environment  Adds the configuration to connect to CrafterCMS
        add-remote       Adds a remote repository to a site
        create-site      Creates a site from a blueprint or a remote repository
        list-remotes     List the remote repositories of a site
        sync-from        Sync the content of a site from a remote repository
        sync-to          Sync the content of a site to a remote repository
        list-sites       List the sites that the current user can access
        copy-plugin      Copies a plugin from a Studio local folder into a site

   |

To view more information about each command, just enter ``./crafter-cli <command>``, for example:

   .. code-block:: bash

      ➜  ./crafter-cli add-environment
      Usage: crafter-cli add-environment --password [--config=path] -e=<environment>
                                      [-p=<profile>] -u=<url> --username=<username>
      Adds the configuration to connect to CrafterCMS
            --config=path         The folder to store configurations
        -e, --environment=<environment>
                                  The name of the environment
        -p, --profile=<profile>   The name of the profile
            --password            The password for authentication
        -u, --url=<url>           The URL of the server
            --username=<username> The username for authentication

   |


You can also find more information on the **crafter-cli** commands, here:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   crafter-cli-commands



