.. _working-with-dates-in-groovy:

===========================================
Working with Dates and Time Zones in Groovy
===========================================


There are times when we need to do some date operations or parse dates or format dates to a desired format.  Groovy has extensions that allows us to work with dates more easily. We'll use a site created using the "Website_editorial" blueprint, and add a script that will run when we preview an article page.

First, let's set the time zone in Crafter Engine.  From the **Sidebar**, click on |siteConfig|, then click on **Configuration**.  Select **Engine Site Configuration** from the dropdown list, then enter the following into the configuration:

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <site>
        <timeZone>America/Los_Angeles</timeZone>
    </site>


We'll now create a controller by opening the **Sidebar**, then navigate to **scripts** -> **pages**, right click on **pages**, and select **Create Controller**, which we will then name **article.groovy**, which would make it execute before the article page is loaded.  We're now ready to show some examples of working with dates and times in Groovy.  We'll be performing operations on the contentModel variable **date_dt**, which is the date created of the article.  For more information on variables available in groovy scripts, see :ref:`groovy-api`

----------------
Formatting Dates
----------------
To format the date to a certain format pattern, which we then pass to a templateModel variable so we can use it in the Freemarker template, do the following:

.. code-block:: groovy

    def formattedDate = aDate.format("EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'")
    templateModel.formattedDate = formattedDate

Which will output this:

.. code-block:: text

    Tuesday, December 27, 2016, 09:00 PM (PST)


To format the date for a certain format pattern and time zone, do the following:

.. code-block:: groovy

    def formattedDate = aDate.format("EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'", TimeZone.getTimeZone("EST5EDT"))


Which will output this:

.. code-block:: text

    Wednesday, December 28, 2016, 12:00 AM (EST)

Let's show another example of formatting the date for a certain format pattern and using the time zone setup in the **Engine Site Configuration** file, by using the variable **siteConfig**:

.. code-block:: groovy

    def formattedDate = aDate.format("EEE, MMMM dd, yyyy, hh:mm a '('zzz')'", TimeZone.getTimeZone(siteConfig.getString("timeZone")))

Which will output this:

.. code-block:: text

    Tue, December 27, 2016, 09:00 PM (PST)

For more information on format patterns, see https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html

For more information on time zone offset, see https://docs.oracle.com/javase/7/docs/api/java/util/TimeZone.html

-------------
Parsing Dates
-------------

To convert a date string into a date object (so you can perform date arithmetic, get year, month, date values separately), do the following:

.. code-block:: groovy

    def nowString = "2017-Oct-26 11:45:23 PM"
    def nowDate = Date.parse("yyyy-MMM-dd hh:mm:ss a", nowString)

Which will output this for ``nowDate``:

.. code-block:: text

    Thu Oct 26 23:45:23 PDT 2017


--------------------------
Date Arithmetic Operations
--------------------------

We'll use the same example above to perform arithmetic operations on the date object.  There are two ways to perform the arithmetic operations on the date objects, using the ``plus`` and ``minus`` methods, and using the ``+`` and ``-`` operators.

Say, we want to find the date object 10 days after the date in our example above.  We will use the ``plus`` method and the ``+`` operator to increment the date by 10 days:

.. code-block:: groovy

    def nowString = "2017-Oct-26 11:45:23 PM"
    def nowDate = Date.parse("yyyy-MMM-dd hh:mm:ss a", nowString)
    def addDate = nowDate.plus(10)  // date arithmetic using the "plus" method
    def addDate2 = nowDate + 10     // date arithmetic using the "+" operator

Both ``addDate`` and ``addDate2``, will output:

.. code-block:: text

    Sun Nov 05 23:45:23 PST 2017

Now, if we want to find out the date object 30 days before the date in our example, we can use either the ``minus`` method or the ``-`` operator to decrement the date:

.. code-block:: groovy

    def subDate = nowDate.minus(30)  // date arithmetic using the "minus" method
    def subDate2 = nowDate - 30      // date arithmetic using the "-" operator

Both ``subDate`` and ``subDate2`` will output:

.. code-block:: text

    Tue Sep 26 23:45:23 PDT 2017

For more information on Groovy Date methods, see http://docs.groovy-lang.org/latest/html/groovy-jdk/java/util/Date.html