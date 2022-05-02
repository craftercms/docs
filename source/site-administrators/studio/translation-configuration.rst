:is-up-to-date: True
:since-version: 4.0.0

.. index:: Translation Configuration

.. _translation-configuration:

#########################
Translation Configuration
#########################

The translation configuration defines supported languages and how to resolve them

To modify the translation configuration, click on |projectTools| from the *Sidebar*, then click on **Configuration**
and select **Translation Configuration** from the list.

.. image:: /_static/images/site-admin/config-open-translation-config.jpg
   :alt: Configurations - Open Translation Configuration
   :width: 55 %
   :align: center

|

******
Sample
******

.. code-block:: xml
   :linenos:

   <translation-config>

     <!-- List of codes for the supported locales -->
     <!--
     <localeCodes>
       <localeCode>en_us</localeCode>
     </localeCodes>
     -->

     <!-- The code of the default locale for all new content -->
     <!--
     <defaultLocaleCode>en_us</defaultLocaleCode>
     -->

     <!-- Indicates if the default locale should be used when none of the resolvers can find a locale -->
     <!--
     <fallbackToDefaultLocale>true</fallbackToDefaultLocale>
     -->

     <!-- List of locale resolvers -->
     <!--
     <localeResolvers>
     -->
     <!-- List of locale resolvers, will be executed in the same order until one returns a locale -->
       <!--
       <localeResolver>
         <type>urlPattern</type>
         <mappings>
           <mapping>
             <pattern>.+/en</pattern>
             <localeCode>en_us</localeCode>
           </mapping>
         </mappings>
       </localeResolver>
       <localeResolver>
         <type>cookie</type>
       </localeResolver>
       <localeResolver>
         <type>header</type>
       </localeResolver>
       <localeResolver>
         <type>groovy</type>
         <script>/scripts/locale.groovy</script>
       </localeResolver>
     </localeResolvers>
     -->

   </translation-config>