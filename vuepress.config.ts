import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: 'malekim/v-idle',
  }),
  source: '../',
  base: '/v-idle/',
  lang: 'en-US',
  title: 'malekim/v-idle',
  description:
    'V-idle is a universal Vue plugin compatible with Vue 2 and Vue 3 to detect idle/non-active users',
})
