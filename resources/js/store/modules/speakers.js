const FETCH_SPEAKERS = 'FETCH_SPEAKERS'

const SET_LOADING = 'SET_LOADING'
const SET_SPEAKER = 'SET_SPEAKER'

const state = {

    speakers: [],
    speaker: {},

    tableData: {
        draw: 0,
        length: 100,
        search: "",
        column: 0,
        dir: "desc"
    },
}


const getters = {



    getSpeakers: (state) => {
        return state.speakers
    },
    getSpeakerData: (state) => {
        return state.tableData
    },

    getSpeaker: (state) => {
        return state.speaker
    },

}


const mutations = {

    [FETCH_SPEAKERS](state, response) {

        state.speakers = response.data
    },

    [SET_SPEAKER](state, speaker) {
        state.speaker = speaker
    },



}


const actions = {

    fetchSpeakers: async({ commit, state }, url = 'speakers') => {

        commit(SET_LOADING, true)
        state.tableData.draw++
            let response = await axios.get(url, { params: state.tableData })

        console.log(response.data);
        commit(FETCH_SPEAKERS, response)
        commit(SET_LOADING, false)



    },


}

export default {
    state,
    getters,
    mutations,
    actions
}