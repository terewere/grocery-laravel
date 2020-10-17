const FETCH_AUDIOS = 'FETCH_AUDIOS'

const SET_LOADING = 'SET_LOADING'
const SET_AUDIO = 'SET_AUDIO'

const state = {

    audios: [],
    audio: {},

    tableData: {
        draw: 0,
        length: 100,
        search: "",
        column: 0,
        dir: "desc",
        category_id: 0
    },
}


const getters = {

    getAudios: (state) => {
        return state.audios
    },
    getAudioData: (state) => {
        return state.tableData
    },

    getAudio: (state) => {
        return state.audio
    },

}


const mutations = {

    [FETCH_AUDIOS](state, data) {

        state.audios = data
    },

    [SET_AUDIO](state, data) {

        state.audio = data
    },



}


const actions = {

    fetchAudios: async({ commit, state }, payload) => {
        state.tableData.category_id = payload.category_id

        commit(SET_LOADING, true)
        state.tableData.draw++
            let response = await axios.get(payload.url, { params: state.tableData })
        commit(FETCH_AUDIOS, response.data)
        commit(SET_LOADING, false)



    },


}

export default {
    state,
    getters,
    mutations,
    actions
}