// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Outliant",
      meta: [],
      link: [
        { rel: "icon", type: "image/png", href: "/img/favicon.png" },
        { rel: "stylesheet", href: "/css/GeneralSans.css" },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/GeneralSans-Regular.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  imports: {
    dirs: ["~/components", "~/layouts", "~/pages", "~/plugins"],
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
});
