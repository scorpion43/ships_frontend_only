import ShipGenerator from '@/services/ShipsGenerator'
import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        ships: []
    },
    getters: {
        getShips: (state) => state.ships
    },
    mutations: {
        setShips(state, ships) {
            state.ships = ships
        }
    },
    actions: {
        generateShips({ commit }, size) {
            const shipGenerator = new ShipGenerator(size)
            const ships = shipGenerator.generateShips()
            console.log('ships', ships)
            commit('setShips', ships)
        }
    }
})