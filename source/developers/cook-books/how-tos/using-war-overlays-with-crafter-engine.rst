
======================================
Using War Overlays with Crafter Engine
======================================

Crafter Engine, the delivery component of Crafter CMS is completely programmable with scripted Groovy.
From time to time:

- you may find that you want to build classes in Java directly
- or you may need to include dependencies in a deployment where Ivy and Grapes are not an option
- or you may need to modify the Web.xml of the engine WAR file for some reason.

These scenarios are an exception but they do come up. For these scenarios, you want to create a `Maven WAR Overlay <https://maven.apache.org/plugins/maven-war-plugin/overlays.html>`_.  Overlays allow you to add and override contents of Crafter CMS component WARs like Crafter Studio, Engine, Profile, and Social.

An overlay is a very simple maven project that downloads a specific version of Crafter Engine (specified in the POM file), downloads the additional dependencies you require, builds your source code that’s specific to your project, packages it to a jar and then combines all of these into a new WAR file.

Let’s create an example where we simply want to overlay a dependency into the jar, for example, the Amazon AWS SDK.

----------------------------------
Step 1: Create a project structure
----------------------------------

Create a directory structure as follows:

.. code-block:: text

    +--my-project (project root directory)
    |
    +--src
        |
        +--main
             |
             +--java (your class structure starts here)
             |
             +--webapp (any files you want to override or include in the webapp like web.xml)

|

----------------------------------
Step 2: Create your Maven POM file
----------------------------------

In a file at my-project/pom.xml put the following contents:

.. code-block:: xml
    :linenos:

    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>com.mysite</groupId>
        <artifactId>craftercms-engine-overlay</artifactId>
        <version>1.0.0-SNAPSHOT</version>
        <packaging>war</packaging>
        <name>craftercms-engine-overlay</name>
        <description>craftercms-engine-overlay</description>

        <properties>
        </properties>

        <dependencies>
          <dependency>
              <groupId>org.craftercms</groupId>
              <artifactId>crafter-engine</artifactId>
              <version>3.0.8</version>
              <type>war</type>
          </dependency>

          <!-- ADD YOUR DEPS HERE -->
          <dependency>
              <groupId>com.amazonaws</groupId>
              <artifactId>aws-java-sdk</artifactId>
              <version>1.11.289</version>
          </dependency>
        </dependencies>

        <build>
        <finalName>ROOT</finalName>

        <plugins>
          <plugin>
              <!--<groupId>org.apache.maven.plugins</groupId>-->
              <artifactId>maven-compiler-plugin</artifactId>
              <version>3.3</version>
              <configuration>
                <source>1.8</source>
                <target>1.8</target>
              </configuration>
          </plugin>

        <plugin>
        <artifactId>maven-war-plugin</artifactId>
        <version>2.1.1</version>
        <configuration>
        <workDirectory>target/overlay-war-folder</workDirectory>
        <overlays>
          <overlay>
              <groupId>org.craftercms</groupId>
              <artifactId>crafter-engine</artifactId>
          </overlay>
        </overlays>
        </configuration>
          </plugin>
        </plugins>
        </build>
    </project>

|

Note that the above POM file is very simple.  It simply states that you want to download Crafter Engine 3.0.8, Download Amazon’s 1.11.x SDK and then recombine these into a new Engine WAR file called ROOT.war in the output directory target folder.

---------------------
Step 3: Run the Build
---------------------

Type the following command in your project directory: **mvn clean package**

Similar output to the following is expected:

.. code-block:: text
    :linenos:

    mvn clean package
    [INFO] Scanning for projects...
    [INFO]
    [INFO] ------------------------------------------------------------------------
    [INFO] Building craftercms-engine-overlay 2.2.8-SNAPSHOT
    [INFO] ------------------------------------------------------------------------
    [INFO]
    [INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ craftercms-engine-overlay ---
    [INFO] Deleting /Users/rdanner/code/test-war-overlay/target
    [INFO]
    [INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ craftercms-engine-overlay ---
    [WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
    [INFO] skip non existing resourceDirectory /Users/rdanner/code/test-war-overlay/src/main/resources
    [INFO]
    [INFO] --- maven-compiler-plugin:3.3:compile (default-compile) @ craftercms-engine-overlay ---
    [INFO] No sources to compile
    [INFO]
    [INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ craftercms-engine-overlay ---
    [WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
    [INFO] skip non existing resourceDirectory /Users/rdanner/code/test-war-overlay/src/test/resources
    [INFO]
    [INFO] --- maven-compiler-plugin:3.3:testCompile (default-testCompile) @ craftercms-engine-overlay ---
    [INFO] No sources to compile
    [INFO]
    [INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ craftercms-engine-overlay ---
    [INFO] No tests to run.
    [INFO]
    [INFO] --- maven-war-plugin:2.1.1:war (default-war) @ craftercms-engine-overlay ---
    [INFO] Packaging webapp
    [INFO] Assembling webapp [craftercms-engine-overlay] in [/Users/rdanner/code/test-war-overlay/target/ROOT]
    [INFO] Processing war project
    [INFO] Processing overlay [ id org.craftercms:crafter-engine]
    [INFO] Webapp assembled in [780 msecs]
    [INFO] Building war: /Users/rdanner/code/test-war-overlay/target/ROOT.war
    [INFO] WEB-INF/web.xml already added, skipping
    [INFO] ------------------------------------------------------------------------
    [INFO] BUILD SUCCESS
    [INFO] ------------------------------------------------------------------------
    [INFO] Total time: 3.658 s
    [INFO] Finished at: 2018-03-07T21:11:09-05:00
    [INFO] Final Memory: 14M/309M
    [INFO] ------------------------------------------------------------------------

|

---------------------------
Step 4: Deploy Your New WAR
---------------------------

In the project folder, you will now see a target folder with a ROOT.war in it.  This is your new WAR file.  You can now place this in the webapps folder of your Crafter CMS authoring or delivery server.
