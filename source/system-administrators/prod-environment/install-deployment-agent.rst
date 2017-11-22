:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

========================
Install Deployment Agent
========================

The Deployment Agent is included in the bundle, so you do not need to install it. If you are not using the bundle, you can install and configure it as follows:

#. Download the deployment agent from: http://downloads.craftercms.org/craftercms/community/2-5-2/cstudio-publishing-receiver.zip
#. Create an install directory: ``/opt/crafter/crafter-deployer``
#. Unzip the deployment agent into the install directory ``/opt/craftercrafter-CMS-deployer``
#. By default the server will listen for HTTP requests on port 9191 and will require the password 'admin'
#. To customize deployment agent properties and targets, change the following file names (paths relative to install directory):

    #. ``conf/custom-receiver-context.xml.sample to conf/custom-receiver-context.xml``
    #. ``conf/custom-shutdown-context.xml.sample to conf/custom-shutdown-context.xml``
    #. ``conf/custom-receiver.properties.sample to conf/custom-receiver.properties``

.. code-block:: properties
    :caption: ``/opt/craftercrafter-wem-deployer/conf/custom-receiver.properties``

    receiver.port:9191
    receiver.password=admin

To configure or override the deployment targets, edit **SampleTarget** in ``conf/sample-target-context.xml`` or add a new target:

.. code-block:: xml
    :caption: /opt/craftercrafter-wem-deployer/conf/sample-target-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
            xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
            http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        <bean id="SampleTarget" class="org.craftercms.cstudio.publishing.target.PublishingTarget" init-method="register">
            <property name="name"><value>sample</value></property>
            <property name="manager" ref="TargetManager"/>
            <property name="postProcessors">
                <list>
                    <ref bean="SearchUpdateProcessor" />
                    <ref bean="SampleCacheInvalidate" />
                </list>
            </property>
            <property name="params">
                <map>
                    <entry key="root"><value>target/sample</value></entry>
                    <entry key="contentFolder"><value>content</value></entry>
                    <entry key="metadataFolder"><value>metadata</value></entry>
                </map>
            </property>
        </bean>
        <bean id="SampleCacheInvalidate" class="org.craftercms.cstudio.publishing.processor.CacheInvalidatePostProcessor">
            <property name="cacheInvalidateUrl" value="http://localhost:8080/api/1/cache/clear_all" />
        </bean>
        <bean id="SearchService" class="org.craftercms.search.service.impl.RestClientSearchService">
            <property name="serverUrl" value="http://localhost:8080/crafter-search"/>
        </bean>
        <bean id="SearchUpdateProcessor" class="org.craftercms.cstudio.publishing.processor.SearchUpdateProcessor">
            <property name="searchService" ref="SearchService"/>
            <property name="siteName"><value>sample</value></property>
        </bean>
        <bean id="searchFlattenXmlProcessor" class="org.craftercms.cstudio.publishing.processor.SearchUpdateFlattenXmlProcessor">
            <property name="searchService" ref="SearchService"/>
            <property name="siteName"><value>sample</value></property>
            <property name="includeElementXPathQuery" value="//include" />
            <property name="charEncoding" value="UTF-8" />
        </bean>
        <bean id="SamplePostProcessor" class="org.craftercms.cstudio.publishing.processor.SamplePostProcessor"/>
    </beans>

.. warning::

    If tomcat port numbers for delivery node have been changed, apply port number change for property value accordingly.

#. ``name`` property is the key to find a deployment target from authoring end.
#. Set the deployment target location by updating ``root`` property value.
#. Add custom post-deployment processors. Custom post-deployment processors must implement ``org.craftercms.cstudio.publishing.processor.PublishingProcessor`` interface.

.. code-block:: xml
    :caption: base-context.xml

    <bean id="SamplePostProcessor" class="org.craftercms.cstudio.publishing.processor.SamplePostProcessor"/>

--------------
PostProcessors
--------------


^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CacheInvalidatePostProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^
CommandProcessor
^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^
EmailProcessor
^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^
HttpMethodCallPostProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
OnPathMatchConditionalProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^
PerSiteConditionalProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^
SamplePostProcessor
^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^
SearchAttachmentProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SearchAttachmentWithExternalMetadataPostProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SearchIndexBinaryFilesProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^
SearchIndexingProcessor
^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SearchUpdateFlattenXmlProcessor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^^^^^^^^
SearchUpdateProcessor
^^^^^^^^^^^^^^^^^^^^^

^^^^^^^^^^^^^^
ShellProcessor
^^^^^^^^^^^^^^

----------------------------------------------
Automatic Start-up of Crafter Deployment Agent
----------------------------------------------

^^^^^
Linux
^^^^^

.. code-block:: shell
    :caption: /etc/init.d/crafterdeployer

    #!/bin/sh
    export CDEPLOYER_HOME_PATH='/opt/crafter/crafter-deployer'
    deployerPID=`ps -ef|grep "${DEPLOYER_HOME_PATH}"|grep java| awk '{print $2}'`;
    cur_dir=`pwd`;
    case "$1" in
    start)
    cd ${CDEPLOYER_HOME_PATH};
    sh start-deploy-agent.sh
    cd $cur_dir;
    ;;
    stop)
    cd ${CDEPLOYER_HOME_PATH};
    sh stop-deploy-agent.sh;
    if ! test -z $deployerPID;
    then
    echo "Killing Deployer process $deployerPID";
    kill -9 $deployerPID;
    fi
    cd $cur_dir;
    ;;
    restart)
    $0 stop;
    sleep 1;
    $0 start
    ;;
    *)
    echo "Usage: $0 {start|stop|restart}";
    exit 1;
    ;;
    esac
    exit 0

^^^^^^^^^^^^^^^
Windows Service
^^^^^^^^^^^^^^^

The deployment agent can be registered as Windows Service using Apache Prunsrv. Below is an example command.

.. code-block:: shell

    prunsrv //IS//CrafterDeployer --DisplayName="Crafter Deployer" --Install=C:\opt\prunsrv\prunsrv.exe --StartMode=java --Jvm=auto --JavaHome=C:\opt\java\jdk1.7.0 --StartPath="C:\opt\crafter\crafter-deployer" --StartClass=org.craftercms.cstudio.publishing.PublishingReceiverMain  --StopMode=java --StopPath="C:\opt\crafter\crafter-deployer" --StopClass=org.craftercms.cstudio.publishing.StopServiceMain --Classpath="C:\opt\crafter\crafter-deployer" ++JvmOptions="-Djava.ext.dirs=C:\opt\crafter\crafter-deployer" --LogPath="C:\opt\crafter\crafter-deployer"
     --LogPrefix="deployment" --LogLevel=Debug --StdOutput=auto --StdError=auto --PidFile=pid.txt --Startup=auto --Description="Crafter Deployer"

.. todo:: Fill details on PostProcessors (description and properties)