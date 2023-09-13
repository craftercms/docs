:is-up-to-date: True
:last-updated: 4.1.2

.. TODO Review this article and see if it should be changes from the format: authoring - delivery to more general topics and how to implement the topic/concern
   Also, check for flow. We moved the site configuration to the top, make sure it flows well.

.. _project-admin:

=============================
Project (Site) Administration
=============================
.. contents::
    :local:
    :depth: 2

This section details activities related to project administration in CrafterCMS. The content is oriented towards CrafterCMS administration primarily through Crafter Studio.

Most configuration files can be accessed through Crafter Studio through the **Sidebar ->** |projectTools| **-> Configuration**. but can also be modified by accessing the configuration files directly. Please note that it is recommended that changes to configuration files be done through the Crafter Studio UI.

-----------------------
What is a Project/Site?
-----------------------
A project or a site is a collection of related pages/components and assets.

For the project repository, the project structure looks like this::

        {REPOSITORY_ROOT}/sites/PROJECTNAME/sandbox/
            config
                engine
                studio
                    administration
                    content-types
                    data-sources
                    dependency
                    workflow
            scripts
                classes
                components
                pages
                rest
            site
                components
                taxonomy
                website
            static-assets
                css
                fonts
                images
                js
            templates
                system
                web


Credentials may be required in some project configurations. For more information on how to
manage/encode your secrets such as AWS credentials, please see :ref:`managing-secrets`.

---------
Authoring
---------
In this section we discuss various aspects of managing content, UI, security, etc. in an authoring environment.

^^^^^^^^^^^^^
Configuration
^^^^^^^^^^^^^
To access the configuration settings in Crafter Studio, click on |projectTools| in the Sidebar,

.. image:: /_static/images/site-admin/configuration-access.webp
    :align: center
    :width: 25%
    :alt: Open Configuration

then click on **Configuration**. After clicking on **Configuration**, you will see a list where
you can select which configuration file you'd like to view/modify. Below is one of the configuration
files available to be viewed/modified.

.. image:: /_static/images/site-admin/basic-configuration.webp
    :align: center
    :width: 80%
    :alt: Basic Configuration

|

The following items are noted in the image above:

    #. This is the list that contains all the configurations that can be viewed/modified for your project.
    #. This is a short description of the current selected configuration file from the dropdown list.
    #. These are the available actions that can be selected for the current selected configuration file.
    #. This allows the user to encrypt access keys, passwords and other sensitive information required by the current selected configuration file. For more information on how to encrypt sensitive information in a configuration file through Studio, see :ref:`encrypting-text-in-a-configuration-file`
    #. This allows the user to view the selected configuration's history

Here are the settings that can be configured through Crafter Studio:

.. TODO: Does the Proxy config below here or in Engine? (it configures engine, but configures it for Preview)

.. list-table:: Studio Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
      - More Information
    * - Project Configuration (``config/studio/site-config.xml``)
      - Defines the general project configuration
      - - :ref:`project-configuration`
        - :ref:`content-monitoring`
    * - Notification Configuration (``config/studio/workflow/notification-config.xml``)
      - Defines a list of UI messages to use in notifications
      - - :ref:`configure-notifications`
    * - Permissions Mapping (``config/studio/permission-mappings-config.xml``)
      - Defines user access permissions to the project
      - - :ref:`Permission Mappings Configuration <permission-mappings>`
    * - Role Mappings (``config/studio/role-mappings-config.xml``)
      - Maps users and groups to roles within the project
      - - :ref:`Role Mappings Configuration <project-role-mappings>`
    * - Content Type Editor Config (``config/studio/administration/site-config-tools.xml``)
      - Defines controls, data sources, and content types for content authoring
      - - :ref:`Content Type Editor Configuration <content-type-editor-config>`
    * - Configurations (``config/studio/administration/config-list.xml``)
      - Configure this list of configuration files
      - - :ref:`Configuring the Configuration List <project-config-configuration>`
    * - Dependency Resolver Configuration (``config/studio/dependency/resolver-config.xml``)
      - Configures the dependency resolver
      - - :ref:`dependency-resolver-config`
    * - AWS Profiles (``config/studio/aws/aws.xml``)
      - Configures the project's AWS profiles
      - - :ref:`aws-profile-configuration`
    * - Box Profiles (``config/studio/box/box.xml``)
      - Configures the project's Box profiles
      - - :ref:`box-profile-configuration`
    * - WebDAV Profiles (``config/studio/webdav/webdav.xml``)
      - Configures the project's WebDAV profiles
      - - :ref:`webdav-profiles-configuration`
    * - Asset Processing Configuration (``config/studio/asset-processing/asset-processing-config.xml``)
      - Configures the project's asset processing
      - - :ref:`How to configure asset processing <asset-processing>`
        - :ref:`asset-processing-config`
    * - Blob Stores (``config/studio/blob-stores-config.xml``)
      - Configures the project's blob stores
      - - :ref:`Managing assets in external storage via blob stores <blob-stores>`
    * - Project Policy Configuration (``config/studio/site-policy-config.xml``)
      - Configures the project policy
      - - :ref:`project-policy-configuration`
    * - User Interface Configuration (``config/studio/ui.xml``)
      - Configures the user interface
      - - :ref:`user-interface-configuration`
    * - Proxy Config (``config/engine/proxy-config.xml``)
      - Configures the proxy servers for preview
      - - :ref:`using-the-proxy-configuration`

.. TODO for later
   * - Translation Configuration (``config/studio/translation-config.xml``)
   - Configures the translation service
   - :ref:`translation-configuration`

Crafter Studio supports creating multiple environments with different configuration files for each environment. To setup an environment follow the guide :ref:`multi-environment-support`.

CrafterCMS supports managing assets in external storage through workflow and publishing mechanics. For more information, see :ref:`blob-stores`.

|hr|

^^^^^^^^
Security
^^^^^^^^
There are various ways for securing access to your CrafterCMS project content in an authoring environment.

""""""""""""
Role Mapping
""""""""""""
A role represents a set of activities allowed. Role mapping allows users to only see items that they have been granted access to based on the permissions granted to the role they have been assigned to.

See :ref:`project-role-mappings` for more information.

""""""""""""""""""
Permission Mapping
""""""""""""""""""
Permission mapping allows you to assign permissions to folders and objects in a project/site giving specific roles rights to the object.

See :ref:`permission-mappings` for more information.

"""""""""""""""""""""""
Authentication with JWT
"""""""""""""""""""""""
JWT authentication allows access to Studio APIs.

See :ref:`JWT Authentication<access-tokens>` for more information on creating and using a token.

""""""""""""""""""""""""""""""""""""
Additional Authentication Mechanisms
""""""""""""""""""""""""""""""""""""
There are other ways for configuring security for your authoring install such as authenticating via headers, SAML, etc.

See :ref:`configuring-studio-security` for more information.

|hr|

^^
UI
^^
"""""""
Sidebar
"""""""
The Sidebar is the panel on the left side of Studio that contains path navigator trees and various tools.
See :ref:`here <project-sidebar>` for a description and :ref:`here<sidebar-widget>` for more
information on configuring the sidebar.

"""""""""""
Top Toolbar
"""""""""""
The toolbar is located at the top of the page and provides contextual workflow and other options
relative to the page being previewed, content that have been selected or tool being used.

See :ref:`here <toolbar>` for a description and :ref:`here <user-interface-configuration>` for
more information on configuring the toolbar.

""""""""""
Dashboards
""""""""""
The dashboards show an overview of the workflow in the project.
See :ref:`here <project-dashboard>` for a description and :ref:`here <user-interface-configuration>`
for more information on configuring the dashboard.

""""""""""""
Localization
""""""""""""

Localization is the process of adapting the application/software to a specific culture of end users, such as units of
measurements, language, etc., to make the application look and feel natural to the end users.

.. _studio-project-time-zone:

~~~~~~~~~~~~~~~~~
Project Time Zone
~~~~~~~~~~~~~~~~~
The :ref:`default dates and times <server-time-zone>` used for displays in Studio is UTC. To
customize how dates & times get displayed on Studio UI for a project, edit the following in the project
configuration file, by clicking on |projectTools| from the *Sidebar*, then click on **Configuration**
and finally selecting **Project Configuration** from the list:

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

|hr|

^^^^^^^
Content
^^^^^^^
""""""""""""""""""""""""""""""""
Large Assets and External Stores
""""""""""""""""""""""""""""""""
Git is wonderful for managing and tracking textual content, but it's not ideal for storing binary files or large assets.
There are multiple options for storing these large assets using either Studio's blob stores or various other
external stores

~~~~~~~~~~
Blob Store
~~~~~~~~~~
The blob store is a Git-like repository for binary files.
See :ref:`here <blob-stores-asset-access>` for more information

~~~~~~
AWS S3
~~~~~~
AWS S3 is a great option for very large externally managed artifacts.
See :ref:`here <use-s3-to-store-assets>` for more information

~~~
Box
~~~
Box is a good option when you need to store media and documents that are quite large.
See :ref:`here <box-asset-access>` for more information

~~~~~~
WebDAV
~~~~~~
Using WebDAV is another good option for collaborating on assets hosted on another server.
See :ref:`webdav-profiles-configuration` to learn how to configure WebDAV and review the developer documentation :ref:`webdav-asset-access` to learn how to access WebDAV assets.

"""""""""""""""""""""
Rich media processing
"""""""""""""""""""""
~~~~~~
Images
~~~~~~
CrafterCMS supports automatic image processing that allows you to upload just one image that gets converted to the
different sizes or formats required by your project for various display sizes.
See :ref:`here <asset-processing-config>` for more information

~~~~~~~~~~~~~~~~~~~
Video (transcoding)
~~~~~~~~~~~~~~~~~~~
Crafter Studio allows users to upload and transcode videos using AWS MediaConvert in order for users to be able
to show the video in different display sizes.
See :ref:`here <video-transcoding>` for more information

""""""""""""""""""""""
Rich Text Editor (RTE)
""""""""""""""""""""""
The RTE (Rich Text Editor) provides an in-context editing experience from within a form
(and through preview via the XB) that allows authors to arrange and style content without needing to know HTML
For more information on configuring the RTE, see :ref:`here <rte-config>`

""""""""""""
Localization
""""""""""""
As mentioned above, localization is the process of adapting the application/software to a specific culture of end users.

.. _targeting-guide:

"""""""""""""""""""""""
Content Targeting Guide
"""""""""""""""""""""""
Crafter Engine provides the ability to render content adapted to specific users, depending on different
aspects like geographical location, language, preferences, etc.
Content that is targeted to users is known in CrafterCMS as targeted content.

.. _language-based-localized-content:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Language-Based Localized Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The most common form of targeted content is language-based localization, which is enabled just by specifying
some configuration in the :ref:`Engine's Project Config <engine-project-configuration>`.

The Engine project configuration file can be accessed by clicking on |projectTools| from the *Sidebar*,
then click on **Configuration** and finally selecting **Engine Project Configuration** from the list:

.. code-block:: xml
   :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <site>
      <targeting>
        <enabled>true</enabled>
        <rootFolders>/site/website</rootFolders>
        <fallbackTargetId>en</fallbackTargetId>
        <mergeFolders>true</mergeFolders>
        <redirectToTargetedUrl>true</redirectToTargetedUrl>
      </targeting>
    </site>

By default, Crafter Engine thinks that targeted content is organized in folders, directly underneath
``rootFolders``. So following the configuration posted above:

#. Targeting is enabled through the property ``targeting.enabled``.
#. Each folder underneath ``/site/website`` (``targeting.rootFolders``) will hold the content for a different locale, like *en*, *es*, *fr*, *jp*, etc.
#. If for example, Engine will render /site/website/index.xml and the locale for the current user is *es_CR*, then Engine will try to resolve first to /site/website/es_CR/index.xml, /site/website/es/index.xml, and finally, since *en* is the ``targeting.fallbackTargetId``, ``/site/website/en/index.xml``. If there was no ``targeting.fallbackTargetId``, then the last candidate page for rendering would be /site/website/index.xml.
#. The ``targeting.mergeFolders`` property will make Engine create merged content trees, which is useful for navigation. For example, assume that for the top navigation of a page the first level of pages under ``/site/website/{locale}`` will be displayed, and the locale for the current user again is *es_CR*. Under *es_CR* just the "Contact Us" page exists, but under *en* there are more: "Products", "About Us" and "Contact Us". By setting ``mergeFolders`` as true, the final pages that are displayed in the navigation would be ``/site/website/en/products``, ``/site/website/en/about-us`` and ``/site/website/es_CR/contact-us``.
#. Normally, if a user goes to ``my-editorial.com/contact-us``, and the current locale is *es_CR*, then page to be rendered would be resolved to ``/site/website/es_CR/contact-us``, but the browser navigation bar would still show ``my-editorial.com/contact-us``. If ``targeting.redirectToTargetedUrl`` is set to true, then instead the user is redirected first to ``my-editoriaal.com/es_CR/contact-us``.

It's important to point out that if a page exists several times under the same "family" of locales, like *en* (fallback), *es* and *es_CR*, and the merge strategy for the page is ``targetedContent``, the content is inherited following the path of the most general locale to the most specific one, so ``/site/website/es_CR/contact-us``, would inherit and overwrite the content of ``/site/website/es/contact-us`` and ``/site/website/en/contact-us``.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Configuration for Custom Targeted Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
As stated before, the most popular case for targeted content is language-based localization, but it isn't the
only one. Sometimes you need to target content according to the user's region, country, age, gender, etc. For
these cases, a little bit more of coding and configuration is needed:

#. Implement the ``org.craftercms.engine.targeting.TargetIdManager`` and put it under your project's
   Classes > groovy folder, with any folders that should be part of the Java package in-between
   (e.g. Classes > groovy > services > targeting > RegionAndCountryTargetIdManager):

   * ``getCurrentTargetId()`` should return the target ID for the current user, and if the current user doesn't
     have a target ID, the default one. E.g. Assume that we're targeting content by region and country. The
     ``getCurrentTargetId()`` should then return the *region_country* ID of the current user
     (*na*, *na_us*, *lan*, *lan_cr*, etc), and if the current user doesn't have associated a region/country,
     the default *na* is returned.
   * ``getFallbackTargetId()`` should return the target ID used as "last resort" when resolving the URL of the page
     to render to the user. Continuing with the *region_country* example, let's say the user requested for the
     ``/about`` page, his current target ID is *lan_cr*, and the fallback target ID is *na*. Engine will then look for
     the page in ``/site/website/lan_cr/about/index.xml``, ``/site/website/lan/about/index.xml`` and finally
     ``/site/website/na/about/index.xml``. If the fallback target ID was null, then instead of
     ``/site/website/lan_cr/about/index.xml``, Engine would look in ``/site/website/about/index.xml``.
   * ``getAvailableTargetIds()`` returns a list with all the supported target IDs. In case of the *region_country*
     solution, the list would contain all the possible region/country combinations, like
     *na*, *na_us*, *na_ca*, *lan*, *lan_cr*, etc.

#. Add the ``TargetIdManager`` implementation as a Spring bean in your project's application-context.xml (Config > spring >
   application-context.xml) with the name ``crafter.targetIdManager``:

   .. code-block:: xml

      <bean id="crafter.targetIdManager" class="services.targeting.RegionAndCountryTargetIdManager"/>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Targeted Content By File Prefix
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
By default, Engine expects targeted content to be organized by folders. The most common case is to have pages
under ``/site/website`` to be grouped under locale folders. So pages for *en* would be put under ``/site/website/en``,
pages for *es* under ``/site/website/es``, and so on.

But sometimes it's more useful to have content for different targets to be under the same location. And for those
cases, Engine can resolve targeted content by file prefix, like ``index_en.xml``, ``index_en_US.xml``, ``index_fr.xml``, etc.
To enable this, add the following bean to your project's ``application-context.xml``
(Config > spring > application-context.xml), which will override the targeted content by folder strategy:

.. code-block:: xml

    <bean id="crafter.targetedUrlStrategy"
      class="org.craftercms.engine.targeting.impl.TargetedUrlByFileStrategy"
      parent="crafter.targetedUrlStrategyBase"/>

|hr|

^^^^^^^
Preview
^^^^^^^
Preview allows users to see, edit and test the project in a safe authoring sandbox prior to publishing changes.

"""""""""""""""""""
Proxy Configuration
"""""""""""""""""""
CrafterCMS supports a proxy system to proxy GraphQL, Engine, NodeJS or other application delivery systems.
A proxy server, or proxy for short, is an application or system that acts as a middleman between requests
from clients for resources such as a file or web page for example, and the server that provides those resources.
Whenever a request is made by a client, the request gets sent to the proxy that then evaluates the request and
then performs the required transactions. Proxies forwards web requests, act as a firewall and web filter, provide
shared network connections, and cache data to speed up common requests. It helps to simplify/control the
complexity of the request, and can provide additional benefits such as load balancing, privacy or security.

See :ref:`here <using-the-proxy-configuration>` for an example of setting up the proxy for a React application

.. todo: should we just dump the article here or leave the article in a separate file somewhere?

|hr|

^^^^^^^^^^
Publishing
^^^^^^^^^^
The publishing tool available from the sidebar under |projectTools| allows the user to view the
publishing status, and various ways of publishing content.
See :ref:`here <publishing-and-status>` for more information

|hr|

^^^^^^^^^^^^^
Notifications
^^^^^^^^^^^^^
To configure HTML notifications that can be sent at each point in the workflow, see
:ref:`here <configure-notifications>`

|hr|

^^^^^^^
Staging
^^^^^^^
An intermediate publishing target, named ``staging``, is supported by CrafterCMS which allows testing of your project.
See :ref:`here <staging-env>` for more information on how to setup a staging target for your project.

|hr|

^^^^^^^^^^^^^^^^^^^^^^^^^
Multi-environment Support
^^^^^^^^^^^^^^^^^^^^^^^^^
It is often required to have different configurations for different environments. For example, you may want to have developers access different integration services, keys, and configuration than QA, UAT or Prod environments.

CrafterCMS supports environment specific configuration that helps with this, read more about it in the article :ref:`multi-environment-support`.

|

|hr|

--------
Delivery
--------
In this section, we discuss managing your project, security, etc. in a delivery environment.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
URL Rewrites and Vanity URLs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
URL rewriting turns hard to remember, long and complicated URLs into easier to remember, user-friendly and search
engine friendly URLs. Simple URL rewrite rules per project can be done through Crafter Engine.

CrafterCMS comes with the Tuckey URLRewrite filter, a Java Web Filter with functionality like Apache's mod_rewrite,
that lets you setup rewrite rules for your project.

To add a URL rewrite rule, in Studio, open the **Sidebar** then click on |projectTools|. Click on **Configuration** then select **Engine URL Rewrite Configuration (XML Style)**.

Here's an example URL rewrite rule for a project created using the Website Editorial blueprint where requests to
/articles/2020/12/top-books-for-young-women will be redirected to /articles/2021/1/men-styles-for-winter

.. code-block:: xml

   <?xml version="1.0" encoding="utf-8"?>
   <urlrewrite>
     <rule>
       <from>/articles/2020/12/top-books-for-young-women</from>
       <to type="redirect">/articles/2021/1/men-styles-for-winter</to>
     </rule>
   </urlrewrite>


After saving the configuration, remember to publish the configuration file just saved (``urlrewrite.xml`` file). To publish the configuration file, from the **Sidebar**, click on **Dashboard**. In the **My Recent Activity** dashlet, check the box next to the ``urlrewrite.xml`` file, and click **Publish** from the context nav to publish.

.. image:: /_static/images/site-admin/publish-urlrewrite.webp
    :alt: Configurations - Publish URL Rewrite Config File from Dashboard
    :width: 85 %
    :align: center

|

For more information on the UrlRewriteFilter, see http://tuckey.org/urlrewrite/

^^^^^^^^
Security
^^^^^^^^
There are various ways for securing access to restricted content in your CrafterCMS project in a delivery environment.
See :ref:`here <configuring-engine-security>` for more information.

|hr|

----------
Composable
----------
^^^^^^^^^^
Blueprints
^^^^^^^^^^
CrafterCMS supports the ability to extend the functionality of the platform through the use of plugins and blueprints. Projects can be created out of blueprints which can be built-in, pulled from the Marketplace, or custom built. Learn more about blueprints in the article :ref:`blueprints`.

^^^^^^^
Plugins
^^^^^^^
Plugins are extensions that can be installed into a project to add functionality. These can extend the functionality of Crafter Studio for added authoring capabilities, or extend the functionality of the project delivery itself by providing features to your project/site. Learn more about plugins in the article :ref:`plugins`.

-------------
Project Tools
-------------
|projectTools| contains project administration tools such as Configurations, Plugin Management, Encryption Tool, etc.
The following contains more information on administration tools

.. toctree::
   :maxdepth: 3

   /reference/project-tools/index