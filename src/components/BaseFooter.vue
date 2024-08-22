<script>
export default {
  // FONCTIONS JAVASCRIPT QUI PERMETTENT DE DÉTECTER SI ON EST SUR UNE CERTAINE PAGE
  // but : highlight le bouton de la page sur lequel on se trouve
  methods: {
    getBasePath() {
      const pathArray = window.location.pathname.split('/');
      // Supposons que le chemin de base soit le nom du dépôt, ici 'website'
      return `/${pathArray[1]}`;
    },
    isActive(path) {
      const basePath = this.getBasePath();
      const currentPath = window.location.pathname;

      // Vérifiez si le chemin est la racine et que le path spécifié est '/home.html'
      if (currentPath === `${basePath}/` && path === '/home.html') {
        return true;
      }
      return currentPath === `${basePath}${path}`;
    }
  }
};
</script>

<template>
  <footer>
    <a href="/website/"><img alt="logo" class="logo" src="../components/icons/Logotix-Bluetext.svg"
        height="150px" /></a>

      <!-- TODO-Dev : update links when pages are created -->
    <nav role="navigation">
      <ul>
        <li>
          <a :class="{ active: isActive('/home.html') }" href="/website/">Home</a>
        </li>
        <li>
          <p>Team <i class="fa-solid fa-caret-down"></i></p>
          <ul>
            <a :class="{ active: isActive('/about/') }" href="#">
              <li>About</li>
            </a>
            <a :class="{ active: isActive('/history/') }" href="#">
              <li>History</li>
            </a>
            <a :class="{ active: isActive('/join/') }" href="#">
              <li>Join</li>
            </a>
          </ul>
        </li>
        <li><a :class="{ active: isActive('/robots/') }" href="/website/robots/">Robots</a></li>
        <li><a :class="{ active: isActive('/outreach/') }" href="/website/outreach/">Outreach</a></li>
        <li><a :class="{ active: isActive('/sponsors/') }" href="/website/sponsors/">Sponsors</a></li>
      </ul>
    </nav>

    <!-- TODO-Content : add links -->
    <div class="contact">
      <div class="icons">
        <a href="" id="insta" target=”_blank”><span><i class="fa-brands fa-instagram"></i>
          </span></a>
        <a href="" id="linke" target=”_blank”><span><i class="fa-brands fa-linkedin-in"></i>
          </span></a>
        <a href="" id="fb" target=”_blank”><span><i class="fa-brands fa-facebook-f"></i>
          </span></a>
        <a href="" id="linke" target=”_blank”><span><i class="fa-brands fa-github"></i>
          </span></a>
        <a href="" id="mail" target=”_blank”><span><i class="fa-regular fa-envelope"></i>
          </span></a>
      </div>
    </div>

  </footer>

  <h5>View site source on <a href="https://github.com/Stan-Robotix/website" target=”_blank”>Github <i class="fa-brands fa-github"></i></a></h5>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

h5 {
  font-weight: 300;
  font-size: 14px;
  text-align: center;

  a {
    font-weight: 500;
    color: $accent;
    padding: 5px;
    border-radius: 10px;
  }

  a:hover {
    background-color: $accent;
    color: white;
  }
}

footer {
  outline: 1px solid $primary;
  padding: 25px;
  margin: 25px 0px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: max-content max-content;
  justify-items: center;
  align-items: start;

  a {
    grid-column: 1;
    grid-row: 1/3;
    align-self: center;

    img {
      transition: all 0.5s ease;
    }
  }

  a:hover img {
    transform: scale(1.05);
  }


  nav {
    display: block;
    width: max-content;
    height: 140px;

    ul {
      font-size: 14px;
      font-weight: 400;
      height: 100%;
      background: transparent;
      list-style: none;
      margin: 0;
      padding-left: 0;
      display: flex;
      gap: 25px;
    }

    li {
      font-weight: 500;
      width: 60px;
      height: 100%;
      color: inherit;
      background: transparent;
      display: block;
      position: relative;
      text-align: left;

      ul {
        height: auto;
        padding-top: 40px;
        transform: translateY(-40px);
        border-radius: 10px;
        width: 100%;
        position: absolute;
        transition: all 0.5s ease;
        left: 0;
        display: block;

        a:hover {
          background-color: rgba($secondary, $alpha: 0.2);
        }

        li {
          color: $secondary;
          font-weight: 300;
          margin-left: 0px;
          clear: both;
          width: 90%;
        }

      }
    }

    a,
    p {
      margin: 0;
      text-decoration: none;
      color: inherit;
      transition-duration: 0.5s;
      border-radius: 10px;
      width: max-content;
      padding: 5px;

      display: flex;
      justify-content: left;
      align-items: center;
      outline: 0px solid $primary;
      position: relative;
      z-index: 2;
    }

    a:hover {
      transition: all 0.5s ease;
      background-color: rgba($secondary, $alpha: 0.2);
      outline: 1px solid $secondary;
    }

    a.active {
      color: white;
      background-color: $secondary;
    }
  }
}

.contact {
  width: 30vw;
  text-align: center;
  grid-column: 2;
  height: max-content;

  .icons {
    width: 400px;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
    font-size: 28px;
    transition: all 0.5s ease;

    span {
      transition: all 0.5s ease;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      outline: 1px solid transparent;
    }

    i {
      padding: 5px;
      text-align: center;
    }

    a {
      position: relative;
      height: auto;
      color: $text;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a:hover {
      span {
        background-color: rgba($secondary, $alpha: 0.2);
        outline: 1px solid $secondary;
      }
    }
  }
}
</style>