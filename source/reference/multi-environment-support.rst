:is-up-to-date: True
:last-updated: 4.1.0

.. index:: Multi-Environment, Multi-Environment Support

.. _multi-environment-support:

=========================
Multi-environment Support
=========================
.. contents::
    :local:
    :depth: 1

----------------------------------
What is Multi-environment Support?
----------------------------------
Most CrafterCMS deployments have multiple environments, e.g. Prod, QA, Dev, local, etc. CrafterCMS supports multiple environments by allowing users to setup multiple environments with different configurations for each environment.

Additionally, CrafterCMS delivery-tier (Crafter Engine) supports the deployment targets: Preview, Staging, and Live. These deployment targets are _within_ an environment and can have different configurations for the delivery tier. The use-case here is that Preview and Staging can point to non-production integration services and Live can point to the production integration services.

--------------------------------
Studio Multi-environment Support
--------------------------------
Crafter Studio supports multiple environments by allowing users to setup multiple environments (Dev, QA, Prod) with different configurations for each environment. See the article :ref:`studio-multi-environment-support` for more information.

--------------------------------
Engine Multi-environment Support
--------------------------------
Crafter Engine supports multiple environments by allowing users to setup multiple environments (Dev, QA, Prod) with different configurations for each environment. See the article :ref:`engine-multi-environment-support` for more information.