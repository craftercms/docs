.. _box-profile-configuration:

==========================
Box Profiles Configuration
==========================

The Box Profiles configuration file allows you to configure 0 or more Box profiles with the information required by Box services.
To modify the Box Profiles configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Box Profiles** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-box-config.png
    :alt: Configurations - Open Box Profiles Configuration
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/box/box.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        Box profiles configuration file. This files configures 0 or more
        profiles with the information required by the Box API.

        For every profile you need to specify:
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

        id:	a unique id for this profile, this will be referenced in the
            control defined in the content type
        clientId: Box client id (recommended to be encrypted)
        clientSecret: Box client secret (recommended to be encrypted)
        enterpriseId: Box enterprise id (recommended to be encrypted)
        publicKeyId: Box public key id (recommended to be encrypted)
        privateKey: Actual private key text in a CDATA
        privateKeyPassword: Password used to decrypt the private key (recommended to be encrypted)
        uploadFolder: Name of the folder where files will be uploaded

    -->
    <box>
        <profile>
            <id>box-default</id>
            <clientId>...</clientId>
            <clientSecret>...</clientSecret>
            <enterpriseId>...</enterpriseId>
            <publicKeyId>...</publicKeyId>
            <privateKey><![CDATA[...]]></privateKey>
            <privateKeyPassword>...</privateKeyPassword>
            <uploadFolder>videos</uploadFolder>
        </profile>
    </box>

|

-----------------
Box Configuration
-----------------

To obtain the clientId, clientSecret, enterpriseId, publicKeyId, privateKey and privateKeyPassword
you need to use a Box Developer Account to create a new App and configure it to use OAuth 2.0 with
JWT.

For more details you can follow the `official documentation <https://developer.box.com/docs/authentication-with-jwt>`_.

.. note::
  If you are using a JRE older than ``1.8.0_151`` you need to install the JCE Unlimited Strength
  Jurisdiction Policy Files. For newer versions you only need to enable the unlimited strength setting.