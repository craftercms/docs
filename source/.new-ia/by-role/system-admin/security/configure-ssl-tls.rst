:is-up-to-date: True

.. index:: Configure SSL/TLS, SSL

.. _configure-ssl-tls:

=================
Configure SSL/TLS
=================

To configure SSL/TLS for CrafterCMS authoring and delivery, do the following:

* Step 1: Create a keystore file

  .. code-block:: bash

     $JAVA_HOME/bin/keytool -genkey -alias tomcat -keyalg RSA

  |

* Step 2: Edit the tomcat file to use the keystore file by uncommenting or adding the "SSL HTTP/1.1 Connector" entry

* Step 3: Test your setup

From ``tomcat.apache.org`` :

   Transport Layer Security (TLS) and its predecessor, Secure Sockets Layer (SSL), are technologies which allow web browsers and web servers to communicate over a secured connection. This means that the data being sent is encrypted by one side, transmitted, then decrypted by the other side before processing. This is a two-way process, meaning that both the server AND the browser encrypt all traffic before sending out data.*

CrafterCMS employs two deployment methods, traditional deployment and serverless deployment.  Let's take a look at an example of how to configure SSL/TLS in a traditional deployment and serverless (docker container) deployment:

--------------------------------------------------------------------------------------
Configuring SSL/TLS for CrafterCMS Authoring and Delivery in a Traditional Deployment
--------------------------------------------------------------------------------------

.. _create-keystore-file:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create a keystore file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Java's ``keytool`` file allows the user to create self signed certificates.  For this example, we will be using a self signed certificate.  Please remember that self signed certificates are not suitable for production use.

.. code-block:: bash

   $JAVA_HOME/bin/keytool -genkey -alias tomcat -keyalg RSA

   Enter keystore password:  password (it will be invisible)
   Re-enter new password: password
   What is your first and last name?
     [Unknown]:  {FIRST_LAST_NAME}
   What is the name of your organizational unit?
     [Unknown]:  {ORGANIZATIONAL_UNIT}
   What is the name of your organization?
     [Unknown]:  {ORGANIZATION_NAME}
   What is the name of your City or Locality?
     [Unknown]:  {CITY}
   What is the name of your State or Province?
     [Unknown]:  {STATE_PROVINCE}
   What is the two-letter country code for this unit?
     [Unknown]:  {COUNTRY_CODE}
   Is CN={FIRST_LAST_NAME}, OU={ORGANIZATIONAL_UNIT}, O={ORGANIZATION_NAME}, L={CITY}, ST={STATE_PROVINCE}, C={COUNTRY_CODE} correct?
     [no]:  yes

   Enter key password for
       (RETURN if same as keystore password):  password
   Re-enter new password: password

|

The command above will generate a file named ``.keystore`` in the users home directory.  Take note of the location as it will be used in the next step.

.. _use-keystore-file-in-tomcat:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 2: Configure tomcat to use the keystore file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The next step is to configure SSL/TLS Connector in the authoring/delivery tomcat file by uncommenting/adding the following:

.. code-block:: xml
    :caption: CRAFTER_HOME/bin/apache-tomcat/conf/server.xml
    :linenos:

    <Connector port="8443"
      SSLEnabled="true"
      clientAuth="false"
      maxThreads="150"
      protocol="org.apache.coyote.http11.Http11NioProtocol"
      keystoreFile="/path/to/your/keystore"
      keystorePass="yourKeystorePassword"
      scheme="https"
      secure="true"
      sslProtocol="TLS"
    />

where:

* **port** : port number to be secured by your new keystore file
* **keystoreFile** : path to your keystore file created from the previous step
* **keystorePass** : password used when keystore file was created from the previous step

We'll use the above values for our CrafterCMS authoring example.  Save the changes and restart CrafterCMS authoring/delivery.

For more information on configuring SSL/TLS on Tomcat, see https://tomcat.apache.org/tomcat-8.5-doc/ssl-howto.html

.. _ssl-test-your-setup:

^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Test your setup
^^^^^^^^^^^^^^^^^^^^^^^

To test your CrafterCMS authoring, open your browser and type in:

   *localhost:8443/studio*

Since we are using a self-signed certificate, you'll get a message similar to this depending on your browser:

.. figure:: /_static/images/system-admin/ssl-connection-not-private.png
    :alt: Connection not private message using a self signed certificate
    :width: 80 %
    :align: center

From the above screen, just click on ``Advanced``, then allow it to proceed to ``localhost::8443``, and you will then be taken to the login screen of Crafter Studio

.. figure:: /_static/images/system-admin/ssl-login-not-secure.png
    :alt: Connection not private message using a self signed certificate
    :width: 90 %
    :align: center

|

-------------------------------------------------------------------------------
Configuring SSL/TLS for CrafterCMS Authoring and Delivery in a Docker Container
-------------------------------------------------------------------------------

Setting up SSL/TLS for CrafterCMS authoring and delivery in a Docker Container is similar to the steps done for CrafterCMS Authoring and Delivery installed in a server, which just a few differences.

* Step 1: Create a keystore file

  .. code-block:: bash

     $JAVA_HOME/bin/keytool -genkey -alias tomcat -keyalg RSA

  |

* Step 2: Edit the tomcat file to use the keystore file by uncommenting or adding the "SSL HTTP/1.1 Connector" entry

* Step 3: Edit your ``docker-compose.yml`` file to setup connector port and certificate

* Step 4: Test your setup

Let's take a look at an example of a CrafterCMS authoring running in a docker container.  For reference, here's the instruction for  :ref:`running-craftercms-in-docker`

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create keystore file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Follow the step above :ref:`create-keystore-file` to create your keystore file.  For convenience, copy the ``.keystore`` file where your ``docker-compose.yml`` files is, so your directory structure looks like:

.. code-block:: text

   CrafterCMS authoring
     |-- docker-compose.yml
     |-- .keystore

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 2: Configure tomcat to use the keystore file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get a copy of the ``server.xml`` file from your container by running the following command:

.. code-block:: bash

   docker cp tomcat_1:/opt/crafter/bin/apache-tomcat/conf/server.xml .

|

The command above will copy the ``server.xml`` file from your docker container to your current directory.
Follow the step above :ref:`use-keystore-file-in-tomcat` to configure SSL/TLS Connector in the ``server.xml`` file you just copied from the docker container.

Your directory should now contain the following:

.. code-block:: text

   CrafterCMS authoring
     |-- docker-compose.yml
     |-- .keystore
     |-- server.xml

|

See https://docs.docker.com/engine/reference/commandline/cp/ for more information on ``docker cp``

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Setup connector port and keystore file in docker-compose.yml
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
In your ``docker-compose.yml`` file, under ``tomcat``:

* Add port ``8443``
* Add the keystore file and the edited ``server.xml`` file to volumes

Your ``docker-compose.yml`` should look like below:

.. code-block:: yaml
   :linenos:
   :emphasize-lines: 25, 33-35

   version: '3.7'
    services:
      elasticsearch:
        image: docker.elastic.co/elasticsearch/elasticsearch:6.6.0
        ports:
          - 9201:9200
        environment:
          - discovery.type=single-node
          - bootstrap.memory_lock=true
          - "ES_JAVA_OPTS=-Xss1024K -Xmx1G"
        ulimits:
          memlock:
            soft: -1
            hard: -1
        volumes:
          - elasticsearch_data:/usr/share/elasticsearch/data
          - elasticsearch_logs:/usr/share/elasticsearch/logs
      tomcat:
        image: craftercms/authoring_tomcat:3.1.3 # craftercms version flag
        depends_on:
          - elasticsearch
          - deployer
        ports:
          - 8080:8080
          - 8443:8443
        volumes:
          - crafter_data:/opt/crafter/data
          - crafter_logs:/opt/crafter/logs
          - crafter_temp:/opt/crafter/temp
          # Elastic Search dirs needed for backup/restore
          - elasticsearch_data:/opt/crafter/data/indexes-es
          - elasticsearch_logs:/opt/crafter/logs/elasticsearch
          # SSL/TLS certificate
          - ./.keystore:/etc/ssl/certs/.keystore
          - ./server.xml:/opt/crafter/bin/apache-tomcat/conf/server.xml
        environment:
          - DEPLOYER_HOST=deployer
          - DEPLOYER_PORT=9191
          - ES_HOST=elasticsearch
          - ES_PORT=9200

|

Restart your docker container.

^^^^^^^^^^^^^^^^^^^^^^^
Step 4: Test your setup
^^^^^^^^^^^^^^^^^^^^^^^

To test your CrafterCMS authoring, open your browser and type in:

   *localhost:8443/studio*

You should see similar screens as shown :ref:`above<ssl-test-your-setup>` when we setup SSL/TLS for a traditional deployment.

