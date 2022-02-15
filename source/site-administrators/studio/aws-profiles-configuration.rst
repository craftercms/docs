:is-up-to-date: True

.. index:: AWS Profiles Configuration

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
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/aws/aws.xml*
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

      id: a unique id for this profile, this will be referenced in the
          control defined in the content type
      accessKey: AWS access key
      secretKey: AWS secret key
      region: AWS region for the service

       Every service can require additional properties.
    -->
    <aws>
      <s3>
        <!--

        AWS S3 Profile

        Additional properties:

        <bucketName/>
        <pathStyleAccess/>

        bucketName: name of the bucket where files will be uploaded
        pathStyleAccess: indicates if path style access should be used for all requests (defaults to false)

        -->
        <profile>
          <id>s3-default</id>
          <credentials>
            <accessKey>xxxxxxxxx</accessKey>
            <secretKey>xxxxxxxxx</secretKey>
          </credentials>
          <region>us-west-1</region>
          <bucketName>sample-input-bucket</bucketName>
          <pathStyleAccess>true</pathStyleAccess>
        </profile>
      </s3>

      <elasticTranscoder>
        <!--

        AWS Elastic Transcoder Profile

        Additional properties:

        <pipelineId/>
          <outputs>
            <output>
              <presetId/>
              <outputKeySuffix/>
            </output>

            ...

          </outputs>

        pipelineId: id of the pipeline that will be used for transcoding jobs
        outputs: list of outputs for the transcoding jobs
        presetId: id of the preset for a particular output, can use AWS default presets for common formats
        outputKeySuffix: suffix added to a particular output

        -->
        <profile>
          <id>elastic-transcoder-default</id>
          <credentials>
            <accessKey>xxxxxxxxx</accessKey>
            <secretKey>xxxxxxxxx</secretKey>
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
      </elasticTranscoder>

      <mediaConvert>
        <!--

        AWS MediaConvert Profile

        Additional properties:

        <endpoint/>
        <role/>
        <queue/>
        <inputPath/>
        <template/>

        endpoint: URL specific for the account, can be found in the AWS MediaConvert dashboard
        role: ARN of the role used to create transcoding jobs
        queue: ARN of the queue used to create transcoding jobs
        inputPath: Name of the S3 bucket and optional path to upload files
        template: Name of the Job Template used to create transcoding jobs

        -->
        <profile>
          <id>mediaconvert-default</id>
          <credentials>
            <accessKey>xxxxxxxxx</accessKey>
            <secretKey>xxxxxxxxx</secretKey>
          </credentials>
          <region>us-west-1</region>
          <endpoint>https://XXXXXXXX.mediaconvert.us-east-1.amazonaws.com</endpoint>
          <role>arn:aws:iam::XXXXXXXXXXXX:role/...</role>
          <queue>arn:aws:mediaconvert:us-east-1:XXXXXXXXXXXX:queues/...</queue>
          <inputPath>example-bucket/folder/videos</inputPath>
          <template>Example Template</template>
        </profile>
      </mediaConvert>
    </aws>

|

For more information on Amazon S3, please see: https://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html

For more information on the AWS elastic transcoder, please see: https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/introduction.html

For more information on the AWS mediaconvert, please see: https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
