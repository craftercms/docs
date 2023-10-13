:is-up-to-date: True
:last-updated: 4.1.1

:orphan:

.. _box-profile-configuration:

==========================
Box Profiles Configuration
==========================
The Box Profiles configuration file allows you to configure Box profiles with the information
required by Box services.
To modify the Box Profiles configuration, click on |projectTools| from the bottom of the *Sidebar*,
then click on **Configuration** and select **Box Profiles** from the list.

.. image:: /_static/images/site-admin/config-open-box-config.webp
    :alt: Configurations - Open Box Profiles Configuration
    :width: 55 %
    :align: center

------
Sample
------
Here's a sample Box Profiles Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "box.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-box.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/box/box.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
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

For more information on how to manage/encode your secrets such as your Box credentials, please see :ref:`managing-secrets`
