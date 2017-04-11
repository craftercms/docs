.. _crafter-QA-setup-env:

========================
Setup the QA Environment
========================



.. toctree::
   :maxdepth: 1

##############
1. About Java.
##############

*Java 7 should be installed in your computer because is required.*

#################
2. About the IDE.
#################

*Open your favorite IDE, in this case this configuration is for Eclipse IDE.*

############################################
3. Download the Selenium Java Client Driver.
############################################


You can download the *Selenium Java Client Driver*  `here`_. You will find client drivers for other languages there, but only choose the one for Java.


.. _here: http://www.seleniumhq.org/download/

.. image:: /_static/images/QASeleniumJavaClient.png

This download comes as a ZIP file. For simplicity, extract the contents of this ZIP file on your documents . This directory contains all the JAR files that we would later import on Eclipse.


########################################
4. Configure Eclipse IDE with WebDriver.
########################################

1. Launch the "eclipse.app" file inside the "eclipse" folder that we extracted in step 2.
2. When asked to select for a workspace, just accept the default location.

.. image:: /_static/images/QASelectWorkspace.png

3. Create a new project through File > New > Java Project. Name the project as "newproject". 

.. image:: /_static/images/QANewProject.png

*A new pop-up window will open enter details as follow.*

1. Project Name.
2. Location to save project.
3. Select an execution JRE.
4. Select layout project option.
5. Click on finish button.

.. image:: /_static/images/QACreateProject.png

4. In this step.

   1. Right-click on the newly created project and
   2. Select New > Package, and name that package as "newpackage".

.. image:: /_static/images/QANewPackage.png


*A pop-up window will open to name the package*

1. Enter the name of the package
2. Click on finish button

.. image:: /_static/images/QAPackageName.png

5. Create a new Java class under newpackage by right-clicking on it and then selecting- New > Class, and then name it as "MyClass". Your Eclipse IDE should look like the image below. 

.. image:: /_static/images/QACreateClass.png

*When you click on Class, a pop-up window will open, enter details as*

   1. Name of the class
   2. Click on Finish button

.. image:: /_static/images/QAClassName.png

Now selenium WebDriver's into Java Build Path in this step.

   2. Right-click on "newproject" and select Properties.
   3. On the Properties dialog, click on "Java Build Path".
   4. Click on the Libraries tab, and then
   5. Click on "Add External JARs.."
   
.. image:: /_static/images/QAJars1.png

*When you click on "Add External JARs.." It will open a pop-up window. Select the JAR files you want to add*.

.. image:: /_static/images/QAJars2.png

*After selecting jar files, click on OK button.*

.. image:: /_static/images/QAJars3.png

6. Add all the JAR files inside and outside the "libs" folder. Your Properties dialog should now look similar to the image below.

.. image:: /_static/images/QAJars4.png

7. Finally, click OK and we are done importing Selenium libraries into our project. 


############################
Installing TestNG in Eclipse
############################

Step 1

   1. On the menu bar, click Help.
   2. Choose the "Eclipse Marketplace..." option.

.. image:: /_static/images/QAMarketplace.png


Step 2

   3. In find, type “TestNG”.
   4. Click on “Install”.
   5. Finally click on “Finish”.

.. image:: /_static/images/QATestNGInstall.png

Step 3

After the restart, verify if TestNG was indeed successfully installed. Click Eclipse > Preferences and see if TestNG is included on the Preferences list. 

.. image:: /_static/images/QATesNGCheck.png

#############################
Setting up the TestNG Project
#############################

Step 1

Right-click on the project > Build Path > Configure Build Path.

.. image:: /_static/images/QATestNG1.png

Step 2

We will now start to import the TestNG Libraries onto our project. Click on the "Libraries" tab, and then "Add Library…" 

.. image:: /_static/images/QATestNG2.png

Step 3

On the Add Library dialog, choose "TestNG" and click Next.

.. image:: /_static/images/QATestNG3.png

Step 4

Click Finish.

.. image:: /_static/images/QATestNG4.png

*You should notice that TestNG is included on the Libraries list.*

.. image:: /_static/images/QATestNG5.png

Step 5

We will now add the JAR files that contain the Selenium API. These files are found in the Java client driver that we downloaded from http://docs.seleniumhq.org/download/ when we were installing Selenium and Eclipse in the previous chapters. 
 
.. image:: /_static/images/QATestNG6.png

*Then, navigate to where you have placed the Selenium JAR files.*

.. image:: /_static/images/QATestNG7.png

*After adding the external JARs, your screen should look like this.*

.. image:: /_static/images/QATestNG8.png

Step 6

We will convert the current *java project* to *Maven Project*

Right-click on the project > Configure > Convert > Convert to Maven Project. 

.. image:: /_static/images/QAMaven1.png

*Click on Finish*

.. image:: /_static/images/QAMaven2.png

*In the project should be display a "M" in the folder and in the end the POM.xml*

.. image:: /_static/images/QAMaven3.png









