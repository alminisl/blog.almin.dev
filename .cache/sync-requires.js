const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-js": hot(preferDefault(require("/home/almin/projects/Blog/src/templates/index.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/home/almin/projects/Blog/src/templates/page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/almin/projects/Blog/src/templates/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/almin/projects/Blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/almin/projects/Blog/src/pages/404.js")))
}

