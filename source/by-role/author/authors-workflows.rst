:is-up-to-date: False
:last-updated: 4.0.0


.. index:: Workflows

.. _content_authors_workflows:

=========
Workflows
=========

This section describes the simple default workflow available from CrafterCMS.

----------------------------------
Workflow and Scheduled Deployments
----------------------------------

Workflow is the act of moving content through its lifecycle. A simple workflow option that includes
submission, review/reject and approve and publish immediate / publish on a schedule options are
provided by default. Workflow options are available to specific content, such as pages or static assets,
etc. The available workflow options for users depends on the Role the users are assigned with. As the
content goes through the workflow options, notification emails are sent out to corresponding users based
on the workflow option. To setup the email addresses, please see the section **Site Administrators**,
:ref:`configure-notifications` and  :ref:`users-group-management`. Below is a diagram showing
the default workflow steps.

.. image:: /_static/images/page/page-workflow-diagram.webp
    :width: 75 %
    :align: center
    :alt: Workflow - Diagram

|

We will be looking at the workflow steps in this section. Workflow is managed through dialogs. Below
is a sample dialog:

.. image:: /_static/images/page/page-workflows.webp
    :width: 65 %
    :align: center
    :alt: Workflow - Sample dialog

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Submitting Content for Approval
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After creating/editing content, a request to publish content can be done by clicking on **Publish**.
A **Publish** submission can be initiated from a preview screen through the toolbar by clicking on
the three dots next to the address bar or by clicking on the three dots next to the article in the
Sidebar (for single items), or from the Dashboard (where items can be batch checked).

Initiate a Publish through the toolbar at the top:

.. image:: /_static/images/page/page-workflows-publish-1a.webp
    :width: 85 %
    :align: center
    :alt: Workflow - Request publish through the toolbar at the top

|

.. image:: /_static/images/page/page-workflows-publish-1b.webp
    :width: 85 %
    :align: center
    :alt: Workflow - Request publish through the toolbar at the top

|

Initiate Publish batch checked through the dashboard:

.. image:: /_static/images/page/page-workflows-publish2.webp
    :width: 85 %
    :align: center
    :alt: Workflow - Request batch items for publish through Dashboard

|

Initiate Publish by clicking on the three dots next to the content from the Sidebar:

.. image:: /_static/images/page/page-workflows-publish3a.webp
    :width: 30 %
    :align: center
    :alt: Workflow - Request publish by right clicking on content in nav tree

|

.. image:: /_static/images/page/page-workflows-publish3b.webp
    :width: 45 %
    :align: center
    :alt: Workflow - Request publish by right clicking on content in nav tree

|

When sending the request for publish, you have the option of requesting to publish your content now,
    or to schedule publishing of your content at a later time and date.

.. image:: /_static/images/page/page-workflows-request-publish-now.webp
    :width: 65 %
    :align: center
    :alt: Workflow - Request publish now dialog

|

.. image:: /_static/images/page/page-workflows-request-publish-later.webp
     :width: 65 %
     :align: center
     :alt: Workflow - Request publish later dialog

|

Users with permission to publish can also make changes and request approval for publishing their changes
    by checking the ``Request approval`` checkbox in the Publish dialog

.. image:: /_static/images/page/page-workflows-request-publish.webp
     :width: 65 %
     :align: center
     :alt: Workflow - Request publish approval dialog

|

To make approval mandatory for publish requests for users with publish permission,
see :ref:`here <project-config-require-peer-review>`.

After clicking on the **Submit** or **Schedule** button (depending on the option selected for publishing
now or later), a notification email will be sent to the project's approvers. Notice also, that the
toolbar now displays the icon for **Submitted**

.. image:: /_static/images/page/page-workflows-submitted-context-nav.webp
     :width: 75 %
     :align: center
     :alt: Workflow - Request publish submitted context nav updated icon and text

|

You'll also notice the **Submitted** icon is displayed next to the content item in the Sidebar for the
content you just submitted a request for publish and contains the text **Submitted for live**

.. image:: /_static/images/page/page-workflows-submitted-nav-tree.webp
     :width: 25 %
     :align: center
     :alt: Workflow - Request publish submitted Sidebar nav tree content updated icon

|

The **Submitted** icon also appears next to the content submitted for publish in the dashboard:

.. image:: /_static/images/page/page-workflows-submitted-dashboard.webp
     :width: 85 %
     :align: center
     :alt: Workflow - Request publish submitted dashboard updated icon

|

^^^^^^^^^^^^^^^^^^
Publishing Content
^^^^^^^^^^^^^^^^^^

After a request for publish has been sent, the next step in the workflow is for an approver (a user with
publishing rights) to approve or reject the request for publishing. Notification emails are sent out when
an item has been approved for publish or rejected.

Approve & Publish Request
^^^^^^^^^^^^^^^^^^^^^^^^^
To approve content for publishing, there are a few ways to access the **Publish** workflow option for
approving a publish request.  One way is by going to the dashboard, then in the
**Pending Approval** dashlet, look for the article you want to approve, then put a check
mark next to it.

.. image:: /_static/images/page/page-workflows-dashboard-approve.webp
     :width: 75 %
     :align: center
     :alt: Workflow - Approve & publish dashboard option

|

Another way to access the **Publish** option is by going to the Sidebar, then navigate to the article you
want to approve, then click on **Options** (the three dots next to it).

.. image:: /_static/images/page/page-workflows-nav-tree-approve.webp
     :width: 40 %
     :align: center
     :alt: Workflow - Approve & publish Sidebar nav tree option

|

Yet another way to access the **Publish** option is by going to the Sidebar and then navigating to the
article and opening it for preview. After opening the article for preview, go to the toolbar and click
on **Options** (three dots) next to the address bar.

.. image:: /_static/images/page/page-workflows-context-nav-approve.webp
     :width: 85 %
     :align: center
     :alt: Workflow - Approve & publish context nav option

|

You can also preview the article that you want to approve by clicking on the link provided in the email
sent to the approver, which should give you the **Publish** option too in the toolbar **Options**.
Below is a sample notification email sent to the approver when user *author* sent a request to publish
content. To modify/setup your notification emails, please contact your site administrator. To see more
details on how to configure your notification emails, see the section for Site Administrators in
:ref:`configure-notifications`

.. image:: /_static/images/page/page-workflows-notification-email-reviewer.webp
     :width: 40 %
     :align: center
     :alt: Workflow - Notification email to approve/reject request to approver

|

Below is the dialog that loads after clicking on **Publish**. The item scheduling selected in the dialog
depends on what the requester has chosen when the request to publish was sent. In the image below. the
selected scheduling for the item is for the **Now**. Click on **Publish** to publish the content now.

.. image:: /_static/images/page/page-workflows-approve-publish-now.webp
     :width: 75 %
     :align: center
     :alt: Workflow - Approve publish now

|

In the image below, the requester sent the request to publish with a schedule. Click on the **Schedule**
button to schedule the publishing of the item. The dialog with the date and time when selecting the **Later**
radio button allows the approver to schedule or reschedule the submitted item.

.. image:: /_static/images/page/page-workflows-approve-publish-later.webp
     :width: 75 %
     :align: center
     :alt: Workflow - Approve publish later

|

Once an item has been scheduled to be published, notice the workflow icon next to the article in the
**Sidebar** nav tree, the dashboard and in the context nav when you preview the scheduled for publish item.

.. image:: /_static/images/page/page-workflows-context-nav-scheduled.webp
     :width: 75 %
     :align: center
     :alt: Workflow - Context nav scheduled Icon

|

.. image:: /_static/images/page/page-workflows-dashboard-scheduled.webp
     :width: 75 %
     :align: center
     :alt: Workflow - Dashboard scheduled Icon

|

.. image:: /_static/images/page/page-workflows-nav-tree-scheduled.webp
     :width: 30 %
     :align: center
     :alt: Workflow - Nav tree scheduled Icon

|

The dashboard allows batches of scheduled and non-scheduled items to be pushed live at the same time.
Clicking on **Publish** will change the schedule of all items to be pushed live at the same time.

.. image:: /_static/images/page/page-workflows-batch-approve-request.webp
     :width: 85 %
     :align: center
     :alt: Workflow - Batch approve request to publish

|

Reject Publish Request
^^^^^^^^^^^^^^^^^^^^^^

To reject a request for publish, open the item for preview, then in the toolbar ``Options``, select **Reject**.
Another way to access the **Reject** option is by opening the dashboard and placing a check mark next to the
item to be rejected, **Reject** should now be available in the context nav.

.. image:: /_static/images/page/page-workflows-context-nav-reject.webp
    :width: 75 %
    :align: center
    :alt: Workflow - Reject request to publish from toolbar

|

.. image:: /_static/images/page/page-workflows-dashboard-reject.webp
    :width: 75 %
    :align: center
    :alt: Workflow - Reject request to publish from dashboard

|

.. image:: /_static/images/page/page-workflows-nav-tree-reject.webp
    :width: 50 %
    :align: center
    :alt: Workflow - Reject request to publish from Sidebar

|

Approvers may type their own rejection comments or pick canned rejection reasons from the drop-down menu.
Once selected, the editable text area field will be filled with the corresponding rejection notice / ready
for comments in the ``Rejection Comment`` box.

.. image:: /_static/images/page/page-workflows-reject.webp
    :width: 65 %
    :align: center
    :alt: Workflow - Reject request to publish

|

Once an item has been rejected, a notification email will be sent to the requester. Below is an example
notification email of rejection:

.. image:: /_static/images/page/page-workflows-reject-notification-email.webp
    :width: 75 %
    :align: center
    :alt: Workflow - Rejection notification email

|
