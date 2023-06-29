import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ars Factum",
  description: "Homebrew creations for Dungeons & Dragons",
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
          { text: 'Staffs', link: '/magic-items/staffs' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
