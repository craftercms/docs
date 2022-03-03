:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-notes-for-re-encrypting-values:

======================================
Upgrade Notes for Re-encrypting Values
======================================

CrafterCMS uses the Apache commons-codec library for encrypting/decrypting sensitive information.  CrafterCMS 3.1.8 and earlier versions was expecting the salt to be encoded in base64 but because of a bug in the Apache commons-codec library, invalid characters were being used to encrypt the values.

To prevent this from causing issues, the upgrade manager will automatically re-encrypt values for installations upgraded to **CrafterCMS 3.1.9**.

   .. important::
      CrafterCMS versions later than 3.1.9 needs encrypted properties re-encrypted.

      If you are upgrading to a version later than CrafterCMS 3.1.9, you need to **upgrade to CrafterCMS 3.1.9 first** before upgrading to a later version.

However, there may be some cases that the upgrade manager may not be able to automatically re-encrypt values and a manual re-encryption will be required.  The range of valid base64 characters are: ``A–Z``, ``a–z``, ``0–9``, ``+``, ``/`` and ``=``.  If any of the values encrypted contained other characters aside from the ones previously listed, say an ``@`` character, the re-encryption process being performed by the upgrade manager will fail with a message that looks like the following:

   .. code-block:: text

      Caused by: java.lang.IllegalStateException: The current configuration doesn't support values encrypted with a base64 encoded salt                                                                        │
         at org.craftercms.commons.crypto.impl.PbkAesTextEncryptor.decrypt(PbkAesTextEncryptor.java:80) ~[crafter-commons-utilities-3.1.9E.jar:3.1.9E]                                                        │
         at org.craftercms.studio.impl.v2.upgrade.operations.site.ConfigEncryptionUpgradeOperation.updateFile(ConfigEncryptionUpgradeOperation.java:61) ~[classes/:3.1.9E]

|

--------------------------
Manually Re-encrypt Values
--------------------------

**To manually re-encrypt values you'll need the following:**

#. CrafterCMS command line encryption tool version **3.1.8 or earlier** for decrypting the existing values with the bad base64 salt
#. CrafterCMS command line encryption tool version **3.1.9 or later** for encrypting the old values (the ones decrypted) using the new salt

**To re-encrypt values:**

#. Find all values that need to be re-encrypted e.g. configuration files & remote repository credentials

#. For this step, we need to use the CrafterCMS command line encryption tool version 3.1.8 or earlier.  |br|
   Using the old key and salt, decrypt the values using the CrafterCMS command line encryption tool (See :ref:`crafter-commons-encryption-tool` for more information on the tool).

   Run the following command to decrypt the values:

      .. code-block:: bash

         java -jar {JARNAME} -d CIPHER_TEXT -p PASSWORD -s BASE64_SALT

      |

   where:

   * **JARNAME:** The CrafterCMS command line encryption tool *crafter-commons-utilities-VERSION-enctool.jar*.  Remember to replace ``VERSION`` in the jar name with the actual version you are using, e.g. ``3.1.8`` or ``3.1.6``, etc.
   * **CIPHER_TEXT:** The old encrypted value we want to decrypt
   * **PASSWORD:** The key for decrypting the value
   * **BASE64_SALT:** The old salt for decrypting the value

   Example:

      .. code-block:: bash

         $ java -jar crafter-commons-utilities-3.1.8-enctool.jar -d VkHxBsaSZ9DXrXk52uK9And+CEZlqiy7Wb23GxBFOSXD6KBOCh1ojp8fUw7w11IxpxBipiI4HsSg3cdl9TgTQg== -p klanFogyetkonjo -s S25pT2RkeWk=
         Clear text: mySup3rsecret#@hello

      |

#. For this step, we need to use the CrafterCMS command line encryption tool version 3.1.9 or later.  |br|
   Choose a new salt then encrypt all values and replace the old ones with the new encrypted values.  Run the following command to encrypt the values using the new salt:

      .. code-block:: bash

         java -jar {JARNAME} -e CLEAR_TEXT -p PASSWORD -s NEW_SALT

      |

   where:

   * **JARNAME:** The CrafterCMS command line encryption tool *crafter-commons-utilities-VERSION-enctool.jar*.  Remember to replace ``VERSION`` in the jar name with the actual version you are using, e.g. ``3.1.9`` or ``3.1.10``, etc.
   * **CLEAR_TEXT:** The value we want to encrypt
   * **PASSWORD:** The key for encrypting the value
   * **NEW_SALT:** The new salt for encrypting the value

   Example:

      .. code-block:: bash

         $ java -jar crafter-commons-utilities-3.1.10-enctool.jar -e mySup3rsecret#@hello -p klanFogyetkonjo -s Sdf25pT2RkeWk=
         Cipher text (in Base 64): CCE-V1#fQ5sZ3zfIezQzmWl38+FPph2BwVsLstkwGeWuqKAhbFCN3I1PM3ahAHkrMYCytFV

#. After updating configuration files that needs to be re-encrypted, commit the files by using ``git`` so the changes will be picked up by CrafterCMS.

      .. code-block:: bash

         $ git add <config_file_modified>
         $ git commit -m "Comment for the commit"

      |

   For the remote repository credentials, you could also just remove the existing remotes, then add them again to avoid manually changing the database.  See :ref:`remote-repositories` for more information on adding/removing remotes in Studio





