:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Main Menu Encryption Tool

.. _main-menu-encryption-tool:

=========================
Main Menu Encryption Tool
=========================

Crafter Studio provides an encryption tool for encrypting configuration properties like access keys or password, to keep these sensitive data, available only to developers and administrators.  The encryption algorithm used is PBE (Password Based Encryption) with AES, in which a password and a salt are specified to generate the key used on encryption/decryption.

---------------
Encryption Tool
---------------

Crafter Studio uses a default key and salt for the encryption tool.  To set the key and salt to desired values, in your Authoring installation directory, open ``/bin/crafter-setenv.sh`` and modify the following values

.. code-block:: bash
   :caption: *bin/crafter-setenv.sh*

   # -------------------- Encryption variables --------------------
   export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encrytption_key"}
   export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encrytption_salt"}

|

To access the Studio encryption tool, from the top right of your browser, click on the ``Main Menu`` icon |mainMenu|, then click on ``Encryption Tool`` from the ``Main Menu`` sidebar.

.. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool.png
    :alt: System Administrator - Main Menu Encryption Tool
    :align: center
    :width: 100%

To encrypt a password, access key, etc., simply enter the password, access key, etc. in the ``Raw Text`` field, then click on ``Encrypt Text``.  This will generate the encrypted password, access key, etc. that you then simply need to paste in the configuration file.

Crafter Studio also provides the encryption tool to encrypt passwords, access keys or other sensitive information in a configuration file managed through Crafter Studio in |siteConfig| -> ``Configuration``.  See :ref:`encrypting-text-in-a-configuration-file` for more information.

-------
Example
-------

Let's take a look at an example of using the encryption tool to encrypt a password.  From the |mainMenu|, click on ``Global Config`` and scroll down to the ``SMTP Configuration (Email)`` section. We're going to encrypt the value for ``studio.mail.password:``

.. code-block:: yaml
   :caption: *crafter_install_dir/data/repos/global/configuration/studio-config-override.yaml*
   :emphasize-lines: 13

   ##################################################
   ##        SMTP Configuration (Email)            ##
   ##################################################
   # Default value for from header when sending emails.
   # studio.mail.from.default: admin@example.com
   # SMTP server name to send emails.
   # studio.mail.host: ${env:MAIL_HOST}
   # SMTP port number to send emails.
   # studio.mail.port: ${env:MAIL_PORT}
   # SMTP username for authenticated access when sending emails.
   # studio.mail.username:
   # SMTP password for authenticated access when sending emails.
   # studio.mail.password:
   # Turn on/off (value true/false) SMTP authenaticated access protocol.
   # studio.mail.smtp.auth: false
   # Enable/disable (value true/false) SMTP TLS protocol when sending emails.
   # studio.mail.smtp.starttls.enable: false
   # Enable/disable (value true/false) SMTP EHLO protocol when sending emails.
   # studio.mail.smtp.ehlo: true
   # Enable/disable (value true/false) debug mode for email service. Enabling debug mode allows tracking/debugging communication between email service and SMTP server.
   # studio.mail.debug: false

|

Let's begin:

#. Encrypt the password

   * To encrypt the ``studio.mail.password``, click on |mainMenu|, then click on ``Encryption Tool``
   * Enter the password in the ``Raw Text`` field

     .. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool-raw-text.png
        :alt: System Administrator - Main Menu Encryption Tool Enter Raw Text
        :align: center
        :width: 100%

   * Click on the ``Encrypt Text`` button.  The encrypted text will be displayed below the ``Raw Text`` field and copied onto the clipboard

     .. image:: /_static/images/system-admin/main-menu/main-menu-encryption-text-encrypted.png
        :alt: System Administrator - Main Menu Encryption Tool Text Encrypted
        :align: center
        :width: 100%

#. Use the encrypted password

   * Click on |mainMenu|, then click on ``Global Config`` and scroll down to the ``SMTP Configuration (Email)`` section.
   * Paste the encrypted password

     .. code-block:: yaml
        :caption: *crafter_install_dir/data/repos/global/configuration/studio-config-override.yaml*

        # SMTP password for authenticated access when sending emails.
        studio.mail.password: ${enc:q2gqrm8R6Z0Xg77J6wzHH4i4qqMSlrcFcSkshS+RZ9s=}

     |

#. Your password is now encrypted and will be decrypted by Crafter Studio as needed.



