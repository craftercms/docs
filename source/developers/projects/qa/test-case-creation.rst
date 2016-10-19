.. _crafter-QA:

==================
Test Case Creation
==================

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

4. Create a package with the name TestCases.

.. image:: /_static/images/CreationTestCase4.png

5. Create a testNG class with the name LoginTest in to the package TestCases.

.. image:: /_static/images/CreationTestCase5.png

6. Type this code in the class LoginTest Created.

.. code-block:: c

   package TestCases;

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
   import pages.HomePage;
   import pages.LoginPage;
   
   public class LoginTest {
   
      WebDriver driver;
   
      LoginPage objLogin;
   
      HomePage objHomePage;
   
      private WebDriverManager driverManager;
   
      private LoginPage loginPage;
   
      private UIElementsPropertiesManager UIElementsPropertiesManager;
   
      private ConstantsPropertiesManager constantsPropertiesManager;
   
      private HomePage homePage;
   
      // The following code is for the QA needs to execute the test with phantomJS
   
      /*
       * @BeforeTest public void setup() throws Exception { //Set phantomjs.exe
       * executable file path using DesiredCapabilities. DesiredCapabilities
       * capability = new DesiredCapabilities();
       * capability.setCapability(PhantomJSDriverService.
       * PHANTOMJS_EXECUTABLE_PATH_PROPERTY,
       * "/Users/gustavoortizalfaro/Documents/workspace/phantomjs-2.1.1-macosx/bin/phantomjs"
       * ); driver = new PhantomJSDriver(capability);
       * driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS); }
       */
   
      // This code shows the UI and the QA can see the steps executing in real
      // time.
   
      @BeforeTest
      public void beforeTest() {
         this.driverManager = new WebDriverManager();
         this.UIElementsPropertiesManager = new CrafterTools.UIElementsPropertiesManager(
               FilesLocations.UIELEMENTSPROPERTIESFILEPATH);
         this.constantsPropertiesManager = new ConstantsPropertiesManager(FilesLocations.CONSTANTSPROPERTIESFILEPATH);
         this.loginPage = new LoginPage(driverManager, this.UIElementsPropertiesManager);
         this.homePage = new HomePage(driverManager, this.UIElementsPropertiesManager);
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
   
         homePage.getDriverManager().driverWait();
   
         // Verify login is fine
   
         String bodyText = driverManager.getDriver().findElement(By.xpath("/html/body/ui-view/section/div/header/h1"))
               .getText();
         Assert.assertNotNull(bodyText.contains(bodyText));
   
      }
   
   }
   
7. Select the LoginTest.java and execute the test case with manual run.

.. image:: /_static/images/CreationTestCase6.png

8. Check the results of the execution.

.. image:: /_static/images/CreationTestCase7.png


