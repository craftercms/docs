==============
Templating API
==============

Each page and component content type in Crafter CMS has generally it's own view. Crafter Engine, which is in charge
of rendering this views, uses Freemarker as the template engine to generate the HTML returned to the client.
Documentation for Freemarker can be found at http://freemarker.org.

The most important variable available in the page and component Freemarker templates is the ``contentModel``. Through
the ``contentModel`` you have access to the content itself. So if in the page you defined a variable name ``title``,
you can get the value of title with ``${contentModel.title}``. Or if you defined a repeater named ``links``, and under
it ``url`` fields, then accessing the url links is just a matter of iterating the list using
``<#list contentModel.links.url as url>``. The type of the ``contentModel`` is `SiteItem <http://downloads.craftersoftware
.com/javadoc/engine/org/craftercms/engine/model/SiteItem.html>`_, so you can also call the methods of that class if
the nested property access described previously is not enough, or if you need to access other properties like the
``storeUrl``.

Crafter Engine also populates templates with other useful variables, described below.

.. include:: ../includes/freemarker-variables.rst

--------------------
Rendering navigation
--------------------

Crafter Engine provides the option of rendering automatically the navigation for you, just by using the  macro
``renderNavigation``:

.. code-block:: html

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

.. code-block:: html

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
