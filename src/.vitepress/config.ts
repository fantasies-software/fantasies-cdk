import type { UserConfig } from 'vitepress'

import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'
import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions: UserConfig = {
  base: '/fantasies-cdk/',
  title: '@fantasies/cdk',
  description: 'a set of toolkits for Vue',
  sitemap: {
    hostname: 'https://fantasies-software.github.io/fantasies-cdk',
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
      { text: 'Composables', link: '/composables/use-demo' },
      { text: 'Directives', link: '/directives/v-demo' },
      { text: 'Utils', link: '/utils/array' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Fantasies Software',
    },
  },
  // socialLinks: [
  //   { icon: 'github', link: 'https://github.com/fantasies-software/fantasies-cdk' },
  // ],
}

const vitePressSidebarOptions: VitePressSidebarOptions = {
  basePath: '/fantasies-cdk/',
  excludeByGlobPattern: ['changelog.md', 'README.md'],
  collapsed: true,
  capitalizeFirst: true,
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
