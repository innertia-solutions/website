export default defineNuxtConfig({
  compatibilityDate: '2026-05-09',

  future: {
    compatibilityVersion: 4,
  },

  pages: true,

  css: ['~/assets/css/custom.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=3' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=3' },
      ],
    },
  },
})
