:is-up-to-date: True

.. _deploying-crafter-cms-in-kubernetes:

==================================
Deploying CrafterCMS in Kubernetes
==================================

To deploy a simple CrafterCMS installation in a Kubernetes cluster, follow the guide below.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   simple-kubernetes-deployment


CrafterCMS also provides Kubernetes example deployments, which can be found here: https://github.com/craftercms/kubernetes-deployments.

From https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

.. code-block:: text

   A Deployment provides declarative updates for Pods ReplicaSets.

|


The following gives examples of using the CrafterCMS provided Kubernetes example deployments:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   simple-authoring-single-instance-kubernetes-deployment
   studio-clustering-with-kubernetes-deployment
   simple-delivery-kubernetes-deployment
