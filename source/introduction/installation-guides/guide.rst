========================================
Install Crafter CMS from Tomcat Zip File
========================================

The tomcat zip file will set up a fully functional Crafter Studio instance running against test data stores.  It can easily be
configured (using the documentation below) to point to Alfresco and external RDBMS.

#.  Download the tomcat install zip from http://craftercms.org/downloads. Source code for this can be found in
    https://github.com/craftercms/studio2-installers.
#.  Unzip the tomcat in any directory.
#.  Start the tomcat

    *   Linux / Apple
        ::

            INSTALL_PATH/bin/startup.sh

    *   Windows
        ::

            INSTALL_PATH/bin/startup.bat

#.  Login in with admin/admin (any username password will work, the security provider is faux by default).
#.  Create a site.

=====================
Configure Crafter CMS
=====================

*   :doc:`/installation/configure`.
*   :doc:`/installation/engine/configure`.
