.. todo:: Write Installation Guide

.. toctree::
    :titlesonly:
    :maxdepth: 2

From Tomcat Zip File
--------------------

The tomcat zip file will set up a fully functional Crafter Studio instance running against test data stores.  It can easily be configured (using the documentation below) to point to Alfresco and external RDBMS.

#. Download the tomcat install zip here `http://craftercms.org/downloads`
    - Source code for this can be found `here <https://github.com/craftercms/studio2-installers>`

#. Unzip the tomcat in any directory

#. Start the tomcat
    - Linux / Apple::

        INSTALL-DIR/bin/startup.sh

    - Windows::

        INSTALL-DIR/bin/startup.bat

#. Login in with admin/admin (any username password will work, the security provider is faux by default)

#. Create a site

Configure Crafter CMS
---------------------

See :doc:`Configuration Guide</installation/configure>` for details.
