===========================================================
Configure Simple Workflow Notifications and Dialog Messages
===========================================================

This document assumes version 2 of the notification service has been enabled.  A system administrator can assist in
configuring the notification service by following the following documentation :ref:`enable-studio-notifications`


------
Basics
------

All configuration for the notification system is done by a site admin (on a per site basis) in the following configuration file:

^^^^^
Where
^^^^^

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/cstudio/config/sites/SITEID/workflow-messaging-config.xml

            <notificationConfig>
               ...
            </notificationConfig>

^^^^^^^^^
Templates
^^^^^^^^^

Templates are managed in the config file mentioned above.  The template time is Freemarker (also known as FTL)
Variables are referenced in the template like `${VARIABLE}` or as part of a Freemarker statement like `<#list files as file>...</#list>`
Dates can be formatted like so: `scheduleDate?string["MMMMM dd, yyyy 'at' hh:mm a"]}`

A full guide to FTL can be found here: http://freemarker.org/

------------------
Template Variables
------------------

^^^^^^^^^^^^^^^^
Common Variables
^^^^^^^^^^^^^^^^

============================== ========================================================
Variable Name                  Description
============================== ========================================================
date                           Date for submission

files                          Collection of file objects in submission.
                               Usually iterated over `<#list files as file>...</#list>`

`file`.name                      File name including full repository path

`file`.internalName              File internal CMS label

submitter                      Content submitter object, has sub propeties

submitter.firstName            First name

submitter.lastName             Last Name

submitter.username             Authoring User Name / ID

submissionComments             String containing submission comments

scheduleDate                   Date content is scheduled for

siteName                       ID of the site

liveUrl                        Live Server URL base

authoringUrl                   Authoring Server URL base

============================== ========================================================




^^^^^^^^^^^^^^^^^^^^^^^
Deployment Error Notice
^^^^^^^^^^^^^^^^^^^^^^^


============================== ========================================================
Variable Name                  Description
============================== ========================================================
deploymentError                Error message on deployment.  Currently must be
                               addressed as ${deploymentError.toString()}

============================== ========================================================


--------------------------------
Configure Who Gets Notifications
--------------------------------


.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/cstudio/config/sites/SITEID/workflow-messaging-config.xml

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

----------------------------------------
Configure Studio Worflow Dialog Messages
----------------------------------------


.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/cstudio/config/sites/SITEID/workflow-messaging-config.xml

        <notificationConfig>
         <lang name="en">
                ...

                <generalMessages>
                    <content key="scheduling-policy"><![CDATA[The Marketing Team processes all Go Live requests each business day, between 4 and 6:00pmE, unless a specific date/time is requested.<br/><br/>All requests received after 4:00pmE may not be processed until the next business day.<br/><br/>If you have any questions about this policy or need a Go Live request processed immediately, please email the Web Marketing Operations Team.]]>
                    </content>
                </generalMessages>
                <cannedMessages>
                    <content  title="Not Approved" key="NotApproved"><![CDATA[Please make the following revisions and resubmit.]]></content>
                    <content  title="Incorrect Branding" key="IncorrectBranding"><![CDATA[This content uses incorrect or outdated terms, images, and/or colors. Please correct and re-submit.]]></content>
                    <content  title="Typos" key="Typos"><![CDATA[This content has multiple misspellings and/or grammatical errors. Please correct and re-submit.]]></content>
                    <content  title="Incorrect Branding" key="IB"><![CDATA[This content uses incorrect or outdated terms, images, and/or colors. Please correct and re-submit.]]></content>
                    <content  title="Broken Links" key="BrokenLinks"><![CDATA[This content has non-working links that may be due to incomplete and/or misspelled URLs.  Any links directing users to websites without the Acme.com primary navigation, or directing users to a document must open in a new browser window. Please correct and re-submit.]]></content>
                    <content  title="Needs Section Owner's Approval" key="NSOA"><![CDATA[This content needs the approval of its section's owner to insure there is no negative impact on other pages/areas of section, etc. Once you have their approval please email the Web Marketing Operations Team and re-submit this Go Live request.]]></content>
                </cannedMessages>
                <completeMessages>
                    <content  key="submitToGoLive"><![CDATA[An email notification has been sent to the Web Marketing Operations Team. Your content will be reviewed and (if approved) pushed live between 4:00pmE and 6:00pmE of the business day that the request was received. If this request is sent after business hours, it will be reviewed and (if approved) pushed live as soon as possible, the next business day.<br/><br/>If you need to make further revisions to this item, please re-submit this Go Live request after making them.<br/><br/>If this request needs immediate attention, please email the Web Marketing Operations team.]]></content>
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

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/cstudio/config/sites/SITEID/workflow-messaging-config.xml

        <notificationConfig>
            <lang name="en">
                ...
                <emailTemplates>
                    <emailTemplate key="deploymentError">
                            <body><![CDATA[
                                <html>
                                <body style=" font-size: 11pt;font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif; margin-top:0px">
                                <p style="margin-top:0px">
                                    The following content was unable to deploy:
                                </p>
                                <ul  style="color:#0000EE;">
                                    <#list files as file>
                                            <li>${file.internalName!file.name}</li>
                                    </#list>
                                </ul>
                                    Error:<br/>
                                    ${deploymentError.toString()}
                                <br/>
                            </body>
                            </html>
                        ]]></body>
                        <subject>Deployment error on site ${siteName}</subject>
                    </emailTemplate>
                    <emailTemplate key="contentApproval">
                            <body><![CDATA[
                                <#setting time_zone='EST'>
                                <html>
                                <body style=" font-size: 11pt;font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif; margin-top:0px">
                                <p style="margin-top:0px">
                                        <#if scheduleDate??>
                                            The following content has been scheduled for publishing on ${scheduleDate?string["MMMMM dd, yyyy 'at' hh:mm a"]} Eastern Time.
                                        <#else>
                                            The following content has been reviewed and approved.
                                        </#if>
                                    </p>
                                    <ul  style="color:#0000EE;">
                                        <#list files as file>
                                            <#if file.page>
                                            <li <#if file?has_next>style="margin-bottom: 0px"</#if>>
                                                <a href="${liveUrl}/${file.browserUri!""}">
                                                    ${file.internalName!file.name}
                                                </a>
                                            </li>
                                            </#if>
                                        </#list>
                                    </ul>
                                    <#if scheduleDate??>
                                        <p>You will receive a confirmation email when your content is published.</p>
                                    </#if>
                                </body>
                                </html>
                                ]]></body>
                    <subject><![CDATA[<#if scheduleDate??>WCM: Content Scheduled<#else>WCM: Content Approved</#if>]]></subject>
                    </emailTemplate>
                    <emailTemplate key="submitToApproval">
                            <body><![CDATA[
                                <#setting time_zone='EST'>
                                <html>
                            <body style=" font-size: 11pt;font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif; margin-top:0px">
                                    <p style="margin-top:0px">
                                        <span style="text-transform: capitalize;">${submitter.firstName!submitter.username} ${submitter.lastName}</span> has submitted items for your review.
                                    </p>
                                    <ul  style="color:#0000EE;">
                                        <#list files as file>
                                            <#if file.page>
                                                <li <#if file?has_next>style="margin-bottom: 0px"</#if>>
                                                <a href="${authoringUrl}/preview/#/?page=${file.browserUri!""}&site=SITENAME">
                                                    ${file.internalName!file.name}
                                                </a>
                                            </li>
                                            </#if>
                                        </#list>
                                    </ul>
                                    <br/><br/>
                                    <#if submissionComments?has_content>
                                        Comments:&nbsp;${submissionComments!""}
                                        <br/><br/>
                                    </#if>
                                    <a href="${authoringUrl}/site-dashboard">Click Here to Review Workflow</a>
                                    <br/>
                                </body>
                                </html>
                                ]]></body>
                    <subject>WCM Content Review</subject>
                    </emailTemplate>
                    <emailTemplate key="contentRejected">
                            <body><![CDATA[
                                <#setting time_zone='EST'>
                                <html>
                                 <body style=" font-size: 11pt;font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif; margin-top:0px">
                                    <p style="margin-top:0px">
                                        The following content has been reviewed and requires some revision before it can be approved.
                                    </p>
                                    <ul  style="color:#0000EE;">
                                      <#list files as file>
                                            <#if file.page>
                                            <li <#if file?has_next>style="margin-bottom: 0px"</#if>>
                                                <a href="${authoringUrl}/preview/#/?page=${file.browserUri!""}&site=SITENAME">
                                                    ${file.internalName!file.name}
                                                </a>
                                            </li>
                                            </#if>
                                        </#list>
                                    </ul>
                                    Reason:&nbsp;${rejectionReason!""}
                                    <br/>
                                </body>
                                </html>
                                ]]></body>
                    <subject>WCM Content Requires Revision</subject>
                    </emailTemplate>
                    </emailTemplates>
                </lang>
            </notificationConfig>
