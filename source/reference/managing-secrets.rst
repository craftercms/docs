:is-up-to-date: False
:last-updated: 4.1.0

.. index::
   single: Secrets
   single: Managing Secrets
   single: External Secrets
   single: Internal Secrets
   single: Encryption
   single: Encrypting Text in a Configuration File

.. _managing-secrets:

================
Managing Secrets
================

There are a number of ways to manage secrets with CrafterCMS. The following sections describe the different options.

.. note::
        A note on avoiding secrets.
        Whenever possible, storing secrets should be avoided as a best practice. For example, if you're deploying to AWS or similar, it's possible to have role-based authentication and authorization at the service level and avoid having to store secrets related to said service in configuration files.

----------------
External Secrets
----------------

CrafterCMS supports the use of external secrets. This means that you can store your secrets in a separate location
and use these secrets in your configuration files. This is the recommended approach whenever possible.

For example, you can use AWS Secrets and solicit the secrets. You can also use a Vault server to store your secrets.
Secrets can then be injected into CrafterCMS via environment variables or system properties.

.. TODO: Show an example where secrets get injected via `crafter-setenv.sh`

----------------
Internal Secrets
----------------

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

^^^^^^^^^^
Encryption
^^^^^^^^^^

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

""""""""""""""""""""""""""""""""""""""""""""""""""""""
Automatic Encryption of Secrets in Configuration Files
""""""""""""""""""""""""""""""""""""""""""""""""""""""

This section details how to encrypt passwords, access keys or other sensitive information in a configuration file
managed through Crafter Studio.

Examples of project configuration files where encryption would make sense include:

 - Engine Project Configuration (``/config/engine/site-config.xml``)
 - Studio AWS Profiles (``/config/studio/aws/aws.xml``)
 - Studio Box Profiles (``/config/studio/box/box.xml``)
 - Studio WebDAV Profiles (``/config/studio/webdav/webdav.xml``)

How to Encrypt Text in Configuration File
-----------------------------------------
To encrypt passwords, access keys or other sensitive information in a configuration file managed through Crafter Studio:

* Open the configuration file that has the text/information that you would like to encrypt
* Find the entry you would like to encrypt and add the attribute ``encrypted=""``
* Click on the ``Encrypt Marked`` button to encrypt text
* Your sensitive text should now be encrypted and displayed with the attribute ``encrypted="true"`` and you may now save your file

Example
-------
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

"""""""""""""""""""""""""
Studio UI Encryption Tool
"""""""""""""""""""""""""
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

Example
-------

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

""""""""""""""""""""""""""""""""""""""""""""
Command Line Interface (CLI) Encryption Tool
""""""""""""""""""""""""""""""""""""""""""""

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

^^^^^^^^^^
Decryption
^^^^^^^^^^

CrafterCMS will automatically decrypt secrets as it needs them. If, however, you wanted to decrypt a secret manually you can use the CLI encryption/decryption tool:

- **Decode Base 64 text:** ``java -jar {JARNAME} -d64 BASE64_TEXT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -d64 S25pT2RkeWk=
		Decoded Base 64 text: KniOddyi

- **Decrypt text:** ``java -jar {JARNAME} -d CIPHER_TEXT -p PASSWORD -s BASE64_SALT``

  .. code-block:: bash

	 java -jar crafter-commons-utilities-3.0.1-enctool.jar -d VkHxBsaSZ9DXrXk52uK9And+CEZlqiy7Wb23GxBFOSXD6KBOCh1ojp8fUw7w11IxpxBipiI4HsSg3cdl9TgTQg== -p klanFogyetkonjo -s S25pT2RkeWk=
	 Clear text: c852cb30cda311e488300800200c9a66

