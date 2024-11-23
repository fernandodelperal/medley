// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      ignore: ['/_tailwind'],
      failOnError: false
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: '2024-08-19',
  devtools: {
    enabled: true
  },
  app: {
    baseURL: '/medley/'
  },
  typescript: {
    shim: false
  }
})
