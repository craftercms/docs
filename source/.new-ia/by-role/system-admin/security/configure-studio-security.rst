:is-up-to-date: True

.. index:: Configuring Studio Security; Studio Security; Security

.. _newIa-configuring-studio-security:

===========================
Configuring Studio Security
===========================

Users are authenticated by Studio through the internal database by default.  CrafterCMS can be configured so that users are authenticated using an external authentication protocol such as Lightweight Directory Access Protocol (LDAP) or Security Assertion Markup Language (SAML).

Here's a list of security providers supported by CrafterCMS for accessing the repository:

- Studio SAML security
- headers (use when authenticating via headers)
- ldap (users are imported from LDAP into the database)
- internal database (users are stored in database)

To configure an external authentication method, please follow one of the guides below:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   configure-studio-saml.rst
   configure-ldap.rst
   configure-headers-based-auth.rst

When using an external authentication method, user accounts are automatically created in the internal database upon each user's first successful login, using the attributes from the responses received.  Users added to the internal database after the user's first successful login through external authentication are marked as **Externally Managed**.

CrafterCMS supports multiple security providers that appears like a single authentication module to users through authentication chaining.  See :ref:`configure-authentication-chain` to set up an authentication chain using a combination of the following authentication providers: LDAP, headers and internal database.