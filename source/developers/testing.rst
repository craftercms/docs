:is-up-to-date: True

.. _testing:

=======
Testing
=======

In CrafterCMS, you build on top of it and not in it so for normal development, there's no java coding, just groovy scripts.  There are some cases though where you may want to extend CrafterCMS and it is important to check that the added code behaves correctly and does not break any of the existing functions and features.  There is testing available in CrafterCMS to help you check that your new code behaves correctly during your development.

------------
Unit Testing
------------

The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as you expect. Each unit is tested separately before integrating them into modules to test the interfaces between modules. Unit testing has proven its value in that a large percentage of defects are identified during its use. [#]_

For unit testing in CrafterCMS Software we use Junit, Mockito and Spring Test on top of maven surefire plugin.

- For more details on JUnit, visit: http://junit.org/
- For more details on Spring Test, visit: http://docs.spring.io/spring-batch/reference/html/testing.html
- For more details on Mockito, visit: http://site.mockito.org/

See :ref:`unit-testing-groovy-code` for a unit test example.

.. rubric:: Footnotes

.. [#] Taken from a retired technical documentation from MSDN available for download here: https://www.microsoft.com/en-us/download/details.aspx?id=55979
