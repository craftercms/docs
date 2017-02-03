.. _crafter-QA:

==================
Test Case Creation
==================




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


1. Page Object Pattern says operations and flows in the UI should be separated from verification. This concept makes our code cleaner and easy to understand.
2. Second benefit is the object repository is independent of testcases, so we can use the same object repository for a different purpose with different tools. For example, we can integrate POM with TestNG/JUnit for functional testing and at the same time with JBehave/Cucumber for acceptance testing.
3. Code becomes less and optimized because of the reusable page methods in the POM classes.
4. Methods get more realistic names which can be easily mapped with the operation happening in UI. i.e. if after clicking on the button we land on the home page, the method name will be like 'gotoHomePage()'.  


**4. How to create a Test Case for Crafter Studio?**

1. Create a package with the name *CrafterTools* in to the *src* package.

.. image:: /_static/images/CreationTestCase8.png

2. Create in to the *CrafterTools* package the following classes.

*ConstantsPropertiesManager.java*

.. code-block:: c

   package CrafterTools;
   
   import java.io.FileInputStream;
   import java.io.IOException;
   import java.util.Properties;
   
   public class ConstantsPropertiesManager {
   private String baseUrl;
   private String webBrowser;
   private Properties sharedExecutionConstants;

   public ConstantsPropertiesManager(String filePath) {

      this.sharedExecutionConstants = new Properties();
      
      try {
         
         sharedExecutionConstants.load(new FileInputStream(filePath));
         
         this.baseUrl = sharedExecutionConstants.getProperty("baseUrl");
         this.webBrowser = sharedExecutionConstants.getProperty("webBrowser");
         
      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }
   }

   public String getBaseUrl() {
      return baseUrl;
   }

   public void setBaseUrl(String baseUrl) {
      this.baseUrl = baseUrl;
   }

   public String getWebBrowser() {
      return webBrowser;
   }

   public void setWebBrowser(String webBrowser) {
      this.webBrowser = webBrowser;
   }

   public Properties getSharedExecutionConstants() {
      return sharedExecutionConstants;
   }

   public void setSharedExecutionConstants(Properties sharedExecutionConstants) {
      this.sharedExecutionConstants = sharedExecutionConstants;
   }
   }

*FilesLocations.java*

.. code-block:: c

   package CrafterTools;

   public interface FilesLocations {

    public static String UIELEMENTSPROPERTIESFILEPATH = "./SharedUIElements.properties";
    public static String CONSTANTSPROPERTIESFILEPATH = "./ExecutionConstants.properties";
    public static String DATAOFTHEEXECUTIONPATH = "./DataOfTheExecution.properties";
   
   }

*UIElementsPropertiesManager.java*

.. code-block:: c

   package CrafterTools;
   
   import java.io.FileInputStream;
   import java.io.IOException;
   import java.util.Properties;
   
   public class UIElementsPropertiesManager {
   Properties sharedUIElementsLocators;

   public UIElementsPropertiesManager(String filePath) {
      sharedUIElementsLocators = new Properties();
      try {
         sharedUIElementsLocators.load(new FileInputStream(filePath));
      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }
   }

   public Properties getSharedUIElementsLocators() {
      return sharedUIElementsLocators;
   }

   public void setSharedUIElementsLocators(Properties sharedUIElementsLocators) {
      this.sharedUIElementsLocators = sharedUIElementsLocators;
   }
   
   public Properties getSharedDataOfExecutionLocators() {
      return sharedUIElementsLocators;
   }

   }

*WebDriverManager.java*

.. code-block:: c

   package org.craftercms.studio.test.utils;

   import java.util.concurrent.TimeUnit;

   import org.openqa.selenium.WebDriver;
   import org.openqa.selenium.chrome.ChromeDriver;
   import org.openqa.selenium.firefox.FirefoxDriver;
   import org.openqa.selenium.phantomjs.PhantomJSDriver;
   import org.openqa.selenium.phantomjs.PhantomJSDriverService;
   import org.openqa.selenium.remote.DesiredCapabilities;
   import org.openqa.selenium.safari.SafariDriver;

   public class WebDriverManager {
      WebDriver driver;
      ConstantsPropertiesManager constantsPropertiesManager;
   
      public void openConnection() {
         constantsPropertiesManager = new ConstantsPropertiesManager(FilesLocations.CONSTANTSPROPERTIESFILEPATH);
         String webBrowserProperty = constantsPropertiesManager.getSharedExecutionConstants().getProperty("webBrowser");

      if (webBrowserProperty.equalsIgnoreCase("PhantomJS")) {

         System.setProperty("phantomjs.binary.path",
               constantsPropertiesManager.getSharedExecutionConstants().getProperty("phantomJSExec"));
         driver = new PhantomJSDriver();
      }
      
      else if (webBrowserProperty.equalsIgnoreCase("Chrome")) {

         System.setProperty("webdriver.chrome.driver",
               constantsPropertiesManager.getSharedExecutionConstants().getProperty("chromeExec"));
         driver = new ChromeDriver();
      }
      
      else if (webBrowserProperty.equalsIgnoreCase("Safari"))
         driver = new SafariDriver();
      else {
         // if not recognized web browser, it run by default with Firefox                
         driver = new FirefoxDriver();
      }

      driver.get(constantsPropertiesManager.getSharedExecutionConstants().getProperty("baseUrl"));
   }

   public void closeConnection() {   
      this.driver.close();
      this.driver.quit();
   }

   public WebDriver getDriver() {
      return driver;
   }

   public void setDriver(WebDriver driver) {
      this.driver = driver;
   }

   public void driverWait() {
      long wait = Long.parseLong(constantsPropertiesManager.getSharedExecutionConstants().getProperty("defaultWaitTime"));
      this.driver.manage().timeouts().implicitlyWait(wait, TimeUnit.SECONDS);
      try {
         Thread.sleep(wait);
      } catch (InterruptedException ie1) {
         ie1.printStackTrace();
      }
   }
   }
   

3. Once created classes should be displayed as following:

.. image:: /_static/images/CreationTestCase9.png

4. Create in to the *Main Project* (in my case "Crafter_Framework") package, the following java files.

*common.properties*   

.. code-block:: c

   URL=http://localhost:8080/studio/#/login
   NameField=username
   PasswordField=password
   SignIn=/html/body/div[2]/div/div/form/div/div[5]/div/button     
   
*DataOfTheExecution.properties*

.. code-block:: c      

   ##Login Page data##
   
   #referenced by xpath, selectors and id's
   crafter.username = admin
   crafter.password = 12345
   
*ExecutionConstants.properties*

.. code-block:: c      

   ##Project Constants##

   #BaseUrl for execution
   baseUrl = http://localhost:8080/studio/#/login
   
   
   #Web browser for execution
   #values = Chrome,FireFox,Safari,IE,Chrome,PhantomJS
   webBrowser = Chrome
   
   #ChromeDriverPlugin location
   chromeExec = /Users/gustavoortizalfaro/Documents/workspace/chromedriver
   
   #PhantomJSDriverPlugin location
   phantomJSExec = /Users/gustavoortizalfaro/Documents/workspace/phantomjs-2.1.1-macosx/bin/phantomjs
   
   #Default web driver wait
   defaultWaitTime = 4000
   
   #Test user datasheetname
   dataSheetNameTestUsers = TestUsers
   dataRowIndexTestUser = 1
 
   
*SharedUIElements.properties*   

.. code-block:: c

   ##Login Page Elements##
   
   #referenced by xpath, selectors and id's
   login.txtbox_UserName = username
   login.txtbox_Password = password
   login.btn_Login = .btn.btn-primary
   
5. Once created java files should be displayed as following:  

.. image:: /_static/images/CreationTestCase10.png
 
6. Create a package with the name *Pages* in to the *src* package.

.. image:: /_static/images/CreationTestCase2.png

7. Create a testNG class with the name *LoginPage* in to the package *Pages*.

.. image:: /_static/images/CreationTestCase3.png

8. Type this code in the class *LoginPage* Created

.. code-block:: c

   package pages;

   import org.openqa.selenium.By;
   import org.openqa.selenium.WebDriver;
   import org.openqa.selenium.WebElement;
   import CrafterTools.UIElementsPropertiesManager;
   import CrafterTools.WebDriverManager;

   public class LoginPage {

   private WebDriverManager driverManager;
    private UIElementsPropertiesManager uIElementsManager;
    private WebDriver driver;
    private String userNameTextBoxLocator;
    private String passwordTextBoxLocator;
    private String loginButtonLocator;
    /**
     * 
     */
    public LoginPage(WebDriverManager driverManager, UIElementsPropertiesManager UIElementsPropertiesManager) {
        this.driverManager = driverManager;
        this.driverManager.openConnection();
        this.uIElementsManager = UIElementsPropertiesManager;
        this.driver = this.driverManager.getDriver();
        userNameTextBoxLocator = uIElementsManager.getSharedUIElementsLocators().getProperty("login.txtbox_UserName");
        passwordTextBoxLocator = uIElementsManager.getSharedUIElementsLocators().getProperty("login.txtbox_Password");
        loginButtonLocator = uIElementsManager.getSharedUIElementsLocators().getProperty("login.btn_Login");
    }
   public LoginPage(WebDriver driver) {

      this.driver = driver;

   }

   // Set user name in textbox

   public void setUserName(String strUserName) {
      
    WebElement userCrafter = driver.findElement(By.id(userNameTextBoxLocator));
    userCrafter.sendKeys(strUserName);
      

   }

   // Set password in password textbox

   public void setPassword(String strPassword) {

       WebElement pwdCrafter = driver.findElement(By.id(passwordTextBoxLocator));
       pwdCrafter.sendKeys(strPassword);

   }

   // Click on login button

   public void clickLogin() {

       WebElement loginButton = driver.findElement(By.cssSelector(loginButtonLocator));
       loginButton.click();

   }

   //Login to crafter
   public void loginToCrafter(String strUserName, String strPasword) {

      // Fill user name

      this.setUserName(strUserName);

      // Fill password

      this.setPassword(strPasword);

      // Click Login button

      this.clickLogin();

   }
   public WebDriverManager getDriverManager() {
      return driverManager;
   }
   public void setDriverManager(WebDriverManager driverManager) {
      this.driverManager = driverManager;
   }
   public WebDriver getDriver() {
      return driver;
   }
   public void setDriver(WebDriver driver) {
      this.driver = driver;
   }
   

   }
   


9. Create a package with the name *TestCases* in to the *src* package..

.. image:: /_static/images/CreationTestCase4.png

10. Create a testNG class with the name *LoginTest* in to the package *TestCases*.

.. image:: /_static/images/CreationTestCase5.png

11. Type this code in the class LoginTest Created.

.. code-block:: c

   package testcases;

   import org.openqa.selenium.By;
   import org.openqa.selenium.WebDriver;
   import org.testng.Assert;
   import org.testng.annotations.AfterTest;
   import org.testng.annotations.BeforeTest;
   import org.testng.annotations.Test;
   import CrafterTools.ConstantsPropertiesManager;
   import CrafterTools.FilesLocations;
   import CrafterTools.UIElementsPropertiesManager;
   import CrafterTools.WebDriverManager;
   import pages.LoginPage;
   
   public class LoginTest {
   
   WebDriver driver;
   
   LoginPage objLogin;
   
   
   
   private WebDriverManager driverManager;
   
   private LoginPage loginPage;
   
   private UIElementsPropertiesManager UIElementsPropertiesManager;
   
   private ConstantsPropertiesManager constantsPropertiesManager;
   
   
   
   
   @BeforeTest
   public void beforeTest() {
      this.driverManager = new WebDriverManager();
      this.UIElementsPropertiesManager = new CrafterTools.UIElementsPropertiesManager(
            FilesLocations.UIELEMENTSPROPERTIESFILEPATH);
      this.constantsPropertiesManager = new ConstantsPropertiesManager(FilesLocations.CONSTANTSPROPERTIESFILEPATH);
      this.loginPage = new LoginPage(driverManager, this.UIElementsPropertiesManager);
   }
   
   @AfterTest
   public void afterTest() {
      driverManager.closeConnection();
   }
   
   @Test(priority = 0)
   
   public void login_Test() {
   
      // login to application
   
      loginPage.loginToCrafter("admin", "1234");
   
      // wait for element is clickeable
   
      loginPage.getDriverManager().driverWait();
   
      // Verify login is fine
   
      String bodyText = driverManager.getDriver().findElement(By.xpath("/html/body/ui-view/section/div/header/h1"))
            .getText();
      Assert.assertNotNull(bodyText.contains(bodyText));
   
   }
   
   }   
   
12. Select the LoginTest.java and execute the test case with manual run.

.. image:: /_static/images/CreationTestCase6.png

13. Check the results of the execution.

.. image:: /_static/images/CreationTestCase7.png


