:is-up-to-date: True

.. index:: Crafter CLI Command create-site, create-site

.. _crafter-cli-create-site:

===========
create-site
===========

Creates a site from a blueprint or a remote repository

-----
Usage
-----

.. code-block:: text

       crafter-cli create-site [-or] [--singleBranch] [-b=<remoteBranch>]
                               [--blueprint=<blueprint>] [--config=path]
                               [-d=<description>] -e=<environment>
                               [-n=<remoteName>] [-p=<profile>] -s=<siteId>
                               [--sandboxBranch=<sandboxBranch>] [-u=<url>]
                               [--siteParam=<String=String>]...
                               [[--username=<username>] (--password=<password>
                               | --token=<token> | --key=<privateKey>)]
                               [--clone | --push]

|

-------
Options
-------

.. code-block:: text

   -b, --branch=<remoteBranch>
                            The name of the remote branch
       --blueprint=<blueprint>
                            The id of the site blueprint
       --clone               Create a site cloning a remote repository
       --config=path         The folder to store configurations
   -d, --description=<description>
                            The description for the site
   -e, --environment=<environment>
                            The name of the environment
       --key=<privateKey>    The path of the private key for authentication
   -n, --name=<remoteName>   The name of the remote
   -o, --orphan              Discards the history from the remote repository
   -p, --profile=<profile>   The name of the profile
       --password=<password> The password for authentication
       --push                Create a site and push to a remote repository
   -r, --remote              Enable the options for using a remote repository
   -s, --siteId=<siteId>     The id of the site
       --sandboxBranch=<sandboxBranch>
                             The name of the branch for the local repository
       --singleBranch        Fetch only the given branch from the remote
                               repository
       --siteParam=<String=String>
                             Parameter for the blueprint
       --token=<token>       The token for authentication
   -u, --url=<url>           The URL of the remote repository
       --username=<username> The username for authentication

|

-------
Example
-------

Here's an example of creating a site using the Website Editorial Blueprint:

   .. code-block:: bash

      ➜  ./crafter-cli create-site -e local -s myeditorial --blueprint org.craftercms.blueprint.editorial
      OK

   |

Here's an example of creating a site by cloning an existing
   .. code-block:: bash

      ➜  ./crafter-cli create-site -e local -s my-site -n My Site \
                        -r --clone -u http://github.com/john/doe/my-site.git -b development \
                        --username john --key /home/john/private_key