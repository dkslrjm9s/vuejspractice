<template>
  <div>
    <!-- TransitionGroup의 name 이 css 에서 transition을 연결해주는 id값
        tag는 말그대로 명시한 태그로 적용하겠다. -->
    <TransitionGroup name="list" tag="ul">
      <!-- <ul> -->
        <li v-for="( todoItem, index ) in propsdata" v-bind:key="todoItem.item" class="shadow">
          
          <!-- 체크버튼 -->
          <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted : todoItem.completed }" 
          v-on:click="toggleComplete(todoItem, index) "></i>

          <!-- 할일 content -->
          <span v-bind:class=" { textCompleted : todoItem.completed }">
            {{ todoItem.item }}
          </span>
          
          <!-- 삭제버튼 -->
          <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </li>
      <!-- </ul> -->
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  props:['propsdata'],
  methods:{
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
      
    },
    toggleComplete(todoItem,index) {
      this.$emit('toggleItem', todoItem,index)
    }
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