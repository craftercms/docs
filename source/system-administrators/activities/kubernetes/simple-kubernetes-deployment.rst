.. _simple-kubernetes-deployment:

=========================================================
Deploying a Simple Crafter CMS installation in Kubernetes
=========================================================

This tutorial shows you how to deploy a simple Crafter CMS installation in a Kubernetes cluster. The installation 
consists of one Authoring Pod, one Delivery Pod and one Elasticsearch Pod, and it's mainly intended for development 
and testing, not for production.

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

The Delivery Pod will need SSH access to the Authoring Pod to pull the site content. For this, we need to generate 
an SSH public/private key pair for authentication and provide the key pair as a Kubernetes Secret to the Pods:

#. Run ``ssh-keygen -b 4096 -t rsa -C "your_email@example.com"`` to generate the key pair. When being asked for the 
   filename of the key, just enter ``id_rsa`` (so that the keys are saved in the current folder). Do not provide a 
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

Copy the following Kubernetes deployment configuration files somewhere in your machine:

.. literalinclude:: /_static/code/kubernetes/simple/elasticsearch-deployment.yaml
   :language: yaml
   :caption: elasticsearch-deployment.yaml
   :linenos:

.. literalinclude:: /_static/code/kubernetes/simple/authoring-deployment.yaml
   :language: yaml
   :caption: authoring-deployment.yaml
   :linenos:

.. literalinclude:: /_static/code/kubernetes/simple/delivery-deployment.yaml
   :language: yaml
   :caption: delivery-deployment.yaml
   :linenos:

--------------------------
Apply the Deployment Files
--------------------------

To create the 3 deployments, assuming your current directory is where you copied the deployment files, you can 
just run:

.. code-block:: bash
  
   kubectl apply -f .

Check the status of the deployments by running ``kubectl get deployments``, and the status of the Pods by running
``kubectl get pods``. You can also tail the logs of the ``tomcat`` and ``deployer`` containers, for both authoring 
and deliver Pods, with the command:

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

From your browser then, just enter the URL with ``/studio`` at the end, login to Studio, and create a site from
any of the available blueprints or pull an existing site from a remote repository.

------------------------------
Bootstrap the Site in Delivery
------------------------------

Now you need to setup the site in Delivery. If you don't know the name of the Delivery Pod yet, run ``kubectl get pods``
and check for the one that has a name like ``delivery-deployment-XXXXX``. Then, run the following command (remember to
replace the pod name and the site name with the actual values):

.. code-block:: bash
  
   kubectl exec -it DELIVERY_POD_NAME --container deployer -- gosu crafter ./bin/init-site.sh SITE_NAME ssh://authoring-ssh-service/opt/crafter/data/repos/sites/SITE_NAME/published

This command will create the Deployer site target and create the index in Elasticsearch. After a minute or two, the 
Deployer should have pulled the site content from Authoring (you can check it by gettting the Delivery Deployer log: 
``kubectl logs -c deployer DELIVERY_POD_NAME``).

Now you can access the site in Delivery:

#. Get the delivery endpoint URL (in Minikube: ``minikube service delivery-service --url``).
#. From your browser, enter the URL with ``?crafterSite=SITE_NAME`` at the end. You should see your site. Also, when
   making a change in Authoring and publishing it, the change will be reflected in Delivery after a minute.
