package org.company.site.api

/*
  Service that wraps elasticsearch to hide queries & result mapping from other services
 */

interface MySearchService {

    def getPostsForDate(def date)

}