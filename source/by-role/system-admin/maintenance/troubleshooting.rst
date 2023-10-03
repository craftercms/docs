:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Troubleshooting

.. _troubleshooting:

==========================
Troubleshooting CrafterCMS
==========================
This section details common problems you might encounter with CrafterCMS and how to solve them.

.. list-table::
    :header-rows: 1

    * - Topic
      - Purpose

    * - :ref:`debugging-search-issues`
      - Contains information on troubleshooting search issues
    * - :ref:`debugging-publishing-issues`
      - Contains information on troubleshooting publishing issues
    * - :ref:`debugging-deployer-issues`
      - Contains information on troubleshooting Deployer issues
    * - :ref:`debugging-ssh-issues`
      - Contains information on troubleshooting SSH issues
    * - :ref:`debugging-ssl-issues`
      - Contains information on troubleshooting SSL issues

|

|hr|

.. _debugging-search-issues:

-----------------------------
Troubleshooting Search Issues
-----------------------------
^^^^^^^^^^^^^^^^
How Search Works
^^^^^^^^^^^^^^^^
.. include:: /includes/how-search-works.rst

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Places Search Indexing Can Get Hung Up
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Communication Between Crafter Studio & Crafter Deployer

	* Crafter Studio will notify the Deployer when content has changed.
	* Ensure that the Deployer is pulling the changes.
	* If the Deployer is not receiving any changes, check network connectivity and ports.

* Communication Between Crafter Deployer & OpenSearch

	* The Deployer has a target with a Search Processor.
	* Ensure that the processor is configured to the proper HOST, PORT for OpenSearch.

* Communication Between Crafter Engine & OpenSearch

	* Crafter Engine is configured to talk to OpenSearch
	* Ensure that Crafter Engine is configured to the proper HOST, PORT for OpenSearch.

^^^^^^^^^^^^^^^^^^^
Reviewing Log Files
^^^^^^^^^^^^^^^^^^^
In order to figure out which of the possible failures described in the previous section happened,
you should review the following log files for each one of the components:

+-------------------+---------------------------------------------------+
|| Component        || Log Files                                        |
+===================+===================================================+
|| Crafter Studio   || ``CRAFTER/logs/tomcat/catalina.out``             |
+-------------------+---------------------------------------------------+
|| Crafter Deployer || ``CRAFTER/logs/deployer/deployer.out``           |
||                  || ``CRAFTER/logs/deployer/deployer-general.log``   |
||                  || ``CRAFTER/logs/deployer/{target}-{env}.log``     |
+-------------------+---------------------------------------------------+
|| Crafter Engine   || ``CRAFTER/logs/tomcat/catalina.out``             |
+-------------------+---------------------------------------------------+


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Deployer Port & Search Port
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To configure the Deployer and Search port, open the file ``CRAFTER/bin/crafter-setenv.sh``

.. code-block:: bash

  export DEPLOYER_PORT=${DEPLOYER_PORT:="9191"}

  export SEARCH_HOST=${SEARCH_HOST:="localhost"}
  export SEARCH_PORT=${SEARCH_PORT:="9201"}


|

|hr|

.. _debugging-publishing-issues:

---------------------------------
Troubleshooting Publishing Issues
---------------------------------
When publishing fails, here are some things to consider to help track down the cause of publishing issues.

^^^^^^^^^^^^^^^^^^^^^^^^
Inspect Publishing Queue
^^^^^^^^^^^^^^^^^^^^^^^^
The publishing queue (items that are in the queue for publishing) can be viewed through Studio from |projectTools| -> ``Publishing``, then scroll down to the ``Publishing Queue``. Here, the user can narrow down the queue for inspection by specifying filters. For more information see :ref:`publishing-queue`

.. image:: /_static/images/site-admin/project-tools-publishing-queue-all.webp
    :alt: Debugging Publishing Issues - Inspect Publishing Queue
	:align: center

|

Another way to get the publishing queue, is to execute the following SQL query:

.. code-block:: sql

    SELECT * FROM publish_request
    WHERE site = 'a_site_id'
    ORDER BY scheduleddate

Additionally, a query can be filtered by item state and scheduled data to narrow down the queue for inspection.

Item states:

    * `READY_FOR_LIVE`  - item is scheduled and waiting in the queue to be published
    * `PROCESSING`      - item is being published
    * `COMPLETED`       - item has been published
    * `CANCELLED`       - item has been removed from the queue (publishing was canceled)
    * `BLOCKED`         - item is blocking the publishing queue

^^^^^^^^^^^^^^^^^^^^^^^^
Unblock Publishing Queue
^^^^^^^^^^^^^^^^^^^^^^^^
The publishing queue can be blocked or stuck in an infinite loop by trying to publish the same item over and over again. It usually happens when there is some error in publishing some content.

To discover which item is blocking publishing, the most common method is to inspect the queue and determine which item is first in the queue (state ``READY_FOR_LIVE``), together with all the other items that are scheduled with the same timestamp.
Once you determine where the publishing queue is blocked/stuck, you can determine the reason by inspecting the log files and the repository.

If it is possible to fix the publishing queue blockage, the system should be allowed to continue normally.
After the queue has been unblocked, the publishing process needs to be enabled again. This can be done through Studio, by clicking on the ``Start`` button in |projectTools| -> ``Publishing`` -> ``Status``. :ref:`publishing-status` contains more information on the Publishing Status tab in Studio.
Another way to enable the publishing process is to call the :ref:`crafter-studio-api-publish-start` Rest API to start publishing.

If it is not possible to fix the publishing queue blockage, a workaround can be applied to unblock publishing. The workaround can be any valid intervention on the database and the repository to simulate the publishing process.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Manual Syncing of Repositories
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
One of the general workaround to unblock the publishing queue is by manual syncing of repositories. Manual syncing is done by cloning published repository from sandbox.

.. code-block:: shell

    # navigate to published repository
    > cd path_to_published
    > cd ..
    # delete published repository
    > rm -rf published
    # clone published repository from sandbox
    > git clone path_to_sandbox published


.. warning:: By executing this command, all content in the sandbox will become published, and the published history will be replaced with authoring history.

|

To avoid unnecessary operations and confusion within the system, the database should also be updated by canceling everything remaining in the publishing queue and setting item states to ``Live``

.. code-block:: sql
    :caption: **Cancel everything in the publishing queue:**

    UPDATE publish_request
    SET state = 'CANCELLED'
    WHERE site = 'a_site_id'
    AND state = 'READY_FOR_LIVE';

|

.. code-block:: sql
    :caption: **Set item states to "Live":**

    UPDATE item_state
    SET state = 'EXISTING_UNEDITED_UNLOCKED', system_processing = 0
    WHERE site = 'a_site_id';

|

After successful manual syncing of repositories the publishing process needs to be enabled again. This can be done through Studio, by clicking on the ``Start`` button in |projectTools| -> ``Publishing`` -> ``Status``. :ref:`publishing-status` contains more information on the Publishing Status tab in Studio.
Another way to enable the publishing process is to call the :ref:`crafter-studio-api-publish-start` Rest API to start publishing.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Issues When Moving Projects Around in Disk
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing may fail when moving projects around in disk. When moving projects around, the reference between the ``published`` repository and the ``sandbox`` repository may not be valid anymore. To resolve the issue, the reference between the ``published`` repository and the ``sandbox`` repository needs to be updated.

Typically, the configuration for the ``published`` repository can be found in the file ``path_to_published_repo/published/.git/config`` and the reference to ``sandbox`` may look like this:

.. code-block:: text

    [remote "origin"]
	    url = ../sandbox
	    fetch = +refs/heads/*:refs/remotes/origin/*

|

In some cases, the configuration looks like this:

.. code-block:: text

    [remote "origin"]
	    url = /my/absolute/path/to/crafter_install/crafter-auth-env/bin/../data/repos/sites/mysite/sandbox
	    fetch = +refs/heads/*:refs/remotes/origin/*

|

To manually fix the configuration problem, either set the url value as a relative path between the ``published`` and the ``sandbox`` repositories (default ``../sandbox``) or set it as the absolute path of the ``sandbox`` repository.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Issues When Commit ID for a content is NULL in Database
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing issues may be caused if content does not have a commit id value in the metadata table. To detect which content has NULL for commit id, execute the following query:

.. code-block:: sql

    SELECT site, path FROM item_metadata WHERE commit_id is NULL;

|

When all content with NULL commit id is detected, the content needs to be edited manually by adding a change that will not affect content itself but will cause a Git change. (e.g. html or xml comment block, blank space etc.). The change needs to be committed in Git repo, then the sync repository feature will update the commit id in database.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Issues Caused by 'Ghost' Content in Database
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
'Ghost' content is content that has been deleted from repository, but its metadata remained in database. The only solution to this problem is to remove this content manually from database. Once 'ghost' content is identified the following queries need to be executed:

.. code-block:: sql

    DELETE FROM item_state WHERE site = 'mysite' and path = 'ghostcontent';

    DELETE FROM item_metadata WHERE site = 'mysite' and path = 'ghostcontent';

|


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Issues Upon a Cluster Restart
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
It's possible for the publisher to lock itself out upon a cluster restart where the nodes are based on k8s and IP/identifiers change with every restart.

To unlock publishing, open the ``Sidebar`` in Studio, then click on ``Project Tools`` ->  ``Publishing``. Click on the ``Status`` tab then click on the ``unlock publishing`` button (button with open padlock). Next, follow the instructions in the dialog to confirm action in order to unlock the publisher.

See :ref:`publishing-status` for more details on the unlock publisher button.

|hr|

.. _debugging-deployer-issues:

-------------------------------
Troubleshooting Deployer Issues
-------------------------------
^^^^^^^^^^^^^^^^
Unknown Host Key
^^^^^^^^^^^^^^^^
When configuring a Deployer target to connect to a remote host through SSH you might encounter the following error:

.. code-block:: java

	com.jcraft.jsch.JSchException: UnknownHostKey: SERVER_NAME. RSA key fingerprint is 50:db:75:ba:11:2f:43:c9:ab:14:40:6d:7f:a1:ee:e3

|

This normally means that the SSH host key from the remote server is stored in ECDSA format instead of RSA, under ``known_hosts``.
The Deployer requires the host key to be RSA. To fix this do the following:

#. Delete the ``~/.ssh/known_hosts`` file for the user that's running the Deployer.
#. Connect to the remote server with the following command to add the RSA key: ``ssh -o HostKeyAlgorithms=ssh-rsa SERVER_NAME``.

^^^^^^^^^^
Git Errors
^^^^^^^^^^
If the ``published`` folder in the Authoring installation became corrupted or had a Git issue that required manual intervention, and
the Deployer in Delivery is still pulling from that folder, there's a good probability that the Delivery repository has pull/merge
errors. If you see these errors in the log, after fixing the Authoring ``published`` repository, you can do a ``git reset --hard``
in the Delivery repository. This will reset the repository to the latest successful commit, and the Deployer will pull the changes
again from Authoring. You can also reset to a specific commit with ``git reset --hard <commit-hash>``.

You might also see Git diff errors when the Deployer is executing the ``GitDiffProcessor``. This means that the the changes
between the last processed commit and the last pulled commit could not be calculated. To fix this, go to ``data/deployer/processed-commits``
and locate the ``.commit`` file for the site. If you know the hash of the last correctly processed commit, update the value and the
Deployer will automatically process from that commit to the latest. If you don't know, delete the file and the Deployer will reprocess
from the initial commit, but **beware because this normally means that all files will be reprocessed/reindexed**.

^^^^^^^^^^^^^^^^^^^^
Connection Timed Out
^^^^^^^^^^^^^^^^^^^^
If the Deployer is not able to clone the remote repository and an error like below appears in the logs:

.. code-block:: java

    org.eclipse.jgit.errors.TransportException: ssh://jdoe@server2.example.com:63022/path/to/repo: Connection timed out (Connection timed out)
        at org.eclipse.jgit.transport.JschConfigSessionFactory.getSession(JschConfigSessionFactory.java:159)
        at org.eclipse.jgit.transport.SshTransport.getSession(SshTransport.java:137)
        at org.eclipse.jgit.transport.TransportGitSsh$SshFetchConnection.<init>(TransportGitSsh.java:274)
        at org.eclipse.jgit.transport.TransportGitSsh.openFetch(TransportGitSsh.java:169)
        at org.eclipse.jgit.transport.FetchProcess.executeImp(FetchProcess.java:136)
        at org.eclipse.jgit.transport.FetchProcess.execute(FetchProcess.java:122)
        at org.eclipse.jgit.transport.Transport.fetch(Transport.java:1236)
        at org.eclipse.jgit.api.FetchCommand.call(FetchCommand.java:213)
        ... 15 common frames omitted

|

Try a manual clone from the command line: `git clone ssh://jdoe@server2.example.com:63022/path/to/repo`

If the manual clone works, it's very probable that there's a proxy between the servers. The Deployer currently does not support connections through proxies but might get support in a future update.

|hr|

.. _debugging-ssh-issues:

------------------------------
Troubleshooting SSH Key Issues
------------------------------
In this section, we present a few errors that a user may encounter when using ssh keys with CrafterCMS and how to fix the errors.

^^^^^^^^^^^^^^^^
SSH Unknown Host
^^^^^^^^^^^^^^^^
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


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Remote Repository Not Found: USERAUTH fail
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Here's another error you may encounter in the logs when creating a site with a link to a remote repository using SSH keys:

.. code-block:: java

    org.apache.sshd.common.SshException: USERAUTH fail

|

This could mean that a passphrase was setup for the SSH keys. Crafter currently doesn't support using a passphrase with SSH keys. To fix the error, remove the passphrase from the SSH key.

There are a couple of ways to remove the passphrase from the SSH key:

#. Delete your existing key and generate a new key with NO PASSPHRASE.
#. Or, another way is to run the following:

   .. code-block:: sh

       $ ssh-keygen -p

   |

   It will then prompt you to enter the keyfile location (``CRAFTER_HOME/data/ssh`` by default), the old passphrase, and the new passphrase (leave this blank to have no passphrase).

|hr|

.. _debugging-ssl-issues:

------------------------------------
Troubleshooting SSL Handshake Issues
------------------------------------
In this section, we present an error that a user may encounter regarding SSL and how to fix the error.

Starting with JVM version 11.0.11, `support for TLS v1.1 and earlier is disabled <https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8202343>`__ by default as indicated in the
`Consolidated JDK 11 Release Notes <https://www.oracle.com/java/technologies/javase/11all-relnotes.html>`__ under ``security-libs/javax.net.ssl``.

If you encounter the following error in your application:

.. code-block:: java
   :emphasize-lines: 1
   :caption: *Example SSL Handshake Exception*

   Caused by: javax.net.ssl.SSLHandshakeException: No appropriate protocol (protocol is disabled or cipher suites are inappropriate)
     at sun.security.ssl.HandshakeContext.<init>(HandshakeContext.java:171) ~[?:1.8.0_292]
     at sun.security.ssl.ClientHandshakeContext.<init>(ClientHandshakeContext.java:98) ~[?:1.8.0_292]
     at sun.security.ssl.TransportContext.kickstart(TransportContext.java:220) ~[?:1.8.0_292]
     at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:428) ~[?:1.8.0_292]
     at com.mysql.cj.protocol.ExportControlled.performTlsHandshake(ExportControlled.java:317) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.protocol.StandardSocketFactory.performTlsHandshake(StandardSocketFactory.java:188) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.protocol.a.NativeSocketConnection.performTlsHandshake(NativeSocketConnection.java:97) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.protocol.a.NativeProtocol.negotiateSSLConnection(NativeProtocol.java:333) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.protocol.a.NativeAuthenticationProvider.connect(NativeAuthenticationProvider.java:167) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.protocol.a.NativeProtocol.connect(NativeProtocol.java:1350) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.NativeSession.connect(NativeSession.java:157) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.jdbc.ConnectionImpl.connectOneTryOnly(ConnectionImpl.java:953) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:823) ~[mysql-connector-java-8.0.23.jar:8.0.23]
     ... 173 more

|

This means your application is doing a connection with a version prior to TLSv1.2

**Please check the documentation of the library performing the connection to see if there's a way to enforce TLSv1.2 or higher** (for example, when using a MySQL JDBC driver you can enforce it by adding the ``enabledTLSProtocols=TLSv1.2`` parameter to your connection string).

If you must use TLSv1 or TLSv1.1, you can re-enable the disabled versions by removing "TLSv1" and/or "TLSv1.1" from the ``jdk.tls.disabledAlgorithms`` security property in the ``java.security`` configuration file.

Let's take a look at an example of re-enabling TLSv1 and TLSv1.1.

Look for the ``java.security`` file in ``JDK_INSTALL_HOME/conf/security``, and go to the property ``jdk.tls.disabledAlgorithms``:

   .. code-block:: properties
      :caption: *Example of jdk.tls.disabledAlgorithms property with TLSv1 and TLSV1.1 disabled*

      jdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \
        DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \
        include jdk.disabled.namedCurves

   |

To re-enable the versions, remove ``TLSv1`` and ``TLSv1.1`` from the property ``jdk.tls.disabledAlgorithms``

   .. code-block:: properties
      :caption: *Example of re-enabling TLSv1 and TLSV1.1*

      jdk.tls.disabledAlgorithms=SSLv3, RC4, DES, MD5withRSA, \
        DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \
        include jdk.disabled.namedCurves


