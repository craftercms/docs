package org.company.site.impl

import org.company.site.api.ExternalApi
import org.company.site.api.MySearchService
import org.craftercms.core.service.Context
import org.craftercms.core.util.cache.CacheTemplate
import org.craftercms.engine.service.context.SiteContext
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Spy
import org.mockito.junit.MockitoJUnitRunner

import static org.mockito.ArgumentMatchers.any
import static org.mockito.ArgumentMatchers.eq
import static org.mockito.Mockito.verify
import static org.mockito.Mockito.when

/*
  Tests for the custom service
 */

@RunWith(MockitoJUnitRunner)
class MyServiceImplTest {

    static final def FORM_ID = "myFormId"

    static final def POST_ID_1 = "myPostId1"

    static final def POST_ID_2 = "myPostId2"

    static final def POST_VIEWS_1 = 42

    static final def POST_VIEWS_2 = 0

    static final def REFRESH_FREQ = 5

    @Spy
    SiteContext siteContext

    @Mock
    Context context

    @Mock
    CacheTemplate cacheTemplate

    @Mock
    MySearchService searchService

    @Mock
    ExternalApi externalApi

    @InjectMocks
    MyServiceImpl myServiceImpl

    @Before
    void setUp() {
        myServiceImpl.formId = FORM_ID
        myServiceImpl.refreshFrequency = REFRESH_FREQ

        siteContext.context = context
        SiteContext.current = siteContext

        when(externalApi.saveFormSubmission(eq(FORM_ID), any(), any(), any())).thenReturn(true)
        when(externalApi.getPostViews(eq(POST_ID_1))).thenReturn(POST_VIEWS_1)
        when(externalApi.getPostViews(eq(POST_ID_2))).thenReturn(POST_VIEWS_2)

        when(cacheTemplate.getObject(eq(context), any(), any(), any())).then({ i -> i.getArgument(2).execute() })

        when(searchService.getPostsForDate(any())).thenReturn([
                [ id: POST_ID_1 ],
                [ id: POST_ID_2]
        ])
    }

    @Test
    void testFormSubmission() {
        def title = "My New Post"
        def author = "John Doe"
        def message = "Is this working?"

        assert myServiceImpl.saveFormSubmission(title, author, message) == true
        verify(externalApi).saveFormSubmission(eq(FORM_ID), eq(title), eq(author), eq(message))
    }

    @Test
    void testGetPostViews() {
        assert myServiceImpl.getPostViews(POST_ID_1) == 42
    }

    @Test
    void testGetPostsSummary() {
        def result = myServiceImpl.getPostsSummary(new Date())

        assert result.size() == 2
        assert result[0].views == POST_VIEWS_1
        assert result[1].views == POST_VIEWS_2
    }

}