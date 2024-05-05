export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        /*
        If you would like to use this as a template for your project, simply provide the access token here.
        Also please remove line 14 (usePlugin) as well as the file plugins/storyblok.js.
        */
        accessToken: 'MdwgPSjwSmQQcLgsiUFivwtt',
      },
    ],
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
  ],
  ssr: false,
  css: ['@/assets/css/fonts.css'],
  runtimeConfig: {
    public: {
      templateToken: process.env.STORYBLOK_TOKEN,
      customParent: process.env.STORYBLOK_CUSTOM_PARENT,
    },
  },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
})
