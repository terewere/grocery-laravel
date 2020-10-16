const SET_IS_ONLINE = 'SET_IS_ONLINE'

const state =  {
        onLine: false
     
        }


const getters = {

    isOnline: state => state.onLine

}


const mutations = {

    [SET_IS_ONLINE](state, online)  {        
        state.onLine = online;
    },

}
 

const actions = {
    setOnline: ({commit}, online) => commit(SET_IS_ONLINE, online),

    save: ({commit}, {url,data, method = 'post'}) => {
        return new Promise( (resolve, reject) => {
            axios({
                method: method,
                url: url,
                data: data
              }).then(() => {
                resolve()
            }).catch( () => reject())
        })
    },

    deleteItem: ({commit}, {url,data}) => {
        return new Promise( (resolve, reject) => {
            axios({
                method: 'DELETE',
                url: url,
                data: data
              }).then(() => {
                resolve()
            }).catch( () => reject())
        })
    },

    destroyMultiple: ({commit}, {url,data}) => {
        return new Promise( (resolve, reject) => {
            axios({
                method: 'DELETE',
                url: url+'/'+'delete_multiple',
                data: {items : data},
              }).then(() => {
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