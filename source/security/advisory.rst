:is-up-to-date: True
:last-updated: 4.1.1

.. index:: CrafterCMS Security Advisories, Advisories

===================
Security Advisories
===================
-------------
CV-2025011501
-------------
======================= ======================================================================================
**Date**                2025.01.15
======================= ======================================================================================
**Affected Versions**   **4.1** < 4.1.6, **4.0** < 4.0.8
**Vulnerability Type**  CWE-402: Transmission of Private Resources into a New Sphere ('Resource Leak')
**Impact**              CAPEC-127 Directory Indexing
                        CAPEC-131 Resource Leak Exposure
**Risk**                Medium
**Description**
**CVE**                 https://www.cve.org/cverecord?id=CVE-2025-0502
**Credit**              Discovered by Carlos Ortiz, https://github.com/cortiz
======================= ======================================================================================

-------------
CV-2023080301
-------------
======================= ======================================================================================
**Date**                2023.08.03
======================= ======================================================================================
**Affected Versions**   **4.0** <= 4.0.2, **3.1** =< 3.1.27
**Vulnerability Type**  CWE-79 Improper Neutralization of Input During Web Page Generation
                        ('Cross-site Scripting')
**Risk**                High
**Description**         Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
                        vulnerability in CrafterCMS Engine on Windows, MacOS, Linux, x86, ARM, 64 bit allows
                        Reflected XSS.
**CVE**                 https://www.cve.org/cverecord?id=CVE-2023-4136
**Credit**              Discovered by Egidio Romano <egidio.romano@mindedsecurity.com>, working with
                        `IMQ Minded Security <https://mindedsecurity.com/>`_
======================= ======================================================================================

-------------
CV-2023021701
-------------
======================= ======================================================================================
**Date**                2023.02.17
======================= ======================================================================================
**Affected Versions**   **4.0** <= 4.0.1, **3.1** =< 3.1.26
**Vulnerability Type**  CWE-89 Improper Neutralization of Special Elements used in an SQL Command
                        ('SQL Injection')
**Risk**                Medium
**Description**         Authenticated administrators can perform a SQL Injection attack against the authoring
                        database that holds Studio users, groups, and item workflow states.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2023-26020
**Credit**              Gil Correia, gil.correia@devoteam.com
======================= ======================================================================================

-------------
CV-2022091302
-------------
======================= ======================================================================================
**Date**                2022.09.13
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.23
**Vulnerability Type**  CWE-913 Improper Control of Dynamically-Managed Code Resources
**Risk**                Medium
**Description**         Improper Control of Dynamically-Managed Code Resources vulnerability in Crafter \
                        Studio of Crafter CMS allows authenticated developers to execute OS commands via \
                        Groovy Sandbox Bypass.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2022-40635
**Credit**              Matei "Mal" Badanoiu, https://github.com/mbadanoiu
======================= ======================================================================================

-------------
CV-2022091301
-------------
======================= ======================================================================================
**Date**                2022.09.13
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.23
**Vulnerability Type**  CWE-913 Improper Control of Dynamically-Managed Code Resources
**Risk**                Medium
**Description**         Improper Control of Dynamically-Managed Code Resources vulnerability in Crafter \
                        Studio of Crafter CMS allows authenticated developers to execute OS commands via \
                        FreeMarker SSTI.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2022-40634
**Credit**              Matei "Mal" Badanoiu, https://github.com/mbadanoiu
======================= ======================================================================================

-------------
CV-2022051603
-------------
======================= ======================================================================================
**Date**                2022.05.16
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.18
**Vulnerability Type**  CWE-913 Improper Control of Dynamically-Managed Code Resources
**Risk**                High
**Description**         Improper Control of Dynamically-Managed Code Resources vulnerability in Crafter \
                        Studio of Crafter CMS allows authenticated developers to execute OS commands via \
                        FreeMarker static methods.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23267
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2022051602
-------------
======================= ======================================================================================
**Date**                2022.05.16
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.18
**Vulnerability Type**  CWE-117 Improper Output Neutralization for Logs
**Risk**                Medium
**Description**         An anonymous user can craft a URL with text that ends up in the log viewer as is.\
                        The text can then include textual messages to mislead the administrator.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23266
**Credit**              Faizan Wani, https://github.com/faizanw8
======================= ======================================================================================

-------------
CV-2022051601
-------------
======================= ======================================================================================
**Date**                2022.05.16
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.18
**Vulnerability Type**  CWE-269 Improper Privilege Management
**Risk**                Low
**Description**         A logged-in and authenticated user with a Reviewer Role may lock a content item.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23265
**Credit**              Faizan Wani, https://github.com/faizanw8
======================= ======================================================================================

-------------
CV-2021120101
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.12
**Vulnerability Type**  CWE-913: Improper Control of Dynamically-Managed Code Resources
**Risk**		Medium
**Description**         Spring SPEL Expression Language Injection
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23258
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2021120102
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.12
**Vulnerability Type**  CWE-913: Improper Control of Dynamically-Managed Code Resources
**Risk**		Medium
**Description**         Groovy Sandbox Bypass
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23259
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2021120103
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.12
**Vulnerability Type**  CWE-79: Improper Neutralization of Input During Web Page Generation\
                        ('Cross-site Scripting')
**Risk**		Medium
**Description**         Stored XSS Vulnerability in File Name of the File Upload function
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23260
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2021120104
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.13
**Vulnerability Type**  CWE-703 Improper Check or Handling of Exceptional Conditions
**Risk**		Medium
**Description**         Overriding the system configuration file causes a denial of service
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23261
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2021120105
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.13
**Vulnerability Type**  CWE-913 Improper Control of Dynamically-Managed Code Resources
**Risk**		Medium
**Description**         Snakeyaml deserialization vulnerability bypass
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23262
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2021120106
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.15
**Vulnerability Type**  CWE-402: Transmission of Private Resources into a New Sphere ('Resource Leak')
**Risk**		Medium
**Description**         Transmission of Private Resources into a New Sphere ('Resource Leak') in Crafter\
                        Engine
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23263
**Credit**              Carlos Ortiz, https://github.com/cortiz
======================= ======================================================================================

-------------
CV-2021120107
-------------
======================= ======================================================================================
**Date**                2021.12.01
======================= ======================================================================================
**Affected Versions**   **3.1** < 3.1.15
**Vulnerability Type**  CWE-402: Transmission of Private Resources into a New Sphere ('Resource Leak')
                        CWE-668 Exposure of Resource to Wrong Sphere
**Risk**		High
**Description**         Transmission of Private Resources into a New Sphere ('Resource Leak') and Exposure\
                        of Resource to Wrong Sphere in Crafter Search
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2021-23264
**Credit**              Sparsh Kulshrestha, https://github.com/sparshkulshrestha
======================= ======================================================================================

-------------
CV-2020080101
-------------
======================= ======================================================================================
**Date**                2020.08.01
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.27 |br| **3.1** < 3.1.7
**Vulnerability Type**  RCE
**Risk**		Medium
**Description**         Authenticated attackers with developer privileges in Crafter Studio may execute OS \
			commands via Groovy scripting.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2020-25802
**Credit**              Kai Zhao (ToTU Security Team), https://github.com/happyhacking-k
======================= ======================================================================================

-------------
CV-2020080102
-------------
======================= ======================================================================================
**Date**                2020.08.01
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.27 |br| **3.1** < 3.1.7
**Vulnerability Type**  RCE
**Risk**		Medium
**Description**         Authenticated attackers with developer privileges in Crafter Studio may execute OS \
			commands via deep inspection of FreeMarker template exposed objects.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2020-25803
**Credit**              Alvaro Muñoz (GitHub), https://github.com/pwntester
======================= ======================================================================================

-------------
CV-2018120601
-------------
======================= ======================================================================================
**Date**                2018.12.06
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.19
**Vulnerability Type**  RCE
**Risk**		Medium
**Description**         Authenticated attackers with developer privileges in Crafter Studio may execute OS \
			commands via FreeMarker templates.
**CVE**                 https://nvd.nist.gov/vuln/detail/CVE-2018-19907
**Credit**              Buxu, https://github.com/buxu
======================= ======================================================================================

-------------
CV-2017061501
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  IDOR
**Risk**		High
**Description**         An IDOR vulnerability exists which allows unauthenticated attackers to view and modify \
			administrative data.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15680
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================

-------------
CV-2017061502
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  Directory Traversal
**Risk**		Critical
**Description**         A directory traversal vulnerability exists which allows unauthenticated attackers to \
			overwrite files from the operating system which can lead to RCE.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15681
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================

-------------
CV-2017061503
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  Stored XSS
**Risk**		High
**Description**         An unauthenticated attacker is able to inject malicious JavaScript code resulting in \
			a stored/blind XSS in the admin panel.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15682
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================

-------------
CV-2017061504
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  XXE
**Risk**		High
**Description**         An unauthenticated attacker is able to create a site with specially crafted XML that \
			allows the retrieval of OS files out-of-band.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15683
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================

-------------
CV-2017061505
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  Directory Traversal
**Risk**		High
**Description**         A directory traversal vulnerability exists which allows unauthenticated attackers to \
			view files from the operating system.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15684
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================

-------------
CV-2017061506
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  XXE
**Risk**		High
**Description**         An unauthenticated attacker is able to create a site with specially crafted XML that \
			allows the retrieval of OS files out-of-band.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15685
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================

-------------
CV-2017061507
-------------
======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   **3.0** < 3.0.1
**Vulnerability Type**  Reflected XSS
**Risk**		Medium
**Description**         A reflected XSS vulnerability exists which allows remote attackers to steal users' \
			cookies resulting in them hijacking their session.
**CVE**                 https://www.cve.org/CVERecord?id=CVE-2017-15686
**Credit**              Jasmin Landry, https://github.com/JR0ch17
======================= ======================================================================================
