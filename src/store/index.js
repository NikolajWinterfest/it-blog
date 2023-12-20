// index.js (store)
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
            isAdmin: JSON.parse(localStorage.getItem('isAdmin')) || false,
        }
    },
    mutations: {
        loginUser(state) {
            state.isAuthenticated = true
            localStorage.setItem('isAuthenticated', 'true');
        },
        logoutUser(state) {
            state.isAuthenticated = false
            localStorage.setItem('isAuthenticated', 'false');
        },
        loginAdmin(state, value) {
            state.isAdmin = value
            localStorage.setItem('isAdmin', value.toString())
        }
    },
})

export default store
