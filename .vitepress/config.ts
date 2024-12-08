import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ars Factum",
  description: "Homebrew creations for Dungeons & Dragons",
  base: "/ars-factum/",
  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Alchemy Manual', link: '/alchemy/' }
    ],

    sidebar: [
      {
        text: 'Alchemy Manual',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/alchemy/' },
          { text: 'Poison', link: '/alchemy/poison' },
        ]
      },
      {
        text: 'Magic Items',
        collapsed: true,
        items: [
	  { text: 'Overview', link: '/magic-items/' },
          { text: 'Books', link: '/magic-items/books' },
          { text: 'Equipment', link: '/magic-items/equipment' },
          { text: 'Miscellaneous Items', link: '/magic-items/misc' },
          { text: 'Poison Items', link: '/magic-items/poison' },
          { text: 'Staffs and Wands', link: '/magic-items/staffs' },
        ]
      },
      {
          text: 'Naraka\'s Nefarious Menagerie',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/monsters/' },
            { text: 'Golorr-possessed Korinn', link: '/monsters/golorr-korinn' },
          ]
      },
      {
          text: 'Homebrew Rules',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/rules/' },
            { text: 'Resurrection', link: '/rules/resurrection' },
            { text: 'Schizophrenic', link: '/rules/schizophrenic' }
          ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
