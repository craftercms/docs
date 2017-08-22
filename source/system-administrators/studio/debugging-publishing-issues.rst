.. _crafter-studio-debugging-publishing-issues:

===========================
Debugging Publishing Issues
===========================

------------------------
Inspect Publishing Queue
------------------------

To get publishing queue (items that are in the queue for publishing) execute following SQL query:

.. code-block:: sql

    SELECT * FROM publish_request
    WHERE site = 'a_site_id'
    ORDER BY scheduleddate

Additionally query can be filtered by item state and scheduled data to narrow down queue inspection.

Item states:

    * `READY_FOR_LIVE`  - item is scheduled and waiting in queue to be published
    * `PROCESSING`      - item is being published
    * `COMPLETED`       - item has been published
    * `CANCELED`        - item has been removed from queue (publishing was canceled)
    * `BLOCKED`         - item is blocking publishing queue

------------------------
Unblock Publishing Queue
------------------------

Publishing queue can be blocked or stuck in infinite loop by trying to publish same item over and over again. It usually happens when there is some error in publishing of some content.
To discover which item is blocking publishing, most common method is to inspect the queue and determine which item is first in the queue (state `READY_FOR_LIVE` together with all other items that are scheduled with same timestamp.
When it is determined where is publishing queue blocked/stuck (which content), it is needed to be determined reason by inspecting log files and repository. If it is possible to fix the reason why publishing queue got blocked/stuck, system should be allowed to continue normally.
If it is not possible to fix reason, it can be applied a workaround to unblock publishing. Workaround can be any valid intervention on database and repository to simulate publishing process.

------------------------------
Manual Syncing of Repositories
------------------------------

One of general workarounds to unblock publishing queue is manual syncing of repositories. Manual sync is executing `git pull` command on environment store repository

.. code-block:: shell

    git pull origin master

By executing this command all content is practically published. To avoid unnecessary operations and confusion within the system, database should be also updated by canceling whole remaining publishing queue and setting item states to `Live`

.. code-block:: sql

    UPDATE publish_request
    SET state = 'CANCELED'
    WHERE site = 'a_site_id'
    AND state = 'READY_FOR_LIVE';

.. code-block:: sql

    UPDATE item_state
    SET state = 'EXISTING_UNEDITED_UNLOCKED', system_processing = 0
    WHERE site = 'a_site_id';