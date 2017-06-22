===========================
Debugging Publishing Issues
===========================

--------------------------------
Overview of Deployment Mechanics
--------------------------------

.. include:: /includes/how-deployment-works.rst

---------------------------------
Places Deployment Can Get Hung Up
---------------------------------
* Content can not be copied to the environment queue
* Content cannot be pushed to the deployment target

-----------------------------------------------------------
Determine What is Waiting to be Copied to Environment Store
-----------------------------------------------------------
In the database, execute following query

.. code-block:: sql

    SELECT * FROM cstudio_copytoenvironment WHERE state = 'READY_FOR_LIVE' ORDER BY scheduleddate ASC

The result of this query will contain all objects that are waiting to be copied to environment, including objects that are scheduled for some time in the future. To exclude objects that are scheduled for time in the future, use query that qualifies current time:

.. code-block:: sql

    SELECT * FROM cstudio_copytoenvironment WHERE state = 'READY_FOR_LIVE' AND scheduleddate < NOW() ORDER BY scheduleddate ASC

Because Studio is multi-tenant result can be further filtered by site and environment:

.. code-block:: sql

    SELECT * FROM cstudio_copytoenvironment WHERE state = 'READY_FOR_LIVE' AND site = 'mysiteid' AND environment = 'myenvironment' AND scheduleddate < NOW() ORDER BY scheduleddate ASC

If there is issue with environment queue query will return non-empty result set (excluding scheduled objects for some future time).
At this point it is important to verify if environment queue job is still working. To verify if job is still active it is needed to turn on debug level of logging for following class ``org.craftercms.studio.impl.v1.service.deployment.job.DeployContentToEnvironmentStore``. If there is periodic activity in logs coming from this class. job is still active.
If job is not active, Studio needs to be restarted.
If job is still active, and deployment queue is not advancing there are two possibilities:

1. Environment queue is stuck
In the database, execute following query

.. code-block:: sql

    SELECT * FROM cstudio_copytoenvironment WHERE state = 'PROCESSING' AND site = 'mysiteid' AND environment = 'myenvironment' ORDER BY scheduleddate ASC

The result gives a list of files that potentially are causing issue when processing environment queue.
To unstuck queue and continue processing environment queue at same point where it got stuck (retry deploying content that is failing) execute following query

.. code-block:: sql

    UPDATE cstudio_copytoenvironment SET state = 'READY_FOR_LIVE' WHERE state = 'PROCESSING' AND site = 'mysiteid' AND environment = 'myenvironment'

To unstuck queue cancel deploying content that caused issues execute following query

.. code-block:: sql

    UPDATE cstudio_copytoenvironment SET state = 'CANCELED' WHERE state = 'PROCESSING' AND site = 'mysiteid' AND environment = 'myenvironment'

2. Environment queue is looping same content caused by error.
Review log files to look for errors that cause environment queue to loop over same content. If not able to fix error it might be needed to cancel deployment for content that is causing errors

.. code-block:: sql

    UPDATE cstudio_copytoenvironment SET state = 'CANCELED' WHERE id = <queue id>

Queue id can be obtained from one of following queries

.. code-block:: sql

    SELECT * FROM cstudio_copytoenvironment WHERE state = 'READY_FOR_LIVE' AND site = 'mysiteid' AND environment = 'myenvironment' AND scheduleddate < NOW() ORDER BY scheduleddate ASC
    SELECT * FROM cstudio_copytoenvironment WHERE state = 'PROCESSING' AND site = 'mysiteid' AND environment = 'myenvironment' ORDER BY scheduleddate ASC

----------------------------------------
Determine What is Waiting for Deployment
----------------------------------------
1. On Deployment Agent Target you will find a file for the target outside your content folder called DEPVERSION.
Inside this file is a large number (a timestamp.)  Take note of this number for example: 1472839802228

2. In the database, execute the following query

.. code-block:: sql

	SELECT * FROM cstudio_publishtotarget where version > 1472839802228

3. The results of this query will contain all the objects that need to be deployed since that time.
Because Studio is multi-tenant you may want to further qualify the query with the site:

.. code-block:: sql

	SELECT * FROM cstudio_publishtotarget where site = 'mysiteid' and version > 1472839802228

and the environment you are publishing to:

.. code-block:: sql

	SELECT * FROM cstudio_publishtotarget where site = 'mysiteid' and environment ='production' and version > 1472839802228

----------------------------------------
Cancelling Work in the Deployment Queue
----------------------------------------

Work in the deployment queue is entirely time based.  This is because you could start up a new target at any time or turn on a target which has been turned off for a long period of time - in both cases these targets need to be updated.

If there is a deployment issue - some reason content wont deploy it's usually best to fix the issue and let deployment proceed.  That said there may be times when you want to cancel deployment to an environment.

Because of this, the way to cancel a deployment to a specific end point is to make sure that there are no records in the deployment queue that the target needs.  Options for achieving this include:

    * Modifying the DEPVERSION timestamp in the deployer to a later date or now to indicate it's fully up to date.
    * Changing the timestamp on the items in the queue to some previous time (usually something obvious like a some date time in 1978)
    * Deleting the records in the deployment queue.