:is-up-to-date: True

:orphan:

..  index:: Unit Testing Crafter CMS Groovy Code, unit test

.. _unit-testing-groovy-code:

====================================
Unit Testing Crafter CMS Groovy Code
====================================

For larger sites with complex services implemented in Groovy, it is very helpful to have a way to include unit tests in a way that can be easily integrated with CI/CD systems.

This section details how to create unit tests for Crafter CMS Groovy code with Gradle.

For more information on the classes of the variables that can be mocked for unit testing, see  :ref:`groovy-api`

-----------------------------------
Steps for Creating Groovy Unit Test
-----------------------------------

To create a unit test:

#. Designate a folder for all test related files
#. Write your unit test code
#. Setup your unit test to run with Gradle
#. Execute your unit test

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Designate folder for all test related files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Designate a folder in the site repository to contain all test related files. For example:

   .. code-block:: text
      :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox*

      /scripts
         /test
           /classes   (all packages & groovy classes for testing)
           /resources (all additional files required for testing)

   |


This structure is the equivalent of the standard folders used for Java/Groovy projects:

   .. code-block:: text

      /src/test/groovy
      /src/test/resources

   |

^^^^^^^^^^^^^^^^^^^^^^^^^
Write your unit test code
^^^^^^^^^^^^^^^^^^^^^^^^^

There are no restrictions or requirements for the unit test code, developers can choose any testing framework supported by the build tool. Examples: `spring-test <http://docs.spring.io/spring-batch/reference/html/testing.html>`__, `junit <http://junit.org/>`__, `testng <https://testng.org/doc/index.html>`__, `spock <https://spockframework.org/>`__

Remember when writing unit test code, developers will be responsible for:

- Choosing & configuring the testing framework
- Making sure all required dependencies are included (for example external jars)
- Mocking all Crafter Engine classes used by the classes under testing


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setup your unit test to run with Gradle
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To use Gradle the only requirement is to add a ``build.gradle`` in the root folder of the site repository and execute the ``test`` task. Example:

.. code-block:: groovy
   :force:
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/build.gradle*
   :linenos:

   # Enable Gradle’s Groovy plugin
   plugins {
     id 'groovy'
   }

   sourceSets {
     # Add the site Groovy classes that will be tested
     main {
       groovy {
         srcDir 'scripts/classes'
       }
     }

     # Add the Groovy classes & resources to perform the tests
     test {
       groovy {
         srcDir 'scripts/test/classes'
       }
       resources {
         srcDir 'scripts/test/resources'
       }
     }
   }

   # Enable the testing framework of choice
   test {
     useJUnit()
   }

   repositories {
     mavenCentral()
   }

   # Include the required dependencies
   dependencies {
     # This dependency is required for two reasons:
     # 1. Make Engine’s classes available for compilation & testing
     # 2. Include the Groovy dependencies required by Gradle
     implementation 'org.craftercms:crafter-engine:3.1.13:classes'

     # Include the chosen testing dependencies
     testImplementation 'junit:junit:4.13.2'
     testImplementation 'org.mockito:mockito-core:3.9.0'
   }

|

^^^^^^^^^^^^^^^^^^^^^^
Execute your unit test
^^^^^^^^^^^^^^^^^^^^^^

Given the previous example the tests can be executed using a single command:

   .. code-block:: bash

      gradle test

   |

-------
Example
-------

Let's take a look at an example of a groovy unit test in a site created using the empty blueprint with a custom groovy script, ``MyService``

.. image:: /_static/images/developer/unit-test/unit-test-groovy-sample-service.png
    :alt: Unit Testing Groovy - Sample Service
    :width: 35 %
    :align: center

|

.. literalinclude:: /_static/code/developer/groovy-unit-test/MyService.groovy
   :language: groovy
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/scripts/classes/org/company/site/api/MyService.groovy*
   :linenos:

|

.. literalinclude:: /_static/code/developer/groovy-unit-test/MySearchService.groovy
   :language: groovy
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/scripts/classes/org/company/site/api/MySearchService.groovy*
   :linenos:

|

.. literalinclude:: /_static/code/developer/groovy-unit-test/ExternalApi.groovy
   :language: groovy
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/scripts/classes/org/company/site/api/ExternalApi.groovy*
   :linenos:

|

.. literalinclude:: /_static/code/developer/groovy-unit-test/MyServiceImpl.groovy
   :language: groovy
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/scripts/classes/org/company/site/impl/MyServiceImpl.groovy*
   :linenos:

|

Let's begin creating our unit test for ``MyService``

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Designate folder for all test related files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we need to do is to designate a folder for all test related files.  We'll designate the ``/scripts/test`` folder to be used for all test related files.

^^^^^^^^^^^^^^^^^^^^^^^^^
Write your unit test code
^^^^^^^^^^^^^^^^^^^^^^^^^

Next, we'll write the unit test code.

.. image:: /_static/images/developer/unit-test/unit-test-groovy-sample-unit-test.png
   :alt: Unit Testing Groovy - Sample Service
   :width: 35 %
   :align: center

|

.. literalinclude:: /_static/code/developer/groovy-unit-test/MyServiceImplTest.groovy
   :language: groovy
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/scripts/test/classes/org/company/impl/MyServiceImplTest.groovy*
   :linenos:

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setup your unit test to run with Gradle
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We'll now setup our unit test to run with Gradle, by adding a ``build.gradle`` file in the root folder of the site repository and execute the ``test`` task.

.. literalinclude:: /_static/code/developer/groovy-unit-test/MyServiceImplTest.groovy
   :language: groovy
   :force:
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/build.gradle*
   :linenos:

^^^^^^^^^^^^^^^^^^^^^^
Execute your unit test
^^^^^^^^^^^^^^^^^^^^^^

Finally, we can run our unit test by running ``gradle test``

   .. code-block:: bash
      :caption: *Output when running unit test*

      $ gradle test

      BUILD SUCCESSFUL in 4s
      3 actionable tasks: 3 up-to-date

   |

Let's take a look at the result of our unit test which can be found here: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/build/reports/tests/test/index.html*

.. image:: /_static/images/developer/unit-test/unit-test-build-result.png
   :alt: Unit Testing Groovy - Unit test  build report
   :width: 75 %
   :align: center

|
