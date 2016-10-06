.. _crafter-QA:

===================
Creation Test Cases
===================

.. todo:: How to create a test case for *Crafter Studio*.

.. toctree::
   :maxdepth: 1
   
*The crafterframework have a Page Object Model (POM).*


**1. Why POM ?**


Starting a UI Automation in Selenium WebDriver is NOT a tough task. You just need to find elements, perform operations on it .

Consider this simple script to login into a crafter local site. 


**2. What is POM?**


1. Page Object Model is a design pattern to create Object Repository for web UI elements.
2. Under this model, for each web page in the application there should be corresponding page class.
3. This Page class will find the WebElements of that web page and also contains Page methods which perform operations on those WebElements.
4. Name of these methods should be given as per the task they are performing. 

.. note:: i.e., if I press a button to create a new site in *crafter studio*, POM method name can be **clickOnCreateButtonToCreateSite()**.

**The final project of CrafterSoftware Framework looks that**

.. image:: /_static/images/CreationTestCase1.png


**Advantages of POM.**


1. Page Object Patten says operations and flows in the UI should be separated from verification. This concept makes our code cleaner and easy to understand.
2. Second benefit is the object repository is independent of testcases, so we can use the same object repository for a different purpose with different tools. For example, we can integrate POM with TestNG/JUnit for functional testing and at the same time with JBehave/Cucumber for acceptance testing.
3. Code becomes less and optimized because of the reusable page methods in the POM classes.
4. Methods get more realistic names which can be easily mapped with the operation happening in UI. i.e. if after clicking on the button we land on the home page, the method name will be like 'gotoHomePage()'.  


**4. How to create a Test Case for Crafter Studio?**

1. Create a package with the name *Pages*.

.. image:: /_static/images/CreationTestCase2.png

2. Create a testNG class with the name *LoginPage* in to the package *Pages*.

.. image:: /_static/images/CreationTestCase3.png


3. Type this code in the class *LoginPage* Created

.. code-block:: ruby
