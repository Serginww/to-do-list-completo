import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas: [],
    loading: false
  },
 
  mutations: {
    addTarefa(state, payload) {
      state.tarefas.push(payload);
    },
    setLoading(state, payload) {
      state.loading = payload
    },

    toggleTarefa(state,payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
      if (index > -1){
        const checked = !state.tarefas[index].checked;
        state.tarefas[index].checked = checked;
      }
     

    },
    removeTarefa(state,payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
          if (index > -1){
            state.tarefas.splice(index, 1);
          }

    }
   
  },
  actions: {
    addTarefa({ commit }, tarefa) {
      commit('setLoading', true)
      return new Promise(resolve => {
        setTimeout(() => {
          tarefa.id = Date.now();
          commit('addTarefa', tarefa);
          commit('setLoading', false)

          resolve(tarefa);
        }, 500); /* O 500 é para carregar 500milisegundos*/
      });
    },
    toggleTarefa({commit},tarefa){
      commit('toggleTarefa', tarefa)


    },
    removeTarefa({commit},tarefa){
      commit('removeTarefa', tarefa)
    },

   
  },
  modules: {

  },
/* getters para levar a tarefa de uma pagina a outra*/
getters: {

  uncheckends (state){
    
    return state.tarefas.filter(tarefa => tarefa.checked === false)
  },

  checkeds (state){
    return state.tarefas.filter(tarefa =>tarefa.checked )

  }
}

});
