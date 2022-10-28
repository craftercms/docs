
.. note::

   Remember that when using private key SSH authentication, the private key path must be set explicitly using
   the ``-k`` option.  Here's an example:

   .. code-block:: text

      init-site -k ~/.ssh/jdoe_key myeditorial ssh://myserver/opt/crater/sites/myeditorial
