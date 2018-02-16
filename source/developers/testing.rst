.. _testing:

=======
Testing
=======

In Crafter CMS, you build on top of it and not in it so for normal development, there's no java coding, just groovy scripts.  There are some cases though where you may want to extend Crafter CMS and it is important to check that the added code behaves correctly and does not break any of the existing functions and features.  There are a couple of testing available in Crafter CMS to help you check that your new code behaves correctly during your development.

------------
Unit Testing
------------

The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as you expect. Each unit is tested separately before integrating them into modules to test the interfaces between modules. Unit testing has proven its value in that a large percentage of defects are identified during its use. [#]_

For unit testing in Crafter CMS Software we use Junit, Mockito and Spring Test on top of maven surefire plugin.

- For more details on JUnit, visit: http://junit.org/
- For more details on Spring Test, visit: http://docs.spring.io/spring-batch/reference/html/testing.html
- For more details on Mockito, visit: http://site.mockito.org/


-------------------
Integration Testing
-------------------

Integration testing is a logical extension of unit testing. In its simplest form, two units that have already been tested are combined into a component and the interface between them is tested. A component, in this sense, refers to an integrated aggregate of more than one unit. In a realistic scenario, many units are combined into components, which are in turn aggregated into even larger parts of the program. [#]_

We use Integration Testing as a full test of the software. This includes UI interface, for that we use Selenium Webdriver, GhostDriver and PhantomJs (optionally you may use any other webdriver, but official tests will be done on PhantomJs)

- For more details on Selenium, please visit: http://www.seleniumhq.org/
- For more details on PhantomJs, please visit: http://phantomjs.org/

To run the whole test suite for craftercms, in your command line window, go to your craftercms install folder, then type in the following:

``./gradlew test``

To run only the api tests for craftercms, run the following:

.. code-block:: guess

   ./gradlew test -Pcrafter.testing.suites="src/test/resources/testngAPI.xml"

To see all tests available, please see the ``build.gradle`` file in your craftercms install directory

.. rubric:: Footnotes

.. [#] http://msdn.microsoft.com/en-us/library/aa292197(v=vs.71).aspx
.. [#] http://msdn.microsoft.com/en-us/library/aa292128(v=vs.71).aspx
