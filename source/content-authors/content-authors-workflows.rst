.. index:: Workflows

..  _content_authors_workflows:

=========
Workflows
=========

This section describes the simple default workflow available from Crafter CMS.

----------------------------------
Workflow and Scheduled Deployments
----------------------------------

Workflow is the act of moving content through its lifecycle.  A simple workflow option that includes submission, review/reject and approve and publish immediate / publish on a schedule options are provided by default. Workflow options are available to specific content, such as pages or static assets, etc.  The available workflow options for users depends on the Role the users are assigned with.  As the content goes through the workflow options, notification emails are sent out to corresponding users based on the workflow option.  To setup the email addresses, please see the section **Site Administrators**, :ref:`configure-notifications` and  :ref:`users-group-management`. Below is a diagram showing the default workflow steps.

.. image:: /_static/images/page/page-workflow-diagram.png
    :width: 95 %
    :align: center
    :alt: Workflow - Diagram
    
We will be looking at the workflow steps in this section.  Workflow is managed through dialogs.  Below is a sample dialog:

.. image:: /_static/images/page/page-workflows.png
    :width: 75 %    
    :align: center
    :alt: Workflow - Sample dialog



^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Submitting Content for Approval
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After creating/editing content, a request to publish content can be done by clicking on **Request Publish**.  A **Request Publish** submission can be initiated from a preview screen through the context nav or by right clicking on the article in the **Sidebar** nav tree (for single items), or from the Dashboard (where items can be batch checked).

Request Publish through the context nav at the top:

.. image:: /_static/images/page/page-workflows-publish.png
    :width: 65 %
    :align: center
    :alt: Workflow - Request publish through the context nav

Request Publish batch checked through the dashboard:

.. image:: /_static/images/page/page-workflows-publish2.png
    :width: 65 %
    :align: center
    :alt: Workflow - Request batch items for publish through Dashboard

Request Publish by right clicking on the content from the **Sidebar** nav tree:

.. image:: /_static/images/page/page-workflows-publish3.png
    :width: 35 %
    :align: center
    :alt: Workflow - Request publish by right clicking on content in nav tree

When sending the request for publish, you have the option of requesting to publish your content now, or to schedule publishing of your content at a later time and date.

.. image:: /_static/images/page/page-workflows-request-publish-now.png
    :width: 55 %
    :align: center
    :alt: Workflow - Request publish now dialog

.. image:: /_static/images/page/page-workflows-request-publish-later.png
     :width: 55 %
     :align: center
     :alt: Workflow - Request publish later dialog

After clicking on the **Submit** button, a notification email will be sent to the site's approvers.  Notice also, that the context nav now displays the icon for **In Workflow** and contains the text **Submitted for Publish**

.. image:: /_static/images/page/page-workflows-submitted-context-nav.png
     :width: 50 %
     :align: center
     :alt: Workflow - Request publish submitted context nav updated icon and text

You'll also notice the **In Workflow** icon is displayed next to the content item in the **Sidebar** nav tree for the content you just submitted a request for publish.

.. image:: /_static/images/page/page-workflows-submitted-nav-tree.png
     :width: 35 %
     :align: center
     :alt: Workflow - Request publish submitted Sidebar nav tree content updated icon

The **In Workflow** icon also appears next to the content submitted for publish in the dashboard:

.. image:: /_static/images/page/page-workflows-submitted-dashboard.png
     :width: 75 %
     :align: center
     :alt: Workflow - Request publish submitted dashboard updated icon


^^^^^^^^^^^^^^^^^^
Publishing Content
^^^^^^^^^^^^^^^^^^

After a request for publish has been sent, the next step in the workflow is for an approver (a user with publishing rights) to approve or reject the request for publishing.  Notification emails are sent out when an item has been approved for publish or rejected.

Approve Publish Request
^^^^^^^^^^^^^^^^^^^^^^^
To approve content for publishing, there are a few ways to access the **Approve & Publish** workflow option.
One way is by going to the dashboard, then in the **Items Waiting For Approval** widget, look for the article you want to approve, then put a check mark next to it.

.. image:: /_static/images/page/page-workflows-dashboard-approve.png
     :width: 75 %
     :align: center
     :alt: Workflow - Approve & publish dashboard option

Another way to access the **Approve & Publish** option is by going to the **Sidebar**, then navigate to the article you want to approve, then right click on it.

.. image:: /_static/images/page/page-workflows-nav-tree-approve.png
     :width: 40 %
     :align: center
     :alt: Workflow - Approve & publish Sidebar nav tree option

Yet another way to access the **Approve & Publish** option is by going to the **Sidebar** and then navigating to the article and opening it for preview.  After opening the article for preview, the **Approve & Publish** option should appear on the context nav.

.. image:: /_static/images/page/page-workflows-context-nav-approve.png
     :width: 75 %
     :align: center
     :alt: Workflow - Approve & publish context nav option


You can also preview the article that you want to approve by clicking on the link provided in the email sent to the approver, which should give you the **Approve & Publish** option too in the context nav.  Below is a sample notification email sent to the approver when user *noobauthor* sent a request to publish content.  To modify/setup your notification emails, please contact your site administrator.  To see more details on how to configure your notification emails, see the section for Site Administrators in :ref:`configure-notifications`

.. image:: /_static/images/page/page-workflows-notification-email-reviewer.png
     :width: 75 %
     :align: center
     :alt: Workflow - Notification email to approve/reject request to approver

Below is the dialog that loads after clicking on **Approve & Publish**.  The item scheduling selected in the dialog depends on what the requester has chosen when the request to publish was sent.  In the image below. the selected scheduling for the item is for the **Items should go live now**.  Click on **Submit** to publish the content now.

.. image:: /_static/images/page/page-workflows-approve-publish-now.png
     :width: 75 %
     :align: center
     :alt: Workflow - Approve publish now

In the image below, the requester sent the request to publish with a schedule.  Click on the **Submit** button to schedule the publishing of the item.  The dialog with the calendar and time when selecting the publish on a schedule radio button allows the approver to schedule or reschedule the submitted item.

.. image:: /_static/images/page/page-workflows-approve-publish-later.png
     :width: 75 %
     :align: center
     :alt: Workflow - Approve publish later

Once an item has been scheduled to be published, notice the workflow icon next to the article in the **Sidebar** nav tree, the dashboard and in the context nav when you preview the scheduled for publish item.

.. image:: /_static/images/page/page-workflows-context-nav-scheduled.png
     :width: 75 %
     :align: center
     :alt: Workflow - Context nav scheduled Icon

.. image:: /_static/images/page/page-workflows-dashboard-scheduled.png
     :width: 75 %
     :align: center
     :alt: Workflow - Dashboard scheduled Icon

.. image:: /_static/images/page/page-workflows-nav-tree-scheduled.png
     :width: 50 %
     :align: center
     :alt: Workflow - Nav tree scheduled Icon

The dashboard allows batches of scheduled and non-scheduled items to be pushed live at the same time.  Clicking on **Items should go live now**  or **Items go live on a specific date & time** will change the schedule of all items to be pushed live at the same time.

.. image:: /_static/images/page/page-workflows-batch-approve-request.png
     :width: 75 %
     :align: center
     :alt: Workflow - Batch approve request to publish

Reject Publish Request
^^^^^^^^^^^^^^^^^^^^^^

To reject a request for publish, open the item for preview, then in the context nav, select **Reject**.  Another way to access the **Reject** option is by opening the dashboard and placing a check mark next to the item to be rejected, **Reject** should now be available in the context nav.

.. image:: /_static/images/page/page-workflows-context-nav-reject.png
    :width: 75 %
    :align: center
    :alt: Workflow - Reject request to publish

Approvers may pick canned rejection reasons from the drop-down menu. Once selected, the editable text area field will be filled with the corresponding rejection notice.

.. image:: /_static/images/page/page-workflows-reject.png
    :width: 75 %    
    :align: center
    :alt: Workflow - Reject request to publish

Once an item has been rejected, a notification email will be sent to the requester.  Below is an example notification email of rejection:

.. image:: /_static/images/page/page-workflows-reject-notification-email.png
    :width: 75 %
    :align: center
    :alt: Workflow - Rejection notification email


