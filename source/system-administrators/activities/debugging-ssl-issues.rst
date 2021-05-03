:is-up-to-date: True

.. _debugging_ssl_issues:

==============================
Debugging SSL Handshake Issues
==============================

In this section, we present an error that a user may encounter regarding SSL and how to fix the error.

Java has decided to `disable support for TLS 1.0 and 1.1 <https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8202343>`__ in the latest Java version 1.8.0_292 as indicated in the
`Consolidated Release Notes for JDK 8 and JDK 8 Update Releases <https://www.oracle.com/java/technologies/javase/8all-relnotes.html>`__ under ``security-libs/javax.net.ssl``.


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

Look for the ``java.security`` file in ``JDK_INSTALL_HOME/jre/lib/security``, and go to the property ``jdk.tls.disabledAlgorithms``:

   .. code-block:: property
      :caption: *Example of jdk.tls.disabledAlgorithms property with TLSv1 and TLSV1.1 disabled*

      jdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \
        DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \
        include jdk.disabled.namedCurves

   |

To re-enable the versions, remove ``TLSv1`` and ``TLSv1.1`` from the property ``jdk.tls.disabledAlgorithms``

   .. code-block:: property
      :caption: *Example of re-enabling TLSv1 and TLSV1.1*

      jdk.tls.disabledAlgorithms=SSLv3, RC4, DES, MD5withRSA, \
        DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \
        include jdk.disabled.namedCurves

