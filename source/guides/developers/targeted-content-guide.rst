======================
Targeted Content Guide
======================

Crafter Engine provides the ability to render content adapted to specific users, depending on different aspects like geographical location,
language, preferences, etc. Content that is targeted to users is known in Crafter as targeted content. The most common form of targeted
content is localized content. Localization for content in Crafter Engine is enabled just by specifying some configuration in the site.xml:

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

By default, Crafter Engine thinks that targeted content is organized in folders, directly underneath rootFolders. So following the
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
the content is inherited following the path of the most general locale to the most specific one, so /site/website/es_CR/contact-us,
would inherit and overwrite the content of /site/website/es/contact-us and /site/website/en/contact-us.
