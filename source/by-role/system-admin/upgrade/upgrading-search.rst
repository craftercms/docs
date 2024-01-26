:is-up-to-date: True
:last-updated: 4.1.0

.. _upgrading-search:

================
Upgrading Search
================
.. contents::
    :local:

Starting version 4.1.0, CrafterCMS now uses OpenSearch.
This section describes how to upgrade search for CrafterCMS installed on a server.

Please read through the upgrade instructions :ref:`here <upgrading-craftercms-on-a-server>` first.
The steps for upgrading to OpenSearch follows almost exactly the same steps as listed in that document.

.. important::
    Remember to **manually shut down and backup CrafterCMS** before beginning your upgrades!

|hr|

--------------------------------------
Upgrading 3.1.x -> 4.1.0 (from ES 6.x)
--------------------------------------
To upgrade your 3.1.x installation, we'll be running the upgrade scripts from a new binary archive.
We'll use the ``upgrade-search.sh`` script, which will update the data in place.
This script tells the search engine to re-index internally to the new format and should only be run on CrafterCMS 3.1.x installs.
Please backup your data directory before running the script.

Here is the ``upgrade-search`` script params:

.. code-block:: text

     -h,--help                                  Show usage information
        --port <port>                           Elasticsearch port to use for
                                                upgrade ES temporary instance
        --status-retries <max status retries>   How many times to try to get a
                                                yellow status from the ES
                                                cluster (waiting 10s between
                                                retries)
        --status-timeout <seconds>              Timeout in seconds for the
                                                status check of the ES cluster
        --stay-alive                            Set to true to keep the
                                                process alive after reindexing
                                                is complete. This allows to
                                                query the ES server and
                                                review.
    e.g:

    # Run in a different port
    ./upgrade-search.sh --port 9206 /path/of/install/to/be/upgraded --stay-aliveUpgrading 3.1.x -> 4.1.0 (from ES 6.x)

Here are the steps to  upgrade your CrafterCMS  3.1.x install:

#. Download the CrafterCMS version you'd like to upgrade to, and extract the files.
#. Run the ``upgrade-search.sh`` script from your newly extracted files.

   .. code-block:: bash
       :caption: *Run the upgrade-search script*

       ./upgrade-search.sh /path/of/install/to/be/upgraded --stay-alive

#. Upgrade using the ``upgrade-target.sh`` script

   .. code-block:: bash
       :caption: *Run the upgrade-target script*

       ./upgrade-target.sh /path/of/install/to/be/upgraded

#. Run the ``post-upgrade.sh`` script from the install that's being upgraded.  Before starting CrafterCMS, you'll need to configure the installation root directory to use Java version 17.  Remember to read the release notes or any relevant upgrade articles and make any necessary manual changes before running the `post-upgrade.sh`` script

   .. code-block:: bash
       :caption: *Run the post-upgrade script*

       ./post-upgrade.sh

#. Start CrafterCMS (this could take a while because of the upgrade manager (UM) updates).
#. All indices should be now available in OpenSearch
#. Monitor tomcat logs on startup.

|hr|

---------------------------------------
Upgrading 4.0.x -> 4.1.0 (from ES 7.15)
---------------------------------------
When upgrading from 4.0.x (running ES 7) the indices are not compatible at all, so the content needs to be reprocessed and indices rebuilt completely. The rebuilding of the indices is handled by the post-upgrade script.

To upgrade your 4.0.x installation, we'll be running the upgrade scripts from a new binary archive.
Here are the steps:

#. Download the CrafterCMS version you'd like to upgrade to, and extract the files.
#. Upgrade using the ``upgrade-target.sh`` script from your newly extracted files:

   .. code-block:: bash
       :caption: *Run the upgrade-target script*

       ./upgrade-target.sh /path/of/install/to/be/upgraded

#. Before starting CrafterCMS, you'll need to configure the installation root directory to use Java version 17.  Remember to read the release notes or any relevant upgrade articles and make any necessary manual changes before running the `post-upgrade.sh`` script as described next
#. Run the ``post-upgrade.sh`` script. This will:

   - Remove old *data/indexes-es* directory (old indexes are not usable by OpenSearch)
   - Start CrafterCMS and ask for signal to continue
   - Once started and CrafterCMS is up (including UM execution), let the post-upgrade continue by typing ``Y``:

     .. code-block:: bash

         Please make sure Crafter has started successfully before continuing
         > Continue? [(Y)es/(N)o]:

   - Post-upgrade will continue to trigger the reindex of all targets by calling the Deployer API ``/api/1/target/deploy-all``

#. Monitor the Deployer logs and wait for the reindex to be completed. You should see a message like the following:

   .. code-block:: text

       2023-04-20 14:36:46.050  INFO 376430 --- [deployment-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial110-authoring finished in 9.953 secs

|hr|

-------------------------
Manual Updates for Search
-------------------------
The Upgrade Manager (UM) performs most of the updates required to upgrade your project to OpenSearch, such as the import updates in your classes.  There are some instances where manual updates may need to be performed like below:

^^^^^^^^^^^^^^^^^^^^^
Updating Search Beans
^^^^^^^^^^^^^^^^^^^^^
If you have an application context that injects Elasticsearch like below, it will need to be updated to inject OpenSearch:

.. code-block:: xml
    :caption: *Application context that injects Elasticsearch*
    :emphasize-lines: 8

    <beans xmlns="http://www.springframework.org/schema/beans"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

        <bean id="demoProfileService" class="com.demo.services.ProfileService" />

        <bean id="demoSearchService" class="com.demo.services.SearchService">
            <property name="elasticsearch" ref="crafter.elasticsearchService" />
            <property name="urlTransformationService" ref="crafter.urlTransformationService" />
        </bean>
    </beans>

|

To update to OpenSearch, in the example above, the property is called ``elasticsearch`` and will need to be renamed.  In the example below, the property has been renamed to ``searchClient``:

.. code-block:: xml
    :caption: *Application context injection updated to OpenSearch*
    :emphasize-lines: 8

    <beans xmlns="http://www.springframework.org/schema/beans"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

        <bean id="demoProfileService" class="com.demo.services.ProfileService" />

        <bean id="demoSearchService" class="com.demo.services.SearchService">
            <property name="searchClient" ref="crafter.searchClient" />
            <property name="urlTransformationService" ref="crafter.urlTransformationService" />
        </bean>
    </beans>

^^^^^^^^^^^^^^^^^^^^^^^^^^
Search Methods/Groovy Code
^^^^^^^^^^^^^^^^^^^^^^^^^^
You might encounter the following error in your project, which indicates your search methods in your groovy code needs to be updated for OpenSearch:

.. code-block:: text
    :caption: *Error message in logs indicating groovy code needs to be updated*

    Caused by: org.craftercms.engine.exception.ScriptException: No signature of method: org.craftercms.engine.search.SiteAwareOpenSearchClient.search() is applicable for
        argument types: (org.opensearch.action.search.SearchRequest) values: [SearchRequest{searchType=QUERY_THEN_FETCH, indices=[],
        indicesOptions=IndicesOptions[ignore_unavailable=false, allow_no_indices=true, expand_wildcards_open=true, expand_wildcards_closed=false, expand_wildcards_hidden=false,
        allow_aliases_to_multiple_indices=true, forbid_closed_indices=true, ignore_aliases=false, ignore_throttled=true], routing='null', preference='null', requestCache=null,
        scroll=null, maxConcurrentShardRequests=0, batchedReduceSize=512, preFilterShardSize=null, allowPartialSearchResults=null, localClusterAlias=null,
        getOrCreateAbsoluteStartMillis=-1, ccsMinimizeRoundtrips=true, source={"from":0,"size":6,"query":{"query_string":{"query":"content-type:\"/page/blogpost\" AND ( (NOT
        (_exists_:unlisted_b)) OR unlisted_b:false) ","fields":[],"type":"best_fields","default_operator":"or","max_determinized_states":10000,"enable_position_increments":true,
        "fuzziness":"AUTO","fuzzy_prefix_length":0,"fuzzy_max_expansions":50,"phrase_slop":0,"escape":false,"auto_generate_synonyms_phrase_query":true,"fuzzy_transpositions":true,
        "boost":1.0}},"sort":[{"publishedDate_dt":{"order":"desc"}}]}, cancelAfterTimeInterval=null, pipeline=null}]
    Possible solutions: search(org.opensearch.client.opensearch.core.SearchRequest, java.lang.Class, java.util.Map), each(groovy.lang.Closure), macro(groovy.lang.Closure)




