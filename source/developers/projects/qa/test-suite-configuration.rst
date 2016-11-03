.. _crafter-QA:

========================
Test Suite Configuration
========================




.. toctree::
   :maxdepth: 1
   
**How execute a test cases using a test suite of testNG.?**


TestNG enables you to run test methods, test classes and tests in parallel inside your project.
By performing parallel execution, we can reduce the 'execution time' as tests are started and executed
simultaneously in different threads.

Here we will see how to run multiple classes (aka different suites) using TestNG. 

.. note:: You should be have a setup *Automation Environment* ready and some test cases created in the craftersoftware framework project. 

1. Create a new file in your project and name it as testing.xml.

.. image:: /_static/images/TestSuite1.png


**Parallel execution in TestNG**

After creating xml file as shown above, in next step, we will execute the parallel test. Below is the code. 

.. image:: /_static/images/TestSuite2.png

After type the code in the xml file created, we will execute the test suite.

.. image:: /_static/images/TestSuite3.png


When you execute the above code, you will get the following output.

Output: 

.. image:: /_static/images/TestSuite4.png

