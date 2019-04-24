:is-up-to-date: True

.. _testing:

=======
Testing
=======

In Crafter CMS, you build on top of it and not in it so for normal development, there's no java coding, just groovy scripts.  There are some cases though where you may want to extend Crafter CMS and it is important to check that the added code behaves correctly and does not break any of the existing functions and features.  There is testing available in Crafter CMS to help you check that your new code behaves correctly during your development.

------------
Unit Testing
------------

The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as you expect. Each unit is tested separately before integrating them into modules to test the interfaces between modules. Unit testing has proven its value in that a large percentage of defects are identified during its use. [#]_

For unit testing in Crafter CMS Software we use Junit, Mockito and Spring Test on top of maven surefire plugin.

- For more details on JUnit, visit: http://junit.org/
- For more details on Spring Test, visit: http://docs.spring.io/spring-batch/reference/html/testing.html
- For more details on Mockito, visit: http://site.mockito.org/



.. rubric:: Footnotes

.. [#] http://msdn.microsoft.com/en-us/library/aa292197(v=vs.71).aspx
