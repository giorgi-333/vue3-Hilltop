import { reqvest } from "../client"

export default{
  state: {
    service: []
  }, 
  mutations: {
     setService(state,service){
        state.service = service
     }
  },
  actions: {
     fetchService({commit}){
      reqvest.get('service/')
      .then(function (response) {
         commit("setService",response.data)
      })
     } 
  },
  getters: {
      getService(state){
         return state.service
      }
  }
  
}
