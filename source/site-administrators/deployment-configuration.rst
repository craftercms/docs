========================
Deployment Configuration
========================

-------------------------
Add a Deployment Endpoint
-------------------------

In Crafter Studio:

#.	Go to your site’s dashboard.
#.	Click on Admin Console.
#.	Click on Configuration.
#.	From the dropdown, pick the Endpoints Configuration.
#.	Configure the deployment endpoint:

	#.	A sample endpoint has already been added. You just need to change the endpoint name and target to the site name:

		.. image:: /_static/images/deployment-config-1.png

	#.	Click on Save.

#.	Click on Configuration again in the sidebar.
#.	From the dropdown, pick Configurations.
#.	Edit the environment overrides configuration ``<file>`` to reflect the actual environment configuration [#f1]_:

	#.	Look for the following snippet:

		.. image:: /_static/images/deployment-config-2.png

	#. Change ``dev`` value in path to the actual environment, and change the title and description. ``samplePath`` can be
	   left the same. E.g.:

	   .. image:: /_static/images/deployment-config-3.png

#.	Click on Clear cache on top and refresh the page. Click again in Configuration, and now in the configuration dropdown the
	environment configuration file should appear (if you followed the example, it should be named QA Environment Configuration).
	Pick it.
#.	Configure the channel group for deployment:

	#.	By default a “Production” ``<channel-group>`` has been added. Change the label if needed (e.g. to something like
		Development or QA). Make sure that the inside the ``<channels>`` there’s a <channel> element for the endpoint added
		before, like ``<channel>pluton</channel>``:

		.. image:: /_static/images/deployment-config-4.png

	#. Click on Save.

.. rubric:: Footnotes

.. [#f1]	Check with your system administrator the value of the ``environment`` variable in Studio's server-config.properties.
			In the example we assume the value is ``qa`` (``environment=local``).
