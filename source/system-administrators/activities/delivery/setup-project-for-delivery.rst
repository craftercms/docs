:is-up-to-date: True

.. index:: Setup Project for a Delivery Environment

.. _setup-project-for-delivery:

========================================
Setup Project for a Delivery Environment
========================================

In this section, we will be working in the delivery environment of CrafterCMS and describing how to
setup your project for a delivery environment.

-----------------------------
Setup Crafter Deployer Target
-----------------------------

CrafterCMS out of the box has a script to help you create your deployer target for the delivery environment.

In the ``bin`` folder in your CrafterCMS delivery environment, we will use the script ``init-site.sh`` to help us create the deployer target.

From your command line, navigate to your ``{Crafter-CMS-delivery-environment-directory}/bin/`` , and execute the init-site script. The following output of ``init-site.sh -h``
explains how to use the script:

  .. code-block:: bash
    :force:

    usage: init-site [options] [site] [repo-path]
     -a,--notification-addresses <addresses>   A comma-separated list of email
                                               addresses that should receive
                                               deployment notifications
     -b,--branch <branch>                      The name of the branch to clone
                                               (live by default)
     -f,--passphrase <passphrase>              The passphrase of the private
                                               key (when the key is passphrase
                                               protected)
     -h,--help                                 Show usage information
     -k,--private-key <path>                   The path to the private key, if
                                               it's not under the default path
                                               (~/.ssh/id_rsa), when
                                               authenticating through SSH to
                                               the remote Git repo
     -p,--password <password>                  The password for the remote Git
                                               repo, when using basic
                                               authentication
     -s,--crafter-search                       Use Crafter Search instead of
                                               Elasticsearch
     -u,--username <username>                  The username for the remote Git
                                               repo, when using basic
                                               authentication

    EXAMPLES:
     Init a site from the default repo path (../../crafter-authoring/data/repos/sites/{sitename}/published)
         init-site mysite
     Init a site from a specific local repo path
         init-site mysite /opt/crafter/authoring/data/repos/sites/mysite/published
     Init a site from a specific local repo path, cloning a specific branch of the repo
         init-site -b master mysite /opt/crafter/authoring/data/repos/sites/mysite/published
     Init a site that is in a remote HTTPS repo with username/password authentication
         init-site -u jdoe -p jdoe1234 mysite https://github.com/jdoe/mysite.git
     Init a site that is in a remote SSH repo with public/private key authentication (default private key path
     with no passphrase)
         init-site mysite ssh://myserver/opt/crater/sites/mysite
     Init a site that is in a remote SSH repo with public/private key authentication (specific private key path
     with no passphrase)
         init-site -k ~/.ssh/jdoe_key mysite ssh://myserver/opt/crater/sites/mysite
     Init a site that is in a remote SSH repo with public/private key authentication (specific private key path
     with passphrase)
         init-site -k ~/.ssh/jdoe_key -f jdoe123 mysite ssh://myserver/opt/crater/sites/mysite


We recommend using Secure Shell (SSH) with your site's published repo Git url and for authentication, to use either username/password authentication or public/private key
authentication. The SSH Git URL format is: ``ssh://[user@]host.xz[:port]/path/to/repo/`` where sections between **[]** are optional.

Example #1: ``ssh://server1.example.com/path/to/repo``

Example #2: ``ssh://jdoe@server2.example.com:63022/path/to/repo``

   .. note::
      .. include:: /includes/setup-ssh-keys.rst

If you are just working on another directory on disk for your delivery, you can just use the filesystem.  When your repository is local, make sure to use the absolute path.
Here is an example project's published repo Git url when using a local repository:

  .. code-block:: bash

      /opt/crafter/authoring/data/repos/sites/my-project/published

.. note::
  * When using ``ssh``, you might see in the logs ``Caused by: org.apache.sshd.common.SshException: Server key did not validate`` errors. These error is caused by the server not in the known_host file. Please follow the instructions in :ref:`crafter-studio-debugging-deployer-issues` under ``SSH Unknown Host`` to resolve them.

  * ``Git`` needs to be installed in authoring when using SSH to connect the delivery to the authoring.

    If you see the following error in the delivery Deployer: `Caused by: java.io.IOException: bash: git-upload-pack: command not found` you'll need to add the location of git (usually **/usr/bin**) to your non-login shell startup file (e.g. **~/.bashrc**).

    To get the location of Git, run the following command: ``which git-upload-pack``


--------------------------------
Viewing your Project for Testing
--------------------------------

To test viewing your project, open a browser and type in the url of your project.

If you have multiple projects setup, to view a certain project, in your browser, enter the following:

.. code-block:: sh

    <your url>?crafterSite=<project id>

Here we have an example of a delivery setup in another directory on disk (local), where there are two projects,
``my-awesome-editorial`` and ``hello-world``

.. image:: /_static/images/system-admin/project-list.webp
    :width: 100 %
    :align: center
    :alt: Setup Project for Delivery - Project List

To set the ``crafterSite`` to the ``hello-world`` project, in your browser, type in

.. code-block:: sh

    http://localhost:9080?crafterSite=hello-world

.. image:: /_static/images/system-admin/project-hello.webp
    :width: 100 %
    :align: center
    :alt: Setup Project for Delivery - Hello World Project

To set the site to the ``my-awesome-editorial``, in your browser, type in

.. code-block:: sh

    http://localhost:9080?crafterSite=my-awesome-editorial

.. image:: /_static/images/system-admin/project-awesome.webp
    :width: 100 %
    :align: center
    :alt: Setup Project for Delivery - My Awesome Editorial
