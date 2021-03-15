:is-up-to-date: True

.. _debugging_ssh_issues:

========================
Debugging SSH Key Issues
========================

In this section, we present a few errors that a user may encounter when using ssh keys with Crafter CMS and how to fix the errors.

----------------
SSH Unknown Host
----------------

When creating a site with a link to a remote repository using SSH keys or when configuring a Deployer target to connect to a remote host through SSH, you might encounter the following error:

.. code-block:: java

	com.jcraft.jsch.JSchException: UnknownHostKey: SERVER_NAME. RSA key fingerprint is 50:db:75:ba:11:2f:43:c9:ab:14:40:6d:7f:a1:ee:e3

|

This normally means that the SSH host key from the remote server is stored in ECDSA format instead of RSA, under ``known_hosts``.
Crafter requires the host key to be RSA. To fix this do the following:

#. Delete the ``~/.ssh/known_hosts`` file for the user that's running Crafter.
#. Connect to the remote server with the following command to add the RSA key: ``ssh -o HostKeyAlgorithms=ssh-rsa SERVER_NAME``.

------------------------------------------
Remote Repository Not Found: USERAUTH fail
------------------------------------------

Here's another error you may encounter in the logs when creating a site with a link to a remote repository using SSH keys:

.. code-block:: java

    com.jcraft.jsch.JSchException: USERAUTH fail

|

This could mean that a passphrase was setup for the SSH keys.  Crafter currently doesn't support using a passphrase with SSH keys.  To fix the error, remove the passphrase from the SSH key.

There are a couple of ways to remove the passphrase from the SSH key:

#. Delete your existing key and generate a new key with NO PASSPHRASE.
#. Or, another way is to run the following:

   .. code-block:: sh

       $ ssh-keygen -p

   |

   It will then prompt you to enter the keyfile location, the old passphrase, and the new passphrase (leave this blank to have no passphrase).

-------------------
Invalid Private Key
-------------------

You may encounter in the logs when creating a site with a link to a remote repository using SSH keys the following error:

.. code-block:: sh

    com.jcraft.jsch.JSchException: invalid privatekey: [B@5f13fa57

|

This could be caused by keys generated using an algorithm other than ``RSA``.  Crafter requires the key to be ``RSA`` and does not support keys generated using an algorithm (such as OPENSSH) other than **RSA**.  Make sure when you generate the key to specify the type as ``rsa``:

.. code-block:: sh

    openssl genrsa -out my-privateKey 4096
    chmod 400 my-privateKey

|

Check that the file starts with the following header: ``-----BEGIN RSA PRIVATE KEY-----`` to verify that the key is using ``RSA``.
