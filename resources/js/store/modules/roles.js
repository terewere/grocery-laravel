const FETCH_ROLES_PERMISSIONS = 'FETCH_ROLES_PERMISSIONS'
const FETCH_CREATE_AGENCIES_PERMISSIONS = 'FETCH_CREATE_AGENCIES_PERMISSIONS'
const SET_ROLE = 'SET_ROLE'


const state =  {
        roles: [],
        role: {},
        permissions: [],
        create_agencies_permissions: [],
 
        }


const getters = {

    getRoles: (state) => {
        return state.roles
    },
    getPermissions: (state) => {
        return state.permissions
    },
    getCreateAgenciesPermissions: (state) => {
        return state.create_agencies_permissions
    },

    getRole(state){
        return state.role
    }


    // getTypeByID(state) {
    //     const object = id => state.roles.find(type => {
    //       return type.id === id
    //     });

    //     return object
    //   },
}


const mutations = {

    [FETCH_ROLES_PERMISSIONS](state, response)  {

        state.roles = response.data.roles
        state.permissions = response.data.permissions
    },
    [FETCH_CREATE_AGENCIES_PERMISSIONS](state, response)  {

        state.create_agencies_permissions = response.data
    },

    [SET_ROLE](state, data)  {

        state.role = data
    },


 
}


const actions = {

    [FETCH_ROLES_PERMISSIONS]: ({commit}) => {
        return new Promise( (resolve, reject) => {
            axios.get('roles').then(response => {
                
                commit(FETCH_ROLES_PERMISSIONS, response)
                resolve()
            }).catch( () => reject())
        })
    },
    [FETCH_CREATE_AGENCIES_PERMISSIONS]: ({commit}) => {
        return new Promise( (resolve, reject) => {
            axios.get('permissions/create-agencies').then(response => {
                
                commit(FETCH_CREATE_AGENCIES_PERMISSIONS, response)
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