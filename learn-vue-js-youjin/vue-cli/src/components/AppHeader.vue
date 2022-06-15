<template>
    <header>
    <!-- 컴포넌트 등록할때 태그의 이름(파일명)은 항상 두단어 이상으로 조합하고 
    파스칼 케이스를 적용한다.(단어의 제일 첫번째는 대문자.) 
    사용할때 html 태그인지 vue의 컴포넌트 태그인지 브라우저가 구분을 못함. 충돌나지 않게끔 하자-->
    <h1>
        {{ propsdata }}
    </h1>
    <button v-on:click="sendEvent"> send </button>
    </header>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        sendEvent: function() {
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>