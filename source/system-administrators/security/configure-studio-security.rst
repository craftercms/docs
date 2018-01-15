
===========================
Configuring Studio Security
===========================

Crafter CMS can be configured so that users are authenticated using an external authentication protocol such as Lightweight Directory Access Protocol (LDAP) or Security Assertion Markup Language (SAML).

Users are authenticated by Studio through the internal database by default.  When an external authentication method is configured in Studio, when a user logs in, Studio will try to authenticate the user using the selected authentication method (LDAP or SAML) first.   If login fails, Studio will then try to authenticate the user using the internal database.  The internal database is the fallback for authentication when an external authentication method is configured.

When using an external authentication method, user accounts are automatically created in the internal database upon each user's first successful login, using the attributes from the responses received.  Users added to the internal database after the user's first successful login through external authentication are marked as **Externally Managed**.

The default security provider for Crafter CMS can be overridden through the ``studio-config-override.yaml`` file under ``shared/classes/crafter/studio/extension``, using ``studio.security.type:``.  Here are the possible security providers for accessing the repository in Crafter CMS:

    - headers (use when authenticating via headers)
    - ldap (users are imported from LDAP into the database)
    - db (users are stored in database)

To configure an external authentication method, please follow one of the guides below:

.. toctree::
    :maxdepth: 1
    :titlesonly:

    configure-ldap.rst
    configure-headers-based-auth.rst

