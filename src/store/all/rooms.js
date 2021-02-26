import { reqvest } from "../client"

export default{
  state: {
    rooms: []
  },
  mutations: {
     setRooms(state,rooms){
        state.rooms = rooms
     }
  },
  actions: {
     fetchRooms({commit}){
      reqvest.get('room-types/')
      .then(function (response) {
        commit("setRooms",response.data)   
      })   
     } 
  },
  getters: {
      getRooms(state){
         return state.rooms
      }
  }
  
}
