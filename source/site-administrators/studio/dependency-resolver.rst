:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Dependency Resolver Configuration, Dependency Resolver, Dependency

.. _dependency-resolver-config:

=================================
Dependency Resolver Configuration
=================================

Crafter Studio extracts and tracks dependencies between content items to assist authors with publishing, workflow and core content operations like copy and delete.  This file configures what file paths Crafter considers a dependency and how they should be extracted.

To modify the Dependency Resolver configuration, click on |projectTools| from the bottom of the Sidebar, then click on **Configuration** and select **Dependency Resolver** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-dependency-config.jpg
    :alt: Configurations - Open Dependency Resolver Configuration
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/dependency/resolver-config.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- resolver-config.xml

      This file configures what file paths Crafter considers a dependency and how they should be extracted

    -->
    <dependency-resolver>
      <item-types>
        <item-type>
          <!-- name of type -->
          <name>page</name>
          <!-- how to identify items of this type -->
          <includes>
            <!-- path pattern regexes (multiple) -->
            <path-pattern>/site/website/.*\.xml</path-pattern>
          </includes>
          <!-- how to find dependencies in these items -->
          <dependency-types>
            <dependency-type>
              <name>page</name>
              <includes>
                <pattern>
                  <find-regex>/site/website/([^&lt;]+)\.xml</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>component</name>
              <includes>
                <pattern>
                  <find-regex>/site/components/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/system/page-components/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/component-bindings/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/indexes/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/resources/([^&lt;]+)\.xml</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>asset</name>
              <includes>
                <!-- path patterns to look for (multiple) -->
                <pattern>
                  <find-regex>/static-assets/([^&lt;"'\)]+)</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>rendering-template</name>
              <includes>
                <pattern>
                  <find-regex>/templates/([^&lt;"]+)\.ftl</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>script</name>
              <includes>
                <pattern>
                  <find-regex>/scripts/([^&lt;"]+)\.groovy</find-regex>
                </pattern>
                <pattern>
                  <find-regex>&lt;content-type&gt;/(.*)/(.*)&lt;/content-type&gt;</find-regex>
                  <transforms>
                    <transform>
                      <match>&lt;content-type&gt;/(.*)/(.*)&lt;/content-type&gt;</match>
                      <replace>/scripts/$1s/$2.groovy</replace>
                    </transform>
                  </transforms>
                </pattern>
              </includes>
            </dependency-type>
          </dependency-types>
        </item-type>
        <item-type>
          <!-- name of type -->
          <name>component</name>
          <!-- how to identify items of this type -->
          <includes>
            <!-- path pattern regexes (multiple) -->
            <path-pattern>/site/components/([^&lt;]+)\.xml</path-pattern>
            <path-pattern>/site/system/page-components/([^&lt;]+)\.xml</path-pattern>
            <path-pattern>/site/component-bindings/([^&lt;]+)\.xml</path-pattern>
            <path-pattern>/site/indexes/([^&lt;]+)\.xml</path-pattern>
            <path-pattern>/site/resources/([^&lt;]+)\.xml</path-pattern>
          </includes>
          <!-- how to find dependencies in these items -->
          <dependency-types>
            <dependency-type>
              <name>page</name>
              <includes>
                <pattern>
                  <find-regex>/site/website/([^&lt;]+)\.xml</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>component</name>
              <includes>
                <pattern>
                  <find-regex>/site/components/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/system/page-components/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/component-bindings/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/indexes/([^&lt;]+)\.xml</find-regex>
                </pattern>
                <pattern>
                  <find-regex>/site/resources/([^&lt;]+)\.xml</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>asset</name>
              <includes>
                <!-- path patterns to look for (multiple) -->
                <pattern>
                  <find-regex>/static-assets/([^&lt;"'\)]+)</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>rendering-template</name>
              <includes>
                <pattern>
                  <find-regex>/templates/([^&lt;"]+)\.ftl</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>script</name>
              <includes>
                <pattern>
                  <find-regex>/scripts/([^&lt;"]+)\.groovy</find-regex>
                </pattern>
                <pattern>
                  <find-regex>&lt;content-type&gt;/(.*)/(.*)&lt;/content-type&gt;</find-regex>
                  <transforms>
                    <transform>
                      <match>&lt;content-type&gt;/(.*)/(.*)&lt;/content-type&gt;</match>
                      <replace>/scripts/$1s/$2.groovy</replace>
                    </transform>
                  </transforms>
                </pattern>
              </includes>
            </dependency-type>
          </dependency-types>
        </item-type>
        <item-type>
          <!-- name of type -->
          <name>asset</name>
          <!-- how to identify items of this type -->
          <includes>
            <!-- path pattern regexes (multiple) -->
            <path-pattern>/static-assets/([^&lt;"'\)]+)</path-pattern>
          </includes>
          <!-- how to find dependencies in these items -->
          <dependency-types>
            <dependency-type>
              <name>asset</name>
              <includes>
                <!-- path patterns to look for (multiple) -->
                <pattern>
                  <find-regex>/static-assets/([^&lt;"'\)]+)</find-regex>
                </pattern>
              </includes>
            </dependency-type>
          </dependency-types>
        </item-type>
        <item-type>
          <!-- name of type -->
          <name>rendering-template</name>
          <!-- how to identify items of this type -->
          <includes>
            <!-- path pattern regexes (multiple) -->
            <path-pattern>/templates/([^&lt;"]+)\.ftl</path-pattern>
          </includes>
          <!-- how to find dependencies in these items -->
          <dependency-types>
            <dependency-type>
              <name>asset</name>
              <includes>
                <!-- path patterns to look for (multiple) -->
                <pattern>
                  <find-regex>/static-assets/([^&lt;"'\)]+)</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            <dependency-type>
              <name>rendering-template</name>
              <includes>
                <pattern>
                  <find-regex>/templates/([^&lt;"]+)\.ftl</find-regex>
                </pattern>
              </includes>
            </dependency-type>
            </dependency-types>
          </item-type>
          <item-type>
            <!-- name of type -->
            <name>script</name>
            <!-- how to identify items of this type -->
            <includes>
              <!-- path pattern regexes (multiple) -->
              <path-pattern>/scripts/([^&lt;"]+)\.groovy</path-pattern>
            </includes>
            <!-- how to find dependencies in these items -->
            <dependency-types>
              <dependency-type>
                <name>script</name>
                <includes>
                  <!-- path patterns to look for (multiple) -->
                  <pattern>
                    <find-regex>import scripts.(.*)</find-regex>
                    <transforms>
                      <transform>
                        <match>(.*)</match>
                        <replace>$1</replace>
                      </transform>
                    </transforms>
                  </pattern>
                </includes>
              </dependency-type>
            </dependency-types>
          </item-type>
        </item-types>
    </dependency-resolver>

