This is a TODO file, what's in here must be done then removed from this file

Getting Started
===============
- Orient to users of CrafterCMS not developers developing CrafterCMS (JRE instead of JDK, run instead of compile, etc.)

Common
======

Reference
=========
- Secrets Management
  - Store secrets externally or using an external key-store like AWS Secrets (ask AV)
    - Passing secrets into CrafterCMS via environment variables
      - Explain `crafter-setenv.sh` and give examples
        - Ask AV for real examples and add them
- Finish the OAS docs and link them to the index of Reference
- Update the file `configurations.rst` to match the latest software
- Update all modules to be fully inclusive of
  - Description
  - Administration
    - Configuration
  - API
  - Source Code

Include
=======
- JWT
- Default ports (authoring and delivery) -- either one include for both or two separate.

Developer
=========
- Custom Error Pages

Site Admin
==========
- Cite the Secrets Management reference article

System Admin
============
- Authoring authentication
    - LDAP
    - SAML (< 4.0.2, >= 4.0.3)
    - Headers
    - JWT
- Delivery authentication
    - SAML (< 4.0.2, >= 4.0.3) from an Sys Admin perspective
    - Headers
    - 
- Cite the Secrets Management reference article
- Reference the administration and configuration in the reference section instead of duplicating it here

Misc
====
- Revisit the FAQ