---
layout: home
title: Fantasies CDK
titleTemplate: Fantasies CDK
description:  a set of toolkits for vue
head:
  - - meta
    - name: description
      content: v-echarts-ui is a Vue3 Charts Component Library
  - - meta
    - name: keywords
      content: v-echarts-ui | echarts Vue3 Charts Component Library

editLink: true
lastUpdated: true
hero:
  name: "@fantasies/cdk"
  text: "a set of toolkits for vue"
  tagline: Simple & Convenient
  image:
    src: https://avatars.githubusercontent.com/u/220744167
  actions:
    - theme: alt
      text: Components
      link: /components/Button
    - theme: alt
      text: Composables
      link: /composables/use-demo
    - theme: alt
      text: Directives
      link: /directives/v-demo
    - theme: alt
      text: Utils
      link: /utils/array

features:
  - title: Simpleness
    icon: 🧱
    details: All implementations are clearly visible
  - title:  Easily use
    icon: 🧠
    details: Easy to use without any restrictions
  - title: Test completed
    icon: ✅
    details: Coverage test is complete
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [

  {
    avatar: 'https://www.github.com/ronger-x.png',
    name: 'rong',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ronger-x' },
    ]
  },
   {
    avatar: 'https://www.github.com/heycmm.png',
    name: 'heycmm',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/heycmm' },
    ]
  },
  {
    avatar: 'https://www.github.com/zhumengyua.png',
    name: 'zhu',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/zhumengyua' },
    ]
  },
  {
    avatar: 'https://www.github.com/aeet.png',
    name: 'aeet',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/aeet' },
    ]
  },
  {
    avatar: 'https://www.github.com/devcui.png',
    name: 'cui',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/devcui' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of @fantasies/cdk is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
