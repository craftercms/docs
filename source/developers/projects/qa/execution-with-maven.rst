.. _crafter-QA:

================================
Test Suite Execution with Maven.
================================

.. toctree::
   :maxdepth: 1


**Maven**

Integrating Maven with Selenium provides following benefits
Apache Maven provides support for managing the full lifecycle of a test project.

* Maven is used to define project structure, dependencies, build, and test management.
* Using pom.xml(Maven) you can configure dependencies needed for building testing and running code.
* Maven automatically downloads the necessary files from the repository while building the project.


1. We need install the *Homebrew* using `a link`_.

.. _a link: http://brew.sh/

2. Open your favorite console and type this command to install *Maven*.

*brew install maven*
.. note:: You need Eclipse with Maven installed

3. We need add to the testng.xml our list of the test cases to execute.

.. image:: /_static/images/TestSuite2.png

4. After type the test cases in the xml file , we will execute the testng.xml using *maven*.

4.1 Open your favorite console and using the command line go to the location of the automation project. (studio-test-suite)

.. image:: /_static/images/QAMaven4.png


4.2 In this location in the console, type this command *mvn clean test* and wait.

.. image:: /_static/images/QAMaven5.png
