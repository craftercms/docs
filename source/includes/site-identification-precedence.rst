Crafter Engine and Crafter Studio identify which site a user is looking at by a number of different mechanisms
with the following precedence:

- Headers
- QSA (Query String Parameters e.g. ``crafterSite``)
- Cookie

Additionally, if the cookie is not aligned, the cookie is to be reset to what's above it.