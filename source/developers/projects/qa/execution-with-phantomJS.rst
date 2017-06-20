.. _crafter-QA-phantom-js-exec:

=====================================
Test Suite Execution using PhantomJS.
=====================================

.. toctree::
   :maxdepth: 1


**Why PhantomJS to execute our test suites?**


To test application rapidly in various browsers and without any visual interruption, headless browser testing is used. Due to its speed, accuracy and easy to access features, HTML unit driver and PhantomJS are gaining popularity for headless browser testing. 

*Our organization uses PhantomJS for various purpose, for example,*

* Headless Website Testing
* Page Automation
* Network Monitoring
* To run Unit tests on command line

**How to execute the test suite using *PhantomJS*?**

1. Go to the *executionConstants.properties*, and add the value *PhantomJS* to the *webBrowser* constant.

.. image:: /_static/images/qa/PhantomJS4.png

2. We need add to the testng.xml our list of the test cases to execute.

.. image:: /_static/images/qa/TestSuite2.png

3. After type the test cases in the xml file , we will execute the testng.xml using *maven* with *phantomJS*.

3.1 Open your favorite console and using the command line go to the location of the automation project. (studio-test-suite)

.. image:: /_static/images/qa/QAMaven4.png


3.2 In this location in the console, type this command *mvn clean test* and wait.

.. image:: /_static/images/qa/QAMaven5.png

.. note:: The execution is done without browser opened.


