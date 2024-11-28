import { isCI, isDevelopment, isWindows } from 'std-env'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error - see https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    ...(isDevelopment || isWindows) ? [] : ['nuxt-security'],
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],
  ssr: false,
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  sourcemap: isDevelopment,
  compatibilityDate: '2024-11-01',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
