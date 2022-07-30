
.. _example-component-plugin:

==============
Adding a Component Content Type
==============

Let's take a look at an example of creating a component content type plugin named ``My Component``

First, we'll configure the descriptor file ``craftercms-plugin.yaml`` file for our plugin

.. literalinclude:: /_static/code/developer/plugins/component-content-type/craftercms-plugin.yaml
   :language: yaml
   :caption: *Descriptor file for the example component content type plugin*
   :linenos:

|

We'll then create the directory structure for a component content type plugin ``authoring/content-types/component/*``, to place our plugin files in,

   .. code-block:: text
      :caption: *Directory structure for component content type project plugin My Component*
      :emphasize-lines: 4-7

      authoring/
        content-types/
          component/
            mycomponent/
              config.xml
              controller.groovy
              form-definition.xml

|

Here are the plugin files:

.. raw:: html

   <details>
   <summary><a>authoring/content-types/component/mycomponent/config.xml</a></summary>

.. literalinclude:: /_static/code/developer/plugins/component-content-type/config.xml
   :language: xml
   :linenos:

.. raw:: html

   </details>


.. raw:: html

   <details>
   <summary><a>authoring/content-types/component/mycomponent/form-definition.xml</a></summary>

.. literalinclude:: /_static/code/developer/plugins/component-content-type/form-definition.xml
   :language: xml
   :linenos:

.. raw:: html

   </details>


.. raw:: html

   <details>
   <summary><a>authoring/content-types/component/mycomponent/controller.groovy</a></summary>

.. literalinclude:: /_static/code/developer/plugins/component-content-type/controller.groovy
   :language: groovy
   :linenos:

.. raw:: html

   </details>

|


The plugin is now ready to be tested.  We'll install our plugin located  under ``/users/myuser/component-plugin`` using the ``crafter-cli`` command ``copy-plugin`` to test it out to a project named editorial

.. code-block:: bash

   ➜ ./crafter-cli copy-plugin -e local -s editorial --path /users/myuser/component-plugin
   OK

|

After installing our plugin, we can now verify that our component plugin is available in |projectTools| Content Types

.. figure:: /_static/images/developer/plugins/project-plugins/plugins-sample-component.jpg
   :align: center
   :alt: Example component content type plugin now available in project editorial
   :width: 80%

|
