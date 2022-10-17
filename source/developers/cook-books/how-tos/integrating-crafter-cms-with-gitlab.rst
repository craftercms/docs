:is-up-to-date: True
:last-updated: 4.0.1

.. index:: Integrating CrafterCMS with GitLab

.. _integrating-crafter-cms-with-gitlab:

==================================
Integrating CrafterCMS with GitLab
==================================

This section details how to create a new project in GitLab and then start a new project in CrafterCMS in a way that connects to GitLab as an upstream remote repository.

---------------------------------------------
Create a New Project and Connect it to GitLab
---------------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create a Project in GitLab
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /_static/images/developer/dev-cloud-platforms/craftercms-gitlab-create-repo.webp
    :alt: How-Tos - Create a project in GitLab
    :width: 70 %
    :align: center

**Figure 1: Create a project in GitLab**

#. Select Blank Project to create a bare project
#. Enter your project name
#. Provide a project description
#. Choose your security level
#. Click create project

Once your repository is created you will see a screen similar to the one below.  You want to make note of the Git URL for the project.  You will need this URL in the next step.

.. image:: /_static/images/developer/dev-cloud-platforms/craftercms-gitlab-create-repo-url.webp
    :alt: How-Tos - New project in GitLab
    :width: 70 %
    :align: center

**Figure 2: New Project in GitLab**

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 2: Create Your Project In Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Next, you want to log in to Crafter Studio as the admin user. The admin user has the rights to create new projects. Click ``Create Project``.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project.webp
    :alt: How-Tos - Project screen in Crafter Studio
    :width: 70 %
    :align: center


**Figure 3: Create project via Crafter Studio**

Clicking ``Create Project`` will present you with the ``Create Project`` dialog. This dialog changes depending on what you choose. Below is an example of the dialog filled out in a way that creates your project locally.  We will then add the GitLab repository as its upstream remote and push the initial project contents to the upstream repository.

Let’s walk through each part of the dialog:

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-1.webp
    :alt: Developer How Tos - Create Project Dialog Walk Through step 1
    :width: 70 %
    :align: center

1. The first thing you need to do is to choose your blueprint. There are several out of the box blueprints provided by default. Choose one of these or one of your own. For our example, we’ll choose the Website Editorial blueprint.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-2.webp
    :alt: Developer How Tos - Create Project Dialog Walk Through step 2
    :width: 70 %
    :align: center

2. The next thing to do is give your project an ID. The ID itself doesn’t matter in a sense. It doesn’t need to match anything per se, technically speaking the only requirement is that it’s unique. That said, it’s a best practice to provide an ID that is meaningful/recognizable to the team. If your website is called FreshFlowers.com a good ID might be “freshflowerscom”.

   Click on the **Review** button, then finally  click on the **Create Project** button to create your project.  CrafterCMS will create the local repositories, search index and internal data structures required to support the project and install the blueprint.  Your project should be created in a short while.

3. Once your project is created, the next step is to add a remote repository to your newly created project.  Open the **Sidebar** then click on **Project Tools** -> **Git**, then click on the **New Remote** button on the top right.

   This will open up a dialog where we can fill in all the information for our remote repository.

   .. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-3.webp
      :alt: Create Repository dialog to fill in information of remote repository being added to the project
      :width: 70 %
      :align: center

   |

4. In the **Remote Git Repository Name** field you want to provide a repository name that makes sense. It’s common to use “origin” or “upstream.”


5. In the **Remote Git Repository URL** field you must provide the link to the Git repository discussed in **Step #1**: ``https://gitlab.com/myuser/mysweetdotcom.git``

6. Provide your credentials based on the authentication method selected.  For example, if we chose ``Username & Password`` as the authentication method, we'll need to fill in **Username** and **Password**

      .. note::
         .. include:: /includes/setup-ssh-keys.rst

7. Once you're satisfied with your entries for your remote repository, click on the **Create** button.   Once complete we can now connect to the upstream and push the contents of the Sandbox repository to the remote by clicking on the ``Push`` button (button with the up arrow).

   .. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-4-gitlab.webp
      :alt: Remotes screen displaying newly added remote repository to project
      :width: 90 %
      :align: center

   **Figure:: Project is created and a remote repository added**


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Check GitLab to Make Sure Your Project is There
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go back to your GitLab project and refresh the screen.  You will see the contents of your CMS project in the repository.

.. image:: /_static/images/developer/dev-cloud-platforms/craftercms-gitlab-project-created-syncd.webp
    :alt: How-Tos - Your project in GitLab
    :width: 70 %
    :align: center

Your project is there!

----------------------------------------------
Pushing and Pulling from the Remote Repository
----------------------------------------------

Crafter Studio helps you manage and interact with your remote repositories via the user interface and via API.  Using Crafter Studio’s remote repositories console, you can add any remotes to the project you like and sync with them via pull and push operations at any time.

.. image:: /_static/images/developer/dev-cloud-platforms/craftercms-gitlab-remotes.webp
    :alt: How-Tos - Pushing and Pulling from the Remote Repository
    :width: 100 %
    :align: center

|

Now you are ready to set up your entire development process and CI/CD automation.

--------------------------------------------------------------------
Creating a Project in CrafterCMS Based on an Existing GitLab Project
--------------------------------------------------------------------
Let’s consider for a moment that you’re a new developer joining the team. The topology above is already set up and you just want to get a local environment up and going. Simple. Follow these instructions.

1. Install Crafter Studio locally (`Binaries download <https://craftercms.com/downloads>`_ or `Source build <https://github.com/craftercms/craftercms>`_)
2. Login as Admin
3. Fill out the Create Project Form as in a similar fashion described in Step 2 above, except this time, instead of selecting a blueprint, select the **Remote Git Repository** to create your project based on an existing upstream repository.  This can be your team’s branch or your own fork. The exact workflow is up to you.

   .. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-gitlab-clone-1.webp
      :alt: Developer How Tos - Setting up to work locally against the upstream
      :width: 70 %
      :align: center

   |

   .. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-gitlab-clone-2.webp
      :alt: Developer How Tos - Setting up to work locally against the upstream review entries
      :width: 70 %
      :align: center
