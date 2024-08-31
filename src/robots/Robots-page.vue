<script setup>
import BaseHeader from '../../src/components/BaseHeader.vue'
import BaseFooter from '../../src/components/BaseFooter.vue'
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const main = card.querySelector('.main');
    const dots = card.querySelector('.dots');
    const button = card.querySelector('a');

    function expandText() {
      // Supprime la limite de hauteur
      main.style.maxHeight = 'none';
      // Cache les trois petits points et le bouton
      dots.style.display = 'none';
      button.style.display = 'none';
    }

    dots.addEventListener('click', expandText);
    button.addEventListener('click', expandText);
  });
});</script>
<template>

  <BaseHeader />

  <main>
    <h1>Robots</h1>

    <nav>
      <a href="#crescendo">
        <h2>2024</h2>
        <img
          src="https://www.chiefdelphi.com/uploads/default/original/3X/e/3/e368a7acb70c869b89fee0382bfe312c595bb781.svg"
          class="logo">
      </a>
      <a href="#chargedup">
        <h2>2023</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Charged_Up_Logo.svg/1920px-Charged_Up_Logo.svg.png"
          class="logo">
      </a>
      <a href="#rapidreact">
        <h2>2022</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Rapid_React_Logo.svg/1024px-Rapid_React_Logo.svg.png"
          class="logo">
      </a>
    </nav>



    <div class="timeline">
      <i class="fa-solid fa-chevron-up arrow"></i>

      <div class="card left" id="reefscape">
        <img src="./../components/images/fd_frc_reefscape_logo_patch_full color_rgb.png" class="logo" width="100%">
        <img src="../components/images/robot.jpg" class="img" width="100%">
        <div class="main">
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sed leo nascetur integer facilisis accumsan aliquet
            elementum phasellus vitae. Tempus dis mauris integer nostra hac. Metus porta lacus ultricies fermentum
            mollis
            curabitur pharetra risus. Nam nullam class imperdiet iaculis felis taciti fringilla porta. Congue taciti leo
            bibendum feugiat tristique. Nam dictumst id ligula at scelerisque ex euismod. Imperdiet nisl natoque varius
            mauris quisque. Consequat lacinia nascetur tellus dignissim nibh, dolor neque eleifend.
            <br>
            Et dis nostra maximus suscipit cursus viverra quisque. Cursus malesuada elementum euismod consequat
            condimentum pellentesque vulputate. Curabitur leo praesent amet maecenas, rhoncus facilisi adipiscing. Magna
            magnis donec egestas dui erat vitae fames dui. Faucibus integer enim faucibus; sem et nisl! Augue felis
            nostra
            inceptos; curae ultrices accumsan. Sed finibus faucibus vitae vulputate accumsan ad. Blandit neque ipsum
            dictumst sociosqu pretium non.
          </p>
          <span class="dots">...</span>
        </div>
        <a>Bouton <i class="fa-solid fa-chevron-down"></i></a>
      </div>
      <div class="line">
        <div class="circle"></div>
        <div class="link left"></div>
      </div>
      <div class="date">
        <h2> Crescendo - 2024</h2>
      </div>

      <div class="date">
        <h2>Crescendo - 2024</h2>
      </div>
      <div class="line">
        <div class="circle"></div>
        <div class="link"></div>
      </div>
      <div class="card" id="crescendo">
        <img
          src="https://www.chiefdelphi.com/uploads/default/original/3X/e/3/e368a7acb70c869b89fee0382bfe312c595bb781.svg"
          class="logo" width="100%">
        <img src="../components/images/robot.jpg" class="img" width="100%">
        <div class="main">
          <p>Lorem Ipsum
            <span class="hidden">Lorem</span>
          </p>
        </div>
        <a>Bouton <i class="fa-solid fa-chevron-down"></i></a>
      </div>

      <div class="card left">
        <img
          src="https://www.chiefdelphi.com/uploads/default/original/3X/e/3/e368a7acb70c869b89fee0382bfe312c595bb781.svg"
          class="logo" width="100%">
        <img src="../components/images/robot.jpg" class="img" width="100%">
        <div class="main">
          <p>Lorem Ipsum
            <span class="hidden">Lorem</span>
          </p>
        </div>
        <a>Bouton <i class="fa-solid fa-chevron-down"></i></a>
      </div>
      <div class="line">
        <div class="circle"></div>
        <div class="link left"></div>
      </div>
      <div class="date right">
      </div>
    </div>
  </main>
  <BaseFooter />
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

$line-distance : 50px;
$circle-radius : 15px;

@mixin content($card-background) {
  background: $card-background;
}

// Styles specific to year

#reefscape {
  @include content(#b2e6f4);
}

#crescendo {
  @include content(#aedaca);
}

nav {
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin: auto;

  img {
    height: 100px;
  }
}

.card {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 3fr max-content max-content;
  grid-template-areas:
    "logo img"
    "text text"
    "button button";

  @mixin content($card-background) {
    background: $card-background;

    .dots {
      background-color: $card-background;
      box-shadow: 0px 10px 5px 5px $card-background;
    }
  }

  width: 500px;
  margin: 0px calc($line-distance + $circle-radius/2 + 6px);
  padding: 20px;
  border-radius: 15px;

  a {
    font-weight: 400;
    grid-area: button;
    margin-top: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

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

  .main {
    grid-area: text;
    max-height: 250px;
    overflow: hidden;
    position: relative;

    p {
      text-align: justify;
    }

    .dots {
      padding-left: 10px;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      left: 35%;
      width: 65%;
      height: 20px;
      z-index: 1;
      cursor: pointer;

      @mixin content($card-background) {
        background-color: $card-background;
        box-shadow: 0px 10px 5px 5px $card-background;
      }
    }
  }

  .logo {
    grid-area: logo;
  }

  .img {
    grid-area: img;
    border-radius: 10px;
  }
}

.card.left {
  justify-self: right;

  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    "img logo"
    "text text"
    "button button";

  .logo {
    padding-left: 10px;
  }
}

.timeline {
  margin: 20px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 4px 1fr;

  .arrow {
    position: absolute;
    left: 50%;
    font-size: 32px;
    width: min-content;
    color: $accent;
    transform: translateX(-50%) translateY(-10px);
  }


  .date {
    position: relative;

    h2 {
      position: absolute;
      top: 50%;
      right: 30px;
      font-size: 38px;
      margin: 0;

      transform: translateY(-38%);
    }
  }

  .line {
    position: relative;
    background: $accent;
    width: 4px;
    height: 100%;

    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: $circle-radius;
      height: $circle-radius;
      border-radius: 50%;
      background: linear-gradient($accent, $orange);
      transform: translate(-50%, -50%);
    }

    .link {
      position: absolute;
      top: 50%;
      left: calc(50% + $circle-radius/2 + 3px);
      width: $line-distance;
      border-top: 5px dotted $accent;
      transform: translateY(-50%);
    }

    .link.left {
      left: calc(50% - $line-distance - $circle-radius/2 - 3px);
    }
  }
}
</style>
