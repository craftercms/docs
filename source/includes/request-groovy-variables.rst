+------------------------+--------------------------------------+---------------------------------+
| Name                   | Description                          | API                             |
+========================+======================================+=================================+
| request                || The current request                 || `HttpServletRequest`_          |
+------------------------+--------------------------------------+---------------------------------+
| response               || The current response                || `HttpServletResponse`_         |
+------------------------+--------------------------------------+---------------------------------+
| params                 || The parameter values for the current|| `Map`_                         |
|                        || request                             ||                                |
+------------------------+--------------------------------------+---------------------------------+
| headers                || The header values for the current   || `Map`_                         |
|                        || request                             ||                                |
+------------------------+--------------------------------------+---------------------------------+
| cookies                || The cookie values for the current   || `Map`_                         |
|                        || request                             ||                                |
+------------------------+--------------------------------------+---------------------------------+
| session                || The current session, if it has been || `HttpSession`_                 |
|                        || created                             ||                                |
+------------------------+--------------------------------------+---------------------------------+
| locale                 || The current locale for the current  || `Locale`_                      |
|                        || user                                ||                                |
+------------------------+--------------------------------------+---------------------------------+
| authentication         || The current authentication (if the  || |Authentication|               |
|                        || user has logged in), created by the ||                                |
|                        || Crafter Security Provider           ||                                |
+------------------------+--------------------------------------+---------------------------------+
| profile                || The current profile (if the user    || |Profile|                      |
|                        || has logged in), created by the      ||                                |
|                        || Crafter Security Provider           ||                                |
+------------------------+--------------------------------------+---------------------------------+

The following variables are restricted by default, to use them see :ref:`access-to-services`

+------------------------+--------------------------------------+---------------------------------+
| Name                   | Description                          | API                             |
+========================+======================================+=================================+
| application            || The servlet context                 || `ServletContext`_              |
+------------------------+--------------------------------------+---------------------------------+

.. _ServletContext: http://docs.oracle.com/javaee/6/api/javax/servlet/ServletContext.html
.. _HttpServletRequest: http://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServletRequest.html
.. _HttpServletResponse: http://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServletResponse.html
.. _Map: https://docs.oracle.com/javase/7/docs/api/java/util/Map.html
.. _HttpSession: http://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpSession.html
.. _Locale: https://docs.oracle.com/javase/7/docs/api/java/util/Locale.html
.. |Authentication| replace:: :javadoc_base_url:`Authentication <profile/org/craftercms/security/authentication/Authentication.html>`
.. |Profile| replace:: :javadoc_base_url:`Profile <profile/org/craftercms/profile/api/Profile.html>`
