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
    },
  },

  components: true,

  css: ['~/assets/css/main.scss'],

  vite: {
    plugins: [eslintPlugin()],
  },

  modules: ['@nuxtjs/tailwindcss'],
});
