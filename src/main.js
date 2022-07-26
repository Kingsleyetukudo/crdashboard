import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Highcharts from 'highcharts';
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import {faBell, faCommentDots} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBell, faCommentDots, faMagnifyingGlass, faHouse)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.use( Highcharts )
.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
