import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    setupFiles: ['./tests/setup.ts'],
    environment: 'happy-dom',
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
    coverage: {
      enabled: true,
      reporter: ['html'],
    },
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})
