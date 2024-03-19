<script>
export default {
  name: 'Navbar',
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#"><img src="../assets/images/logopng.png" alt="" srcset="" /></a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#shop">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <!-- <a class="nb-phone" href="tel:+33252634163"
          ><i class="fa bi bi-telephone-forward-fill fa-beat"></i> 02 52 63 41 63</a> -->
      </div>
    </div>
  </nav>

</template>

<style lang="scss" scoped>
.navbar {
  padding: 0;
  .container-fluid {
    justify-content: flex-end;
    .navbar-collapse {
      text-align: right;
      .navbar-brand {
        padding: 0;
        margin: 0;
        img {
          width: 28%;
          float: left;
        }
        &:hover{background: none;}
      }
      ul {
        position: absolute;
        width: 99%;
        justify-content: center;
        li {
          font-size: x-large;
          
        }
      }
      .btn{
        position: absolute;
        right: 1%;
        font-size: xx-large;
      }
      a.nb-phone {
        color: #E20000;
        position: absolute;
        right: 5%;
        &:hover{
          color: white;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .navbar{
    .container-fluid {
      padding: 10px;
      .navbar-collapse ul {
        width: auto;
        flex-direction: row;
        
      }
    }
  }
}
</style>
