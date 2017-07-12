.. _crafter-engine-api-monitoring-log:

==============
Get Log Events
==============

Returns all events recorded in the Crafter Engine log for a given site in a specific time period.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/monitoring/log``                                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+--------------------------------------+
|| Name                   || Type       || Required     || Description                         |
+=========================+=============+===============+======================================+
|| site                   || String     || |checkmark|  || The name of the site                |
+-------------------------+-------------+---------------+--------------------------------------+
|| since                  || Long       || |checkmark|  || The time in milliseconds from which |
||                        ||            ||              || events should be fetched            |
+-------------------------+-------------+---------------+--------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/monitoring/log.json?site=editorial&since=1396772083660``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "exception":"\n",
      "site":"editorial",
      "level":"INFO",
      "thread":"http-nio-8080-exec-6",
      "message":"--------------------------------------------------",
      "timestampm":1496849343683,
      "timestamp":"2017-06-07T09:29:03.683-0600"
    },
    {
      "exception":"\n",
      "site":"editorial",
      "level":"INFO",
      "thread":"http-nio-8080-exec-6",
      "message":"Site context created: SiteContext{siteName='editorial', context=FileSystemContext[id='956d5fb84b63a77a74970bb378eca361', storeAdapter='org.craftercms.core.store.impl.filesystem.FileSystemContentStoreAdapter@38783f6c', storeServerUrl='null', rootFolderPath='file:../data/repos/sites/editorial/sandbox/', rootFolder=../data/repos/sites/editorial/sandbox, mergingOn=true, cacheOn=false, maxAllowedItemsInCache=0, ignoreHiddenFiles=true], fallback=false, staticAssetsPath='/static-assets', templatesPath='/', restScriptsPath='/scripts/rest', controllerScriptsPath='/scripts/controllers', configPaths=[/config/site.xml, /config/env/default/site.xml, classpath:crafter/engine/extension/sites/editorial/site.xml], applicationContextPaths=[/config/spring/application-context.xml, /config/env/default/spring/application-context.xml, classpath:crafter/engine/extension/sites/editorial/spring/application-context.xml], groovyClassesPath='/scripts/classes'}",
      "timestampm":1496849343684,
      "timestamp":"2017-06-07T09:29:03.684-0600"
    },
    {
      "exception":"\n",
      "site":"editorial",
      "level":"INFO",
      "thread":"http-nio-8080-exec-6",
      "message":"==================================================",
      "timestampm":1496849343684,
      "timestamp":"2017-06-07T09:29:03.684-0600"
    },
    {
      "exception":"\n",
      "site":"editorial",
      "level":"INFO",
      "thread":"http-nio-8080-exec-6",
      "message":"</Creating site context: editorial>",
      "timestampm":1496849343684,
      "timestamp":"2017-06-07T09:29:03.684-0600"
    },
    {
      "exception":"\n",
      "site":"editorial",
      "level":"INFO",
      "thread":"http-nio-8080-exec-6",
      "message":"==================================================",
      "timestampm":1496849343684,
      "timestamp":"2017-06-07T09:29:03.684-0600"
    },
    {
      "exception":"\n",
      "site":"editorial",
      "level":"INFO",
      "thread":"http-nio-8080-exec-7",
      "message":"Content cache and Freemarker cache have been cleared for site 'editorial'",
      "timestampm":1496849343708,
      "timestamp":"2017-06-07T09:29:03.708-0600"
    }
  ]

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
