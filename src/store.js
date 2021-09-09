import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        DarkModePage: false
    },
    mutations:{
        CHANGE_MODE:(state)=>{
            state.DarkModePage = !state.DarkModePage
        }
    },
    actions:{
        TOGGLE_MODE({commit}){
            commit('CHANGE_MODE')
        }
    },
    getters:{
        MODE_STATE(state){
            return state.DarkModePage;
        }
    }
})

export default store;