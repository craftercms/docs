:is-up-to-date: False

.. index:: Site Configuration

.. _newIa-site-configuration:

##################
Site Configuration
##################

The site configuration file contains the primary configuration for Crafter Studio's behavior. Each site has its own site configuration file that controls its behavior independently of other sites.

To modify the site configuration, click on |siteConfig| from the *Sidebar*, then click on **Configuration** and select **Site Configuration** from the list.

.. image:: /_static/images/site-admin/config-open-site-config.jpg
    :alt: Configurations - Open Site Configuration
    :width: 65 %
    :align: center

|

******
Sample
******

Here's a sample Site Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "site-config.xml"</a></summary>

.. literalinclude:: /_static/code/site-admin/sample-site-config.xml
   :language: xml
   :linenos:


.. raw:: html

   </details>

|
|

.. _studio-site-time-zone:

**************
Site Time Zone
**************

The :ref:`default dates and times <server-time-zone>` used for displays in Studio is UTC.  To customize how dates & times get displayed on Studio UI for a site, edit the following:

.. code-block:: xml
   :linenos:

   <locale>
     <!--
     BCP 47 language tag (e.g. en-US) or unicode extension (e.g. "en-US-u-ca-buddhist").
     Leave empty for using the user's browser locale (i.e. dates/times will be displayed in each users's system locale).
     Specifying a locale code will apply those localization settings to *all* users regardless of their system settings
     or location. For example, if "en-US", is specified, all users will see dates as month/day/year instead of day/month/year
     regardless of their system (i.e. OS) locale preference.
     -->
     <localeCode/>
     <!--
     Use `dateTimeFormatOptions` to customize how dates & times get displayed on Studio UI.
     For full list of options and docs, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
     -->
     <dateTimeFormatOptions>
     <!--
     Specifying a time zone (i.e. `timeZone` element) will express dates/times across the UI in the time zone you specify
     here. Leaving it unspecified, will display dates/times to each user in their own system time zone.
     -->
       <!--<timeZone>EST5EDT</timeZone>-->
       <day>numeric</day>
       <month>numeric</month>
       <year>numeric</year>
       <hour>numeric</hour>
       <minute>numeric</minute>
       <!--
       Set `hour12` to "false" to show times in 24 hour format.
       -->
       <hour12>true</hour12>
     </dateTimeFormatOptions>
   </locale>

|

****************
Enabling Staging
****************

The ``staging`` publishing target is an intermediate publishing target where the site can be fully exercised.  To enable the ``staging`` publishing target, set the following to ``true``:

.. code-block:: xml

   <published-repository>
     <enable-staging-environment>false</enable-staging-environment>
   </published-repository>

|

See :ref:`staging-env` for more information on how to setup the ``staging`` publishing target

***********************
Escaping Content Fields
***********************

To add/remove escaped content fields, modify the following:

.. code-block:: xml

   <!--
   Specifies the regular expression patterns to match content type field
   names that require CDATA escaping.
   -->
   <cdata-escaped-field-patterns>
     <pattern>(_html|_t|_s|_smv|mvs)$</pattern>
     <pattern>internal-name</pattern>
   </cdata-escaped-field-patterns>

|

For more information on escaping content fields, see the notes under :ref:`Variable Names and Search Indexing <variable-names-search-indexing>`

*******************
Publishing Comments
*******************

To make comments mandatory for different publishing methods, simply set to ``true`` any applicable methods the site administrators want to require comments when publishing.

.. code-block:: xml

   <publishing>
     <comments>
       <!-- Global setting would apply to all -->
       <required>false</required>
       <!-- Additional (also optional) specific overrides -->
       <!-- <delete-required/> -->
       <!-- <bulk-publish-required/> -->
       <!-- <publish-by-commit-required/> -->
       <!-- <publish-required/> -->
     </comments>
   </publishing>

|

See :ref:`publishing-and-status` for more information on the different publishing methods available from ``Site Tools``

******************
Content Monitoring
******************

Content monitoring allows you to configure watches and notifications on your site. To add content monitors, add the following:

.. code-block:: xml

   <contentMonitoring>
     <monitor>
       <name>Content Expiring Tomorrow</name>
       <query>expired_dt:[now+1d/d TO now+2d/d]</query>
       <paths>
         <path>
           <name>All Site</name>
           <pattern>/site/.*</pattern>
           <emailTemplate>contentExpiringSoon</emailTemplate>
           <emails>admin@example.com</emails>
           <locale>en</locale>
         </path>
       </paths>
     </monitor>
   </contentMonitoring>

|

See :ref:`content-monitoring` for more information on configuring content monitoring.
