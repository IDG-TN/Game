export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Games",
    meta: [
      { charset: "utf-8" },
      { name: "referrer", content: "no-referrer" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/youxi.svg" }],
    script: [
      { src: "/rem/flexible.js", type: "text/javascript", charset: "utf-8" }
    ]
  },
  loading: true,
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import compoççnents (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    proxy: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: "/_nuxt/",
    postcss: [
      require("postcss-px2rem")({
        remUnit: 75
      }),
      require("autoprefixer")({
        browsers: ["Android >= 4.0", "iOS >= 7"]
      })
    ]
  }
};
