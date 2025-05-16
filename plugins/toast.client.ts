// plugins/toast.client.ts

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    transition: 'Vue-Toastification__fade',
  })
})
