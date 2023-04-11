+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``startup.sh``                                                      |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || CrafterCMS *Authoring/Delivery Environment*                         |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``shutdown.sh``                                                     |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Stops all needed Services to have a functional                      |
||                        || CrafterCMS *Authoring/Delivery Environment*                         |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+------------------------------------------------------------------------+
|| **Script**             || ``crafter.sh``                                                        |
+-------------------------+------------------------------------------------------------------------+
|| **Description**        || Main Script to start and stop all needed Services to have a           |
||                        || functional CrafterCMS *Authoring/Delivery Environment*                |
||                        || To log the output of the script to a file, set the environment        |
||                        || variable CRAFTER_SCRIPT_LOG to point to a log file                    |
+-------------------------+------------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``debug.sh``                                                        |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || CrafterCMS *Authoring/Delivery Environment* with the JAVA remote    |
||                        || debug ports open and listening port 5000/5001 for Crafter Deployer, |
||                        || and 8000/9000 for Apache Tomcat                                     |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``deployer.sh``                                                     |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Script located in *$CRAFTER_HOME/bin/crafter-deployer* which will   |
||                        || start,stop Crafter Deployer for the *Authoring/Delivery* environment|
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``crafter-setenv.sh``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Script located in *$CRAFTER_HOME/bin/crafter-setenv.sh*             |
||                        || Sets various environment variable to configure CrafterCMS           |
+-------------------------+----------------------------------------------------------------------+

Let's look at an example on how to start an authoring environment using the scripts we discussed above. To start the authoring environment, go to your CrafterCMS install folder then run the following:

    .. code-block:: bash

        cd crafter-authoring/bin
        ./startup.sh

What the above does is go to your authoring environment folder, then run the startup script.

To stop the authoring environment:

    .. code-block:: bash

        ./shutdown.sh
