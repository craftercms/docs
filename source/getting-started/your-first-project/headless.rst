:is-up-to-date: True
:last-updated: 4.1.1

.. index:: Your First Project

.. _your-first-headless-site:

=============================
Your First Project (headless)
=============================
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
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Projects Screen

|

In the **Create Project** screen, the user is presented with the available blueprints or the option to use a remote Git repository instead of selecting a blueprint from the list. To see all available blueprints, scroll through the dialog to see the default blueprints available out of the box from Crafter Studio including the option to use a remote Git repository to create a new project, and blueprints from the `Crafter Marketplace <https://craftercms.com/marketplace>`__.

We're going to be using the "Headless Store Blueprint". Blueprints offer you a starting point for your website. New blueprints can be created and installed into the system. Click on **Use** for the "Headless Store Blueprint".

.. image:: /_static/images/first-project/create-project-choose-bp.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Create Project: Choose a Blueprint

|

Give the project a friendly name for the **Project Name** and a description. Click on the ``Review`` button.

.. image:: /_static/images/first-project/create-project-basic-info-headless-store.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Create project: Basic Information

|

The next step is to review your entries and finally create your new project. Click on the **Create Project** button and wait for the system to create your project based on the blueprint.

.. image:: /_static/images/first-project/create-project-review-create-headless-store.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Create Project: Review and Create

|

A spinner will appear while it's creating the following: configuration, project content, and permissions based on the template provided by the blueprint.

.. image:: /_static/images/first-project/creating-spinner.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Creating a Project Spinner Dialog

|

When it's done you will be taken to the preview of your project:

.. image:: /_static/images/first-project/home-page-headless-store.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Preview

Your project is setup, we can now start adding/editing content!  To edit content you see on the page, click on the three dots next to the page url at the toolbar at the top, then select **Edit**. This will open a form (see below) where you can edit the page content.

.. image:: /_static/images/first-project/first-project-editing-content-headless-store.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Editing Content

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding a New Product to the Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We'll be adding a new product to the project. Notice that our headless store project is mostly made up of components, ``company`` and ``product`` components. To add a new product, open the Sidebar and navigate to ``/items/products``  In this case, we are adding a product under **items** -> **products**. Click on the three dots next to the folder ``products``, then select **New Content**

.. image:: /_static/images/first-project/first-project-new-content-headless-store.webp
   :width: 45 %
   :align: center
   :alt: Your First Headless Project - New Content

|

The item product component template will open and we can now start filling out the product properties. We'll be adding a plush bear product. We'll need to give it a name and an internal name - ``Bear``, a description - ``Plush bear``:

.. image:: /_static/images/first-project/first-project-headless-store-properties-1.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Product Properties

|

Next we'll upload an image of the new product, select a tag for it if desired, give it a price and finally add/select the company the product is from by clicking on ``+Add`` in the ``Company`` field. For our example, we will be selecting ``Company 1`` by clicking on ``+Add`` -> ``Browse for Existing - Company Components`` -> ``Company 1`` then finally click on the ``Save & Close`` button to create our new product:

.. image:: /_static/images/first-project/first-project-headless-store-properties-2.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Product Properties Next Part

|

Here’s the project, with our newly created product in the catalog.

.. image:: /_static/images/first-project/first-project-headless-store-new-product.webp
   :width: 65 %
   :align: center
   :alt: Your First Headless Project - Newly Created Product in Catalog

|

You can add more products/companies, or modify/remove the existing products/companies from the blueprint, depending on your needs. To remove or edit an existing product/company, navigate to the location of the product/company you want to edit/remove on the Sidebar. Right click on it, then select the action you would like to do on the item.

.. image:: /_static/images/first-project/first-project-headless-store-edit-item.webp
   :width: 45 %
   :align: center
   :alt: Your First Headless Project - Edit an Item

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Publishing Your New/Edited Items
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Your project is not yet published after creating the project from the Headless Store Blueprint. Once your project is published, if you make edits to any of the items or created new items, it will need to be published for your project consumers to see the changes. The first thing you need to do is to navigate to the item you want to publish in the Sidebar enabled by toggling on the Crafter logo with hamburger icon on the upper left hand corner of Studio. After navigating to the item you want to publish, click on the three dots next to the item you want to publish from the Sidebar, then click on **Publish**

.. image:: /_static/images/first-project/first-project-headless-store-publish.webp
   :width: 45 %
   :align: center
   :alt: Your First Headless Project - Publish Your New Content

|

You will then be prompted whether you want to publish the page now (**Now**), or publish the page at a later date and time (**Later**). If this is the first publish for the project, you will be warned that the whole project will be published

.. image:: /_static/images/first-project/first-project-publish-option.webp
   :width: 65 %
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

   http://localhost:8080/api/1/site/content_store/children.json?url=/site/items/products&crafterSite=my-store

Here's how the response will look like:

.. code-block:: json
   :caption: *Response to the Get Children request*

   [
     {
       "name": "0f08bd09-622d-816f-4f81-f3975947d9af.xml",
       "url": "/site/items/products/0f08bd09-622d-816f-4f81-f3975947d9af.xml",
       "descriptorUrl": "/site/items/products/0f08bd09-622d-816f-4f81-f3975947d9af.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "0f08",
           "objectId": "0f08bd09-622d-816f-4f81-f3975947d9af",
           "file-name": "0f08bd09-622d-816f-4f81-f3975947d9af.xml",
           "internal-name": "Cards",
           "name_s": "Cards",
           "price_d": "10.5",
           "categories_o": {
             "item": {
               "key": "board",
               "value_smv": "Board"
             }
           },
           "tags_o": {
             "item": {
               "key": "groups",
               "value_smv": "Groups"
             }
           },
           "image_s": "/static-assets/images/products/cards.jpeg",
           "company_o": {
             "item": {
               "key": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "value": "Company 2",
               "include": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Classic Cards</p>",
           "createdDate": "2017-05-12T16:47:33.000Z",
           "createdDate_dt": "2017-05-12T16:47:33.000Z",
           "lastModifiedDate": "2017-05-15T17:19:26.000Z",
           "lastModifiedDate_dt": "2017-05-15T17:19:26.000Z",
           "disabled": "false"
         }
       },
       "properties": null,
       "folder": false
     },
     {
       "name": "11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml",
       "url": "/site/items/products/11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml",
       "descriptorUrl": "/site/items/products/11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "11cc",
           "objectId": "11cc0cd3-55e4-ae2e-6f2d-a349486c0b84",
           "file-name": "11cc0cd3-55e4-ae2e-6f2d-a349486c0b84.xml",
           "internal-name": "Plane",
           "name_s": "Plane",
           "price_d": "5.5",
           "image_s": "/static-assets/images/products/toy-plane.jpeg",
           "categories_o": {
             "item": {
               "key": "cars",
               "value_smv": "Cars"
             }
           },
           "tags": null,
           "company_o": {
             "item": {
               "key": "/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml",
               "value": "Company 1",
               "include": "/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Small toy plane</p>",
           "createdDate": "2017-05-11T20:6:23.000Z",
           "createdDate_dt": "2017-05-11T20:6:23.000Z",
           "lastModifiedDate": "2017-05-12T16:27:53.000Z",
           "lastModifiedDate_dt": "2017-05-12T16:27:53.000Z"
         }
       },
       "properties": null,
       "folder": false
     },
     {
       "name": "167f4a61-a9a2-54ec-a87d-6195634c65dd.xml",
       "url": "/site/items/products/167f4a61-a9a2-54ec-a87d-6195634c65dd.xml",
       "descriptorUrl": "/site/items/products/167f4a61-a9a2-54ec-a87d-6195634c65dd.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "167f",
           "objectId": "167f4a61-a9a2-54ec-a87d-6195634c65dd",
           "file-name": "167f4a61-a9a2-54ec-a87d-6195634c65dd.xml",
           "internal-name": "Rubik's",
           "name_s": "Rubik's",
           "price_d": "15",
           "categories_o": {
             "item": {
               "key": "board",
               "value_smv": "Board"
             }
           },
           "tags_o": {
             "item": {
               "key": "learning",
               "value_smv": "Learning"
             }
           },
           "image_s": "/static-assets/images/products/cube.jpg",
           "company_o": {
             "item": {
               "key": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "value": "Company 2",
               "include": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Classic Rubik&#39;s Cube</p>",
           "createdDate": "2017-05-12T16:43:17.000Z",
           "createdDate_dt": "2017-05-12T16:43:17.000Z",
           "lastModifiedDate": "2017-05-12T16:50:30.000Z",
           "lastModifiedDate_dt": "2017-05-12T16:50:30.000Z"
         }
       },
       "properties": null,
       "folder": false
     },
     {
       "name": "72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
       "url": "/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
       "descriptorUrl": "/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "72f3",
           "objectId": "72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb",
           "file-name": "72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
           "internal-name": "Chess",
           "name_s": "Chess",
           "price_d": "50",
           "categories_o": {
             "item": {
               "key": "board",
               "value_smv": "Board"
             }
           },
           "tags_o": {
             "item": [
               {
                 "key": "groups",
                 "value_smv": "Groups"
               },
               {
                 "key": "learning",
                 "value_smv": "Learning"
               }
             ]
           },
           "image_s": "/static-assets/images/products/chess.jpeg",
           "company_o": {
             "item": {
               "key": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "value": "Company 2",
               "include": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Chess</p>",
           "createdDate": "2017-05-12T16:1:58.000Z",
           "createdDate_dt": "2017-05-12T16:1:58.000Z",
           "lastModifiedDate": "2017-05-12T16:24:38.000Z",
           "lastModifiedDate_dt": "2017-05-12T16:24:38.000Z"
         }
       },
       "properties": null,
       "folder": false
     },
     {
       "name": "89b4a941-8bad-cf6b-4c0c-3baf52baa003.xml",
       "url": "/site/items/products/89b4a941-8bad-cf6b-4c0c-3baf52baa003.xml",
       "descriptorUrl": "/site/items/products/89b4a941-8bad-cf6b-4c0c-3baf52baa003.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "89b4",
           "objectId": "89b4a941-8bad-cf6b-4c0c-3baf52baa003",
           "file-name": "89b4a941-8bad-cf6b-4c0c-3baf52baa003.xml",
           "internal-name": "Car",
           "name_s": "Car",
           "price_d": "10.0",
           "image_s": "/static-assets/images/products/toy-car.jpg",
           "categories_o": {
             "item": {
               "key": "cars",
               "value_smv": "Cars"
             }
           },
           "tags": null,
           "company_o": {
             "item": {
               "key": "/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml",
               "value": "Company 1",
               "include": "/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Small Car</p>",
           "createdDate": "2017-05-11T17:43:45.000Z",
           "createdDate_dt": "2017-05-11T17:43:45.000Z",
           "lastModifiedDate": "2017-05-12T16:28:29.000Z",
           "lastModifiedDate_dt": "2017-05-12T16:28:29.000Z"
         }
       },
       "properties": null,
       "folder": false
     },
     {
       "name": "9cab74a4-0198-6cf9-2798-93ad67aada05.xml",
       "url": "/site/items/products/9cab74a4-0198-6cf9-2798-93ad67aada05.xml",
       "descriptorUrl": "/site/items/products/9cab74a4-0198-6cf9-2798-93ad67aada05.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "9cab",
           "objectId": "9cab74a4-0198-6cf9-2798-93ad67aada05",
           "file-name": "9cab74a4-0198-6cf9-2798-93ad67aada05.xml",
           "internal-name": "Duck",
           "name_s": "Duck",
           "price_d": "15",
           "image_s": "/static-assets/images/products/duck.jpeg",
           "categories_o": {
             "item": {
               "key": "dolls",
               "value_smv": "Dolls"
             }
           },
           "tags": null,
           "company_o": {
             "item": {
               "key": "/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml",
               "value": "Company 1",
               "include": "/site/items/companies/8b868a29-3b70-a461-efa1-7b4555bdc60c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Small rubber duck.</p>",
           "createdDate": "2017-05-12T16:26:10.000Z",
           "createdDate_dt": "2017-05-12T16:26:10.000Z",
           "lastModifiedDate": "2017-05-12T16:26:10.000Z",
           "lastModifiedDate_dt": "2017-05-12T16:26:10.000Z"
         }
       },
       "properties": null,
       "folder": false
     },
     {
       "name": "ff16a7a8-1948-38e6-7808-5a590f60ff85.xml",
       "url": "/site/items/products/ff16a7a8-1948-38e6-7808-5a590f60ff85.xml",
       "descriptorUrl": "/site/items/products/ff16a7a8-1948-38e6-7808-5a590f60ff85.xml",
       "descriptorDom": {
         "component": {
           "content-type": "/component/product",
           "display-template": null,
           "merge-strategy": "inherit-levels",
           "objectGroupId": "ff16",
           "objectId": "ff16a7a8-1948-38e6-7808-5a590f60ff85",
           "file-name": "ff16a7a8-1948-38e6-7808-5a590f60ff85.xml",
           "internal-name": "Dice",
           "name_s": "Dice",
           "price_d": "2.5",
           "categories_o": {
             "item": {
               "key": "board",
               "value_smv": "Board"
             }
           },
           "tags": null,
           "image_s": "/static-assets/images/products/dices.jpeg",
           "company_o": {
             "item": {
               "key": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "value": "Company 2",
               "include": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
               "disableFlattening": "false"
             }
           },
           "description_html": "<p>Simple dice.</p>",
           "createdDate": "2017-05-12T16:37:36.000Z",
           "createdDate_dt": "2017-05-12T16:37:36.000Z",
           "lastModifiedDate": "2017-05-12T16:37:36.000Z",
           "lastModifiedDate_dt": "2017-05-12T16:37:36.000Z"
         }
       },
       "properties": null,
       "folder": false
     }
   ]

To retrieve just one product, use `Get Item <../../_static/api/engine.html#tag/content/operation/getItem>`_ to get an item from the content store. Remember to set the ``crafterSite`` parameter when sending your request:

.. code-block:: text
   :caption: *Get Item request to get a product from the store*

   http://localhost:8080/api/1/site/content_store/item.json?url=/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml&crafterSite=my-store

.. code-block:: json
   :caption: *Response to the Get Item request*

   {
     "name": "72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
     "url": "/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
     "descriptorUrl": "/site/items/products/72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
     "descriptorDom": {
       "component": {
         "content-type": "/component/product",
         "display-template": null,
         "merge-strategy": "inherit-levels",
         "objectGroupId": "72f3",
         "objectId": "72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb",
         "file-name": "72f3b00c-2baa-0a0d-da2a-5ed9be3f74eb.xml",
         "internal-name": "Chess",
         "name_s": "Chess",
         "price_d": "50",
         "categories_o": {
           "item": {
             "key": "board",
             "value_smv": "Board"
           }
         },
         "tags_o": {
           "item": [
             {
               "key": "groups",
               "value_smv": "Groups"
             },
             {
               "key": "learning",
               "value_smv": "Learning"
             }
           ]
         },
         "image_s": "/static-assets/images/products/chess.jpeg",
         "company_o": {
           "item": {
             "key": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
             "value": "Company 2",
             "include": "/site/items/companies/9ea03b5c-e199-5e07-aa60-1997dcefbd4c.xml",
             "disableFlattening": "false"
           }
         },
         "description_html": "<p>Chess</p>",
         "createdDate": "2017-05-12T16:1:58.000Z",
         "createdDate_dt": "2017-05-12T16:1:58.000Z",
         "lastModifiedDate": "2017-05-12T16:24:38.000Z",
         "lastModifiedDate_dt": "2017-05-12T16:24:38.000Z"
       }
     },
     "properties": null,
     "folder": false
   }