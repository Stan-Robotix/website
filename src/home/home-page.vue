<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import HomeRecently from '../components/HomeRecently.vue';
import HomePhoto from '../components/HomePhoto.vue';
import HomeInstaFeed from '../components/HomeInsta.vue';
</script>

<template>

  <BaseHeader/>

  <main>
    <h1>Stan <span>Robotix</span></h1>
    <h3>Team 6622</h3>
    <img alt="logo" class="logo" src="../components/icons/Logotix-Bluetext.svg" height="200px"/>
    <HomeRecently/>
    <HomePhoto/>
    <HomeInstaFeed/>
    
  </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h1 span {
  background-color: $accent;
  border-radius: 8vh;
  padding: 5px 5vh;
  color:white;
}

h3 {
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  margin: 3vh;
}

img {
  margin: 3vh auto;
  margin-bottom: 6vh;
  display: block;
}

</style>
