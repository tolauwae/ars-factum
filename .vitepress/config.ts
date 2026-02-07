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
      { text: 'Invention Manual', link: '/inventing/' }
    ],

    sidebar: [
      {
        text: 'Invention Manual',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/inventing/' },
          { text: 'Rules', link: '/inventing/invention' },
          { text: 'Poison', link: '/inventing/poison' },
        ]
      },
      {
        text: 'Backgrounds',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/backgrounds/' },
          { text: 'Schizophrenic', link: '/backgrounds/schizophrenic' },
        ]
      },
      {
          text: 'Classes',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/classes/' },
            { text: 'Pact of the Raven Queen', link: '/classes/ravenqueen' },
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
            { text: 'Weapon Customisation', link: '/rules/weapons' },
          ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
