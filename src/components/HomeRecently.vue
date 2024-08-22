<script setup>

</script>

<template>
  <main>
    <h2>Recently</h2>

    <div class="grid">
      <!-- TODO-Content: Complete with events and possibly links to learn more if needed ; if not, describe in a "<p>" as in the second div -->
      <div>
        <a href="#" class="img"><i class="fa-solid fa-location-arrow"></i><img src="../components/images/robot.jpg"></a>
        <div>
          <h4>Event</h4>
          <h5>September 3, 2024</h5>
          <h2>Really cool event we did</h2>
          <a href="">Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>

      <div>
        <img class="img" src="../components/images/websiteSS.png">
        <div>
          <h4>Project Update</h4>
          <h5>August 21, 2024</h5>
          <h2>Completing the website</h2>
          <p>Our students recreated a website, turning it into a modern, user-friendly platform. This project provided a
            practical learning experience in web development and design while creating a valuable marketing tool for
            Stan Robotix.</p>
        </div>
      </div>

      <div>
        <a href="#" class="img"><i class="fa-solid fa-location-arrow"></i><img
            src="../components/images/20220423_BM_0293.jpg"></a>
        <div>
          <h4>Placeholder tag</h4>
          <h5>date</h5>
          <h2>Placeholder event title</h2>
          <a href="">Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

main {
  background-color: $primary;
  margin: auto;
  padding: 1px;

  >h2 {
    font-weight: 600;
    font-size: 300%;
    line-height: 125%;
    text-align: center;
    width: max-content;
    margin: 40px auto;

    border-bottom: 4px solid $blue;
  }
}


.grid {
  width: max(600px, 60vw);
  display: grid;
  margin: 20px auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;

  h2 {
    color: $blue;
    margin: 15px 0px 0px;
    grid-area: mid;

    +p {
      grid-area: bot;
      text-align: justify;
      font-size: 14px;
    }
  }

  >div {
    width: auto;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    height: min-content;
  }

  .img+div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content auto;
    grid-template-areas:
      "top top"
      "mid mid"
      "bot bot"
    ;
    margin-top: -5px;
    border-radius: 0px 0px 10px 10px;
    background-color: white;
    height: min-content;
    padding: 20px;
  }

  img {
    border-radius: 10px 10px 0px 0px;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  a.img {
    background-color: black;
    position: relative;
    overflow: hidden;
    display: inline-grid;
    grid-template: "mid" 1fr/
      1fr;

    margin: 0;
    border-radius: 10px 10px 0px 0px;

    img {
      transition: all 0.5s ease;
      vertical-align: middle;
      grid-area: mid;
    }

    i {
      grid-area: mid;
      margin: auto;
      z-index: 2;
      color: white;
      font-size: 0px;
    }
  }


  a.img:hover img {
    opacity: 0.7;
    transform: scale(1.1);
  }

  a.img:hover i {
    font-size: 32px;
  }
}

h4,
h5 {
  display: inline;
  font-size: 14px;
  margin: 0;
  grid-row: 1;
}

h4 {
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  padding: 2px 10px;
  background: linear-gradient($accent, $orange);
  width: max-content;
}

h5 {
  text-align: justify;
  font-weight: 300;
  margin-left: 15px;
  color: $secondary;
}

a {
  font-weight: 400;
  grid-area: bot;
  margin-top: 10px;
  transition: all 0.5s ease;

  i {
    color: $accent;
    transition: all 0.5s ease-out;
  }
}

a:hover {
  color: $accent;
  font-weight: 500;

  i {
    margin-left: calc(100% - 105px);
  }
}
</style>