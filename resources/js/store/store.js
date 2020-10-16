import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'


Vue.use(Vuex)

const SET_LOADING = 'SET_LOADING'

const state =  {
        loading: false
     
        }


const getters = {

    getLoading: state => state.loading

}


const mutations = {

    [SET_LOADING](state, loading)  {        
        state.loading = loading;
    },

}
 

const actions = {

    
}

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,


})