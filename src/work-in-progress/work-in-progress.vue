<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
</script>

<template>
  <BaseHeader/>
  <main>
    <h1>Work in Progress</h1>
    <h3>Check back soon for updates!</h3>
  </main>
  <BaseFooter/>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h1 {
    font-size: 4em;
}

h3 {
    text-align: center;
    font-weight: 300;
}

main {
    margin-bottom: 6em;
}

</style>
