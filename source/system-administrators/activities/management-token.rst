:is-up-to-date: True

.. index:: Management Tokens

.. _management-tokens:

=================
Management Tokens
=================

Crafter CMS uses authorization tokens for the Studio, Engine, Deployer and Search modules.
These tokens need to be passed as a parameter when using context (``/api/1/site/context/*``), cache (``/api/1/site/cache/*``) and monitoring (``/api/1/monitoring/*`` and ``/studio/api/2/monitoring``) APIs, to allow access to the APIs.

Crafter CMS provides default values for the tokens.
To change the default management authorization tokens, open ``bin/crafter-setenv.sh`` and change ``defaultManagementToken`` to desired token value:

    .. code-block:: sh
        :caption: *bin/crafter-setenv.sh*

        # -------------------- Management tokens ----------------
        export STUDIO_MANAGEMENT_TOKEN=${STUDIO_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export ENGINE_MANAGEMENT_TOKEN=${ENGINE_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export DEPLOYER_MANAGEMENT_TOKEN=${DEPLOYER_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export SEARCH_MANAGEMENT_TOKEN=${SEARCH_MANAGEMENT_TOKEN:="defaultManagementToken"}

    |

Please update this per installation and provide this token to context, cache and monitoring APIs.

Here's an example request to get the events recorded in the Crafter Engine log for a given site in a specific time period after changing the default ``ENGINE_MANAGEMENT_TOKEN`` token value to ``myCustomToken``

    .. code-block:: sh
        :caption: *bin/crafter-setenv.sh*

        export ENGINE_MANAGEMENT_TOKEN=${ENGINE_MANAGEMENT_TOKEN:="myCustomToken"}

    |

Here's the request sent with the new token value:

    ``GET .../api/1/monitoring/log.json?site=editorial&since=1396772083660&token=myCustomToken``






