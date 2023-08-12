package org.company.site.api

/*
  Service that wraps search to hide queries & result mapping from other services
 */

interface MySearchService {

    def getPostsForDate(def date)

}