.. highlight:: xml

=========================
Engine Site Configuration
=========================

------------------------
Configuration Parameters
------------------------

Each site can specify configuration parameters at Config > site.xml (when seen from the site's dashboard). This parameters can be
overwritten in a physical location in the delivery server, under
apache-tomcat/shared/classes/crafter/engine/extension/sites/{SITENAME}/site.xml. The file looks like the following:
::

    <?xml version="1.0" encoding="UTF-8"?>
    <site>
        <!-- Filter properties -->
        <filters>
            <filter>
                <script>/scripts/filters/testFilter1.groovy</script>
                <mapping>
                    <include>/**</include>
                </mapping>
            </filter>
            <filter>
                <script>/scripts/filters/testFilter2.groovy</script>
                <mapping>
                    <include>/**</include>
                </mapping>
            </filter>
            <filter>
                <script>/scripts/filters/testFilter3.groovy</script>
                <mapping>
                    <include>/**</include>
                    <exclude>/static-assets/**</exclude>
                </mapping>
            </filter>
        </filters>

        <!-- Locale properties -->
        <defaultLocale>en</defaultLocale>

        <!-- Content targeting properties -->
        <targeting>
            <enabled>true</enabled>
            <rootFolders>/site/website</rootFolders>
            <excludePatterns>/site/website/index\.xml</excludePatterns>
            <availableTargetIds>en,ja,ja_JP,ja_JP_JP</availableTargetIds>
            <fallbackTargetId>en</fallbackTargetId>
            <mergeFolders>true</mergeFolders>
        </targeting>

        <!-- Profile properties -->
        <profile>
            <api>
                <accessTokenId>cd287b58-ab9c-457f-a4f0-39ef49f04c69</accessTokenId>
            </api>
        </profile>

        <!-- Security properties -->
        <security>
            <login>
                <formUrl>/signin</formUrl>
                <defaultSuccessUrl>/home</defaultSuccessUrl>
                <alwaysUseDefaultSuccessUrl>true</alwaysUseDefaultSuccessUrl>
                <failureUrl>/signin?error=loginFailure</failureUrl>
            </login>
            <logout>
                <successUrl>/home</successUrl>
            </logout>
            <accessDenied>
                <errorPageUrl>/signin?error=accessDenied</errorPageUrl>
            </accessDenied>
            <urlRestrictions>
                <restriction>
                    <url>/*</url>
                    <expression>hasRole('USER')</expression>
                </restriction>
            </urlRestrictions>
        </security>

        <!-- Social properties -->
        <socialConnections>
            <facebookConnectionFactory>
                <appId>000000000000000</appId>
                <appSecret>c852cb30cda311e488300800200c9a66</appSecret>
            </facebookConnectionFactory>
        </socialConnections>

        <!-- Job properties -->
        <jobs>
            <jobFolder>
                <path>/scripts/jobs/morejobs</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </jobFolder>
            <job>
                <path>/scripts/jobs/testJob.groovy</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </job>
        </jobs>
    </site>

Apache Commons Configuration (https://commons.apache.org/proper/commons-configuration/) is used to read the configuration file.
It's a schema-less XML, so any parameters can be added to this file, and groovy scripts can retrieve the XMLConfiguration object
using the global variable siteConfig. Nevertheless, most of the configuration parameters are used by Engine itself:

*   **filters:** Used to define the filter mappings. Each ``<filter>`` element must contain a <script> element that specifies the complete
    path to the filter script, and a ``<mapping>`` element. In the ``<mapping>`` element, the ``<include>`` element contains the Ant
    patterns (separated by comma) that request URLs should match for the filter to be executed, while the ``<exclude>`` element contains
    the patterns that requests shouldn't match.
*   **defaultLocale:** The default locale for the site. Used with content targeting through localization.
*   **targeting.enabled**: If content targeting should be enabled. Defaults to false.
*   **targeting.rootFolders:** The root folders that should be handled for content targeting.
*   **targeting.excludePatterns:** Regex patterns that are used to exclude certain paths from content targeting.
*   **targeting.availableTargetIds:** The valid target IDs for content targeting (see :doc:`/developers/advanced/content-targeting-guide`).
*   **targeting.fallbackTargetId:** The target ID that should be used as last resort when resolving targeted content.
    (see :doc:`/developers/advanced/content-targeting-guide`).
*   **targeting.mergeFolders:** If the content of folders that have to the same "family" of target IDs should be merged.
    (see :doc:`/developers/advanced/content-targeting-guide`).
*   **profile.api.accessToken:** The access token to use for the Profile REST calls. This parameter should be always specified on
    multi-tenant configurations.
*   **security.login.formUrl:** The URL of the login form page. The default is /login.
*   **security.login.defaultSuccessUrl:** The URL to redirect to if the login was successful and the user couldn't be redirected to the
    previous page. The default is /.
*   **security.login.alwaysUseDefaultSuccessUrl:** If after successful login always redirect to the default success URL. The default is
    false.
*   **security.login.failureUrl:** The URL to redirect to if the login fails. The default is /login?login_error=true.
*   **security.logout.successUrl:** The URL to redirect after a successful logout. The default is /.
*   **security.accessDenied.errorPageUrl:** The URL of the page to show when access has been denied to a user to a certain resource. The
    default is /access-denied.
*   **security.urlRestrictions:** Contains any number of restriction elements. Each restriction is formed by a URL pattern (``<url>``)
    and a Spring EL expression (``<expression>``) executed against the current profile. If a request matches the URL, and the expression
    evaluates to false, access is denied. For more information, check
    `UrlAccessRestrictionCheckingProcessor.java <http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/security/processors/impl/UrlAccessRestrictionCheckingProcessor.html>`_
    and `AccessRestrictionExpressionRoot.java <http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/security/utils/spring/el/AccessRestrictionExpressionRoot.html>`_
*   **socialConnections.facebookConnectionFactory.appId:** The Facebook app ID required for establishing connections with Facebook.
*   **socialConnections.facebookConnectionFactory.appSecret:** The Facebook app ID required for establishing connections with Facebook.
*   **jobs.jobFolder:** Specifies a folder which will be looked up for scripts to be scheduled using a certain cron expression. The folder
    path should be specified with ``<path>``, and should be absolute to the site root. The cron expressions is specified in
    ``<cronExpression>``.
*   **jobs.job:** Specifies a single script job to be scheduled. The job path should be specified in ``<path>``, and the cron expression
    in ``<cronExpression>``.
