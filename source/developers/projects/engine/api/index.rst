:is-up-to-date: True

.. index:: API; Crafter Engine

.. _crafter-engine-api:

==================
Crafter Engine API
==================

.. note::
    When simple multi-tenancy has been configured for Crafter Engine, or when working in ``Preview`` mode, make sure that the request includes the ``crafterSite`` parameter to set a site value.  Crafter Engine API's are site specific, and so, it needs to know the site when multi-tenancy or preview mode has been configured for each request made.

    Here's an example to get an Item from the content store:

    .. code-block:: text

        http://localhost:8080/api/1/site/content_store/item.json?url=/site/website/index.xml&crafterSite=mysite

    |

    For more information on configuring multi-tenancy in Crafter Engine, see :ref:`engine-site-configuration-multi-tenancy`

------------
Site Context
------------

.. toctree::
	:maxdepth: 1

	site/context/id
	site/context/status
	site/context/destroy
	site/context/rebuild
	site/context/graphql/rebuild

-------------------
Site Scheduled Jobs
-------------------

.. toctree::
	:maxdepth: 1

	site/jobs/list

-------------
Site Mappings
-------------

.. toctree::
	:maxdepth: 1

	site/mappings/reload

----------
Site Cache
----------

.. toctree::
	:maxdepth: 1

	site/cache/clear
	site/cache/statistics
	
------------------
Site Content Store
------------------

.. toctree::
	:maxdepth: 1

	site/content_store/descriptor
	site/content_store/item
	site/content_store/children
	site/content_store/tree

------------
Site Profile
------------

.. toctree::
	:maxdepth: 1

	site/profile/get
	site/profile/set

---------------
Site Navigation
---------------

.. toctree::
	:maxdepth: 1

	site/navigation/breadcrumb
	site/navigation/tree

------------------
URL Transformation
------------------

.. toctree::
	:maxdepth: 1

	site/url/transform

-------------
Elasticsearch
-------------

.. toctree::
	:maxdepth: 1
	
	site/elasticsearch/search

-------
GraphQL
-------

.. toctree::
	:maxdepth: 1
	
	site/graphql/get
	site/graphql/post

-------------
Configuration
-------------

.. toctree::
	:maxdepth: 1
	
	config/preview

----------
Monitoring
----------

.. toctree::
	:maxdepth: 1

	monitoring/memory
	monitoring/status
	monitoring/version
	monitoring/log

------------------
Crafter-Controller
------------------

.. toctree::
	:maxdepth: 1

	crafter-controller/component

