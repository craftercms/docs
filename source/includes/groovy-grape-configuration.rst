Grape can be customized via the Ivy settings that it uses. To configure the Ivy settings that Grape uses, simply edit
the ``CRAFTER_HOME/bin/grapeConfig.xml`` configuration file. Below is an example configuration that blocks a package
from downloading by redirecting the package download to a non-existing domain:

.. code-block:: xml
    :linenos:
    :caption: *CRAFTER_HOME/bin/grapeConfig.xml*
    :emphasize-lines: 14-17

    <?xml version="1.0"?>
    <ivysettings>
      <settings defaultResolver="downloadGrapes"/>
      <resolvers>
        <chain name="downloadGrapes" returnFirst="true">
          <ibiblio name="ibiblio" m2compatible="true"/>
          <!-- Non-exists resolver for blocked packages -->
          <url name="blocked">
            <ivy pattern="https://blockedpackages.local/repo/[organisation]/[module]/[revision]/ivy.xml" />
            <artifact pattern="https://blockedpackages.local/repo/[organisation]/[module]/[revision]/[artifact]-[revision].[ext]" />
          </url>
        </chain>
      </resolvers>
      <!-- Module-specific resolver configuration to block (redirect to non-exists domain) -->
      <modules>
        <module organisation="org.to.block" name="name.to.block" resolver="blocked"/>
      </modules>
    </ivysettings>

For more information on customizing settings, see the `Ivy documentation <https://ant.apache.org/ivy/history/latest-milestone/index.html>`__