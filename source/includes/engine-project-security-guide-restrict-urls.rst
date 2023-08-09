
"""""""""""""
Restrict URLs
"""""""""""""

Sometimes it is not enough to restrict a single page. Sometimes you need to restrict an entire project subtree, or
restrict several static assets. For this, CrafterCMS provides configuration parameters that allow you to restrict
access based on URL patterns. You just need to add configuration similar to the following in Config > Engine Project Configuration:

.. code-block:: xml
    :linenos:

    <security>
        <urlRestrictions>
            <restriction>
                <url>/user/*</url>
                <expression>hasAnyRole({'user'\, 'admin'})</expression>
            </restriction>
        </urlRestrictions>
    </security>

The ``<urlRestrictions>`` can contain any number of ``<restriction>`` elements. Each restriction is formed by an
Ant-style path pattern (``<url>``) and a Spring EL expression (``<expression>``) executed against the current profile.
If a request matches the URL, and the expression evaluates to false, access is denied. The following expressions can
be used:

*   ``isAnonymous()``
*   ``isAuthenticated()``
*   ``hasRole('role')``
*   ``hasAnyRole({'role1'\, 'role2'})``
*   ``permitAll()``
*   ``denyAll()``

.. note::
   For the ``<url>`` Ant-style path pattern, ``<url>/*</url>`` indicates just one level of the URL and ``<url>/**</url>`` indicates all urls. For more information on Ant-style path pattern matching, see https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html

  For the *hasAnyRole* expression, remember to escape the comma ``,`` separating the roles inside the expression as shown above.
