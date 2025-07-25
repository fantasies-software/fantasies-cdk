import { defineConfig } from 'vitepress'

import { withSidebar } from 'vitepress-sidebar';
import { withI18n } from 'vitepress-i18n';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const vitePressOptions = {
  title: '@fantasies/cdk',
  description: 'a set of toolkits for Vue',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Composables', link: '/composables' },
      { text: 'Directives', link: '/directives' },
      { text: 'Utils', link: '/utils/array' },
    ]
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/fantasies-software/fantasies-cdk' },
  ],
}

const vitePressSidebarOptions: VitePressSidebarOptions = {
  excludeByGlobPattern: ['changelog.md', 'README.md'],
  collapsed: false,
  capitalizeFirst: true,
  includeFolderIndexFile:true,
  includeRootIndexFile:false,
  useTitleFromFileHeading: false,
  useTitleFromFrontmatter: false,
  useFolderTitleFromIndexFile: false,
  frontmatterOrderDefaultValue: 9,
  sortMenusByFrontmatterOrder: false,
  documentRootPath: '/src',
}

const vitePressI18nConfig = {
  locales: ['en', 'zhHans'],
};

export default defineConfig(
  withSidebar(withI18n(vitePressOptions, vitePressI18nConfig), vitePressSidebarOptions)
);
