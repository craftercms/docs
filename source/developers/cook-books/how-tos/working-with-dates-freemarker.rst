:is-up-to-date: True

.. _working-with-dates-in-freemarker:

===============================================
Working with Dates and Time Zones in Freemarker
===============================================

There are times when we need to display dates in a certain format.  Things that we may want to format the dates displayed are dates in Email templates, dates in web pages, etc.  Freemarker has built-ins for dates to help with formatting displays.  To use a built-in, you need to use a ``?``, then the built-in.

Let's look at some examples on how to use the Freemarker date built-ins.  We'll use a site created by using the Website_editorial blueprint.

First, let's set the time zone in Crafter Engine.  From the **Sidebar**, click on |siteConfig|, then click on **Configuration**.  Select **Engine Site Configuration** from the dropdown list, then enter the following into the configuration:

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <site>
        <timeZone>America/Los_Angeles</timeZone>
    </site>

We can now use the time zone we specified in the Engine Site Configuration file.  To access the time zone from the configuration, we use the freemarker variable ``siteConfig`` provided by Crafter Engine to templates.  For more information on other variables available in the template, please see :ref:`templating-api`

We'll now edit the ``article.ftl`` template file, to display the date/time the article was created.

-------------------------------
Using Freemarker Date Built-ins
-------------------------------
To display just the date, no time, on when the article was created, we can access the contentModel variable ``date_dt``, and add to the template under the author:

.. code-block:: html

    <h1>${contentModel.subject!""}</h1>
    <h2>by ${contentModel.author!""}</h2>
    <h3>${contentModel.date_dt?date}</h3>

Which will display the following::

    Top Books For Young Women
    by Jane Doe
    Dec 28, 2016

To display the date and time:

.. code-block:: html
   :force:

    <h3>${contentModel.date_dt?datetime}</h3}


Which will output this:

.. code-block:: text

    2016-12-28T05:00:00.000Z


To display the date and time with some formatting:

.. code-block:: html

    <h3>${contentModel.date_dt?datetime?string["EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'"]}</h3>


Which will output this:

.. code-block:: text

    Wednesday, December 28, 2016, 05:00 AM (UTC)


As you can see from the last two examples, the date and time the article was created is in UTC.  If we want to display it in the time zone specified in the `Engine Site Configuration` file, do the following:

.. code-block:: html

    <h3>${contentModel.date_dt?datetime?iso(siteConfig.getString("timeZone"))}</h3>


Which will output this:

.. code-block:: text

     2016-12-27T21:00:00-08:00


----------------------------------------------------
Using the Freemarker time_zone and date_time Setting
----------------------------------------------------

If we want to set the time zone used by the template to display dates, Freemarker provides a ``time_zone`` setting.  Once you set the time zone, all date displays will be in the time zone specified.  Let's set all the date and time display in the time zone we specified in the `Engine Site Config` file.

.. code-block:: html
    :force:

    <#setting time_zone = siteConfig.getString("timeZone")>
    <h3>${contentModel.date_dt?datetime}</h3>

Which will display:

.. code-block:: text

    2016-12-27T21:00:00.000-08


If we want all date and time displays to follow a certain format, we can use the ``datetime_format`` setting.

.. code-block:: html
    :force:

    <#setting datetime_format = "EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'">


Which will display the same time as the previous example, but in the format specified:

.. code-block:: text

    Tuesday, December 27, 2016, 09:00 PM (PST)



For more information on Freemarker date built-ins, see http://freemarker.org/docs/ref_builtins_date.html
For more information on Freemarker directive setting, see http://freemarker.org/docs/ref_directive_setting.html