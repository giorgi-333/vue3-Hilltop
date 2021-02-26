import { reqvest } from "../client"

export default {
   state: {
      slide: []
   },
   mutations: {
      setSlider(state, slider) {
         state.slide = slider
      }
   },
   actions: {
      fetchSlider({ commit }) {
         reqvest.get('slider/')
            .then(function (response) {
               commit("setSlider", response.data)
            })
      }
   },
   getters: {
      getSlider(state) {
         return state.slide
      }
   }

}
