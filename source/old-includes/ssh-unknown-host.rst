----------------
SSH Unknown Host
----------------

When configuring a Deployer target to connect to a remote host through SSH you might encounter the following error:

.. code-block:: java

	Caused by: org.apache.sshd.common.SshException: Server key did not validate

|

This normally means that the server is not in the known_host file. To fix this run the following:

.. code-block:: bash

   ssh-keyscan {server url} >> crafter-authoring/data/ssh/known_hosts

|

To test your SSH config, run the following:

.. code-block:: bash

   ssh -F crafter-authoring/data/ssh/config -o UserKnownHostsFile=crafter-authoring/data/ssh/known_hosts -T {server url}
