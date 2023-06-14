:is-up-to-date: False
:last-updated: 4.1.0

.. _custom-error-pages:

==================
Custom Error Pages
==================

.. TODO: Elaborate this article with more detail, and explain additional error pages like 403, etc. and explain default behavior and templates.

When Crafter Engine detects an error trying to fulfill a request it will also look for a custom
error page to display in the browser, the process to add custom error pages is the following:

1. Create a new folder under ``/templates/web/errors``
2. Create a Freemarker template using as name the error code for which the page will be displayed, e.g., ``404.ftl``

In the custom error templates developers are free to include any HTML/CSS/JS to make sure that the page matches
the rest of the site.

.. note::
   Custom Error pages are standalone templates, they are not associated with any site item and will not have
   the ``model`` object available.

.. note::
   A valid context is required for custom error pages to render.  If Crafter Engine is not able to load your
   site context due to a configuration or some other error condition, you will receive a default system error page.

|
|

Once the file is saved it will be used automatically in preview, for a delivery node you need to publish
the new file so that it takes effect in the live site.

Example
^^^^^^^

Adding a Custom Error Page for the ``404 Not Found`` code:

.. figure:: /_static/images/error-page-default.webp
        :alt: Default Error Page
        :align: center

        Before adding a custom error page.

.. figure:: /_static/images/error-page-custom.webp
        :alt: Custom Error Page
        :align: center

        After adding a custom error page.