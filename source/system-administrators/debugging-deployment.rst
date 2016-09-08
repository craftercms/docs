===========================
Debugging Deployment Issues
===========================

--------------------------------
Overview of Deployment Mechanics
--------------------------------

.. include:: /includes/how-deployment-works.rst

----------------------------------------
Places deployment Can Get Hung Up
----------------------------------------
* Content can not be copied to the environment queue
* Content cannot be pushed to the deployment target

----------------------------------------
Determine What is Watitng for Deployment
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

and the environent you are publishing to:

.. code-block:: sql

	SELECT * FROM cstudio_publishtotarget where site = 'mysiteid' and environment ='production' and version > 1472839802228

----------------------------------------
Cancelling Work in the Deployment Queue
----------------------------------------

Work in the deployment queue is entirely time based.  This is because you could start up a new target at any time or turn on a target which has been turned off for a long period of time - in both cases these targets need to be updated.

If there is a deployment issue - some reason content wont deploy it's usually best to fix the issue and let deployment proceed.  That said there may be times when you want to cancel deployment to an environment.

Because of this, the way to cancel a deployment to a specific end point is to make sure that there are no records in the deployment queue that the target needs.  Options for achieving this includeL:
    * Modifying the DEPVERSION timestamp in the deployer to a later date or now to indicate it's fully up to date.
    * Chaning the timestamp on the items in the queue to some previous time (usually something obvious like a some date time in 1978)
    * Deleting the records in the deployment queue.