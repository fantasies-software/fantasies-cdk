import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'

import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  base: '/fantasies-cdk/',
  title: '@fantasies/cdk',
  description: 'a set of toolkits for Vue',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
      { text: 'Composables', link: '/composables/use-demo' },
      { text: 'Directives', link: '/directives/v-demo' },
      { text: 'Utils', link: '/utils/array' },
    ],
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/fantasies-software/fantasies-cdk' },
  ],
}

const vitePressSidebarOptions: VitePressSidebarOptions = {
  basePath: '/fantasies-cdk/',
  excludeByGlobPattern: ['changelog.md', 'README.md'],
  collapsed: false,
  capitalizeFirst: false,
  includeFolderIndexFile: true,
  includeRootIndexFile: false,
  useFolderLinkFromIndexFile: false,
  useTitleFromFileHeading: false,
  useTitleFromFrontmatter: false,
  useFolderTitleFromIndexFile: false,
  frontmatterOrderDefaultValue: 9,
  sortMenusByFrontmatterOrder: false,
  documentRootPath: '/src',
}

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions),
)
