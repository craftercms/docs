.. _logging:

=======
Logging
=======

Log files from several sources are created when running Crafter CMS.  These log files are useful for checking the status of Crafter CMS, for example, the success of actions/requests, warnings and error messages.  These logs can be used to provide more information about potential issues in the system or for debugging errors.  The log files can be found in ``$CRAFTER_DIR/crafter-authoring/logs/`` or in ``$CRAFTER_DIR/crafter-delivery/logs/`` depending on which environment you are running.  Effective use of these logs is an important part of maintaining your sites and are useful for keeping track of your system performance.  To that end, please make sure that you rotate the logs.

Crafter CMS ships with a Tomcat Application Server, Elasticsearch, Solr, and MongoDB included in the bundle.  There are five folders used by Crafter CMS for the log files,

    - tomcat
    - elasticsearch
    - solr
    - deployer
    - mongodb

-------------------------------------------
Tailing Log Files From a shell/Command Line
-------------------------------------------
The most recent messages from the log files may be displayed by tailing the log files.  Here are the log files and locations of the log files:

+------------------------------+-----------------------------------------------------------------+
|| Log File                    || Location                                                       |
+==============================+=================================================================+
|| Tomcat log file             || ``$CRAFTER_LOGS_DIR/tomcat/catalina.out``                      |
+------------------------------+-----------------------------------------------------------------+
|| Tomcat historical log files || ``$CRAFTER_LOGS_DIR/tomcat/catalina.%Y-%M-%D.log``             |
+------------------------------+-----------------------------------------------------------------+
|| Elasticsearch log files     || ``$CRAFTER_LOGS_DIR/elasticsearch/``                           |
+------------------------------+-----------------------------------------------------------------+
|| Solr Search log files       || ``$CRAFTER_LOGS_DIR/solr/``                                    |
+------------------------------+-----------------------------------------------------------------+
|| Crafter Deployer log file   || ``$CRAFTER_LOGS_DIR/deployer/crafter-deployer.out``            |
+------------------------------+-----------------------------------------------------------------+
|| Crafter Deployer            || ``$CRAFTER_LOGS_DIR/deployer/%SITE-preview.log``               |
||     sites log files         ||                                                                |
+------------------------------+-----------------------------------------------------------------+
|| MongoDB log files           || ``$CRAFTER_LOGS_DIR/mongodb/``                                 |
+------------------------------+-----------------------------------------------------------------+

For the Authoring environment:

    ``$CRAFTER_LOGS_DIR = $CRAFTER_DIR/crafter-authoring/logs``

For the Delivery environment:

    ``$CRAFTER_LOGS_DIR = $CRAFTER_DIR/crafter-delivery/logs``

^^^^^^^^^^^^^^^^^^^^^
Log file descriptions
^^^^^^^^^^^^^^^^^^^^^

Tomcat Log Files
^^^^^^^^^^^^^^^^

File: catalina.out

This log file contains all messages pertaining to all java packages run by Crafter CMS.  It is used for tracking the success of requests/actions and logging helpful warning and error messages.  You'll also notice that in the same folder are the catalina historical log files, which are useful for checking logs for a certain date.  There are other log files created in the same folder that may be of interest to you depending on what you are investigating/debugging, but, the log file **catalina.out** is the one we usually look at to check the status of our system.

To tail the catalina log file in the authoring environment:

.. code-block:: bash

    tail -f crafter-authoring/logs/tomcat/catalina.out

To tail the catalina log file in the delivery environment:

.. code-block:: bash

    tail -f crafter-delivery/logs/tomcat/catalina.out

Deployer Log Files
^^^^^^^^^^^^^^^^^^

File: crafter-deployer.out

This log file contains all messages pertaining to Crafter Deployer.  In the same folder where the **crafter-deployer.out** log file is, you will find all the site specific deployer logs as described in the table above.

To tail the log file in the authoring environment:

.. code-block:: bash

    tail -f crafter-authoring/logs/deployer/crafter-deployer.out

To tail the log file in the delivery environment:

.. code-block:: bash

    tail -f ./crafter-delivery/logs/deployer/crafter-deployer.out

Elasticsearch Log Files
^^^^^^^^^^^^^^^^^^^^^^^

File: elasticsearch.log

This log file contains all messages pertaining to Elasticsearch.

Solr Log Files
^^^^^^^^^^^^^^

File: solr.log

This log file contains all messages pertaining to Crafter Search.  It records errors and warnings related to Search indexing and features.  In the same folder where **solr.log** is found, you'll find other solr logs and archived log files that may be of interest depending on what you're investigating/debugging.
