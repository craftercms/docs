=============== ==========================================================
Name            Description
=============== ==========================================================
application     The ServletContext
request	        The current HttpServletRequest
response        The current HttpServletResponse
params	        An immutable Map with the current request parameter values
headers	        An immutable Map with the current request header values
cookies	        An immutable Map with the current request cookie values
session	        The current HttpSession, if it has been created
locale	        The current locale for the current user
authentication  The current authentication (if the user has logged in),
                created by the Crafter Security Provider
profile         The current profile (if the user has logged in),
                created by the Crafter Security Provider
=============== ==========================================================
