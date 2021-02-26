import { createStore } from 'vuex'
import slider from "./all/slider"
import rooms from "./all/rooms"
import service from "./all/service";
import about from "./all/about";
import blogs from "./all/blogs";
import contact from "./all/contact";

export default createStore({
   modules: {
      slider,
      rooms,
      service,
      about,
      blogs,
      contact
   },
   state: {
      lang: "eng"
   },
   mutations: {
      setLang(state, lang) {
         state.lang = lang;
      }
   },
   actions: {
      setLang({commit}, lang) {
         commit("setLang", lang);
      }
   },
   getters: {
      getLang(state) {
         return state.lang;
      }
   }

})
