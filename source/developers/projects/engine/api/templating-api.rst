.. _templating-api:

===========================
FreeMarker (Templating) API
===========================

Each page and component content type in Crafter CMS generally has it's own view. Crafter Engine, which is in charge
of rendering this views, uses Freemarker as the template engine to generate the HTML returned to the client.
Documentation for Freemarker can be found at http://freemarker.org.

The most important variable available in the page and component Freemarker templates is the ``contentModel``. Through
the ``contentModel`` you have access to the content itself. So if in the page you defined a variable name ``title``,
you can get the value of title with ``${contentModel.title}``. Or if you defined a repeater named ``links``, and under
it ``url`` fields, then accessing the url links is just a matter of iterating the list using
``<#list contentModel.links.url as url>``. The type of the ``contentModel`` is :javadoc_base_url:`SiteItem <engine/org/craftercms/engine/model/SiteItem.html>`, so you can also call the methods of that class if
the nested property access described previously is not enough, or if you need to access other properties like the
``storeUrl``.

Crafter Engine also populates templates with other useful variables, described below.

.. include:: /includes/freemarker-variables.rst

.. _templating-rendering-navigation:

--------------------
Rendering navigation
--------------------

Crafter Engine provides the option of rendering automatically the navigation for you, just by using the  macro
``renderNavigation``:

.. code-block:: guess

	<#include "/templates/web/navigation/navigation.ftl">

	<@renderNavigation "/site/website", 1 />

The first argument of the macro is the root path of the navigation tree, which in this case is the root path of all
pages. The second argument is the level of the navigation tree, which in the case of the example, is only the pages
of the first level. The Place In Nav field is also used by the ``renderNavigation`` macro to determine if a page
should be included in the navigation or not.

The ``renderNavigation`` macro uses other macros to render the navigation items. Each type of navigation item has
it's own macro:

*   ``renderNavItem``: for items with no sub-items.
*   ``renderNavItemWithSubItems``: for items with sub-items.
*   ``renderNavSubItem``: for sub-items with no other sub-items.
*   ``renderNavSubItemWithSubItems``: for sub-items with other sub-items.

These macros are included in Engine, under templates/web/navigation/main/nav-macros.ftl. If you want to provide your own
sets of macros (which you'll probably want since the navigation HTML is generally specific to the site), you just
need to overwrite the file by placing it under the same path in you project (templates/web/navigation/main/nav-macros
.ftl). The following is the default markup of the macros:

.. code-block:: guess
    :linenos:

	<#macro renderNavItem item active = false>
	<li <#if active>class="active"</#if>><a href="${navFunctions.getNavItemUrl(item)}">${navFunctions.getNavItemName(item)}</a></li>
	</#macro>

	<#macro renderNavItemWithSubItems item active = false>
	<li <#if active>class="dropdown active"<#else>class="dropdown"</#if>>
	    <a class="dropdown-toggle" data-toggle="dropdown" href="${navFunctions.getNavItemUrl(item)}">${navFunctions.getNavItemName(item)}</a>
	    <ul class="dropdown-menu">
	        <#nested>
	    </ul>
	</li>
	</#macro>

	<#macro renderNavSubItem item active = false>
	<li <#if active>class="active"</#if>><a href="${navFunctions.getNavItemUrl(item)}">${navFunctions.getNavItemName(item)}</a></li>
	</#macro>

	<#macro renderNavSubItemWithSubItems item active = false>
	<li class="dropdown-submenu">
	    <a href="${navFunctions.getNavItemUrl(item)}">${navFunctions.getNavItemName(item)}</a>
	    <ul class="dropdown-menu">
	        <#nested>
	    </ul>
	</li>
	</#macro>

------------------------
Keeping Templates Simple
------------------------

You can access all Crafter Engine services directly from the Freemarker templates as described in 
the previous sections, however it is a good practice to keep logic and complex operations outside
of the templates to simplify debugging and maintenance. An easy way to extract logic from the
templates is using Groovy's closures:

.. code-block:: groovy
  :caption: Page or Component Script
  :linenos:

  // Add a closure to the templateModel map, in this case it will find if a page has a custom
  // nav icon defined in the xml descriptor.
  
  templateModel.getNavIcon = { item ->
    def storeUrl = urlTransformationService.transform("renderUrlToStoreUrl", item.url)
    def siteItem = siteItemService.getSiteItem(storeUrl)
    if(siteItem) {
      def navIcon = siteItem.navIcon?.text
      if(navIcon) {
        return navIcon
      }
    }
    return "fa-file-o"
  }

.. code-block:: html
  :caption: Page or Component Template
  :linenos:

  <!-- Now the closure is available to use in the template, you only have to use the same name
       from the script and use the `call` method. -->
       
  <i class="fa ${getNavIcon.call(navItem)}">

If you have a large amount of closures or operations that need to be shared between multiple 
templates then you should consider creating a Groovy class instead:

.. code-block:: groovy
  :caption: Custom Service Class
  :linenos:

  // Define a class with all the logic
  
  package org.site.service
  
  class NavIconService {
  
    def urlTransformationService
    def siteItemService
    def defaultIcon
  
    def getNavItem(item) {
      ...
      return this.defaultIcon
    }
  
  }

.. code-block:: xml
  :caption: Site Application Context file
  :linenos:

  <!-- Add a bean definition using the new class -->
  
  <bean id="navIconService" class="org.site.service.NavIconService">
    <property name="urlTransformationService" ref="crafter.urlTransformationService"/>
    <property name="siteItemService" ref="crafter.siteItemService"/>
    <property name="defaultIcon" value="${nav.defaultIcon}"/>
  </bean>

.. code-block:: xml
  :caption: Site Configuration file
  :linenos:

  <!-- If needed the bean can use external configuration for easy management -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  <site>
    ...
    <nav>
      <defaultIcon>fa-file-o</defaultIcon>
    </nav>
    ...
  </site>

.. code-block:: html
  :caption: Template
  :linenos:
  
  <!-- Now the bean can be use just like Crafter built-in services -->
  
  <i class="fa ${navIconService.getNavIcon(navItem)}">

.. note::

  All beans defined in the :ref:`Engine Site Application Context <engine-site-configuration-spring-configuration>`
  file will be available in templates.