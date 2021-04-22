package org.company.site.api

/*
  External service to store & retrieve data, in real life this could be using an external REST API or DB
 */

interface ExternalApi {

    def saveFormSubmission(def formId, def title, def author, def message)

    def getPostViews(def postId)

}
