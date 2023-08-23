:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Kubernetes, Kubernetes Deployment, Containerized Deployment, K8s, Clustering, Clustering in Kubernetes

.. _deploying-craftercms-in-kubernetes:

==================================
Deploying CrafterCMS in Kubernetes
==================================
.. contents::
   :local:
   :depth: 1

CrafterCMS provides Kubernetes example deployments, which can be found here: https://github.com/craftercms/kubernetes-deployments.

This article will describe examples of deploying CrafterCMS in Kubernetes.

.. _setup-simple-authoring-with-kubernetes-deployment:

-------------------------------------------------------------
Simple Authoring With a Single Instance Kubernetes Deployment
-------------------------------------------------------------
CrafterCMS has an example Kubernetes deployment for an Authoring with a single instance, which you can get from https://github.com/craftercms/kubernetes-deployments/tree/master/authoring/cluster. This guide covers how to install this example in a Kubernetes cluster.

.. important::
   This guide assumes you have a working understanding of Kubernetes

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You need to have a Kubernetes cluster, and the ``kubectl`` command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using Minikube: https://github.com/kubernetes/minikube.

The nodes in your cluster should at least have 4 CPUs and 16 GB of space, to avoid performance issues and out of memory errors. In Minikube, to start a node with this characteristics, you can run a command similar to the following:
``minikube start --cpus 4 --memory 16384``.

^^^^^^^^^^^^^^^^^^^^^^^^
Setup Kubernetes Secrets
^^^^^^^^^^^^^^^^^^^^^^^^
The deployment files cloned from https://github.com/craftercms/kubernetes-deployments/ have a folder set aside for placing confidential information, ``kubernetes-deployments/authoring/simple/resources/secrets``

This guide details setting up an Authoring pod, but once you setup the Delivery pod, it will need SSH or HTTPS access to the Authoring pod to pull site content. For this, you need to generate an SSH public/private key pair or an HTTPS SSL certificate
and key for authentication and provide them as Kubernetes Secrets to the Pods.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Choose if SSH/HTTPS as Git protocol
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Deployer containers in Delivery environments can use either SSH or HTTPS to pull changes from the published repositories in Authoring. Kubernetes configuration under ``kubernetes-deployments/authoring/simple`` that's only pertinent to a certain
protocol will start with the comment ``Uncomment if using Git (HTTPS|SSH)``. Make sure only the configuration lines corresponding to the protocol you decide to use are uncommented, and comment the configuration related to the other protocol.

"""""""""""""""""""""""""""""""""""""""""""
Create the SSH Keys Secrets (SSH mode only)
"""""""""""""""""""""""""""""""""""""""""""
#. Go to ``kubernetes-deployments/authoring/simple/resources/secrets/git-ssh-server`` (create the folders if they don't exist). This is where you will create the ssh keys.
#. Run ``ssh-keygen`` to generate the key pair (e.g. ``ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"``).
   When asked for the filename of the key, just enter a filename e.g. ``id_rsa``, ``id_dsa``, ``id_ecdsa`` or ``id_ed25519`` depending
   on the type of key selected (so that the keys are saved in the current folder). Do not provide a passphrase.
#. Create a copy of the public key and name it ``authorized_keys``

      .. code-block:: sh

         ➜ cp id_rsa.pub authorized_keys

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Create the HTTPS Certificate and Key Secrets (HTTPS mode only)
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
#. Go to ``kubernetes-deployments/authoring/simple/resources/secrets/git-ssh-server`` (create the folders if they don't exist). This is where you will create the ssh keys.
#. Run ``openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`` and follow the prompts. It's up to you what to enter in each field, **EXCEPT** for the Common Name (CN). This should match
   the Authoring service name. If following the example, the CN value should be ``authoring-svc-headless``.

^^^^^^^^^^^^^^^^^^^^
Start the Deployment
^^^^^^^^^^^^^^^^^^^^
Create the ``craftercms`` namespace if it doesn't exist yet.

   .. code-block:: bash

      ➜  kubectl create namespace craftercms
      namespace/craftercms created

If using ``minikube``, pre-pull the Authoring and OpenSearch images to avoid ``context deadline exceeded`` errors (change ``CRAFTERCMS_VERSION`` for the actual CrafterCMS version, e.g. 4.1.1).

   .. code-block:: bash

      ➜  minikube image pull craftercms/authoring_tomcat:4.1.1
      ➜  minikube image pull opensearchproject/opensearch:2.8.0

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

^^^^^^^^^^^^^^^^
Create a Project
^^^^^^^^^^^^^^^^
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

.. _simple-delivery-kubernetes-deployment:

-------------------------------------
Simple Delivery Kubernetes Deployment
-------------------------------------
CrafterCMS has an example Kubernetes deployment for a Delivery with a single instance, which you can get from https://github.com/craftercms/kubernetes-deployments/tree/master/delivery/cluster. This guide covers how to install this example in a Kubernetes cluster.

.. important::
   This guide assumes you have a working understanding of Kubernetes

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You need to have a Kubernetes cluster, and the ``kubectl`` command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using Minikube: https://github.com/kubernetes/minikube.

The nodes in your cluster should at least have 4 CPUs and 16 GB of space, to avoid performance issues and out of memory errors. In Minikube, to start a node with this characteristics, you can run a command similar to the following:
``minikube start --cpus 4 --memory 16384``.

In addition to that, you need an Authoring pod with a project published to ``live`` to pull site content from.

.. important::
   If you need to setup an Authoring environment, refer to :ref:`setup-simple-authoring-with-kubernetes-deployment`. **DO NOT** use :ref:`setup-studio-clustering-with-kubernetes-deployment`, which is not compatible with this guide.

^^^^^^^^^^^^^^^^^^^^^^^^
Setup Kubernetes Secrets
^^^^^^^^^^^^^^^^^^^^^^^^
The deployment files cloned from https://github.com/craftercms/kubernetes-deployments/ have a folder set aside for placing confidential information, ``kubernetes-deployments/delivery/simple/resources/secrets``.

If you previously setup Authoring with Git SSH access:

* Copy the ``id_rsa`` and ``id_rsa.pub`` files from ``kubernetes-deployments/authoring/simple/resources/secrets/git-ssh-server`` to ``kubernetes-deployments/delivery/simple/resources/secrets/git-ssh-server``

If you previously setup Authoring with Git HTTPS access:

* Copy the ``server.crt`` file from ``kubernetes-deployments/authoring/simple/resources/secrets/git-https-server`` to ``kubernetes-deployments/delivery/simple/resources/secrets/git-https-server``

Please also make sure that you uncomment the Kubernetes configuration lines under ``kubernetes-deployments/delivery/simple`` that start with ``Uncomment if using the Git (HTTPS|SSH) server`` (comment the configuration related to the other protocol).

^^^^^^^^^^^^^^^^^^^^
Start the Deployment
^^^^^^^^^^^^^^^^^^^^
Create the ``craftercms`` namespace if it doesn't exist yet.

   .. code-block:: bash

      ➜  kubectl create namespace craftercms
      namespace/craftercms created

If using ``minikube``, pre-pull the Authoring and OpenSearch images to avoid ``context deadline exceeded`` errors (change ``CRAFTERCMS_VERSION`` for the actual Crafter version, e.g. 4.1.1).

   .. code-block:: bash

      ➜  minikube image pull craftercms/delivery_tomcat:4.0.2
      ➜  minikube image pull opensearchproject/opensearch:2.8.0

Go to ``kubernetes-deployments/delivery/simple`` then run ``kubectl apply -k .``

   .. code-block:: bash

      ➜  kubectl apply -k .
      kubectl apply -k .
      secret/ssh-keys-h5244t449m created
      service/delivery-svc-headless created
      statefulset.apps/delivery created

Check the status of the Delivery StatefulSet by running ``kubectl get -n craftercms deployments``, and the status of the Pods by running ``kubectl get -n craftercms pods``.

   .. code-block:: bash

      ➜  kubectl get -n craftercms statefulsets
      NAME        READY   AGE
      authoring   1/1     20m
      delivery    1/1     2m10s

   .. code-block:: bash

      ➜  kubectl get -n craftercms pods
      NAME          READY   STATUS    RESTARTS   AGE
      authoring-0   4/4     Running   0          21m
      delivery-0    3/3     Running   0          3m25s

Once it comes up, you will see the new pod in ``RUNNING`` status, with 3 containers ``READY``.

You can tail the logs of the ``tomcat`` and ``deployer`` containers, with the ``kubectl`` command:

   .. code-block:: bash

      kubectl logs -n craftercms -f -c CONTAINER_NAME POD_NAME

For example: ``kubectl logs -n craftercms -f -c tomcat authoring-0``

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Bootstrap the Site in Delivery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
You will need to run the ``init-site.sh`` in order to setup the project in Delivery. Either of the following commands will create the Deployer site target and create the index in Elasticsearch.

If Authoring is running with the Git SSH server container:

* Run ``kubectl exec -n craftercms -it delivery-0 --container deployer -- gosu crafter ./bin/init-site.sh -k /opt/crafter/data/ssh/id_rsa SITE_NAME ssh://authoring-svc-headless/opt/crafter/data/repos/sites/SITE_NAME/published``

   .. code-block:: bash

      ➜ kubectl exec -n craftercms -it delivery-0 --container deployer -- gosu crafter ./bin/init-site.sh -k /opt/crafter/data/ssh/id_rsa mysite ssh://authoring-svc-headless/opt/crafter/data/repos/sites/mysite/published
      Creating Deployer Target...
      SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
      SLF4J: Defaulting to no-operation (NOP) logger implementation
      SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
      Target created successfully

  .. include:: /includes/ssh-private-key.rst

If Authoring is running with the Git HTTPS server container:

* Run ``kubectl exec -n craftercms -it delivery-0 --container deployer -- gosu crafter ./bin/init-site.sh -u crafter -p crafter SITE_NAME https://authoring-svc-headless/repos/sites/SITE_NAME/published``

   .. code-block:: bash

      ➜ kubectl exec -n craftercms -it delivery-0 --container deployer -- gosu crafter ./bin/init-site.sh -u crafter -p crafter mysite https://authoring-svc-headless/repos/sites/mysite/published
      Creating Deployer Target...
      SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
      SLF4J: Defaulting to no-operation (NOP) logger implementation
      SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
      Target created successfully

   .. important::
      The example configuration files include the Git HTTPS credentials in plain text, for simplicity. If setting up Delivery in production, make sure to properly create the credentials as Secrets.

After a minute or two, the Deployer should have pulled the project content from Authoring (you can check it by getting the Delivery Deployer log: ``kubectl logs -n craftercms -c deployer delivery-0``).

You can now access the project in Delivery, by forwarding a local port to port 8080 of the pod, with the ``kubectl port-forward`` command:

   .. code-block:: bash

      kubectl port-forward -n craftercms pods/POD_NAME LOCAL_PORT:POD_PORT

Here's an example of forwarding local port 9080 to the 8080 port of the ``delivery-0`` pod:

   .. code-block:: bash

      ➜  kubectl port-forward -n craftercms pods/delivery-0 9080:8080
      Forwarding from 127.0.0.1:9080 -> 8080
      Forwarding from [::1]:9080 -> 8080

We can now view the project in Delivery from the pod by entering ``localhost:9080?crafterSite=mysite`` in your browser.

.. image:: /_static/images/system-admin/simple-delivery-site-in-browser.webp
   :alt: Simple Delivery Kubernetes deployments - Access site in delivery
   :width: 100%
   :align: center

Also, now when making a change in Authoring and publishing it, the change will be reflected in Delivery after a minute.

.. _setup-studio-clustering-with-kubernetes-deployment:

-------------------------------------------------------------------
Setup Studio Clustering with Kubernetes Deployment |enterpriseOnly|
-------------------------------------------------------------------
CrafterCMS has an example Kubernetes deployment for a Studio cluster with 2 nodes, which you can get from https://github.com/craftercms/kubernetes-deployments/tree/master/authoring/cluster. This guide covers how to install this example in a Kubernetes cluster.

.. important::
   This guide assumes you have a working understanding of Kubernetes

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You will need an AWS EKS cluster, with the AWS Load Balancer Controller installed (https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html), in order to use the cluster example as-is.

If you can't use an EKS cluster, your Kubernetes infrastructure needs to provide Load Balancers or some other kind of Ingress that is able to handle an active-passive deployment, where the active pod that should receive all traffic returns
HTTP 200 on its healthcheck, while the passive pods that are on standby return HTTP 202. The Load Balancer should be able to also seamlessly switch between pods when an active becomes passive (200 -> 202) and a passive becomes active (202 -> 200).

Each Authoring cluster node is a StatefulSet Pod in Kubernetes, and requires at least 4 CPUs and 16 GB of space, to avoid performance issues and out of memory errors. So we recommend having Kubernetes nodes of a similar size to the Pod requirements,
in different availability zones, so one Pod runs per availability zone.

If you're using bigger nodes that are capable of running multiple Pods, make sure that the Authoring Pods are spread evenly through availability zones by specifying Pod Affinity/Anti-Affinity (you will need to modify the example configuration):
https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity

^^^^^^^^^^^^^^^^^^^^^^^^
Setup Kubernetes Secrets
^^^^^^^^^^^^^^^^^^^^^^^^
The repository https://github.com/craftercms/kubernetes-deployments/ has a folder set aside for placing required Kubernetes Secrets: ``kubernetes-deployments/authoring/cluster/resources/secrets``

This is where we will place the enterprise license to be used by the images in the deployment. Remember to name your license file ``crafter.lic``

Also, you will need an SSL certificate and private key valid for the Authoring Pods cluster addresses. Each Pod's address is specified in the ``CLUSTER_NODE_ADDRESS`` environment variable in ``authoring.yaml``. In the example, this
value is ``$(POD_NAME).authoring-svc-headless.craftercms``, which is a standard FQDN for a Kubernetes StatefulSet Pod: ``pod-hostname.headless-service-name.namespace``. For more information on Kubernetes DNS, see
https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/.

.. warning::
   Our DB cluster limits the DB node addresses to be no longer than 60 characters, so even though ``$(POD_NAME).authoring-svc-headless.craftercms.svc.cluster.local`` is another cluster node address alternative,
   it can't be used.

In order to generate a valid self-signed SSL certificate, you can do the following:

#. Go into the ``kubernetes-deployments/authoring/cluster/resources/secrets/git-https-server`` folder.
#. Run ``openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`` and follow the prompts. It's up to you what to enter in each field, *EXCEPT* for the Common Name (CN). This should match
   the Pods' base domain name. If following the example, the CN value should be ``*.authoring-svc-headless.craftercms``.

^^^^^^^^^^^^^^^^^
Start the Cluster
^^^^^^^^^^^^^^^^^
Go to ``kubernetes-deployments/authoring/cluster``, then run ``kubectl apply -k .``

This should deploy all necessary resources in Kubernetes. You can monitor the status of the cluster nodes by running ``kubectl get -n craftercms pods``.

Each Pod has 4 containers, and initially only some of those containers will appear as ready:

   .. code-block:: bash

      ➜  ~ kubectl get -n craftercms pods
      NAME          READY   STATUS    RESTARTS   AGE
      authoring-0   1/4     Running   0          21s
      authoring-1   1/4     Running   0          21s

When all containers show as ready (both Pods show ```READY 4/4``), then the cluster is fully initialized:

   .. code-block:: bash

      ➜  ~ kubectl get -n craftercms pods
      NAME          READY   STATUS    RESTARTS   AGE
      authoring-0   4/4     Running   0          8m43s
      authoring-1   4/4     Running   0          8m43s

Another way to monitor the Pods is by tailing the Tomcat container log with the ``kubectl logs -n craftercms -f tomcat authoring-0`` command and look for the ``Server startup in [XXXXX] milliseconds`` message:

   .. code-block:: bash

      [INFO] 2022-10-17T19:59:31,135 [main] [cluster.StudioPrimaryReplicaUtils] | This server is a replica node in a cluster, it will not perform any write                                                                                                                                                                                                                            │
      17-Oct-2022 19:59:31.152 INFO [main] org.apache.catalina.startup.HostConfig.deployWAR Deployment of web application archive [/usr/local/tomcat/webapps/studio.war] has finished in [139,582] ms                                                                                                                                                                                  │
      17-Oct-2022 19:59:31.157 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]                                                                                                                                                                                                                                                         │
      17-Oct-2022 19:59:31.170 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in [168732] milliseconds

^^^^^^^^^^^^^
Access Studio
^^^^^^^^^^^^^
You can easily access Studio through the Authoring load balancer. To get the load balancer address, run ``kubectl get -n craftercms ingress``. The load balancer address is the one in the ``ADDRESS`` column of the ``authoring-ingress``.

.. code-block:: bash

   ➜  ~ kubectl get -n craftercms ingress
   NAME                          CLASS   HOSTS   ADDRESS                                                                            PORTS   AGE
   authoring-git-https-ingress   alb     *       internal-k8s-crafterc-authorin-8830e79fae-1816184747.us-east-1.elb.amazonaws.com   80      24m
   authoring-ingress             alb     *       k8s-crafterc-authorin-2f4ed3b88b-532889167.us-east-1.elb.amazonaws.com             80      24m

^^^^^^^^^^^^^^^^^^^^^^^^^
Setup Delivery (optional)
^^^^^^^^^^^^^^^^^^^^^^^^^
You can use the Delivery Simple example under https://github.com/craftercms/kubernetes-deployments/tree/master/delivery/simple with this Authoring cluster example:

#. The Authoring Cluster example creates an internal load balancer that can be used by the Delivery Deployer to pull the published content from Authoring. The load balancer will need to have a valid domain name and SSL certificate.
   Follow the next steps to setup a DNS record and a certificate for the load balancer in AWS:

   #. Create a Route 53 CNAME record for the domain name. The record needs to be in a Private Hosted Zone (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html), since the load balancer is internal, and
      the zone needs to be associated to the VPC of the EKS cluster where you deployed the Authoring Cluster example. If the hosted zone is in a different account than where the VPC resides, see this guide:
      https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/.

      .. image:: /_static/images/system-admin/clustering-internal-lb-route53-record-wizard.webp
         :alt: Studio Clustering using Kubernetes deployments - Route 53 record for internal load balancer
         :width: 100%
         :align: center

   #. Create a certificate in the AWS Certificate Manager. Enter the domain name used in the previous step and make sure you select DNS validation as the validation method.

      .. image:: /_static/images/system-admin/clustering-internal-lb-certificate-wizard.webp
         :alt: Studio Clustering using Kubernetes deployments - Certificate for internal load balancer
         :width: 100%
         :align: center

   #. Click on the Certificate ID to open the details of the certificate. On the Domains section, you will see a CNAME name and CNAME value. You will need to copy those and create a Route 53 record in the *Public* Hosted Zone (not the Private Hosted Zone
      mentioned previously) of the domain so that the certificate is validated.

      .. image:: /_static/images/system-admin/clustering-internal-lb-certificate-validation-records.webp
         :alt: Studio Clustering using Kubernetes deployments - Certificate for internal load balancer
         :width: 100%
         :align: center

#. In the ``kubernetes-deployments/authoring/cluster/authoring-deployment.yaml`` file, uncomment the commented lines under the ``authoring-git-https-ingress`` configuration, and fill the value of ``alb.ingress.kubernetes.io/certificate-arn`` with the
   ARN of the certificate just created. After that, run ``kubectl apply -k .`` in the folder to apply the changes.

.. code-block:: yaml

   # alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
   # alb.ingress.kubernetes.io/ssl-redirect: '443'
   # alb.ingress.kubernetes.io/certificate-arn: ''

#. Create a project in Authoring and make sure it's fully published
#. Run ``kubectl apply -k .`` in ``kubernetes-deployments/delivery/simple``. Monitor the Pods coming up with ``kubectl get -n craftercms pods``. There should only be one Delivery Pod.
#. After the Delivery Pod has started, run ``kubectl exec -n craftercms -it delivery-0 -c deployer -- gosu crafter bash`` to open a Bash shell to the Deployer container.
#. Run ``./bin/init-site.sh -u crafter -p crafter editorial https://<domain-name>/repos/sites/<site-name>/published`` to create a Deployer target that will pull the published content for the recently created project. Before executing the command, make sure
   to replace ``<domain-name>`` with the internal LB domain name and ``<site-name>`` with the name of the project.

   .. include:: /includes/ssh-private-key.rst

#. Get the Delivery LB address with ``kubectl get -n craftercms ingress`` and access the project by entering ``http://<delivery-lb-address>?crafterSite=<site-name>`` (replacing the ``<>`` placeholders of course).

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Updating and Shutting Down the Cluster
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The Authoring Cluster's ``StatefulSet`` is configured with ``.spec.updateStrategy`` ``OnDelete``. This means that whenever the Kubernetes configuration for the ``StatefulSet`` is updated, you will need to manually delete the Pods to create new Pods in order
for the modifications to be reflected. We prefer this ``updateStrategy`` instead of ``RollingUpdate`` so administrators can restart the cluster replicas first (by killing their Pods), wait for them to come up, and finally restart the primary, whenever a small
update to the configuration needs to be applied (like changing a small flag in one of the Crafter configuration files under ``/opt/crafter/bin/apache-tomcat/shared/classes``).

For bigger updates, like a version upgrade or any other update that could cause modifications to the project content or the database, progressively scaling down the StatefulSet is recommended, by running
``kubectl scale statefulsets authoring --replicas=<current-replicas-minus-1>``, waiting until each Pod has been fully terminated before scaling down again, until all Pods are down. Then you can scale the StatefulSet up to the original number of Pods (so that they can all synchronized on startup).

If you just want to shutdown the entire cluster, scale down the StatefulSet as described above.
