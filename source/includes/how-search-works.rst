^^^^
Flow
^^^^
.. image:: /_static/images/search-mechanics.gif
   :alt: Crafter Studio Search Mechanics
   :align: center

* When authors save content it is written to the preview instance of Crafter Search and ultimately to Solr.
* When authors approve and publish content for an environment content is written to the preview instance of Crafter Search and ultimately to Solr.

1. Author writes content to Crafter Studio.
2. On write in preview or on deployment to an environment Crafter Studio sends content to the deployer
3. A processor in the target of the deployer creates a "search" document and issues a create/update/delete to Crafter Search
4. Crafter Search, a thin API layer with simple business rules issues the same create/update/delete to the Solr index.


A. The end user makes a page or service request to Crafter Engine.
B. Crafter Engine components requiring queries issue a query to Crafter Search
C. Crafter Search issues applies simple rules/additions to the query and issues the query to Solr
