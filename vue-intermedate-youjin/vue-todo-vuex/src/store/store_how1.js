
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js' //as alias 별칭
import * as mutations from './mutations.js'
import * as actions from './actions.js'


Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                // scope가 달라 이제 접근 할 수 없으므로 제외
                //this.todoItems.push(
                arr.push(
                JSON.parse(
                    localStorage.getItem(localStorage.key(i))
                ));
            }
            }
        }

        console.log(arr);

        return arr;
    }
};

export const store = new Vuex.Store({
    state : {
        haederText : 'TODO it!',
        todoItems:storage.fetch()
    },
    getters,
    mutations : mutations,
    actions : actions
});



