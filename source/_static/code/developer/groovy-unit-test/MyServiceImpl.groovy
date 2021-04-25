package org.company.site.impl

import org.company.site.api.MySearchService
import org.craftercms.core.service.CachingOptions
import org.craftercms.core.util.cache.CacheTemplate
import org.company.site.api.ExternalApi
import org.company.site.api.MyService
import org.craftercms.engine.service.context.SiteContext

/*
  Implementation of the custom service
 */

class MyServiceImpl implements MyService {

    protected ExternalApi externalApi

    protected CacheTemplate cacheTemplate

    protected MySearchService searchService

    protected def formId

    protected def refreshFrequency

    def saveFormSubmission(def title, def author, def message) {
        return externalApi.saveFormSubmission(formId, title, author, message)
    }

    def getPostViews(def postId) {
        def context = SiteContext.current.context
        def options = new CachingOptions()
        options.refreshFrequency = refreshFrequency
        return cacheTemplate.getObject(context, options, { externalApi.getPostViews(postId) }, "post-views-", postId)
    }

    def getPostsSummary(def date) {
        def posts = searchService.getPostsForDate(date)
        return posts.collect { post ->
            [
                    id: post.id,
                    views: getPostViews(post.id)
            ]
        }
    }

}
