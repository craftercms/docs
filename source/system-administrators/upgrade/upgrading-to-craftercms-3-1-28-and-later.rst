:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-28:

==============================================================
Upgrade Notes for CrafterCMS 3.1.28 and later |enterpriseOnly|
==============================================================

CrafterCMS 3.1.28 sets a default esapi library via the environment variable ``CRAFTER_ESAPI_DEFAULT_CONFIGURATION``.

When upgrading to *CrafterCMS 3.1.28 and later* from *CrafterCMS 3.1.27 and earlier*, please add the following,
as needed, in your authoring and delivery installs:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   export CRAFTER_ESAPI_DEFAULT_CONFIGURATION=${CRAFTER_ESAPI_DEFAULT_CONFIGURATION:="org.owasp.esapi.reference.DefaultSecurityConfiguration"}

|

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/apache-tomcat/bin/setenv.sh*

   JAVA_OPTS="$JAVA_OPTS -Dtomcat.shutdown.port=$TOMCAT_SHUTDOWN_PORT -Dorg.owasp.esapi.SecurityConfiguration=$CRAFTER_ESAPI_DEFAULT_CONFIGURATION"


