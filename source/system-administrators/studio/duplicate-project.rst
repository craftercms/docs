:is-up-to-date: True
:last-updated: 4.0.8
:orphan:

.. _duplicate-project:

=====================
Duplicating a Project
=====================
.. version_tag::
    :label: Since
    :version: 4.0.8

Crafter Studio supports creating a new project by duplicating an existing project.
To duplicate a project, from ``Projects``, click on the ``Create Project`` button.

.. image:: /_static/images/first-project/create-project-choose-bp.webp
   :width: 65 %
   :align: center
   :alt: Studio Administration - Create Project

|

Next, click on ``Duplicate Project``. It will then prompt you to select the project to be duplicated by clicking
on the dropdown arrow in the ``Project`` field.  Give it a good ``Project Name`` and ``Project ID``, then click on the
``Review`` button and follow the rest of the dialogs

.. image:: /_static/images/system-admin/duplicate-project-screen.webp
   :width: 65 %
   :align: center
   :alt: Studio Administration - Duplicate Project Screen

|

When duplicating a project that uses S3 buckets (blob stores), the S3 buckets may be copied over to the new project and the
configuration updated if separate S3 buckets from the source project are required.

