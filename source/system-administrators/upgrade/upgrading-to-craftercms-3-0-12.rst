:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-0-12:

==============================================================================
Instructions for Upgrading to Crafter CMS 3.0.12 from a previous 3.0.x version
==============================================================================

After upgrading your Crafter CMS install, you will need to update the dependency-resolver configuration file in your existing site.

To update your existing site's dependency resolver configuration, open the file ``resolver-config.xml`` found in the following directory: ``{REPOSITORY_ROOT}/sites/SITENAME/config/studio/dependency/`` and overwrite the content of the file with the following:

.. code-block:: xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
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
