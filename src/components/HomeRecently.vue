<script setup>
import NewsCardClickable from './NewsCardClickable.vue'
import NewsCardUnclick from './NewsCardUnclick.vue'
</script>

<template>
  <main>
    <h2>Recently</h2>

    <div class="grid">
      <!-- TODO-Content: Complete with events and possibly links to learn more if needed ; if not, use NewsCardUnclick -->
      <NewsCardClickable link="#">
        <template v-slot:img>
          <img src="../components/images/robot.jpg">
        </template>
        <template v-slot:tag>Event</template>
        <template v-slot:date>September 3, 2024</template>
        <template v-slot:title>Really cool event we did</template>
      </NewsCardClickable>

      <NewsCardUnclick>
        <template v-slot:img>
          <img class="img" src="../components/images/DSF4460.jpg">
        </template>
        <template v-slot:tag>Project Update</template>
        <template v-slot:date>August 21, 2024</template>
        <template v-slot:title>Creating a whole new website</template>
        <template v-slot:desc>Our students recreated a website, turning it into a modern, user-friendly platform. This project provided a
            practical learning experience in web development and design while creating a valuable marketing tool for
            Stan Robotix.</template>
      </NewsCardUnclick>

      <NewsCardClickable link="#">
        <template v-slot:img>
          <img src="../components/images/20220423_BM_0293.jpg">
        </template>
        <template v-slot:tag>Placeholder tag</template>
        <template v-slot:date>Januray 1st, 2024</template>
        <template v-slot:title>Placeholder event title</template>
      </NewsCardClickable>

    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

main {
  background-color: $primary;
  margin: auto;
  padding: 15px;

  >h2 {
    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    text-align: center;
    width: max-content;
    margin: 15px auto;

    border-bottom: 4px solid $blue;
  }
}


.grid {
  width: max(880px, 70vw);
  display: grid;
  margin: 40px auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 20px;

  >div {
    width: auto;
    max-width: 600px;
    min-width: 200px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    height: min-content;
  }

  img {
    border-radius: 10px 10px 0px 0px;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  a.img:hover img {
    opacity: 0.7;
    transform: scale(1.1);
  }

  a.img:hover i {
    font-size: 32px;
  }
}

@media screen and (max-width: 900px) {
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90vw;
  }
}
</style>