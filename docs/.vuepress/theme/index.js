const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    KidsLayout: path.resolve(__dirname, 'layouts/Kids.vue'),
    ComingSoonLayout: path.resolve(__dirname, 'layouts/ComingSoon.vue'),
  },
}