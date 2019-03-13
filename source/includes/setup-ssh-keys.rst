
To generate your Secure Shell (SSH) keys for authentication, run the following command ``ssh-keygen -b 4096 -t rsa``.  Your output should look something like this:

.. code-block:: sh

    ✗ ssh-keygen -b 4096 -t rsa
    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/myuser/.ssh/id_rsa):
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /Users/myuser/.ssh/id_rsa.
    Your public key has been saved in /Users/myuser/.ssh/id_rsa.pub.
    .
    .

|

After generating your private and public keys, you will need to add your new public key to where your remote git repository is located.  If you are using GitHub, you will need to add your public key (e.g., ``id_rsa.pub``) into your GitHub account.  If your remote Git repository is hosted on a server, you will need to copy your public key (e.g., ``id_rsa.pub``) to the host server.

