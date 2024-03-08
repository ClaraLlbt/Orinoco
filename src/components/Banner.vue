<script>
export default {
  name: 'bannerComponent',
  mounted(){
    this.animations()
  },
  methods:{
    animations(){
      const cameraHover = document.getElementById('camera')
      const cls = document.getElementsByClassName('column')
      const totalColumns = cls.length;

      cameraHover.addEventListener('mouseover', () => {
        Array.from(cls).forEach((cln, index) => {
          setTimeout(() => {
              cln.classList.add('hvr') // Ajoutez une classe CSS pour déclencher l'animation
          }, 300 * index); // Appliquez un délai de 0.5 seconde multiplié par l'index de la carte
        });

      })
      cameraHover.addEventListener('mouseout', () => {
          Array.from(cls).forEach((cln, index) => {
              setTimeout(() => {
                cln.classList.remove('hvr'); // Faites disparaître les éléments avec une opacité de 0
              }, 300 * (totalColumns - index)); // Appliquez un délai de 0.5 seconde multiplié par l'index de l'élément
          });
      });
    }
  }
}
</script>

<template>
  <div class="container-fluid banner-ctr">
    <div class="row news">
      <div id="camera" class="col-lg-6 camera bckgd"></div>
      <div class="col-lg-3 dscpt">
        <h2>ORINOCO XM-T2</h2>
        <button class="btn"><span>DISCOVER NOW!</span></button>
      </div>
      <div class="row infos">
          <div class="col-2 column"><i class="bi bi-camera-reels"></i><p>VIDEO FULL HD</p></div>
          <div class="col-2 column"><p>Résolution <span>24,5 MP</span></p></div>
          <div class="col-2 column">
            <p><span>ISO</span> min100</p>
            <p>max51600</p>
          </div>
          <div class="col-2 column"><i class="bi bi-wifi"></i><p>WIFI</p></div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner-ctr {
  height: 90vh;
  color:white;
  background-color: #00003A;
  .news {
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    .bckgd {
      background: url('../assets/images/camera3.png');
      width: 600px;
      height: 600px;
      background-position: center;
      background-size: cover;
      z-index: 1;
      transition: transform 0.3s ease; /* Transition pour une animation fluide */
    }
    .dscpt{
      h2{ margin-bottom: 50px;}
      button{
        position: relative;
        display: inline-block;
        padding: 15px 30px;
        border: 2px solid #fefefe;
        text-transform: uppercase;
        color: #fefefe;
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
        &::before {
          content: '';
          position: absolute;
          top: 6px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% - 12px);
          background-color: #00003A;
          transition: 0.3s ease-in-out;
          transform: scaleY(1);
        }
        &:hover::before {
          transform: scaleY(0);
        }
        &::after {
          content: '';
          position: absolute;
          left: 6px;
          top: -2px;
          height: calc(100% + 4px);
          width: calc(100% - 12px);
          background-color: #00003A;
          transition: 0.3s ease-in-out;
          transform: scaleX(1);
          transition-delay: 0.5s;
        }
        &:hover::after {
          transform: scaleX(0);
        }
        &:focus{ box-shadow: none;}
        span{
          position: relative;
          z-index: 2;
        }
      }
     
    }
    .infos{
        justify-content: space-evenly;
        margin-bottom: 35px;
        width: 50%;
        position: absolute;
        bottom: 80px;
        .column{
          opacity: 0;
          padding: 10px;
          border-radius: 20px;
          background: #00003A;
          box-shadow:  20px 20px 60px #000017,
                      -20px -20px 60px #00005d;
          transform: translateY(60px);
          transition: all 0.5s ease;
          i{
            font-size: x-large;
          }
          p{ 
            padding: 0;
            margin: 0;
            font-size: large;
          }
          p span{ 
            font-size: x-large;
            font-weight: bold;
          }
        }
        .column.hvr {
          opacity: 1;
          transform: translateY(0px);
          transition: all 1s ease;
        }
      }
  }
  .news .bckgd:hover {
  transform: translate(-20px, -20px); /* Ajustez les valeurs selon vos préférences */
  }

}

@media screen and (max-width: 768px) {
  .banner-ctr{
    .news{
      flex-direction: column-reverse;
      .bckgd{
        width: 300px;
        height: 300px;
      }
      .infos{
        bottom: 25px;
        width: 100%;
        .column p{
          font-size: smaller;
          span{ font-size: large;}
        }
      }
    }
  }
}
</style>
