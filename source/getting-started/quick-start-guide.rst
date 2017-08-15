.. index:: Quick Start Guide

..  _quick_start_guide:

=================
Quick Start Guide
=================

This section describes how to quickly install Crafter CMS and start crafting your experiences.

Here are the steps to start using Crafter CMS for development or evaluation:

--------------------------------------
Installing and verifying prerequisites
--------------------------------------

.. include:: /includes/installing-and-verifying-prerequisites.rst

.. _installing-crafter-cms-from zip:

--------------------------------------------
Installing Crafter CMS from the zip Download
--------------------------------------------

To install Crafter CMS using the zip download:

    * Download the Crafter CMS install zip file from http://craftercms.org/downloads
           
       Select ``crafter-cms-authoring.zip`` or ``crafter-cms-authoring.tar.gz``.  The zip file will install a fully functional Crafter Studio instance and a Crafter Engine in Preview Mode. Out of the box, the Studio instance uses a local directory as the repository and a Derby database, which allows a quick and easy set up for local development.

    * Unzip the contents in any directory.


.. _start-crafter-cms-server-startup-script:

---------------------------------------------
Starting Crafter CMS Using the Startup Script
---------------------------------------------

    #. **Start the Crafter CMS Server using the startup script**
    
        To start Crafter CMS Server:
        From the command line, navigate to the ``{Crafter-CMS-unzip-directory}/crafter 3/bin/`` directory, and execute the startup script:
    
            * Unix/Linux systems:
    
            .. code-block:: sh
        
                startup.sh 

            * Windows:    
    
            .. code-block:: bat
    
                startup.bat

            .. note::

                For Windows, ``startup.bat`` should be run by a user with full Administrator privileges the very first time it is run.

        .. note::

            It takes a few seconds for Crafter CMS to startup and takes longer to startup the very first time you startup Crafter CMS.


        To stop Crafter CMS Server:
        From the command line, navigate to the ``{Crafter-CMS-unzip-directory}/crafter 3/bin/`` directory, and execute the shutdown script:

            * Unix/Linux systems:
    
            .. code-block:: sh
    
                shutdown.sh 

            * Windows:    
    
            .. code-block:: bat
    
                shutdown.bat

    #. **Open Crafter Studio**
    
        * In your browser, go to 
    
        .. code-block:: none
    
                http://localhost:8080/studio.

        * Login with the following:
    
            * username: admin
            * password: admin 


        After logging in, you should be redirected to the MySites screen, and you're now ready to create your first website!






.. _installing-craftercms-from-gradle:

---------------------------------------------------------------------------
Installing Crafter CMS From Archive Built By the Gradle Environment Builder
---------------------------------------------------------------------------

To create the archives(``*.zip`` or ``*.tar.gz``) for installing Crafter CMS, the following must be installed in your system:

* Java 8
* Git 2.x+
* Maven 3.3.x+

#. Clone the Crafter CMS repo from github

    .. code-block:: bash

        git clone https://github.com/craftercms/craftercms.git

#. Build a deployable bundle using the Gradle Environment Builder to generate the archives ``crafter-cms-authoring.zip`` and ``crafter-cms-authoring.tar.gz`` inside the *bundle* folder

    .. code-block:: bash

        ./gradlew init build deploy bundle

#. Unzip the file (``crafter-cms-authoring.zip`` or ``crafter-cms-authoring.tar.gz``) into any directory.  You may now follow the instructions listed above :ref:`Start the Crafter CMS Server using the startup script <start-crafter-cms-server-startup-script>` to start using Crafter CMS

For more details on using the Gradle environment builder, please review: https://github.com/craftercms/craftercms/blob/master/README.md

