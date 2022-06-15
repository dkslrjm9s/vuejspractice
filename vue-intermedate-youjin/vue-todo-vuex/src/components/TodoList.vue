<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <!-- <ul> -->
        <li v-for="( todoItem, index ) in this.todoItems" v-bind:key="todoItem.item" class="shadow">
          
          <!-- 체크버튼 -->
          <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted : todoItem.completed }" 
          v-on:click="toggleComplete({todoItem, index}) "></i>

          <!-- 할일 content -->
          <span v-bind:class=" { textCompleted : todoItem.completed }">
            {{ todoItem.item }}
          </span>
          
          <!-- 삭제버튼 -->
          <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </li>
      <!-- </ul> -->
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  // props:['propsdata'],
  methods:{

    ...mapMutations({
      removeTodo:'removeOneItem',
      toggleComplete:'toggleOneItem' 
    }),
    // 위와 같음
    // removeTodo(todoItem, index) {
    //   // this.$emit('removeItem', todoItem, index);

    //   // let payload = {
    //   //   todoItem,
    //   //   index
    //   // };
      
    //   //this.$store.commit('removeOneItem', payload); // 아래와 동일
    //   this.$store.commit('removeOneItem', { todoItem, index });
      
    // },
    // toggleComplete(todoItem,index) {
    //   //this.$emit('toggleItem', todoItem,index)

    //   // let payload = {
    //   //   todoItem,
    //   //   index
    //   // };
    //   this.$store.commit('toggleOneItem',{ todoItem, index })
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    // ...mapGetters(['storedTodoItems']), // array

    // object : vuex getters 이름과 컴포넌트에서 사용하는 이름이 다를때
    // 컴포넌트 이름 : 'getters 이름'
    ...mapGetters({ 
      todoItems:'storedTodoItems'
      })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;

}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  /* 1초정도 트랜지션 지속 */
  transition: all 1s;
}
.list-enter, .list-leave-to{
  /* 명암? 같은곤가봐 */
  opacity: 0;
  /* 아래로 살짝 이동하는 듯한 effect */
  transform: translateY(30px);
}
</style>