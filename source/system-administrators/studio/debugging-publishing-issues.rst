.. _crafter-studio-debugging-publishing-issues:

===========================
Debugging Publishing Issues
===========================

------------------------
Inspect Publishing Queue
------------------------

To get the publishing queue (items that are in the queue for publishing), execute the following SQL query:

.. code-block:: sql

    SELECT * FROM publish_request
    WHERE site = 'a_site_id'
    ORDER BY scheduleddate

Additionally, a query can be filtered by item state and scheduled data to narrow down the queue for inspection.

Item states:

    * `READY_FOR_LIVE`  - item is scheduled and waiting in the queue to be published
    * `PROCESSING`      - item is being published
    * `COMPLETED`       - item has been published
    * `CANCELED`        - item has been removed from the queue (publishing was canceled)
    * `BLOCKED`         - item is blocking the publishing queue

------------------------
Unblock Publishing Queue
------------------------

The publishing queue can be blocked or stuck in an infinite loop by trying to publish the same item over and over again. It usually happens when there is some error in publishing some content.
To discover which item is blocking publishing, the most common method is to inspect the queue and determine which item is first in the queue (state ``READY_FOR_LIVE``), together with all the other items that are scheduled with the same timestamp.
Once you determine where the publishing queue is blocked/stuck, you can determine the reason by inspecting the log files and the repository.  If it is possible to fix the publishing queue blockage, the system should be allowed to continue normally.
If it is not possible to fix the publishing queue blockage, a workaround can be applied to unblock publishing. The workaround can be any valid intervention on the database and the repository to simulate the publishing process.

------------------------------
Manual Syncing of Repositories
------------------------------

One of the general workaround to unblock the publishing queue is by manual syncing of repositories. Manual syncing is done by executing a ``git pull`` command on the environment store repository

.. code-block:: shell

    git pull origin master

By executing this command, all content is practically published. To avoid unnecessary operations and confusion within the system, the database should also be updated by canceling everything remaining in the publishing queue and setting item states to ``Live``

.. code-block:: sql
    :caption: **Cancel everything in the publishing queue:**

    UPDATE publish_request
    SET state = 'CANCELED'
    WHERE site = 'a_site_id'
    AND state = 'READY_FOR_LIVE';

.. code-block:: sql
    :caption: **Set item states to "Live":**

    UPDATE item_state
    SET state = 'EXISTING_UNEDITED_UNLOCKED', system_processing = 0
    WHERE site = 'a_site_id';