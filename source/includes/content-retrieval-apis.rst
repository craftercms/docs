CrafterCMS requires you use one of the following APIs to gain access to your content:

* FreeMarker API (great for templated projects) :ref:`templating-api`
* JavaScript API (great for SPAs and/or AJAX) :ref:`javascript-sdk`
* GraphQL (great for SPAs and/or AJAX) :ref:`graphql`
* Search API :ref:`search`
* REST API (great for SPAs and/or AJAX) :ref:`rest-content-retrieval-api`
* Groovy (great for full control of the API endpoints and response shape) :ref:`groovy-development`
* Java (can be accessed from Groovy and gives full access to Crafter Engine) :ref:`java-api`

+--------------+---------------------+----------------------------------+---------------------+
| Project Type | API                 | Description                      | Link                |
+==============+=====================+==================================+=====================+
| Headless     | Javascript SDK      | |js_sdk_desc|                    | |js_sdk_link|       |
|              +---------------------+----------------------------------+---------------------+
|              | GraphQL             | |graphql_desc|                   | |graphql_link|      |
|              +---------------------+----------------------------------+---------------------+
|              | REST API            | |rest_api_desc|                  | |rest_api_link|     |
|              +---------------------+----------------------------------+---------------------+
|              | Search              | |search_desc|                    | |search_link|       |
|              +---------------------+----------------------------------+---------------------+
|              | Groovy              | |groovy_desc|                    | |groovy_link|       |
|              +---------------------+----------------------------------+---------------------+
|              | Static Asset Access | |static_asset_desc|              | |static_asset_link| |
+--------------+---------------------+----------------------------------+---------------------+
| Templated    | FreeMarker          | |freemarker_desc|                | |freemarker_link|   |
|              +---------------------+----------------------------------+---------------------+
|              | Search              | |search_desc|                    | |search_link|       |
|              +---------------------+----------------------------------+---------------------+
|              | Groovy              | |groovy_desc|                    | |groovy_link|       |
|              +---------------------+----------------------------------+---------------------+
|              | Static Asset Access | |static_asset_desc|              | |static_asset_link| |
+--------------+---------------------+----------------------------------+---------------------+

.. Note::
    You can use the REST API in Templated projects to perform content operations via JavaScript as needed