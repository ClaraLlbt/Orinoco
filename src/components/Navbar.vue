<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  mounted(){
    const navbar = document.querySelector('.navbar')
    console.log(navbar)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      navbar.classList.add('navbar-dark')
    }
  },
  computed: {
        ...mapGetters(['getCaddy']),
        caddy() {
            return this.getCaddy  
        },
        // Propriété calculée pour obtenir le nombre total d'articles dans le caddie
        caddyLength() {
            return this.$store.getters.getCaddy.length;
        }
    },
    watch: {
    // Surveille les changements dans le caddie et met à jour l'attribut data-count
    caddyLength(newValue) {
      const btnCaddy = document.getElementById('Caddy');
      if (newValue > 0) {
        btnCaddy.setAttribute('data-count', newValue);
      } else {
        btnCaddy.removeAttribute('data-count');
      }
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <a class="navbar-brand" href="#"></a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#shop">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footerNav">Contact</a>
          </li>
          <li class="item-right nav-icons">
            <a class="nav-item btn" href=""><i class="bi bi-person"></i></a>
            <a class="nav-item btn" id="Caddy" :class="{'nb-articles': caddyLength > 0 }" :data-count="caddyLength" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart3"></i></a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

</template>

<style lang="scss">
.navbar {
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background: white;
  .container-fluid {
    justify-content: flex-end;
    .navbar-collapse {
      text-align: right;
      ul {
        position: absolute;
        width: 99%;
        justify-content: center;
        li {
          font-size: x-large;
          
        }
        .nav-icons{
          position: absolute;
          right: 15px;
          .nav-item{ 
            font-size: xx-large;
            color: rgb(61, 106, 255);
          }
          #Caddy{position: relative;}
          #Caddy.nb-articles{
            &::before{
                content: attr(data-count);
                position: absolute;
                right: 0;
                top: 0px;
                background: #E20000;
                color: white;
                height: 20px;
                border-radius: 100%;
                width: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: small;
                font-weight: 900

            }
        }
          
        }
      }
    }
  }
}
</style>
