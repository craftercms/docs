^^^^^^^^^^^^^^^^^^
Flow
^^^^^^^^^^^^^^^^^^
.. image:: /_static/images/deployment-mechanics.gif
   :alt: Crafter Studio Deployment Mechanics
   :align: center

* When authors save content it is written in to the work area.

1. On deployment Crafter Studio calculates all content and dependencies that must be deployed and places records in the copyTo Environment Queue.
2. The copyToEnvironmentQueue copies contnet in its queue to the environment store
3. Once th content is in the environment store a record is placed in the deploy queue for the content

A. The deploy queue process constant looks for content in its queue that is newer than the deployment targets last date.
B. When content meeting this criteria is found it is shipped to the deployer and the deployer's timestamp is updated.

