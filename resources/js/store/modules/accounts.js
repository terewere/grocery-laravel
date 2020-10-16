const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
const FETCH_PAYMENT_ACCOUNTS = 'FETCH_PAYMENT_ACCOUNTS'
const FETCH_EXPENSE_ACCOUNTS = 'FETCH_EXPENSE_ACCOUNTS'
const FETCH_SALES_ACCOUNTS = 'FETCH_SALES_ACCOUNTS'
const FETCH_COST_OF_SALES_ACCOUNTS = 'FETCH_COST_OF_SALES_ACCOUNTS'
const FETCH_ALL_COSTS_ACCOUNTS = 'FETCH_ALL_COSTS_ACCOUNTS'
const FETCH_TYPES = 'FETCH_TYPES'
const FETCH_DETAILS = 'FETCH_DETAILS'
const SET_DESCRIPTION = 'SET_DESCRIPTION'
const SET_ACCOUNT = 'SET_ACCOUNT'
const CLEAR_DESCRIPTION = 'CLEAR_DESCRIPTION'
const FETCH_ADJUSTABLE_ACCOUNTS = 'FETCH_ADJUSTABLE_ACCOUNTS'
const SET_LOADING = 'SET_LOADING'

const state = {
    details: [],
    types: [],
    accounts: [],
    adjustableAccounts: [],
    account: {},
    cashAccounts: [],
    ExpenseAccounts: [],
    AllCostsAccounts: [],
    SalesAccounts: [],
    CostofSalesAccounts: [],
    description: null,
    tableData: {
        draw: 0,
        length: 100,
        search: "",
        column: 0,
        dir: "desc"
    },
}


const getters = {

    getTypes: (state) => {
        return state.types
    },


    // getTypeByID: (state) => {

    //     return state.types.find( type => type.id === 1);
    // },

    getTypeByID(state) {
        const object = id => state.types.find(type => {
            return type.id === id
        });

        return object
    },

    getAdjustableAccount(state) {
        const object = id => state.adjustableAccounts.find(type => {
            return type.id === id
        });

        return object
    },


    getDetailByTypeID(state) {
        const array = type_id => state.details.filter(detail => {
            return detail.type_id === type_id
        });

        return array
    },

    getAccounts: (state) => {
        return state.accounts
    },
    getTableData: (state) => {
        return state.tableData
    },

    getAccount: (state) => {
        return state.account
    },
    getDetails: (state) => {
        return state.details
    },
    getDescription: (state) => {
        return state.description
    },

    getPaymentAccounts: (state) => {

        return state.cashAccounts

    },

    getExpenseAccounts: (state) => {

        return state.ExpenseAccounts

    },

    getAllCostsAccounts: (state) => {

        return state.AllCostsAccounts

    },
    getSalesAccounts: (state) => {

        return state.SalesAccounts

    },
    getCostOfSalesAccounts: (state) => {

        return state.CostofSalesAccounts

    },
    getAdjustableAccounts: (state) => {

        return state.adjustableAccounts

    },



}


const mutations = {

    [FETCH_ACCOUNTS](state, response) {

        state.accounts = response.data
    },
    [FETCH_ADJUSTABLE_ACCOUNTS](state, data) {

        state.adjustableAccounts = data
    },

    [FETCH_PAYMENT_ACCOUNTS](state, response) {

        state.cashAccounts = response.data
    },

    [FETCH_EXPENSE_ACCOUNTS](state, response) {

        state.ExpenseAccounts = response.data
    },
    [FETCH_SALES_ACCOUNTS](state, response) {

        state.SalesAccounts = response.data
    },
    [FETCH_ALL_COSTS_ACCOUNTS](state, response) {

        state.AllCostsAccounts = response.data
    },
    [FETCH_COST_OF_SALES_ACCOUNTS](state, response) {

        state.CostofSalesAccounts = response.data
    },

    [FETCH_TYPES](state, response) {

        state.types = response.data
    },
    [FETCH_DETAILS](state, response) {

        state.details = response.data
    },

    [SET_DESCRIPTION](state, payload) {
        const detail = state.details.find(detail => detail.id === payload)
        state.description = detail ? detail.description : null
    },

    [CLEAR_DESCRIPTION](state) {
        state.description = ''
    },

    [SET_ACCOUNT](state, account) {
        state.account = account
    },



}


const actions = {

    fetchAccounts: async({ commit, state }, url = 'accounts') => {

        commit(SET_LOADING, true)
        state.tableData.draw++
            let response = await axios.get(url, { params: state.tableData })
        commit(FETCH_ACCOUNTS, response)
        commit(SET_LOADING, false)



    },
    fetchAllCostsAccounts: ({ commit }) => {
        axios.get('accounts/all-costs').then(response => {
            commit(FETCH_ALL_COSTS_ACCOUNTS, response)
        })

    },
    fetchPaymentAccounts: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('accounts/payment-accounts').then(response => {
                commit(FETCH_PAYMENT_ACCOUNTS, response)
                resolve()
            }).catch(() => reject())
        })
    },
    fetchExpenseAccounts: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('accounts/expense-accounts').then(response => {
                commit(FETCH_EXPENSE_ACCOUNTS, response)
                resolve()
            }).catch(() => reject())
        })
    },
    fetchSalesAccounts: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('accounts/sales-accounts').then(response => {
                commit(FETCH_SALES_ACCOUNTS, response)
                resolve()
            }).catch(() => reject())
        })
    },
    fetchCostOfSalesAccounts: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('accounts/cost-sales-accounts').then(response => {
                commit(FETCH_COST_OF_SALES_ACCOUNTS, response)
                resolve()
            }).catch(() => reject())
        })
    },

    fetchTypes: ({ commit }) => {
        commit(SET_LOADING, true)
        return new Promise((resolve, reject) => {
            axios.get('accounts/account-types').then(response => {
                commit(FETCH_TYPES, response)
                commit(SET_LOADING, false)
                resolve()
            }).catch(() => reject())
        })
    },

    fetchDetails: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.get(`accounts/account-details?type_id=${payload}`).then(response => {
                commit(FETCH_DETAILS, response)
                resolve()
            }).catch(() => reject())
        })
    },
    [FETCH_ADJUSTABLE_ACCOUNTS]: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('accounts/adjustables').then(response => {
                commit(FETCH_ADJUSTABLE_ACCOUNTS, response.data)
                resolve()
            }).catch(() => reject())
        })
    },
    saveAccount: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('accounts', payload).then(() => {
                resolve()
            }).catch(() => reject())
        })
    },

    setDescription({ commit }, payload) {
        commit(SET_DESCRIPTION, payload)
    },

    clearDescription: ({ commit }) => {
        commit(CLEAR_DESCRIPTION)
    },


}

export default {
    state,
    getters,
    mutations,
    actions
}