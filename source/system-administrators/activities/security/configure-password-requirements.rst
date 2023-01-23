:is-up-to-date: True
:last-updated: 4.0.3

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Configure Studio Password Requirements

.. _crafter-studio-configure-password-requirements:

======================================
Configure Studio Password Requirements
======================================

Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organization’s password security policy.

Crafter Studio uses `zxcvbn <https://github.com/dropbox/zxcvbn>`__ for password strength management.

.. version_tag::
   :label: Since
   :version: 4.0.3

|

The password strength configured here are displayed to the user when resetting a password or creating a user.

.. image:: /_static/images/system-admin/password-requirements.webp
    :alt: System Administrator - Password Requirements Display
    :align: center
    :width: 65%

|

To configure the password strength, click on |mainMenu| **Main Menu** then click on ``Global Config``.
Scroll to the section ``Security`` and change the value of ``studio.security.passwordRequirements.minimumComplexity``
to desired minimum password complexity required:

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Password requirements minimum complexity
   # This is based on https://github.com/dropbox/zxcvbn
   # The minimum complexity corresponds to the password score
   # You can try this out here https://lowe.github.io/tryzxcvbn/
   #  score      # Integer from 0-4 (useful for implementing a strength bar)
   #  0 # too guessable: risky password. (guesses < 10^3)
   #  1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
   #  2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
   #  3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
   #  4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
   # The default value is 3
   studio.security.passwordRequirements.minimumComplexity: 3

|

Crafter Studio's default minimum password complexity required is set to 3 (which translate to a score
of 80 in the UI), and until the user setting/changing the password has met the minimum required,
the ``Submit`` button will not be enabled.  Also, once the minimum password strength score has been
reached, the score will be displayed in green.

.. image:: /_static/images/system-admin/password-reqts-80-score.webp
    :alt: System Administrator - Password Requirements Display Score 80
    :align: center
    :width: 55%

|

Below, are some of the messages displayed as a user is inputting a new password:

.. image:: /_static/images/system-admin/password-reqts-20-score.webp
    :alt: System Administrator - Password Requirements Display Score 20
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-40-score.webp
    :alt: System Administrator - Password Requirements Display Score 40
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-60-score.webp
    :alt: System Administrator - Password Requirements Display Score 60
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-100-score.webp
    :alt: System Administrator - Password Requirements Display Score 100
    :align: center
    :width: 35%

|
