import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons and add them to the Library */
import {  faDice, faCopy } from '@fortawesome/free-solid-svg-icons'

library.add(
  faDice,
  faCopy
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
