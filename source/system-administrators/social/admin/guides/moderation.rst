
=================================
User Generated Content Moderation
=================================

In order to assure the quality of the content that users will be able to see in the site or
application, all user generated content should go through the moderation process. In this process
one or more moderators will be able to review the new content and take the appropriate decision if
it should be accepted or not.

You can start the moderation process by clicking the ``Moderation Dashboard`` link in the left
sidebar.

.. figure:: /_static/images/social-admin/moderation.png
  :align: center

When users submit new content, it will automatically be listed in this page. Remember to select
the right Social Context from the dropdown before making any changes.

------------------
Moderation Process
------------------

Content that goes through the moderation process will change according to a set of status and 
depending on the status of the content, the moderators will have different actions available.

^^^^^^^^^^^
Unmoderated
^^^^^^^^^^^

New content that no one has reviewed, items in this status will not be visible for the end users 
and is available for updates from the moderators in order to remove inappropriate content.

.. figure:: /_static/images/social-admin/moderation-unmoderated.png
  :align: center

Actions
 - Approve
 - Mark as Spam
 - Mark as Trash
 - Save Changes
 - Reset

^^^^^^^^
Approved
^^^^^^^^

Content that has already been reviewed and accepted, items in this status will be visible for the
end users but still can be updated or removed by the moderators.

.. figure:: /_static/images/social-admin/moderation-approved.png
  :align: center

Actions
 - Mark as Spam
 - Mark as Trash
 - Mark as Unmoderated
 - Save Changes
 - Reset

^^^^
Spam
^^^^

Content that has already been reviewed but was considered as irrelevant, items in this state can
be set as ``Unmoderated`` again.

.. figure:: /_static/images/social-admin/moderation-spam.png
 :align: center

Actions
 - Permanently delete
 - Mark as Unmoderated

^^^^^
Trash
^^^^^

Content that has already been reviewed but should be discarded, items in this state can not be
recovered and the only option available is to delete them from the database.

.. figure:: /_static/images/social-admin/moderation-trash.png
  :align: center

Actions
 - Permanently delete

