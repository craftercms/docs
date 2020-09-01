:is-up-to-date: True

.. index:: Setup Studio Clustering with Kubernetes Deployment, Auto-Clustering with Studio Example with Kubernetes, Studio's Embedded Database Multi-master Cluster Example with Kubernetes

.. _setup-studio-clustering-with-kubernetes-deployment:

===================================================================
Setup Studio Clustering with Kubernetes Deployment |enterpriseOnly|
===================================================================

A Kubernetes deployment describes an applications life cycle, e.g. images to be used, the number of pods, etc. It creates pods based on a specified template.  Crafter CMS has an example kubernetes deployment for a Studio cluster with 2 nodes and a Studio Arbiter.  In this section, we'll take a look at this example Kubernetes deployment.

------------
Requirements
------------

You need to have a Kubernetes cluster, and the ``kubectl`` command-line tool must be configured to communicate with your
cluster. If you do not already have a cluster, you can create one by using Minikube:
https://github.com/kubernetes/minikube.

The nodes in your cluster should at least have 4 CPUs and 8 GB of space, to avoid performance issues and out of memory
errors. In Minikube, to start a node with this characteristics, you can run a command similar to the following:
``minikube start --cpus 4 --memory 8192``.

The requirements (listed above) is the same as specified in :ref:`simple-kubernetes-deployment`.  In addition to that, we need the following:

* `k9s <https://k9scli.io/>`__ for viewing the status of the pods, the logs, etc
* Kubernetes deployment files for Crafter CMS Authoring cluster with embedded DB, found here: https://github.com/craftercms/kubernetes-deployments/

     .. code-block:: sh

        ➜ git clone https://github.com/craftercms/kubernetes-deployments.git

  The deployment files that we need for our example is under the ``kubernetes-deployments/authoring/cluster`` folder::

      kubernetes-deployments/authoring/cluster
         nodes/
            authoring-deployment.yaml
            hazelcast-rbac.yaml
            kustomization.yaml
            resources/
               config/
                  studio/
                     hazelcast-config.yaml
                     studio-config-override.yaml
               secrets/
                  .ssh/
                     config
         arbiter/
            arbiter-deployment.yaml
            kustomization.yaml
            resources/
               config/
                  hazelcast-config.yaml

  |

  The ``nodes`` folder contains the deployment files for setting up two authoring pods and hazelcast, which is used as an in-memory distributed data store to orchestrate the bootstrapping of Studio's Embedded Database Multi-master Cluster.

  The ``arbiter`` folder contains the deployment files for hazelcast and the Studio Arbiter, an arbitrator that functions as an odd node, since our authoring deployment only has two nodes, to avoid split-brain situations.

------------------------
Setup Kubernetes Secrets
------------------------

From https://kubernetes.io/docs/concepts/configuration/secret/

.. code-block:: text

   "Kubernetes Secrets let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys."

|

The deployment files cloned from https://github.com/craftercms/kubernetes-deployments/ has a folder set aside for placing confidential information, ``kubernetes-deployments/authoring/cluster/nodes/resources/secrets``

This is where we will place the enterprise license to be used by the images in the deployment.  Remember to name your license file to ``crafter.lic``

This guide details setting up Authoring pods in a cluster, but once you setup the Delivery pod, it will need SSH access to the Authoring pods to pull site content. For this, you need to generate an SSH public/private key pair for authentication and provide the key pair as a Kubernetes Secret to the Pods.

^^^^^^^^^^^^^^^^^^^^^^^^^^
Create the SSH Keys Secret
^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Go to ``kubernetes-deployments/authoring/cluster/nodes/resources/secrets/.ssh``.  This is where we will create the ssh keys.

#. Run ``ssh-keygen -b 4096 -t rsa -C "your_email@example.com"`` to generate the key pair. When being asked for the
   filename of the key, just enter ``id_rsa`` (so that the keys are saved in the current folder). Do not provide a
   passphrase.

      .. note::
         Crafter requires the key to be ``RSA`` and does not support keys generated using an algorithm other than ``RSA``.  The Jsch library that Jgit uses only supports ``RSA`` and does not support other keys such as OpenSSH.  Make sure when you generate the key to specify the type as ``rsa``:

         .. code-block:: sh

            ➜ ssh-keygen -b 4096 -t rsa -C "your_email@example.com"

         |

         For users on macOS 10.14 and above (macOS Mojave and onwards), users on Ubuntu 20.04 (focal fossa) and onwards, RHEL/CentOS 8 and onwards, Debian 10 (Buster) and onwards, or users using **OpenSSH 7.8** and above,  ``ssh-keygen`` writes OpenSSH format private keys by default (RFC7416 format) instead of using OpenSSL's PEM format.

         To generate keys using PEM format, add option ``-m PEM`` into your ssh-keygen command. For example, you can run the command below  to force ssh-keygen to export as PEM format:

         .. code-block:: sh

            ➜ ssh-keygen -m PEM -t rsa -b 4096 -C "your_email@example.com"

         |

         Also, check that the file starts with the following header: ``-----BEGIN RSA PRIVATE KEY-----`` to verify that the key is using ``RSA``.
         Crafter also currently doesn't support using a passphrase with SSH keys.  Remember to **NOT** use a passphrase when creating your keys.

#. Create a copy of the public key and name it ``authorized_keys``

      .. code-block:: sh

         ➜ cp id_rsa.pub authorized_keys



-----------------
Start the Cluster
-----------------

The next step is to start the cluster.  When starting the cluster, remember to start the nodes first then the arbiter.

^^^^^^^^^^^^^^^
Start the nodes
^^^^^^^^^^^^^^^

Go to ``kubernetes-deployments/authoring/cluster/nodes`` then run ``kubectl apply -f .``

   .. code-block:: bash

      ➜ kubectl apply -f .
      clusterrolebinding.rbac.authorization.k8s.io/default-cluster unchanged
      configmap/authoring-studio-config-8ttt252b8f created
      secret/authoring-crafter-license-f2tf6946hb unchanged
      secret/authoring-ssh-keys-t4gb554959 unchanged
      service/authoring-service-headless unchanged
      service/authoring-service unchanged
      statefulset.apps/authoring configured

Check the status of the deployments by running ``kubectl get deployments``, and the status of the Pods by running ``kubectl get pods``.  Here's a sample output when running ``kubectl get pods``:

   .. code-block:: bash

      ➜ kubectl get pods
      NAME          READY   STATUS    RESTARTS   AGE
      authoring-0   2/4     Running   0          87s
      authoring-1   2/4     Running   0          87s

Another way of checking the status of the deployments/pods/etc. is by running ``k9s`` on the command line, which will open up a text-based user interface:

   .. code-block:: bash

      ➜ k9s

   |

.. image:: /_static/images/system-admin/autoclustering-k9s-start.jpg
   :alt: Crafter CMS Auto-clustering of Studio Enterprise view using k9s
   :width: 100%
   :align: center

|

Once it comes up, you will see the two new pods created.

You can tail the logs of the ``tomcat`` and ``deployer`` containers, with the ``kubectl`` command:

   .. code-block:: bash

      kubectl logs -f -c CONTAINER_NAME POD_NAME

For example: ``kubectl logs -f -c tomcat authoring-deployment-5df746c4d8-lv9gd``

To view the logs in a pod using k9s, from the ``Pods`` view, select the pod you would like to view the logs of using your keyboard arrow keys, then hit enter to view the containers in the pod.

.. image:: /_static/images/system-admin/autoclustering-k9s-containers.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s container views
   :width: 100%
   :align: center

|

We'll take a look at the tomcat logs, so, we'll move the cursor to the ``tomcat`` container, then press the letter ``l``.

.. image:: /_static/images/system-admin/autoclustering-k9s-logs.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s log views
   :width: 100%
   :align: center

|

^^^^^^^^^^^^^^^^^
Start the arbiter
^^^^^^^^^^^^^^^^^

Go to ``kubernetes-deployments/authoring/cluster/arbiter`` then run ``kubectl apply -f .``

   .. code-block:: bash

      ➜ kubectl apply -f .
      configmap/arbiter-config-d6mbk26fgm created
      service/arbiter-service created
      deployment.apps/arbiter created

Check the status by running ``kubectl get pods`` and you should see the arbiter listed

   .. code-block:: bash

      ➜  kubectl get pods
      NAME                      READY   STATUS    RESTARTS   AGE
      arbiter-f84d677c7-v6gkx   0/1     Running   0          38s
      authoring-0               4/4     Running   1          9m31s
      authoring-1               4/4     Running   1          9m31s

.. image:: /_static/images/system-admin/autoclustering-k9s-arbiter-started.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s Pods view, arbiter started
   :width: 100%
   :align: center

|

-------------
Create a Site
-------------

To be able to access applications in a cluster in Kubernetes, we need to use port forwarding.  To access Studio, we will forward a local port to the tomcat port in the pod.  We will forward local port ``8080`` for the ``tomcat`` container in the first pod, and local port ``8081`` for the ``tomcat`` container in the second pod.

``kubectl port-forward`` allows using resource name, such as a pod name, to select a matching pod to port forward to.  To forward a local port to a port of a pod, run the following:

   .. code-block:: bash

      kubectl port-forward pods/POD_NAME LOCAL_PORT:POD_PORT

Here's an example forwarding local port 8080 to the tomcat in the ``authoring-0`` pod:

   .. code-block:: bash

      ➜  kubectl port-forward pods/authoring-0 8080:8080
      Forwarding from 127.0.0.1:8080 -> 8080
      Forwarding from [::1]:8080 -> 8080

To forward a local port to the tomcat port in a pod using k9s, from the ``Pods`` view, select the pod you would like to port forward to using your keyboard arrow keys, then hit enter to view the containers in the pod.  We'll forward the local port to the tomcat port, so, we'll move the cursor to the ``tomcat`` container, then press ``<shift> + f``.  A dialog  will then open where you can enter the desired local port and address to use for port forwarding

.. image:: /_static/images/system-admin/autoclustering-k9s-port-forward-dialog.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s port forward
   :width: 100%
   :align: center

|


Change the value of ``Local Port`` to your desired value.  For ouw example, we're usimg local port ``8080`` for the ``authoring-0`` pod and local port ``8081`` for the ``authoring-1`` pod.  After making desired changes, move the cursor to ``Ok`` then hit the enter key to save your changes.

We can now access Studio from either pods using ``localhost:8080/studio`` or ``localhost:8081/studio`` in your browser

.. image:: /_static/images/system-admin/autoclustering-k9s-port-forwarded-8081.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s port forward of local port 8081
   :width: 100%
   :align: center

|

If we look at the Cluster through one of the nodes, you'll see the two nodes listed like below:

.. image:: /_static/images/system-admin/autoclustering-2-nodes-setup.png
   :alt: Auto-clustering using Kubernetes deployments - Two nodes listed in Studio Main Menu - Cluster
   :width: 100%
   :align: center

|

--------------------
Shutdown the Cluster
--------------------

When shutting down the cluster, remember to shutdown the arbiter first, then the nodes.

^^^^^^^^^^^^^^^^
Shutdown Arbiter
^^^^^^^^^^^^^^^^

We'll shutdown the arbiter first, so go to the arbiter directory ``kubernetes-deployments/authoring/cluster/arbiter`` then run ``kubectl delete -k .``  This will delete resources (deployment, service, config map, stateful set) from a directory containing kustomization.yaml

   .. code-block:: bash

      ➜ kubectl delete -k .
      configmap "arbiter-config-d6mbk26fgm" deleted
      service "arbiter-service" deleted
      deployment.apps "arbiter" deleted

Once the arbiter has been completely terminated, we can now start shutting down the nodes.
When we look at ``k9s``, notice that the ``arbiter`` pod is no longer listed

.. image:: /_static/images/system-admin/autoclustering-k9s-arbiter-terminated.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s arbiter terminated
   :width: 100%
   :align: center

|

^^^^^^^^^^^^^^
Shutdown Nodes
^^^^^^^^^^^^^^

To shutdown the nodes, go to the nodes directory ``kubernetes-deployments/authoring/cluster/arbiter`` then run ``kubectl delete -k . --cascade=false``.  Again, this will delete resources (deployment, service, config map, stateful set) from a directory containing ``kustomization.yaml``

   .. code-block:: bash

      ➜  kubectl delete -k . --cascade=false
      clusterrolebinding.rbac.authorization.k8s.io "default-cluster" deleted
      configmap "authoring-studio-config-8ttt252b8f" deleted
      secret "authoring-crafter-license-hghgcdd8f6" deleted
      secret "authoring-ssh-keys-t4gb554959" deleted
      service "authoring-service-headless" deleted
      service "authoring-service" deleted
      statefulset.apps "authoring" deleted

Shutting down the nodes one by one allows for a graceful shutdown of the embedded database multi-master cluster.  The ``cascade`` flag allows killing the pods (shutting down the nodes) one by one.  Remember to set the ``cascade`` flag to ``false``, otherwise it will kill both pods at the same time.

The next step is to terminate the pods one by one.  Terminate one pod first.  Make sure the pod has completely terminated, then terminate the remaining pod.

Using ``k9s``, we'll delete the ``authoring-0`` pod.  Move the cursor to the ``authoring-0`` pod, then hit the ``<ctrl> + d`` keys on your keyboard.  A dialog will come up to verify deleting the pod.  Move the cursor to ``OK`` then hit enter.

.. image:: /_static/images/system-admin/autoclustering-k9s-delete-pod.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s delete a pod
   :width: 100%
   :align: center

|

Wait until the pod has finished terminating, then  we can terminate the remaining pod.

.. image:: /_static/images/system-admin/autoclustering-k9s-authoring-0-terminating.jpg
   :alt: Auto-clustering using Kubernetes deployments - k9s
   :width: 100%
   :align: center

|

We can now delete the remaining pod ``authoring-1`` by following the steps above using ``k9s`` or, you can also run ``kubectl delete pods <pod_name>`` to delete

   .. code-block:: bash

      ➜  kubectl delete pods authoring-1
      pod "authoring-1" deleted

For more information on the Crafter CMS Authoring Cluster with embedded DB, see the ``README.md`` file here: https://github.com/craftercms/kubernetes-deployments/tree/master/authoring/cluster