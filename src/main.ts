import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faFootball,
  faBaseball,
  faBasketball,
  faFutbol,
  faHockeyPuck,
  faMitten,
  faHorse,
  faFlagCheckered,
  faBolt,
  faMoneyBill1,
  faTag
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faFootball,
  faBasketball,
  faBaseball,
  faFutbol,
  faHockeyPuck,
  faMitten,
  faHorse,
  faFlagCheckered,
  faBolt,
  faMoneyBill1,
  faTag
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
