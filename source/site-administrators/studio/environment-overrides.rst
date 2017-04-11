=====================
Environment Overrides
=====================

------
Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/environment-overrides/ENVIRONMENT/environment-config.xml

    <environment-config>
	    <preview-server-url>http://127.0.0.1:8080</preview-server-url>
	    <authoring-server-url>http://127.0.0.1:8080/studio</authoring-server-url>
	    <form-server-url>http://127.0.0.1:8080/form-server</form-server-url>
	    <live-server-url>http://SITENAME</live-server-url>
        <publishing-channels>
            <channel-group>
                <label>Production</label>
                <channels>
                    <channel>sample</channel>
                </channels>
                <live-environment>true</live-environment>
            </channel-group>
            <!--
            <channel-group>
                <label>Test</label>
                <channels>
                    <channel>sample</channel>
                </channels>
                <live-environment>false</live-environment>
            </channel-group>
            -->
        </publishing-channels>
	    <cookie-domain>127.0.0.1</cookie-domain>
	    <open-site-dropdown>false</open-site-dropdown>
    </environment-config>


-----------
Description
-----------

    * ``/environment-config/preview-server-url``
        * Preview url

    * ``/environment-config/authoring-server-url``
        * Authoring url

    * ``/environment-config/form-server-url``
        * Form server url (deprecated)

    * ``/environment-config/live-server-url``
        * Live server url

    * ``/environment-config/publishing-channels``
        * Defines publishing channels

    * ``/environment-config/publishing-channels/channel-group``
        * Defines one publishing channel

    * ``/environment-config/publishing-channels/channel-group/label``
        * Publishing channel name

    * ``/environment-config/publishing-channels/channel-group/channels``
        * Defines deployment endpoints belonging to this publishing channel

    * ``/environment-config/publishing-channels/channel-group/channels/channel``
        * Deployment endpoint name

    * ``/environment-config/publishing-channels/channel-group/live-environment``
        * True if this channel is live environment

    * ``/environment-config/cookie-domain``
        * Environment cookie domain

    * ``/environment-config/open-site-dropdown``
        * True if site dropdown is opened by default


