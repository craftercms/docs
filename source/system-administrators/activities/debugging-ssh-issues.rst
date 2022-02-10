:is-up-to-date: True

.. _debugging_ssh_issues:

========================
Debugging SSH Key Issues
========================

In this section, we present a few errors that a user may encounter when using ssh keys with CrafterCMS and how to fix the errors.

.. include:: /includes/ssh-unknown-host.rst

------------------------------------------
Remote Repository Not Found: USERAUTH fail
------------------------------------------

Here's another error you may encounter in the logs when creating a site with a link to a remote repository using SSH keys:

.. code-block:: java

    org.apache.sshd.common.SshException: USERAUTH fail

|

This could mean that a passphrase was setup for the SSH keys.  Crafter currently doesn't support using a passphrase with SSH keys.  To fix the error, remove the passphrase from the SSH key.

There are a couple of ways to remove the passphrase from the SSH key:

#. Delete your existing key and generate a new key with NO PASSPHRASE.
#. Or, another way is to run the following:

   .. code-block:: sh

       $ ssh-keygen -p

   |

   It will then prompt you to enter the keyfile location (``CRAFTER_HOME/data/ssh`` by default), the old passphrase, and the new passphrase (leave this blank to have no passphrase).

