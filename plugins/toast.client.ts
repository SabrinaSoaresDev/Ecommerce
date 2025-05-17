// plugins/toast.client.ts
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { defineNuxtPlugin } from '#app'
import { useToast } from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  // Configuração do plugin
  nuxtApp.vueApp.use(Toast, {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    transition: 'Vue-Toastification__fade',
  })

  // Injeta o toast para uso global
  const toast = useToast()
  
  return {
    provide: {
      toast: {
        success: (message: string) => toast.success(message),
        error: (message: string) => toast.error(message),
        info: (message: string) => toast.info(message)
      }
    }
  }
})