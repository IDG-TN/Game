export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "game",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/rem/flexible.js", type: "text/javascript", charset: "utf-8" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["vant/lib/index.less"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import compoççnents (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
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
