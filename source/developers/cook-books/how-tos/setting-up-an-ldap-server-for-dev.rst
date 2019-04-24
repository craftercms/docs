:is-up-to-date: True


===============================================================================
Setting up an LDAP server for development/testing using Apache Directory Studio
===============================================================================

In this section, we will describe how to setup an LDAP server using Apache Directory Studio to test the LDAP authentication in Crafter Studio.

First, we'll configure LDAP authentication in Crafter Studio, then proceed to install and setup the LDAP server using Apache Directory Studio, then finally login to Crafter Studio with the users setup in the LDAP server.

-----------------------------------------------
Configure LDAP authentication in Crafter Studio
-----------------------------------------------

We will first configure LDAP authentication in Crafter Studio.  In your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and add the following lines to ``studio-config-override.yaml``.  (The server url, bindDN and password are all default values of the Apache Directory Studio)  Stop and restart Crafter Studio after making your changes.

.. code-block:: yaml
   :linenos:

   #####################################################
   ##         LDAP                                    ##
   #####################################################
   # Defines security provider for accessing repository. Possible values
   # db (users are stored in database)
   # ldap (users are imported from LDAP into the database)
   studio.security.type: ldap
   # LDAP Server url
   studio.security.ldap.serverUrl: ldap://localhost:10389
   # LDAP bind DN (user)
   studio.security.ldap.bindDN: uid=admin,ou=system
   # LDAP bind password
   studio.security.ldap.bindPassword: secret
   # LDAP base context (directory root)
   studio.security.ldap.baseContext: dc=example,dc=com
   # LDAP username attribute
   studio.security.ldap.userAttribute.username: uid
   # LDAP first name attribute
   studio.security.ldap.userAttribute.firstName: cn
   # LDAP last name attribute
   studio.security.ldap.userAttribute.lastName: sn
   # LDAP email attribute
   studio.security.ldap.userAttribute.email: mail
   # LDAP site ID attribute
   studio.security.ldap.userAttribute.siteId: o
   # LDAP groups attribute
   studio.security.ldap.userAttribute.groupName: ou

For more information on configuring LDAP authentication in Crafter Studio, please follow the guide here: :ref:`crafter-studio-configure-ldap`

Please note that the LDAP attributes are configurable and in our example above, we are using ``o`` for the attribute for siteId instead of ``crafterSite`` and ``ou`` for the attribute for groupName instead of ``crafterGroup`` as listed in :ref:`crafter-studio-configure-ldap`

-------------------------------
Install Apache Directory Studio
-------------------------------
Download and install Apache Directory Studio from here: http://directory.apache.org/studio/


---------------------
Setup the LDAP server
---------------------
We will first create our LDAP server.  Launch your Apache Directory Studio application.  Notice the tabs on the lower left hand corner.  Click on the **LDAP Servers** tab.  To create the server, click on the **New Server** icon, the first icon to the right of the **LDAP Servers** tab.

.. image:: /_static/images/developer/apache-ds-screen.png
    :alt: Apache Directory Studio Screen
    :width: 95 %
    :align: center

A dialog to create the server will appear, go the the **Select the server type:** section of the dialog.  For our example, select **ApacheDS 2.0.0** then click on the **Finish** button.

.. image:: /_static/images/developer/create-ldap-server.png
    :alt: Apache Directory Studio - Create LDAP server
    :width: 65 %
    :align: center

Next we'll start our LDAP server.  Click on the LDAP server we just created, **ApacheDS 2.0.0**, which will be displaying the status **Stopped**.  To start the server, click on the green button right next to the tabs:

.. image:: /_static/images/developer/ldap-server-start.png
    :alt: Apache Directory Studio - Start LDAP server
    :width: 65 %
    :align: center

We'll now need to connect the LDAP browser to our newly created LDAP server.  To connect to the server, in the **LDAP Server** tab, right click on the server **ApacheDS 2.0.0**, then select **Create a Connection**

.. image:: /_static/images/developer/ldap-server-options.png
    :alt: Apache Directory Studio - Create a Connection to the LDAP server
    :width: 65 %
    :align: center

Click on the **Connections** tab, you should now see **ApacheDS 2.0.0** listed.

.. image:: /_static/images/developer/ldap-server-connections.png
    :alt: Apache Directory Studio - Create a Connection to the LDAP server
    :width: 65 %
    :align: center

-----------------------------------
Load some data into the LDAP Server
-----------------------------------

The server we setup earlier does not have any data yet.  We will now load some data by using the LDIF editor.  LDIF or LDAP Data Interchange Format, is a text format for representing LDAP data and commands.  To open an LDIF editor, click on the **New** icon at the top left, or click **File** -> **New**, a dialog will appear with a list, select **LDIF File** under **LDAP Browser**

.. image:: /_static/images/developer/ldap-server-select-ldif.png
    :alt: Apache Directory Studio - Open LDIF file editor
    :width: 95 %
    :align: center

An empty file in the middle of your ApacheDS will appear.  This is the LDIF editor.  We will now enter some data into it to create users that Crafter Studio can authenticate through the LDAP Server we just setup.  We will add three users, each belonging to a different group for the site **myawesomesite** in Crafter Studio.  Please make sure that the attributes listed in the Crafter Studio LDAP configuration is configured in the LDAP server for each user.  Copy and paste the data listed below into the LDIF editor.  Make sure that there is an empty line after the last entry.

.. code-block:: guess
    :linenos:

    dn: dc=example,dc=com
    objectClass: domain
    objectClass: top
    dc: example

    dn: ou=Users,dc=example,dc=com
    objectClass: organizationalUnit
    objectClass: top
    ou: Users

    dn: ou=Groups,dc=example,dc=com
    objectClass: organizationalUnit
    objectClass: top
    ou: Groups

    dn: cn=Joe Bloggs,ou=Users,dc=example,dc=com
    objectClass: inetOrgPerson
    objectClass: organizationalPerson
    objectClass: person
    objectClass: top
    cn: Joe Bloggs
    sn: Bloggs
    ou: Author
    description: 19650324000000Z
    employeeNumber: 9
    givenName: Joe
    mail: joe@example.com
    o: myawesomesite
    telephoneNumber: 169-637-3314
    telephoneNumber: 907-547-9114
    uid: jbloggs
    userPassword:: abc

    dn: cn=Jane Doe,ou=Users,dc=example,dc=com
    objectClass: inetOrgPerson
    objectClass: organizationalPerson
    objectClass: person
    objectClass: top
    cn: Jane Doe
    sn: Doe
    ou: Admin
    description: 19650324000000Z
    employeeNumber: 12
    givenName: Jane
    mail: jane@example.com
    o: myawesomesite
    telephoneNumber: 169-637-3314
    telephoneNumber: 907-547-9114
    uid: jdoe
    userPassword:: abc

    dn: cn=John Wick,ou=Users,dc=example,dc=com
    objectClass: inetOrgPerson
    objectClass: organizationalPerson
    objectClass: person
    objectClass: top
    cn: John Wick
    sn: Wick
    ou: Reviewer
    description: 19650324000000Z
    employeeNumber: 8
    givenName: John
    mail: john@example.com
    o: myawesomesite
    telephoneNumber: 169-637-3314
    telephoneNumber: 907-547-9114
    uid: jwick
    userPassword:: abc

Please note that a user can belong to multiple groups and sites.  To add another siteId or groupName value in the ldif file, just add another line specifying the attribute and the value. Notice the multiple values for the attributes **ou** (groupName) and **o** (siteId)

.. code-block:: guess
    :linenos:

    dn: cn=John Wick,ou=Users,dc=example,dc=com
    objectClass: inetOrgPerson
    objectClass: organizationalPerson
    objectClass: person
    objectClass: top
    cn: John Wick
    sn: Wick
    ou: Publisher
    ou: Editor
    description: 19650324000000Z
    employeeNumber: 8
    givenName: John
    mail: john@example.com
    o: myawesomesite
    o: helloworld
    telephoneNumber: 169-637-3314
    telephoneNumber: 907-547-9114
    uid: jwick
    userPassword:: abc


To add the data we entered in the LDIF file into the LDAP Server, first, click on the **Browse** button in the LDIF editor and select the connection we setup (ApacheDS 2.0.0), then click on the green (Execute LDIF) button next to the **Browse** button to get our data into the server.

.. image:: /_static/images/developer/ldap-server-run-ldif.png
    :alt: Apache Directory Studio - Open LDIF file editor
    :width: 95 %
    :align: center

After executing the LDIF file, you should see the results in the **Modification Logs** tab at the bottom of the LDIF Editor and should look something like the image below:

.. image:: /_static/images/developer/ldap-server-mod-logs.png
    :alt: Apache Directory Studio - LDIF Execute Results in Modification Logs
    :width: 65 %
    :align: center

We should also be able to see the three users we just added in the LDAP browser

.. image:: /_static/images/developer/ldap-server-user-added.png
    :alt: Apache Directory Studio - LDAP Browser Users Added
    :width: 55 %
    :align: center

---------------------------------------------
Changing a user's password in the LDAP server
---------------------------------------------

Notice that we set the password to the same characters for all the users.  Let's change the password for all the users.  To do this, from the LDAP Browser tab, navigate to DIT -> Root DSE -> dc=example,dc=com -> ou=Users, then click on the name os a user. We'll click on user **Jane Doe**.  A new tab will open in the middle of your ApacheDS with all the attributes for user **Jane Doe**.  Double click on **userPassword** to change the user's password,

.. image:: /_static/images/developer/ldap-server-user-view.png
    :alt: Apache Directory Studio - LDAP Browser View a User
    :width: 95 %
    :align: center

The **Password Editor** dialog will now be in focus.  Click on **New Password** at the middle top and fill in the **Enter New Password** and **Confirm New Password** fields in the form, then click on the **OK** button

.. image:: /_static/images/developer/ldap-server-new-passwd.png
    :alt: Apache Directory Studio - LDAP Browser Password Editor New Password
    :width: 85 %
    :align: center

To test the new password you just entered, double click on **userPassword** attribute of the user, then click on **Current Password** in the **Password Editor** dialog.  Enter the new password in the **Verify Password** field, then click on the **Verify** button.

.. image:: /_static/images/developer/ldap-server-curr-passwd.png
    :alt: Apache Directory Studio - LDAP Browser Password Editor Current Password
    :width: 85 %
    :align: center

When successful, a dialog will appear that the password was verified successfully

.. image:: /_static/images/developer/ldap-server-passwd-verified.png
    :alt: Apache Directory Studio - LDAP Browser Password Verified
    :width: 65 %
    :align: center

Repeat the steps listed above for the rest of the users we added in to the LDAP server to change their password.  After changing all the user's passwords, we can now try to login to Crafter Studio using the credentials of the users we just added.

--------------------------------------------
Logging in to Crafter Studio as an LDAP user
--------------------------------------------

In your browser, enter ``localhost:8080\studio``.  Fill in the the username and password using one of the users we setup in the LDAP server.  In the image below, we will log in the user **jbloggs**.  If authentication is successful, the user should be taken to the **Sites** screen of Crafter Studio.

.. image:: /_static/images/developer/ldap-server-authenticate-user.png
    :alt: Apache Directory Studio - LDAP Server authenticate user login from Crafter Studio
    :width: 35 %
    :align: center
