<template>
    <!-- 규칙. template는 html element가 최상위 하나만 있어야 함
    tmeplate의 최상위 div가 두개면 안된다는 말임(오류남) -->
    <div>
        <app-header 
        v-bind:propsdata="str"
        v-on:renew="renewStr"></app-header>
        <!-- {{ str }} -->
    </div>
    <!-- <div>

    </div> -->
</template>

<script>

import AppHeader from './components/AppHeader.vue'

// import 한 부분과 의미가 동일함
// var AppHeader = {
//     template:'<header><h1>Heaer</h1></header>'
// }

export default {
    // cli 를 통해 .vue 파일을 쓰면 컴포넌트를 재사용할 확률이 높음
    // 여러개의 컴포넌트에서 동일한 값을 공유, 참조하면 안되기 때문에 
    // 항상 func 으로 새로운 객체를 반환해 주는 형태로 사용해야 함
    data: function() {
        return {
            str:'Header'
        }
    },
    components:{
        'app-header':AppHeader
    },
    methods:{
        renewStr:function() {
            this.str = 'hi';
        }
    }
}
</script>

<style>

</style>