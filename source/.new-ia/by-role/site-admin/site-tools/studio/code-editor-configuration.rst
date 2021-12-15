:is-up-to-date: True

.. index:: Code Editor Configuration

.. _newIa-code-editor-configuration:

#########################
Code Editor Configuration
#########################

The code editor configuration file allows the user to create snippets/template code examples for use in Studio by other users in addition to the available `examples <https://github.com/craftercms/studio-ui/blob/master/static-assets/components/cstudio-forms/template-editor.js>`_ out of the box.

To modify/add to the code editor configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Code Editor Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-code-editor-config.png
    :alt: Configurations - Open Code Editor Configuration
    :width: 65 %
    :align: center


------
Sample
------

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/code-editor-config.xml*
    :linenos:

    <!--
      ~ Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
      ~
      ~ This program is free software: you can redistribute it and/or modify
      ~ it under the terms of the GNU General Public License as published by
      ~ the Free Software Foundation, either version 3 of the License, or
      ~ (at your option) any later version.
      ~
      ~ This program is distributed in the hope that it will be useful,
      ~ but WITHOUT ANY WARRANTY; without even the implied warranty of
      ~ MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      ~ GNU General Public License for more details.
      ~
      ~ You should have received a copy of the GNU General Public License
      ~ along with this program.  If not, see <http://www.gnu.org/licenses/>.
      -->

    <code-editor-config>
      <theme>light</theme>       <!-- default theme: light | dark -->
      <snippets>
        <snippet>
          <key>freemarker-example</key>
          <label>Freemarker Example</label>
          <type>freemarker</type>       <!-- freemarker | groovy -->
          <content>
            <![CDATA[
            <#assign imageSrc = contentModel.image!"" />
            ]]>
          </content>
        </snippet>
        <snippet>
          <key>groovy-example</key>
          <label>Groovy Example</label>
          <type>groovy</type>           <!-- freemarker | groovy -->
          <content>
            <![CDATA[
            logger.info('MY MESSAGE')
            ]]>
          </content>
        </snippet>
      </snippets>
    </code-editor-config>

|

------------------------------
Adding a Template Code Example
------------------------------

Let's take a look at an example of adding the template code example for freemarker from above using a site created using the Website Editorial blueprint.

#. Open the ``Sidebar`` and click on |siteConfig| ➜ ``Configuration`` ➜ ``Code Editor Configuration``
#. Uncomment the snippet ``freemarker-example`` and save your changes

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 8-17

      <code-editor-config>
    	<version>2</version><!-- <theme>light</theme> --><!-- default theme: light | dark -->
       <enable-basic-autocompletion>true</enable-basic-autocompletion>
       <enable-live-autocompletion>true</enable-live-autocompletion>
       <font-size>11pt</font-size>
       <tab-size>4</tab-size>
       <snippets>
        <snippet>
          <key>freemarker-example</key>
          <label>Freemarker Example</label>
          <type>freemarker</type>
          <content>
            <![CDATA[
            <#assign imageSrc = contentModel.image!"" />
            ]]>
          </content>
        </snippet>
        </snippets>
      </code-editor-config>

   |

#. We should now be able to see the snippet we added above in the code editor.  Open the ``Sidebar`` then navigate to ``/templates/web/pages``.  Right click on the ``article.ftl``, then click on ``Edit``.  The code editor will then come up.

   .. image:: /_static/images/site-admin/config-code-editor-ex-step1.png
       :alt: Configurations - Code Editor Configuration Example
       :width: 45 %
       :align: center

   |

   At the top of the code editor, click on the dropdown for ``Template code examples``.  You should see our newly added snippet titled ``Freemarker Example``

   .. image:: /_static/images/site-admin/config-code-editor-ex-step2.jpg
       :alt: Configurations - Code Editor Configuration Example Dropdown List
       :width: 65 %
       :align: center

   |

   Inside the code editor, start typing the name of our snippet, ``freemarker``, the code editor will give you suggestions of matches and you should see the snippet we added.  In the image below, you can see the letters ``fre`` inputted and one of the suggestions is the snippet we added in the code editor configuration file.

   .. image:: /_static/images/site-admin/config-code-editor-ex-step3.png
       :alt: Configurations - Code Editor Configuration Example autocomplete
       :width: 65 %
       :align: center