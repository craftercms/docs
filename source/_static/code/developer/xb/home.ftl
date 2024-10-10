<#import "/templates/system/common/crafter.ftl" as crafter />

<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<!doctype html>
<html lang="en">
<head>
  <#include "/templates/web/fragments/head.ftl">
  <@crafter.head/>
</head>
<body class="is-preload">
<@crafter.body_top/>

<!-- Wrapper -->
<div id="wrapper">

  <!-- Main -->
  <div id="main">
    <div class="inner">

      <!-- Header -->
      <@crafter.renderComponentCollection $field="header_o"/>
      <!-- /Header -->

      <!-- Banner -->
      <section id="banner">
        <div class="content">
          <@crafter.header $field="hero_title_html">
            ${contentModel.hero_title_html}
          </@crafter.header>
          <@crafter.div $field="hero_text_html">
            ${contentModel.hero_text_html}
          </@crafter.div>
        </div>
        <span class="image object">
          <@crafter.img $field="hero_image_s" src=(contentModel.hero_image_s!"") alt=""/>
        </span>
      </section>
      <!-- /Banner -->

      <!-- Section: Features -->
      <section>
        <header class="major">
          <@crafter.h2 $field="features_title_t">
            ${contentModel.features_title_t}
          </@crafter.h2>
        </header>
        <@crafter.renderComponentCollection
          $field="features_o"
          $containerAttributes={ "class": "features" }
          $itemAttributes={ "class": "feature-container" }
        />
      </section>
      <!-- /Section: Features -->

      <!-- Section: Articles -->
      <section>
        <header class="major">
          <h2>Featured Articles</h2>
        </header>
        <div class="posts">
          <!--
          <#list articles as article>
            <@crafter.article $model=article>
              <a href="${article.url}" class="image">
                <@crafter.img
                  $model=article
                  $field="image_s"
                  src=article.image???then(article.image, "/static-assets/images/placeholder.png")
                  alt=""
                />
              </a>
              <h3>
                <@crafter.a $model=article $field="subject_t" href="${article.url}">
                  ${article.title}
                </@crafter.a>
              </h3>
              <@crafter.p $model=article $field="summary_t">
                ${article.summary}
              </@crafter.p>
              <ul class="actions">
                <li>
                  <a href="${article.url}" class="button">More</a>
                </li>
              </ul>
            </@crafter.article>
          </#list>
          -->
        </div>
      </section>
      <!-- /Section: Articles -->

    </div>
  </div>
  <!-- /Main -->

  <!-- Left Rail -->
  <@crafter.renderComponentCollection $field="left_rail_o" />
  <!-- /Left Rail -->

</div>
<!-- /Wrapper -->

<script>
  const page = {
    articles: null,
    template: `
      <article {ice}>
        <a href="{url}" class="image">
          <img src="{img}" alt="">
        </a>
        <h3><a href="{url}">{title}</a></h3>
        <p>{summary}</p>
        <ul class="actions">
          <li><a href="{url}" class="button">More</a></li>
        </ul>
      </article>`,
    xbReady: new Promise((resolve) => {
      <#if modePreview>
        const resolveOnCheckIn = () => {
          window.craftercms.xb.guestCheckIn$?.subscribe(() => {
            resolve(true);
          })
        }
        if (window.craftercms?.xb) {
          resolveOnCheckIn();
        } else {
          document.addEventListener('craftercms.xb:loaded', () => {
            resolveOnCheckIn();
          });
        }
      <#else>
        resolve(true)
      </#if>
    }),
    renderArticles() {
      page.xbReady.then(() => {
        const postsContainer = document.querySelector('.posts');
        let html = [];
        window.craftercms?.xb.deregisterElements(postsContainer);
        page.articles.forEach((article) => {
          html.push(
            page.template
              .replaceAll('{url}', article.url)
              .replaceAll('{img}', article.img)
              .replaceAll('{title}', article.title)
              .replaceAll('{summary}', article.summary)
              .replace(
                '{ice}',
                <#if modePreview>
                Object.entries(
                  window.craftercms.xb.getICEAttributes({
                    modelId: article.id,
                    path: article.path,
                    isAuthoring: true
                  })
                ).map(([attr, value]) => attr + '=' + '"' + value + '"').join(' ')
                <#else>
                ''
                </#if>
              )
          )
        });
        postsContainer.innerHTML = html.join('\n');
        window.craftercms?.xb.registerElements(postsContainer);
      });
    },
    loadArticles() {
      setTimeout(() => {
        page.articles = [
          <#list articles as article>
          {
            path: "${article.storeUrl}",
            id: "${article.objectId}",
            img: '${article.image???then(article.image, "/static-assets/images/placeholder.png")}',
            title: "${article.title}",
            summary: "${article.summary}",
            url: "${article.url}"
          }<#sep>, </#sep>
          </#list>
        ];
        page.renderArticles();
      });
    }
  };
  page.loadArticles();
</script>
<#include "/templates/web/fragments/scripts.ftl">
<@crafter.body_bottom/>

<#-- -- >
<script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.js"></script>
<script src="https://unpkg.com/@craftercms/utils"></script>
<script src="https://unpkg.com/@craftercms/classes"></script>
<script src="https://unpkg.com/@craftercms/content"></script>
<script>
  const { getItem } = craftercms.content;
  getItem(
    '/site/components/tokenized.xml',
    { baseUrl: 'http://localhost:8080', site: 'editorial' }
  ).subscribe((response) => {
    console.log(JSON.stringify(response, null, 2));
  });
</script>
<#-- -->

</body>
</html>
