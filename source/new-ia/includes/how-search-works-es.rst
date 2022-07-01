^^^^
Flow
^^^^

.. image:: /_static/images/search/search-mechanics-es.png
   :alt: Crafter Studio Search Mechanics
   :align: center

Indexing Process:
^^^^^^^^^^^^^^^^^

#. Author updates content in Crafter Studio.
#. Studio notifies the Deployer of the changes in a particular target (which is the combination of site/environment). Then:

	* On preview update, the Deployer inspects the ``sandbox`` and resolves the changes by doing a file diff between the last Git commit it processed
	  and the latest commit in the ``sandbox``.
	* On publish, Studio moves the changes to ``published`` and the Deployer in delivery pulls the changes.

#. A processor of the target in the Deployer sends a request to Elasticsearch with the XML or content to index.



Querying Process:
^^^^^^^^^^^^^^^^^

A. The end user makes a page or service request to Crafter Engine.
B. Crafter Engine components requiring queries issue a query to Elasticsearch where simple filters will be added to the query and then executed.

