:is-up-to-date: True

:orphan:

.. index:: Global Menu Config

.. _global-menu-config:

==================
Global Menu Config
==================

The Global Menu Config configuration file defines what modules are available for administration use when clicking on Main Menu from the top bar.

To see the default modules available from the |mainMenu| Main Menu, see :ref:`navigating-main-menu`

Here is the default Global Menu Config configuration file.  To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-menu-config.xml``.  Remember to restart Crafter so your changes to the file will take effect.

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/global/configuration/global-menu-config.xml*
   :linenos:

   <!--
     This file contains global menu configuration for Crafter Studio.
    	The global menu shows up as the first screen after a user logs in
    	and displays a list of tools for the user including the list of sites.

        The structure of this file is:
    	<globalMenu>
    		<items>
    			<item>
    				<id />
    				<label />
    				<icon />
    				<permission />
    			</item>
    		</items>
    	</globalMenu>

    -->

    <globalMenu>
        <items>
            <item>
                <id>home.globalMenu.sites</id>
                <label lang="en">Sites</label>
                <icon>fa-sitemap</icon>
                <permission>*</permission>
            </item>
            <item>
                <id>home.globalMenu.users</id>
                <label lang="en">Users</label>
                <icon>fa-user</icon>
                <permission>create_users</permission>
            </item>
            <item>
                <id>home.globalMenu.groups</id>
                <label lang="en">Groups</label>
                <icon>fa-users</icon>
                <permission>create_groups</permission>
            </item>
            <item>
                <id>home.globalMenu.cluster</id>
                <label lang="en">Cluster</label>
                <icon>fa-database</icon>
                <permission>create_cluster</permission>
            </item>
            <item>
                <id>home.globalMenu.audit</id>
                <label lang="en">Audit</label>
                <icon>fa-bars</icon>
                <permission>audit_log</permission>
            </item>
            <item>
                <id>home.globalMenu.logging-levels</id>
                <label lang="en">Logging Levels</label>
                <icon>fa-level-down</icon>
                <permission>read_logs</permission>
            </item>
            <item>
                <id>home.globalMenu.log-console</id>
                <label lang="en">Log Console</label>
                <icon>fa-align-left</icon>
                <permission>read_logs</permission>
            </item>
            <item>
                <id>home.globalMenu.globalConfig</id>
                <label lang="en">Global Config</label>
                <icon>fa-globe</icon>
                <permission>write_global_configuration</permission>
            </item>
            <item>
                <id>home.globalMenu.encryptionTool</id>
                <label lang="en">Encryption Tool</label>
                <icon>fa-lock</icon>
                <permission>encryption_tool</permission>
            </item>
        </items>
    </globalMenu>
