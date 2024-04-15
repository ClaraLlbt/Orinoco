<script>
export default {
  name: 'aboutComponents',
  mounted() {
    this.animateTxt()
  },
  methods: {
    animateTxt() {
      const aboutCtr = document.querySelector('#about')
      const h1 = document.querySelector('.title')
      console.log(h1)
      const story = document.querySelector('.history')

      console.log(aboutCtr)
      document.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement
        const topElementToTopViewport = aboutCtr.getBoundingClientRect().top

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5) {
          h1.classList.add('display')
          story.classList.add('display')
        }
      })
    }
  }
}
</script>

<template>
  <div id="about" class="container-fluid about-ctr">
    <h1 class="title">Saisissez l'instant présent</h1>

    <div class="row history">
      <div class="col-11 col-xl-6">
        <p>
          <span>STORY</span> Nichés au cœur de l'ère numérique, 
          nous célébrons l'authenticité et le charme intemporel de la photographie. 
          Basés à Paris, la capitale mondiale de l'art et de la créativité, 
          nous vous offrons une sélection minutieusement choisie d'appareils photo, 
          restaurés avec soin pour capturer à nouveau des moments uniques et précieux. 
          Rejoignez notre communauté et redécouvrez la magie de la photographie, où chaque cliché raconte une histoire 
        </p>
      </div>
    </div>
 
  </div>
</template>

<style lang="scss">
.about-ctr {
  padding: 100px 0;
  h1 {
    text-align: center;
    opacity: 0;
    transform: translateY(-50px);
  }
  .history {
    justify-content: center;
    text-align: justify;
    width: 100%;
    opacity: 0;
    transform: translateY(-50px);
    p {
      padding: 80px 0;
      span {
        font-style: italic;
        font-size: x-large;
        font-weight: 700;
      }
    }
  }
  .title.display,
  .history.display {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out;
  }
 
}

@media screen and (max-width: 768px) {
  .about-ctr{
    padding: 20px 0;
    margin-top: 30px;
  }
  .about-ctr .history{ width: auto}
}
</style>
