.. index:: Asset Processing, Asset

.. _asset-processing:

================
Asset Processing
================

Asset processing allows you to define transformations for static assets (currently only images), through a series of
processor pipelines that are executed when the assets are uploaded to Studio. These pipelines can be configured by
going to ``Site Config > Configurations > Asset Processing``, and have the following structure:

.. code-block:: xml

    <pipeline>
      <inputPathPattern/>
      <keepOriginal/>
      <processors>
        <processor>
          <type/>
          <params/>
          <outputPathFormat/>
        </processor>
      </processors>
    </pipeline>

Where:

- ``inputPathPattern:`` regex that the assets need to match in order to be processed by the pipeline. Groups that are
  captured by this regex are available later to the ``outputPathFormat``.
- ``keepOriginal (optional):`` if the original asset (without changes) should be saved.
- ``type:`` the type of the processor. Right now 2 types are supported: ``ImageMagickTransformer`` and
  ``TinifyTransformer``:

    - ``ImageMagickTransformer``: runs ImageMagick from the command line, with ``params.options`` as the command line
      params [#]_.
    - ``TinifyTransformer``: uses the Java client of TinyPNG to compress JPEG/PNG images
      (see https://tinypng.com/developers/reference) [#]_.

- ``outputPathFormat (optional)``: the format of the output path. Variables that have a dollar sign ($) and an index
  are later replaced by groups that resulted during input path matching, to form the final output path. If not
  specified, then the same input path is used as the output path.

The following example specifies 2 different asset processing pipelines: the first one converts any image put
under ``/static-assets/images/upload/`` into another one that's compressed and suitable to be displayed in a desktop
browser, while the second one converts the same image for display on mobile devices:

.. code-block:: xml

  <assetProcessing>
      <pipelines>

          <!-- Web transformer pipeline -->
          <pipeline>
              <inputPathPattern>^/static-assets/images/upload/(.+)\.jpg$</inputPathPattern>
              <keepOriginal>false</keepOriginal>
              <processors>
                  <processor>
                      <type>ImageMagickTransformer</type>
                      <params>
                          <options>-level 0,100%,1.3 -gaussian-blur 0.05 -quality 20% -strip</options>
                      </params>
                      <outputPathFormat>/static-assets/images/compressed/web/$1-compressed.jpg</outputPathFormat>
                  </processor>
              </processors>
          </pipeline>

          <!-- Mobile transformer pipeline -->
          <pipeline>
              <inputPathPattern>^/static-assets/images/upload/(.+)\.jpg$</inputPathPattern>
              <keepOriginal>false</keepOriginal>
              <processors>
                  <processor>
                      <type>ImageMagickTransformer</type>
                      <params>
                          <options>-level 0,100%,1.3 -gaussian-blur 0.05 -quality 20% -strip -resize 226x164</options>
                      </params>
                      <outputPathFormat>/static-assets/images/compressed/mobile/$1-compressed.png</outputPathFormat>
                  </processor>
                  <processor>
                      <type>TinifyTransformer</type>
                  </processor>
              </processors>
          </pipeline>

      </pipelines>
  </assetProcessing>

Using the previous example, if an image called ``logo.jpg`` would be put under ``/static-assets/images/upload``,
Studio would generate 2 files: the web version, under ``/static-assets/images/compressed/web/logo-compressed.jpg``,
and the mobile version, under ``/static-assets/images/compressed/mobile/logo-compressed.png``. The original file
would be discarded.

.. rubric:: Footnotes

.. [#] You need to have image ImageMagick installed in the machine, with the ``convert`` command in the path.
.. [#] The Tinify API key must be specified in the ``studio-config-overrides.yaml``
       (``studio.configuration.asset.processing.tinify.apiKey``).
