:is-up-to-date: True
:last-updated: 4.0.3


.. index:: Simple Authoring with a Single Instance Kubernetes Deployment, Example Kubernetes deployment of simple Authoring with a single instance

.. _setup-simple-authoring-with-kubernetes-deployment:

=============================================================
Simple Authoring With a Single Instance Kubernetes Deployment
=============================================================

CrafterCMS has an example Kubernetes deployment for an Authoring with a single instance, which you can get from https://github.com/craftercms/kubernetes-deployments/tree/master/authoring/cluster. This guide covers how to install this example in a Kubernetes cluster.

.. important::
   This guide assumes you have a working understanding of Kubernetes

------------
Requirements
------------

You need to have a Kubernetes cluster, and the ``kubectl`` command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using Minikube: https://github.com/kubernetes/minikube.

The nodes in your cluster should at least have 4 CPUs and 16 GB of space, to avoid performance issues and out of memory errors. In Minikube, to start a node with this characteristics, you can run a command similar to the following:
``minikube start --cpus 4 --memory 16384``.

------------------------
Setup Kubernetes Secrets
------------------------

The deployment files cloned from https://github.com/craftercms/kubernetes-deployments/ have a folder set aside for placing confidential information, ``kubernetes-deployments/authoring/simple/resources/secrets``

This guide details setting up an Authoring pod, but once you setup the Delivery pod, it will need SSH or HTTPS access to the Authoring pod to pull site content. For this, you need to generate an SSH public/private key pair or an HTTPS SSL certificate 
and key for authentication and provide them as Kubernetes Secrets to the Pods.

-----------------------------------
Choose if SSH/HTTPS as Git protocol
-----------------------------------

Deployer containers in Delivery environments can use either SSH or HTTPS to pull changes from the published repositories in Authoring. Kubernetes configuration under ``kubernetes-deployments/authoring/simple`` that's only pertinent to a certain 
protocol will start with the comment ``Uncomment if using Git (HTTPS|SSH)``. Make sure only the configuration lines corresponding to the protocol you decide to use are uncommented, and comment the configuration related to the other protocol.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create the SSH Keys Secrets (SSH mode only)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Go to ``kubernetes-deployments/authoring/simple/resources/secrets/git-ssh-server`` (create the folders if they don't exist).  This is where you will create the ssh keys.
#. Run ``ssh-keygen`` to generate the key pair (e.g. ``ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"``).
   When asked for the filename of the key, just enter a filename e.g. ``id_rsa``, ``id_dsa``, ``id_ecdsa`` or ``id_ed25519`` depending
   on the type of key selected (so that the keys are saved in the current folder). Do not provide a passphrase.
#. Create a copy of the public key and name it ``authorized_keys``

      .. code-block:: sh

         ➜ cp id_rsa.pub authorized_keys

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create the HTTPS Certificate and Key Secrets (HTTPS mode only)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Go to ``kubernetes-deployments/authoring/simple/resources/secrets/git-ssh-server`` (create the folders if they don't exist).  This is where you will create the ssh keys.
#. Run ``openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`` and follow the prompts. It's up to you what to enter in each field, **EXCEPT** for the Common Name (CN). This should match
   the Authoring service name. If following the example, the CN value should be ``authoring-svc-headless``.

--------------------
Start the Deployment
--------------------

Create the ``craftercms`` namespace if it doesn't exist yet.

   .. code-block:: bash

      ➜  kubectl create namespace craftercms
      namespace/craftercms created

If using ``minikube``, pre-pull the Authoring and Elasticsearch images to avoid ``context deadline exceeded`` errors (change ``CRAFTERCMS_VERSION`` for the actual CrafterCMS version, e.g. 4.0.2).

   .. code-block:: bash

      ➜  minikube image pull craftercms/authoring_tomcat:4.0.2
      ➜  minikube image pull docker.elastic.co/elasticsearch/elasticsearch:7.17.1

Go to ``kubernetes-deployments/authoring/simple`` then run ``kubectl apply -k .``

   .. code-block:: bash

      ➜  kubectl apply -k .
      secret/ssh-keys-d2khm6g98k created
      service/authoring-svc created
      service/authoring-svc-headless created
      statefulset.apps/authoring created

Check the status of the Authoring StatefulSet by running ``kubectl get -n craftercms statefulsets``, and the status of the Pods by running ``kubectl get -n craftercms pods``.

   .. code-block:: bash

      ➜  kubectl get -n craftercms statefulsets
      NAME        READY   AGE
      authoring   1/1     2m7s

   .. code-block:: bash

      ➜  kubectl get -n craftercms pods 
      NAME          READY   STATUS    RESTARTS   AGE
      authoring-0   4/4     Running   0          2m26s

Once it comes up, you will see the new pod in ``RUNNING`` status, with 4 containers ``READY``.

You can tail the logs of the ``tomcat`` and ``deployer`` containers, with the ``kubectl`` command:

   .. code-block:: bash

      kubectl logs -n craftercms -f -c CONTAINER_NAME POD_NAME

For example: ``kubectl logs -n craftercms -f -c tomcat authoring-0``

----------------
Create a Project
----------------

To be able to access the applications in Kubernetes, you need to use port forwarding. To access Studio, forward a local port to port 8080 of the pod, with the ``kubectl port-forward`` command:

   .. code-block:: bash

      kubectl port-forward -n craftercms pods/POD_NAME LOCAL_PORT:POD_PORT

Here's an example of forwarding local port 8080 to the 8080 port of the ``authoring-0`` pod:

   .. code-block:: bash

      ➜  kubectl port-forward -n craftercms pods/authoring-0 8080:8080
      Forwarding from 127.0.0.1:8080 -> 8080
      Forwarding from [::1]:8080 -> 8080

After that, you can now access Studio using ``localhost:8080/studio`` in your browser and create a project.
Remember to :ref:`publish <publishing-and-status>` your project before continuing on the next steps.

To setup the project in delivery, follow the instructions listed here: :ref:`simple-delivery-kubernetes-deployment`
