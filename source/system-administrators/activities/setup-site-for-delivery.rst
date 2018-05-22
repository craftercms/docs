.. _setup-site-for-delivery:

=====================================
Setup Site for a Delivery Environment
=====================================

In this section, we will be working in the delivery environment of Crafter CMS and describing how to setup your site for a delivery environment.

--------------------------
Setup Solr core and Target
--------------------------

Crafter CMS out of the box has a script to help you create your Solr core and deployer target for the delivery environment.

In the ``bin`` folder in your Crafter CMS delivery environment, we will use the script ``init-site.sh``/``init-site.bat`` to help us create the Solr core and the deployer target.

From your command line, navigate to your ``{Crafter-CMS-delivery-environment-directory}/bin/`` , and execute the init-site script. The following output of ``init-site.sh -h``
explains how to use the script:

  .. code-block:: guess

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


We recommend using Secure Shell (SSH) with your site's published repo git url and for authentication, to use either username/password authentication or public/private key
authentication. The SSH Git URL format is: ``ssh://[user@]host.xz[:port]/path/to/repo/`` where sections between **[]** are optional.

Example #1: ``ssh://server1.example.com/path/to/repo``

Example #2: ``ssh://jdoe@server2.example.com:63022/path/to/repo``

If you are just working on another directory on disk for your delivery, you can just use the filesystem.  When your repository is local, make sure to use the absolute path.
Here is an example site's published repo git url when using a local repository:

  .. code-block:: guess

      /opt/crafter/authoring/data/repos/sites/mysite/published

.. note::
  * When using ``ssh``, you might see in the logs ``com.jcraft.jsch.JSchException: UnknownHostKey`` errors. These errors are common in Ubuntu, and are caused by known host keys being stored in non-RSA format. Please follow the instructions in :ref:`crafter-studio-debugging-deployer-issues` under ``SSH Unknown Host`` to resolve them.

  * ``git`` needs to be installed when using ssh to connect the authoring and delivery.

    If you see the following error in the delivery Deployer: `Caused by: java.io.IOException: bash: git-upload-pack: command not found` you'll need to add the location of git (usually **/usr/bin**) to your shell startup file (e.g. **~/.bashrc**).

    To get the location of git, run the following command: ``which git-upload-pack``


-----------------------------
Viewing your Site for Testing
-----------------------------

To test viewing your site, open a browser and type in the url of your site.

If you have multiple sites setup, to view a certain site, in your browser, enter the following:

.. code-block:: sh

    <your url>?crafterSite=<site name>

Here we have an example of a delivery setup in another directory on disk (local), where there are two sites, ``myawesomesite`` and ``helloworld``

.. image:: /_static/images/site-admin/site-list.png
    :width: 100 %
    :align: center
    :alt: Setup Site for Delivery - Site List

To set the site to the ``helloworld`` site, in your browser, type in

.. code-block:: sh

    http://localhost:9080?crafterSite=helloworld

.. image:: /_static/images/site-admin/site-hello.png
    :width: 100 %
    :align: center
    :alt: Setup Site for Delivery - Hello World Site

To set the site to the ``myawesomesite``, in your browser, type in

.. code-block:: sh

    http://localhost:9080?crafterSite=myawesomesite

.. image:: /_static/images/site-admin/site-awesome.png
    :width: 100 %
    :align: center
    :alt: Setup Site for Delivery - My Awesome Site
