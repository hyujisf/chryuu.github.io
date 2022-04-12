const path = require('path')
const generate_meta = require('./meta.js')

const meta = {
  title: 'nuxt-blog',
  description: 'Your daily chunk of code content',
  color: '#42b883',
  url: 'https://yuu27q.github.io',
  // image: 'https://yuu27q.github.io/full_logo.png',
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicPath: '/yuu27q.github.io/',

  // Transitions
  layoutTransition: 'layout',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // ...generate_meta(meta),
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: true,
    markdown: {
      remarkExternalLinks: {
        target: '_blank',
        rel: 'nofollow noopener noreferrer',
      },
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css',
      },
    },
  },
  // Nuxt Images
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    presets: {
      preview: {
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 400,
          height: 300,
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
