:is-up-to-date: True

.. index:: Engine Headers Based Authentication

.. _engine-headers-authentication:

===================================
Engine Headers Based Authentication
===================================

Crafter Engine is able to integrate with any authentication system that sends custom HTTP headers containing
information that will be used to authenticate the user in Engine.  This section details how to setup Engine for
 headers based authentication.

To enable Engine headers based authentication:

- Set ``security.headers.standalone`` to ``true``
- Set the URLs requiring authentication

Additionally, optional role mappings are available that allows mapping names from the external authentication to
simple role names to use in the page or url restrictions.  Optional attribute mappings are also available which
allows exposing attributes from the external authentication.

-------------------------------------------------
Configure Engine for Headers Based Authentication
-------------------------------------------------

To enable Engine headers based authentication, open the Engine site configuration file ``site-config.xml``.

Set ``security.headers.standalone`` to ``true``

   .. code-block:: xml
      :caption: *Engine Site Configuration  - Enable headers authentication*
      :emphasize-lines: 4

      <security>
        ...
        <headers>
          <standalone>true</standalone>
        </headers>
      </security>

   |

Next, configure the URLs you require authentication by setting ``url`` to desired value and ``expression`` to
``isAuthenticated()`` like below:

   .. code-block:: xml
      :caption: *Engine Site Configuration  - setup url restrictions*
      :emphasize-lines: 3-6

      <security>
        <urlRestrictions>
          <restriction>
            <url>/**</url>
            <expression>isAuthenticated()</expression>
          </restriction>
        </urlRestrictions>
        ...
      </security>

   |

See :ref:`engine-site-security-guide-restrict-urls` for more information on expressions that cam be used.

From the above configuration, here are the headers that Engine expects to be provided:

- MELLON_secure_key (required)
- MELLON_username (required)
- MELLON_email (required)
- MELLON_groups
- MELLON_*

It is also possible to change the prefix and names for the headers:

.. code-block:: xml
   :caption: *Engine Site Configuration  - change default header names*
   :linenos:

   <security>
     <headers>
       ...
       <names>
        <!-- Prefix that will be used for all headers, defaults to 'MELLON_' -->
        <prefix>MY_APP_</prefix>

        <!-- Name for the header containing the username, defaults to 'username' -->
        <username>user</username>

        <!-- Name for the header containing the email, defaults to 'email' -->
        <email>address</email>

        <!-- Name for the header containing the groups, defaults to 'groups' -->
        <groups>roles</groups>

        <!-- Name for the header containing the token, defaults to 'secure_key' -->
        <token>verification</token>

       </names>
       ...
     </headers>
   </security>

The default value of the token is ``my_secure_token``.  Remember to replace the default value by setting
``security.headers.token`` to secure your installation.  In the example below, the token is now set to
``CHANGE_MY_TOKEN_VALUE``

   .. code-block:: xml
      :caption: *Engine Site Configuration  - Change the default value of the token*
      :emphasize-lines: 4

      <security>
      ...
        <headers>
          <token>CHANGE_MY_TOKEN_VALUE</token>
        </headers>
      </security>

^^^^^^^^^^^^^^^^^^^^^^
Optional Role Mappings
^^^^^^^^^^^^^^^^^^^^^^

To add optional role mappings, add the following inside the ``<headers>`` tag:

   .. code-block:: xml
      :caption: *Engine Site Configuration  - setup optional role mappings in header*
      :emphasize-lines: 5-8

      <security>
        <headers>
          ...
          <groups>
            <group>
              <name>APP_GROUP_NAME</name>    <!-- The name of the group in the header -->
              <role>ROLE_name_of_role</role> <!-- The name of the role in the authentication object -->
            </group>
          </groups>
          ...
        </headers>
      </security>


where:

* **name**: The name of the group in the header.  The ``APP_`` prefix shown above is just an example and could be
 anything.
* **role**: The name of the role in the authentication object.  Remember to add **ROLE_** to the name of the role in
 the authentication object.  So, if mapping the role ``user``, it will be ``<role>ROLE_user</role>``

^^^^^^^^^^^^^^^^^^^
Optional Attributes
^^^^^^^^^^^^^^^^^^^

To add optional attributes, add the following inside the ``<headers>`` tag:

   .. code-block:: xml
      :caption: *Engine Site Configuration  - setup optional attributes in header*
      :linenos:
      :emphasize-lines: 5-10

      <security>
        <headers>
          ...
          <!-- Optional attribute mappings, allows to expose attributes from the external auth -->
          <attributes>
            <attribute>
              <name>APP_ATTRIBUTE_NAME</name> <!-- The name of the attribute in the header -->
              <field>name</field>             <!-- The name of the attribute in the authentication object -->
            </attribute>
          </attributes>
          ...
        </headers>
      </security>


where:

* **name**: The name of the attribute in the header.  The ``APP_`` prefix shown above is just an example and could be
anything.
* **field**: The name of the attribute in the authentication object.

To get the value of the attribute passed in the header, use the following ``authToken.principal.attributes.FIELD_NAME``,
 where ``FIELD_NAME`` is the name of the attribute in the authentication object

-------
Example
-------

Let's take a look at an example of setting up Engine headers authentication using a site created using the Website
Editorial blueprint named ``mysite``.  We will also change the default value for the token header. We'll then take a
 look at an example of setting up Engine headers authentication with optional role mappings and attribute.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Simple Example Setting Up Engine Headers Authentication
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open the Engine ``site-config.xml`` file in Studio, by navigating from the ``Sidebar`` to
``Site Config`` > ``Configuration``, and finally picking up the ``Engine Site Configuration`` option from the dropdown.

You can also access the ``site-config.xml`` using your favorite editor under
``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml``

Add the following, where we are enabling Engine headers authentication and requiring authentication for all urls in the
site in addition to changing the default value for the token to ``my_updated_token``. :

   .. code-block:: xml
      :caption: *Engine Site Configuration  - Example enabling headers authentication*

      <?xml version="1.0" encoding="UTF-8"?>
      <site>
        <version>2</version>
        <security>
          <urlRestrictions>
            <restriction>
              <url>/**</url>
              <expression>isAuthenticated()</expression>
            </restriction>
          </urlRestrictions>
          <headers>
            <standalone>true</standalone>
            <token>my_updated_token</token>
          </headers>
        </security>
      </site>

Save your changes and remember to publish the file ``/config/engine/site-config.xml`` to see the Engine headers
authentication in action in delivery.

Now, try viewing the Home page without the header attributes required, by entering in your browser
``localhost:9080?crafterSite=mysite``.  The Home page will not be displayed without the required header attributes.

.. image:: /_static/images/site-admin/engine-headers-delivery-not-sent.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view without the headers sent

|

This time, try viewing the Home page with the following header attributes and values:

- MELLON_secure_key : my_updated_token
- MELLON_username : jsmith
- MELLON_email : jsmith@example.com

You should now see the Home page displayed

.. image:: /_static/images/site-admin/engine-headers-delivery-sent.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view with the headers sent

|

See :ref:`engine-site-configuration` for more information on how to access the ``site-config.xml`` file.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Example Setting Up Engine Headers Authentication with Optional Role Mappings and Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We'll now take a look at another example where we setup optional role mappings and attributes.

We'll setup the ``admin`` and the ``user`` roles and add the attribute ``APP_FULL_NAME``.  We'll try to restrict
access to ``/articles/**`` for users with the ``user`` or ``admin`` role, then we'll try to display the
``APP_FULL_NAME`` value passed from the headers in our site.

Open the Engine ``site-config.xml`` file in Studio, by navigating from the ``Sidebar`` to
``Site Config`` > ``Configuration``, and finally picking up the ``Engine Site Configuration`` option from the dropdown.

Add the following to setup the ``admin`` and ``user`` role, and the attribute ``APP_FULL_NAME``:

   .. code-block:: xml
      :caption: *Engine Site Configuration  - Example Engine headers authentication with optional role mappings and attribute*
      :linenos:
      :emphasize-lines: 5, 13-22, 24-29

      <security>
        <urlRestrictions>
          <restriction>
            <url>/articles/**</url>
            <expression>hasAnyRole('user'\,'admin')</expression>
          </restriction>
        </urlRestrictions>
        <headers>
          <standalone>true</standalone>
          <token>my_updated_token</token>
          <!-- Optional role mappings, allows to map names from the external auth to simple role names to use in the page or url restrictions -->
          <!-- The APP_ prefix is just an example, the values can be anything -->
          <groups>
            <group>
              <name>APP_ADMIN</name> <!-- The name of the group in the header -->
              <role>admin</role>     <!-- The name of the role in the authentication object -->
            </group>
            <group>
              <name>APP_USER</name> <!-- The name of the group in the header -->
              <role>user</role>     <!-- The name of the role in the authentication object -->
            </group>
          </groups>
          <!-- Optional attribute mappings, allows to expose attributes from the external auth -->
          <attributes>
            <attribute>
              <name>APP_FULL_NAME</name> <!-- The name of the attribute in the header -->
              <field>name</field>        <!-- The name of the attribute in the authentication object -->
            </attribute>
          </attributes>
        </headers>
      </security>

   |

For the ``expression`` in the URL restriction, remember to escape the comma as shown above
``<expression>hasAnyRole('user'\,'admin')</expression>``

When we send the following headers:

- MELLON_secure_key : my_updated_token
- MELLON_username : jsmith
- MELLON_email : jsmith@example.com

Notice that when we try to view an article, since the user does not have either ``admin`` or ``user`` role, the page
is not available and will display the following message: ``The user doesn't have enough rights to access the page.``
In our example below, we tried previewing the article ``Top Books For Young Women`` with the headers listed above and
 is shown the message below:

.. image:: /_static/images/site-admin/engine-headers-no-role.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Article Page view without the proper role for the user

|


Let's now try sending the headers again, but this time with the role ``APP_USER`` for our user

- MELLON_secure_key : my_updated_token
- MELLON_username : jsmith
- MELLON_email : jsmith@example.com
- MELLON_groups: APP_USER

Notice that this time, we are able to preview the article correctly

.. image:: /_static/images/site-admin/engine-headers-w-role.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Article Page view without the proper role for the user

|


The website editorial blueprint displays the value of the attribute with field ``name`` out of the box in the page
header. You can take a look at the ``header.ftl`` file on how the attribute is displayed.  Open the ``Sidebar`` in
Studio, then navigate to ``/templates/web/components/`` then right click on ``header.ftl`` and select ``Edit``.
The ``authToken.principal.attributes.name`` contains the value passed for ``APP_FULL_NAME`` in the header

   .. code-block:: text
      :emphasize-lines: 5
      :caption: */templates/web/components/header.ftl*
      :linenos:

      <#import "/templates/system/common/cstudio-support.ftl" as studio />
      <header id="header" <@studio.componentAttr component=contentModel ice=true iceGroup="header"/>>
        <a href="/" class="logo"><img border="0" alt="${contentModel.logo_text_t!""}" src="${contentModel.logo_s!""}">
          <#if (authToken.principal)??>
            <#assign name = authToken.principal.attributes.name!"stranger" />
          <#else>
            <#assign name = "stranger" />
          </#if>

          Howdy, ${name}

         </a>
         ...
      </header>

|

Let's now try sending the headers again, but this time with the attribute ``APP_FULL_NAME``

- MELLON_secure_key : my_updated_token
- MELLON_username : jsmith
- MELLON_email : jsmith@example.com
- MELLON_groups: APP_USER
- MELLON_APP_FULL_NAME: John Smith

Note that when sending the attribute ``APP_FULL_NAME`` in the header, the header prefix must be added as shown above.

When we preview a page, the value in the custom header is displayed:

.. image:: /_static/images/site-admin/engine-headers-APP-USER-NAME-displayed.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Article Page view with the value of APP_USER_NAME displayed
