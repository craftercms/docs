:is-up-to-date: False
:since-version: 4.0.0


.. index:: CrafterCMS Security Processes, Security, Security Processes

==================
Security Processes
==================

In this section, we describe the security processes followed during the development, release, and support of CrafterCMS.


This section is limited in scope to the following:

    * CrafterCMS v3.0.0 onwards
    * Secure development processes limited to CrafterCMS’s codebase
    * Auditing 3rd party libraries and software
    * Auditing CrafterCMS
    * Auditing machine images
    * Auditing and securing Crafter Cloud (Crafter Software’s SaaS offering of CrafterCMS)
    * OWASP Top 10 Mitigation

-----------
Development
-----------

^^^^^^^^^
Code Flow
^^^^^^^^^
* No direct access to the main repository
* Code reviews

  * Automated

    * CI: Travis-CI
    * Code quality gate: Codacy
    * Security audit: Snyk

      * Critical and High issues will be addressed
      * Medium and below issues will be addressed if we deem it a viable attack vector

    * Penetration testing using OWASP ZAP during every release

      * Critical and High issues will be addressed
      * Medium and below issues will be addressed if we deem it a viable attack vector

  * Human

    * Code reviews by the module maintainer and/or architect
    * Final review by CrafterCMS project lead


-------
Release
-------

* Full audit and update based on Snyk reports
* Release commit GPG signing, 2FA to Sonatype (Maven)
* MD5 and SHA512 checksums on all artifacts
* All 3rd party software is downloaded from the original authority and checksums validated
* CrafterCMS is fully regression tested using automated testing
* Artifacts are hosted on AWS S3
* AWS AMI is scanned by AWS Inspector,  https://aws.amazon.com/inspector/

-------------
Crafter Cloud
-------------

* Crafter Cloud is based on the scanned AWS AMI
* Penetration testing using OWASP ZAP during every release

  * Critical and High issues will be addressed
  * Medium and below issues will be addressed if we deem it a viable attack vector

--------
OWASP 10
--------

How does CrafterCMS perform against the OWASP 2017 Top 10 security risks?

^^^^^^^^^^^^^^^^^
A1:2017-Injection
^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
CrafterCMS doesn’t use/allow direct access to the operating system, database, git repository or search index. All requests flow through APIs and have little regard to URL params.
    As a platform, CrafterCMS allows for applications to be developed atop it, and those applications or marketplace blueprints may allow such direct access and therefore, if care is not taken, may become vulnerable.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A2:2017-Broken Authentication
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users' identities temporarily or permanently.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* Applications developed on top of the CrafterCMS platform are responsible for the authentication and authorization of access. CrafterCMS honors the external authentication managed by the application and support mechanisms including

   * LDAP
   * AD/ADFS
   * SAML2
   * SiteMinder
   * Custom

* The Crafter Studio component of CrafterCMS has a chained authentication system with pluggable security providers. These providers are independently responsible for managing authentication and authorization and includes the mechanisms:

    * LDAP
    * AD/ADFS
    * SAML2
    * SiteMinder
    * Custom
    * CrafterCMS leverages Java web-container session management and ID generation.
    * Crafter Studio implements Cross-Site Request Forgery (CSRF) protection.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A3:2017-Sensitive Data Exposure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
CrafterCMS does not natively store any sensitive data. Users may store whatever data they choose in the system. CrafterCMS allows for and recommends that data be partitioned and secured according to the sensitivity of the data stored by the user.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A4:2017-XML External Entities (XXE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* CrafterCMS audits all XML reading, writing and manipulating 3rd party libraries as part of the release process. Those libraries are kept up-to-date per security advisories.
* CrafterCMS disables XML external entity and DTD processing in all XML parsers in the application, as per the OWASP Cheat Sheet 'XXE Prevention'.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A5:2017-Broken Access Control
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access to other users' accounts, view sensitive files, modify other users' data, change access rights, etc.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* CrafterCMS implements access controls at both the UI and API layers of the system.
* CrafterCMS enforces proper use of parameters for API calls.
* Log access control failures
* Authentication sessions along with related tokens and cookies are invalidated upon logout.
* CrafterCMS recommends that the applications developed on CrafterCMS must manage authentication mechanics per OWASP best practices.
* CrafterCMS doesn’t use nor require CORS.
* Crafter Studio denies all unauthenticated access by default.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A6:2017-Security Misconfiguration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must be patched/upgraded in a timely fashion.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* CrafterCMS recommends using OWASP best practices in the buildout and deployment of CrafterCMS into various environments.

    * These bests practices are adhered to in Crafter Cloud (the SaaS version of CrafterCMS)

        * A repeatable hardening process that makes it fast and easy to deploy another environment that is properly locked down. Development, QA, and production environments should all be configured identically, with different credentials used in each environment.
        * We keep a minimal platform without any unnecessary features, components, documentation, and samples.
        * We review and update the configurations appropriate to all security notes, updates and patches as part of the patch management process.
        * A segmented application architecture that provides effective, and secure separation between components.
        * Automated processes that perform security patches in all environments.

    * Many of these bests practices are prebaked into the Amazon AWS Marketplace AMIs sold by Crafter Software.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A7:2017-Cross-Site Scripting (XSS)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim's browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* As a platform, CrafterCMS allows for applications to be developed upon it. Those applications or marketplace blueprints, based on frameworks and coding practices used to create them, may be vulnerable. It is the responsibility of the applications built upon CrafterCMS to ensure they are not vulnerable to XSS.
* CrafterCMS provides developers with the tools required to configure and restrict Cross Origin Requests (CORS).
* Crafter Studio is audited for XSS attacks and does scrub all user input and API parameters.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A8:2017-Insecure Deserialization
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* CrafterCMS only serializes and deserializes data into JSON.
* CrafterCMS audits all JSON reading, writing and manipulating 3rd party libraries as part of the release process. Those libraries are kept up-to-date per security advisories.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A9:2017-Using Components with Known Vulnerabilities
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* Continuous scanning during development

    * CrafterCMS’s 3rd party dependencies are continuously scanned and reported on per code submission

* During the release process

    * CrafterCMS audits and updates code per a full security scan of the software
    * All 3rd party software is downloaded from the original authority and checksums validated
    * AWS Marketplace AMIs are scanned by AWS Inspector,  https://aws.amazon.com/inspector/

* Crafter Software recommends organizations perform their own security audits for all additional 3rd party dependencies for their application per OWASP best practices.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
A10:2017-Insufficient Logging & Monitoring
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
"""""""""""
What is it?
"""""""""""
Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.

""""""""""""""""""""""""""""""""""""""""""""
How does CrafterCMS help mitigate this risk?
""""""""""""""""""""""""""""""""""""""""""""
* CrafterCMS components log all activity to standard logging servers.
* CrafterCMS recommends:

    * Application developed on CrafterCMS log all critical events.
    * Logs are processed by monitors and alarms are triggered per OWASP best practices.

--------------------------------
Securing your CrafterCMS Install
--------------------------------

CrafterCMS installations are pre-configured with default values. To have a secure installation, remember to change the pre-configured default values. For more information, see :ref:`change-the-defaults`.
