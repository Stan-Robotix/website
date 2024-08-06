<script setup>
import BaseNav from './BaseNav.vue'
</script>

<template>
  <header>
    <a href="/website/"><img alt="logo" class="logo" src="../components/icons/Logotix-Bluetext.svg" height="100px"/></a>
    
    <div class="icons">
      <a href=""><i class="fa-brands fa-instagram"></i></a>
      <a href=""><i class="fa-brands fa-facebook"></i></a>
      <a href=""><i class="fa-regular fa-envelope"></i></a>
      <a href=""><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <BaseNav/>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

header {
  display: grid;
  grid-template-columns: 120px 50px 1fr 640px;
  justify-items: center;
  align-items: center;

  padding: 0 20px;
  height: 120px;
}

header *:last-child {
  grid-column: 4;
}

header a {
  height:100px;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column ;
  font-size: 18px;
}

.icons a {
  height: auto;
  color: rgba($text, 0.9);
}

.icons a:hover {
  color: rgba($secondary, $alpha: 0.6);
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
