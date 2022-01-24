:is-up-to-date: False

.. index:: Configure Engine to use MongoDB

.. _newIa-engine-mongodb-configuration:

===============================
Configure Engine to use MongoDB
===============================

There are times when you may need access to MongoDB.  This section details how you can access MongoDB by configuring Engine.

Here are the steps for configuring Engine to use mongoDB:

-------------------------
Configure the MongoDB URI
-------------------------
To define the connection between MongoDB and Engine, add the URI in the config file `/config/engine/site-config.xml`.  (This file can be accessed easily from any site created through the out-of-the-box blueprints, by navigating from the Studio dashboard to Site Config > Configuration, and finally picking up the **Engine Site Configuration** option from the dropdown).

.. code-block:: xml

    <site>
      <db>
          <uri>mongodb://{host}:{port}/{database}?readPreference=primary&amp;maxPoolSize=50&amp;minPoolSize=5&amp;maxIdleTimeMS=1000&amp;waitQueueMultiple=200&amp;waitQueueTimeoutMS=100&amp;w=1&amp;journal=true</uri>
      </db>
    </site>

where:
   * {host} - required, server address to connect to
   * {port} - optional, with a default value of :27020 in CrafterCMS Authoring
   * {database} - optional, name of the database to authenticate if the connection string includes authentication credentials.

For more details on the Connection String URI format, see https://docs.mongodb.com/manual/reference/connection-string/

----------------------
Create a GMongo client
----------------------
To access Mongo from Groovy, we'll use a GMongo client.  We'll need to add some beans in `/config/engine/application-context.xml`.  (This file can be accessed easily from any site created through the out-of-the-box blueprints, by navigating from the Studio dashboard to Site Config > Configuration, and finally picking up the **Engine Site Application Context** option from the dropdown).

.. code-block:: java
    :linenos:

    <beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

       <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

       <bean id="mongoUri" class="com.mongodb.MongoClientURI">
         <constructor-arg value="${db.uri}"/>
       </bean>

       <bean id="mongoClient" class="com.gmongo.GMongoClient">
         <constructor-arg ref="mongoUri"/>
       </bean>

    </beans>

-----------------------------------
Use the client from a Groovy script
-----------------------------------

We can now use the client from a Groovy script.  Here's a simple script that runs a query:

.. code-block:: groovy
    :linenos:

    def mongo = applicationContext.mongoClient
    def db = mongo.getDB("{database}")
    def result = null
    def record = db.{collection}.findOne(_id: "{some id}")
    if (record) {
        result = record.name
    }
    return result

where:
    * {database} - the name of an existing database
    * {collection} - collection name
    * {some id} - id you're searching for depending on your database

---------------------------------
Publish configuration to Delivery
---------------------------------

Until this point all changes have been made from Crafter Studio so they will only affect immediately
the authoring environment, for a delivery environment you will need to publish the changed files.

This can be done from the Studio site dashboard with the following steps:

1. Go to Studio's site dashboard

.. image:: /_static/images/site-admin/mongo/open-site-dashboard.png
   :alt: Studio Site Dashboard
   :width: 40 %
   :align: center

2. Locate ``My Recent Activity`` section and change the filter to ``All`` to display the
configuration files

.. image:: /_static/images/site-admin/mongo/my-recent-activity.png
   :alt: Studio Site Dashboard - My Recent Activity
   :width: 70 %
   :align: center

3. Select all configuration files updated in the previous sections

.. image:: /_static/images/site-admin/mongo/my-recent-activity-config.png
   :alt: Studio Site Dashboard - My Recent Activity
   :width: 70 %
   :align: center

4. Click ``Approve & Publish`` from the contextual menu

.. image:: /_static/images/site-admin/mongo/approve-and-publish-context-menu.png
   :alt: Studio Site Dashboard - Contextual Menu
   :width: 70 %
   :align: center

5. Click ``Submit`` to close the publish dialog

.. image:: /_static/images/site-admin/mongo/publish-dialog.png
   :alt: Studio Site Dashboard - Approve & Publish Dialog
   :width: 70 %
   :align: center

Once the files are deployed to the delivery node and the site context is reloaded the new
Configuration will take effect.

--------------------------------
Delivery specific configurations
--------------------------------

If you need to manage different values for the configuration files depending on the environment
you can find more detailed information in the :ref:`environment-specific-configurations` cook book.
