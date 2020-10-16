const FETCH_SALES_BY_ID = 'FETCH_SALES_BY_ID'
const FETCH_SALES = 'FETCH_SALES'

const state =  {
    sales: [],
    sale: {},
        tableData: {
            draw: 0,
            length: 100,
            search: "",
            column: 0,
            dir: "desc"
          },
      
        }


const getters = {


    getSales: (state) =>  {
       
          return state.sales
    },

    getSale: (state) =>  {
       
          return state.sale
    },

    getSalesData: (state) => {
        return state.tableData
    },
    


}


const mutations = {

    [FETCH_SALES_BY_ID](state, data)  {

        state.sale = data
    },

    [FETCH_SALES](state, data)  {

        state.sales = data
    },

 
}


const actions = {


       fetchSales: ({commit,state}, url= 'sales') => {

            state.tableData.draw++
        return new Promise( (resolve, reject) => {
            axios.get(url,{ params: state.tableData }).then(response => {
                
                
                commit(FETCH_SALES, response.data)
                resolve()
            }).catch( () => reject())
        })
    },


    [FETCH_SALES_BY_ID]: ({commit}, id) => {
        return new Promise( (resolve, reject) => {
            axios.get(`sales/${id}`).then(response => {
                commit(FETCH_SALES_BY_ID, response.data)
                resolve()
            }).catch( () => reject())
        })
    },


}

export default {
    state,
    getters,
    mutations,
    actions
}