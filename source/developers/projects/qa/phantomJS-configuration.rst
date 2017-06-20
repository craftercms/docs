.. _crafter-QA:

=======================
PhantomJS Configuration
=======================




.. toctree::
   :maxdepth: 1


**PhantomJS**

PhantomJS is a headless browser with JavaScript API. It is an optimal solution for Headless Website Testing, access and manipulate webpages & comes with the standard DOM API.

In order to use PhantomJS with Seleniun, one has to use GhostDriver. GhostDriver is a implementation of Webdriver Wire protocol in simple JS for PhantomJS.


**Steps to run Selenium with PhatomJS**

Step 1) You need *Eclipse* with Selenium installed

Step 2) Download PhantomJS, `phantomjs`_.

.. _phantomjs: http://phantomjs.org/download.html

.. image:: /_static/images/qa/PhantomJS1.png

Step 3) Extract the downloaded folder to Program Files 

.. image:: /_static/images/qa/PhantomJS2.png

Step 4) Download the PhantomJS Driver from `here`_. Add the jar to your project 

.. _here: http://mvnrepository.com/artifact/com.github.detro.ghostdriver/phantomjsdriver/1.1.0

.. image:: /_static/images/qa/PhantomJS3.png

