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
    '@nuxt/image',
  ],
  image: {
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
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
