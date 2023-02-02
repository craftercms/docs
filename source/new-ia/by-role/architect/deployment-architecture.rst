:is-up-to-date: False
:since-version: 4.0.0
:nosearch:

.. _newIa-deployment-architecture:

=======================
Deployment Architecture
=======================

CrafterCMS supports various deployments (both SaaS solutions and PaaS and self-hosted solutions).

------------------------
CrafterCMS Crafter Cloud
------------------------
Crafter Cloud provides a private SaaS offering of CrafterCMS. CrafterCloud is:
* Fully elastically scalable (based on Kubernetes)
* High-availability with disaster recovery
* Fronted by a global CDN

See https://craftercms.com/products/crafter-cloud/ for more information.

-------------------------
Amazon Web Services (AWS)
-------------------------

---------------
Microsoft Azure
---------------

---------------------------
Google Cloud Platform (GCP)
---------------------------

---------------------------------
Oracle Cloud Infrastructure (OCI)
---------------------------------

-------
On-Prem
-------
If you're not quite ready for serverless deployment, CrafterCMS deploys quite nicely in a traditional
server/scale-group architecture. Here is a typical deployment at a high-level:

.. image:: /_static/images/architecture/typical-deployment.webp
   :width: 100%
   :alt: CrafterCMS Typical Real-life Deployment
   :align: center
