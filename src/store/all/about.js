import { reqvest } from "../client"

export default{
  state: {
    about: []
  },
  mutations: {
     setAbout(state,about){
        state.about = about
     }
  },
  actions: {
     fetchAbout({commit}){
      reqvest.get('about/')
      .then(function (response) {
        commit("setAbout",response.data)
      })
     }
  },
  getters: {
      getAbout(state){
         return state.about
      }
  }
  
}
