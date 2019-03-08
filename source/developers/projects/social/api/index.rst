.. index:: API; Crafter Social

.. _crafter-social-api:

==================
Crafter Social API
==================

The context for this API is ``/crafter-social/``, please prefix the API URLs with this context.

.. NOTE::
  All request in this API require the user to be authenticated using the Crafter Profile API, for
  details see :ref:`crafter-profile-api-authentication-authenticate`

----------------
Security Actions
----------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/system/actions/get.rst
  v3/system/actions/post.rst

---------------
Social Contexts
---------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/system/context/get-all.rst
  v3/system/context/create.rst 
  v3/system/context/add-profile.rst
  v3/system/context/remove-profile.rst
  v3/system/context/preferences-email-config-update.rst
  v3/system/context/preferences-email-config-get.rst
  v3/system/context/preferences-email-template-update.rst
  v3/system/context/preferences-email-template-get.rst
  v3/system/context/preferences-get.rst
  v3/system/context/preferences-update.rst
  v3/system/context/preferences-delete.rst

-------------
Profile Cache
-------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/system/profile/clear.rst

----------------------
User Generated Content
----------------------

^^^^^^^^
Comments
^^^^^^^^

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/ugc/comments/create.rst
  v3/ugc/comments/update.rst
  v3/ugc/comments/delete.rst
  v3/ugc/comments/get.rst
  v3/ugc/comments/search.rst
  v3/ugc/comments/update-attributes.rst
  v3/ugc/comments/delete-attributes.rst
  v3/ugc/comments/update-flags.rst
  v3/ugc/comments/delete-flag.rst
  v3/ugc/comments/get-flags.rst
  v3/ugc/comments/moderate.rst
  v3/ugc/comments/get-by-moderation-status.rst
  v3/ugc/comments/count-by-moderation-status.rst
  v3/ugc/comments/get-flagged.rst
  v3/ugc/comments/count-flagged.rst

^^^^^^^^^^^
Attachments
^^^^^^^^^^^

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/ugc/attachments/get.rst
  v3/ugc/attachments/get-content.rst
  v3/ugc/attachments/create.rst
  v3/ugc/attachments/delete.rst
  v3/ugc/attachments/update.rst

^^^^^
Votes
^^^^^

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/ugc/votes/vote-up.rst
  v3/ugc/votes/vote-down.rst
  v3/ugc/votes/vote-neutral.rst

^^^^^^^
Threads
^^^^^^^

.. toctree::
  :maxdepth: 1
  :titlesonly:

  v3/ugc/threads/get-comments.rst
  v3/ugc/threads/get-comment-children.rst
  v3/ugc/threads/subscribe.rst
  v3/ugc/threads/subscribe-update.rst
  v3/ugc/threads/unsubscribe.rst
  
----------
Monitoring
----------

.. toctree::
  :maxdepth: 1

  v3/monitoring/memory
  v3/monitoring/status
  v3/monitoring/version