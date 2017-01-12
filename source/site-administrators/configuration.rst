.. highlight:: xml

===========================
Admin Console Configuration
===========================

To find this configuration xml through studio follow the next instructions:

#. Click on Console Admin located in the Site Content.
#. Choose Configuration from the menu.
#. Select "Configuration".

.. image:: /_static/images/configuration.png

------
Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/administration/config-list.xml/config-list.xml

    <config>
		<files>
			<file>
				<path>/administration/config-list.xml</path>
				<title>Configurations</title>
				<description>Defines this list of configurations</description>
				<samplePath>/administration/samples/sample-config-list.xml</samplePath>
			</file>
			<file>
				<path>/administration/tools.xml</path>
				<title>Admin Tools</title>
				<description>Defines the list of admin tools available</description>
				<samplePath>/administration/samples/sample-tools.xml</samplePath>
			</file>
			<file>
				<path>/analytics/dashboard-config.xml</path>
				<title>Analytics Dashboard Configuration</title>
				<description>Defines types of reports shown on Analytics Dashboard</description>
				<samplePath>/administration/samples/sample-analytics-dashboard-config.xml</samplePath>
			</file>
			<file>
				<path>/analytics/preview-config.xml</path>
				<title>Analytics Preview Configuration</title>
				<description></description>
				<samplePath>/administration/samples/sample-analytics-preview-config.xml</samplePath>
			</file>
			<file>
				<path>/analytics/report-config.xml</path>
				<title>Analytics Report Configuration</title>
				<description></description>
				<samplePath>/administration/samples/sample-analytics-report-config.xml</samplePath>
			</file>
			<file>
				<path>/context-nav/contextual-nav.xml</path>
				<title>Contextual Navigation Configuration</title>
				<description>Defines modules on the site contextual navigation bar</description>
				<samplePath>/administration/samples/sample-contextual-nav.xml</samplePath>
			</file>
			<file>
				<path>/context-nav/site-dropdown.xml</path>
				<title>Site Dropdown Configuration</title>
				<description>Defines modules on the site dropdown bar</description>
				<samplePath>/administration/samples/sample-site-dropdown.xml</samplePath>
			</file>
			<file>
				<path>/deployment/endpoints-config.xml</path>
				<title>Endpoints Configuration</title>
				<description>Defines a list of end points available</description>
				<samplePath>/administration/samples/sample-endpoints-config.xml</samplePath>
			</file>
			<file>
				<path>/environment-overrides/dev/environment-config.xml</path>
				<title>Dev Environment Configuration</title>
				<description>Defines a dev environment configuration</description>
				<samplePath>/administration/samples/sample-dev-environment-config.xml</samplePath>
			</file>
			<file>
				<path>/form-control-config/configured-lists/targets.xml</path>
				<title>Targets Configuration</title>
				<description>Defines a list of targets used for form datasource</description>
				<samplePath>/administration/samples/sample-configured-lists-targets.xml</samplePath>
			</file>
			<file>
				<path>/form-control-config/rte/rte-setup.xml</path>
				<title>RTE Configuration</title>
				<description>Defines Rich Text Editors configurations in form</description>
				<samplePath>/administration/samples/sample-form-control-rte-setup.xml</samplePath>
			</file>
			<file>
				<path>/preview-tools/assets-config.xml</path>
				<title>Preview Asset Configuration</title>
				<description>Defines a list of editable assets associated with XML contents</description>
				<samplePath>/administration/samples/sample-preview-assets-config.xml</samplePath>
			</file>
			<file>
				<path>/preview-tools/components-config.xml</path>
				<title>Preview Components Configuration</title>
				<description>Defines a list of components that can be created dynamically in preview</description>
				<samplePath>/administration/samples/sample-preview-components-config.xml</samplePath>
			</file>
			<file>
				<path>/preview-tools/panel.xml</path>
				<title>Preview Panel Configuration</title>
				<description>Defines a list of tools available in preview</description>
				<samplePath>/administration/samples/sample-preview-panel.xml</samplePath>
			</file>
			<file>
				<path>/targeting/personas/personas-config.xml</path>
				<title>Personas Configuration</title>
				<description>Defines a list of personas available to assume in preview</description>
				<samplePath>/administration/samples/sample-personas-config.xml</samplePath>
			</file>
			<file>
				<path>/notification-config.xml</path>
				<title>Notification Configuration</title>
				<description>Defines a list of UI messages</description>
				<samplePath>/administration/samples/sample-notification-config.xml</samplePath>
			</file>
			<file>
				<path>/permission-mappings-config.xml</path>
				<title>Permissions Mappings</title>
				<description>Defines a map of permissions and paths</description>
				<samplePath>/administration/samples/sample-permission-mappings-config.xml</samplePath>
			</file>
			<file>
				<path>/role-mappings-config.xml</path>
				<title>Role Mappings</title>
				<description>Defines a list of roles available in site</description>
				<samplePath>/administration/samples/sample-role-mappings-config.xml</samplePath>
			</file>
			<file>
				<path>/site-config.xml</path>
				<title>Site Configuration</title>
				<description>Defines the general site configuration</description>
				<samplePath>/administration/samples/sample-site-config.xml</samplePath>
			</file>
			<file>
				<path>/workflow-config.xml</path>
				<title>Workflow Configuration</title>
				<description>Defines workflows available in the system</description>s
				<samplePath>/administration/samples/sample-workflow-config.xml</samplePath>
			</file>
		</files>
	</config>

-----------
Description
-----------

List of available configuration tags

+-----------------+------------------------------------+-------------------------------------------------+
|| Tag            || Description                                                                         |
+=================+====================================+=================================================+
|| files          || This tag contains each  file.                                                       |
+-----------------+------------------------------------+-------------------------------------------------+
|| file           || This tag cantains the configuration of each file.                                   |
+-----------------+------------------------------------+-------------------------------------------------+
|| path           || Path where the system will find the specific xml file                               |
+-----------------+------------------------------------+-------------------------------------------------+
|| title          || This tag refers to file title. It will be showed in the configuration dropdown      |
||                || at the top of the page. See #1 in the image above                                   |
+-----------------+------------------------------------+-------------------------------------------------+
|| description    || This tag refers to file description. It will be showed to explain the file          |
||                || functionality. See #2 in the image above                                            |
+-----------------+------------------------------------+-------------------------------------------------+
|| samplePath     || Path where the system will find an example of the specific xml.                     |
||                || See #3 in the image above                                                           |
+-----------------+------------------------------------+-------------------------------------------------+

.. image:: /_static/images/basic-configurarion.png
		:align: center
		:alt: Basic Configuration


------------
Sample File
------------

You can click on "View Sample" button to see a configuration file example.

.. image:: /_static/images/basic-configuration-sample.png
		:align: center
		:alt: Basic Configuration Sample


------------------------------
Adding new configuration file
------------------------------

To add new configuration file please follow the above steps.

#. Add file tags to configuration list xml file (config-list.xml). 

	.. code-block:: xml
	    :caption: /cstudio/config/sites/SITENAME/administration/config-list.xml/config-list.xml

	   	<file>
			<path>/workflow-config.xml</path>
			<title>Workflow Configuration</title>
			<description>Defines workflows available in the system</description>s
			<samplePath>/administration/samples/sample-workflow-config.xml</samplePath>
		</file>

	.. image:: /_static/images/basic-configuration-step1.png
		:align: center
		:alt: Basic Configuration Step 1

#. Click on save button

	.. image:: /_static/images/basic-configuration-step2.png
		:align: center
		:alt: Basic Configuration Step 2

#. Go to configuration tab, then open the dropdown and finally look for your new configuration file.
	
	.. image:: /_static/images/basic-configuration-step3.png
		:align: center
		:alt: Basic Configuration Step 3

