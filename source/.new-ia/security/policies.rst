:is-up-to-date: True

.. index:: CrafterCMS Security Policies, Security, Security Policies


=================
Security Policies
=================

In this section, we describe the security processes followed for the submission of security issues related
to CrafterCMS projects.

---------------------------------
Important Security Considerations
---------------------------------

CrafterCMS is a platform for developing content rich applications, which includes developing code and deploying
it to servers. CrafterCMS provides for a server-side sandbox (Groovy Sandbox -- based on Jenkins'
Groovy Sandbox: https://github.com/jenkinsci/groovy-sandbox) to limit what these server-side applications can do
on a server. A user with access to Crafter Studio (with a sufficiently priveleged role) or with access to the git
repository of a *site* can develop server-side code and deploy it. The sandbox will limit and restirct what can be
executed on a server and is configurable to allow more access as needed. Nonetheless, Enterprises should consider
having a series of environments, typically: ``Dev`` -> ``QA`` -> ``Prod`` where code gets developed and validated
in the lower environments before pushing up. This is fully supported by CrafterCMS and the underlying git
repository makes it easy.

---------------
Security Issues
---------------

^^^^^^^^^^^^^^^^^^^^^^^^^^
Submitting Security Issues
^^^^^^^^^^^^^^^^^^^^^^^^^^

We request that customers, implementation partners, bounty-hunters, and users report security issues privately by emailing security@craftersoftware.com or via the support portal (for customers and partners).

^^^^^^^^^^^^^^^^^^^^^^^
Security Issue Workflow
^^^^^^^^^^^^^^^^^^^^^^^

Upon submission of a security issue

* You'll receive an acknowledgement indicating receipt of submission
* You'll receive a timeframe for the triage of the issue to determine if there is a vulnerability
* You'll be invited to an advisory issue tracker to track the progress through the embargo period
* CrafterCMS has a dedicated CNA and an appropriate CVE will be issued there

.. figure:: /_static/images/system-admin/crafter-cms-security-issue-flow.png
    :alt: CrafterCMS Security Issue Flow
    :align: center

