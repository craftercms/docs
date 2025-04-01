:is-up-to-date: True
:last-updated: 4.1.0

.. _graphql:

=======
GraphQL
=======
CrafterCMS provides built-in support for GraphQL to query content in any site without writing
additional code. Below you'll find more information on working with GraphQL and how to
customize the built-in GraphQL schema

--------------------
Working with GraphQL
--------------------
CrafterCMS provides built-in support for GraphQL to query content in any project without writing additional code.
A GraphQL schema is generated independently for each project based on the content-type configuration that has been
created using Crafter Studio, and the schema is automatically updated after any change is detected.

To implement a project that uses GraphQL you would follow a workflow like this:

1. Create a new project (if needed, for existing projects skip to step number 3)
2. Define the content model for your project
3. Obtain the GraphQL schema for your project, you can use the provided GraphiQL client or any third party client
4. Develop GraphQL queries to use in your project or external app

All content changes made by authors in Crafter Studio will be immediately available in GraphQL queries.

When a change is made in the content model, for example adding a new field or creating a new content-type, the
GraphQL schema will be rebuilt to reflect the same changes. So for a CrafterCMS projecct that uses GraphQL queries the
development process would look like this:

1. Developers define the base content model
2. Developers define the site base GraphQL queries to use the latest schema
3. Content authors create content based on the model
4. Publishers review & approve the author's work
5. Publishers publish to live both the content model configuration & the content updates
6. Crafter Deployer will handle the GraphQL schema rebuild in delivery

You can also use the CrafterCMS GraphQL API from an external project or application, however in this case you will need to
handle the schema reload using third party tools.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using GraphiQL in Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
GraphiQL is a simple GraphQL client that you can use in Crafter Studio to run GraphQL queries and explore the schema
documentation for a site without the need of any other tool. To access GraphiQL follow these steps:

1. Login to Crafter Studio
2. Click the name of your project from the ``Projects`` screen and open the left sidebar
3. Click ``Project Tools`` in the left sidebar
4. Click ``GraphiQL`` in the left sidebar

To explore the GraphQL schema you can click the ``Docs`` icon on the right side:

.. image:: /_static/images/developer/graphql/graphql.webp
        :width: 75%
        :alt: GraphiQL
        :align: center

GraphiQL provides a convenient search navigation to quickly find a specific type or field:

.. image:: /_static/images/developer/graphql/graphiql-doc.webp
        :width: 75%
        :alt: GraphiQL Schema Documentation Explorer
        :align: center

To test GraphQL queries type them in the left text editor, GraphiQL will provide suggestions and validate the query
against the schema in real time.

.. image:: /_static/images/developer/graphql/graphiql-query.webp
        :width: 75%
        :alt: GraphiQL Query Editor
        :align: center

.. note::
    If the GraphQL server host name used is not ``localhost``, the ``<graphql-server-url />`` in your proxy configuration file needs to be set to the appropriate url. For more information on the proxy configuration file, see: :ref:`proxy-configuration`

^^^^^^^^^^^^^^^^
GraphQL Examples
^^^^^^^^^^^^^^^^
Here you can find some examples on how to query content using GraphQL. The following examples use the built-in
``Website Editorial`` blueprint but the same concepts apply to any CrafterCMS site.

For each content-type in the site you will find a field in the root Query, the name of the field is based on the
name of the content-type so for ``/page/article`` the field will be ``page_article``.
These fields contain two sub-fields, one is the ``total`` number of items found by the query and the other is a list
of ``items``.

.. note::
  Because GraphQL only supports the underscore ``_`` character besides alphanumeric for names, if your content-type or
  field name contains the dash ``-`` character it will be replaced with a double underscore ``__``. To avoid
  unnecessary long names it is suggested to use only ``_`` or ``camelCase`` notation if possible.

One of simplest GraphQL queries you can run in CrafterCMS sites is to find all items of a given content-type.

.. code-block:: text
  :linenos:
  :caption: Query for all ``/page/article`` items

  # root query
  {
    # query for content-type '/page/article'
    page_article {
      total # total number of items found
      items { # list of items found
        # content-type fields that will be returned
        # (names are based on the content-type configuration)
        title
        author
        date_dt
      }
    }
  }

You can also run queries to find all pages, components or content items (both pages and components).

.. code-block:: text
  :linenos:
  :caption: Query for all pages

  # root query
  {
    # query for all pages
    pages {
      total # total number of items found
      items { # list of items found
        # the page fields that will be returned
        content__type
        localId
        createdDate_dt
        lastModifiedDate_dt
        placeInNav
        orderDefault_f
        navLabel
      }
    }
  }

.. code-block:: text
  :linenos:
  :caption: Query for all components

  # root query
  {
    # query for all pages
    components {
      total # total number of items found
      items { # list of items found
        # the component fields that will be returned
        content__type
        localId
        createdDate_dt
        lastModifiedDate_dt
      }
    }
  }

.. code-block:: text
  :linenos:
  :caption: Query for all content items

  # root query
  {
    # query for all pages
    contentItems {
      total # total number of items found
      items { # list of items found
        # the content item fields that will be returned
        content__type
        localId
        createdDate_dt
        lastModifiedDate_dt
      }
    }
  }

As you can expect if there are too many items for a given query the result will be too large, so you can also
implement pagination using the ``offset`` and ``limit`` parameters. For example the following query
will return only the first five items found.

.. code-block:: text
  :linenos:
  :caption: Paginated query for content-type ``/page/article``

  # root query
  {
    # query for content-type '/page/article'
    page_article(offset: 0, limit: 5) {
      total # total number of items found
      items { # list of items found
        # content-type fields that will be returned
        # (names are based on the content-type configuration)
        title
        author
        date_dt
      }
    }
  }

By default all items will be sorted using the ``lastModifiedDate_dt`` in descending order, you can change it by using
the ``sortBy`` and ``sortOrder`` parameters. For example you can use the ``date_dt`` field that is specific for the
``/page/article`` content-type to sort.

.. code-block:: text
  :linenos:
  :caption: Paginated and sorted query for content-type ``/page/article``

  # root query
  {
    # query for content-type '/page/article'
    page_article (offset: 0, limit: 5, sortBy: "date_dt", sortOrder: ASC) {
      total # total number of items found
      items { # list of items found
        # content-type fields that will be returned
        # (names are based on the content-type configuration)
        title
        author
        date_dt
      }
    }
  }

Besides finding all items for a specific content-type, it is also possible to filter the results using one or more
fields in the query. Fields will have different filters depending on their type, for example you can find items for
a specific author.

.. code-block:: text
  :linenos:
  :caption: Paginated, sorted and filtered query for content-type ``/page/article``

  # root query
  {
    # query for content-type '/page/article'
    page_article (offset: 0, limit: 5, sortBy: "date_dt", sortOrder: ASC) {
      total # total number of items found
      items { # list of items found
        # content-type fields that will be returned
        # (names are based on the content-type configuration)
        title
        # only return articles from this author
        author (filter: { matches: "Jane" })
        date_dt
      }
    }
  }

Additionally you can create complex filters using expressions like ``and``, ``or`` and ``not`` for any field:

.. code-block:: text
  :linenos:
  :caption: Filtered query with complex conditions

  # Root query
  {
    page_article {
      total
      items {
        title
        author
        date_dt
        # Filter articles that are not featured
        featured_b (
          filter: {
            not: [
              {
                equals: true
              }
            ]
          }
        )
        # Filter articles from category style or health
        categories {
          item {
            key (
              filter: {
                or: [
                  {
                    matches: "style"
                  },
                  {
                    matches: "health"
                  }
                ]
              }
            )
            value_smv
          }
        }
      }
    }
  }

You can also include fields from child components in your model, this applies to fields like ``node-selector``,
``checkbox-group`` and ``repeat`` groups. Filters can also be added to fields from child components.

.. code-block:: text
  :linenos:
  :caption: Paginated, sorted and filtered query for content-type ``/page/article`` using child components

  # root query
  {
    # query for content-type '/page/article'
    page_article (offset: 0, limit: 5, sortBy: "date_dt", sortOrder: ASC) {
      total # total number of items found
      items { # list of items found
        # content-type fields that will be returned
        # (names are based on the content-type configuration)
        title
        # only return articles from this author
        author (filter: { matches: "Jane" })
        date_dt
        categories {
          item {
            # only return articles from this category
            key (filter: { matches: "health" })
            value_smv
          }
        }
      }
    }
  }

GraphQL ``aliases`` are supported on root level query fields (``contentItems``, ``pages``, ``components`` and content
type fields).

.. code-block:: text
   :linenos:
   :caption: Query for 2016 and 2017 articles using aliases

   # root query
   {
     # query for 2016 articles
     articlesOf2016: page_article {
       items {
         localId(filter: {regex: ".*2016.*"})
       }
     },
     # query for 2017 articles
     articlesOf2017: page_article {
       items {
         localId(filter: {regex: ".*2017.*"})
       }
     }
   }

GraphQL ``fragments`` are fully supported and can be used inline or as spreads. Using fragments you can simplify
queries by extracting repeated fields or request specific fields for different content-types in as single query:

.. code-block:: text
  :linenos:
  :caption: Using fragment spreads to simplify a query

  # Fragment definition
  fragment CommonFields on ContentItem {
    localId
    createdDate_dt
  }

  # Root query
  query {
    page_article {
      total
      items {
        # Fragment spread
        ... CommonFields
        title
        author
      }
    }

    component_feature {
      total
      items {
        # Fragment spread
        ... CommonFields
        title
        icon
      }
    }
  }

.. code-block:: text
  :linenos:
  :caption: Using inline fragments to request specific fields in a single query

  # Root query
  {
    contentItems {
      total
      items {
        # Query for fields from the interface
        localId
        createdDate_dt

        # Query for fields from specific types
        ... on page_article {
          title
          author
        }

        ... on component_feature {
          title
          icon
        }
      }
    }
  }

For more detailed information about GraphQL you can read the `official documentation <https://graphql.org/>`_.

---------------------
Custom GraphQL Schema
---------------------
CrafterCMS provides a simple way to customize the built-in GraphQL schema. This feature can be used for integrating
external services or transforming values to match special requirements. Once the schema has been customized it is
possible to create apps or sites that interact only using GraphQL for getting both authored content & external services.

.. note::
  This guide assumes you are familiar with GraphQL concepts like types, fields, resolvers & fetchers, you can find more
  information in the `GraphQL documentation <https://graphql.org/>`_

After Crafter Engine builds the types corresponding to the Content Types in the site repository it will look for a
Groovy script that allows you to make customizations to the schema before making it available to the clients. By
default the full path of the script is ``/scripts/graphql/init.groovy``.

In this script you will be able to use most of the global variables described in :ref:`groovy-java-api` (except the ones
for the request scope). Additionally there is a global variable specific for this script:

+-------------+--------------------------------------------------------+--------------------------------+
| Name        | Description                                            | Type                           |
+=============+========================================================+================================+
|| ``schema`` || Holds custom types, fields, fetchers & resolvers that || |SchemaCustomizer|            |
||            || will be added to the GraphQL schema                   ||                               |
+-------------+--------------------------------------------------------+--------------------------------+

.. note::
  All customizations to the GraphQL schema need to be done programmatically, you can find more details & examples in
  the `GraphQL Java documentation <https://www.graphql-java.com>`_

^^^^^^^
Example
^^^^^^^
The following example shows how to customize the schema to integrate a service written in Groovy.

.. note::
  The example uses the public OMDb API that requires a key, to make the code work in your local environment
  you can get a free key `here <http://www.omdbapi.com/apikey.aspx>`_

#. Update the site configuration to include the needed information to connect to the OMDb API:

    .. code-block:: xml
      :caption: ``/config/engine/site-config.xml``
      :linenos:

      <site>
        <omdb>
          <baseUrl>http://www.omdbapi.com</baseUrl>
          <apiKey>XXXXXXX</apiKey>
        </omdb>
      </site>

#. Update the site context to include a new service bean:

    .. code-block:: xml
      :caption: ``/config/engine/application-context.xml``
      :linenos:

	<beans xmlns="http://www.springframework.org/schema/beans"
	       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd"
	       xmlns:context="http://www.springframework.org/schema/context">

	      <!-- Enable placeholders support -->
	      <context:property-placeholder/>

	      <!-- Define the service bean -->
	      <bean id="omdbService" init-method="init"
	            class="org.craftercms.movies.omdb.OmdbService">
	        <property name="baseUrl" value="${omdb.baseUrl}"/>
	        <property name="apiKey" value="${omdb.apiKey}"/>
	      </bean>
	</beans>

#. Add the Groovy class for the service:

   .. code-block:: groovy
       :caption: ``/scripts/classes/org/craftercms/movies/omdb/OmdbService.groovy``
       :linenos:

       package org.craftercms.movies.omdb

       // include a third-party library for easily calling the API
       @Grab(value='io.github.http-builder-ng:http-builder-ng-core:1.0.4', initClass=false)
       import groovyx.net.http.HttpBuilder

       class OmdbService {

         // the base URL for all API calls
         String baseUrl

         // the API key needed for the calls
         String apiKey

         // The http client
         HttpBuilder http

         // creates an instance of the http client with the configured base URL
         def init() {
           http = HttpBuilder.configure {
             request.uri = baseUrl
           }
         }

         // performs a search call, returns the entries as maps
         def search(String title) {
           return [
             http.get() {
               // include the needed parameters
               request.uri.query  = [ apiKey: apiKey, t: title ]
             }
           ].flatten() // return a list even if the API only returns a single entry
         }

       }

   .. note::
       Notice that the service is not performing any mapping or transformation to the values returned by the API. It
       will only parse the response from JSON into Groovy map instances. This means that the GraphQL schema needs to
       match the field names returned by the API.

#. Define the GraphQL schema to use:

    First you need to know what the API will return to create a matching schema, in any browser or REST client execute
    a call to ``http://www.omdbapi.com/?t=XXXX&apikey=XXXXXXX``. The result will look like this:

    .. code-block:: json
      :caption: OMDb API response for movies
      :linenos:

      {
        "Title": "Hackers",
        "Year": "1995",
        "Rated": "PG-13",
        "Released": "15 Sep 1995",
        "Runtime": "107 min",
        "Genre": "Comedy, Crime, Drama, Thriller",
        "Director": "Iain Softley",
        "Writer": "Rafael Moreu",
        "Actors": "Jonny Lee Miller, Angelina Jolie, Jesse Bradford, Matthew Lillard",
        "Plot": "Hackers are blamed for making a virus that will capsize five oil tankers.",
        "Language": "English, Italian, Japanese, Russian",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmExMTkyYjItZTg0YS00NWYzLTkwMjItZWJiOWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "6.2/10"
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "33%"
          },
          {
            "Source": "Metacritic",
            "Value": "46/100"
          }
        ],
        "Metascore": "46",
        "imdbRating": "6.2",
        "imdbVotes": "62,125",
        "imdbID": "tt0113243",
        "Type": "movie",
        "DVD": "24 Apr 2001",
        "BoxOffice": "N/A",
        "Production": "MGM",
        "Website": "N/A",
        "Response": "True"
      }

    .. code-block:: json
      :caption: OMDb API response for series
      :linenos:

      {
        "Title": "Friends",
        "Year": "1994–2004",
        "Rated": "TV-14",
        "Released": "22 Sep 1994",
        "Runtime": "22 min",
        "Genre": "Comedy, Romance",
        "Director": "N/A",
        "Writer": "David Crane, Marta Kauffman",
        "Actors": "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc",
        "Plot": "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        "Language": "English, Dutch, Italian, French",
        "Country": "USA",
        "Awards": "Won 1 Golden Globe. Another 68 wins & 211 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "8.9/10"
          }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.9",
        "imdbVotes": "696,324",
        "imdbID": "tt0108778",
        "Type": "series",
        "totalSeasons": "10",
        "Response": "True"
      }

    The API also has support for single episodes but those will not be included in this example. Not all fields returned
    by the API might be needed in the GraphQL schema, for this example we will include a small subset.

    #. The first step is to define a generic entry type that includes all common fields present in movies and series:

        .. code-block:: text
          :caption: GraphQL interface for all entries
          :linenos:

          interface OmdbEntry {
            Title: String!
            Genre: String!
            Plot: String!
            Actors: [String!]
          }

        Notice that the API returns a single string for the ``Actors`` fields but in the GraphQL schema it will be
        defined as a list of strings, a custom data fetcher will handle this transformation.

    #. Next step is to define the concrete types for movies and series, those will have all fields from the parent
        type but include new ones:

        .. code-block:: text
          :caption: GraphQL type for movies
          :linenos:

          type OmdbMovie implements OmdbEntry {
            Title: String!
            Genre: String!
            Plot: String!
            Actors: [String!]

            Production: String!
          }

        .. code-block:: text
          :caption: GraphQL type for series
          :linenos:

          type OmdbSeries implements OmdbEntry {
            Title: String!
            Genre: String!
            Plot: String!
            Actors: [String!]

            totalSeasons: Int!
          }

    #. Finally the service call will be exposed using a wrapper type:

        .. code-block:: text
          :caption: GraphQL type for the service
          :linenos:

          type OmdbService {

            search(title: String): [OmdbEntry!]

          }

#. Add the GraphQL schema customizations to create the schema defined in the previous step:

    .. code-block:: groovy
      :caption: ``/script/graphql/init.groovy``
      :linenos:

      package graphql

      import static graphql.Scalars.GraphQLInt
      import static graphql.Scalars.GraphQLString
      import static graphql.schema.GraphQLArgument.newArgument
      import static graphql.schema.GraphQLFieldDefinition.newFieldDefinition
      import static graphql.schema.GraphQLInterfaceType.newInterface
      import static graphql.schema.GraphQLList.list
      import static graphql.schema.GraphQLNonNull.nonNull
      import static graphql.schema.GraphQLObjectType.newObject

      // Define the fields common to all types
      def entryFields = [
        newFieldDefinition()
          .name('Title')
          .description('The title of the entry')
          .type(nonNull(GraphQLString))
          .build(),
        newFieldDefinition()
          .name('Genre')
          .description('The genre of the entry')
          .type(nonNull(GraphQLString))
          .build(),
        newFieldDefinition()
          .name('Plot')
          .description('The plot of the entry')
          .type(nonNull(GraphQLString))
          .build(),
        newFieldDefinition()
          .name('Actors')
          .description('The main cast of the entry')
          .type(list(nonNull(GraphQLString)))
          .build()
      ]

      // Define the parent type
      def entryType = newInterface()
        .name('OmdbEntry')
        .description('The generic entry returned by the API')
        .fields(entryFields)
        .build()

      // Define the type for movies
      def movieType = newObject()
        .name('OmdbMovie')
        .description('The entry returned for movies by the API')
        // Use the parent type
        .withInterface(entryType)
        // GraphQL required to repeat all fields from the interface
        .fields(entryFields)
        .field(newFieldDefinition()
          .name('Production')
          .description('The studio of the entry')
          .type(nonNull(GraphQLString))
        )
        .build()

      def seriesType = newObject()
        .name('OmdbSeries')
        .description('The entry returned for series by the API')
        // Use the parent type
        .withInterface(entryType)
        // GraphQL required to repeat all fields from the interface
        .fields(entryFields)
        .field(newFieldDefinition()
          .name('totalSeasons')
          .description('The number of seasons of the entry')
          .type(nonNull(GraphQLInt))
        )
        .build()

      // Add the resolver for the new types
      schema.resolver('OmdbEntry', { env ->
        // The API returns the type as a field
        switch(env.object.Type) {
          case 'movie':
            return movieType
          case 'series':
            return seriesType
        }
      })

      // Add the child types to the schema
      // (this is needed because they are not used directly in any field)
      schema.additionalTypes(movieType, seriesType)

      // Add the new fields to the top level type
      schema.field(newFieldDefinition()
        .name('omdb') // this field is used to wrap the service calls
        .description('All operations related to the OMDb API')
        .type(newObject() // inline type definition
          .name('OmdbService')
          .description('Exposes the OMDb Service')
          .field(newFieldDefinition()
            .name('search')
            .description('Performs a search by title')
            // uses the parent type, the resolver will define the concrete type
            .type(list(nonNull(entryType)))
            .argument(newArgument()
              .name('title')
              .description("The title to search")
              .type(GraphQLString)
            )
          )
        )
      )

      // Add the fetcher for the search field,
      schema.fetcher('OmdbService', 'search', { env ->
        // calls the Groovy bean passing the needed parameters
        applicationContext.omdbService.search(env.getArgument('title'))
      })

      // Define a fetcher to split the value returned by the API for the Actors
      def actorsFetcher = { env -> env.source.Actors?.split(',')*.trim() }

      // Add the fetcher to the concrete types
      schema.fetcher('OmdbMovie', 'Actors', actorsFetcher)
      schema.fetcher('OmdbSeries', 'Actors', actorsFetcher)


#. Verify how the GraphQL schema has changed:

    The new field ``odmb.search`` is now available and can be called with different parameters, you can requests
    different fields depending on the type of each result.

    For movies the ``Production`` field is returned:

    .. image:: /_static/images/developer/graphql/custom/movies.webp
      :width: 90%
      :alt: GraphQL OMDb query returning movies
      :align: center

    For series the ``totalSeasons`` is returned:

    .. image:: /_static/images/developer/graphql/custom/series.webp
      :width: 90%
      :alt: GraphQL OMDb query returning series
      :align: center

This is a very simple example that shows the basic features to integrate a service in the schema, but it is possible
to use any GraphQL feature such as mutations to wrap a full REST API or database.

.. |SchemaCustomizer| replace:: :javadoc_base_url:`SchemaCustomizer <engine/org/craftercms/engine/graphql/impl/SchemaCustomizer.html>`
