:is-up-to-date: True

.. index:: Using Components in the Rich Text Editor (RTE)

.. _inserting-links-to-pages-in-rte:

======================================================
Inserting Links to Pages in the Rich Text Editor (RTE)
======================================================

Users sometimes need to link to a page in the site to selected text in their document.
This section details how to setup the Rich Text Editor (RTE) to allow a user to browse or search for pages and insert links to them.

-----------------------------
Basic Setup and Configuration
-----------------------------

#. Open the content type with the Rich Text Editor (RTE) to be setup.  Open the **Sidebar** and click on |siteConfig| and select **Content Types**.  Select the content type with the RTE you'd like to setup, then click on the **Open Type** button.
#. Setup the data source to select a page from the site.  From the content model definition, go to the **Data Sources** panel and drag ``File Browse`` to the the ``Data Sources`` section of the form and fill in the following properties:

   * Title : Data source title to show on the form e.g. ``Pages``
   * Name : Name of variable to store the final result in e.g. ``pages``
   * Repository Path : Path where to browse the pages from e.g. ``/site/website``

#. Bind the data source setup above to the RTE.  From the content model definition, click on the RTE you want to be able to browse or search for pages and insert links to them. Next, go to the **Properties Explorer** panel and scroll to the ``File Manager`` property.  Put a check mark on the box next to the data source previously setup to bind it to the RTE.

#. Click on the **Save** button to save your changes.  The RTE is now setup to allow a user to browse or search for pages and insert links to them.

-------
Example
-------

Let's take a look at an example using a site created using the ``Website Editorial`` blueprint.  We will setup the RTE in the ``Page - Article`` content type to allow a user to browse or search for pages and insert links to them.  We will first setup the RTE, then see it in action.

#. Open the content type with the Rich Text Editor (RTE) to be setup.  Open the **Sidebar** and click on |siteConfig| and select **Content Types**.  Click on **Open Existing Type**, and select the content type ``Page - Article`` then click on the **Open Type** button.

#. Setup the data source to select a page from the site.  From the content model definition, go to the **Data Sources** panel and drag ``File Browse`` to the the ``Data Sources`` section of the form.

   .. figure:: /_static/images/developer/rte-add-file-browse-ds.jpg
      :alt: Allow user to browse pages and insert link - add "File Browse" data source
      :width: 75%
      :align: center

   |

   Fill in the following properties:

   * Title : Pages
   * Name : pages
   * Repository Path : /site/website

   .. figure:: /_static/images/developer/rte-setup-ds-for-page-link.jpg
      :alt: Allow user to browse pages and insert link - data source setup
      :width: 75%
      :align: center

   |

#. Bind the data source setup above to the RTE.  From the content model definition, click on the RTE ``Section``. Next, go to the **Properties Explorer** panel and scroll to the ``File Manager`` property.  Put a check mark on the box next to ``Pages``, the data source previously setup, to bind it to the RTE.

   .. figure:: /_static/images/developer/rte-link-bind-ds.jpg
      :alt: Allow user to browse pages and insert link - bind the data source to RTE
      :width: 75%
      :align: center

   |

#. Click on the ``Save`` button.

Let's now take a look at the data source we setup and bound to the RTE in action.

#.  Preview the article ``Coffee is Good for Your Health`` by either opening the **Sidebar** and navigating to ``/articles/2016/6/coffee-is-good-for-your-health`` or, from the ``Home`` page, click on the ``Health`` category, then click on ``Coffee is Good for Your Health``

#. Edit the article, then scroll down to the ``Section``
#. Select a word in the RTE.  For our example, let's highlight the first word, ``Class``, then click on ``Insert/edit link`` from the toolbar

   .. figure:: /_static/images/developer/rte-select-word.jpg
      :alt: Allow user to browse pages and insert link - select "Class" then click on "Insert/edit link"
      :width: 75%
      :align: center

   |

#. Click on the button next to ``URL`` then select ``Pages``.  This is the data source we setup.

   .. figure:: /_static/images/developer/rte-insert-edit-link.png
      :alt: Allow user to browse pages and insert link - Click on button next to "URL" then click on "Pages"
      :width: 35%
      :align: center

   |

#. Select a page to link to.  We will link the page ``/article/2017/2/top-romantic-valentine-movies`` to the selected text in our RTE

   .. figure:: /_static/images/developer/rte-select-page-to-link-to.jpg
      :alt: Allow user to browse pages and insert link - Click on button next to "URL" then click on "Pages"
      :width: 55%
      :align: center

   |

#. Save the link.

   .. figure:: /_static/images/developer/rte-save-link.jpg
      :alt: Allow user to browse pages and insert link - Save the link"
      :width: 35%
      :align: center

   |

#. The link is now setup.

   .. figure:: /_static/images/developer/rte-link-to-page-created.jpg
      :alt: Allow user to browse pages and insert link - Link created on word "Class" in RTE"
      :width: 75%
      :align: center

   |