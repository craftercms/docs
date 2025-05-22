.. important::
    You can use the proxy to set headers for the server and client using the proxy. However, the proxy will NOT set headers
    when the URL is configured to go to Engine or the URL is not configured, which means it defaults to Engine. If you want
    to set headers in the response to the client when the proxy is pointed at the Engine, you must set the headers using
    the :ref:`Engine configuration <engine-configuration-properties>` rather than the proxy configuration.