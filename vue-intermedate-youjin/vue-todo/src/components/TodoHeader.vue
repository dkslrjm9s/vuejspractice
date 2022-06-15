<template>
  <header>
    <h1>TODO it!</h1>
  </header>
</template>

<script>
export default {

}
</script>

// scoped:상위 태그에서 css를 상속받지 않게 함.
// 해당하는 컴포넌트 안에서만 스타일을 상속받음
<style scoped>
h1 {
  color:#2f3852;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>