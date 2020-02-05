:is-up-to-date: True

.. index:: Encrypting Configuration Properties

.. _encrypting-configuration-properties:

===================================
Encrypting Configuration Properties
===================================

It's recommended that configuration properties like access keys or passwords are encrypted since they contain sensitive 
data that shouldn't be publicly available to anyone but developers and administrators. In order to do that, follow the 
next steps (you need a system administrator for the first step):

.. WARNING :: Please do not use the same key and salt shown in the example. You should generate your own.

#. Configure encryption by defining the following environment variables before starting Crafter:

   - ``CRAFTER_ENCRYPTION_KEY``
   - ``CRAFTER_ENCRYPTION_SALT``
   
   .. code-block:: bash
     :linenos:
     :caption: Encryption configuration example

     export CRAFTER_ENCRYPTION_KEY="klanFogyetkonjo"
     export CRAFTER_ENCRYPTION_SALT="S25pT2RkeWk="
     bin/startup.sh
 
#. Encrypt the values using one of the following methods:

   #. Using the Crafter Commons Encryption Tool with the same key and salt values. 
      You can find instructions of how to use it in :ref:`crafter-commons-encryption-tool`.
   #. Using the Encryption section from Crafter Studio.
      You can find instructions of how to use the tool in Crafter Studio :ref:`here <main-menu-encryption-tool>`

#. Put the encrypted values in your configuration file using placeholders and a prefix: ``${enc:...}``. Example:

	.. code-block:: xml

		<profile>
		  <api>
		    <accessTokenId>${enc:q3l5YNoKH38RldAkg6EAGjxlI7+K7Cl4iEmMJNlemNOjcuhaaQNPLwAB824QcJKCbEeLfsg+QSfHCYNcNP/yMw==}</accessTokenId>
		  </api>
		</profile>

The encrypted properties work in the following files:

 - Engine Site Configuration (``/config/engine/site-config.xml``)
 - Studio AWS Profiles (``/config/studio/aws/aws.xml``)
 - Studio Box Profiles (``/config/studio/box/box.xml``)
 - Studio WebDAV Profiles (``/config/studio/webdav/webdav.xml``)
 - Deployer Target Configuration (``$CRAFTER_HOME/data/deployer/targets/*.yaml``)
