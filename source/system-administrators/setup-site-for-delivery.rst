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

From your command line, navigate to your ``{Crafter-CMS-delivery-environment-directory}/bin/`` , and execute the init-site script:

    * Unix/Linux systems:

        .. code-block:: bat

            ./init-site.sh  <site name> [site's published repo git url] [ssh private key path]

    * Windows:

        .. code-block:: bat

            init-site.bat  <site name> [site's published repo git url] [ssh private key path]

where:

    - ``<site name>`` is the name of your site
    - ``<site's published repo git url>`` is the site's published repository git url.
      We recommend using Secure Shell (SSH) or if you are just working on another directory on disk for your delivery, you can just use the filesystem.  When your repository is local, make sure to use the absolute path.

      Here is a sample git url using ssh:

      .. code-block:: sh

          ssh://[user@]host.xz[:port]/path/to/repo/

      or alternatively for ssh:

      .. code-block:: sh

          [user@]host.xz:path/to/repo/

      Here is a sample git url when using a local repository:

      .. code-block:: sh

          /path/to/repo/
    - ``<ssh private key path>`` is the local path for the private key used for SSH public/private authentication.

.. note:: When using ``ssh``, we'll need to specify ssh to connect to your port and to use your host key algorithm as the preferred host key algorithm by running this command before running the ``init-site`` script:

          .. code-block:: bash

              ssh -o HostKeyAlgorithms=<your-host-key-algorithm> <hostname> -p<your-port>


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

