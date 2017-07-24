^^^^
Flow
^^^^
.. image:: /_static/images/search-mechanics.gif
   :alt: Crafter Studio Search Mechanics
   :align: center

Indexing Process:
^^^^^^^^^^^^^^^^^

#. Author updates content in Crafter Studio.
#. Studio notifies the Deployer of the changes in a particular target (which is the combination of site/environment). Then:

	* On preview update, the Deployer inspects the ``sandbox`` and resolves the changes by doing a file diff between the last Git commit it processed
	  and the latest commit in the ``sandbox``.
	* On publish, Studio moves the changes to ``published`` and the Deployer in delivery pulls the changes.

#. A processor of the target in the Deployer sends a request to Crafter Search with the XML or content to index.
#. Crafter Search, a thin API layer with simple business rules, generates a Solr document based on the received XML/content and sends it to the Solr
   for indexing.

Querying Process:
^^^^^^^^^^^^^^^^^

A. The end user makes a page or service request to Crafter Engine.
B. Crafter Engine components requiring queries issue a query to Crafter Search.
C. Crafter Search applies simple rules/additions to the query and issues the query to Solr.
