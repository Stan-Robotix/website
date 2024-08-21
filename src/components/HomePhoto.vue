<script setup>

</script>

<template>
  <section>
    <main>
      <!-- TODO-Content: photo date and description -->
      <h5>March 3, 2024 - Team Photo</h5>
    </main>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

section {
  width:98vw;
  height: 100%;
  padding:20px;
  background: linear-gradient($primary 50%, rgba($text, $alpha: 0.3) 50%, $background 52%);
}

main {
  // TODO-Content: put a team photo
  background-image: url("../components/images/group.jpg");

  min-height: 90vh;
  width: 90vw;
  margin: auto;

  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-flow: row-reverse;
  align-items: flex-end;
  border-radius: 10px;
  box-shadow: 0px 10px 12px rgba($text, $alpha: 0.4) ;
}

h5 {
  color: $background;
  text-shadow: 2px 2px 2px rgba($text, $alpha: 0.8);
  font-weight: 400;
  display: inline;
  font-size: 16px;
  margin: 20px;
}
</style>