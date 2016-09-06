^^^^^^^^^^^^^^^^^^
Flow
^^^^^^^^^^^^^^^^^^
.. image:: /_static/images/deployment-mechanics.gif
   :alt: Crafter Studio Deployment Mechanics
   :align: center

* When authors save content it is written in to the work area.

1. On deployment Crafter Studio calculates all content and dependencies from the work-area that must be deployed and places records in the copyTo Environment Queue.
2. The copyToEnvironmentQueue copies content in its queue to the environment store from the work-area. This eliminates work-flow race conditions and provides you with a "golden" copy of each environment's state.
3. Once the content is in the environment store a record for each content item is placed in the deploy queue.

A. The deploy process constantly looks for content in its queue that is newer than the deployment targets last date.
B. When content meeting this criteria is found it is shipped to the deployer and the deployer's timestamp is updated.

