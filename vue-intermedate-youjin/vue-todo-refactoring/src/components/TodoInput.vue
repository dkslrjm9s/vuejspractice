<template>
  <div class="inputBox shadow">

      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
      </span>

      <!-- Modal 은 컴포넌트 이름! -->
      <Modal v-if="showModal" @close="showModal = false">
        
        <!-- slot : 
         원래 컴포넌트 등록하는 방식대로 했다면, 
         절대 기존의 이미 정의된 컴포넌트의 표현 단(html,css, template 속성) 을 바꾸지 못함
         
         slot 이 있으면 재정의 하는 관점에서 우리가 수정 할 수 있다

         : slot은 특정 컴포넌트의 일부 UI를 재사용 할 수 있다.
         -->

         <!-- 우리가 따로 태그 만들어 정의 하지 않아도 아래 태그가 그대로
              이름이 header인 slot을 대체함
         -->
         <!-- Vue3 에서 slot 표현 방식이 바뀜
          <template v-slot:header>
            <h3>
            경고!
            <i class="fa-solid fa-xmark closeModalBtn"
            @click="showModal=false"></i>
            </h3>
          </template>
          -->
        <h3 slot="header">
          경고!
          <!-- @는 v-on:의 축약형
               short-end라고 함 -->
          <i class="fa-solid fa-xmark closeModalBtn"
           @click="showModal=false"></i>
        </h3>

        <div slot="body">
          아무것도 입력하지 않으셨습니다.
        </div>

        <!-- <p slot="footer">
          Copy Right(c).
        </p> -->
      </Modal>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'

export default {
  data(){
    return {
      newTodoItem:'',
      showModal:false
    }
  },
  methods:{
    addTodo() {
      if(this.newTodoItem.trim() !== '') {
        this.$emit('addTodoItem',this.newTodoItem)
        this.clearInput();
      } else{
        this.showModal = !this.showModal;
      }
    },
    // 데이터 클리어
    clearInput() {
      this.newTodoItem = '';
    }

  },
  components:{
    // Modal:Modal
    Modal
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
.closeModalBtn {
  color: #42b983;
}
</style>