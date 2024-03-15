<script>
import Articles from '@/components/Articles.vue'
import About from '../components/About.vue'
import Banner from '../components/Banner.vue'
import Navbar from '../components/Navbar.vue'

import { mapActions } from 'vuex'
import FooterVue from '@/components/FooterVue.vue'
import Caddy from '@/components/Caddy.vue'

export default {
  components: { Caddy, Navbar, Articles, About, Banner, FooterVue },
  methods: {
    ...mapActions(['addToCaddy']),
  }
}
</script>

<template>
  <header>
    <Navbar />

    <div id="home">
      <Banner />
    </div>
  </header>

  <main>
    <Caddy/>
    <About />

    <!-- Articles -->
    <Articles>
      <template  v-slot="{ article }">
        <div class="col-6 col-xl-3 card">
            <div class="card-body" :id="article.id"> 
            <img :src="article.imageUrl" alt="">            
            <h2>{{ article.name }}</h2>
            <p class="content">{{ article.description }}</p>
          </div>
          <div class="row btns">
            <button class="btn col"><router-link :to="{ name: 'ProductSheet', params: { id: article.id } }" class="btn read-more">SEE MORE</router-link></button>
            <button id="addToCaddy" @click="addToCaddy(article, index)" class="btn col">{{ article.price/100 + " € " }}<i class="bi bi-bag-plus"></i></button>
          </div>  
        </div>
      </template>
    </Articles>
    
  </main>
  <FooterVue/>
</template>

<style lang="scss">
.mvp-ribbon {
  background: url('../assets/images/MVP.png');
  position: fixed;
  width: 100%;
  height: 100vh;
  background-size: cover;
  z-index: 2;
}

.articles {
  display: flex;
  justify-content: space-between;
    .card{
    margin: 20px 0;
    border: none;
    position: relative;
    .card-body{
      border: 4px solid #00003A;
      img{
        width: 100%;
      }
    }
    .btns{
      position: absolute;
      left: 0;
      right: 0;
      bottom: -20px;
      width: 60%;
      margin: auto;
      .btn{
        background: #00003A;
        color: white;
        border: 0;
        border-radius: 0;
        margin: 5px;
        font-size: 12px;
        a{
          padding: 0;
          margin: 0
        }
      }
    }
  }
}

</style>
