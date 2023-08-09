:is-up-to-date: True
:last-updated: 4.1.0
:orphan:

.. index:: Composable, Composable DXP, Composable CMS, Composable Digital Experience Platform, Composable Digital Experience

.. _composable:

==========
Composable
==========

CrafterCMS is a composable CMS and provides a modular and flexible approach to building and managing websites and digital experiences. Unlike traditional monolithic CMSs, which come with pre-built features and a fixed structure, CrafterCMS allows users to assemble and configure their own system by choosing and integrating individual components or services.

A component is often referred to as Packaged Business Capability or PBC for short. CrafterCMS refers to these components as Extensions which can be Blueprints or Plugins. These extensions are available in the public Crafter Marketplace (or private marketplace) and can be installed and configured by the Site Admin.

.. _extensions:

----------
Extensions
----------

CrafterCMS extensions extend the CMS and provide the users additional functionality. It allows developers
to create new experiences both for authors and end-users.

There are two main types of CrafterCMS Extensions:

^^^^^^^^^^
Blueprints
^^^^^^^^^^

Blueprints provide an initial set of styles, pages, behaviors, content types and more.
It can be used directly from CrafterCMS when creating a new project.

For more information on blueprints, see the :ref:`blueprints` article.

^^^^^^^
Plugins
^^^^^^^

Plugins allow users to either replace, extend or even create stand alone experiences to serve a particular
use case or set of use cases. It allows developers to create extensions to both authoring and delivery and
can be installed on projects directly from CrafterCMS.

Delivery plugins can provide features, functionalities and full experiences that can be used in
the delivery side of CrafterCMS projects (i.e. sites, mobile apps, etc). Examples of these are a
ready-to-use contact form, a chat bot or integrations with third-party analytics software.

On the other hand, authoring plugins open the door for developers to customize and extend Crafter
Studio. Through authoring extensions, Studio UI can be extended by including new widgets into specific
portions of the UI or by creating complete applications that run in their own.

For more information on plugins, see the :ref:`plugins` article.

-------------------
Crafter Marketplace
-------------------

Developers may submit their extensions to the :ref:`Crafter Marketplace <marketplace>`, which provides a
home for the Crafter community to contribute, find, and use extensions.

Extensions submitted to the Crafter Marketplace can be used directly from CrafterCMS.

When creating a project in CrafterCMS, a list of the available blueprints from the Crafter Marketplace is
displayed for the user to choose from like below:

.. image:: /_static/images/developer/plugins/marketplace-blueprints.webp
   :alt: Marketplace Blueprints
   :width: 60%
   :align: center

As mentioned above, plugins published in the Crafter Marketplace can be installed on projects in CrafterCMS
via the :ref:`Plugin Management <plugin-management>` tool:

.. image:: /_static/images/developer/plugins/marketplace-site-plugins.webp
   :alt: Marketplace Plugins
   :width: 60%
   :align: center