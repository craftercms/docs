:is-up-to-date: True

.. index:: API; Crafter Search

.. _crafter-search-api:

==================
Crafter Search API
==================

The context for this API is ``/crafter-search/``, please prefix the API URLs with this context.

.. warning::
	The Index Management and Content Management APIs are secured using an access token that needs to be provided as a
	query string parameter with name ``token``. The value of the token should be changed for every environment or set
	to empty to allow anonymous access for any request. For more details see :ref:`securing-your-crafter-cms-install`

|


----------------
Index Management
----------------

.. toctree::
	:maxdepth: 1

	index-management/create-index
	index-management/index-info
	index-management/delete-index

------------------
Content Management
------------------

.. toctree::
  :maxdepth: 1

  search/v2/search
  search/v2/update
  search/v2/update-content
  search/v2/commit
  search/v2/delete

----------
Monitoring
----------

.. toctree::
  :maxdepth: 1

  monitoring/memory
  monitoring/status
  monitoring/version


.. include:: /includes/crafter-search-solr-note.rst
