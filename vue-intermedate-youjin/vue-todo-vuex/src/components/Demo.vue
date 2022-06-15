<template>
  <div id="root">
      <p>{{ originalPrice }}</p>
      <p>{{ doblePrice }}</p>
      <p>{{ triplePrice }}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            originalPrice,
            doblePrice,
            triplePrice
        })

        // helper 쓰지 않을때
        // originalPrice() {
        //     return this.$store.getters.originalPrice;
        // },
        // doblePrice() {
        //     return this.$store.getters.doblePrice;
        // },
        // triplePrice() {
        //     return this.$store.getters.triplePrice;
        // }
    }
}
</script>

<style>

</style>