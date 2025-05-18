export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['@/assets/styles/main.css'],

  nitro: {
    preset: 'vercel'
  },
  vite: {
    optimizeDeps: { 
      include: ['vue-toastification']
    }
  }
})