:is-up-to-date: True

.. _crafter-core-api-content_store-tree:

========
Get Tree
========

Get the complete Item hierarchy under the specified folder in the content store.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || GET                                                        |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/content_store/tree``                              |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                          |
+----------------------------+-------------------------------------------------------------+

----------
Parameters
----------

+-------------+-------------+---------------+----------------------------------------------------+
|| Name       || Type       || Required     || Description                                       |
+=============+=============+===============+====================================================+
|| contextId  || String     || |checkmark|  || The context id                                    |
+-------------+-------------+---------------+----------------------------------------------------+
|| url        || String     || |checkmark|  || The folder's URL (e.g /site/website/)             |
+-------------+-------------+---------------+----------------------------------------------------+
|| depth      || Integer    ||              || Amount of levels to include (unlimited by default)|
+-------------+-------------+---------------+----------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: text

 GET .../api/1/content_store/tree.xml?contextId=405ffc233d075b010536bd2eb786b86c&url=/site/website/articles/2017

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "name": "2017",
    "url": "/site/website/articles/2017",
    "descriptorUrl": "/site/website/articles/2017.meta.xml",
    "descriptorDom": null,
    "properties": null,
    "children": [
      {
        "name": "1",
        "url": "/site/website/articles/2017/1",
        "descriptorUrl": "/site/website/articles/2017/1.meta.xml",
        "descriptorDom": null,
        "properties": null,
        "children": [
          {
            "name": "men-styles-for-winter",
            "url": "/site/website/articles/2017/1/men-styles-for-winter",
            "descriptorUrl": "/site/website/articles/2017/1/men-styles-for-winter.meta.xml",
            "descriptorDom": null,
            "properties": null,
            "children": [
              {
                "name": "index.xml",
                "url": "/site/website/articles/2017/1/men-styles-for-winter/index.xml",
                "descriptorUrl": "/site/website/articles/2017/1/men-styles-for-winter/index.xml",
                "descriptorDom": {
                  "page": {
                    "content-type": "/page/article",
                    "display-template": "/templates/web/pages/article.ftl",
                    "merge-strategy": "inherit-levels",
                    "file-name": "index.xml",
                    "objectGroupId": "f1f9",
                    "objectId": "f1f9c488-67e1-7ec0-d3ca-560b194e64d1",
                    "folder-name": "men-styles-for-winter",
                    "header": {
                      "item": {
                        "key": "/site/components/headers/header.xml",
                        "value": "Header",
                        "include": "/site/components/headers/header.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "createdDate": "3/3/2017 20:57:7",
                    "createdDate_dt": "3/3/2017 20:57:7",
                    "lastModifiedDate": "3/13/2017 20:33:5",
                    "lastModifiedDate_dt": "3/13/2017 20:33:5",
                    "left-rail": {
                      "item": {
                        "key": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "value": "Left Rail with Related Articles",
                        "include": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "placeInNav": "false",
                    "sections": {
                      "item": {
                        "section_html": "<p>Nulla sed enim ipsum. Sed ac neque a ligula malesuada volutpat. Donec et ligula rutrum, mattis mauris eget, vestibulum metus. Maecenas non vehicula neque. Nunc ac mauris id ipsum commodo tempus. Integer at dolor consequat, dignissim eros in, imperdiet dui. Aliquam condimentum turpis eget tellus ultrices tincidunt. Pellentesque id varius purus, ac tristique augue. Etiam ut pharetra purus. Vestibulum quis vehicula eros. Mauris laoreet purus nec felis ullamcorper convallis.</p>\n<p>Quisque urna purus, posuere nec urna sed, ornare aliquet mauris. In faucibus vitae tellus id iaculis. Donec porttitor, elit eu elementum pulvinar, sapien ex cursus lacus, non ornare ex lectus ut elit. Donec eros ligula, suscipit eu tellus ut, tristique hendrerit tortor. Fusce sollicitudin mollis risus, ut rhoncus magna volutpat vel. Cras auctor, elit id pellentesque semper, neque nibh fermentum ante, sit amet malesuada felis magna nec enim. Vivamus sollicitudin placerat felis, vel blandit dolor sollicitudin a. Nunc vitae volutpat augue. Nunc tristique placerat tortor condimentum sagittis. Sed eu egestas ex, quis auctor neque. Nam eget tellus suscipit, vestibulum augue nec, consequat erat. Mauris malesuada nec ligula non posuere. Proin vitae posuere tortor. Phasellus vulputate quam ut dictum vulputate.</p>\n<p>Integer ac lectus metus. Ut aliquam ipsum ligula, quis molestie ex pretium sit amet. Morbi porttitor neque vel luctus laoreet. Mauris varius lacus a eros aliquam, in maximus nibh aliquam. Integer sodales consequat metus eget accumsan. Integer viverra mi erat, in hendrerit massa vestibulum placerat. Sed ut gravida nisl, ut cursus neque. Vestibulum tristique rutrum augue vel aliquet.</p>\n<p>Ut quis faucibus diam. Aliquam dolor metus, laoreet vitae lacinia a, aliquam a tellus. Vivamus sed commodo ipsum, in lacinia nisl. Sed metus diam, porta eget tortor et, vehicula hendrerit sapien. Vestibulum vehicula urna felis, id elementum libero pellentesque id. Vivamus in massa velit. Suspendisse vitae turpis fermentum lectus pellentesque laoreet. Curabitur viverra pretium turpis, eget feugiat mi blandit a. Quisque nisl urna, porta ut urna eget, mattis fringilla nisi. Ut lacus ligula, dapibus ac fermentum ac, rhoncus eget metus. Donec scelerisque, felis vitae viverra iaculis, diam sem gravida tellus, non sodales urna urna sit amet enim. Duis id justo vitae justo suscipit porta placerat vel ligula. Morbi justo nunc, rhoncus laoreet ipsum a, aliquet eleifend dui. In a quam tortor.</p>\n<p>Pellentesque eget eros ut dui tincidunt convallis. Pellentesque tincidunt rutrum tellus, non rhoncus dui finibus eu. Integer eu sem maximus, blandit neque eu, congue leo. Ut pretium efficitur turpis, id dapibus turpis bibendum vel. Suspendisse a nibh dictum, imperdiet est et, interdum odio. Morbi urna magna, eleifend vitae luctus ac, scelerisque sit amet nisi. Quisque maximus placerat ante et fermentum. Nulla eu aliquet arcu, vel maximus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam posuere arcu ex, in sagittis orci rhoncus eu. Suspendisse potenti. Curabitur facilisis sapien et ligula tristique lacinia. Aliquam a mauris bibendum, placerat augue sit amet, hendrerit arcu. Nam in bibendum sapien. Pellentesque laoreet nisi vel metus dapibus dictum. Integer semper, velit laoreet ornare maximus, nulla orci maximus ante, a tincidunt eros risus blandit eros.</p>"
                      }
                    },
                    "internal-name": "Men Styles For Winter",
                    "title": "Men Styles For Winter",
                    "subject": "Men Styles For Winter",
                    "author": "John Doe",
                    "categories": {
                      "item": {
                        "key": "style",
                        "value_smv": "Style"
                      }
                    },
                    "segments": {
                      "item": {
                        "key": "guy",
                        "value_smv": "Guy"
                      }
                    },
                    "date_dt": "01/05/2017 05:00:00",
                    "featured_b": "true",
                    "summary": "Nulla sed enim ipsum. Sed ac neque a ligula malesuada volutpat. Donec et ligula rutrum, mattis mauris eget, vestibulum metus. Maecenas non vehicula neque. Nunc ac mauris id ipsum commodo tempus. Integer at dolor consequat, dignissim eros in, imperdiet dui.",
                    "image": "/static-assets/images/winter-man-pic.jpg"
                  }
                },
                "properties": null,
                "folder": false
              }
            ],
            "folder": true
          },
          {
            "name": "women-styles-for-winter",
            "url": "/site/website/articles/2017/1/women-styles-for-winter",
            "descriptorUrl": "/site/website/articles/2017/1/women-styles-for-winter.meta.xml",
            "descriptorDom": null,
            "properties": null,
            "children": [
              {
                "name": "index.xml",
                "url": "/site/website/articles/2017/1/women-styles-for-winter/index.xml",
                "descriptorUrl": "/site/website/articles/2017/1/women-styles-for-winter/index.xml",
                "descriptorDom": {
                  "page": {
                    "content-type": "/page/article",
                    "display-template": "/templates/web/pages/article.ftl",
                    "merge-strategy": "inherit-levels",
                    "file-name": "index.xml",
                    "objectGroupId": "b308",
                    "objectId": "b30875f3-87ce-7b55-fd19-3d5c00508a08",
                    "folder-name": "women-styles-for-winter",
                    "header": {
                      "item": {
                        "key": "/site/components/headers/header.xml",
                        "value": "Header",
                        "include": "/site/components/headers/header.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "createdDate": "3/3/2017 21:7:20",
                    "createdDate_dt": "3/3/2017 21:7:20",
                    "lastModifiedDate": "3/13/2017 20:33:12",
                    "lastModifiedDate_dt": "3/13/2017 20:33:12",
                    "left-rail": {
                      "item": {
                        "key": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "value": "Left Rail with Related Articles",
                        "include": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "placeInNav": "false",
                    "sections": {
                      "item": {
                        "section_html": "<p>Donec quis justo ligula. Ut commodo nibh sit amet ultrices ultricies. Curabitur tempus venenatis vulputate. Quisque dignissim interdum tempus. Pellentesque luctus justo augue, vel gravida orci rutrum a. Sed elementum est sapien. Suspendisse scelerisque volutpat mi vel finibus. Proin sapien sem, malesuada non finibus et, tincidunt eget augue. Cras a pretium tellus.</p>\n<p>Praesent diam augue, vehicula nec commodo et, placerat et magna. Duis dictum ligula odio, sollicitudin viverra sapien eleifend vel. Donec iaculis lacus eget urna tempus, sit amet auctor lectus venenatis. Nunc tempor risus lectus, sit amet vehicula ligula dignissim eu. Nullam faucibus rutrum ullamcorper. Nunc varius nunc tortor, vitae vulputate eros bibendum eget. Vestibulum gravida ligula nec ultrices sodales. Vestibulum scelerisque luctus consectetur.</p>\n<p>Curabitur a nulla vel lectus posuere sagittis at sed est. Nunc sed ultrices nibh. Fusce egestas placerat libero, nec suscipit neque accumsan sed. Aliquam erat volutpat. Maecenas vitae enim ut mauris egestas molestie. Pellentesque euismod pretium purus sed iaculis. Integer fringilla sapien nec tempor auctor. Morbi at ante porttitor, sodales metus quis, molestie erat. Ut egestas dignissim tincidunt. Morbi ac finibus augue. In scelerisque sit amet elit non viverra. Pellentesque lobortis sit amet ligula ac ultrices. Fusce eleifend enim eu consectetur iaculis. Vivamus egestas augue sit amet faucibus rhoncus. In mi ligula, hendrerit vel ex nec, tincidunt luctus sem.</p>\n<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus molestie mi et metus vestibulum iaculis. Donec porta mi magna, vitae aliquet dui malesuada nec. Proin viverra eget risus et luctus. Donec eget enim vulputate orci pretium laoreet. Nullam ultricies lectus arcu, id lobortis purus pellentesque ut. Pellentesque eget finibus neque, at dapibus metus. Nunc dignissim, orci at sagittis gravida, mi lorem aliquam purus, eu laoreet mi dui in tellus. Sed sagittis suscipit iaculis. Donec urna eros, commodo sit amet vulputate et, dictum non est. Nulla sollicitudin imperdiet bibendum. Vivamus eget purus in dolor fermentum bibendum eget elementum elit. Curabitur egestas dapibus urna ac vulputate. Pellentesque suscipit sapien at egestas vulputate. Mauris imperdiet et magna at euismod. Vestibulum maximus at lacus ac pellentesque.</p>\n<p>Integer lacinia fringilla lectus nec porttitor. Mauris euismod massa ex, ut luctus neque accumsan eget. Vestibulum dolor lacus, feugiat vel sagittis sed, euismod id lorem. Vivamus quis purus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eget tempus tortor. Fusce at nunc a libero dignissim ullamcorper sed quis libero. Aenean posuere pulvinar dui, ac semper ex molestie sit amet. Mauris tempor consequat erat quis mattis. Nam consequat nunc auctor sollicitudin tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eget enim ante. Vestibulum eleifend tincidunt nibh. In id pharetra sem. Donec nibh ex, fringilla sed finibus sit amet, vestibulum vitae enim. Mauris eu nunc eu lorem egestas accumsan vitae eu diam.</p>"
                      }
                    },
                    "internal-name": "Women Styles for Winter",
                    "title": "Women Styles for Winter",
                    "subject": "Women Styles for Winter",
                    "author": "Jane Doe",
                    "categories": {
                      "item": {
                        "key": "style",
                        "value_smv": "Style"
                      }
                    },
                    "segments": {
                      "item": {
                        "key": "gal",
                        "value_smv": "Gal"
                      }
                    },
                    "date_dt": "01/03/2017 05:00:00",
                    "featured_b": "true",
                    "summary": "Donec quis justo ligula. Ut commodo nibh sit amet ultrices ultricies. Curabitur tempus venenatis vulputate. Quisque dignissim interdum tempus. Pellentesque luctus justo augue, vel gravida orci rutrum a. Sed elementum est sapien.",
                    "image": "/static-assets/images/winter-woman-pic.jpg"
                  }
                },
                "properties": null,
                "folder": false
              }
            ],
            "folder": true
          }
        ],
        "folder": true
      },
      {
        "name": "2",
        "url": "/site/website/articles/2017/2",
        "descriptorUrl": "/site/website/articles/2017/2.meta.xml",
        "descriptorDom": null,
        "properties": null,
        "children": [
          {
            "name": "10-tips-to-get-a-six-pack",
            "url": "/site/website/articles/2017/2/10-tips-to-get-a-six-pack",
            "descriptorUrl": "/site/website/articles/2017/2/10-tips-to-get-a-six-pack.meta.xml",
            "descriptorDom": null,
            "properties": null,
            "children": [
              {
                "name": "index.xml",
                "url": "/site/website/articles/2017/2/10-tips-to-get-a-six-pack/index.xml",
                "descriptorUrl": "/site/website/articles/2017/2/10-tips-to-get-a-six-pack/index.xml",
                "descriptorDom": {
                  "page": {
                    "content-type": "/page/article",
                    "display-template": "/templates/web/pages/article.ftl",
                    "merge-strategy": "inherit-levels",
                    "file-name": "index.xml",
                    "objectGroupId": "d582",
                    "objectId": "d5824453-b743-4575-bb7a-5c49c0fbedbb",
                    "folder-name": "10-tips-to-get-a-six-pack",
                    "header": {
                      "item": {
                        "key": "/site/components/headers/header.xml",
                        "value": "Header",
                        "include": "/site/components/headers/header.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "createdDate": "3/2/2017 20:52:30",
                    "createdDate_dt": "3/2/2017 20:52:30",
                    "lastModifiedDate": "3/13/2017 20:33:18",
                    "lastModifiedDate_dt": "3/13/2017 20:33:18",
                    "left-rail": {
                      "item": {
                        "key": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "value": "Left Rail with Related Articles",
                        "include": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "placeInNav": "false",
                    "sections": {
                      "item": [
                        {
                          "section_html": "<p>Ut pellentesque nibh porta lacinia porta. Nam eleifend aliquam tellus sit amet sagittis. Maecenas id eros velit. Donec feugiat iaculis augue eu egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean volutpat lobortis nisi, id tristique augue condimentum id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent mollis dui faucibus, interdum ex sit amet, vestibulum sapien. Praesent a mauris vel diam ultricies maximus elementum sed ligula. Duis hendrerit laoreet rutrum. Sed tincidunt turpis ut urna iaculis, ac volutpat purus molestie. Morbi pretium ac urna vel pretium. Quisque accumsan tincidunt velit, sit amet consequat elit feugiat non.</p>\n<p>Donec tellus turpis, malesuada eget magna dictum, faucibus posuere lectus. Nunc eu luctus augue, sed dictum nisi. Nunc faucibus placerat rutrum. Nullam consectetur lorem posuere erat mattis dignissim. Nullam leo lorem, placerat non ante vel, venenatis egestas leo. Vivamus euismod, nisl non dictum mollis, erat purus pellentesque leo, ut tempor libero nisl vel sapien. Vivamus lacinia sit amet diam ut vehicula. Maecenas non nulla eu metus venenatis aliquam et sit amet tortor. Nam sed pretium nisi, eu convallis arcu. Integer venenatis est eu facilisis dapibus. Duis commodo euismod ultrices.</p>"
                        },
                        {
                          "section_html": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi luctus massa tempus, facilisis ligula vel, imperdiet orci. Sed ut mauris id metus ullamcorper consectetur. Duis dignissim maximus erat, vitae pellentesque eros ornare eu. Quisque lacinia magna ipsum, blandit lobortis ante euismod vitae. Pellentesque leo arcu, malesuada a neque ut, consectetur laoreet ex. Pellentesque non tincidunt diam. Suspendisse risus turpis, sagittis quis nisi eget, fringilla faucibus orci. Mauris accumsan nunc in justo euismod, ac pharetra metus egestas. Aliquam tincidunt rutrum venenatis. Donec eget ex massa.</p>\n<p>Fusce eu feugiat orci. Aenean consectetur auctor diam quis dignissim. In hac habitasse platea dictumst. Sed dictum nulla quis congue tempus. Sed eu ultricies magna. Vestibulum et pretium enim. Nulla velit eros, gravida sed interdum ut, auctor ut urna. Nulla nunc elit, posuere ut nibh nec, lobortis finibus erat. Vestibulum tristique eu eros non pharetra. Donec vitae nibh sollicitudin dui porttitor feugiat. Proin pulvinar sem a laoreet volutpat. Aliquam sagittis tortor et euismod laoreet. Vivamus fermentum vestibulum mauris, id commodo nunc consectetur ac. Aliquam aliquet blandit libero nec fringilla. Etiam lacinia arcu id nunc eleifend rutrum.</p>"
                        },
                        {
                          "section_html": "<p><span>Sed sollicitudin accumsan ornare. Nunc lacinia elementum mi nec suscipit. Nam ullamcorper mattis risus, quis rutrum quam eleifend eget. Suspendisse ultricies enim ac ullamcorper blandit. Maecenas porttitor convallis mauris id ultrices. Nulla elit velit, congue vel ultrices id, tristique nec eros. Donec commodo est id erat luctus cursus. Cras a elementum diam. Nunc eros ex, sagittis sit amet congue a, efficitur non mi. Sed fringilla diam eu arcu vulputate, vitae viverra purus eleifend. Integer bibendum faucibus est, vitae semper velit vehicula nec. Proin fringilla interdum nisi non ultricies. Suspendisse fringilla lacus tellus, at tempus augue bibendum non. Nunc et purus semper, sollicitudin nisl at, suscipit leo. Curabitur scelerisque nulla a diam aliquam rutrum sit amet in dolor.</span></p>"
                        }
                      ]
                    },
                    "internal-name": "10 Tips to Get a Six Pack",
                    "title": "10 Tips to Get a Six Pack",
                    "subject": "10 Tips to Get a Six Pack",
                    "author": "John Doe",
                    "categories": {
                      "item": {
                        "key": "health",
                        "value_smv": "Health"
                      }
                    },
                    "segments": {
                      "item": {
                        "key": "guy",
                        "value_smv": "Guy"
                      }
                    },
                    "date_dt": "02/08/2017 05:00:00",
                    "featured_b": "true",
                    "summary": "Ut pellentesque nibh porta lacinia porta. Nam eleifend aliquam tellus sit amet sagittis. Maecenas id eros velit. Donec feugiat iaculis augue eu egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
                    "image": "/static-assets/images/six-pack-pic.jpg"
                  }
                },
                "properties": null,
                "folder": false
              }
            ],
            "folder": true
          },
          {
            "name": "top-romantic-valentine-movies",
            "url": "/site/website/articles/2017/2/top-romantic-valentine-movies",
            "descriptorUrl": "/site/website/articles/2017/2/top-romantic-valentine-movies.meta.xml",
            "descriptorDom": null,
            "properties": null,
            "children": [
              {
                "name": "index.xml",
                "url": "/site/website/articles/2017/2/top-romantic-valentine-movies/index.xml",
                "descriptorUrl": "/site/website/articles/2017/2/top-romantic-valentine-movies/index.xml",
                "descriptorDom": {
                  "page": {
                    "content-type": "/page/article",
                    "display-template": "/templates/web/pages/article.ftl",
                    "merge-strategy": "inherit-levels",
                    "file-name": "index.xml",
                    "objectGroupId": "8bdd",
                    "objectId": "8bdd0180-b7c8-1eff-1f20-76ddca377e3c",
                    "folder-name": "top-romantic-valentine-movies",
                    "header": {
                      "item": {
                        "key": "/site/components/headers/header.xml",
                        "value": "Header",
                        "include": "/site/components/headers/header.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "createdDate": "3/3/2017 20:14:16",
                    "createdDate_dt": "3/3/2017 20:14:16",
                    "lastModifiedDate": "3/13/2017 20:33:25",
                    "lastModifiedDate_dt": "3/13/2017 20:33:25",
                    "left-rail": {
                      "item": {
                        "key": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "value": "Left Rail with Related Articles",
                        "include": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "placeInNav": "false",
                    "sections": {
                      "item": [
                        {
                          "section_html": "<p>Suspendisse a faucibus orci. Sed porta justo vel sapien iaculis pulvinar. Quisque bibendum pretium lectus ut auctor. Integer vitae libero volutpat est congue lacinia. Morbi at massa odio. Quisque non elit tellus. Donec porttitor viverra tortor. Nulla pellentesque pharetra tortor sed lacinia. Integer nec rutrum risus, mattis pulvinar velit.</p>\n<p>Vestibulum posuere accumsan elit, id consequat massa venenatis ac. Nullam tincidunt risus quis quam porta ultrices. Quisque sagittis ex vel leo mattis scelerisque. Phasellus auctor mi quis tellus tempus, in pretium leo molestie. Donec dignissim viverra euismod. Pellentesque ultrices ac est quis posuere. Duis fermentum pellentesque lacus, in lobortis nulla ultricies id. Pellentesque placerat fermentum eros, vitae lobortis odio interdum cursus. Etiam diam turpis, ornare scelerisque feugiat ac, varius sed eros. Suspendisse molestie mauris lorem, vel ultrices massa vehicula eu. Vestibulum ante augue, sodales nec volutpat sit amet, mollis et ipsum. Nullam mattis, lectus ac ultricies rhoncus, nibh est consectetur erat, vel ullamcorper diam sapien in nulla. Mauris nec sapien egestas, faucibus lectus ut, commodo massa.</p>"
                        },
                        {
                          "section_html": "<p>Sed sit amet lobortis sem. Aenean pretium lorem dictum, scelerisque justo at, porttitor urna. In hac habitasse platea dictumst. Nulla molestie suscipit dui, non faucibus tortor. Pellentesque id dapibus nulla. In porttitor ultricies nibh vitae congue. Proin maximus eleifend semper. Etiam vehicula varius volutpat. In hac habitasse platea dictumst. Donec nulla metus, blandit quis massa quis, semper accumsan odio. Fusce condimentum lacus elit, sit amet faucibus metus tincidunt at. Proin rhoncus dictum egestas. Aliquam malesuada dui hendrerit, tempor risus vel, posuere tellus. Nullam non sagittis urna, bibendum pulvinar elit. Nunc bibendum purus sagittis, pulvinar velit ut, fermentum libero. In at nisi mi.</p>\n<p>Quisque scelerisque felis eget turpis finibus, a dapibus ligula malesuada. In hac habitasse platea dictumst. In tempus mollis ipsum, nec egestas sem. Morbi elit nunc, sodales in volutpat nec, aliquet quis risus. Fusce ac rhoncus nunc. Ut turpis dolor, hendrerit euismod dictum in, eleifend sed lectus. Praesent tincidunt convallis nisl, eget placerat justo. Aliquam tristique, nulla ut ornare dignissim, sapien velit aliquam mauris, ac mollis dolor turpis a ipsum. Vestibulum aliquet metus quam, a rhoncus turpis vulputate ac. Quisque ornare ut tortor vel congue. Nulla orci orci, tempor et dolor et, tincidunt pellentesque est. Ut a purus at justo mollis convallis in et dolor. Phasellus eget ultrices enim.</p>"
                        }
                      ]
                    },
                    "internal-name": "Top Romantic Valentine Movies",
                    "title": "Top Romantic Valentine Movies",
                    "subject": "Top Romantic Valentine Movies",
                    "author": "Jane Doe",
                    "categories": {
                      "item": {
                        "key": "entertainment",
                        "value_smv": "Entertainment"
                      }
                    },
                    "segments": {
                      "item": {
                        "key": "gal",
                        "value_smv": "Gal"
                      }
                    },
                    "date_dt": "02/14/2017 05:00:00",
                    "featured_b": "true",
                    "summary": "Suspendisse a faucibus orci. Sed porta justo vel sapien iaculis pulvinar. Quisque bibendum pretium lectus ut auctor. Integer vitae libero volutpat est congue lacinia. Morbi at massa odio. Quisque non elit tellus. Donec porttitor viverra tortor. ",
                    "image": "/static-assets/images/romantic-pic.jpg"
                  }
                },
                "properties": null,
                "folder": false
              }
            ],
            "folder": true
          }
        ],
        "folder": true
      },
      {
        "name": "3",
        "url": "/site/website/articles/2017/3",
        "descriptorUrl": "/site/website/articles/2017/3.meta.xml",
        "descriptorDom": null,
        "properties": null,
        "children": [
          {
            "name": "5-popular-diets-for-women",
            "url": "/site/website/articles/2017/3/5-popular-diets-for-women",
            "descriptorUrl": "/site/website/articles/2017/3/5-popular-diets-for-women.meta.xml",
            "descriptorDom": null,
            "properties": null,
            "children": [
              {
                "name": "index.xml",
                "url": "/site/website/articles/2017/3/5-popular-diets-for-women/index.xml",
                "descriptorUrl": "/site/website/articles/2017/3/5-popular-diets-for-women/index.xml",
                "descriptorDom": {
                  "page": {
                    "content-type": "/page/article",
                    "display-template": "/templates/web/pages/article.ftl",
                    "merge-strategy": "inherit-levels",
                    "file-name": "index.xml",
                    "objectGroupId": "6121",
                    "objectId": "6121741f-8b6f-75ce-151b-75e57f04da13",
                    "folder-name": "5-popular-diets-for-women",
                    "header": {
                      "item": {
                        "key": "/site/components/headers/header.xml",
                        "value": "Header",
                        "include": "/site/components/headers/header.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "createdDate": "3/14/2017 23:41:13",
                    "createdDate_dt": "3/14/2017 23:41:13",
                    "lastModifiedDate": "3/14/2017 23:52:2",
                    "lastModifiedDate_dt": "3/14/2017 23:52:2",
                    "left-rail": {
                      "item": {
                        "key": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "value": "Left Rail with Related Articles",
                        "include": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "placeInNav": "false",
                    "sections": {
                      "item": {
                        "section_html": "<p>Donec euismod et ligula quis porta. Vivamus lacinia tortor lectus, a dictum nisi efficitur consequat. Duis posuere aliquet massa, quis sollicitudin dolor fringilla nec. Phasellus tincidunt lorem ac imperdiet vehicula. Morbi consequat ut tellus quis suscipit. Praesent volutpat, augue et posuere finibus, lectus tortor mollis ligula, elementum convallis diam ligula aliquam arcu. Pellentesque sed diam dolor. Duis erat nibh, interdum dignissim volutpat non, mattis in neque. Aenean felis sapien, varius eu ipsum non, tempus commodo massa. Sed erat ante, vulputate at convallis a, placerat sit amet urna. Proin facilisis scelerisque dolor, sed congue lorem vestibulum vel. Quisque placerat imperdiet gravida. Aenean cursus rutrum rutrum.</p>\n<p>Vestibulum id ex nec justo dignissim faucibus dictum vitae velit. Sed volutpat commodo mollis. Curabitur luctus neque id arcu dapibus sodales. Nulla facilisi. Pellentesque accumsan aliquam pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ut viverra nibh, sed porttitor nisi. Nam tincidunt sagittis venenatis. Cras ligula nulla, auctor eu est non, congue venenatis ante. Suspendisse sit amet lacus interdum, fermentum risus quis, dictum urna. Fusce vitae tristique lacus, in finibus nunc. Aenean semper urna sed rutrum imperdiet. Ut vestibulum elit in ipsum finibus porta. Nam egestas gravida rutrum.</p>\n<p>Phasellus hendrerit, nisi ac posuere ullamcorper, leo est vulputate odio, at dapibus lorem lacus in sem. Aenean viverra dictum tortor, in sagittis ligula dictum suscipit. Aliquam porta felis quis imperdiet viverra. Proin scelerisque, elit sit amet lobortis sodales, nisl metus euismod nunc, non tincidunt nibh eros ut enim. Suspendisse potenti. Maecenas eget lacus nisl. Sed consectetur non diam sed venenatis. Mauris sed magna augue. Etiam dui ipsum, maximus sed eros accumsan, tincidunt finibus leo. Suspendisse quis imperdiet dui. Maecenas erat urna, scelerisque ac accumsan quis, cursus vitae metus. Proin lobortis, neque non rhoncus scelerisque, sem libero bibendum diam, a porttitor urna risus at mauris. Vivamus semper ex vitae diam luctus, id accumsan nulla congue. Maecenas tempor turpis non sapien suscipit, sit amet fermentum neque malesuada. Vestibulum lobortis sollicitudin consequat. Etiam leo mauris, dictum vitae vehicula vitae, molestie a tortor.</p>\n<p>Ut tincidunt arcu felis, eget sodales ligula tincidunt at. Nam interdum et ipsum nec cursus. Proin velit enim, gravida vitae porta eu, viverra ut magna. Donec risus nisl, sodales vitae pulvinar in, condimentum nec quam. Duis id tempus sapien. Duis consequat laoreet nunc, et elementum libero fringilla sed. Fusce at nulla nec ligula aliquet facilisis. Sed aliquet gravida urna, et suscipit purus lacinia sed. Nunc non ligula eros. Nunc aliquam ultrices dolor a efficitur. Fusce blandit gravida elementum. Donec id sodales orci.</p>\n<p>Aenean consectetur lorem rutrum felis lacinia bibendum. Sed et elit in mi egestas pellentesque. Suspendisse vitae imperdiet ligula. Quisque sollicitudin, eros id aliquam bibendum, elit neque tincidunt orci, at vehicula lacus mauris eget erat. Nulla facilisi. Suspendisse potenti. Sed ultrices fringilla justo eget ultricies. Donec eu porttitor augue.</p>"
                      }
                    },
                    "featured_b": "true",
                    "internal-name": "5 Popular Diets for Women",
                    "title": "5 Popular Diets for Women",
                    "subject": "5 Popular Diets for Women",
                    "author": "Jane Doe",
                    "categories": {
                      "item": {
                        "key": "health",
                        "value_smv": "Health"
                      }
                    },
                    "segments": {
                      "item": {
                        "key": "gal",
                        "value_smv": "Gal"
                      }
                    },
                    "summary": "Donec euismod et ligula quis porta. Vivamus lacinia tortor lectus, a dictum nisi efficitur consequat. Duis posuere aliquet massa, quis sollicitudin dolor fringilla nec.",
                    "image": "/static-assets/images/diets-women-pic.jpg",
                    "date_dt": "03/14/2017 04:00:00"
                  }
                },
                "properties": null,
                "folder": false
              }
            ],
            "folder": true
          },
          {
            "name": "top-clubs-in-virginia",
            "url": "/site/website/articles/2017/3/top-clubs-in-virginia",
            "descriptorUrl": "/site/website/articles/2017/3/top-clubs-in-virginia.meta.xml",
            "descriptorDom": null,
            "properties": null,
            "children": [
              {
                "name": "index.xml",
                "url": "/site/website/articles/2017/3/top-clubs-in-virginia/index.xml",
                "descriptorUrl": "/site/website/articles/2017/3/top-clubs-in-virginia/index.xml",
                "descriptorDom": {
                  "page": {
                    "content-type": "/page/article",
                    "display-template": "/templates/web/pages/article.ftl",
                    "merge-strategy": "inherit-levels",
                    "file-name": "index.xml",
                    "objectGroupId": "52e8",
                    "objectId": "52e8e75d-94f8-ae0b-3317-8d592b3d7dce",
                    "folder-name": "top-clubs-in-virginia",
                    "header": {
                      "item": {
                        "key": "/site/components/headers/header.xml",
                        "value": "Header",
                        "include": "/site/components/headers/header.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "createdDate": "3/15/2017 0:3:41",
                    "createdDate_dt": "3/15/2017 0:3:41",
                    "lastModifiedDate": "3/15/2017 0:3:41",
                    "lastModifiedDate_dt": "3/15/2017 0:3:41",
                    "left-rail": {
                      "item": {
                        "key": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "value": "Left Rail with Related Articles",
                        "include": "/site/components/left-rails/left-rail-with-related-articles.xml",
                        "disableFlattening": "false"
                      }
                    },
                    "placeInNav": "false",
                    "sections": {
                      "item": [
                        {
                          "section_html": "<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam a elit justo. Morbi sagittis pulvinar tristique. Aenean pharetra risus a libero faucibus, iaculis porta mi ornare. Ut suscipit efficitur ultrices. Vestibulum odio enim, luctus consectetur diam nec, molestie porta mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce molestie mattis felis, eget aliquet nisi ultricies dapibus. Donec congue nibh nec nisi mattis, sit amet tempor tellus sollicitudin. Mauris accumsan ipsum leo, consectetur pretium tellus aliquet in. Praesent egestas lectus non sollicitudin gravida. Curabitur faucibus consectetur nulla, nec maximus nisl venenatis vel. Nulla sit amet felis quis dui imperdiet fermentum nec eget sapien. In porta, augue eget porta aliquam, massa tellus hendrerit lectus, et lobortis nulla libero ut eros. Ut cursus efficitur libero, vel accumsan odio tincidunt vitae. Donec ligula dui, lacinia eget nunc ac, gravida blandit dolor.</p>\n<p>Suspendisse malesuada, libero rhoncus interdum dictum, enim leo blandit elit, ut varius ligula urna at tortor. Mauris porta tellus quis nisl ultricies, a euismod justo varius. In cursus mi id suscipit commodo. Nulla in luctus mi, a aliquam turpis. Integer efficitur a magna id volutpat. Aenean vel eleifend nulla. Sed et bibendum neque. Etiam a quam ut ligula vehicula ornare. Quisque ultrices quam dui, ut facilisis urna aliquet id. Maecenas porta ipsum pretium turpis efficitur finibus. Etiam pulvinar ipsum ac turpis ornare feugiat. Curabitur placerat eu dui at consequat. Aliquam gravida, est rutrum iaculis cursus, risus urna tincidunt nunc, sed tempus felis justo nec tortor. Proin rutrum magna mi, in consectetur turpis rhoncus sit amet.</p>"
                        },
                        {
                          "section_html": "<p>Aliquam bibendum eros vel libero tincidunt, ac consectetur tortor blandit. Proin auctor odio neque. Duis vel consectetur nunc, nec hendrerit justo. Nunc tristique fermentum odio ac bibendum. Fusce egestas risus at vehicula efficitur. Ut eleifend, nisl quis vestibulum dapibus, magna nisl pulvinar purus, quis vestibulum augue tortor nec neque. Phasellus fringilla pretium ipsum vitae hendrerit. Praesent posuere erat et odio pulvinar vehicula. Suspendisse sit amet dapibus justo, at rutrum justo. Duis ac erat quis felis porttitor gravida. Fusce ac neque augue. Aliquam rutrum rutrum eros vitae varius. Phasellus sit amet pharetra velit, sit amet scelerisque neque. Integer eget mauris mauris. Etiam luctus, orci non pharetra egestas, nunc turpis congue sem, eu semper nisi sapien vel lorem. Ut at pellentesque libero.</p>\n<p>Curabitur vestibulum, odio vel lacinia faucibus, turpis elit imperdiet elit, et pellentesque leo sem ut lorem. Aliquam lacinia maximus lectus, at ultrices nulla tempus a. Suspendisse vestibulum nibh et pulvinar finibus. Integer ac consequat lectus. Nullam venenatis varius ante vel elementum. Integer nisi odio, condimentum vitae semper eu, commodo at enim. Maecenas fringilla lorem vel arcu luctus, in feugiat lectus mollis. Curabitur a ligula nulla. Pellentesque gravida accumsan nunc, et semper dolor ornare nec. Etiam faucibus risus id neque euismod, vel scelerisque ligula malesuada.</p>\n<p>In fringilla ultrices nisi ac consectetur. Cras at venenatis libero. Praesent vestibulum vitae purus sit amet feugiat. Praesent elementum blandit magna, id pulvinar velit vestibulum ac. Praesent mattis nulla nec risus gravida accumsan ac in eros. Proin tempus tellus mi, id egestas urna euismod pharetra. Vestibulum tellus odio, venenatis quis nisl id, venenatis facilisis nibh. Praesent feugiat sapien vitae ligula posuere, non ullamcorper ante commodo. Mauris sed risus eget ante sollicitudin molestie ut at dui. Donec in massa nisi. Vestibulum vestibulum ante nisl, quis tincidunt massa efficitur ut. Curabitur diam est, pretium id congue id, volutpat non lectus. Vestibulum dictum urna ac hendrerit varius.</p>"
                        }
                      ]
                    },
                    "internal-name": "Top Clubs In Virginia",
                    "title": "Top Clubs In Virginia",
                    "subject": "Top Clubs In Virginia",
                    "author": "John Doe",
                    "categories": {
                      "item": {
                        "key": "entertainment",
                        "value_smv": "Entertainment"
                      }
                    },
                    "segments": {
                      "item": [
                        {
                          "key": "guy",
                          "value_smv": "Guy"
                        },
                        {
                          "key": "gal",
                          "value_smv": "Gal"
                        }
                      ]
                    },
                    "featured_b": "true",
                    "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam a elit justo. Morbi sagittis pulvinar tristique. Aenean pharetra risus a libero faucibus, iaculis porta mi ornare.",
                    "image": "/static-assets/images/clubs-virginia-pic.jpg",
                    "date_dt": "03/05/2017 05:00:00"
                  }
                },
                "properties": null,
                "folder": false
              }
            ],
            "folder": true
          }
        ],
        "folder": true
      }
    ],
    "folder": true
  }

---------
Responses
---------

+---------+----------------------------------+-----------------------------------------------+
|| Status || Location                        || Response Body                                |
+=========+==================================+===============================================+
|| 200    ||                                 || See example above.                           |
+---------+----------------------------------+-----------------------------------------------+
|| 404    ||                                 || ``"No folder found at /site/website"``       |
+---------+----------------------------------+-----------------------------------------------+
|| 500    ||                                 || ``"Internal server error"``                  |
+---------+----------------------------------+-----------------------------------------------+
