import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        buildings: {
            magetower: { state: 0, progress: 0 },
            commandcenter: { state: 0, progress: 0 },
            netherdisruptor: { state: 0, progress: 0 },
            lastupdated: null
        }
    },
    mutations: {
        updateBuildings ({ buildings }, { magetower, commandcenter, netherdisruptor, lastupdated }) {
            if (magetower && commandcenter && netherdisruptor) {
                buildings.magetower = { state: magetower.state, progress: magetower.contributed }
                buildings.commandcenter = { state: commandcenter.state, progress: commandcenter.contributed }
                buildings.netherdisruptor = { state: netherdisruptor.state, progress: netherdisruptor.contributed }
                buildings.lastupdated = lastupdated
            }
        }
    }
})

export default store
