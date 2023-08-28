:is-up-to-date: True
:last-updated: 4.1.2

.. index:: Security, SAML, LDAP, Header-based, Headers-based, Headers Based, Authentication, Password, SSL, TLS, HTTPS, Secrets, Managing Secrets, External Secrets, Internal Secrets, Encryption, Encrypting Text in a Configuration File

========
Security
========
.. contents::
   :local:
   :depth: 1

.. _change-the-defaults:

-------------------
Change the Defaults
-------------------
CrafterCMS installations are pre-configured with default passwords, tokens, keys, etc. These default values are intended for initial testing, installation and configuration. We recommend changing the default values for the following parameters to secure your CrafterCMS installation:

* Replace default values for configuration files encryption key and salt

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- Encryption variables --------------------
        # These variables are used to encrypt and decrypt values inside the configuration files.
        export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encryption_key"}
        export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encryption_salt"}

     |

* Replace the default values for database values encryption key and salt. Remember that these values should **not** be changed after CrafterCMS has been started if the installation has one or more of the following:

  * Remote repository passwords and keys
  * Cluster passwords and keys

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # These variables are used by Studio to encrypt and decrypt values in the database.
        export CRAFTER_SYSTEM_ENCRYPTION_KEY=${CRAFTER_SYSTEM_ENCRYPTION_KEY:="s0meDefaultKey"}
        export CRAFTER_SYSTEM_ENCRYPTION_SALT=${CRAFTER_SYSTEM_ENCRYPTION_SALT:="s0meDefaultSalt"}

     |

* Replace default values for the management tokens used by Studio, Engine, Deployer, Search, Profile and Social

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- Management tokens ----------------
        # Please update this per installation and provide these tokens to the status monitors.
        export STUDIO_MANAGEMENT_TOKEN=${STUDIO_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export ENGINE_MANAGEMENT_TOKEN=${ENGINE_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export DEPLOYER_MANAGEMENT_TOKEN=${DEPLOYER_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export SEARCH_MANAGEMENT_TOKEN=${SEARCH_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export PROFILE_MANAGEMENT_TOKEN=${PROFILE_MANAGEMENT_TOKEN:="defaultManagementToken"}/*
        export SOCIAL_MANAGEMENT_TOKEN=${SOCIAL_MANAGEMENT_TOKEN:="defaultManagementToken"}

     |

* Replace default values for the DB root password, the DB ``crafter`` user password and the DB replication user password (if running in a primary/replica cluster) before starting CrafterCMS for the very first time.

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- MariaDB variables --------------------
        ...
        export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:="root"}
        ...
        export MARIADB_PASSWD=${MARIADB_PASSWD:="crafter"}
        ...
        export MARIADB_REPLICATION_PASSWD=${MARIADB_REPLICATION_PASSWD:="crafter_replication"}

     |

  To change the values after the initial start of CrafterCMS, do the following:

  #. Manually change the DB passwords

     First, login to the database as root. From the command line in the server, go to ``CRAFTER_HOME/bin/dbms/bin`` and run the following command:

       .. code-block:: bash

          /mysql -u root -p --socket=/tmp/MariaDB4j.33306.sock

       |

     To change the ``root`` password, run the following command:

       .. code-block:: bash

          ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';

       |

     Remember to replace ``MyNewPass`` with the actual password you want to set, and if you are connecting to the DB from another host, change ``localhost`` with the remote hostname or IP address.

     To change the ``crafter`` user password, run the following command, similar to changing the root password.

       .. code-block:: bash

          ALTER USER 'crafter'@'localhost' IDENTIFIED BY 'MyNewCrafterPass';

       |

     Again, remember to replace ``MyNewCrafterPass`` with the actual password you want to set, and if you are connecting to the DB from another host, change ``localhost`` with the remote hostname or IP address.

     To change the ``crafter_replication`` replication user password, run the following command, similar to changing the root password.

       .. code-block:: bash

          ALTER USER 'crafter_replication'@'localhost' IDENTIFIED BY 'MyNewReplicationPass';

       |

     Again, remember to replace ``MyNewReplicationPass`` with the actual password you want to set, and if you are connecting to the DB from another host, change ``localhost`` with the remote hostname or IP address.

  #. Stop Studio
  #. Update the values in the configuration file ``crafter-setenv.sh`` with the new password used in the previous step

       .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- MariaDB variables --------------------
        ...
        export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:="MyNewPass"}
        ...
        export MARIADB_PASSWD=${MARIADB_PASSWD:="MyNewCrafterPass"}

     |

  #. Restart Studio

* Change the default Studio ``admin`` user password either by randomizing the ``admin`` password for a fresh install of Crafter Studio or by changing the password after logging in as user ``admin``. For more information on randomizing the admin password for a fresh install, see :ref:`randomize-admin-password`. For more information on changing user passwords, see :ref:`user-passwords`

* Set session cookies as ``HTTP Only`` and ``Secure`` by setting the flags to ``true`` in your tomcat ``web.xml`` file

  .. code-block:: xml
     :caption: *CRAFTER_HOME/bin/apache-tomcat/conf/web.xml*
     :emphasize-lines: 3-6
     :linenos:

     <session-config>
       <session-timeout>1</session-timeout>
       <cookie-config>
         <http-only>true</http-only>
         <secure>true</secure>
       </cookie-config>
     </session-config>

* Replace default values for all the variables used to control the access tokens used for Studio's API

  .. code-block:: sh
     :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*
     :linenos:
     :emphasize-lines: 16-19

     # -------------------- Studio's access tokens ---------------------
     # *************************************************************************************
     # ************************* IMPORTANT *************************************************
     # The following variables are used to control the access tokens used for Studio's API,
     # please replace all default values to properly secure your installation
     # *************************************************************************************

     # Issuer for the generated access tokens
     export STUDIO_TOKEN_ISSUER=${STUDIO_TOKEN_ISSUER:="Crafter Studio"}
     # List of accepted issuers for validation of access tokens (separated by commas)
     export STUDIO_TOKEN_VALID_ISSUERS=${STUDIO_TOKEN_VALID_ISSUERS:="Crafter Studio"}
     # The audience for generation and validation of access tokens (if empty the instance id will be used)
     export STUDIO_TOKEN_AUDIENCE=${STUDIO_TOKEN_AUDIENCE:=""}
     # Time in minutes for the expiration of the access tokens
     export STUDIO_TOKEN_TIMEOUT=${STUDIO_TOKEN_TIMEOUT:=5}
     # Password for signing the access tokens (needs to be equal or greater than 512 bits in length)
     export STUDIO_TOKEN_SIGN_PASSWORD=${STUDIO_TOKEN_SIGN_PASSWORD:="s0meDefaultTokenSignPasswd"}
     # Password for encrypting the access tokens
     export STUDIO_TOKEN_ENCRYPT_PASSWORD=${STUDIO_TOKEN_ENCRYPT_PASSWORD:="s0meDefaultTokenEncryptPasswd"}
     # Name of the cookie to store the refresh token
     export STUDIO_REFRESH_TOKEN_NAME=${STUDIO_REFRESH_TOKEN_NAME:="refresh_token"}
     # Time in seconds for the expiration of the refresh token cookie
     export STUDIO_REFRESH_TOKEN_MAX_AGE=${STUDIO_REFRESH_TOKEN_MAX_AGE:=300}
     # Indicates if the refresh token cookie should be secure (should be true for production environments behind HTTPS)
     export STUDIO_REFRESH_TOKEN_SECURE=${STUDIO_REFRESH_TOKEN_SECURE:="false"}

.. _configure-ssl-tls:

-----------------
Configure SSL/TLS
-----------------
To configure SSL/TLS for CrafterCMS authoring and delivery, do the following:

* Step 1: Create a keystore file

  .. code-block:: bash

     $JAVA_HOME/bin/keytool -genkey -alias tomcat -keyalg RSA

  |

* Step 2: Edit the tomcat file to use the keystore file by uncommenting or adding the "SSL HTTP/1.1 Connector" entry

* Step 3: Test your setup

From ``tomcat.apache.org`` :

   Transport Layer Security (TLS) and its predecessor, Secure Sockets Layer (SSL), are technologies which allow web browsers and web servers to communicate over a secured connection. This means that the data being sent is encrypted by one side, transmitted, then decrypted by the other side before processing. This is a two-way process, meaning that both the server AND the browser encrypt all traffic before sending out data.*

CrafterCMS employs two deployment methods, traditional deployment and serverless deployment. Let's take a look at an example of how to configure SSL/TLS in a traditional deployment and serverless (docker container) deployment:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring SSL/TLS for CrafterCMS Authoring and Delivery in a Traditional Deployment with Tomcat
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. _create-keystore-file:

""""""""""""""""""""""""""""""
Step 1: Create a Keystore file
""""""""""""""""""""""""""""""
Java's ``keytool`` file allows the user to create self signed certificates. For this example, we will be using a self signed certificate. Please remember that self signed certificates are not suitable for production use.

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

The command above will generate a file named ``.keystore`` in the users home directory. Take note of the location as it will be used in the next step.

.. _use-keystore-file-in-tomcat:

"""""""""""""""""""""""""""""""""""""""""""""""""
Step 2: Configure Tomcat to use the Keystore file
"""""""""""""""""""""""""""""""""""""""""""""""""
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

We'll use the above values for our CrafterCMS authoring example. Save the changes and restart CrafterCMS authoring/delivery.

For more information on configuring SSL/TLS on Tomcat, see https://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html

.. _ssl-test-your-setup:

"""""""""""""""""""""""
Step 3: Test your setup
"""""""""""""""""""""""
To test your CrafterCMS authoring, open your browser and type in:

   https://localhost:8443/studio

Since we are using a self-signed certificate, you'll get a message similar to this depending on your browser:

.. figure:: /_static/images/system-admin/ssl-connection-not-private.webp
    :alt: Connection not private message using a self signed certificate
    :width: 80 %
    :align: center

From the above screen, just click on ``Advanced``, then allow it to proceed to ``localhost::8443``, and you will then be taken to the login screen of Crafter Studio

.. figure:: /_static/images/system-admin/ssl-login-not-secure.webp
    :alt: Connection not private message using a self signed certificate
    :width: 90 %
    :align: center

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring SSL/TLS for CrafterCMS Authoring and Delivery in a Traditional Deployment with Apache HTTPd
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To configure SSL/TLS for CrafterCMS authoring and delivery in a traditional deployment with Apache HTTPd, follow the steps detailed at https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring SSL/TLS for CrafterCMS Authoring and Delivery via a CDN
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

SSL/TLS can also be configured at the CDN, here is an example of doing that using AWS CloudFront https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring SSL/TLS for CrafterCMS Authoring and Delivery in a Containerized Deployment
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setting up SSL/TLS for CrafterCMS authoring and delivery in a Docker Container is similar to the steps done for CrafterCMS Authoring and Delivery installed in a server, which just a few differences.

* Step 1: Create a keystore file

  .. code-block:: bash

     $JAVA_HOME/bin/keytool -genkey -alias tomcat -keyalg RSA

  |

* Step 2: Edit the tomcat file to use the keystore file by uncommenting or adding the "SSL HTTP/1.1 Connector" entry

* Step 3: Edit your ``docker-compose.yml`` file to setup connector port and certificate

* Step 4: Test your setup

Let's take a look at an example of a CrafterCMS authoring running in a docker container. For reference, here's the instruction for  :ref:`running-craftercms-in-docker`

""""""""""""""""""""""""""""""""
Step 1: Create the Keystore file
""""""""""""""""""""""""""""""""

Follow the step above :ref:`create-keystore-file` to create your keystore file. For convenience, copy the ``.keystore`` file where your ``docker-compose.yml`` files is, so your directory structure looks like:

.. code-block:: text

   CrafterCMS authoring
     |-- docker-compose.yml
     |-- .keystore

|

"""""""""""""""""""""""""""""""""""""""""""""""""
Step 2: Configure Tomcat to use the Keystore file
"""""""""""""""""""""""""""""""""""""""""""""""""
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

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 3: Setup connector port and Keystore file in docker-compose.yml
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
In your ``docker-compose.yml`` file, under ``tomcat``:

* Add port ``8443``
* Add the keystore file and the edited ``server.xml`` file to volumes

Your ``docker-compose.yml`` should look like below:

.. code-block:: yaml
   :linenos:
   :emphasize-lines: 25, 33-35

   version: '3.7'
    services:
      search:
      image: opensearchproject/opensearch:2.8.0
      ports:
        - 9201:9200
      environment:
        - discovery.type=single-node
        - bootstrap.memory_lock=true
        - plugins.security.disabled=true
        - "ES_JAVA_OPTS=-Xss1024K -Xmx1G"
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - search_data:/usr/share/opensearch/data
        - search_logs:/usr/share/opensearch/logs

      tomcat:
        image: craftercms/authoring_tomcat:4.1.1 # craftercms version flag
        depends_on:
          - search
          - deployer
        ports:
          - 8080:8080
          - 8443:8443
        volumes:
          - crafter_data:/opt/crafter/data
          - crafter_logs:/opt/crafter/logs
          - crafter_temp:/opt/crafter/temp
          # Search dirs needed for backup/restore
          - search_data:/opt/crafter/data/indexes
          # SSL/TLS certificate
          - ./.keystore:/etc/ssl/certs/.keystore
          - ./server.xml:/opt/crafter/bin/apache-tomcat/conf/server.xml
        environment:
          - DEPLOYER_HOST=deployer
          - DEPLOYER_PORT=9191
          - ES_HOST=search
          - ES_PORT=9200

|

Restart your Docker container.

"""""""""""""""""""""""
Step 4: Test your setup
"""""""""""""""""""""""
To test your CrafterCMS authoring, open your browser and type in:

   https://localhost:8443/studio

You should see similar screens as shown :ref:`above<ssl-test-your-setup>` when we setup SSL/TLS for a traditional deployment.

.. _managing-secrets:

----------------
Managing Secrets
----------------
There are a number of ways to manage secrets with CrafterCMS. The following sections describe the different options.

.. note::
        A note on avoiding secrets.
        Whenever possible, storing secrets should be avoided as a best practice. For example, if you're deploying to AWS or similar, it's possible to have role-based authentication and authorization at the service level and avoid having to store secrets related to said service in configuration files.

^^^^^^^^^^^^^^^^
External Secrets
^^^^^^^^^^^^^^^^
CrafterCMS supports the use of external secrets. This means that you can store your secrets in a separate location
and use these secrets in your configuration files. This is the recommended approach whenever possible.

For example, you can use AWS Secrets and solicit the secrets. You can also use a Vault server to store your secrets.
Secrets can then be injected into CrafterCMS via environment variables or system properties.

.. TODO: Show an example where secrets get injected via `crafter-setenv.sh`

^^^^^^^^^^^^^^^^
Internal Secrets
^^^^^^^^^^^^^^^^
When external secrets are not possible, CrafterCMS supports the use of encrypted internal secrets. This means that
you can store your secrets in the configuration files themselves, and these secrets will be encrypted.

.. note::
    The encryption keys are configurable and can be different per environment, having different keys for development,
    staging, and production environments.

CrafterCMS has a number of ways to encrypt secrets:

- Automatic encryption of secrets in configuration files
- Studio UI encryption tool

    - Project-level encryption tool
    - Admin UI encryption tool
- CLI encryption tool

""""""""""
Encryption
""""""""""
Encrypting secrets can be done automatically within Studio-managed configuration files, via the UI, or using a CLI.

The encryption algorithm used is PBE (Password Based Encryption) with AES, in which a key and a salt are
specified to generate the key used on encryption/decryption.

For encryption via Studio-managed configuration files and via the UI, Crafter Studio uses a default key and salt
for the encryption tool. To set the key and salt to desired values, in your Authoring installation directory,
open ``CRAFTER_HOME/bin/crafter-setenv.sh`` and modify the following values

.. code-block:: bash
   :caption: *CRAFTER_HOMEbin/crafter-setenv.sh*

   # -------------------- Encryption variables --------------------
   export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encrytption_key"}
   export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encrytption_salt"}

|


.. _encrypting-text-in-a-configuration-file:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Automatic Encryption of Secrets in Configuration Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This section details how to encrypt passwords, access keys or other sensitive information in a configuration file
managed through Crafter Studio.

Examples of project configuration files where encryption would make sense include:

 - Engine Project Configuration (``/config/engine/site-config.xml``)
 - Studio AWS Profiles (``/config/studio/aws/aws.xml``)
 - Studio Box Profiles (``/config/studio/box/box.xml``)
 - Studio WebDAV Profiles (``/config/studio/webdav/webdav.xml``)

'''''''''''''''''''''''''''''''''''''''''
How to Encrypt Text in Configuration File
'''''''''''''''''''''''''''''''''''''''''
To encrypt passwords, access keys or other sensitive information in a configuration file managed through Crafter Studio:

* Open the configuration file that has the text/information that you would like to encrypt
* Find the entry you would like to encrypt and add the attribute ``encrypted=""``
* Click on the ``Encrypt Marked`` button to encrypt text
* Your sensitive text should now be encrypted and displayed with the attribute ``encrypted="true"`` and you may now save your file

'''''''
Example
'''''''
Let's take a look at an example of encrypting the ``accessKey`` and ``securityKey`` for the AWS Profiles configuration.

* Open the ``AWS Profiles`` configuration file by clicking on |projectTools| -> ``Configuration``, then select ``AWS Profiles`` from the dropdown box
* We will add an ``AWS S3 profile``. Notice that the ``accessKey`` and ``secureKey`` is in the clear.

  .. code-block:: xml
     :caption: *{REPOSITORY_ROOT}/sites/SITENAME/config/studio/aws/aws.xml*
     :linenos:
     :emphasize-lines: 20,21

     <?xml version="1.0" encoding="UTF-8"?>
     <aws>
       <s3>
       <!--

       AWS S3 Profile

       Additional properties:

       <bucketName/>
       <pathStyleAccess/>

       bucketName: name of the bucket where files will be uploaded
       pathStyleAccess: indicates if path style access should be used for all requests (defaults to false)

       -->
         <profile>
           <id>s3-default</id>
             <credentials>
             <accessKey>YOUR_ACCESS_KEY</accessKey>
             <secretKey>YOUR_SECRET_KEY</secretKey>
           </credentials>
           <region>us-west-1</region>
           <bucketName>sample-input-bucket</bucketName>
           <pathStyleAccess>true</pathStyleAccess>
         </profile>
       </s3>
     </aws>

* We will now mark items to be encrypted by adding the attribute ``encrypted=""``. For our example, we will mark ``accessKey`` and ``secretKey`` for encryption.

  .. code-block:: xml
     :caption: *{REPOSITORY_ROOT}/sites/SITENAME/config/studio/aws/aws.xml*

     <accessKey encrypted="">YOUR_ACCESS_KEY</accessKey>
     <secretKey encrypted="">YOUR_SECRET_KEY</secretKey>

  |

  .. image:: /_static/images/site-admin/config-encrypt-text-1.webp
     :align: center
     :alt: Add "encrypted=""" attribute to "accessKey" and "secureKey"

  |

* Click on the ``Encrypt Marked`` button to encrypt the marked items, the attribute for the marked items will change to ``encrypted="true"``:

  .. code-block:: xml
     :caption: *{REPOSITORY_ROOT}/sites/SITENAME/config/studio/aws/aws.xml*

     <accessKey encrypted="true">${enc:ENCRYPTED_ACCESS_KEY}</accessKey>
     <secretKey encrypted="true">${enc:ENCRYPTED_SECRET_KEY}</secretKey>

  |

  .. image:: /_static/images/site-admin/config-encrypt-text-2.webp
     :align: center
     :alt: "accessKey" and "secureKey" now encrypted

  |

* The ``accessKey`` and ``secureKey`` is now encrypted and will be decrypted by Crafter Studio as needed

|hr|

.. _studio-encryption-tool:

~~~~~~~~~~~~~~~~~~~~~~~~~
Studio UI Encryption Tool
~~~~~~~~~~~~~~~~~~~~~~~~~
Crafter Studio provides an encryption tool for encrypting configuration properties like access keys or password, to keep these sensitive data, available only to developers and administrators.

There are two ways to access the encryption tools in Studio. Via Studio's ``Navigation Menu`` and a project's ``Project Tools``

To access the encryption tool via Studio's ``Navigation Menu``, from the top right of your browser, click on the ``Navigation Menu`` icon |mainMenu|, then click on ``Encryption Tool`` under *Global*.

.. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool.webp
    :alt: System Administrator - Main Menu Encryption Tool
    :align: center
    :width: 100%

|

To access the encryption tool from a project's ``Project Tools``, open the Sidebar and click on |projectTools|,
then click on ``Encryption Tool``.

.. image:: /_static/images/system-admin/project-tools-encryption-tool.webp
    :alt: Project Tools - Encryption Tool
    :align: center
    :width: 80%

|

To encrypt a password, access key, etc., simply enter the password, access key, etc. in the ``Raw Text`` field, then click on ``Encrypt Text``. This will generate the encrypted password, access key, etc. that you then simply need to paste in the configuration file.

Crafter Studio also provides the encryption tool to encrypt passwords, access keys or other sensitive information in a configuration file managed through Crafter Studio in |projectTools| -> ``Configuration``. See :ref:`encrypting-text-in-a-configuration-file` for more information.

'''''''
Example
'''''''
Let's take a look at an example of using the Studio encryption tool to encrypt a password. From the ``Navigation Menu``, click on ``Global Config`` and scroll down to the ``SMTP Configuration (Email)`` section. We're going to encrypt the value for ``studio.mail.password:``

.. code-block:: yaml
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*
   :emphasize-lines: 13

   ##################################################
   ##        SMTP Configuration (Email)            ##
   ##################################################
   # Default value for from header when sending emails.
   # studio.mail.from.default: admin@example.com
   # SMTP server name to send emails.
   # studio.mail.host: ${env:MAIL_HOST}
   # SMTP port number to send emails.
   # studio.mail.port: ${env:MAIL_PORT}
   # SMTP username for authenticated access when sending emails.
   # studio.mail.username:
   # SMTP password for authenticated access when sending emails.
   # studio.mail.password:
   # Turn on/off (value true/false) SMTP authenticated access protocol.
   # studio.mail.smtp.auth: false
   # Enable/disable (value true/false) SMTP TLS protocol when sending emails.
   # studio.mail.smtp.starttls.enable: false
   # Enable/disable (value true/false) SMTP EHLO protocol when sending emails.
   # studio.mail.smtp.ehlo: true
   # Enable/disable (value true/false) debug mode for email service. Enabling debug mode allows tracking/debugging communication between email service and SMTP server.
   # studio.mail.debug: false

|

Let's begin:

#. Encrypt the password

   * To encrypt the ``studio.mail.password``, click on |mainMenu|, then click on ``Encryption Tool``
   * Enter the password in the ``Raw Text`` field

     .. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool-raw-text.webp
        :alt: System Administrator - Main Menu Encryption Tool Enter Raw Text
        :align: center
        :width: 70%

   * Click on the ``Encrypt Text`` button. The encrypted text will be displayed below the ``Raw Text`` field and copied onto the clipboard

     .. image:: /_static/images/system-admin/main-menu/main-menu-encryption-text-encrypted.webp
        :alt: System Administrator - Main Menu Encryption Tool Text Encrypted
        :align: center
        :width: 70%

#. Use the encrypted password

   * Click on |mainMenu|, then click on ``Global Config`` and scroll down to the ``SMTP Configuration (Email)`` section.
   * Paste the encrypted password

     .. code-block:: yaml
        :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

        # SMTP password for authenticated access when sending emails.
        studio.mail.password: ${enc:q2gqrm8R6Z0Xg77J6wzHH4i4qqMSlrcFcSkshS+RZ9s=}

     |

#. Your password is now encrypted and will be decrypted by Crafter Studio as needed.

|hr|

.. _crafter-commons-encryption-tool:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Command Line Interface (CLI) Encryption Tool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Crafter Commons provides a command line tool that can be used to encrypt/decrypt text. It's especially useful for encrypting
values that will be used in configuration files. The encryption algorithm used is PBE (Password Based Encryption) with AES,
in which a password and a salt are specified to generate the key used on encryption/decryption.

Using the tool is very simple. First build the Crafter Commons source code and go to the ``target`` folder of the ``utilities``
sub-module, where you should find the JAR with the ``-enctool`` suffix. Then you can run any of the following commands:

- **Encode text in Base 64:** ``java -jar {JARNAME} -e64 CLEAR_TEXT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -e64 KniOddyi
		Encoded text in Base 64: S25pT2RkeWk=

- **Encrypt text:** ``java -jar {JARNAME} -e CLEAR_TEXT -p PASSWORD -s BASE64_SALT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -e c852cb30cda311e488300800200c9a66 -p klanFogyetkonjo -s S25pT2RkeWk=
		Cipher text (in Base 64): VkHxBsaSZ9DXrXk52uK9And+CEZlqiy7Wb23GxBFOSXD6KBOCh1ojp8fUw7w11IxpxBipiI4HsSg3cdl9TgTQg==

""""""""""
Decryption
""""""""""
CrafterCMS will automatically decrypt secrets as it needs them. If, however, you wanted to decrypt a secret manually you can use the CLI encryption/decryption tool:

- **Decode Base 64 text:** ``java -jar {JARNAME} -d64 BASE64_TEXT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -d64 S25pT2RkeWk=
		Decoded Base 64 text: KniOddyi

- **Decrypt text:** ``java -jar {JARNAME} -d CIPHER_TEXT -p PASSWORD -s BASE64_SALT``

  .. code-block:: bash

	 java -jar crafter-commons-utilities-3.0.1-enctool.jar -d VkHxBsaSZ9DXrXk52uK9And+CEZlqiy7Wb23GxBFOSXD6KBOCh1ojp8fUw7w11IxpxBipiI4HsSg3cdl9TgTQg== -p klanFogyetkonjo -s S25pT2RkeWk=
	 Clear text: c852cb30cda311e488300800200c9a66

.. _configuring-studio-security:

-------------------------
Configure Studio Security
-------------------------
Users are authenticated by Studio through the internal database by default. CrafterCMS can be configured so that users are authenticated using an external authentication protocol such as Lightweight Directory Access Protocol (LDAP), Security Assertion Markup Language (SAML), or integrate with any Single-Sign-On (SSO) solution that can provide headers to Studio to indicate successful authentication.

Here's a list of security providers supported by CrafterCMS for accessing the repository:

- :ref:`Studio SAML security <crafter-studio-configure-studio-saml>` |enterpriseOnly|
- :ref:`Header-Based (use when authenticating via headers) <crafter-studio-configure-header-based-auth>` |enterpriseOnly|
- :ref:`LDAP (users are imported from LDAP into the database) <crafter-studio-configure-ldap>` |enterpriseOnly|
- Internal database (users are stored in database)

To configure an external authentication method, please follow one of the guides below:

When using an external authentication method, user accounts are automatically created in the internal database upon each user's first successful login, using the attributes from the responses received. Users added to the internal database after the user's first successful login through external authentication are marked as **Externally Managed**.

.. _configure-authentication-chain:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Authentication Chain
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

CrafterCMS supports multiple security providers and allows configuration of multiple authentication providers in a chain that are then iterated through until either the user is authenticated and granted access or authentication fails and an HTTP 401 Unauthorized is returned to the user. This allows Studio to support multiple security providers that appears like a single authentication module to users.

The following authentication providers can be configured in a chain:

    - Headers
    - LDAP
    - Internal database

.. note:: SAML2 authentication cannot be configured in a chain. SAML2 authentication is a standalone authentication provider.

When an authentication chain is configured, when a user logs in, Studio will try to authenticate the user using the first security provider in the chain as defined in the :ref:`studio-config-override.yaml <studio-configuration-files>` file. If authentication fails, it will then move on to the next authentication provider in the list and try to authenticate the user again. It will continue moving on to the next security provider in the chain until the user is authenticated or the authentication fails.

To setup the authentication chain, open the file ``studio-config-override.yaml`` under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension``. Another way to access the ``studio-config-override.yaml`` file is by clicking on the |mainMenu| **Main Menu** from the context nav in Studio, then clicking on ``Global Config``.

Below is a sample configuration for the authentication chain. There are four authentication providers in the example below: (1) Headers Authentication (2) LDAP1 (3) LDAP2 (4) Internal database

.. code-block:: yaml
    :linenos:

      # Studio authentication chain configuration
      studio.authentication.chain:
      # Authentication provider type
      - provider: HEADERS
      # Authentication via headers enabled
        enabled: true
        # Authentication header for secure key
        secureKeyHeader: secure_key
        # Authentication headers secure key that is expected to match secure key value from headers
        # Typically this is placed in the header by the authentication agent
        secureKeyHeaderValue: secure
        # Authentication header for username
        usernameHeader: username
        # Authentication header for first name
        firstNameHeader: firstname
        # Authentication header for last name
        lastNameHeader: lastname
        # Authentication header for email
        emailHeader: email
        # Authentication header for groups: comma separated list of groups
        #   Example:
        #   site_author,site_xyz_developer
        groupsHeader: groups
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: false
        # LDAP Server url
        ldapUrl: ldap://localhost:389
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # Authentication header for email
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: false
        # LDAP Server url
        ldapUrl: ldap://localhost:390
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # Authentication header for email
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0
      # Authentication provider type
      - provider: DB
        # Authentication via DB enabled
        enabled: true

|

In the configuration above, when a user tries to authenticate, the user's credentials will be passed first to the headers authentication provider. If the authentication succeeds, the processing in the chain is done and the user is allowed to proceed. If the authentication fails, the user credentials will then be passed to LDAP1. If authentication is successful, processing in the chain is done, otherwise, the user credentials are then passed on to LDAP2. LDAP2 will then try to authenticate user. If successful, processing in the chain is done, otherwise, the user credentials are then passed to the final provider in the chain, the internal database. The final provider in the chain then determines whether the user is successfully authenticated or rejected and sent an HTTP 401 Unauthorized message. Below is a diagram showing the authentication chain process using the above configuration:

.. image:: /_static/images/system-admin/auth-chain-example.webp
    :alt: Static Assets - Example Authentication Chain Process
    :width: 80 %
    :align: center

.. _crafter-studio-configure-studio-saml:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Studio SAML2 Configuration |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.0.3

Crafter Studio can be configured to support SAML2 SSO out of the box without using any additional plugin.

.. important::
   *This document only applies to* **CrafterCMS version 4.0.3 and later** |br|
   *Please see* :ref:`here <crafter-studio-configure-studio-saml-up-to-4-0-2>` *for version 4.0.2 and earlier.*

""""""""""""
Requirements
""""""""""""
#. A SAML2 compatible Identity Provider (IdP) properly configured, this configuration will not be covered here
#. A private key and certificate. This can be generated like so:

    ``openssl req -newkey rsa:2048 -nodes -keyout rp-private.key -x509 -days 365 -out rp-certificate.crt``

    Take note of the values of the following options used to generate your key and certificate that will be used later for configuring Studio:

    * **keyout**: The value used for this option wil be used in the ``studio.security.saml.rp.privateKey.location`` property
    * **out**: The value used for this option will be used in the ``studio.security.saml.rp.certificate.location`` property

.. note::
   ``IdP`` is the asserting party and ``SP`` is the relying party (Studio)

"""""""""
Configure
"""""""""
To configure Studio SAML2, in your Authoring installation, we need to enable SAML security then we'll setup the required SAML configuration properties.

To enable SAML security, go to ``CRAFTER_HOME/bin``, open the ``crafter-setenv.sh`` file and uncomment the line ``export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity``:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   # -------------------- Spring Profiles --------------------
   ...
   # Uncomment to enable Crafter Studio SAML2 security
   export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity
   # For multiple active spring profiles, create comma separated list

|

Next we'll setup SAML configuration properties. Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add/uncomment the following lines to :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
   :linenos:

   ###############################################################
   ##               SAML Security                               ##
   ###############################################################
   # SAML attribute name for email
   # studio.security.saml.attributeName.email: email
   # SAML attribute name for first name
   # studio.security.saml.attributeName.firstName: givenName
   # SAML attribute name for last name
   # studio.security.saml.attributeName.lastName: surname
   # SAML attribute name for group
   # studio.security.saml.attributeName.group: Role
   ###############################################################
   ##         SAML Security Relying Party (SP) configuration    ##
   ###############################################################
   # {baseUrl} and {registrationId} are pre-defined macros and should not be modified
   # SAML relying party (SP) registration ID. {registrationId} macro will be replaced with this value
   # studio.security.saml.rp.registration.id: SSO
   # SAML relying party (SP) entity ID
   # studio.security.saml.rp.entity.id: "{baseUrl}/saml/metadata"
   # SAML relying party (SP) login processing url. Must end with {registrationId}
   # studio.security.saml.rp.loginProcessingUrl: "/saml/{registrationId}"
   # SAML relying party (SP) assertion consumer service location. Must end with {registrationId}
   # studio.security.saml.rp.assertion.consumer.service.location: "{baseUrl}/saml/{registrationId}"
   # SAML relying party (SP) assertion consumer service biding (POST or REDIRECT)
   # studio.security.saml.rp.assertion.consumer.service.binding: POST
   # SAML logout URL without prefix /studio
   # studio.security.saml.rp.logoutUrl: /saml/logout
   # SAML relying party (SP) single logout service location
   # studio.security.saml.rp.logout.service.location: "{baseUrl}/saml/logout"
   # SAML relying party (SP) logout service binding (POST or REDIRECT)
   # studio.security.saml.rp.logout.service.binding: POST
   # SAML relying party (SP) metadata endpoint
   # studio.security.saml.rp.metadata.endpoint: /saml/metadata
   # SAML relying party (SP) private key location
   # studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key
   # SAML relying party (SP) certificate location
   # studio.security.saml.rp.certificate.location: classpath:crafter/studio/extension/saml/rp-certificate.crt
   ###############################################################
   ##      SAML Security Asserting Party (IdP) configuration    ##
   ###############################################################
   # SAML asserting party (IdP) entity ID:
   # studio.security.saml.ap.entityId: https://ap.example.org/ap-entity-id
   # SAML asserting party (IdP) single sign on service location
   # studio.security.saml.ap.single.signOn.service.location: https://ap.example.org/sso/saml
   # SAML asserting party (IdP) single sign on service binding (POST or REDIRECT)
   # studio.security.saml.ap.single.signOn.service.binding: POST
   # SAML asserting party (IdP) logout service location
   # studio.security.saml.ap.single.logout.service.location: https://ap.example.org/slo/saml
   # SAML asserting party (IdP) logout service binding (POST or REDIRECT)
   # studio.security.saml.ap.single.logout.service.binding: POST
   # SAML asserting party (IdP) want authn request signed
   # studio.security.saml.ap.want.authn.request.signed: false
   # SAML asserting party (IdP) certificate location
   # studio.security.saml.ap.certificate.location: classpath:crafter/studio/extension/saml/idp-certificate.crt
   ###############################################################
   ##            SAML Security other configuration              ##
   ###############################################################
   # SAML Web SSO profile options: authenticate the user silently
   # studio.security.saml.webSSOProfileOptions.passive: false
   # SAML Web SSO profile options: force user to re-authenticate
   # studio.security.saml.webSSOProfileOptions.forceAuthn: false

|

where

- ``studio.security.saml.enabled``: Indicates if SAML2 is enabled or not
- The following are attributes that Studio expects from the Identity Provider:

     - ``studio.security.saml.attributeName.email``
     - ``studio.security.saml.attributeName.firstName``
     - ``studio.security.saml.attributeName.lastName``
     - ``studio.security.saml.attributeName.group``

- ``studio.security.saml.rp.privateKey.location``: The path of the relying party (SP) private key in the classpath
- ``studio.security.saml.rp.certificate.location``: The path of the relying party (SP) certificate in the classpath
- ``studio.security.saml.ap.entityId``: The asserting party (IdP) entity ID
- ``studio.security.saml.ap.single.signOn.service.location``: The asserting party (IdP) single sign on URL
- ``studio.security.saml.ap.single.logout.service.location``: The asserting party (IdP) single logout URL
- ``studio.security.saml.ap.certificate.location``:  The path of the asserting party (IdP) certificate in the classpath
- ``studio.security.saml.webSSOProfileOptions.passive``: Indicates if user is authenticated silently
- ``studio.security.saml.webSSOProfileOptions.forceAuthn``: Indicates if user will be forced to re-authenticate

The classpath is located in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``. As shown in the example above, the relying party private key is located in your Authoring installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/saml`` folder.

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

   # SAML relying party (SP) private key location
   studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key

|

Restart your Authoring installation after configuring the above.

|hr|

.. _crafter-studio-configure-header-based-auth:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Header-Based Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio is able to integrate with any authentication system that sends custom HTTP headers containing information that will be used to authenticate the user in Studio. This section details how to setup Studio for header-based authentication.

""""""""""""""""""""""""""""""""""""""""""""""""
Configure Studio for Header-Based Authentication
""""""""""""""""""""""""""""""""""""""""""""""""
Configuring Studio for header-based authentication is very simple: in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add the following lines to :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
    :linenos:

    # Studio authentication chain configuration
    # studio.authentication.chain:
      # Authentication provider type
      # - provider: HEADERS
        # Authentication via headers enabled
        # enabled: false
        # Authentication header for secure key
        # secureKeyHeader: secure_key
        # Authentication headers secure key that is expected to match secure key value from headers
        # Typically this is placed in the header by the authentication agent
        # secureKeyHeaderValue: secure
        # Authentication header for username
        # usernameHeader: username
        # Authentication header for first name
        # firstNameHeader: firstname
        # Authentication header for last name
        # lastNameHeader: lastname
        # Authentication header for email
        # emailHeader: email
        # Authentication header for groups: comma separated list of sites and groups
        #   Example:
        #   site_author,site_xyz_developer
        # groupsHeader: groups
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}


From the above configuration, here are the attributes that Studio expects from the headers to be provided:

- username
- firstname
- lastname
- email
- groups

The attribute ``secure_key`` is placed by the authentication agent in the header.
The attribute ``enabled`` enables/disables headers authentication, make sure this is set to **true** for header-based authentication

~~~~~~~~~~~~~~~~~~
Configuring Logout
~~~~~~~~~~~~~~~~~~
The **Sign out** button link is disabled/hidden by default when header-based authentication is enabled.

To enable **Sign out** for users signed in using header-based authentication, change the following lines (as described from the above configuration) in your :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml

    # Enable/disable logout for headers authenticated users (SSO)
    # logoutEnabled: false
    # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
    # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
    # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
    # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}

|

.. _crafter-studio-configure-ldap:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure LDAP Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To configure LDAP authentication, in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and uncomment the
following lines to the :ref:`studio-config-override.yaml <studio-configuration-files>` file.

.. note:: The values for the parameters listed below are just examples. Remember to make any appropriate configuration changes according to your directory service in use.

.. code-block:: properties
    :linenos:
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # Studio authentication chain configuration
    studio.authentication.chain:
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: true
        # LDAP Server url
        ldapUrl: ldap://localhost:389
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # LDAP email attribute
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0

|

Some notes on the properties above:

- ``enabled`` enables/disables LDAP authentication, make sure this is set to **true** for LDAP authentication
- ``serverUrl`` is just the URL where the LDAP server is listening for requests.
- ``bindDN`` and ``bindPassword`` are basically the credentials used to connect initially to the LDAP server.
- ``baseContext`` is the LDAP tree root where the user entries can be located.
- ``username``, ``firstName``, ``lastName`` and ``email`` are basic user attributes.
- ``groupName`` indicates the groups the user belongs to (can have multiple values). You can specify a regex to extract the group name of a user.

Studio will then do a query against the LDAP server whenever a user attempts to log in and the user is not yet in the DB. If there's a match in LDAP, the user is
created in the database with the imported LDAP attributes, and finally added to the groups specified in LDAP.

Also, please note that Studio needs all the attributes listed in the config to be present in the LDAP user's attributes, otherwise, Studio is not able to authenticate the user. When an attribute is missing, an error message will be displayed in the login screen: ``A system error has occurred. Please wait a few minutes or contact an administrator``. Please look at the tomcat log to check which attribute was not found. Here's an example log:

.. code-block:: none

    [WARN] 2017-10-11 12:42:57,487 [http-nio-8080-exec-2] [security.DbWithLdapExtensionSecurityProvider] | No LDAP attribute crafterGroup found for username jbloggs

|

Here are a few things to take note of when configuring LDAP authentication in Studio:

Make sure that at least one of the **groupName** attribute of the LDAP user exists in Studio and has Roles and Permission setup. If there is no **groupName** attribute setup in Studio with Roles and Permissions, please make sure that the system administrator assigns a role to at least one group in Studio so the user can access the site, otherwise, once the user gets into the **Sites** screen and tries to Preview the site or view the dashboard, the user will get a notification that the site is invalid.

    .. image:: /_static/images/system-admin/ldap-user-group-no-role-assigned.webp
        :alt: System Admin LDAP Config - LDAP user group attribute not assigned to a role
        :width: 35 %
        :align: center

|

To assign a role to a group, please follow the guide :ref:`project-role-mappings`. To assign permissions to a role, please see :ref:`permission-mappings`

For an example of setting up LDAP, see :ref:`setting-up-simple-ldap-server`

.. _crafter-studio-configure-password-requirements:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Studio Password Requirements
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organization’s password security policy.

Crafter Studio uses `zxcvbn <https://github.com/dropbox/zxcvbn>`__ for password strength management.

.. version_tag::
    :label: Since
    :version: 4.0.3

|

The password strength configured here are displayed to the user when resetting a password or creating a user.

.. image:: /_static/images/system-admin/password-requirements.webp
   :alt: System Administrator - Password Requirements Display
   :align: center
   :width: 65%

|

To configure the password strength, click on |mainMenu| **Main Menu** then click on ``Global Config``.
Scroll to the section ``Security`` and change the value of ``studio.security.passwordRequirements.minimumComplexity``
to desired minimum password complexity required:

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Password requirements minimum complexity
   # This is based on https://github.com/dropbox/zxcvbn
   # The minimum complexity corresponds to the password score
   # You can try this out here https://lowe.github.io/tryzxcvbn/
   #  score      # Integer from 0-4 (useful for implementing a strength bar)
   #  0 # too guessable: risky password. (guesses < 10^3)
   #  1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
   #  2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
   #  3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
   #  4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
   # The default value is 3
   studio.security.passwordRequirements.minimumComplexity: 3

|

Crafter Studio's default minimum password complexity required is set to 3 (which translate to a score
of 80 in the UI), and until the user setting/changing the password has met the minimum required,
the ``Submit`` button will not be enabled. Also, once the minimum password strength score has been
reached, the score will be displayed in green.

.. image:: /_static/images/system-admin/password-reqts-80-score.webp
    :alt: System Administrator - Password Requirements Display Score 80
    :align: center
    :width: 55%

|

Below, are some of the messages displayed as a user is inputting a new password:

.. image:: /_static/images/system-admin/password-reqts-20-score.webp
    :alt: System Administrator - Password Requirements Display Score 20
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-40-score.webp
    :alt: System Administrator - Password Requirements Display Score 40
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-60-score.webp
    :alt: System Administrator - Password Requirements Display Score 60
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-100-score.webp
    :alt: System Administrator - Password Requirements Display Score 100
    :align: center
    :width: 35%

|

.. _randomize-admin-password:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Randomize Authoring's "admin" Password for CrafterCMS Fresh Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS gives you the option to randomize the **admin** password on a fresh install. To randomize the **admin** password, before starting CrafterCMS for the very first time, in your Authoring installation, go to  the following folder: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/`` and add the following to the :ref:`studio-config-override.yaml <studio-configuration-files>` file:

.. code-block:: yaml
       :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
       :linenos:

       ##################################################
       ##                   Security                   ##
       ##################################################
       # Enable random admin password generation
       studio.db.initializer.randomAdminPassword.enabled: false
       # Random admin password length
       studio.db.initializer.randomAdminPassword.length: 16
       # Random admin password allowed chars
       studio.db.initializer.randomAdminPassword.chars: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_=+-/

To enable the random admin password generation, just set ``studio.db.initializer.randomAdminPassword.enabled`` to ``true`` and specify your desired password length and allowed characters for the password. Save the file after making your changes.

After saving the ``studio-config-override.yaml`` file, start CrafterCMS. You'll then need to look at the authoring tomcat log, and search for the following string to get the random password generated for user **admin**: `*** Admin Account Password:`

Here's a sample password generated for the admin as listed in the tomcat log:

    ``INFO: *** Admin Account Password: "WXOIK$O$yGixio2h" ***``

You can now login as the user **admin** using the randomly generated password listed in the tomcat log.

.. _configuring-engine-security:

-------------------------
Configure Engine Security
-------------------------
This section details a few ways on how to configure access to restricted content via Engine.

|hr|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Headers Based Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Engine is able to authenticate users via headers. For more information on how to setup Engine
for headers based authentication see :ref:`engine-headers-authentication`

|

|hr|

.. _setup-cloudfront-signed-cookies-in-crafter:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setup CloudFront Signed Cookies in CrafterCMS Delivery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
One way to provide access to restricted content through AWS CloudFront is to use signed cookies.
This section details how to setup CloudFront signed cookies for CrafterCMS with SSO.

From the  `AWS documentation <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html>`__

.. code-block:: text

      CloudFront signed cookies allow you to control who can access your content when you don't want to change your
      current URLs or when you want to provide access to multiple restricted files, for example, all of the files
      in the subscribers' area of a website.

Here are the steps:

1. Configure CloudFront to use signed cookies following this guide: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html
2. Add the Groovy class to your site's classes.

   .. literalinclude:: /_static/code/system-admin/CloudFrontUtils.groovy
      :language: groovy
      :caption: CloudFrontUtils.groovy
      :linenos:

3. Create a Groovy filter that checks for current user authentication/authorization on the requests that need it, and then calls the class method: ``CloudFrontUtils.setSignedCookies(request, response, siteConfig)``
4. Add the following config to Engine's site-config.xml:

   .. code-block:: xml
      :linenos:

      <aws>
        <cloudFront>
          <signedCookies>
            <domain><!--- Site's domain name, used by CloudFront --></domain>
            <resourcePath>static-assets/*</resourcePath>
            <keyPairId encrypted=""><!-- ID of the key pair created in step 1, recommended to be encrypted with Encrypt Marked from the UI  --></keyPairId>
            <privateKey encrypted=""><!-- Content of the private key created in step 1, recommended to be encrypted with Encrypt Marked from the UI</privateKey>
            <cloudFrontTimeToExpire><!--Time in minutes after which CloudFront will not allow access to the content using the cookie --></cloudFrontTimeToExpire>
            <cookieMaxAge><!-- Time in minutes after which the browser will consider the cookie expired --></cookieMaxAge>
          </signedCookies>
        </cloudFront>
      </aws>

   |

5. Configure an Error Page HTML in CloudFront for 403 errors, that will redirect to Engine using JS so that the SSO flow is started. It can be like the following:

   .. code-block:: html

      <!DOCTYPE html>
      <!-- saved from url=(0014)about:internet -->
      <html lang="en">
        <head>
          ...
          <script>
            if(document.location.hash.indexOf("dlink") == -1) {
              document.location = "/auth-asset?a=" + document.location.pathname + "#dlink";
            }
          </script>
          ...
        </head>
        <main id="main-content">
          <!-- PAGE CONTENT -->
          <script>
            if(document.location.hash.indexOf("dlink") != -1) {
              document.getElementById("headline").innerHTML = "403";
              document.getElementById("message").innerHTML = "You do not have permissions to access the requested resource. You will be redirected to the home page momentarily.";
              setTimeout(function(){ document.location = "/" }, 5000);
            }
          </script>
      </body></html>

   |

6. Create a ``/auth-asset`` page in your site with a Groovy script that only redirects back to the asset (the auth and cookie should have been already setup by filters):

   .. code-block::

      if(params.a) {
        response.sendRedirect(params.a)
      }
