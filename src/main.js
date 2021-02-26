import { createApp } from 'vue'
// translations
import { createI18n } from 'vue-i18n'
import geo from "./translations/geo.json"
import eng from "./translations/eng.json"
import rus from "./translations/rus.json"
//
import App from './App.vue'
import router from './router'
import store from './store' 


import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faArrowLeft,faFacebookSquare,faWhatsapp)
// .component('fa-icon', FontAwesomeIcon)

const i18n = createI18n({
    messages:{
        geo,
        eng,
        rus
    },
    fallbackLocale:'eng'
})

createApp(App).use(store).use(router).use(i18n).mount('#app')
