:is-up-to-date: True

=============================================
Using Custom Processors with Crafter Deployer
=============================================

Crafter Deployer can be easily configured to match different needs but in case additional features are needed it is
also possible to include custom libraries by following this guide:

-----------------------------------
Step 1: Create the custom processor
-----------------------------------

Custom processors are completely free to use any third party library or SDK, the only requisite is to define a class
that implements the ``DeploymentProcessor`` interface.

.. note::
  It is highly recommended to extend ``AbstractDeploymentProcessor`` or ``AbstractMainDeploymentProcessor`` instead of
  just implementing the interface.

These classes can be accessed by adding a dependency in your project:

.. code-block:: xml

  <dependency>
    <groupId>org.craftercms</groupId>
    <artifactId>crafter-deployer</artifactId>
    <version>${craftercms.version}</version>
  </dependency>


--------------------------------
Step 2: Add the custom processor
--------------------------------

Custom processors are included to the Crafter Deployer classpath by adding all the required jar files in the following 
folder:

  ``INSTALL_DIR/bin/crafter-deployer/lib``

.. note::
   Make sure to carefully review all other dependencies in your project to make sure there are no conflicts with 
   the libraries used by Crafter Deployer or any other custom processor.

--------------------------------------
Step 3: Configure the custom processor
--------------------------------------

Once the custom processor is placed in the classpath, the only remaining step is to create o update a target to use it.
All configuration files for targets will be placed in the following folder:

  ``INSTALL_DIR/data/deployer/targets``

First you need to create or update a context file to define all beans required by the custom processor, the file should
be have the name ``{site}-{env}-context.xml``:

.. code-block:: xml

  <bean id="externalService" class="com.example.Service">
    <property name="url" value="${service.url}"/>
    <property name="port" value="${service.port}"/>
  </bean>

  <bean id="myCustomProcessor" class="com.example.CustomProcessor" parent="deploymentProcessor">
    <property name="service" ref="externalService"/>
  </bean>

.. note::
  The parent bean is provided by Crafter Deployer and it includes common configuration used by the
  ``AbstractDeploymentProcessor`` and ``AbstractMainDeploymentProcessor`` classes.

Once the bean has been defined it can be added to the target's pipeline in the yaml file with the matching name 
``{site}-{env}.yaml``:

.. code-block:: yaml

  target:
    env: preview
    siteName: mySite
    deployment:
      scheduling:
         enabled: false
      pipeline:
        - processorName: myCustomProcessor
          username: john
          password: passw0rd!
  service:
    url: http://www.example.com
    port: 8080


Any change in the classpath will require a restart of Crafter Deployer, changes in configuration files will be
applied when the target is reloaded.
