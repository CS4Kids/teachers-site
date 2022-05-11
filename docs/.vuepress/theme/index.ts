
import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const cs4kidsTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-cs4kids',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/404.vue'),
      KidsLayout: path.resolve(__dirname, 'layouts/KidsLayout.vue'),
      ContactLayout: path.resolve(__dirname, 'layouts/ContactLayout.vue'),
      AuthLayout: path.resolve(__dirname, 'layouts/AuthLayout.vue'),
      TeachersLayout: path.resolve(__dirname, 'layouts/TeachersLayout.vue'), 
      ComingSoonLayout: path.resolve(__dirname, 'layouts/ComingSoonLayout.vue'),
      },
     
  }
}
