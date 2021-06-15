:is-up-to-date: True

.. _debugging_maven_issues:

======================
Debugging Maven Issues
======================

In this section, we present a Maven build failure that a user may encounter and how to fix the error.

Starting with Maven version 3.8.1, `external HTTP repositories are blocked by default <https://maven.apache.org/docs/3.8.1/release-notes.html>`__.

If you encounter a Maven build failure in your application like the following:

   .. code-block:: text
      :caption: *Example Maven build failure: HTTP repository blocked Exception*

      [ERROR] Failed to execute goal on project test: Could not resolve dependencies for project xxx: Failed to collect
      dependencies at my.test:dependency:version -> my.test.transitive:transitive:version: Failed to read artifact descriptor
      for my.test.transitive:transitive:jar:version: Could not transfer artifact my.test.transitive:transitive:pom:version
      from/to maven-default-http-blocker (http://0.0.0.0/): Blocked mirror for repositories:
      [blocked-repository-id (http://blocked.repository.org, default, releases+snapshots)]

   |

To disable blocking of external HTTP repositories, in the Maven settings (located in ``${maven.home}/conf/settings.xml`` or ``${user.home}/.m2/settings.xml``), the following entry must be removed/commented out:

   .. code-block:: xml
      :caption: *${maven.home}/conf/settings.xml* or *${user.home}/.m2/settings.xml)*

      <mirror>
        <id>maven-default-http-blocker</id>
        <mirrorOf>external:http:*</mirrorOf>
        <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
        <url>http://0.0.0.0/</url>
        <blocked>true</blocked>
      </mirror>

   |