:is-up-to-date: True
:last-updated: 4.0.3


.. index:: Blob Stores Configuration

.. _blob-stores-configuration:

=========================
Blob Stores Configuration
=========================

The Blob Stores configuration file allows you to configure 0 or more stores for assets with the corresponding information required by the store being used.
To modify the Blob Stores configuration, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **Blob Stores** from the list.

.. image:: /_static/images/site-admin/config-open-blob-stores.webp
    :alt: Configurations - Open Blob Stores Configuration
    :width: 65 %
    :align: center


------
Sample
------

Here's a sample Blob Stores Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "blob-stores-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-blob-stores-config.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/blob-stores-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|

Remember to encrypt your credentials. For more information on how to manage/encode your secrets such as AWS credentials,
please see :ref:`managing-secrets`

For better security and control, we recommend setting an AWS profile via the ``crafter-setenv.sh`` file instead of
configuring the encrypted credentials in the blob stores configuration file.  This allows you to have an IAM user
per developer, which is a better approach than a single user whose credentials are included (encrypted) in the
configuration file. In this way, if you need to rotate or remove the credentials of a single user, the access of
other users won't be affected.

To set an AWS profile, using your favorite editor, open ``CRAFTER_HOME/bin/crafter-setenv.sh`` and add the following:

.. code-block:: bash

   export AWS_PROFILE=YOUR_AWS_PROFILE

|

*where* ``YOUR_AWS_PROFILE`` is the AWS profile you wish to use for the blob store.  See :ref:`here <aws-profile-configuration>`
for more information on configuring AWS profiles.

When using an AWS profile, you can now remove the ``<credentials />`` section in your blob stores configuration file.

Remember to restart your CrafterCMS install for the changes you made to take effect.

See :ref:`publishing-assets-in-external-storage` for an example of using the blob stores configuration

-----------------------
Using AWS Service Roles
-----------------------

CrafterCMS supports AWS access without using access/secret keys, by setting AWS service roles on your machine

Simply follow the instructions here for attaching an IAM role to your instance:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#attach-iam-role

Remember to remove the ``<credentials />`` section in your blob stores configuration file.
