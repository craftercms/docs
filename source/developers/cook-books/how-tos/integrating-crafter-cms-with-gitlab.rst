.. index:: Integrating Crafter CMS with GitLab

.. _integrating-crafter-cms-with-gitlab:

===================================
Integrating Crafter CMS with GitLab
===================================

This section details how to create a new project in GitLab and then start a new project in Crafter CMS in a way that connects to GitLab as an upstream remote repository.

---------------------------------------------
Create a New Project and Connect it to GitLab
---------------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create a Project in GitLab
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /_static/images/developer/craftercms-gitlab-create-repo.png
    :alt: How-Tos - Create a project in GitLab
    :width: 70 %
    :align: center

**Figure 1: Create a project in GitLab**

#. Select Blank Project to create a bare project
#. Enter your project name
#. Provide a project description
#. Choose your security level
#. Click create site

Once your repository is created you will see a screen similar to the one below.  You want to make note of the Git URL for the site.  You will need this URL in the next step.

.. image:: /_static/images/developer/craftercms-gitlab-create-repo-url.png
    :alt: How-Tos - New project in GitLab
    :width: 70 %
    :align: center

**Figure 2: New Project in GitLab**

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 2: Create Your Project In Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Next, you want to log in to Crafter Studio as the admin user. The admin user has the rights to create new projects (called sites.) Click Create Site.

.. image:: /_static/images/developer/create-site.png
    :alt: How-Tos - Site screen in Crafter Studio
    :width: 70 %
    :align: center


**Figure 3: Create site via Crafter Studio**

Clicking Create Site will present you with the Create Site dialog. This dialog changes depending on what you choose. Below is an example of the dialog filled out in a way that creates your project locally, set the Github repository as its upstream remote and pushes the initial project contents to the upstream repository.

Let’s walk through each part of the dialog:

.. image:: /_static/images/developer/craftercms-gitlab-create-site.png
    :alt: How-Tos - Create Site Dialog Walk Through
    :width: 70 %
    :align: center

**Figure 4: Create Site Dialog in Crafter Studio, populating a bare upstream Git repository.**

#. The first thing you need to do is give your site an ID. The ID itself doesn’t matter in a sense. It doesn’t need to match anything per se, technically speaking the only requirement is that it’s unique. That said, it’s a best practice to provide an ID that is meaningful/recognizable to the team. If your website is called Sweet.com a good ID might be “sweetdotcom”
#. Next, because you plan to connect this project to an upstream repository you want to click the plus (+) on “Link to upstream remote Git repository” This will open a number of new fields.
#. In the “Remote Git Repository Name” field you want to provide a repository name that makes sense. It’s common to use “origin” or “upstream.”
#. In the “Remote Git Repository URL” field you must provide the link to the Git repository discussed in Step #1: https://gitlab.com/myuser/sweet-dotcom.git
#. Provide your credentials in Git Remote Repository Username and Password
#. Choose the option: “Create site based on blueprint then push to  remote bare repository.” This means that Crafter Studio will create a new site based on the blueprint you choose, link the remote repository as an upstream and then once the blueprint is installed in the local Repositories it will be pushed automatically to the upstream remote.
#. Choose your blueprint. There are several out of the box blueprints provided by default. Choose one of these or one of your own. For our example, we’ll choose Editorial which is the simple Article style website/project template.
#. Click Create. Crafter CMS will create the local repositories, Solr core and internal data structures required to support the project and install the blueprint. Once complete it will connect to the upstream and push the contents of the Sandbox repository to the remote.

.. image:: /_static/images/developer/crafter-cms-home-preview.png
    :alt: How-Tos - Crafter Studio Home Page Preview
    :width: 80 %
    :align: center

**Figure 5: Site is created and the contents of the sandbox are automatically pushed to the upstream repository**

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Check GitLab to Make Sure Your Site is There
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go back to your GitLab project and refresh the screen.  You will see the contents of your CMS project in the repository.

.. image:: /_static/images/developer/craftercms-gitlab-site-created-syncd.png
    :alt: How-Tos - Your project in GitLab
    :width: 70 %
    :align: center

Your project is there!

----------------------------------------------
Pushing and Pulling from the Remote Repository
----------------------------------------------

Crafter Studio helps you manage and interact with your remote repositories via the user interface and via API.  Using Crafter Studio’s remote repositories console, you can add any remotes to the project you like and sync with them via pull and push operations at any time.

.. image:: /_static/images/developer/craftercms-gitlab-remotes.png
    :alt: How-Tos - Pushing and Pulling from the Remote Repository
    :width: 100 %
    :align: center

|

Now you are ready to set up your entire development process and CI/CD automation.

---------------------------------------------------------------------
Creating a Project in Crafter CMS Based on an Existing GitLab Project
---------------------------------------------------------------------
Let’s consider for a moment that you’re a new developer joining the team. The topology above is already set up and you just want to get a local environment up and going. Simple. Follow these instructions.

#. Install Crafter Studio locally (`Source build <https://github.com/craftercms/craftercms>`_ or `Binaries bundle <https://craftersoftware.com/downloads>`_)
#. Login as Admin
#. Click Create Site
#. Fill out the Create Site Form as in a similar fashion described in Step 2, except this time you chose the option to create your site based on an existing upstream repository. This can be your team’s branch or your own fork. The exact workflow is up to you.
