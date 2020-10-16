const FETCH_SUPPLIERS = 'FETCH_SUPPLIERS'
const FETCH_SUPPLIER = 'FETCH_SUPPLIER'

const state =  {
       suppliers: [],
       supplier:{},
       tableData: {
        draw: 0,
        length: 100,
        search: "",
        column: 0,
        dir: "desc"
      },
    }


const getters = {

  getSuppliers : (state) =>{
      return state.suppliers
  },
  getSupplier : (state) =>{
      return state.supplier
  },
  getSuppliersData : (state) =>{
      return state.tableData
  },
  getSupplierInfo: (state) => {
 
    return state.suppliers.data

},

}


const mutations = {

    [FETCH_SUPPLIERS](state, data)  {
        state.suppliers = data
    },
    [FETCH_SUPPLIER](state, data)  {
        state.supplier = data
    },
 
 
}


const actions = {

    saveSupplier: ({commit}, payload) => {
        return new Promise( (resolve, reject) => {
            axios.post('suppliers',payload).then(() => {
                resolve()
            }).catch( () => reject())
        })
    },

    fetchSuppliers: ({commit,state}, url = 'suppliers') => {
        state.tableData.draw++
        return new Promise( (resolve, reject) => {
            axios.get(url,{ params: state.tableData }).then(response => {
                commit(FETCH_SUPPLIERS, response.data)
                
                resolve()
            }).catch( () => reject())
        })
    },
    fetchSupplier: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            axios.get(`suppliers/${id}`).then(response => {
                commit(FETCH_SUPPLIER, response.data)
                resolve()
            }).catch(() => reject())
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}