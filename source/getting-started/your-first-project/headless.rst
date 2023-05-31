:is-up-to-date: False

.. index:: Your First Project

.. _your-first-headless-site:

=============================
Your First Project (headless)
=============================

.. TODO write this

In this section, we will create a project using an out-of-the-box blueprint called "Headless Store" and show you:

- how to add a new product to your project,
- how to publish the changes we created above
- how to retrieve a product from your project

It is assumed that you have followed the steps in the :ref:`Getting Started <getting-started>` to install CrafterCMS and login.

Let's get started building your first headless store app!

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating a Project from the Headless Store Blueprint
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
After logging in, you'll see the Projects screen (Below). Click on **Create Project**

.. image:: /_static/images/first-project/projects-screen.webp
   :width: 90 %
   :align: center
   :alt: Your First Headless Project - Projects Screen

|

In the **Create Project** screen, the user is presented with the available blueprints or the option to use a remote Git repository instead of selecting a blueprint from the list. To see all available blueprints, scroll through the dialog to see the default blueprints available out of the box from Crafter Studio including the option to use a remote Git repository to create a new project, and ``Public Marketplace`` blueprints which contains blueprints submitted to the `Crafter Marketplace GitHub App <https://github.com/marketplace/crafter-marketplace>`__

We're going to be using the "Headless Store Blueprint". Blueprints offer you a starting point for your website. New blueprints can be created and installed into the system. Click on **Use** for the "Headless Store Blueprint".

.. image:: /_static/images/first-project/create-project-choose-bp.webp
   :width: 90 %
   :align: center
   :alt: Your First Headless Project - Create Project: Choose a Blueprint

|

Give the project a friendly name for the **Project Name** and a description. Click on the ``Review`` button.

.. image:: /_static/images/first-project/create-project-basic-info-headless-store.webp
   :width: 90 %
   :align: center
   :alt: Your First Headless Project - Create project: Basic Information

|

The next step is to review your entries and finally create your new project. Click on the **Create Project** button and wait for the system to create your project based on the blueprint.

.. image:: /_static/images/first-project/create-project-review-create-headless-store.webp
   :width: 90 %
   :align: center
   :alt: Your First Headless Project - Create Project: Review and Create

|

A spinner will appear while it's creating the following: configuration, project content, and permissions based on the template provided by the blueprint.

.. image:: /_static/images/first-project/creating-spinner.webp
   :width: 90 %
   :align: center
   :alt: Your First Headless Project - Creating a Project Spinner Dialog

|

When it's done you will be taken to the preview of your project:

.. image:: /_static/images/first-project/home-page-headless-store.webp
   :width: 100 %
   :align: center
   :alt: Your First Headless Project - Preview

Your project is setup, we can now start adding/editing content!  To edit content you see on the page, click on the three dots next to the page url at the toolbar at the top, then select **Edit**. This will open a form (see below) where you can edit the page content.

.. image:: /_static/images/first-project/first-project-editing-content-headless-store.webp
   :width: 90 %
   :align: center
   :alt: Your First Headless Project - Editing Content

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a New Product to the Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We'll be adding a new product to the project. Notice that our headless store project is mostly made up of components, ``company`` and ``product`` components. To add a new product, open the Sidebar and navigate to ``/items/products``  In this case, we are adding a product under **items** -> **products**. Click on the three dots next to the folder ``products``, then select **New Content**

.. image:: /_static/images/first-project/first-project-new-content-headless-store.webp
   :width: 50 %
   :align: center
   :alt: Your First Headless Project - New Content

|

The item product component template will open and we can now start filling out the product properties. We'll be adding a plush bear product. We'll need to give it a name and an internal name - ``Bear``, a description - ``Plush bear``:

.. image:: /_static/images/first-project/first-project-headless-store-properties-1.webp
   :width: 80 %
   :align: center
   :alt: Your First Headless Project - Product Properties

|

Next we'll upload an image of the new product, select a tag for it if desired, give it a price and finally add/select the company the product is from by clicking on ``+Add`` in the ``Company`` field. For our example, we will be selecting ``Company 1`` by clicking on ``+Add`` -> ``Browse for Existing - Company Components`` -> ``Company 1`` then finally click on the ``Save & Close`` button to create our new product:

.. image:: /_static/images/first-project/first-project-headless-store-properties-2.webp
   :width: 80 %
   :align: center
   :alt: Your First Headless Project - Product Properties Next Part

|

Here’s the project, with our newly created product in the catalog.

.. image:: /_static/images/first-project/first-project-headless-store-new-product.webp
   :width: 100 %
   :align: center
   :alt: Your First Headless Project - Newly Created Product in Catalog

|

You can add more products/companies, or modify/remove the existing products/companies from the blueprint, depending on your needs. To remove or edit an existing product/company, navigate to the location of the product/company you want to edit/remove on the Sidebar. Right click on it, then select the action you would like to do on the item.

.. image:: /_static/images/first-project/first-project-headless-store-edit-item.webp
   :width: 50 %
   :align: center
   :alt: Your First Headless Project - Edit an Item

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Your New/Edited Items
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Your project is not yet published after creating the project from the Headless Store Blueprint. Once your project is published, if you make edits to any of the items or created new items, it will need to be published for your project consumers to see the changes. The first thing you need to do is to navigate to the item you want to publish in the Sidebar enabled by toggling on the Crafter logo with hamburger icon on the upper left hand corner of Studio. After navigating to the item you want to publish, click on the three dots next to the item you want to publish from the Sidebar, then click on **Publish**

.. image:: /_static/images/first-project/first-project-headless-store-publish.webp
   :width: 50 %
   :align: center
   :alt: Your First Headless Project - Publish Your New Content

|

You will then be prompted whether you want to publish the page now (**Now**), or publish the page at a later date and time (**Later**). If this is the first publish for the project, you will be warned that the whole project will be published

.. image:: /_static/images/first-project/first-project-publish-option.webp
   :width: 90 %
   :align: center
   :alt: Your First Website - Publish Options

|

For more information on content authoring, please see the documentation section: :ref:`Content Authoring <author>`

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Retrieving a Product from the Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We'll now try to retrieve a product from the project using one of the  content retrieval APIs available `here <../../_static/api/engine.html>`_.

For our example, let's say we're not sure of the urls for a certain product, so we'll use the `Get Children <../../_static/api/engine.html#tag/content/operation/getChildren>`_ to get a list of the products under ``/site/items/products``. Our project id is ``my-store``, which will be used by the ``crafterSite`` parameter to set a project value.

Here's the request that we'll be sending:

.. code-block:: text
   :caption: *Get Children request to get a list of products in the store*

   http://localhost:8080/api/1/site/content_store/children?url=/site/items/products&crafterSite=my-store

Here's how the response will look like:

.. code-block:: xml
   :caption: *Response to the Get Children request*

   <list>
     <item>
       <name>0f08bd09-622d-816f-4f81-f3975947d9af.xml</name>
       <url>/site/items/products/0f08bd09-622d-816f-4f81-f3975947d9af.xml</url>
       <descriptorUrl>/site/items/products/0f08bd09-622d-816f-4f81-f3975947d9af.xml</descriptorUrl>
       <descriptorDom>
         <component>
           <content-type>/component/product</content-type>
           <display-template/>
           <merge-strategy>inherit-levels</merge-strategy>
           <objectGroupId>0f08</objectGroupId>
           <objectId>0f08bd09-622d-816f-4f81-f3975947d9af</objectId>
           <file-name>0f08bd09-622d-816f-4f81-f3975947d9af.xml</file-name>
           <internal-name>Cards</internal-name>
           <name_s>Cards</name_s>
           <price_d>10.5</price_d>
           <categories_o>
             <item>
               <key>board</key>
               <value_smv>Board</value_smv>
             </item>
           </categories_o>
           <tags_o>
             <item>
               <key>groups</key>
               <value_smv>Groups</value_smv>
             </item>
           </tags_o>
           <image_s>/static-assets/images/products/cards.jpeg</image_s>
           <company_o>
             <item>
               <key>/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml</key>
               <value>Company 2</value>
               <include>/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml</include>
               <disableFlattening>false</disableFlattening>
             </item>
           </company_o>
           <description_html><p>Classic Cards</p></description_html>
           <createdDate>2017-05-12T16:47:33.000Z</createdDate>
           <createdDate_dt>2017-05-12T16:47:33.000Z</createdDate_dt>
           <lastModifiedDate>2017-05-15T17:19:26.000Z</lastModifiedDate>
           <lastModifiedDate_dt>2017-05-15T17:19:26.000Z</lastModifiedDate_dt>
           <disabled>false</disabled>
         </component>
       </descriptorDom>
       <isFolder>false</isFolder>
     </item>
     <item>
       <name>11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml</name>
       <url>/site/items/products/11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml</url>
       <descriptorUrl>/site/items/products/11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml</descriptorUrl>
       <descriptorDom>
         <component>
           <content-type>/component/product</content-type>
           <display-template/>
           <merge-strategy>inherit-levels</merge-strategy>
           <objectGroupId>11cc</objectGroupId>
           <objectId>11cc0cd3-55e4-ae2e-6f2d-a349486c0b84</objectId>
           <file-name>11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml</file-name>
           <internal-name>Plane</internal-name>
           <name_s>Plane</name_s>
           <price_d>5.5</price_d>
           <image_s>/static-assets/images/products/toy-plane.jpeg</image_s>
           <categories_o>
             <item>
               <key>cars</key>
               <value_smv>Cars</value_smv>
             </item>
           </categories_o>
           <tags/>
           <company_o>
             <item>
               <key>/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml</key>
               <value>Company 1</value>
               <include>/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml</include>
               <disableFlattening>false</disableFlattening>
             </item>
           </company_o>
           <description_html><p>Small toy plane</p></description_html>
           <createdDate>2017-05-11T20:6:23.000Z</createdDate>
           <createdDate_dt>2017-05-11T20:6:23.000Z</createdDate_dt>
           <lastModifiedDate>2017-05-12T16:27:53.000Z</lastModifiedDate>
           <lastModifiedDate_dt>2017-05-12T16:27:53.000Z</lastModifiedDate_dt>
         </component>
       </descriptorDom>
       <isFolder>false</isFolder>
     </item>
     ...
   </list>

To retrieve just one product, use `Get Item <../../_static/api/engine.html#tag/content/operation/getItem>`_ to get an item from the content store. Remember to set the ``crafterSite`` parameter when sending your request:

.. code-block:: text
   :caption: *Get Item request to get a product from the store*

   http://localhost:8080/api/1/site/content_store/item?url=/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml&crafterSite=my-store

.. code-block:: xml
   :caption: *Response to the Get Item request*

   <item>
     <name>72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml</name>
     <url>/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml</url>
     <descriptorUrl>/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml</descriptorUrl>
     <descriptorDom>
       <component>
         <content-type>/component/product</content-type>
         <display-template/>
         <merge-strategy>inherit-levels</merge-strategy>
         <objectGroupId>72f3</objectGroupId>
         <objectId>72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb</objectId>
         <file-name>72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml</file-name>
         <internal-name>Chess</internal-name>
         <name_s>Chess</name_s>
         <price_d>50</price_d>
         <categories_o>
           <item>
             <key>board</key>
             <value_smv>Board</value_smv>
           </item>
         </categories_o>
         <tags_o>
           <item>
             <key>groups</key>
             <value_smv>Groups</value_smv>
           </item>
           <item>
             <key>learning</key>
             <value_smv>Learning</value_smv>
           </item>
         </tags_o>
         <image_s>/static-assets/images/products/chess.jpeg</image_s>
         <company_o>
           <item>
             <key>/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml</key>
             <value>Company 2</value>
             <include>/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml</include>
             <disableFlattening>false</disableFlattening>
           </item>
         </company_o>
         <description_html><p>Chess</p></description_html>
         <createdDate>2017-05-12T16:1:58.000Z</createdDate>
         <createdDate_dt>2017-05-12T16:1:58.000Z</createdDate_dt>
         <lastModifiedDate>2017-05-12T16:24:38.000Z</lastModifiedDate>
         <lastModifiedDate_dt>2017-05-12T16:24:38.000Z</lastModifiedDate_dt>
       </component>
     </descriptorDom>
     <isFolder>false</isFolder>
   </item>
