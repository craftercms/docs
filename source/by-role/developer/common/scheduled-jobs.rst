:is-up-to-date: True
:last-update: 4.1.2

.. index:: Engine Jobs, Jobs, Cron, Cron Expression, Scheduled Jobs

.. _scheduled-jobs:

""""""""""""""
Scheduled Jobs
""""""""""""""
Scripts can also be scheduled as jobs in Crafter Engine. These scripts only have the common global variables and the logger variable.
They don't need to return any result. Engine allows 3 different ways to configure script jobs:

*   By placing the scripts under one of the following folders in Scripts > jobs: hourly, daily, weekly and monthly. As the names imply,
    scripts under these folders will be scheduled to run every hour (hourly), at 12:00 am every day (daily), at 12:00 am every Monday
    (weekly), or at 12:00 am every first day of the month (monthly).
*   By adding one or more ``<jobFolder>`` configuration elements under ``<jobs>`` in Config > site.xml. Under ``<jobFolder>`` you can
    specify a ``<path>`` and a ``<cronExpression>``, and every script under that folder will be scheduled using the cron expression.

    .. code-block:: xml

        <jobs>
            <jobFolder>
                <path>/scripts/jobs/morejobs</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </jobFolder>
        </jobs>

*   By adding one or more ``<job>`` configuration elements under ``<jobs>`` in the configuration file ``/config/engine/site-config.xml``. With the ``<path>`` and
    ``<cronExpression>`` elements, you specify the job script path and the cron expression for scheduling.

    .. code-block:: xml

        <jobs>
            <job>
                <path>/scripts/jobs/testJob.groovy</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </job>
        </jobs>
