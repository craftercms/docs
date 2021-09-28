:is-up-to-date: True

.. index:: Sidebar Configuration

.. _sidebar-configuration:

#####################
Sidebar Configuration
#####################

The sidebar configuration file configures the items available for interaction on the left side of Studio.  The Sidebar shows different projections of the content in addition to other tools to assist in content authoring.
To modify the sidebar configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Sidebar Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-sidebar-config.png
    :alt: Configurations - Open Sidebar Configuration
    :width: 65 %
    :align: center

******
Sample
******

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/context-nav/sidebar.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- sidebar.xml
    	This configuration file controls the SideBar in Crafter Studio. The SideBar is the left bar that shows
    	different projections of the content in addition to other tools to assist in content authoring.

        <contextNav>
          <modulehook>
    		<name>dashboard</name>
    		<params>
              <label>Dashboard</label>
    		  <path>/site-dashboard</path>
              <icon>  	               (optional icon customization - only one state (no tree link))
    		    <class>fa-cog</class>  (change default icon - using Font Awesome class)
                <styles> 	           (Change default icon styles - using css rules)
    		      <color>#409a00</color>
    			  <font-size>16px</font-size>
    		    </styles>
    		  </icon>
    		  <roles>
    			<role>admin</role>
    			<role>developer</role>
    		  </roles>
    		  <label>Site Config</label>
    		  <path>/site-config</path>
    		  <showRootItem>true</showRootItem>
    		  <onClick>preview</onClick>
    		</params>
          </modulehook>
    	</contextNav>
                
    	<contextNav>
          <modulehook>
              <name>wcm-root-folder</name>
              <showDivider>true</showDivider>
              <label>Pages</label>
              <path>/site/website</path>
    		  <module-icon-open>       (optional module-icon-open customization - state open)
                <class>fa-cog</class>
                <styles>
                    <color>#409a00</color>
                    <font-size>16px</font-size>
                </styles>
              </module-icon-open>
              <module-icon-closed>     (optional module-icon-closed customization - state close)
                <class>fa-cog</class>
                <styles>
                    <color>#409a00</color>
                    <font-size>16px</font-size>
                </styles>
              </module-icon-closed>
              <showRootItem>true</showRootItem>
              <onClick>preview</onClick>
    		</params>
          </modulehook>
    	</contextNav>

        Common module hooks include:
           <modulehook>
              <name>wcm-root-folder</name>           Type: Browsable content tree of descriptors and folders
              <showDivider>true</showDivider>        Display a visual divider after the folder (true/false)
              <params>
                 <label>Pages</label>                Label
                 <path>/site/website</path>          Path to root tree at. You mave multiple path elements
                 <showRootItem>true</showRootItem>   Display the root folder (true/false)
                 <onClick>preview</onClick>          Attempt to preview asset on click
                 <roles>...</roles>                  (optional roles list that has access to the menu item)
              </params>
           </modulehook>

           <modulehook>
              <name>wcm-asset-folder</name>          Type: Browsable content tree of files and folders
              <showDivider>true</showDivider>        Display a visual divider after the foler (true/false)
              <params>
                 <label>Static Assets</label>        Label
                 <path>/static-assets</path>         Path to root tree at. You mave multiple path elements
                 <showRootItem>true</showRootItem>   Display the root folder (true/false)
                 <onClick>preview</onClick>          Attempt to preview asset on click
                 <roles>...</roles>                  (optional roles list that has access to the menu item)
              </params>
           </modulehook>

          <modulehook>
            <name>dashboard</name>                   Type: Display a link to the Sites Dashboard
            <params>
              <label>Dashboard</label>               Label
              <path>/site-dashboard</path>           Relative link to Sites Dashboard
              <roles>...</roles>                     (optional roles list that has access to the menu item)
            </params>
          </modulehook>

          <modulehook>
            <name>site-config</name>                 Type: Display a link to the Site Config Panel
            <params>
              <label>Dashboard</label>               Label
              <path>/site-dashboard</path>           Relative link to Site Config Panel
              <roles>...</roles>                     (optional roles list that has access to the menu item)
            </params>
          </modulehook>
    -->
    <contextNav>
      <contexts>
        <context>
    	  <groups>
    		<group>
    		  <menuItems>
    		    <menuItem>
                  <modulehooks>
                    <!-- Dashboard -->
                    <modulehook>
                      <name>dashboard</name>
                      <params>
                        <label>Dashboard</label>
                        <path>/site-dashboard</path>
                      </params>
                    </modulehook>

                    <!-- Site IA Pages -->
                    <modulehook>
                      <name>wcm-root-folder</name>
                      <params>
                        <label>Pages</label>
                        <path>/site/website</path>
                        <showRootItem>true</showRootItem>
                        <onClick>preview</onClick>
                      </params>
                    </modulehook>

                    <!-- Components -->
                    <modulehook>
                       <name>wcm-root-folder</name>
                       <params>
                         <label>Components</label>
                         <path>/site/components</path>
                         <showRootItem>true</showRootItem>
                       </params>
                    </modulehook>

                    <!-- Taxonomy -->
                    <modulehook>
                      <name>wcm-root-folder</name>
                      <params>
                        <label>Taxonomy</label>
                        <path>/site/taxonomy</path>
                        <showRootItem>true</showRootItem>
                      </params>
                    </modulehook>

                    <!-- Static Assets -->
                    <modulehook>
                      <name>wcm-assets-folder</name>
                      <params>
                        <label>Static Assets</label>
                        <path>/static-assets</path>
                        <showRootItem>true</showRootItem>
                        <onClick>none</onClick>
                      </params>
                    </modulehook>

                    <!-- Templates -->
                    <modulehook>
                      <name>wcm-assets-folder</name>
                      <params>
                        <label>Templates</label>
                        <path>/templates</path>
                        <showRootItem>true</showRootItem>
                        <onClick>none</onClick>
                      </params>
                    </modulehook>

                    <!-- Scripts -->
                    <modulehook>
                      <name>wcm-assets-folder</name>
                      <params>
                        <label>Scripts</label>
                        <path>/scripts</path>
                        <showRootItem>true</showRootItem>
                        <onClick>none</onClick>
                      </params>
                    </modulehook>

                    <!-- Site Config -->
                    <modulehook>
                      <name>site-config</name>
                      <params>
                        <roles>
                          <role>admin</role>
                          <role>developer</role>
                        </roles>
                        <label>Site Config</label>
                        <path>/site-config</path>
                      </params>
                    </modulehook>
                  </modulehooks>

                </menuItem>
              </menuItems>
            </group>
          </groups>
        </context>
      </contexts>
    </contextNav>

|

****************
Sidebar Excludes
****************

To hide items (exclude) in the sidebar, use

.. code-block:: xml
   :force:

   ...
   <excludes>
     <exclude PATTERN_TO_EXCLUDE/>
     ...
   </excludes>

|

where:

* PATTERN_TO_EXCLUDE is a prefix of items to hide from the Sidebar

Let's take a look at an example using the a site created from the Website Editorial blueprint, to hide the folder ``/site/website/articles/2017/3``.

Here's the site tree before the ``2017/3`` folder is hidden

.. image:: /_static/images/site-admin/sidebar-pages-folders.png
   :alt: Configurations - Sidebar Configuration Folder Structure
   :width: 25 %
   :align: center

|

Here's the configuration to hide the folder:

.. code-block:: xml
   :linenos:
   :emphasize-lines: 9-11

   <!-- Site IA Pages -->
   <modulehook>
     <name>wcm-root-folder</name>
     <params>
       <label>Pages</label>
       <path>/site/website</path>
       <showRootItem>true</showRootItem>
       <onClick>preview</onClick>
       <excludes>
         <exclude>/site/website/articles/2017/3</exclude>
       </excludes>
     </params>
   </modulehook>
   ...

|

Here's the site tree with the folder ``2017/3`` hidden:

.. image:: /_static/images/site-admin/sidebar-pages-folder-hidden.png
   :alt: Configurations - Sidebar Configuration Folder Hidden
   :width: 25 %
   :align: center

|


**************************
Sidebar Icon Customization
**************************

The default icon and icon colors of modules in the sidebar can be changed including when expanding/collapsing modules.

Let's take a look at an example of putting a red border when ``Taxonomy`` is expanded and for ``Templates``, a red font color when expanded and a blue font color when collapsed

Let's take a look at an example of changing the icon and icon color of the ``Dashboard`` module to use a tag as its icon, colored green and, to change the icon and color of ``Pages`` to a red anchor icon when the module is collapsed, and to a green cog when the module is expanded.

Here's the default colors of the modules in the sidebar.  Pay close attention to the ``Dashboard`` and ``Pages`` widget colors.

.. image:: /_static/images/site-admin/sidebar-widget-default-colors.png
   :alt: Configurations - Sidebar Configuration Widget Default Colors
   :width: 25 %
   :align: center

|

Here's the configuration for changing the icon and color of ``Dashboard`` to a green tag icon, and changing the icon and color of ``Pages`` to a red anchor icon when the module is collapsed, and to a green cog when the module is expanded.

.. code-block:: xml
   :linenos:
   :emphasize-lines: 8-21

   <contextNav>
     <modulehook>
       <name>wcm-root-folder</name>
       <params>
         <showDivider>true</showDivider>
         <label>Pages</label>
         <path>/site/website</path>
         <module-icon-open>       (optional module-icon-open customization - state open)
           <class>fa-cog</class>  (change default icon - using Font Awesome class)
           <styles>               (Change default icon styles - using css rules)
             <color>green</color>
             <font-size>16px</font-size>
           </styles>
         </module-icon-open>
         <module-icon-closed>     (optional module-icon-closed customization - state close)
           <class>fa-anchor</class>
           <styles>
             <color>red</color>
             <font-size>16px</font-size>
           </styles>
         </module-icon-closed>
         <showRootItem>true</showRootItem>
         <onClick>preview</onClick>
       </params>
     </modulehook>
   </contextNav>
   ...

|

Here's the  sidebar with the icons and colors changed:

.. image:: /_static/images/site-admin/sidebar-icon-color-changed.png
   :alt: Configurations - Sidebar Configuration Module Default Colors and Icons Changed
   :width: 25 %

.. image:: /_static/images/site-admin/image-space.png
   :width: 5 %


.. image:: /_static/images/site-admin/sidebar-icon-expanded-changed.png
   :alt: Configurations - Sidebar Configuration Module Default Icon Expanded Changed
   :width: 25 %

|