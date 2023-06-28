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
          { text: 'Magical Weapons', link: '/magic-items/weapons' },
          { text: 'Miscellaneous items', link: '/magic-items/misc' },
          { text: 'Poison Items', link: '/magic-items/poison' },
          { text: 'Staffs', link: '/magic-items/staffs' },
        ]
      },
      {
        text: 'Naraka\'s Nefarious Menagerie',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/monsters/' },
          { text: 'The Librarians', link: '/monsters/librarian' },
          { text: 'Golorr-possessed Korinn', link: '/monsters/golorr-korinn' },
        ]
      },   
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
