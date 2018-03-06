import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list: [{id:1, nome:'Cliente A',telefone:'997107179'}]

  },
  mutations: {
    add(state,entidade){
    	state.list.push(entidade)
    }
  },
  actions: {
    addEntidade ({commit},entidade) {
      	commit('add', entidade)
    }
  },
  getters:{
  	getEntidade: (state,id)=>{
  		for(let i=0; i< state.list.leght; i++){
  			if(state.list[i].id === id){
  				return state.list[i]
  			}
  		}
  	},
  	getList: (state)=>{
  		return state.list;
  	}
  }
})