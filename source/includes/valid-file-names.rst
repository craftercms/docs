Crafter CMS supports the following characters in file and folder names:

``Alphanumeric, ,_,-,(,)``

as a regex:

``[a-zA-Z0-9-_  ()]+``

It's important to point out that Crafter Studio enforces this regex in its UI. However, if you're working outside of Studio (in your IDE, for example) and you violate these rules, problems may arise downstream, so it's best to stick the allowed characters.
