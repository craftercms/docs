:is-up-to-date: True

.. index:: Crafter CLI, Crafter Command Line Interface

.. _crafter-cli:

==============================
Crafter Command Line Interface
==============================

The Crafter Command Line Interface, **Crafter CLI**, allows you to run commands that perform various actions available through Crafter Studio from the command prompt in your terminal program.

To run the command line tool, download the **Crafter CLI** from http://craftercms.org/downloads and extract the contents to any directory.  In your terminal program, navigate to the directory where you extracted the tool.  There you will find two versions of the tool:

* **crafter-cli:** - for users on a Linux/macOS operating system
* **crafter-cli.bat** - for users on a Windows operating system

When using the **Crafter CLI**, we first need to setup the connection to Crafter CMS before we can use the other available commands.  To setup the connection, run the ``add-environment`` command,  provide a name, the url for a Crafter CMS authoring server and the authentication information.

For the example below, we'll use ``local`` for the name, ``http://localhost:8080`` for the url, and username ``john`` for the authentication.  Leave the password blank, you will be prompted for the password after issuing the ``add-environment`` command:

   .. code-block:: bash

      ➜  ./crafter-cli add-environment -e local -u http://localhost:8080 --username john --password
      Enter value for --password (The password for authentication):
      Added

   |

After setting up the connection to Crafter CMS, you may now create sites or sync a remote repository from the command line, etc:

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
        add-environment  Adds the configuration to connect to Crafter CMS
        add-remote       Adds a remote repository to a site
        create-site      Creates a site from a blueprint or a remote repository
        list-remotes     List the remote repositories of a site
        sync-from        Sync the content of a site from a remote repository
        sync-to          Sync the content of a site to a remote repository

   |

To view more information about each command, just enter ``./crafter-cli <command>``, for example:

   .. code-block:: bash

      ➜  ./crafter-cli add-environment
      Usage: crafter-cli add-environment --password [--config=path] -e=<environment>
                                      [-p=<profile>] -u=<url> --username=<username>
      Adds the configuration to connect to Crafter CMS
            --config=path         The folder to store configurations
        -e, --environment=<environment>
                                  The name of the environment
        -p, --profile=<profile>   The name of the profile
            --password            The password for authentication
        -u, --url=<url>           The URL of the server
            --username=<username> The username for authentication

   |


You can also find more information on the Crafter CLI commands, here:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   crafter-cli-commands



