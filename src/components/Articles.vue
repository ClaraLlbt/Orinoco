<script>
import axios from 'axios'
export default{
    name: "articles",
    data(){
        return{
            articles: []
        }
    },
    mounted(){
        this.getArticles()
    },
    methods:{
        getArticles(){
            axios.get('https://dito-pro.direct.quickconnect.to:3005/api/cameras')
            .then((res) =>{
                this.articles = res.data
                console.log(this.articles)
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }
}
</script>

<template>
    <div id="shop" class="container">
        <div class="row articles">
            <h2>Nos articles</h2>
            <slot v-for="(article, index) in articles" :key="article.id" :article="article" :index="index" :id="article.id"></slot>
        </div>
    </div>
</template>