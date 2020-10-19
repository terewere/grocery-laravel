const FETCH_ORDERS = 'FETCH_ORDERS'

const SET_LOADING = 'SET_LOADING'
const SET_ORDER = 'SET_ORDER'

const state = {

    orders: [],
    order: {},

    tableData: {
        draw: 0,
        length: 100,
        search: "",
        column: 0,
        dir: "desc"
    },
}


const getters = {



    getOrders: (state) => {
        return state.orders
    },
    getOrderData: (state) => {
        return state.tableData
    },

    getOrder: (state) => {
        return state.order
    },

}


const mutations = {

    [FETCH_ORDERS](state, response) {

        state.orders = response.data
    },

    [SET_ORDER](state, order) {
        state.order = order
    },



}


const actions = {

    fetchOrders: async({ commit, state }, url = 'orders') => {

        commit(SET_LOADING, true)
        state.tableData.draw++
            let response = await axios.get(url, { params: state.tableData })

        console.log(response.data);
        commit(FETCH_ORDERS, response)
        commit(SET_LOADING, false)



    },


}

export default {
    state,
    getters,
    mutations,
    actions
}