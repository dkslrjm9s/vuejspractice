<template>
  <div>
      <ul>
        <!-- v-for : 리스트의 갯수만큼 페이지에 뿌리기 
        v-for = "객체명(임의) in 리스트(속성명)"
        v-for 를 사용할때는 항상 v-bind:key 를 넣어달라
        
        todoItem 이 중복되지 않는 선에서(유일하면) v-bind:key 값에 따라 for loop을돔
        
        그리고 화면에 바인딩
        -->
        <li v-for="( todoItem, index ) in todoItems" v-bind:key="todoItem.item" class="shadow">
          
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
      </ul>
  </div>
</template>

<script>
export default {
  data:function() {
    return {
      todoItems:[]
    }
  },
  methods:{
    removeTodo:function(todoItem, index) {
      //console.log(todoItem, index);
      
      // localStorage.removeItem(key) > 근데 우리는 key, value를 같은 값으로 저장해놨으니까 그대로 넣어 
      localStorage.removeItem(todoItem.item);
      

      // db에는 반영되었으므로 이제 화면에서 지우자.
      // splice : javascript 기본 문법. 리스트의 특정 인덱스에서 몇번째 까지 지움
      // splice(index, 번째)
      this.todoItems.splice(index,1);
    },
    toggleComplete: function(todoItem,index) {
      console.log(todoItem,index);
      //설정값 바꿈. 여기까지만 해도 화면은 적용이됨
      todoItem.completed = !todoItem.completed;
      
      // localstorage 값 update 같은거 없어, 삭제 후 재 등록이다.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      // localStorage를 한번에 가지고 오는게 없음
      for (var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // 이건 키 데이터 자체를  가지고 오는 것
          // this.todoItems.push(localStorage.key(i));

          // typeof 변수 자료형 확인
          // key 값으로 value 접근해서 가져오기
          this.todoItems.push(
            JSON.parse(
              localStorage.getItem(localStorage.key(i))
            )
          );

        }
      }
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
</style>