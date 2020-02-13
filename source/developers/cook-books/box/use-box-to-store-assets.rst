
.. index:: Use Box to Store Assets

.. _use-box-to-store-assets-fix-later:

=======================
Use Box to Store Assets
=======================

Box is a great option when you need to store media and documents that are quite large. The following guide explains how to:

* Configure Studio to use Box.
* Upload documents to Box using the box-file-upload control in Studio.
* Generate public links in Engine that users can use to access these documents.

-------------
Prerequisites
-------------
* Create a Box profile to upload the assets.
* Create a site based on the Editorial blueprint.

-------------------------------------------
Step 1: Add the Box configuration in Studio
-------------------------------------------

Go to |siteConfig| > ``Configurations`` and in the dropdown select ``Box Profiles``. If you click on ``View Sample``, you’ll see the available configuration profiles. In particular, the configuration for a Box profile is the following:

.. code-block:: xml
    :linenos:

    <profile>
      <id/>
      <clientId/>
      <clientSecret/>
      <enterpriseId/>
      <publicKeyId/>
      <privateKey/>
      <privateKeyPassword/>
      <uploadFolder/>
    </profile>

|

**where:**

* **id:** the ID that ``box-file-upload`` controls will use to refer to this profile.
* **clientId:** Box client id
* **clientSecret:** Box client secret
* **enterpriseId:** Box enterprise id
* **publicKeyId:** Box public key id
* **privateKey:** Actual private key text in a CDATA
* **privateKeyPassword:** Password used to decrypt the private key
* **uploadFolder:** Name of the folder where files will be uploaded in Box

For this guide, the Box Profiles should look like this (replace the ``...``'s for actual Box credentials and ``uploadFolder`` for the actual upload folder where you’re storing the documents):

.. code-block:: xml
    :linenos:

    <box>
      <profile>
        <id>box-default</id>
        <clientId>...</clientId>
        <clientSecret>...</clientSecret>
        <enterpriseId>...</enterpriseId>
        <publicKeyId>...</publicKeyId>
        <privateKey><![CDATA[...]]></privateKey>
        <privateKeyPassword>...</privateKeyPassword>
        <uploadFolder>uploadFolder</uploadFolder>
      </profile>
    </box>

|

-------------------------------------------
Step 2: Add the Box configuration in Engine
-------------------------------------------
Engine’s Box configuration is completely flexible, since it depends on your Groovy code that generates the Box URLs. Nevertheless, at least for this guide, we recommend that (from Studio) you create the following configuration in ``Site Config`` > ``Configurations`` > ``Engine Site Configuration`` (again replace the ``...``'s for the actual credentials):

.. code-block:: xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <site>
      <box>
        <clientId>...</clientId>
          <clientSecret>...</clientSecret>
          <enterpriseId>...</enterpriseId>
          <publicKeyId>...</publicKeyId>
          <privateKey><![CDATA[...]]></privateKey>
          <privateKeyPassword>...</privateKeyPassword>
          <uploadFolder>videos</uploadFolder>
      </box>
    </site>

------------------------------------------
Step 3: Enable the Box File Upload Control
------------------------------------------

In ``Site Config`` > ``Configurations`` > ``Site Config Tools``, in the ``<controls>`` section, enable the Box File Upload by adding the following lines:

.. code-block:: xml
    :linenos:

    <control>
      <name>box-file-upload</name>
      <icon>
        <class>fa-square-o</class>
        <stackedclass>fa-upload</stackedclass>
      </icon>
    </control>

|

-----------------------------------------------------------
Step 4: Add the Box File Upload Control to the content type
-----------------------------------------------------------

For our example, we'll add an ``Attachments`` field, which is of type ``box-file-upload``, to the ``Page - Article``
content type. To do this:

#. Go to ``Site Config`` > ``Content Types`` > ``Open Existing Type`` and open the ``Page - Article`` content type definition.
#. At the end of the *Content* section, add a ``Box File Upload`` control with Title *Attachments* and Name *attachments* (the control has a property called Profile ID. If you changed the name of ``profile.id`` in step 1, you need to change it in the property too).  Remember to put a check mark on the ``Enable Upload`` and ``Enable Multiple Selection`` properties of the **Box File Upload** control so the users will be able to upload assets to Box and be able to select multiple assets.


.. image:: /_static/images/guides/box/attachments-controls.png
    :alt: Box Assets - Attachments Controls
    :align: center

---------------------------------------------------------
Step 5: Add the Groovy script to generate the public URLs
---------------------------------------------------------
In order for the article attachments to be publicly accessible, we need a Groovy script that will be executed every time an Article page is about be be rendered, that will generate URLs for every one of the article attachments, and that will put the URLs in the template model so that they can be shown in the view. To do this, create a controller under Scripts > pages and name it article.groovy. The controller must have the following code:

.. code-block:: groovy
    :linenos:

    import com.box.sdk.*

    @Grab(group='com.box', module='box-java-sdk', version='2.14.0')

    def createBoxClient() {

      def config
      JWTEncryptionPreferences jwtPrefs = new JWTEncryptionPreferences()
      jwtPrefs.setPublicKeyID(siteConfig.getString("box.publicKeyId"))
      jwtPrefs.setPrivateKey(siteConfig.getString("box.privateKey"))
      jwtPrefs.setPrivateKeyPassword(siteConfig.getString("box.privateKeyPassword"))
      jwtPrefs.setEncryptionAlgorithm(EncryptionAlgorithm.RSA_SHA_256)
      IAccessTokenCache accessTokenCache = new InMemoryLRUAccessTokenCache(100);
      config = new BoxConfig(
                siteConfig.getString("box.clientId"), siteConfig.getString("box.clientSecret"),
    			siteConfig.getString("box.enterpriseId"), jwtPrefs)
      return BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(config)
    }

    def generateShareLink(client, fileId) {
      BoxFile file = new BoxFile(client, fileId)
      BoxSharedLink.Permissions permissions = new BoxSharedLink.Permissions();
      permissions.setCanDownload(true);
      permissions.setCanPreview(true);
      BoxSharedLink url = file.createSharedLink(BoxSharedLink.Access.OPEN,
    			null, permissions);
      return url.getDownloadURL();
    }

    def addAttachment(client, attachmentElement, attachments) {
      String id = attachmentElement.id.text
      BoxFile file = new BoxFile(client, id);
      String name = file.getInfo("name").name;
      attachments[name] = generateShareLink(client, id)
    }

    def attachmentElements = contentModel.attachments?.item
    def attachments = [:]

    if (attachmentElements) {
      BoxAPIConnection client = createBoxClient()

      if (attachmentElements instanceof Collection) {
        attachmentElements.each { elem ->
            addAttachment(client, elem, attachments)
      }
      } else {
        // This means there's a single attachment
        addAttachment(client, attachmentElements, attachments)
      }
    }

    templateModel.attachments = attachments

|

----------------------------------------------
Step 6: Add Freemarker code to render the URLs
----------------------------------------------

Now that we have the Groovy code to generate the URLs, we need the Freemarker code that will render the URLs. In the Templates > web > pages > article.ftl, add the following lines after the ``<#list contentModel.sections.item as item>...</#list>`` lines:

.. code-block:: html
    :force:
    :linenos:

    <#if attachments??>
      <h2>Attachments</h2>
      <ul>
        <#list attachments?keys as name>
          <li><a href="${attachments[name]}">${name}</a></li>
        </#list>
      </ul>
    </#if>

-------------------------------------------------
Step 7: Add some attachments and test the changes
-------------------------------------------------

If all the previous steps have been done correctly, you should be able to add any number of attachments and they
should appear underneath the last content sections when the page is rendered. For example, after adding a couple of
PDF catalogs in the *Men Styles For Winter* article:

.. image:: /_static/images/guides/box/attachments-form.png
   :alt: Box Assets - Attachments Form
   :align: center

The bottom of the page looks like this:

.. image:: /_static/images/guides/box/attachments-view.png
   :alt: Box Assets - Attachments View
   :align: center

---------------------------
Step 8: Publish the changes
---------------------------
The next step is to publish the changes. Remember to publish not just the page where we added the Box assets, but also the ``article.ftl``, ``article.groovy``, ``engine/site-config.xml`` and the ``box.xml`` files too.

.. image:: /_static/images/guides/box/publish-changes.png
    :alt: Box Assets - Attachments View
    :align: center
