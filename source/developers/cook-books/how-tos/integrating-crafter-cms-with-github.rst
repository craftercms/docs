:is-up-to-date: True

.. index:: Integrating Crafter CMS with GitHub

.. _integrating-crafter-cms-with-github:

===================================
Integrating Crafter CMS with GitHub
===================================

This section details how to create a new project in GitHub and then start a new project in Crafter CMS in a way that connects to GitHub as an upstream remote repository.

---------------------------------------------
Create a New Project and Connect it to GitHub
---------------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create a Project in GitHub
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /_static/images/developer/craftercms-github-create-repo.png
    :alt: How-Tos - Create a project in GitHub
    :width: 70 %
    :align: center

**Figure 1: Create a project in GitHub**

#. Select Blank Project to create a bare project
#. Enter your project name
#. Provide a project description
#. Choose your security level
#. Do not initialize the repository with a readme
#. Click create repository

Once your repository is created you will see a screen similar to the one below.  You want to make note of the Git URL for the site.  You will need this URL in the next step.

.. image:: /_static/images/developer/craftercms-github-create-repo-url.png
    :alt: How-Tos - New project in GitHub
    :width: 70 %
    :align: center

**Figure 2: New Project in GitHub**

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 2: Create Your Project In Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Next, you want to log in to Crafter Studio as the admin user. The admin user has the rights to create new projects (called sites.) Click Create Site.

.. image:: /_static/images/developer/dev-cloud-platforms/create-site.png
    :alt: How-Tos - Site screen in Crafter Studio
    :width: 70 %
    :align: center

**Figure 3: Create site via Crafter Studio**

Clicking Create Site will present you with the Create Site dialog. This dialog changes depending on what you choose. Below is an example of the dialog filled out in a way that creates your project locally, set the Github repository as its upstream remote and pushes the initial project contents to the upstream repository.

Let’s walk through each part of the dialog:

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-1.png
    :alt: Developer How Tos - Create Site Dialog Walk Through step 1
    :width: 70 %
    :align: center

1. The first thing you need to do is to choose your blueprint. There are several out of the box blueprints provided by default. Choose one of these or one of your own. For our example, we’ll choose the Website Editorial blueprint.

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-2.png
    :alt: Developer How Tos - Create Site Dialog Walk Through step 2
    :width: 70 %
    :align: center

2. The next thing to do is give your site an ID. The ID itself doesn’t matter in a sense. It doesn’t need to match anything per se, technically speaking the only requirement is that it’s unique. That said, it’s a best practice to provide an ID that is meaningful/recognizable to the team. If your website is called FreshFlowers.com a good ID might be “freshflowerscom”
3. Click on the **Additional Developer Options** button, this will take you to the dialog where we can fill in all the information for our remote repository

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-3.png
    :alt: Developer How Tos - Create Site Dialog Walk Through step 3
    :width: 70 %
    :align: center

4. Next, because you plan to connect this project to an upstream repository, check the **Push the site to a remote Git repository after creation** checkbox.  This will then open a number of fields.  This means that Crafter Studio will create a new site based on the blueprint you chose, link the remote repository as an upstream and then once the blueprint is installed in the local Repositories it will be pushed automatically to the upstream remote.

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-4-github.png
    :alt: Developer How Tos - Create Site Dialog Walk Through step 4
    :width: 70 %
    :align: center

5. In the **Remote Git Repository Name** field you want to provide a repository name that makes sense. It’s common to use “origin” or “upstream.”
6. In the **Remote Git Repository URL** field you must provide the link to the Git repository discussed in **Step #1**: https://github.com/myuser/mysweetdotcom.git
7. Provide your credentials based on the authentication method selected.  In our example, we chose ``Basic`` as the authentication method and we'll need to fill in **Remote Git Repository Username** and **Remote Git Repository Password**
8. Click **Review and Create**.  The next screen will give you a chance to review your entries and make corrections as needed by clicking on the **Previous step** button

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-5-github.png
    :alt: Developer How Tos - Create Site Dialog Walk Through step 5
    :width: 70 %
    :align: center

9. Once you're satisfied with your entries for creating your site, click on the **Create** button.  Crafter CMS will create the local repositories, search index and internal data structures required to support the project and install the blueprint. Once complete it will connect to the upstream and push the contents of the Sandbox repository to the remote.

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-6.jpg
    :alt: Developer How Tos - Site is created and the contents of the sandbox are automatically pushed to the upstream repository
    :width: 70 %
    :align: center

**Figure:: Site is created and the contents of the sandbox are automatically pushed to the upstream repository**


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Check GitHub to Make Sure Your Site is There
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go back to your Github project and refresh the screen.  You will see the contents of your CMS project in the repository.

.. image:: /_static/images/developer/craftercms-github-site-created-syncd.png
    :alt: How-Tos - Your project in GitHub
    :width: 80 %
    :align: center

|

Your project is there!

----------------------------------------------
Pushing and Pulling from the Remote Repository
----------------------------------------------

Crafter Studio helps you manage and interact with your remote repositories via the user interface and via API.  Using Crafter Studio’s remote repositories console, you can add any remotes to the project you like and sync with them via pull and push operations at any time.

.. image:: /_static/images/developer/dev-cloud-platforms/craftercms-github-remotes.png
    :alt: Developer How-Tos - Pushing and Pulling from the Remote Repository
    :width: 100 %
    :align: center

|

Now you are ready to set up your entire development process and CI/CD automation.

---------------------------------------------------------------------
Creating a Project in Crafter CMS Based on an Existing GitHub Project
---------------------------------------------------------------------

Let’s consider for a moment that you’re a new developer joining the team. The topology above is already set up and you just want to get a local environment up and going. Simple. Follow these instructions.

1. Install Crafter Studio locally (`Source build <https://github.com/craftercms/craftercms>`_ or `Binaries bundle <https://craftersoftware.com/downloads>`_)
2. Login as Admin
3. Click Create Site

.. figure:: /_static/images/developer/workflow/create-site-based-on-remote-1.png
    :alt: Developer How Tos - Setting up to work locally against the upstream
    :width: 70 %
    :align: center

|

4. Fill out the Create Site Form as in a similar fashion described in Step 2 above, except this time, instead of selecting a blueprint, check the **Use a remote Git repository instead of a built in blueprint** checkbox to create your site based on an existing upstream repository.  This can be your team’s branch or your own fork. The exact workflow is up to you.

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-create-site-basic-info.png
    :alt: Developer How Tos - Setting up to work locally against the upstream step 2
    :width: 70 %
    :align: center

|

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-3.png
    :alt: Developer How Tos - Setting up to work locally against the upstream step 3
    :width: 70 %
    :align: center

|

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-4.png
    :alt: Developer How Tos - Setting up to work locally against the upstream step 4
    :width: 70 %
    :align: center

|
