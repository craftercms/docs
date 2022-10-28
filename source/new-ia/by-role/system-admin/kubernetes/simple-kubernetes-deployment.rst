:is-up-to-date: False
:last-updated: 4.0.3

:nosearch:

.. _newIa-simple-kubernetes-deployment:

========================================================
Deploying a Simple CrafterCMS installation in Kubernetes
========================================================

This tutorial shows you how to deploy a simple CrafterCMS installation in a Kubernetes cluster. The installation
consists of one Authoring Pod, one Delivery Pod and one Elasticsearch Pod, and it's mainly intended for development
and testing, not for production.

.. TODO: Revisit and update screens and text once https://github.com/craftercms/craftercms/issues/5285 is done

|

   .. note::
      This section needs an update once the kubernetes deployment files are updated `here <https://github.com/craftercms/craftercms/issues/5285>`__

--------------
Pre-requisites
--------------

You need to have a Kubernetes cluster, and the ``kubectl`` command-line tool must be configured to communicate with your 
cluster. If you do not already have a cluster, you can create one by using Minikube: 
https://github.com/kubernetes/minikube.

The nodes in your cluster should at least have 4 CPUs and 8 GB of space, to avoid performance issues and out of memory 
errors. In Minikube, to start a node with this characteristics, you can run a command similar to the following: 
``minikube start --cpus 4 --memory 8192``.

--------------------------
Create the SSH Keys Secret
--------------------------

The Delivery Pod will need SSH access to the Authoring Pod to pull the project content. For this, you need to generate
an SSH public/private key pair for authentication and provide the key pair as a Kubernetes Secret to the Pods:

#. Run ``ssh-keygen`` to generate the key pair (e.g. ``ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"``).
   When asked for the filename of the key, just enter a filename e.g. ``id_rsa``, ``id_dsa``, ``id_ecdsa`` or ``id_ed25519`` depending
   on the type of key selected (so that the keys are saved in the current folder). Do not provide a
   passphrase.
#. Create a copy of the public key and rename it to ``authorized_keys``: ``cp id_rsa.pub authorized_keys``.
#. In the same folder, create a ``config`` file with the following, to disable ``StrictHostKeyChecking`` for automatic 
   connection to the Authoring SSH server:

   .. code-block:: none
      :caption: config
      :linenos:
  
      Host authoring-ssh-service
          StrictHostKeyChecking no

#. Create Secret ``ssh-keys`` with the files just generated:

   .. code-block:: bash

      kubectl create secret generic ssh-keys --from-file=authorized_keys --from-file=id_rsa --from-file=id_rsa.pub --from-file=config

---------------------------
Create the Deployment files
---------------------------

Copy the following Kubernetes deployment configuration files somewhere in your machine (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "elasticsearch-deployment.yaml"</a></summary>

.. literalinclude:: /_static/code/kubernetes/simple/elasticsearch-deployment.yaml
   :language: yaml
   :caption: elasticsearch-deployment.yaml
   :linenos:

.. raw:: html

   </details>


.. raw:: html

   <details>
   <summary><a>Sample "authoring-deployment.yaml"</a></summary>

.. literalinclude:: /_static/code/kubernetes/simple/authoring-deployment.yaml
   :language: yaml
   :caption: authoring-deployment.yaml
   :linenos:

.. raw:: html

   </details>


.. raw:: html

   <details>
   <summary><a>Sample "delivery-deployment.yaml"</a></summary>

.. literalinclude:: /_static/code/kubernetes/simple/delivery-deployment.yaml
   :language: yaml
   :caption: delivery-deployment.yaml
   :linenos:

.. raw:: html

   </details>


.. note::
   The latest example deployment files for authoring and delivery are available here:

   - `authoring-deployment.yaml <https://github.com/craftercms/kubernetes-deployments/blob/master/authoring/simple/authoring-deployment.yaml>`__
   - `delivery-deployment.yaml <https://github.com/craftercms/kubernetes-deployments/blob/master/delivery/simple/delivery-deployment.yaml>`__

   Remember to update the Elasticsearch version in the Elasticsearch deployment file to the Elasticsearch version used in the authoring and delivery image files used.


--------------------------
Apply the Deployment Files
--------------------------

To create the 3 deployments, assuming your current directory is where you copied the deployment files, you can 
just run:

.. code-block:: bash
  
   kubectl apply -f .

Check the status of the deployments by running ``kubectl get deployments``, and the status of the Pods by running
``kubectl get pods``. You can also tail the logs of the ``tomcat`` and ``deployer`` containers, for both Authoring 
and Delivery Pods, with the command:

.. code-block:: bash
  
   kubectl logs -f -c CONTAINER_NAME POD_NAME

For example: ``kubectl logs -f -c tomcat authoring-deployment-5df746c4d8-lv9gd``

--------------------------
Create a Site in Authoring
--------------------------

In order to access Studio, you need the URL endpoint of the ``authoring-service``. If you're using Minikube, you can
get it with the command:

.. code-block:: bash
  
   minikube service authoring-service --url

The response should be like this:

.. code-block:: bash
  
   http://192.168.39.5:31242

From your browser then, just enter the URL with ``/studio`` at the end, login to Studio, and create a project from
any of the available blueprints or pull an existing project from a remote repository.

------------------------------
Bootstrap the Site in Delivery
------------------------------

Now you need to setup the project in Delivery. If you don't know the name of the Delivery Pod yet, run ``kubectl get pods``
and check for the one that has a name like ``delivery-deployment-XXXXX``. Then, run the following command (remember to
replace the pod name and the project name with the actual values):

.. code-block:: bash
  
   kubectl exec -it DELIVERY_POD_NAME --container deployer -- gosu crafter ./bin/init-site.sh SITE_NAME ssh://authoring-ssh-service/opt/crafter/data/repos/sites/SITE_NAME/published

This command will create the Deployer project target and create the index in Elasticsearch.

.. include:: /includes/ssh-private-key.rst

After a minute or two, the Deployer should have pulled the project content from Authoring (you can check it by getting
the Delivery Deployer log: ``kubectl logs -c deployer DELIVERY_POD_NAME``).

Now you can access the project in Delivery:

#. Get the delivery endpoint URL (in Minikube: ``minikube service delivery-service --url``).
#. From your browser, enter the URL with ``?crafterSite=SITE_NAME`` at the end. You should see your project. Also, when
   making a change in Authoring and publishing it, the change will be reflected in Delivery after a minute.
