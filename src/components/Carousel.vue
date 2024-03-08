<script>
export default {
  name: 'carouselProducts',
  data() {
    return {
      activate: []
    }
  },
  mounted() {
    this.animation()
  },
  methods: {
    animation() {
      const carouselTop = document.querySelector('.carousel-ctr')
      const carouselInner = document.querySelector('.carousel-inner')

      document.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement
        const topElementToTopViewport = carouselTop.getBoundingClientRect().top

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
          carouselInner.classList.add('display')
        }
      })
    }
  }
}
</script>

<template>
  <div class="container-fluid carousel-ctr">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-bckgd"></div>
      <h1>Le TOP 3 de nos produits</h1>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row product-dscpt">
            <div class="col-3 text-product">
              <span>
                <h3>Muffins Colors</h3>
                <p>Découvrez nos Muffins Colors pour une pause sucrée colorée !</p>
              </span>
            </div>
            <div class="col-4 img-product">
              <img src="../assets/images/cupcakes.png" class="d-block" alt="..." />
            </div>
            <div class="col-3 ingredients-product">
              <span>
                <h3>Atout(s) séduction:</h3>
                <ul class="list">
                  <li>fruits confis</li>
                  <li>Créme aux fruits</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row product-dscpt">
            <div class="col-3 text-product">
              <span>
                <h3>Muffins Valentin</h3>
                <p>Muffins à partager !</p>
              </span>
            </div>
            <div class="col-4 img-product">
              <img src="../assets/images/red-cupcake.png" class="d-block" alt="..." />
            </div>
            <div class="col-3 ingredients-product">
              <span>
                <h3>Atout(s) séduction:</h3>
                <ul class="list">
                  <li>Coeur fondant au chocolat noir</li>
                  <li>Crème beurre/vanille</li>
                  <li>Toppings</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row product-dscpt">
            <div class="col-3 text-product">
              <span>
                <h3>Muffins Caramel</h3>
                <p>Un classique toujours aussi savoureux</p>
              </span>
            </div>
            <div class="col-4 img-product">
              <img src="../assets/images/caramel-cupcake.png" class="d-block" alt="..." />
            </div>
            <div class="col-3 ingredients-product">
              <span>
                <h3>Atout(s) séduction:</h3>
                <ul class="list">
                  <li>Coeur coulant au chocolat</li>
                  <li>Coulis de caramel</li>
                  <li>Eclats de noix</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-ctr {
  margin-top: 50px;
  padding: 0;
  .carousel {
    position: relative;
    background: white;

    .carousel-bckgd {
      background: #bb2649;
      position: absolute;
      height: 85%;
      width: 100%;
    }
    h1 {
      position: absolute;
      right: 0;
      left: 0;
      color: white;
      text-align: center;
      padding: 20px;
    }
    .carousel-inner {
      transform: translateY(-150px);
      opacity: 0;
      .carousel-item {
        .product-dscpt {
          justify-content: center;
          .text-product,
          .ingredients-product {
            align-self: center;
            position: relative;
            span {
              position: absolute;
              top: 15px;
              width: 65%;
              height: 215px;
              padding: 18px;
              border: thick double #e5ccaf;
              background: #b7a990;
              color: white;
              display: grid;
              align-items: center;
              align-content: center;
              transform: translateY(100px);
              opacity: 0;
              h3 {
                font-size: x-large;
              }
              p,
              ul li {
                font-weight: 700;
                font-size: larger;
              }
            }
          }
          .text-product span {
            right: 0;
            text-align: center;
            p {
              text-align: center;
            }
          }
          .ingredients-product span {
            left: 0;
            text-align: left;
          }

          .img-product {
            img {
              margin: auto;
            }
          }
        }
      }
    }
    .carousel-inner.display {
      transform: translateY(0px);
      opacity: 1;
      transition: all 1s ease-in-out;
    }
    .carousel-inner .carousel-item.active .product-dscpt .img-product {
      transform: scale(1.3);
      transition: transform 0.5its ease-in-out;
    }
    .carousel-inner .carousel-item.active .product-dscpt .text-product span,
    .carousel-inner .carousel-item.active .product-dscpt .ingredients-product span {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>
