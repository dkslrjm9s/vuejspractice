

// npm installer로 설치한게 package.json 에 등록 되고 그게 node_modules 밑에 라이브러리로 잡힘
// 소스에서 import 하면 해당 라이브러리를 사용할 수 있음

import Vue from 'vue'
import Vuex from 'vuex'

// use : Vue 의 plugin
//       Vue 를 사용하는 모든 영역에 전역으로 특정기능을 추가하고 싶을때, 
//       global functionality 를 주고 싶을 때 사용
Vue.use(Vuex);
// TodoList.vue 컴포넌트에서  store를 접근하고 싶을때 아래와 같이 가능
// this.$store

// local storage 관련된 동작들은 여기로 다 뺄거야
// app.vue 의 created -> fetch method
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

        return arr;
    }
};

// export 하면 밖에서 사용 가능
// 이렇게 만든 store를 main.js 에 등록을 해주어야함.
export const store = new Vuex.Store({
    state : {
        haederText : 'TODO it!',
        todoItems:storage.fetch()
    },
    getters : {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations:{
        addOneItem(state, todoItem) {
            const obj = {completed:false, item:todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        toggleOneItem(state, payload) {

            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
          }
    }
});




