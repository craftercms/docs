.. _crafter-commons-encryption-tool:

=========================
Using the Encryption Tool
=========================

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
