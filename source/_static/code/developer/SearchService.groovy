package org.craftercms.sites.editorial

import org.opensearch.client.opensearch._types.query_dsl.BoolQuery
import org.opensearch.client.opensearch._types.query_dsl.Query
import org.opensearch.client.opensearch._types.query_dsl.TextQueryType
import org.opensearch.client.opensearch.core.SearchRequest
import org.apache.commons.lang3.StringUtils
import org.craftercms.engine.service.UrlTransformationService
import org.craftercms.search.opensearch.client.OpenSearchClientWrapper

class SearchService {

    static final String ARTICLE_CONTENT_TYPE = "/page/article"
    static final List<String> ARTICLE_SEARCH_FIELDS = [
            'subject_t^1.5',
            'sections_o.item.section_html^1.0'
    ]

    OpenSearchClientWrapper searchClient
    UrlTransformationService urlTransformationService

    SearchService(OpenSearchClientWrapper searchClient, UrlTransformationService urlTransformationService) {
        this.searchClient = searchClient
        this.urlTransformationService = urlTransformationService
    }

    def search(userTerm) {
        def query = new BoolQuery.Builder()

        // Filter by content-type
        query.filter(q -> q
                .match(m -> m
                        .field("content-type")
                        .query(v -> v
                                .stringValue(ARTICLE_CONTENT_TYPE)
                        )
                )
        )

        if (userTerm) {
            // Check if the user is requesting an exact match with quotes
            def matcher = userTerm =~ /.*("([^"]+)").*/
            if (matcher.matches()) {
                // Using must excludes any doc that doesn't match with the input from the user
                query.must(q -> q
                        .multiMatch(m -> m
                                .query(matcher.group(2))
                                .fields(ARTICLE_SEARCH_FIELDS)
                                .fuzzyTranspositions(false)
                                .autoGenerateSynonymsPhraseQuery(false)
                        )
                )

                // Remove the exact match to continue processing the user input
                userTerm = StringUtils.remove(userTerm, matcher.group(1))
            } else {
                // Exclude docs that do not have any optional matches
                query.minimumShouldMatch("1")
            }

            if (userTerm) {
                // Using should makes it optional and each additional match will increase the score of the doc
                query
                // Search for phrase matches including a wildcard at the end and increase the score for this match
                        .should(q -> q
                                .multiMatch(m -> m
                                        .query(userTerm)
                                        .fields(ARTICLE_SEARCH_FIELDS)
                                        .type(TextQueryType.PhrasePrefix)
                                        .boost(1.5f)
                                )
                        )
                // Search for matches on individual terms
                        .should(q -> q
                                .multiMatch(m -> m
                                        .query(userTerm)
                                        .fields(ARTICLE_SEARCH_FIELDS)
                                )
                        )
            }
        }

        SearchRequest request = SearchRequest.of(r -> r
                .query(query.build()._toQuery())
        )

        def result = searchClient.search(request, Map)

        if (result) {
            return processUserSearchResults(result)
        } else {
            return []
        }
    }

    private def processUserSearchResults(result) {
        def articles = []
        def hits = result.hits().hits()

        if (hits) {
            hits.each {hit ->
                def doc = hit.source()
                def article = [:]
                article.id = doc.objectId
                article.objectId = doc.objectId
                article.path = doc.localId
                article.title = doc.title_t
                article.url = urlTransformationService.transform("storeUrlToRenderUrl", doc.localId)

                articles << article
            }
        }

        return articles
    }

}
