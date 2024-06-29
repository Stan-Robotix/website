<script>
export default {
  methods: {
    getBasePath() {
      const pathArray = window.location.pathname.split('/');
      // Supposons que le chemin de base soit le nom du dépôt, ici 'vue-deploy'
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
  <nav role="navigation" class="horinav">
    <ul>
      <li>
        <a :class="{ active: isActive('/home.html') }" href="../">Home</a>
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
      <li><a :class="{ active: isActive('/robots/') }" href="./robots/">Robots</a></li>
      <li><a :class="{ active: isActive('/outreach/') }" href="./outreach/">Outreach</a></li>
      <li><a :class="{ active: isActive('/sponsors/') }" href="./sponsors/">Sponsors</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

nav {
  display: block;
  width: max-content;
  height: 40px;
  font-size: 120%;
  font-weight: 300;

  ul {
    height: 100%;
    background: transparent;
    list-style: none;
    margin: 0;
    padding-left: 0;
    font-size: 120%;
    display: flex;
    gap: 10px;
    font-size: 90%;
  }

  li {
    width: 120px;
    height: 100%;
    color: inherit;
    background: transparent;
    display: block;
    position: relative;
    text-align: center;

    ul {
      height: auto;
      background: rgba($secondary, $alpha: 0.1);
      padding-top: 40px;
      transform: translateY(-40px);
      border-radius: 10px;
      width: 100%;
      position: absolute;
      transition: all 0.5s ease;
      left: 0;
      display: none;

      a:hover {
        background-color: rgba($secondary, $alpha: 0.2);
      }

      li {
        margin-left: 0px;
        clear: both;
        width: 90%;
        padding: 0.5em;
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0px solid $primary;
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
  
  i {
    position: absolute;
    right:25px;
    top:8px;
  }

}

ul li:hover>ul,
ul li:focus-within>ul,
ul li ul:hover,
ul li ul:focus {
  display: block;
  transition: all 1s ease;
}

@media screen and (max-width: 500px) {
  .horinav {
    margin: auto;
    clear: both;
  }

  header h2 {
    text-align: center;
    height: min-content;
    margin-left: auto;
  }
}
</style>
