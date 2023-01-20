import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  components: false,
  imports: {
    autoImport: false
  },
  app: {
    head: {
      title: 'Безопасный путь в лучшую жизнь',
    },
  },
})
