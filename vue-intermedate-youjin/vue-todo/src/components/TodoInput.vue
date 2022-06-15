<template>
  <div class="inputBox shadow">
      <!-- enter쳤을때도 버튼 누르는 것과 동일하게 할거야 -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      newTodoItem:'' // input box 에 새롭게 입력받는 내용
    }
  },
  methods:{
    // 한번에 다하자

    // addTodo : function() {
    //   console.log(this.newTodoItem);
    //   // 데이터 저장
    //   // localStorage mdn 에서 자세한 기능 확인 가능
    //   // localStorage.setItem(key, value) (예시는 그냥 두다 값으로 채움)
    //   // localStorage 확인 방법 : 개발자도구 > application > localstorage 탭
    //   localStorage.setItem(this.newTodoItem, this.newTodoItem);
    //   // 데이터 비움
    //   this.newTodoItem = '';
    // }
    
    // 기능 분할
    // 데이터 저장
    addTodo : function() {
      if(this.newTodoItem.trim() !== '') {
        var obj = {completed:false, item:this.newTodoItem};
        // JSON.stringify 하는 이유. 개발자 도구에서 확인 쉽게 하기 위해
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    // 데이터 클리어
    clearInput: function() {
      this.newTodoItem = '';
    }

  }
}
</script>

<style scoped>
input:focus{
  outline:none;
}
.inputBox {
  background:white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color:white;
  vertical-align: middle;
}
</style>