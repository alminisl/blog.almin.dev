// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-js": () => import("/home/almin/projects/Blog/src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-page-js": () => import("/home/almin/projects/Blog/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-tags-js": () => import("/home/almin/projects/Blog/src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---cache-dev-404-page-js": () => import("/home/almin/projects/Blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/almin/projects/Blog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/almin/projects/Blog/.cache/data.json")

