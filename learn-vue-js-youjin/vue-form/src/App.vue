<template>
  <!-- form의 경우 기본적으로 새로고침이 됨.
        button에서 submit이벤트가 발생할 경우에도 동일함.
        이를 위해 form에 이벤트 처리르 따로 해줌
        .prevent : 아래 javascript에 설명함 -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <!-- lable의 for는 이 label이 어떤 태그를 위한 것인지 지정-->
      <!-- 아래는 한쌍이됨 -->
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <!-- submit일 경우 enter치면 button이 활성화 -->
    
    <button type="submit">login</button>
  </form>
</template>

<script>
// npm  i axios 로 터미널에서 이 프로젝트에 axios 설치
// 아래처럼 import 해서 사용
import axios from 'axios';

export default {
  data:function() {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    submitForm:function() {
      // vanilla ja, 일반적인 웹에서 사용하는 이동, 새로고침을 막음
      // vue에서는 template에서 이벤트 처리시 .prevent 모디파이어로 동일한 기능을 할 수 있음
      //event.preventDefault(); 
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

    }
  }
}
</script>

<style>

</style>