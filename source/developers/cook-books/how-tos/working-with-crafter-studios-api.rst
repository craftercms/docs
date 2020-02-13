.. _working-with-crafter-studios-api:

==================================
Working with Crafter Studio's APIs
==================================

In this section, we'll show the basics of interacting with Crafter Studio APIs by performing the following:

#. Authenticate
#. Get a list of projects under management
#. Write content to a project

We’ll use CURL, a ubiquitous Linux command tool as our client.

You can find the full Crafter Studio API for Crafter CMS version 3.0 here
http://docs.craftercms.org/en/3.0/developers/projects/studio/api/index.html

Most Crafter Studio API requires users to authenticate first.  When a user authenticates via the login API call, this establishes a session which is provided per J2EE in a **JSESSIONID** cookie.  Future calls must send this cookie.

Crafter Studio APIs are protected using a CSRF Token so all ``POST``, ``PUT`` and ``DELETE`` calls need to include a cookie named **XSRF-TOKEN** and a header named **X-XSRF-TOKEN** with a matching value to work.

As we'll see below, the Login API sends a header and a cookie CSRF/XSRF token value which must also be sent in subsequent calls. The value is arbitrary and is dictated by the caller. Strong values are more secure than predictable weak ones.

Let's begin:

#. **Authenticate**

   We’ll use the authenticate API
   http://docs.craftercms.org/en/3.0/developers/projects/studio/api/security/login.html

   .. code-block:: bash

       curl -d '{"username":"admin","password":"admin"}' --cookie "XSRF-TOKEN=A_VALUE" --header "X-XSRF-TOKEN:A_VALUE" --header "Content-Type: application/json" -v -X POST http://localhost:8080/studio/api/1/services/api/1/security/login.json

   |

   The first thing you’ll note is that we’re going to perform a ``POST``, passing the username and password as a JSON object.  In a production environment, you will want to use HTTPS.

   The next thing you will notice, we are passing a cookie ``XSRF-TOKEN`` and a header ``X-XSRF-TOKEN``.  The value passed for these are arbitrary.  They must match and they must be passed in all future PUT and POST API calls.  These are used to protect against certain cross-browser scripting attacks.  If you are using Studio APIs as part of a web client you want to make sure these values are randomly generated.

   After issuing the CURL command you will get back a response:

   .. code-block:: bash
      :linenos:

           * Trying ::1...
           * Trying 127.0.0.1...
           * Connected to localhost (127.0.0.1) port 8080 (#0)
           > POST /studio/api/1/services/api/1/security/login.json HTTP/1.1
           > Host: localhost:8080
           > User-Agent: curl/7.43.0
           > Accept: */*
           > Cookie: XSRF-TOKEN=A_VALUE
           > X-XSRF-TOKEN:A_VALUE
           > Content-Type: application/json
           > Content-Length: 39
           >
           * upload completely sent off: 39 out of 39 bytes
           < HTTP/1.1 200
           < Cache-Control: no-cache, no-store, max-age=0, must-revalidate
           < Pragma: no-cache
           < Expires: 0
           < Set-Cookie: JSESSIONID=2E114725C82F3EE44ADC04B578A3BE8F; Path=/studio; HttpOnly
           < Content-Type: application/json;charset=UTF-8
           < Content-Language: en-US
           < Transfer-Encoding: chunked
           < Date: Mon, 22 Jan 2018 21:32:48 GMT
           <
           * Connection #0 to host localhost left intact
           {"username":"admin","first_name":"admin","last_name":"admin","email":"evaladmin@example.com"}

   Note the response returned is a successful 200 status code and the response contains JSON with details for the authenticated user.

   Also found as part of the request is the ``JSESSIONID`` cookie.  You will need this value for all future requests.

#. **Get a list of projects under management**

   We'll get a list of sites the user is authorized to work with
   http://docs.craftercms.org/en/3.0/developers/projects/studio/api/site/get-sites-per-user.html

   .. code-block:: bash

      curl --cookie "XSRF-TOKEN=A_VALUE;JSESSIONID=2E114725C82F3EE44ADC04B578A3BE8F" -H "X-XSRF-TOKEN:A_VALUE"  -X GET http://localhost:8080/studio/api/1/services/api/1/site/get-per-user.json?username=admin

   |

   Note the CURL command contains your session ID and XSRF tokens.
   After issuing the CURL command you will get a response that contains sites your user has access to:

   .. code-block:: bash

      {"sites":[{"id":9,"siteId":"ar","name":"ar","description":"","status":null,"liveUrl":null,"lastCommitId":"951004363449cc83209f307b1e9f110dab37fed7","publishingEnabled":1,"publishingStatusMessage":"idle|Idle","lastVerifiedGitlogCommitId":null},{"id":5,"siteId":"diiot","name":"diiot","description":"","status":null,"liveUrl":null,"lastCommitId":"92d543eaa164b1ebfbdd6ce538ae028d4d6421b7","publishingEnabled":0,"publishingStatusMessage":"idle|Idle","lastVerifiedGitlogCommitId":"92d543eaa164b1ebfbdd6ce538ae028d4d6421b7"},{"id":10,"siteId":"editorialcom","name":"editorialcom","description":"","status":null,"liveUrl":null,"lastCommitId":"503d922f226e8ab821073e23ef5a229f907212a0","publishingEnabled":1,"publishingStatusMessage":"","lastVerifiedGitlogCommitId":"503d922f226e8ab821073e23ef5a229f907212a0"},{"id":3,"siteId":"flow","name":"flow","description":"","status":null,"liveUrl":null,"lastCommitId":"21923775c3a1fc778a364d47884b9ee2bb4928a5","publishingEnabled":1,"publishingStatusMessage":"idle|Idle","lastVerifiedGitlogCommitId":"21923775c3a1fc778a364d47884b9ee2bb4928a5"},{"id":8,"siteId":"vr","name":"vr","description":"","status":null,"liveUrl":null,"lastCommitId":"c67fd9dd25d1aa59ff13e3fda2a4387be50dfc69","publishingEnabled":1,"publishingStatusMessage":"idle|Idle","lastVerifiedGitlogCommitId":null}],"total":6}

   |

   The response above contains a number of projects.  In the next call we will write a content object to one of the projects (editorialcom.) To do this we need the site ID.  We get this from the response above: **editorialcom**

#. **Write content to a project**

   We'll now write content to the Editorial com Project
   http://docs.craftercms.org/en/3.0/developers/projects/studio/api/content/write-content.html

   .. code-block:: bash

      curl -d "<page><content-type>/page/category-landing</content-type><display-template>/templates/web/pages/category-landing.ftl</display-template><merge-strategy>inherit-levels</merge-strategy><file-name>index.xml</file-name><folder-name>test3</folder-name><internal-name>test3</internal-name><disabled >false</disabled></page>" --cookie "XSRF-TOKEN=A_VALUE;JSESSIONID=2E114725C82F3EE44ADC04B578A3BE8F" -H "X-XSRF-TOKEN:A_VALUE"  -X POST "http://localhost:8080/studio/api/1/services/api/1/content/write-content.json?site=editorialcom&phase=onSave&path=/site/website/test3/index.xml&fileName=index.xml&user=admin&contentType=/page/category-landing&unlock=true"

   |

   In the call above note:

   We are passing in content as the POST body.  The content is in XML format.  In Crafter CMS, content objects are stored as simple XML documents.
   We are passing the Session ID and the XSRF tokens.
   We are passing a number of parameters that tell Crafter CMS where and how to store the content in the repository

Using the above examples as a guide, we can now interact with any Crafter Studio API found here:  http://docs.craftercms.org/en/3.0/developers/projects/studio/api/index.html.