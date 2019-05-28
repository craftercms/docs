:is-up-to-date: True

.. index:: Configure Simple Workflow Notifications and Dialog Messages

.. _configure-notifications:

===========================================================
Configure Simple Workflow Notifications and Dialog Messages
===========================================================

Crafter Studio provides a simple workflow option that includes submission, review/reject and approve and
publish immediate / publish on a schedule options.  This document covers the configuration of the HTML notifications
that can be sent at each point in the workflow.  To setup your email server, please see the section **System Administrators**, :ref:`studio-config-override`

------
Basics
------

All configuration for the notification system is done by a site admin (on a per site basis) in the following configuration file:


Where
-----

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/notifications.xml

        <notificationConfig>
            ...
        </notificationConfig>

This can be modified/accessed through Crafter Studio, by going to the **Sidebar**, then clicking on |siteConfig| -> **Configuration** -> **Notification Configuration**

.. image:: /_static/images/site-admin/notification-config-open.png
    :align: center
    :alt: Configuration - Open Notification Configuration

Templates
---------

Templates are used for the email messages sent for workflow states in the configuration file mentioned above.  The template used is Freemarker (also known as FTL).
Variables are referenced in the template like `${VARIABLE}` or as part of a Freemarker statement like `<#list files as file>...</#list>`
Dates can be formatted like so: `scheduleDate?string["MMMMM dd, yyyy 'at' hh:mm a"]}`

A full guide to FTL can be found here: http://freemarker.org/

------------------
Template Variables
------------------

Here are some template variables used in Crafter CMS:

Common Variables
----------------

+-----------------------------+-----------------------------------------------------------+
|| Variable Name              || Description                                              |
+=============================+===========================================================+
|| date                       || Date for submission                                      |
+-----------------------------+-----------------------------------------------------------+
|| files                      || Collection of file objects in submission.                |
||                            || Usually iterated over `<#list files as file>...</#list>` |
+-----------------------------+-----------------------------------------------------------+
|| `file`.name                || File name including full repository path                 |
+-----------------------------+-----------------------------------------------------------+
|| `file`.internalName        || File internal CMS label                                  |
+-----------------------------+-----------------------------------------------------------+
|| submitter                  || Content submitter object, has sub properties             |
+-----------------------------+-----------------------------------------------------------+
|| submitter.firstName        || First name                                               |
+-----------------------------+-----------------------------------------------------------+
|| submitter.lastName         || Last Name                                                |
+-----------------------------+-----------------------------------------------------------+
|| submitter.username         || Authoring User Name / ID                                 |
+-----------------------------+-----------------------------------------------------------+
|| submissionComments         || String containing submission comments                    |
+-----------------------------+-----------------------------------------------------------+
|| scheduleDate               || Date content is scheduled for                            |
+-----------------------------+-----------------------------------------------------------+
|| siteName                   || ID of the site                                           |
+-----------------------------+-----------------------------------------------------------+
|| liveUrl                    || Live Server URL base                                     |
+-----------------------------+-----------------------------------------------------------+
|| authoringUrl               || Authoring Server URL base                                |
+-----------------------------+-----------------------------------------------------------+



Deployment Error Notice Variable
--------------------------------


+-----------------------------+---------------------------------------------------------+
|| Variable Name              || Description                                            |
+=============================+=========================================================+
|| deploymentError            || Error message on deployment.  Currently must be        |
||                            || addressed as ${deploymentError.toString()}             |
+-----------------------------+---------------------------------------------------------+

--------------------------------
Configure Who Gets Notifications
--------------------------------

Configure who gets notifications by entering the email addresses of the people you want to send notifications to, in between the tags ``<deploymentFailureNotification>`` and/or ``<approverEmails>``

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/notifications.xml
    :linenos:

        <notificationConfig>
            <lang name="en">
                <deploymentFailureNotification>
                    <email>EMAIL ADDRESS TO NOTIFY ON FAILURE</email>
                </deploymentFailureNotification>
                <approverEmails>
                    <email>EMAIL ADDRESS TO NOTIFY SUBMISSION</email>
                        <email>EMAIL ADDRESS TO NOTIFY SUBMISSION</email>
                </approverEmails>

                ...
             </lang>
        </notificationConfig>

-----------------------------------------
Configure Studio Workflow Dialog Messages
-----------------------------------------

Below is a sample of Studio workflow dialog messages defined in our notifications configuration file.

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/notifications.xml
    :linenos:

        <notificationConfig>
         <lang name="en">
              ...

           <generalMessages>
               <content key="scheduling-policy"><![CDATA[The {siteName} processes all publishing requests each business day, between 4PM EST and 6PM EST, unless a specific date/time is requested.<br/><br/>All requests received after 4PM EST may not be processed until the next business day.<br/><br/>If you have any questions about this policy or need a publish request processed immediately, please email the administrator.]]>
               </content>
           </generalMessages>

           <cannedMessages>
               <content  title="Not Approved" key="NotApproved"><![CDATA[Please make the following revisions and resubmit.]]></content>
               <content  title="Typos" key="Typos"><![CDATA[This content has multiple misspellings and/or grammatical errors. Please correct and re-submit.]]></content>
               <content  title="Incorrect Branding" key="IB"><![CDATA[This content uses incorrect or outdated terms, images, and/or colors. Please correct and re-submit.]]></content>
               <content  title="Broken Links" key="BrokenLinks"><![CDATA[This content has non-working links that may be due to incomplete and/or misspelled URLs.  Any links directing users to websites without the Acme.com primary navigation, or directing users to a document must open in a new browser window. Please correct and re-submit.]]></content>
               <content  title="Needs Section Owner's Approval" key="NSOA"><![CDATA[This content needs the approval of its section&apos;s owner to insure there is no negative impact on other pages/areas of section, etc. Once you have their approval please email the Web Marketing Operations Team and re-submit this publish request.]]></content>
           </cannedMessages>

           <completeMessages>
               <content key="submitToGoLive"><![CDATA[An email notification has been sent to the team. Your content will be reviewed and (if approved) pushed live between 4PM EST and 6PM EST of the business day that the request was received. If this request is sent after business hours, it will be reviewed and (if approved) pushed live as soon as possible, the next business day.<br/><br/>If you need to make further revisions to this item, please re-submit this publish request after making them.<br/><br/>If this request needs immediate attention, please email the administrator.]]></content>
               <content key="delete">
                   Item(s) has been pushed for delete. It will be deleted shortly.
               </content>
               <content key="go-live">Item(s) has been pushed live. It will be visible on the live site shortly.</content>
               <content key="schedule-to-go-live">The scheduled item(s) will go live on: ${date}.&lt;br/&gt;&lt;br/&gt;</content>
               <content key="reject">Rejection has been sent. Item(s) have NOT been pushed live and have returned to draft state.</content>
               <content key="delete">Item(s) has been pushed for delete. It will be deleted shortly.</content>
               <content key="schedule-to-go-live">Item(s) have been scheduled to go live.</content>
           </completeMessages>

                ...
          </lang>
        </notificationConfig>

-------------------
Configure Templates
-------------------

Below is an example of a configured email messages for each point in the workflow, found in between the tag <emailTemplates> in the notifications configuration file.

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/notifications.xml
    :linenos:

        <notificationConfig>
            <lang name="en">
                ...
            <emailTemplates>
               <emailTemplate key="deploymentError">
                   <subject>Deployment error on site ${siteName}</subject>
                   <body><![CDATA[
                           <html>
                               <head>
                                   <meta charset="utf-8"/>
                               </head>
                               <body style=" font-size: 12pt;">
                                   <p>
                                       The following content was unable to deploy:
                                       <ul>
                                           <#list files as file>
                                                   <li>${file.internalName!file.name}</li>
                                           </#list>
                                       </ul>
                                           Error:<br/>
                                           ${deploymentError.toString()}
                                       <br/><br/>
                                       <a href="${liveUrl}" >
                                           <img style="max-width: 350px;  max-height: 350px;" src="${liveUrl}/static-assets/images/workflow-email-footer.png" alt="" />
                                       </a>
                                   </p>
                               </body>
                           </html>
        ]]></body>
               </emailTemplate>

               <emailTemplate key="contentApproval">
                   <subject><![CDATA[<#if scheduleDate??>Content Scheduled <#else>Content Approved</#if>]]></subject>
                   <!-- Timezone can/is being overwritten in the following template -->
                   <body><![CDATA[
                           <#setting time_zone='EST'>
                           <html>
                               <head>
                                   <meta charset="utf-8"/>
                               </head>
                               <body style=" font-size: 12pt;">
                                   <p>
                                       <#if scheduleDate??>
                                           The following content has been scheduled for publishing on ${scheduleDate?string["MMM dd, yyyy 'at' hh:mm a"]} Eastern Time.
                                       <#else>
                                           The following content has been reviewed and approved by ${approver.firstName!approver.username} ${approver.lastName!""}:
                                       </#if>
                                  <ul>
                                     <#list files as file>
                                           <#if file.page>
                                               <a href="${liveUrl}/${file.browserUri!""}">
                                              </#if>
                                          <li>${file.internalName!file.name}</li>
                                           <#if file.page>
                                             </a>
                                         </#if>
                                       </#list>
                                   </ul><br/>
                                   <#if scheduleDate??>
                                       <a href="${liveUrl}">Click Here to View Your Published Content</a>
                                       <br/>
                                   </#if>
                                   <a href="${authoringUrl}/site-dashboard" >
                                       <img style="max-width: 350px;  max-height: 350px;" src="${liveUrl}/static-assets/images/workflow-email-footer.png" alt="" />
                                   </a>
                                   </p>
                               </body>
                           </html>
                           ]]></body>
               </emailTemplate>

               <emailTemplate key="submitToApproval">
                   <subject>Content Review</subject>
                   <body><![CDATA[
                       						<#setting time_zone='EST'>
                           <html>
                           <head>
                               <meta charset="utf-8"/>
                           </head>
                           <body style=" font-size: 12pt">
                               <p>
                                   ${submitter.firstName!submitter.username} ${submitter.lastName} has submitted items for your review:
                                 <ul>
                                 <#list files as file>
                                   	<#if file.page>
                                     	<a href="${authoringUrl}/preview/#/?page=${file.browserUri!""}&site=${siteName}">
                                          </#if>
       	                           <li>${file.internalName!file.name}</li>
                                     	<#if file.page>
   	                                  </a>
                                     </#if>
                                   </#list>
                               </ul>
                               <#if submissionComments?has_content>
                               Comments:<br/>
                                   ${submissionComments!""}
                                   <br/>
                               </#if><br/>
                               <a href="${previewUrl}/site-dashboard">Click Here to View Content Waiting for Approval</a>
                               <br/><br/>
           <a href="${liveUrl}" >
               <img style="max-width: 350px;  max-height: 350px;" src="${liveUrl}/static-assets/images/workflow-email-footer.png" alt="" />
           </a>
        </p>
                           </body>
                           </html>
                           ]]></body>
               </emailTemplate>

               <emailTemplate key="contentRejected">
                   <subject>Content Requires Revision</subject>
                   <body><![CDATA[
   						<#setting time_zone='EST'>
                           <html>
                               <head>
                                   <meta charset="utf-8"/>
                               </head>
                                <body style=" font-size: 12pt;">
                                   <p>
                                       The following content has been reviewed and requires some revision before it can be approved:
                                       <ul>
                                     <#list files as file>
                                           <#if file.page>
                                               <a href="${authoringUrl}/preview/#/?page=${file.browserUri!""}&site=${siteName}">
                                              </#if>
                                          <li>${file.internalName!file.name}</li>
                                           <#if file.page>
                                             </a>
                                         </#if>
                                       </#list>
                                   </ul>
                                   Reason:<br/>
                                       ${rejectionReason!""}
                                   <br/><br/>
                                   <a href="${authoringUrl}/site-dashboard" >
                                       <img style="max-width: 350px;  max-height: 350px;" src="${liveUrl}/static-assets/images/workflow-email-footer.png" alt="" />
                                   </a>
                                   </p>
                               </body>
                           </html>
                           ]]></body>
               </emailTemplate>
           </emailTemplates>
           </lang>
        </notificationConfig>
