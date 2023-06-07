CrafterCMS requires you use one of the following APIs to gain access to your content:

* FreeMarker API (great for templated projects) :ref:`templating-api`
* JavaScript API (great for SPAs and/or AJAX) :ref:`javascript-sdk`
* GraphQL (great for SPAs and/or AJAX) :ref:`graphql`
* Search API :ref:`search`
* REST API (great for SPAs and/or AJAX) :ref:`rest-content-retrieval-api`
* Groovy (great for full control of the API endpoints and response shape) :ref:`groovy-api`
* Java (can be accessed from Groovy and gives full access to Crafter Engine) :ref:`java-api`

.. |js_sdk_desc| replace:: The JavaScript SDK allows access to CrafterCMS services from any SPA framework or direct JavaScript. The SDK also enables Experience Builder (In-Content Editing capabilities) for any project, including SPA projects.
.. |graphql_desc| replace:: The GraphQL API allows content retrieval and control over the shape of the response.
.. |rest_api_desc| replace:: The REST API allows content retrieval using the default REST API endpoints, and also allows the developer to define custom endpoints with full control over the shape of the response. To create custom endpoints, see the Groovy API indicated below.
.. |search_desc| replace:: The search API allows full text search, filtering, ranking and boosting across the entire project.
.. |groovy_desc| replace:: The Groovy API allows for writing server-side code that can perform business logic, content operations, and more. This layer also allows the developer to create custom REST endpoints with full control over the shape of the response.
.. |static_asset_desc| replace:: The Static Asset Access allows the developer to access static assets (images, videos, etc.) from internally managed or externally managed repositories.
.. |freemarker_desc| replace:: The FreeMarker API allows access to CrafterCMS services from FreeMarker templates for server-side rendered projects.

.. |js_sdk_link| replace:: :ref:`javascript-sdk`
.. |graphql_link| replace:: :ref:`graphql`
.. |rest_api_link| replace:: :ref:`rest-content-retrieval-api`
.. |search_link| replace:: :ref:`search`
.. |groovy_link| replace:: :ref:`groovy-api` and :ref:`java-api`
.. |static_asset_link| replace:: :ref:`static-content-access`
.. |freemarker_link| replace:: :ref:`templating-api`

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