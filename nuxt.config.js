export default defineNuxtConfig({
  modules: [
    '@tresjs/nuxt',
    [
      '@storyblok/nuxt',
      {
        /*
        If you would like to use this as a template for your project, simply provide the access token here.
        Also please remove line 14 (usePlugin) as well as the file plugins/storyblok.js.
        */
        // accessToken: process.env.STORYBLOK_TOKEN,
        usePlugin: false,
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  ssr: false,
  css: ['@/assets/css/fonts.css'],
  runtimeConfig: {
    public: {
      templateToken: process.env.STORYBLOK_TOKEN,
      customParent: process.env.STORYBLOK_CUSTOM_PARENT,
      shopifyDomain: process.env.SHOPIFY_DOMAIN,
      shopifyToken: process.env.SHOPIFY_TOKEN,
      bigCommerceUrl: process.env.BIGCOMMERCE_STOREURL,
      bigCommerceToken: process.env.BIGCOMMERCE_TOKEN,
    },
  },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
})
