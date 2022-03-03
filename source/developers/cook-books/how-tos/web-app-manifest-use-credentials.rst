:is-up-to-date: True

.. index:: Web manifest usage in CrafterCMS, How to use a manifest with CrafterCMS, Web App Manifest, Manifest

=================================
Web Manifest Usage in CrafterCMS
=================================

Some web apps use a ``web app manifest``, a file that describes the web application.

From `Google <https://developers.google.com/web/fundamentals/web-app-manifest>`_:

   The web app manifest is a simple JSON file that tells the browser about your web application and how it should behave when ‘installed’ on the user’s mobile device or desktop.

To tell the browser about the manifest, a link tag is added to all pages of your site:

    .. code-block:: html

       <link rel="manifest" href="/manifest.json">

    |

To allow the web app manifest to use cookies and credentials, ``crossOrigin="use-credentials"`` must be specified in the manifest tag.

    .. code-block:: html

       <link rel="manifest" href="/manifest.json" crossorigin="use-credentials">

    |

CrafterCMS requires cookies to be sent for site selection.  If your site/app uses a ``web app manifest``, we need to allow the ``web app manifest`` to use cookies and credentials.

Let's take a look at an example of a site in CrafterCMS that uses a ``web app manifest``, and how to allow it to use cookies and credentials.

Create a site using the ``Video Center`` blueprint, available from the **marketplace** tab in the ``Create Site`` dialog.
Below is an example of where we would add ``crossOrigin="use-credentials"`` in the manifest tag to allow the ``web app manifest`` to use cookies and credentials.

Open the **Sidebar** then navigate to ``static-assets/app``, then right click on ``index.html`` and select ``Edit``

.. image:: /_static/images/guides/pwa/edit-manifest-tag.png
   :alt: Web App Manifest - Open "index.html"
   :width: 40 %
   :align: center

|

Scroll to the manifest tag then add ``crossOrigin="use-credentials"`` like below:

.. code-block:: html
   :linenos:
   :emphasize-lines: 11

   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <meta name="theme-color" content="#000000">
       <!--
         manifest.json provides metadata used when your web app is added to the
         homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
       -->
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" crossorigin="use-credentials">

|

Please note that if the app is built from a CLI which writes the index.html, it should be edited on the source file rather than the build output.