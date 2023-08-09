:is-up-to-date: True
:last-updated: 4.0.3
:orphan:

.. index:: Crafter Marketplace, Marketplace

.. _marketplace:

===================
Crafter Marketplace
===================

|
|

.. image:: /_static/images/developer/marketplace/marketplace.webp
   :alt: Crafter Marketplace
   :width: 80%
   :align: center

|

The `Crafter Marketplace <https://craftercms.com/marketplace/>`__ provides a home for the CrafterCMS community to contribute, find, and use extensions.
CrafterCMS ``extensions`` extend the CMS and provide the user additional functionality.

This section provides information on creating and how to submit your extensions so that it's available to the
community via the Marketplace

.. _marketplace-create-extensions:

---------------------------------------------
Create Extensions for the Crafter Marketplace
---------------------------------------------

^^^^^^^^^^^^^^^^^^^
Types of extensions
^^^^^^^^^^^^^^^^^^^

- ``blueprint``: This type of extension (blueprint) can be used as a template to create projects, it includes
  support for parameters to allow dynamic sites that use API keys or passwords for external services. For more
  information about creating blueprints you can follow this guide: :ref:`blueprints`.

- ``plugin``: This type of extension can be used to add features to existing projects, it can include authoring
  and delivery extensions. For more information about creating plugins you can follow this guide: :ref:`how-do-i-make-my-own-plugin`

.. _submit-extension-to-marketplace:

^^^^^^^^^^^^^^^^^^^
Submit an extension
^^^^^^^^^^^^^^^^^^^

    .. note:: At this moment there is only one method for submitting plugins, but others will be added in the future


GitHub App
^^^^^^^^^^

The Crafter Marketplace provides a very simple way of publishing plugins from a GitHub repository, once your extension
is ready to be submitted you can follow these steps:

#. Install the Crafter Marketplace GitHub App in your repository:

    #. Open a browser and go to `<https://github.com/marketplace/crafter-marketplace>`_

       .. figure:: /_static/images/developer/marketplace/github-marketplace.webp
           :alt: Crafter Marketplace GitHub App
           :align: center
           :width: 80%

       |

    #. Click the ``Install it for free`` button

       .. figure:: /_static/images/developer/marketplace/github-marketplace-install.webp
          :alt: Crafter Marketplace GitHub App Installation
          :align: center
          :width: 40%

       |

    #. Click the ``Complete order and begin installation`` button

       .. figure:: /_static/images/developer/marketplace/github-marketplace-review.webp
          :alt: Crafter Marketplace GitHub App Installation
          :align: center
          :width: 80%

       |

    #. Select the repositories for your plugins and click the ``Install`` button

       .. figure:: /_static/images/developer/marketplace/github-marketplace-repos.webp
          :alt: Crafter Marketplace GitHub App Configuration
          :align: center
          :width: 80%

       |

    #. From your account settings you can:

       - Add or remove repositories from the application
       - Uninstall the application from your account



       .. figure:: /_static/images/developer/marketplace/github-marketplace-settings.webp
          :alt: Crafter Marketplace GitHub App Configuration
          :align: center
          :width: 80%

       |

#. Create a tag in your repository for the version of the plugin that you will submit:

       ``git tag v1.0.0``

#. Push the tag to GitHub:

    ``git push --tags``

#. The Crafter Marketplace will automatically detect the new tag in your repository and will start processing
    a new version for your extension (or a new extension if it doesn't exit yet)

#. You will receive an email notification to the address configured in your GitHub account.

.. warning::
  Make sure to always change the plugin version in the ``craftercms-plugin.yaml`` the next time you create a tag or
  the submit process will fail

  Also remember to set your GitHub repository to public so Crafter can pull from the repository. If you're interested
  in private extensions/Marketplace, you'll need to switch to the Enterprise Edition of CrafterCMS.


.. raw:: html

   <hr>

For more information on the Crafter Marketplace, see https://craftercms.com/marketplace/

For more information on developing extensions for the Marketplace, see :ref:`here <extensions>`

