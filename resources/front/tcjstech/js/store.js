import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export const store = new Vuex.Store({
    //plugins: [createPersistedState()],
    state: {
        config: {},
        myid: null,
        userdata: null
    },
    mutations: {
        getConfig(state, config) {
            state.config = config
        },
        setMyid(state, myid) {
            state.myid = myid
        },
        setUserdata(state, userdata) {
            state.userdata = userdata
        }
    },
    gatters: {
        config: state => state.config,
        myid: state => state.myid,
        userdata: state => state.userdata
    }
})