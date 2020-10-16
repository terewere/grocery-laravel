const FETCH_ALL_USERS = 'FETCH_ALL_USERS'
const SET_USER = 'SET_USER'

const state =  {
        users: [],
        user: {}
        }


const getters = {

    getAllUsers: (state) => {
        return state.users
    },

    getUser: (state) => {
        return state.user
    }
}


const mutations = {

    [FETCH_ALL_USERS](state, response)  {

        state.users = response.data
    },
    [SET_USER](state, user)  {

        state.user = user
    }
}


const actions = {

    fetchAllUsers: ({commit}) => {
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return new Promise( (resolve, reject) => {
            axios.get('users').then(response => {
                commit(FETCH_ALL_USERS, response)
                resolve()
            }).catch( () => reject())
        })
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}