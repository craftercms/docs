----------------------
Content Retrieval APIs
----------------------
CrafterCMS requires you use one of the following APIs to gain access to your content:

* FreeMarker API (great for templated projects) :ref:`templating-api`
* JavaScript API (great for SPAs and/or AJAX) :ref:`javascript-sdk`
* GraphQL (great for SPAs and/or AJAX) :ref:`graphql`
* Search API :ref:`search`
* REST API (great for SPAs and/or AJAX) :ref:`rest-content-retrieval-api`
* Groovy (great for full control of the API endpoints and response shape) :ref:`groovy-api`
* Java (can be accessed from Groovy and gives full access to Engine) :ref:`javadoc`

.. list-table::
   :header-rows: 1

    * - Project Type
      - API
      - Description
      - Link
    * - Headless
      - JavaScript SDK
      - The JavaScript SDK allows access to CrafterCMS services from any SPA framework or direct JavaScript. The SDK also enables Experience Builder (In-Content Editing capabilities) for any project, including SPA projects.
      - :ref:`javascript-sdk`
    * -
      - GraphQL
      - The GraphQL API allows content retrieval and control over the shape of the response.
      - :ref:`graphql`
	* -
      - REST API
      - The REST API allows content retrieval using the default REST API endpoints, and also allows the developer to define custom endpoints with full control over the shape of the response. To create custom endpoints, see the Groovy API indicated below.
      - :ref:`rest-content-retrieval-api`
    * -
      - Search
      - The search API allows full text search, filtering, ranking and boosting across the entire project.
      - :ref:`search`
	* -
      - Groovy
      - The Groovy API allows for writing server-side code that can perform business logic, content operations, and more. This layer also allows the developer to create custom REST endpoints with full control over the shape of the response.
      - :ref:`groovy-api` and :ref:`javadoc`
	* -
      - Static Asset Access
      - The Static Asset Access allows the developer to access static assets (images, videos, etc.) from internally managed or externally managed repositories.
      - :ref:`static-content-access`
    * - Templated
	  - FreeMarker
      - The FreeMarker API allows access to CrafterCMS services from FreeMarker templates for server-side rendered projects.
      - :ref:`templating-api`
	* -
      - Search
      - The search API allows full text search, filtering, ranking and boosting across the entire project.
      - :ref:`search`
	* -
      - Groovy
      - The Groovy API allows for writing server-side code that can perform business logic, content operations, and more. This layer also allows the developer to create custom REST endpoints with full control over the shape of the response.
      - :ref:`groovy-api` and :ref:`javadoc`
	* -
      - Static Asset Access
      - The Static Asset Access allows the developer to access static assets (images, videos, etc.) from internally managed or externally managed repositories.
      - :ref:`static-content-access`

.. Note::
    You can use the REST API in Templated projects to perform content operations via JavaScript as needed