:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Configure Studio Password Requirements

.. _crafter-studio-configure-password-requirements:

======================================
Configure Studio Password Requirements
======================================

Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organizations password security policy.

Crafter Studio by default requires passwords to meet the following validation regular expression:

.. code-block:: bash

   ^(?=(?<hasNumbers>.*[0-9]))(?=(?<hasLowercase>.*[a-z]))(?=(?<hasUppercase>.*[A-Z]))(?=(?<hasSpecialChars>.*[~|!`,;\/@#$%^&+=]))(?<minLength>.{8,})$

|

* Must contain at least one number
* Must contain at least one lowercase letter
* Must contain at least one uppercase letter
* Must contain at least one special character (~|!`,;\/@#$%^&+=)
* Length must be at least 8 characters

The password requirements configured here are displayed to the user when resetting a password or creating a user.

.. image:: /_static/images/system-admin/password-requirements.png
    :alt: System Administrator - Password Requirements Display
    :align: center
    :width: 65%

To configure the password validation regular expression, click on |mainMenu| **Main Menu** then click on ``Global Config``.  Scroll to the section ``Password requirements validation regular expression``

.. code-block:: yaml
   :linenos:
   :caption: *crafter_install_dir/data/repos/global/configuration/studio-config-override.yaml*

   # Password requirements validation regular expression
   # The supported capture group keys are:
   #   hasNumbers
   #   hasLowercase
   #   hasUppercase
   #   hasSpecialChars
   #   noSpaces
   #   minLength
   #   maxLength
   #   minMaxLength
   # studio.security.passwordRequirements.validationRegex: ^(?=(?<hasNumbers>.*[0-9]))(?=(?<hasLowercase>.*[a-z]))(?=(?<hasUppercase>.*[A-Z]))(?=(?<hasSpecialChars>.*[~|!`,;\/@#$%^&+=]))(?<minLength>.{8,})$

|

Capture group keys are used with the regular expression as listed above, where:

* ``hasNumbers``: which numbers are allowed.
* ``hasLowerCase``: which lowercase letters are allowed
* ``hasUpperCase``: which uppercase letters are allowed
* ``hasSpecialChars``: which special characters are allowed
* ``noSpaces``: no space allowed in the password
* ``minLength``: specify the minimum password length
* ``maxLength``: specify the maximum password length
* ``minMaxLength``: specify the minimum and maximum password length
