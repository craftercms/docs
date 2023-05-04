:is-up-to-date: False
:last-updated: 4.0.0
:nosearch:

.. _headless-accessing-content:

==============
Content Access
==============

In this section we'll take a look on how to access content.

.. include:: /includes/content-retrieval-apis.rst

-----------------------
Accessing Static Assets
-----------------------

.. Define what a static asset is

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Internally Managed Static Assets
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. Regular files stored in git

Blob Store Files
----------------

.. For large files that are still managed directly by Studio and go through the same workflow and publishing processes, the blob store offers...
.. High-level overview of the blob store goes here

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Externally Managed Static Assets
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. TODO: Flesh this out

.. Indicate that external assets are still indexed by Crafter for search

.. Content is stored externally for
   - Integration
   - Large files

.. By default content is stored in the project's Git repository, however, it's often necessary to store content
   in external content stores, like a DAM or S3.
   Additionally, large files...


AWS Asset Access
----------------

S3 Asset Access
^^^^^^^^^^^^^^^
aws/use-s3-to-store-assets

Transcoding Videos with AWS
^^^^^^^^^^^^^^^^^^^^^^^^^^^
aws/upload-transcode-video


Box Asset Access
----------------
box/use-box-to-store-assets

WebDAV Asset Access
-------------------

.. explain webdav

Referencing Externally Managed Assets
-------------------------------------

The ``Site Administrators`` section
contains information on how to configure CrafterCMS to access services used for storing assets remotely
here: :ref:`studio-configuration`.

Browser access to remote assets on your site is provided by Crafter Engine's remote assets controller
via the URL pattern ``/remote-assets/STORE-TYPE/PROFILE-ID/PATH-TO-ASSET``, where:

   * **STORE-TYPE** the remote repository storage used, for our example above, **S3**
   * **PROFILE-ID** ID used to refer to remote repository profile
   * **PATH-TO-ASSET**  path to asset in the remote repository

Disabling ``/remote-assets`` Access
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes you may want to disable access to remote repositories. To do this, in your authoring or delivery
install, open the file ``rendering-context.xml`` under ``apache-tomcat/shared/classes/crafter/engine/extension/``
and edit the file to define a set of ``crafter.urlMappings`` without the remote-asset controller, like this:

.. code-block:: xml
    :caption: {CRAFTER-INSTALL}/bin/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml
    :linenos:

    <util:map id="crafter.urlMappings">
        <entry key="/api/**" value-ref="crafter.restScriptsController"/>
        <entry key="/api/1/services/**" value-ref="crafter.restScriptsController"/> <!-- Deprecated mapping, might be removed in a later version -->
        <entry key="/static-assets/**" value-ref="crafter.staticAssetsRequestHandler"/>
        <!--entry key="/remote-assets/**" value-ref="crafter.remoteAssetsRequestHandler"/-->
        <entry key="/*" value-ref="crafter.pageRenderController"/>
    </util:map>

.. note:: Please take note that if you disable /remote-access in your authoring install, preview of remote
          assets will be broken.


By-passing /remote-assets in Delivery for WebDAV
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To avoid proxying the WebDav ``/remote-assets`` in Delivery, the Delivery Deployer target should be configured
to have a find and replace processor that changes the ``/remote-assets`` URL to an actual Apache static asset
delivery URL.

.. code-block:: yaml
  :linenos:
  :caption: {CRAFTER-DELIVERY-INSTALL}/data/deployer/targets/SITE-NAME-default.yaml

  - processorName: findAndReplaceProcessor
    textPattern: /remote-assets/webdav(/([^&quot;&lt;]+)
    replacement: 'http://apache.static-asset.delivery.url$1'
