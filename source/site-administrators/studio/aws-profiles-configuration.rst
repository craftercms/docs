:is-up-to-date: True
:last-updated: 4.0.1

.. index:: AWS Profiles Configuration

.. _aws-profile-configuration:

==========================
AWS Profiles Configuration
==========================

The AWS Profiles configuration file allows you to configure 0 or more AWS profiles with the information required by AWS services.
To modify the AWS Profiles configuration, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **AWS Profiles** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-aws-config.jpg
    :alt: Configurations - Open AWS Profiles Configuration
    :width: 65 %
    :align: center

------
Sample
------

Here's a sample AWS Profiles Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "aws.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-aws.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/aws/aws.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|


For more information on Amazon S3, please see: https://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html

For more information on the AWS elastic transcoder, please see: https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/introduction.html

For more information on the AWS mediaconvert, please see: https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
