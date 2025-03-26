:is-up-to-date: True
:last-updated: 4.1.1

.. _crafter-engine:

==============
Crafter Engine
==============
.. figure:: /_static/images/architecture/crafter-engine.webp
    :alt: Crafter Engine
    :width: 75%
    :align: center

Engine provides content delivery services to power any type of Web or mobile application. It consumes content published from Studio via the Deployer and provides developers with APIs to consume the content (content, search, GraphQL, etc.).

.. include:: /includes/content-retrieval-apis.rst

.. include:: /includes/scripts-templates-security.rst


.. TODO
   ``HOST:PORT/?crafterSite=site1`` will render the home page for ``site1``

   ``HOST:PORT/?crafterSite=site2`` will render the home page for ``site2``

   |

   Aside from the ``crafterSite`` parameter, a header can be sent to specify the site name, called
   ``X-Crafter-Site`` for changing the current site. This is very useful when Crafter Engine is used
   together with CDNs that can send headers, like AWS CloudFront

   .. WARNING::
       Using this configuration you need to be sure that the first request specifies the site name by
       including the ``crafterSite`` parameter (or the ``X-Crafter-Site`` header) so that the site value
       is set in the cookie for the next requests.

   |

   .. note::
         Crafter Engine identifies which project to render by the mechanisms (in this order of precedence):
            - Headers (``X-Crafter-Site={site}``)
            - QSA (Query String Parameters: ``crafterSite={site}``)
            - Cookie (``crafterSite={site}``)

         Additionally, if the cookie is not aligned with other parameters, the cookie will be reset to what precedes it.
         The above is only true when Crafter Engine is not in Preview mode.

|hr|

-------------
Configuration
-------------
Learn about configuring Crafter Engine in the :ref:`Crafter Engine Configuration Guide <engine-config>`.

.. toctree::
   :hidden:

   configuration

|hr|

--------
Security
--------
Learn about Crafter Engine's security features in the :ref:`Crafter Engine Security Guide <engine-security>`.

.. toctree::
   :hidden:

   security

|hr|

.. _crafter-engine-api:

--------
REST API
--------
To view the Crafter Engine REST APIs:

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../../_static/api/engine.html
   :title: Engine API

.. raw:: html

    or <a href="../../../_static/api/engine.html" target="_blank">in a new tab</a>

|

|hr|

-----------
Source Code
-----------
Crafter Engine's source code is managed in GitHub: https://github.com/craftercms/engine
