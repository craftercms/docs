:is-up-to-date: True

.. index:: Crafter CMS Security Advisories, Advisories

===================
Security Advisories
===================

CV-2020080101
=============

======================= ======================================================================================
**Date**                2020.08.01
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.27 |br| 3.1 < 3.1.7
**Vulnerability Type**  RCE
**Risk**		Medium
**Description**         Authenticated attackers with developer privileges in Crafter Studio may execute OS \
			commands via Groovy scripting.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-25802
======================= ======================================================================================

CV-2020080102
=============

======================= ======================================================================================
**Date**                2020.08.01
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.27 |br| 3.1 < 3.1.7
**Vulnerability Type**  RCE
**Risk**		Medium
**Description**         Authenticated attackers with developer privileges in Crafter Studio may execute OS \
			commands via deep inspection of FreeMarker template exposed objects.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-25803
======================= ======================================================================================

CV-2018120601
=============

======================= ======================================================================================
**Date**                2018.12.06
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.19
**Vulnerability Type**  RCE
**Risk**		Medium
**Description**         Authenticated attackers with developer privileges in Crafter Studio may execute OS \
			commands via FreeMarker templates.
**CVE**                 https://nvd.nist.gov/vuln/detail/CVE-2018-19907
======================= ======================================================================================

CV-2017061501
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  IDOR
**Risk**		High
**Description**         An IDOR vulnerability exists which allows unauthenticated attackers to view and modify \
			administrative data.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15680
======================= ======================================================================================

CV-2017061502
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  Directory Traversal
**Risk**		Critical
**Description**         A directory traversal vulnerability exists which allows unauthenticated attackers to \
			overwrite files from the operating system which can lead to RCE.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15681
======================= ======================================================================================

CV-2017061503
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  Stored XSS
**Risk**		High
**Description**         An unauthenticated attacker is able to inject malicious JavaScript code resulting in \
			a stored/blind XSS in the admin panel.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15682
======================= ======================================================================================

CV-2017061504
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  XXE
**Risk**		High
**Description**         An unauthenticated attacker is able to create a site with specially crafted XML that \
			allows the retrieval of OS files out-of-band.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15683
======================= ======================================================================================

CV-2017061505
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  Directory Traversal
**Risk**		High
**Description**         A directory traversal vulnerability exists which allows unauthenticated attackers to \
			view files from the operating system.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15684
======================= ======================================================================================

CV-2017061506
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  XXE
**Risk**		High
**Description**         An unauthenticated attacker is able to create a site with specially crafted XML that \
			allows the retrieval of OS files out-of-band.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15685
======================= ======================================================================================

CV-2017061507
=============

======================= ======================================================================================
**Date**                2017.06.15
======================= ======================================================================================
**Affected Versions**   3.0 < 3.0.1
**Vulnerability Type**  Reflected XSS
**Risk**		Medium
**Description**         A reflected XSS vulnerability exists which allows remote attackers to steal users' \
			cookies resulting in them hijacking their session.
**CVE**                 https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15686
======================= ======================================================================================
