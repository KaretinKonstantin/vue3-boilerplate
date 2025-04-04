// init app and stores
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// init Primevue and services
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Material from '@primeuix/themes/material'

// routing
import router from './routes'

//styles
import './styles/index.css'

// components
import App from './App.vue'

// plugins
import './plugins'

//

// configure App
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(ConfirmationService)
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'app-styles, primevue, another-css-library',
      },
    },
  },
  locale: '',
  ripple: true,
})

app.mount('#app')
