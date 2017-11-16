.. _randomize-admin-password:

========================================================
Randomize "admin" Password for Crafter CMS Fresh Install
========================================================

Crafter CMS gives you the option to randomize the **admin** password on a fresh install.  To randomize the **admin** password, before starting Crafter CMS for the very first time, in your Authoring installation, go to  the following folder: ``bin/apache-tomcat/shared/classes/crafter/studio/extension/`` and add the following to the **studio-config-override.yaml** file:

.. code-block:: yaml
       :caption: *bin/apache-tpomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
       :linenos:

       ##################################################
       ##                   Security                   ##
       ##################################################
       # Enable random admin password generation
       studio.db.initializer.randomAdminPassword.enabled: false
       # Random admin password length
       studio.db.initializer.randomAdminPassword.length: 16
       # Random admin password allowed chars
       studio.db.initializer.randomAdminPassword.chars: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_=+-/

To enable the random admin password generation, just set ``studio.db.initializer.randomAdminPassword.enabled`` to ``true`` and specify your desired password length and allowed characters for the password.  Save the file after making your changes.

After saving the ``studio-config-override.yaml`` file, start Crafter CMS.  You'll then need to look at the authoring tomcat log, and search for the following string to get the random password generated for user **admin**: `*** Admin Account Password:`

Here's a sample password generated for the admin as listed in the tomcat log:

    ``INFO: *** Admin Account Password: "WXOIK$O$yGixio2h" ***``

You can now login as the user **admin** using the randomly generated password listed in the tomcat log.
