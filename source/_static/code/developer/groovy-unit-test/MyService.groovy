package org.company.site.api

/*
  Custom service that will be invoked from other controllers like scheduled jobs, page or REST scripts
 */

interface MyService {

    def saveFormSubmission(def title, def author, def message)

    def getPostViews(def postId)

    def getPostsSummary(def date)

}