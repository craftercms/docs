.. _engine-mongodb-configuration:

===============================
Configure Engine to use MongoDB
===============================

There are times when you may need access to MongoDB.  This section details how you can access MongoDB by configuring Engine.

Here are the steps for configuring Engine to use mongoDB:

-----------------------
Configure the Mongo URI
-----------------------
To define the connection between MongoDB and Engine, add the URI in the config file `/config/engine/site-config.xml`.  (This file can be accessed easily from any site created through the out-of-the-box blueprints, by navigating from the Studio dashboard to Site Config > Configuration, and finally picking up the **Engine Site Configuration** option from the dropdown).

.. code-block:: xml

    <site>
      <db>
          <uri>mongodb://{host}:{port}/{database}?readPreference=primary&amp;maxPoolSize=50&amp;minPoolSize=5&amp;maxIdleTimeMS=1000&amp;waitQueueMultiple=200&amp;waitQueueTimeoutMS=100&amp;w=1&amp;journal=true</uri>
      </db>
    </site>

where:
   * {host} - required, server address to connect to
   * {port} - optional, with a default value of :27020 in Crafter CMS Authoring
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

.. code-block:: guess
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