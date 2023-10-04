^^^^^^^^^
JVM Level
^^^^^^^^^
To configure the heap size, etc for the JVM, open ``CRAFTER_HOME/bin/crafter-setenv.sh`` and update the environment
variable ``CATALINA_OPTS`` to desired value like below:

.. code-block:: bash
    :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

    export CATALINA_OPTS=${CATALINA_OPTS:="-server -Xss1024K -Xms1G -Xmx4G -Dlog4j2.formatMsgNoLookups=true"}

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Tomcat Application Server Level
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
""""""""""""""""""""""
Connector Thread Count
""""""""""""""""""""""
Update the Tomcat Connector thread count to correlate to the number of CPU cores available on the server. This will ensure that the server is able to handle the maximum number of concurrent requests.

To configure the maximum number of active threads and minimum number of threads (idle and active) alive, open the
file ``CRAFTER_HOME/bin/apache-tomcat/conf/server.xml`` and set the following in the connector:

- maxThreads="<DESIRED_MAX_THREADS>"
- minSpareThreads="<DESIRED_MIN_SPARETHREADS>">

In the configuration below, we set ``maxThreads`` to 600 and ``minSpareThreads`` to 100. For more information on Tomcat thread pools, see https://tomcat.apache.org/tomcat-9.0-doc/config/executor.html

.. code-block:: xml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/conf/server.xml*
    :emphasize-lines: 5-6

    <Connector port="${tomcat.http.port}" protocol="HTTP/1.1" URIEncoding="UTF-8"
               connectionTimeout="20000"
               redirectPort="${tomcat.https.port}"
               maxParameterCount="1000"
               maxThreads="600"
               minSpareThreads="100"
               />

|
