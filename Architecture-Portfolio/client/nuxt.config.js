export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Architecture-Portfolio',
    router: {
      base: '/Thesis-Project/'
    },
    htmlAttrs: {
      lang: 'en',
    },
    script:[
      {
        src: 'js/toggle.js',
        body: true,
        mode: 'client',
      },],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/css/navbar.css',
        '~/assets/style/css/mobile-responsive.css'
      ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:  "http://localhost:8000/api",
              //"http://localhost:3000",
              //'http://127.0.0.1:8000/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
 
}
