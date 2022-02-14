:is-up-to-date: True

.. index:: Simple Authoring with a Single Instance Kubernetes Deployment, Example Kubernetes deployment of simple Authoring with a single instance

.. _newIa-setup-simple-authoring-with-kubernetes-deployment:

=============================================================
Simple Authoring with a Single Instance Kubernetes Deployment
=============================================================

A Kubernetes deployment describes an applications life cycle, e.g. images to be used, the number of pods, etc. It creates pods based on a specified template.  CrafterCMS has an example Kubernetes deployment for a simple authoring with a single instance.  In this section, we'll take a look at this example Kubernetes deployment.

------------
Requirements
------------

You need to have a Kubernetes cluster, and the ``kubectl`` command-line tool must be configured to communicate with your
cluster. If you do not already have a cluster, you can create one by using Minikube:
https://github.com/kubernetes/minikube.

The nodes in your cluster should at least have 4 CPUs and 8 GB of space, to avoid performance issues and out of memory
errors. In Minikube, to start a node with this characteristics, you can run a command similar to the following:
``minikube start --cpus 4 --memory 8192``.

In addition to that, we need the following:

* `k9s <https://k9scli.io/>`__ for viewing the status of the pods, the logs, etc
* Kubernetes deployment files for CrafterCMS Simple Authoring with a single instance, found here: https://github.com/craftercms/kubernetes-deployments/

     .. code-block:: sh

        ➜ git clone https://github.com/craftercms/kubernetes-deployments.git

  The deployment files that we need for our example is under the ``kubernetes-deployments/authoring/simple`` folder::

      kubernetes-deployments/authoring/simple
         resources/
            config/
               studio/
                  studio-config-override.yaml
            secrets/
               .ssh/
                  config
         authoring-deployment.yaml
         kustomization.yaml

  |

------------------------
Setup Kubernetes Secrets
------------------------

From https://kubernetes.io/docs/concepts/configuration/secret/

.. code-block:: text

   "Kubernetes Secrets let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys."

|

The deployment files cloned from https://github.com/craftercms/kubernetes-deployments/ has a folder set aside for placing confidential information, ``kubernetes-deployments/authoring/simple/resources/secrets``

This guide details setting up an Authoring pod, but once you setup the Delivery pod, it will need SSH access to the Authoring pod to pull site content. For this, you need to generate an SSH public/private key pair for authentication and provide the key pair as a Kubernetes Secret to the Pods.

^^^^^^^^^^^^^^^^^^^^^^^^^^
Create the SSH Keys Secret
^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Go to ``kubernetes-deployments/authoring/simple/resources/secrets/.ssh``.  This is where we will create the ssh keys.

#. Run ``ssh-keygen -m PEM -b 4096 -t rsa -C "your_email@example.com"`` to generate the key pair. When being asked for the
   filename of the key, just enter ``id_rsa`` (so that the keys are saved in the current folder). Do not provide a
   passphrase.

      .. note::
         Crafter requires the key to be ``RSA`` and does not support keys generated using an algorithm other than ``RSA``.  The Jsch library that Jgit uses only supports ``RSA`` and does not support other keys such as OpenSSH.  Make sure when you generate the key to specify the type as ``rsa``:

         .. code-block:: sh

            ➜ ssh-keygen -m PEM -b 4096 -t rsa -C "your_email@example.com"

         |

         Check that the file starts with the following header: ``-----BEGIN RSA PRIVATE KEY-----`` to verify that the key is using ``RSA``.
         Crafter also currently doesn't support using a passphrase with SSH keys.  Remember to **NOT** use a passphrase when creating your keys.

#. Create a copy of the public key and name it ``authorized_keys``

      .. code-block:: sh

         ➜ cp id_rsa.pub authorized_keys

--------------------
Start the Deployment
--------------------

Go to ``kubernetes-deployments/authoring/simple`` then run ``kubectl apply -k .``

   .. code-block:: bash

      ➜  kubectl apply -k .
      configmap/authoring-studio-config-m7d7mmcmfc created
      secret/authoring-ssh-keys-t4gb554959 created
      service/authoring-service-headless created
      service/authoring-service created
      statefulset.apps/authoring created

   |

Check the status of the deployments by running ``kubectl get deployments``, and the status of the Pods by running ``kubectl get pods``.  Here's a sample output when running ``kubectl get pods``:

   .. code-block:: bash

      ➜  kubectl get pods
      NAME          READY   STATUS              RESTARTS   AGE
      authoring-0   0/4     ContainerCreating   0          2m19s

Another way of checking the status of the deployments/pods/etc. is by running ``k9s`` on the command line, which will open up a text-based user interface:

   .. code-block:: bash

      ➜ k9s

   |

.. image:: /_static/images/system-admin/simple-authoring-k9s-start.jpg
   :alt: CrafterCMS Simple Authoring with Single Instance Kubernetes Deployment
   :width: 100%
   :align: center

|

Once it comes up, you will see the new pod created.

You can tail the logs of the ``tomcat`` and ``deployer`` containers, with the ``kubectl`` command:

   .. code-block:: bash

      kubectl logs -f -c CONTAINER_NAME POD_NAME

For example: ``kubectl logs -f -c tomcat authoring-0``

To view the logs in a pod using k9s, from the ``Pods`` view, select the pod you would like to view the logs of using your keyboard arrow keys, then hit enter to view the containers in the pod.

.. image:: /_static/images/system-admin/simple-authoring-k9s-containers.jpg
   :alt: Simple Authoring with a Single Instance using Kubernetes deployments - k9s container views
   :width: 100%
   :align: center

|

We'll take a look at the tomcat logs, so, we'll move the cursor to the ``tomcat`` container, then press the letter ``l``.

.. image:: /_static/images/system-admin/simple-authoring-k9s-logs.jpg
   :alt: Simple Authoring with a Single Instance using Kubernetes deployments - k9s log views
   :width: 100%
   :align: center

|

-------------
Create a Site
-------------

To be able to access applications in Kubernetes, we need to use port forwarding.  To access Studio, we will forward a local port to the tomcat port in the pod.  We will forward local port ``8080`` for the ``tomcat`` container in the pod.

``kubectl port-forward`` allows using resource name, such as a pod name, to select a matching pod to port forward to.  To forward a local port to a port of a pod, run the following:

   .. code-block:: bash

      kubectl port-forward pods/POD_NAME LOCAL_PORT:POD_PORT

Here's an example forwarding local port 8080 to the tomcat in the ``authoring-0`` pod:

   .. code-block:: bash

      ➜  kubectl port-forward pods/authoring-0 8080:8080
      Forwarding from 127.0.0.1:8080 -> 8080
      Forwarding from [::1]:8080 -> 8080

To forward a local port to the tomcat port in a pod using k9s, from the ``Pods`` view, select the pod you would like to port forward to using your keyboard arrow keys, then hit enter to view the containers in the pod.  We'll forward the local port to the tomcat port, so, we'll move the cursor to the ``tomcat`` container, then press ``<shift> + f``.  A dialog  will then open where you can enter the desired local port and address to use for port forwarding

.. image:: /_static/images/system-admin/simple-authoring-k9s-port-forward-dialog.jpg
   :alt: Simple Authoring with a single instance using Kubernetes deployments - k9s port forward
   :width: 100%
   :align: center

|


Change the value of ``Local Port`` to your desired value.  For our example, we're using local port ``8080`` for the ``authoring-0`` pod.  After making desired changes, move the cursor to ``Ok`` then hit the enter key to save your changes.

We can now access Studio from the pod using ``localhost:8080/studio`` in your browser and create a site.

.. image:: /_static/images/system-admin/simple-authoring-k9s-port-forwarded-8080.jpg
   :alt: Simple Authoring with a single instance using Kubernetes deployments - k9s port forward of local port 8080
   :width: 100%
   :align: center

|

To setup the site in delivery, follow the instructions listed here: :ref:`newIa-simple-delivery-kubernetes-deployment`
