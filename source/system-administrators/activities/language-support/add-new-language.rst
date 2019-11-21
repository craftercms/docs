:is-up-to-date: True

.. index:: Adding a New Language, Language Support

.. _language-support-add-new:

=====================
Adding a New Language
=====================

Crafter Studio has been translated into a number of languages.  Here's a list of currently supported languages along with the language codes used in Studio:

* ``en`` - English
* ``sp`` - Spanish
* ``de`` - German
* ``kr`` - Korean

To reach more users, additional languages may need to be added in Crafter Studio.

**Here are the steps to add a new language in Crafter Studio:**

#. Add translations file for the Studio user dashboard ``studio-ui/static-assets/scripts/resources/locale-**.json``
#. Add the translations file for everything else not in the dashboard ``studio-ui/static-assets/components/cstudio-common/resources/**/base.js``
#. Add the new language to the ``get-available-languages`` API
#. Add the new language to the react translations manager
#. Update templates to add the new language imports into the runtime (i.e. via script[src] elements)
#. Build, deploy and test your changes

**where:**

``**`` is the language code for the new language being added to Crafter Studio

Before we begin, we need to pick the two letter language code for the new language we are adding for Crafter Studio.  You can use `ISO 639 language codes <https://www.iso.org/iso-639-language-codes.html>`_ for reference.  So, say, we are adding Japanese, from the ISO 639 language codes, we will be using ``ja``

Let's begin adding the language ``Japanese`` to Crafter Studio:

------------------------------------------------------
1. Add translations file for the Studio user Dashboard
------------------------------------------------------

* To add a new language for the user dashboard, in your ``studio-ui`` code, under the folder ``studio-ui/static-assets/scripts/resources/``, create a new file ``locale-**.json`` where ``**`` is the two letter language code. We'll use ``ja`` for Japanese as our example here.
* Copy the contents from one of the existing json files, ``locale-en.json`` and paste it into the new file, ``locale-ja.json``.
* Start translating the content in your ``locale-ja.json`` file, then save your changes

    .. code-block:: guess
       :caption: *studio-ui/static-assets/scripts/resources/locale-ja.json*
       :linenos:

       {
         "dashboard": {
           "login": {
             "EMAIL": "Eメール",
             "USERNAME": "Username",
             ...

---------------------------------------------------------------------
2. Add the translations file for everything else not in the Dashboard
---------------------------------------------------------------------

* To add the translations file for everything else not in the dashboard, in your ``studio-ui`` code, navigate to ``studio-ui/static-assets/components/cstudio-common/resources/``.  Create a folder using the two letter language code for the new language being added, ``studio-ui/static-assets/components/cstudio-common/resources/ja``
* Copy the file ``studio-ui/static-assets/components/cstudio-common/resources/en/base.js`` and paste it into the newly created folder
* Start translating the content in ``studio-ui/static-assets/components/cstudio-common/resources/ja/base.js`` and save your changes

    .. code-block:: js
       :caption: *studio-ui/static-assets/components/cstudio-common/resources/ja/base.js*
       :linenos:

       CStudioAuthoring.Messages.registerBundle("siteDashboard", "ja", {
       dashboardTitle: "ダッシュボード",

       dashboardCollapseAll: "Collapse All",
       ...

Remember to change the language code in the all the ``registerBundle`` calls in the ``base.js`` file

  .. code-block:: js

     CStudioAuthoring.Messages.registerBundle("dialogs", "ja", {

----------------------------------------------------------
3. Add the new language to the get-available-languages API
----------------------------------------------------------

* To add the new language to the ``get-available-languages`` API (*/studio/api/1/services/api/1/server/get-available-languages.json*), in your ``studio`` code, navigate to ``studio/src/main/webapp/default-site/scripts/rest/api/1/server`` and open the ``get-available-languages.get.groovy`` file
* Add the new language to the file:

  .. code-block:: groovy
     :emphasize-lines: 14-16
     :linenos:

     def result = []
    	result[0] = [:]
    	result[0].id = "en"
    	result[0].label = "English"
    	result[1] = [:]
    	result[1].id = "es"
    	result[1].label = "español"
    	result[2] = [:]
    	result[2].id = "kr"
    	result[2].label = "한국어"
    	result[3] = [:]
    	result[3].id = "de"
    	result[3].label = "Deutsch"
        result[4] = [:]
        result[4].id = "ja"
        result[4].label = "日本語"
     return result

---------------------------------------------------------
4. Add the new language to the react translations manager
---------------------------------------------------------
* To add the new language to the react translations manager, in your ``studio-ui`` code, navigate to ``studio-ui/ui/app/scripts`` folder then open the file ``i18n.js``
* Add the new language code to the ``languages`` list and save your changes

  .. code-block:: js
     :emphasize-lines: 5
     :linenos:
     :caption: *studio-ui/ui/app/scripts/i18n.js*

     manageTranslations({
       messagesDirectory: './src/translations/src',
       translationsDirectory: './src/translations/locales/',
       whitelistsDirectory: './src/translations/whitelists',
       languages: ['en', 'es', 'de', 'ko', 'ja']
     });

* Open the command line and navigate to ``studio-ui/ui/app/scripts`` folder and run the following commands to update and generate the ``ja.json`` file:

  * *yarn i18n:extract*
  * *yarn i18n:manage*

  |

  Here's some of the output when running the above commands:

  .. code-block:: bash
     :linenos:
     :emphasize-lines: 1,5

     ➜  scripts git:(develop) ✗ yarn i18n:extract
     yarn run v1.13.0
     $ NODE_ENV=production babel ./src --extensions '.ts,.tsx' --out-file /dev/null
     ✨  Done in 3.15s.
     ➜  scripts git:(develop) ✗ yarn i18n:manage
     yarn run v1.13.0
     $ node scripts/i18n.js

* After generating the ``ja.json`` locale file from above, open the file in your ``studio-ui`` code by navigating to ``/studio-ui/ui/app/src/translations/locales/``, then open the ``ja.json`` file and start translating the content

  .. code-block:: guess

     {
       "blueprint.by": "バイ",
       "blueprint.crafterCMS": "Crafter CMS",
       "blueprint.license": "ライセンス",
       ...


--------------------------------------------------------------------
5. Update templates to add the new language imports into the runtime
--------------------------------------------------------------------

* We now need to update templates to add the new language imports into the runtime (i.e. via script[src] elements).  In your ``studio-ui`` code, navigate to ``studio-ui/templates/web/``.  The following templates need to be updated:

  * preview.ftl
  * form.ftl
  * site-config.ftl

* Add the new language imports ``<script src="/studio/static-assets/components/cstudio-common/resources/ja/base.js?version=${UIBuildId!.now?string('Mddyyyy')}"></script>`` into the files listed above:

  .. code-block:: guess
     :linenos:
     :emphasize-lines: 6
     :caption: *studio-ui/templates/web/preview.ftl*

     <#include "/templates/web/common/page-fragments/head.ftl" />
     <script src="/studio/static-assets/components/cstudio-common/resources/en/base.js?version=${UIBuildId!.now?string('Mddyyyy')}"></script>
     <script src="/studio/static-assets/components/cstudio-common/resources/kr/base.js?version=${UIBuildId!.now?string('Mddyyyy')}"></script>
     <script src="/studio/static-assets/components/cstudio-common/resources/es/base.js?version=${UIBuildId!.now?string('Mddyyyy')}"></script>
     <script src="/studio/static-assets/components/cstudio-common/resources/de/base.js?version=${UIBuildId!.now?string('Mddyyyy')}"></script>
     <script src="/studio/static-assets/components/cstudio-common/resources/ja/base.js?version=${UIBuildId!.now?string('Mddyyyy')}"></script>

--------------------------------------
6. Build, deploy and test your changes
--------------------------------------

Don't forget to build and deploy.  To test your changes, from the login screen, click on the language dropdown box, and you should see the new language we just added.

.. image:: /_static/images/system-admin/login-new-lang.png
   :align: center
   :width: 35 %
   :alt: Japanese Language Added

