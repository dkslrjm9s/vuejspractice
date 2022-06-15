
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


const state = {
    haederText : 'TODO it!',
    todoItems:storage.fetch()
}

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem){
        const obj = {completed:false, item:todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },
    toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
}

// default 와 비default의 차이점
// default 는 한개의 파일에서 한번만. 추출 될 수 있음 ?

// default는 이름이 정해져 있지 않음으로 가져다 쓸때 이름을 지정해서 쓸 수 있음



export default {
    state,
    getters,
    mutations
}