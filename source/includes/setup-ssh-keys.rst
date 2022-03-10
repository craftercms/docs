When using ssh keys for authentication, the keys can be generated using one of the following: ``RSA``, ``ECDSA``, ``ED25519`` or ``DSA``  as the algorithm  and with ``no passphrase`` (Crafter currently doesn't support using a passphrase with SSH keys.)

To generate your Secure Shell (SSH) keys for authentication, run the following command:

Generate an RSA SSH keypair with a 4096 bit private key

  *ssh-keygen -t rsa -b 4096*

Generate an DSA SSH keypair with a 2048 bit private key

  *ssh-keygen -t dsa -b 1024*

Generate an ECDSA SSH keypair with a 521 bit private key

  *ssh-keygen -t ecdsa -b 521*

Generate an ed25519 SSH keypair- this is a new algorithm added in OpenSSH.

  *ssh-keygen -t ed25519*


Your output should look something like this:

.. code-block:: sh

    ✗ ssh-keygen -m PEM -b 4096 -t rsa
    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/myuser/.ssh/id_rsa):
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /Users/myuser/.ssh/id_rsa.
    Your public key has been saved in /Users/myuser/.ssh/id_rsa.pub.
    .
    .

|

Check that the file starts with the following header: ``-----BEGIN RSA PRIVATE KEY-----`` to verify that the key is using ``RSA``.

After generating your private and public keys, you will need to add your new public key to where your remote git repository is located.  If you are using GitHub, you will need to add your public key (e.g., ``id_rsa.pub``) into your GitHub account.  If your remote Git repository is hosted on a server, you will need to copy your public key (e.g., ``id_rsa.pub``) to the host server.


