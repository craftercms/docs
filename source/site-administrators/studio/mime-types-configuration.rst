:is-up-to-date: True

.. index:: Mime Types Configuration

.. _mime-types-configuration:

########################
Mime Types Configuration
########################

The mime types configuration file configures the mime types icons overrides for a site/blueprint.  It also allows you to override the default icons for content types .

To modify the mime types configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Mime Types** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-mime-types-config.png
    :alt: Configurations - Open Mime Types Configuration
    :width: 65 %
    :align: center

******
Sample
******

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/mime-type.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- mime-type.xml
        This file configures the mime types icons overrides for this site/blueprint.

        For every configuration you'd like to make editable, you need:
            <mime-type>
                <type />
                <icon>
                    <class />
                    <styles>
                        ...
                    </styles>
                </icon>
            </mime-type>

        The elements are:
        - type: The mime type or content type. This is the target mime type/content type that will be affected by the new icon/styles defined on the configuration
        - class: The Font Awesome class for the icon that will be showed for the mime type/content type.
        - styles: CSS styles for the icon selected, you can customize the icon with css like styles (e.g <color>#ffffff</color>)
    -->

    <mime-types>
        <mime-type>
            <type>application/zip</type>
            <icon>
                <class>fa-user fa-spin</class>
                <styles>
                    <color>#ff0000</color>
                    <font-size>16px</font-size>
                </styles>
            </icon>
        </mime-type>

        <!-- Change icon for component content type contact-widget -->
        <mime-type>
            <type>/component/contact-widget</type>
            <icon>
                <class>fa-id-card</class>
                <styles>
                    <color>#ff0000</color>
                    <font-size>16px</font-size>
                </styles>
            </icon>
        </mime-type>
    </mime-types>