:is-up-to-date: True

.. _crafter-studio-debugging-deployer-issues:

=========================
Debugging Deployer Issues
=========================

.. include:: /includes/ssh-unknown-host.rst

----------
Git Errors
----------

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

--------------------
Connection Timed Out
--------------------

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

Try a manual clone from the command line:

.. code-block:: bash

   git clone ssh://jdoe@server2.example.com:63022/path/to/repo

|

If the manual clone works, it's very probable that there's a proxy between the servers.  The Deployer currently does not support connections through proxies but might get support in a future update.