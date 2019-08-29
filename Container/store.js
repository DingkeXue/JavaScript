import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        comments: []
    },

    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        }
    },

    actions: {
        fetchComments({commit}) {
            setTimeout(() => {
                commit('setComments', [{
                    body: 'title1',
                    id: 1
                },{
                    body: 'title2',
                    id: 2
                }])
            })
        }
    }
});
