// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'cats-on-nuxt3',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'cats-on-nuxt3',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'cats-on-nuxt3',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Tilt+Neon&family=VT323&display=swap',
          defer: true,
        },
      ],
    },
  },

  components: true,

  css: ['~/assets/css/main.scss'],

  vite: {
    plugins: [eslintPlugin()],
  },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://catfact.ninja/',
    },
  },
});
