import Vue from 'vue'
import App from './App.vue' // 컴포넌트 파일

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// // 이게 App.vue 의 내용
// var App = {
//   template: '<div>app</div>'
// }

// new Vue({
//   el:'#app',
//   // render?
//   // vue 내부에서도 사용하고 우리도 쓸수 있음
//   // template 이라는 속성을 정의 했을때 내부적으로 render라는 함수를 호출함
//   // APP.vue라는 컴포넌트 파일
//   // .vue 는 싱글 파일 컴포넌트
//   // App.vue 의 내용을 불러와서(import) h에 집어 넣고 render했다. 라고까지만 이해
//   // 아래 1과 2는 동일
//   //1.
//   components:{
//     'app':APP
//   },

//   //2.
//   render: h => h(App),
// })

/*
아래 1과 2는 같은 내용임
1.
new Vue({
}).$mount('#app')

2.
ney Vue({
  el:'#app'
});

*/