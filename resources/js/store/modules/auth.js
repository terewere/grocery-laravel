import Vue from 'vue';
const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const NUMBER = 'NUMBER'
const VERIFY_PHONE = 'VERIFY_PHONE'
const VERIFY_TOKEN = 'VERIFY_TOKEN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const CLEAR_TOKEN = 'CLEAR_TOKEN'
const SET_AUTH_USER = 'SET_AUTH_USER'
const SET_LOGOUT_TIMER = 'SET_LOGOUT_TIMER'

const state = {
    isLoggedIn: !!localStorage.getItem('token'),
    authUser: {},
    number: ''

}

const getters = {

    isLoggedIn(state) {

        return state.isLoggedIn
    },

    getAuthUser(state) {

        return state.authUser
    },

    getNumber(state) {
        return state.number
    }

}


const mutations = {

    [NUMBER](state, number) {
        state.number = number
    },

    [LOGIN](state) {
        state.pending = true
    },

    [LOGIN_SUCCESS](state) {
        state.isLoggedIn = true,
            state.pending = false
    },

    [LOGOUT](state) {
        state.isLoggedIn = false
    },

    [SET_AUTH_USER](state, user) {
        state.authUser = user
    },

    [CLEAR_TOKEN](state) {
        localStorage.removeItem('token')
        localStorage.removeItem('expiration')
        localStorage.removeItem('user')
        delete window.axios.defaults.headers.common['Authorization'];
    }


}


const actions = {

    [VERIFY_PHONE]({ commit }, credentials) {
        commit(NUMBER, credentials.number)
        localStorage.setItem('number', credentials.number)

        return new Promise((resolve, reject) => {

            axios.post('verify-phone', credentials)
                .then(response => {

                    resolve(response.data)
                }).catch(() => reject())
        })
    },

    [VERIFY_TOKEN]({ commit }, credentials) {

        return new Promise((resolve, reject) => {

            axios.post('verify-token', credentials)
                .then(response => {

                    resolve(response.data)
                }).catch(() => reject())
        })
    },

    [REGISTER]({ commit }, credentials) {
        commit(LOGIN)

        return new Promise((resolve, reject) => {

            axios.post('register', credentials)
                .then(response => {
                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('expiration', response.data.expires_in + Date.now())
                    commit(LOGIN_SUCCESS)
                    resolve()
                }).catch(() => reject())
        })
    },

    [LOGIN]({ commit, dispatch }, credentials) {
        commit(LOGIN)

        return new Promise((resolve, reject) => {

            axios.post('login', credentials)
                .then(response => {

                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('expiration', response.data.expires_in + Date.now())
                    commit(LOGIN_SUCCESS)

                    // commit(SET_LOGOUT_TIMER, response.data.expires_in)

                    dispatch(SET_AUTH_USER)
                    resolve()

                }).catch(() => reject())
        })
    },

    [SET_AUTH_USER]({ commit }) {
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            axios.get('user').
            then(response => {
                commit(SET_AUTH_USER, response.data)

                localStorage.setItem('user', JSON.stringify(response.data))

                Vue.prototype.$gate.user = response.data;

                resolve()

            }).catch(() => reject())

        })
    },

    [LOGOUT]({ commit }) {
        return new Promise((resolve) => {
            commit(CLEAR_TOKEN)
            commit(LOGOUT)
            resolve()
        })
    },
    [SET_LOGOUT_TIMER]({ commit }, duration) {
        setTimeout(() => {
            commit(CLEAR_TOKEN)

        }, duration);

    }

}

export default {
    state,
    getters,
    mutations,
    actions
}