.. _aws-profile-configuration:

==========================
AWS Profiles Configuration
==========================

The AWS Profiles configuration file allows you to configure 0 or more AWS profiles with the information required by AWS services.
To modify the AWS Profiles configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **AWS Profiles** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-aws-config.png
    :alt: Configurations - Open AWS Profiles Configuration
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/aws/aws.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        AWS profiles configuration file. This files configures 0 or more
        AWS profiles with the information required by AWS services.

    For every profile you need to specify at least:
        <profile>
            <id/>
            <credentials>
                <accessKey/>
                <secretKey/>
            </credentials>
            <region/>
        </profile>

        id:	a unique id for this profile, this will be referenced in the
            control defined in the content type
        accessKey: AWS access key (recommended to be encrypted)
        secretKey: AWS secret key (recommended to be encrypted)
        region: AWS region for the service

       Every service can require additional properties.
    -->
    <aws>
        <profile>
            <id>s3-default</id>
            <credentials>
                <accessKey>${enc:xxxxxxxxx}</accessKey>
                <secretKey>${enc:xxxxxxxxx}</secretKey>
            </credentials>
            <region>us-west-1</region>
            <bucketName>sample-input-bucket</bucketName>
        </profile>
        <profile>
            <id>elastic-transcoder-default</id>
            <credentials>
                <accessKey>${enc:xxxxxxxxx}</accessKey>
                <secretKey>${enc:xxxxxxxxx}</secretKey>
            </credentials>
            <region>us-east-1</region>
            <pipelineId>xxxxxxxx</pipelineId>
            <outputs>
                <output>
                    <presetId>xxxxxxxxxx</presetId>
                    <outputKeySuffix>-small.mp4</outputKeySuffix>
                </output>
                <output>
                    <presetId>xxxxxxxxxxx</presetId>
                    <outputKeySuffix>-medium.mp4</outputKeySuffix>
                </output>
                <output>
                    <presetId>xxxxxxxxxxxx</presetId>
                    <outputKeySuffix>-large.mp4</outputKeySuffix>
                </output>
            </outputs>
        </profile>
    </aws>

