import { reqvest } from "../client"

export default{
  state: {
    contact: []
  },
  mutations: {
     setContact(state,contact){
        state.contact = contact
     }
  },
  actions: {
     fetchContact({commit}){
      reqvest.get('contact/')
      .then(function (response) {
        commit("setContact",response.data)
      })
     }
  },
  getters: {
      getContact(state){
         return state.contact
      }
  }
  
}
