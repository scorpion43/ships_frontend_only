import { FIELD_STATE } from '@/constants'
import ShipGenerator from '@/services/ShipsGenerator'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ships: []
    },
    getters: {
        getShips: (state) => state.ships,
        getFields: (state) => {
            const fields = []
            state.ships.forEach(ship => {
                fields.push(...ship.fields)
            })
            const result = fields.map((item) => Object.assign(item, {state: FIELD_STATE.CLICKED}))
            console.log('result', result)
            return result
        }
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
        },

        // checkShot({commit, state}, point) {
        //     const ship = state.ships.find(ship => ship.isShotHitMe(point))
        //     if (ship) {
                
        //     }
        // }
    }
})