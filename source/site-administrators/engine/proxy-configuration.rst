:is-up-to-date: True

.. index:: Proxy Configuration

.. _proxy-configuration:

###################
Proxy Configuration
###################

The proxy configuration file contains configuration for the preview proxy servers.
To modify the proxy configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Proxy Config** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-proxy-config.jpg
    :alt: Configurations - Open Proxy Configuration
    :width: 55 %
    :align: center

******
Sample
******

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/sandbox/SITENAME/sandbox/config/engine/proxy-config.xml*
   :linenos:

   <?xml version="1.0" encoding="UTF-8"?>

   <!--
     This file configures the proxy servers for preview.

     Every request received by Engine will be matched against the patterns of each server
     and the first one that matches will be used as proxy.

     <server>
       <id/> (id of the server, can have any value)
       <url/> (url of the server)
       <patterns>
         <pattern/> (regex to match requests)
       </patterns>
     </server>
   -->
   <proxy-config>
     <version>2</version>
     <servers>
       <server>
         <id>static-assets</id>
         <url>http://localhost:8080</url>
         <patterns>
           <pattern>/static-assets/.*</pattern>
         </patterns>
       </server>
       <server>
         <id>graphql</id>
         <url>http://localhost:8080</url>
         <patterns>
           <pattern>/api/1/site/graphql.*</pattern>
         </patterns>
       </server>
       <server>
         <id>engine</id>
         <url>http://localhost:8080</url>
         <patterns>
           <pattern>/api/1/.*</pattern>
         </patterns>
       </server>
       <server>
         <id>preview</id>
         <url>http://localhost:8080</url>
         <patterns>
           <pattern>.*</pattern>
         </patterns>
       </server>
     </servers>
   </proxy-config>

|

   .. note::
      Deleting the config file (*proxy-config.xml*) from the repo completely disables the proxy feature.

See :ref:`using-the-proxy-configuration` for an example of configuring the proxy with a React application.
