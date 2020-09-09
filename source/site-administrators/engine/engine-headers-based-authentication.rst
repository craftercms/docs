:is-up-to-date: True

.. index:: Engine Headers Based Authentication

.. _engine-headers-authentication:

===================================
Engine Headers Based Authentication
===================================

Crafter Engine is able to integrate with any authentication system that sends custom HTTP headers containing information that will be used to authenticate the user in Engine.  This section details how to setup Engine for headers based authentication.

-------------------------------------------------
Configure Engine for Headers Based Authentication
-------------------------------------------------

To enable Engine headers based authentication, open the Engine site configuration file ``site-config.xml``.

Set ``security.headers.standalone`` to ``true``

   .. code-block:: xml
      :caption: Engine Site Configuration  - Enable headers authentication
      :emphasize-lines: 4

      <security>
        ...
        <headers>
          <standalone>true</standalone>
        </headers>
      </security>

   |

Next, configure the URLs you require authentication by setting ``url`` to desired value and ``expression`` to ``isAuthenticated()`` like below:

   .. code-block:: xml
      :caption: Engine Site Configuration  - Enable headers authentication
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

From the above configuration, here are the attributes that Engine expects from the headers to be provided:

- MELLON_secure_key
- MELLON_username
- MELLON_email

The default value of ``MELLON_secure_key`` is ``my_secure_token``.  Remember to replace the default value of ``MELLON_secure_key`` by setting ``security.headers.token`` to secure your installation.  In the example below, the ``MELLON_secure_key`` is now set to ``CHANGE_MY_TOKEN_VALUE``

   .. code-block:: xml
      :caption: Engine Site Configuration  - Enable headers authentication
      :emphasize-lines: 4

      <security>
      ...
        <headers>
          <token>CHANGE_MY_TOKEN_VALUE</token>
        </headers>
      </security>

-------
Example
-------

Let's take a look at an example of setting up Engine headers authentication using a site created using the Website Editorial blueprint named ``mysite``.  We will also change the default value for the header attribute ``MELLON_secure_key``.

Open the Engine ``site-config.xml`` file in Studio, by navigating from the ``Sidebar`` to ``Site Config`` > ``Configuration``, and finally picking up the ``Engine Site Configuration`` option from the dropdown.

You can also access the ``site-config.xml`` using your favorite editor under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml``

Add the following, where we are enabling Engine headers authentication and requiring authentication for all urls in the site in addition to changing the default value for the header attribute ``MELLON_secure_key`` to ``my_updated_token``. :

   .. code-block:: xml
      :caption: Engine Site Configuration  - Enable headers authentication

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

Save your changes and remember to publish the file ``/config/engine/site-config.xml`` to see the Engine headers authentication in action in delivery.

Now, try viewing the Home page without the header attributes required, by entering in your browser ``localhost:9080?crafterSite=mysite``.  The Home page will not be displayed without the required header attributes.

.. image:: /_static/images/site-admin/engine-headers-delivery-not-sent.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view without the headers sent

|

This time, try viewing the Home page with the header attributes and you should see the Home page displayed

.. image:: /_static/images/site-admin/engine-headers-delivery-sent.jpg
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view with the headers sent

|

See :ref:`engine-site-configuration` for more information on how to access the ``site-config.xml`` file.