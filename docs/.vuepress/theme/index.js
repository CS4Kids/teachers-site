const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    KidsLayout: path.resolve(__dirname, 'layouts/KidsLayout.vue'),
    ContactLayout: path.resolve(__dirname, 'layouts/ContactLayout.vue'),
    AuthLayout: path.resolve(__dirname, 'layouts/AuthLayout.vue'),
    ComingSoonLayout: path.resolve(__dirname, 'layouts/ComingSoonLayout.vue'),
  },
}