:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Encrypting Text in a Configuration File

.. _encrypting-text-in-a-configuration-file:

=======================================
Encrypting Text in a Configuration File
=======================================

This section details how to encrypt passwords, access keys or other sensitive information in a configuration file managed through Crafter Studio.

The encryption algorithm used is PBE (Password Based Encryption) with AES, in which a password and a salt are specified to generate the key used on encryption/decryption.

Crafter Studio uses a default key and salt for the encryption tool.  To set the key and salt to desired values, in your Authoring installation directory, open ``/bin/crafter-setenv.sh`` and modify the following values

.. code-block:: bash
   :caption: *bin/crafter-setenv.sh*

   # -------------------- Encryption variables --------------------
   export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encrytption_key"}
   export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encrytption_salt"}

|

The encrypted properties work in the following site configuration files:

 - Engine Site Configuration (``/config/engine/site-config.xml``)
 - Studio AWS Profiles (``/config/studio/aws/aws.xml``)
 - Studio Box Profiles (``/config/studio/box/box.xml``)
 - Studio WebDAV Profiles (``/config/studio/webdav/webdav.xml``)

-----------------------------------------
How to Encrypt Text in Configuration File
-----------------------------------------
To encrypt passwords, access keys or other sensitive information in a configuration file managed through Crafter Studio:

* Open the configuration file that has the text/information that you would like to encrypt
* Find the entry you would like to encrypt and add the attribute ``encrypted=""``
* Click on the ``Encrypt Marked`` button to encrypt text
* Your sensitive text should now be encrypted and displayed with the attribute ``encrypted="true"`` and you may now save your file

-------
Example
-------
Let's take a look at an example of encrypting the ``accessKey`` and ``securityKey`` for the AWS Profiles configuration.

* Open the ``AWS Profiles`` configuration file by clicking on |siteConfig| -> ``Configuration``, then select ``AWS Profiles`` from the dropdown box
* We will add an ``AWS S3 profile``.  Notice that the ``accessKey`` and ``secureKey`` is in the clear.

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

* We will now mark items to be encrypted by adding the attribute ``encrypted=""``.  For our example, we will mark ``accessKey`` and ``secretKey`` for encryption.

  .. code-block:: xml
     :caption: *{REPOSITORY_ROOT}/sites/SITENAME/config/studio/aws/aws.xml*

     <accessKey encrypted="">YOUR_ACCESS_KEY</accessKey>
     <secretKey encrypted="">YOUR_SECRET_KEY</secretKey>

  |

  .. image:: /_static/images/site-admin/config-encrypt-text-1.png
     :align: center
     :alt: Add "encrypted=""" attribute to "accessKey" and "secureKey"

  |

* Click on the ``Encrypt Marked`` button to encrypt the marked items, the attribute for the marked items will change to ``encrypted="true"``:

  .. code-block:: xml
     :caption: *{REPOSITORY_ROOT}/sites/SITENAME/config/studio/aws/aws.xml*

     <accessKey encrypted="true">${enc:ENCRYPTED_ACCESS_KEY}</accessKey>
     <secretKey encrypted="true">${enc:ENCRYPTED_SECRET_KEY}</secretKey>

  |

  .. image:: /_static/images/site-admin/config-encrypt-text-2.png
     :align: center
     :alt: "accessKey" and "secureKey" now encrypted

  |

* The ``accessKey`` and ``secureKey`` is now encrypted and will be decrypted by Crafter Studio as needed

