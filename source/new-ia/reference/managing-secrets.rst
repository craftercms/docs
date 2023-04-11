:is-up-to-date: True
:orphan:
:nosearch:

.. _newIa-managing-secrets:

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

CrafterCMS supports the use of external secrets. This means that you can store your secrets in a separate location and using these secrets in your configuration files. This is the recommended approach whenever possible.

For example, you can use AWS Secrets and solicit the secrets. You can also use a Vault server to store your secrets. Secrets can then be injected into CrafterCMS via environment variables or system properties.

.. TODO: Show an example where secrets get injected via `crafter-setenv.sh`

----------------
Internal Secrets
----------------

When external secrets are not possible, CrafterCMS supports the use of encrypted internal secrets. This means that you can store your secrets in the configuration files themselves, and these secrets will be encrypted.

.. note::
    The encryption keys are configurable and can be different per environment, having different keys for development, staging, and production environments.

CrafterCMS has a number of ways to encrypt secrets:

- Automatic encryption of secrets in configuration files
- Studio UI encryption tool
    - Site-level encryption tool
    - Admin UI encryption tool
- CLI encryption tool

^^^^^^^^^^
Encryption
^^^^^^^^^^

Encrypting secrets can be done by automatically within Studio-managed configuration files, via the UI, or using a CLI.

""""""""""""""""""""""""""""""""""""""""""""""""""""""
Automatic Encryption of Secrets in Configuration Files
""""""""""""""""""""""""""""""""""""""""""""""""""""""

.. TODO Please complete this section

"""""""""""""""""""""""""
Studio UI Encryption Tool
"""""""""""""""""""""""""

.. TODO There are two encryption tools in Studio, one in the global menu, and one in the site tool.
        Please complete this section to describe both at a high-level.

"""""""""""""""""""""""""
Using the Encryption Tool
"""""""""""""""""""""""""

Crafter Commons provides a command line tool that can be used to encrypt/decrypt text. It's specially useful for encrypting
values that will be used in configuration files. The encryption algorithm used is PBE (Password Based Encryption) with AES,
in which a password and a salt are specified to generate the key used on encryption/decryption.

Using the tool is very simple. First build the Crafter Commons source code and go to the ``target`` folder of the ``utilities``
sub-module, where you should find the JAR with the ``-enctool`` suffix. Then you can run any of the following commands:

- **Encode text in Base 64:** ``java -jar {JARNAME} -e64 CLEAR_TEXT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -e64 KniOddyi
		Encoded text in Base 64: S25pT2RkeWk=

- **Decode Base 64 text:** ``java -jar {JARNAME} -d64 BASE64_TEXT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -d64 S25pT2RkeWk=
		Decoded Base 64 text: KniOddyi

- **Encrypt text:** ``java -jar {JARNAME} -e CLEAR_TEXT -p PASSWORD -s BASE64_SALT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -e c852cb30cda311e488300800200c9a66 -p klanFogyetkonjo -s S25pT2RkeWk=
		Cipher text (in Base 64): VkHxBsaSZ9DXrXk52uK9And+CEZlqiy7Wb23GxBFOSXD6KBOCh1ojp8fUw7w11IxpxBipiI4HsSg3cdl9TgTQg==

- **Decrypt text:** ``java -jar {JARNAME} -d CIPHER_TEXT -p PASSWORD -s BASE64_SALT``

	.. code-block:: bash

		java -jar crafter-commons-utilities-3.0.1-enctool.jar -d VkHxBsaSZ9DXrXk52uK9And+CEZlqiy7Wb23GxBFOSXD6KBOCh1ojp8fUw7w11IxpxBipiI4HsSg3cdl9TgTQg== -p klanFogyetkonjo -s S25pT2RkeWk=
		Clear text: c852cb30cda311e488300800200c9a66

^^^^^^^^^^
Decryption
^^^^^^^^^^

To consume secrets, the secrets must be decrypted.

.. TODO Please complete this section