:is-up-to-date: True
:last-updated: 4.0.3

.. _api-version1:

----------------------------
Crafter Studio API Version 1
----------------------------
^^^^^^^^^^^^^^^
Site Management
^^^^^^^^^^^^^^^
.. toctree::
   :maxdepth: 1

   site/create-site
   site/delete-site
   site/exists
   site/get-canned-message
   site/get-site
   site/get-sites-per-user
   site/monitor-content

.. note::
   Some site management operations are now deprecated. These operations are now available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`


^^^^^^^^^^^^^^^
Repo Management
^^^^^^^^^^^^^^^
.. toctree::
   :maxdepth: 1

   repo/sync-from-repo

.. note::
  Some of the repo management operations listed above are now deprecated. These operations are now available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`

^^^^^
Audit
^^^^^
.. note::
  Audit operations are only available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`

^^^^^^^^^^
Monitoring
^^^^^^^^^^
.. note::
  Monitoring operations are only available in the new API, for more information, please visit
  :base_url:`here <_static/api/studio.html>`

^^^^^^^
Publish
^^^^^^^
.. toctree::
   :maxdepth: 1

   publish/commits
   publish/start
   publish/stop
   publish/reset-staging

^^^^^^^^^^
Dependency
^^^^^^^^^^
.. toctree::
   :maxdepth: 1

   dependency/get-dependant
   dependency/get-simple-dependencies
   dependency/calculate-dependencies

^^^^^^^^^^
Deployment
^^^^^^^^^^
.. toctree::
   :maxdepth: 1

   deployment/bulk-golive

^^^^^^^
Preview
^^^^^^^
.. toctree::
   :maxdepth: 1

   preview/sync-site

^^^^^^^^^^^^^^^
Content / Asset
^^^^^^^^^^^^^^^

.. toctree::
   :maxdepth: 1

   content/change-content-type
   content/content-exists
   content/create-folder
   content/crop-image
   content/rename-folder
   content/get-content
   content/get-content-at-path
   content/get-content-type
   content/get-content-types
   content/get-item
   content/get-item-orders
   content/get-item-versions
   content/get-items-tree
   content/get-next-item-order
   content/get-pages
   content/reorder-items
   content/revert-content
   content/write-content

^^^^^^
Server
^^^^^^
.. toctree::
   :maxdepth: 1

   server/get-available-languages

^^^
AWS
^^^
.. toctree::
   :maxdepth: 1

   aws/elastictranscoder/post-transcode

.. note::
    Some of the AWS operations are now deprecated. These operations are now available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`
