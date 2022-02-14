:is-up-to-date: True

.. _code-repo-and-devops-workflow:

=================================
Code Repository & DevOps Workflow
=================================

The main goal of the development/DevOps workflow is to enable simple parallel development, testing and release of features and fixes by multiple teams.  Organizations that use Git for source code management support this objective through a standardized Git branching and workflow strategy known as GitFlow.  In the following section we’ll break this standard branching strategy down into two parts:  Feature Development and Release.

-------------------
Feature Development
-------------------
Consider the following diagram below.  This is the essence of the GitFlow strategy:  There are 3 “types” (read purpose) of branches shown in the diagram: Master, Develop and Feature.

.. image:: /_static/images/developer/workflow/feature-dev-gitflow.png
     :alt: Developer Workflow - Feature Development GitFlow Strategy
     :width: 80 %
     :align: center

|

    * **Master**:  There is one Master branch. The master branch  maps to the history of what is “In Production.”  The Master branch is long-lived, it lives forever.
    * **Develop**: There is one Develop branch. Development contains completed, individual features headed for production. The Develop branch is long-lived, it lives forever.
    * **Feature**:  There are as many feature branches as needed to support a specific team / isolated unit of work.  A Feature branch is short-lived, it lives only as long as the feature/team exists.

The above workflow is a simplified version of the ultimate workflow but it illustrates the ability to achieve parallel feature development across an unlimited number of teams.

* Nothing gets to Master until it has passed through the Develop branch and is vetted.
* Develop branch contains vetted code that is accessible for Feature teams to pull in to their environments when appropriate to support CI/CD.
* Work in one feature can never impact another feature until after it’s been vetted as official and is no longer “experimental” or in development.

--------
Releases
--------

When a group of feature is ready for release the typical practice is to “Code Freeze”, perform QA and then perform specific fixes,  Let’s extend our workflow above to support a release:



.. image:: /_static/images/developer/workflow/releases-gitflow.png
     :alt: Developer Workflow - Releases GitFlow Strategy
     :width: 80 %
     :align: center

|

    * **Release**:  There can be multiple release branches. A release branch contains a snapshot of development that is being hardened through a the QA/bug fix cycle.  The contents of a hardened release branch are what go production (and back to dev.) Release is a short-lived, it lives only for the duration of the hardening and release activity.


Testing Environments and Development Process
--------------------------------------------

We'll take a look at a development process, where there are two environments, each with a number of servers which are specific to a function in the architecture (authoring, delivery, business rules, etc.)  The following environments are relevant:

#. Dev:  Development and integration testing
#. QA: Quality Assurance environment

At various points in the development process a feature or a group of features (a release) need to go to a lower environment such as development or QA for testing.  Because CrafterCMS uses a Git-based repository, environments can sit on top of specific branches, allowing you to easily look at a release.

The typical process for moving code through the environments can be summarized in the following way:

#. Throughout a features development it is put to a Dev environment (dev) for system integration testing.
#. Once things have passed the feature is moved to QA to be qualified and for final hardening for production.
#. After qualifying the code is moved to production.

From the above mentioned environments, we have the following long-lived branches:

#. **env-dev**:  Development / System integration environment testing branch.  This branch contains what is in development plus the contents of a specific feature branch.
#. **env-qa**: Production qualification environment testing branch.  This branch contains a specific release for qualification.

Given these branches and the GitFlow mechanics we described prior, the following diagram is an illustration of the full development workflow.

.. image:: /_static/images/developer/workflow/full-dev-workflow.png
     :alt: Developer Workflow - Full Development Workflow
     :width: 80 %
     :align: center


