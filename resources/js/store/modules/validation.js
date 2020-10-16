const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS'

const state =  {
        errors: {}
        }


const getters = {

    getErrors: (state) => {
        return state.errors
    }
}


const mutations = {

    [SET_VALIDATION_ERRORS](state, errors)  {

        state.errors = errors
    }
}


const actions = {

    setErrors({commit}, errors){
       
        commit(SET_VALIDATION_ERRORS, errors)
    },

    clearErrors({commit}) {
        commit(SET_VALIDATION_ERRORS, {})
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}