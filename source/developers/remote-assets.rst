:is-up-to-date: True

.. index:: Remote Assets, Assets

.. _remote-assets:

-------------
Remote Assets
-------------

Remote assets are binary files, typically images, videos, pdf documents, etc. which are hosted outside of Crafter Studio.  Remote assets could be hosted in AWS, Box or some other server accessed through WebDAV, CMIS. etc.

Various data sources are available to help manage/use assets hosted outside of Crafter Studio in your site.  The ``Developer`` section contains some examples on how to store assets remotely, such as :ref:`use-s3-to-store-assets` and :ref:`use-box-to-store-assets`.  The ``Site Administrators`` section contains information on how to configure Crafter Studio to access services used for storing assets remotely here: :ref:`studio-configuration`.

Crafter Studio by default has the remote assets controller open up the remote repository for read access via the URL pattern ``/remote-assets/STORE-TYPE/PROFILE-ID/PATH-TO-ASSET``, where:

   * **STORE-TYPE** the remote repository storage used, for our example above, **S3**
   * **PROFILE-ID** ID used to refer to remote repository profile
   * **PATH-TO-ASSET**  path to asset in the remote repository

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Disabling /remote-assets Access
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes you may want to disable access to remote repositories. To do this, in your authoring or delivery install, open the file ``rendering-context.xml`` under ``apache-tomcat/shared/classes/crafter/engine/extension/`` and edit the file to define a set of ``crafter.urlMappings`` without the remote-asset controller, like this:

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

.. note:: Please take note that if you disable /remote-access in your authoring install, preview of remote assets will be broken.