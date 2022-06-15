<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- component tag를 등록한 것과 같음 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
import HelloWorld from './components/_HelloWorld.vue'

// export default를 new Vue라고 바라봐
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성 이 안에 들어와
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
