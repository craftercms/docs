.. index:: Projects; Crafter Social

.. _crafter-social:

==============
Crafter Social
==============

.. figure:: /_static/images/crafter-cloud-v8-Crafter-Social.png
    :alt: Crafter Social
    :width: 60 %
    :align: center

Crafter Social is a multi-tenant, platform independent user-generated content management system for handling all actions related to user-generated content (UGC), including the creation, updating and moderation of the content.  It is built on MongoDB and uses :ref:`crafter-profile` for profile, tenant, roles management, and authentication.  Crafter Social is highly scalable in terms of both the users & data, and secures the generated content using Crafter Profile and the Crafter Profile Security library.  As a headless, RESTful application, Crafter Social allows for loosely coupled integration with the vertical applications using it.  Some examples of these vertical applications include:

    - a products site, for example a books site with reviews & ratings,
    - a ratings site and
    - a blogging application with threaded comments.

-----------
Source Code
-----------

Crafter Social's source code is managed in github: https://github.com/craftercms/social

--------
Java Doc
--------

Crafter Social's Java Doc is here: http://javadoc.io/doc/org.craftercms/crafter-social

--------
ReST API
--------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   api/index


-------------
Configuration
-------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Clam Virus Scanner Requirements
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Clamav must be installed (along with the clamd deamon)
* A TCPhost and a TCPport must be provided in the clamd.conf file
* The clamd deamon must be running with the provided configuration

Note: With the information given so far a localhost 3310 configuration is necessary and enough to run the clam virus scanner tests

* The crafter-social virus-scanner properties file must match the host and the port configured in the clamd.conf file
* A ClamVirusScannerImpl should be provided to the VirusScannerService bean in a virus-scanner-context.xml external file

Note: There is a nullVirusScannerImpl being given to the VirusScannerService as the default implementation (which means that the virus scanning is disable by default).

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Clam Virus Scanner local Mac Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1) ClamXav should be already installed on your mac

2) Uncomment the following lines in /usr/local/clamXav/etc/clamd.conf

TCPSocket 3310

TCPAddr 127.0.0.1

3) To start the clamd daemon

cd /usr/local/clamXav/sbin

./clamd

.. todo:: write configuration, write ReST API doc
