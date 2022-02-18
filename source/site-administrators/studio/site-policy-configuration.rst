:is-up-to-date: True

.. index:: Site Policy Configuration

.. _site-policy-configuration:

#########################
Site Policy Configuration
#########################

The site policy configuration file allows the user to configure conditions for content being added to the site, such as
minimum/maximum size of files, etc.

CrafterCMS supports the following site policies:

- Filename allowed patterns and automatic renaming rules
- File size limits
- MIME-type limits
- Content-type limits

To modify the site policy configuration, click on |siteConfig| from the *Sidebar*, then click on **Configuration** and
select **Site Policy Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-site-policy-config.jpg
   :alt: Configurations - Open Site Policy Configuration
   :width: 35 %
   :align: center


******
Sample
******

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/site-policy-config.xml*
   :linenos:

   <?xml version="1.0" encoding="UTF-8" ?>

   <site-policy>

     <!--
       This file can contain any number of statements to control the content added to the site:

       <statement>
         <target-path-pattern/> (Regular expression that will be compared against the path of the content)

         <permitted>
           (All elements in this section are optional and can be used in any combination)

           <minimum-file-size/> (Minimum size of the file in bytes)
           <maximum-file-size/> (Maximum size of the file in bytes)

           <mime-types/> (Comma separated list of MIME types, also support wildcards)

           <content-types/> (Comma separated list of content-types)

           <path>
             <source-regex/> (Regular expression to validate the full path of the file)
             <target-regex caseTransform="lowercase"/> (Expression to transform the full path of the file)
           </path>

         </permitted>
       </statement>
      -->

     <!-- Example: only allow images of less than 1 MB -->
     <statement>
       <target-path-pattern>/static-assets/images/.*</target-path-pattern>
       <permitted>
         <maximum-file-size>1000000</maximum-file-size>
         <mime-types>image/*</mime-types>
       </permitted>
     </statement>

   </site-policy>

|
