:is-up-to-date: True

.. _crafter-engine-api-crafter-controller-component:

=============
Get Component
=============

Get a component.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-controller/component``                                |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``HTML``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| path             || String     || |checkmark|  || The component's url                         |
||                  ||            ||              || (e.g /site/components/headers/header.xml)   |
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../crafter-controller/component.html?path=/site/components/features/4be0a368-783c-8f73-7469-63a62636bd4c.xml``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: xml

  <article   data-studio-component="/site/components/features/4be0a368-783c-8f73-7469-63a62636bd4c.xml"
    data-studio-component-path="/site/components/features/4be0a368-783c-8f73-7469-63a62636bd4c.xml"
    data-studio-ice="" data-studio-ice-label="Five" data-studio-ice-path="/site/components/features/4be0a368-783c-8f73-7469-63a62636bd4c.xml"
  >
    <span class="icon fa-signal"></span>
    <div class="content">
      <h3>Five</h3>
      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
    </div>
  </article>

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
