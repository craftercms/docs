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

   site/clear-configuration-cache
   site/create-site
   site/delete-site
   site/exists
   site/get-available-blueprints
   site/get-canned-message
   site/get-configuration
   site/get-site
   site/get-sites-per-user
   site/monitor-content
   site/write-configuration

.. note::
   Some of the site management operations listed above are now deprecated.  These operations are now available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`.


^^^^^^^^^^^^^^^
Repo Management
^^^^^^^^^^^^^^^

.. toctree::
   :maxdepth: 1

   repo/sync-from-repo

.. note::
  Some of the repo management operations listed above are now deprecated.  These operations are now available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`.

^^^^^
Audit
^^^^^

.. note::
  Audit operations are only available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`.


^^^^^^^^
Security
^^^^^^^^

.. toctree::
   :maxdepth: 1

   security/get-user-permissions
   security/get-user-roles


^^^^^^^^^^
Monitoring
^^^^^^^^^^

.. note::
  Monitoring operations are only available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`.

^^^^^^^
Publish
^^^^^^^

.. toctree::
   :maxdepth: 1

   publish/commits
   publish/status
   publish/start
   publish/stop
   publish/publish-items
   publish/reset-staging

^^^^^^^^
Activity
^^^^^^^^

.. toctree::
   :maxdepth: 1

   activity/get-user-activity
   activity/post-activity

^^^^^^^^^
Clipboard
^^^^^^^^^

.. toctree::
   :maxdepth: 1

   clipboard/copy-item
   clipboard/cut-item
   clipboard/get-items
   clipboard/paste-item

^^^^^^^^^^
Dependency
^^^^^^^^^^
.. toctree::
   :maxdepth: 1

   dependency/get-dependant
   dependency/get-dependencies
   dependency/get-simple-dependencies
   dependency/calculate-dependencies

^^^^^^^^^^
Deployment
^^^^^^^^^^
.. toctree::
   :maxdepth: 1

   deployment/bulk-golive
   deployment/get-scheduled-items

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
   content/search
   content/unlock-content
   content/write-content

^^^^^^
Server
^^^^^^
.. toctree::
   :maxdepth: 1

   server/get-available-languages
   server/get-loggers
   server/get-ui-resource-override
   server/set-logger-state

^^^^^^^^
Workflow
^^^^^^^^
.. toctree::
   :maxdepth: 1

   workflow/create-jobs
   workflow/get-go-live-items
   workflow/get-workflow-affected-paths
   workflow/go-delete
   workflow/go-live
   workflow/reject
   workflow/submit-to-go-live

^^^
AWS
^^^
.. toctree::
   :maxdepth: 1

   aws/elastictranscoder/post-transcode
   aws/mediaconvert/post-upload
   aws/s3/post-upload

.. note::
    Some of the AWS operations listed above are now deprecated.  These operations are now available in the new API, for more information, please visit :base_url:`here <_static/api/studio.html>`
