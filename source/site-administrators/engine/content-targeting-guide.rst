:is-up-to-date: True

.. index:: Engine Content Targeting Guide

.. _targeting-guide:

=======================
Content Targeting Guide
=======================

Crafter Engine provides the ability to render content adapted to specific users, depending on different aspects like geographical location,
language, preferences, etc. Content that is targeted to users is known in Crafter CMS as targeted content.

--------------------------------
Language-Based Localized Content
--------------------------------

The most common form of targeted content is language-based localization, which is enabled just by specifying some configuration in the
Engine's Site Config (see :ref:`engine-site-configuration`):

.. code-block:: xml

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

By default, Crafter Engine thinks that targeted content is organized in folders, directly underneath ``rootFolders``. So following the
configuration posted above:

#.  Targeting is enabled through the property ``targeting.enabled``.
#.  Each folder underneath /site/website (``targeting.rootFolders``) will hold the content for a different locale, like *en*, *es*, *fr*,
    *jp*, etc.
#.  If for example, Engine will render /site/website/index.xml and the locale for the current user is *es_CR*, then Engine will try to
    resolve first to /site/website/es_CR/index.xml, /site/website/es/index.xml, and finally, since *en* is the
    ``targeting.fallbackTargetId``, /site/website/en/index.xml. If there was no ``targeting.fallbackTargetId``, then the last candidate page
    for rendering would be /site/website/index.xml.
#.  The ``targeting.mergeFolders`` property will make Engine create merged content trees, which is useful for navigation. For example,
    assume that for the top navigation of a page the first level of pages under /site/website/{locale} will be displayed, and the locale
    for the current user again is *es_CR*. Under *es_CR* just the "Contact Us" page exists, but under *en* there are more: "Products",
    "About Us" and "Contact Us". By setting ``mergeFolders`` as true, the final pages that are displayed in the navigation would be
    /site/website/en/products, /site/website/en/about-us and /site/website/es_CR/contact-us.
#.  Normally, if a user goes to mysite.com/contact-us, and the current locale is *es_CR*, then page to be rendered would be resolved to
    /site/website/es_CR/contact-us, but the browser navigation bar would still show mysite.com/contact-us. If
    ``targeting.redirectToTargetedUrl`` is set to true, then instead the user is redirected first to mysite.com/es_CR/contact-us.

It's important to point out that if a page exists several times under the same "family" of locales, like *en* (fallback), *es* and *es_CR*,
and the merge strategy for the page is ``targetedContent``, the content is inherited following the path of the most general locale to the
most specific one, so /site/website/es_CR/contact-us, would inherit and overwrite the content of /site/website/es/contact-us and
/site/website/en/contact-us.

-----------------------------------------
Configuration for Custom Targeted Content
-----------------------------------------

As stated before, the most popular case for targeted content is language-based localization, but it isn't the only one. Sometimes you need
to target content according to the user's region, country, age, gender, etc. For these cases, a little bit more of coding and configuration
is needed:

#.  Implement the ``org.craftercms.engine.targeting.TargetIdManager`` and put it under your site's Classes > groovy folder, with any
    folders that should be part of the Java package in-between (e.g. Classes > groovy > services > targeting >
    RegionAndCountryTargetIdManager):

    *   ``getCurrentTargetId()`` should return the target ID for the current user, and if the current user doesn't have a target ID,
        the default one. E.g. Assume that we're targeting content by region and country. The ``getCurrentTargetId()`` should then
        return the *region_country* ID of the current user (*na*, *na_us*, *lan*, *lan_cr*, etc), and if the current user doesn't
        have associated a region/country, the default *na* is returned.
    *   ``getFallbackTargetId()`` should return the target ID used as "last resort" when resolving the URL of the page to render to the
        user. Continuing with the *region_country* example, let's say the user requested for the /about page, his current target ID is
        *lan_cr*, and the fallback target ID is *na*. Engine will then look for the page in /site/website/lan_cr/about/index.xml,
        /site/website/lan/about/index.xml and finally /site/website/na/about/index.xml. If the fallback target ID was null, then instead
        of /site/website/lan_cr/about/index.xml, Engine would look in /site/website/about/index.xml.
    *   ``getAvailableTargetIds()`` returns a list with all the supported target IDs. In case of the *region_country* solution,
        the list would contain all the possible region/country combinations, like *na*, *na_us*, *na_ca*, *lan*, *lan_cr*, etc.

#.  Add the ``TargetIdManager`` implementation as a Spring bean in your site's application-context.xml (Config > spring >
    application-context.xml) with the name ``crafter.targetIdManager``:

    .. code-block:: xml

        <bean id="crafter.targetIdManager" class="services.targeting.RegionAndCountryTargetIdManager"/>

-------------------------------
Targeted Content By File Prefix
-------------------------------

By default, Engine expects targeted content to be organized by folders. The most common case is to have pages under /site/website to
be grouped under locale folders. So pages for *en* would be put under /site/website/en, pages for *es* under /site/website/es, and so on.

But sometimes it's more useful to have content for different targets to be under the same location. And for those cases, Engine can
resolve targeted content by file prefix, like index_en.xml, index_en_US.xml, index_fr.xml, etc. To enable this, add the following bean
to your site's application-context.xml (Config > spring > application-context.xml), which will override the targeted content by folder
strategy:

.. code-block:: xml

    <bean id="crafter.targetedUrlStrategy"
          class="org.craftercms.engine.targeting.impl.TargetedUrlByFileStrategy"
          parent="crafter.targetedUrlStrategyBase"/>
