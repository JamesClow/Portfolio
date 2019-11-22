
export default {
  mode: 'universal',
  head: {
    title: 'James Clow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio Website' },
      
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#e24b74" },
      
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  
  // router: {
  //   extendRoutes (routes, resolve) {
  //     routes.push({
  //       name: 'default',
  //       path: '/',
  //       component: resolve(__dirname, 'pages/projects/index.vue')
  //     })
  //   }
  // },
  loading: { color: '#fff' },
  css: [],
  plugins: [
    '~/plugins/directives.js',
    // { src: '~/plugins/TweenMax.min.js', mode: 'client' },
    // { src: '~/plugins/pixi.min.js', mode: 'client' },
    // { src: '~/plugins/destortion', mode: 'client' },
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-fullpage.js',
  ],
  axios: {
    
  },
  build: {
    // quiet: true,
  },
  performance: {
    gzip: false
  },
  server: {
    // clientLogLevel: 'silent'
  },
  router: {
    base: '/'
  },
  dev: false
}
