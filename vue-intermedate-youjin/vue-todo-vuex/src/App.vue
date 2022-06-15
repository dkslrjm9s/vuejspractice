<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> 
      APP 에서 관리했던 걸 store 라는 중앙관리로 넘겼으니 지워도 됨.-->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>

  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  // data() {
  //   return {
  //     todoItems:[]
  //   }
  // },
  methods:{ // mutations와 같음
    // addOneItem(todoItem) {
    //   const obj = {completed:false, item:todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index,1);
    // },
    // toggleOneItem(todoItem,index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  // store.js fetch로 이동됨
  // created() {
  //   if(localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         this.todoItems.push(
  //           JSON.parse(
  //             localStorage.getItem(localStorage.key(i))
  //           )
  //         );

  //       }
  //     }
  //   }
  // },
  components:{
    // 축약 가능
    // 'TodoFooter':TodoFooter,
    // 'TodoHeader':TodoHeader,
    // 'TodoInput':TodoInput,
    // 'TodoList':TodoList
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>