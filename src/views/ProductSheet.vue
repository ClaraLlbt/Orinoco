<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
    name: "ProductSheet",
    data(){
        return{
            article: {}
        }
    },
    components:{ Navbar},
    mounted(){
        this.loadDetails()
    },
    methods:{
        loadDetails(){
            const articleId = this.$route.params.id
            axios.get('http://localhost:3000/api/cameras/' + articleId)
            .then((res)=>{
                this.article = res.data
            })
            .catch((err) => {
                console.log(err);
            })
        },
        returnBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<template>
    <Navbar/>
    <div class="container productsheet-ctr">
        <div class="row productsheet">
            <div class="col-12 btn-back">
                <button @click="returnBack()" class="btn"><i class="bi bi-caret-left-fill"></i> Retour</button>
            </div>
            <div class="col-6 imgs">
                <img :src="article.imageUrl" alt="">
            </div>
            <div class="col-6 dscpt">
                <span class="row title">
                    <h2>{{ article.name }}</h2>
                    <p>réf. produit: {{  article._id }}</p>
                </span>
                <span class="row price"><p>{{ article.price/100 + " € " }}</p></span>
                <span class="row order-info">
                    <div class="col-12">
                        <p class="shipping"><i class="bi bi-shop"></i> Livraison en point relais</p>
                        <p class="text-muted">Expédition sous 12h, réception sous 48h,à partir de 3,99€</p>
                    </div>
                    <div class="col-12">
                        <p class="shipping"><i class="bi bi-truck"></i> Livraison à domicile</p>
                        <p class="text-muted">Dés mardi, à partir de 2,99€</p>
                    </div>
                </span>
                <hr>
                <span class="row informations">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Description</a>
                        <a class="list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Performance</a>
                        <a class="list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Informations complémentaires</a>
                    </div>
                    
                    <div class="col-12 contents">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                <p>{{ article.description}}</p>
                                <span>Lentilles disponibles pour ce modèle : <p>{{ article.lenses }}</p></span>
                            </div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                <ul>
                                    <li>Visée à l'écran : Non</li>
                                    <li>Connectivité : Wi-Fi</li>
                                    <li>Etanche : Non</li>
                                    <li>Type de viseur : optique, permet d'obtenir une vue directe et naturelle de la scène et ne nécessite pas d'alimentation.</li>
                                    <li>Connectiques : Sortie USB</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                <ul>
                                    <li>Fabriqué en : Birmanie</li>
                                    <li>Garantie : 2 ans</li>
                                    <li>Marque : KODAKK</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </span>
                <div class="row btn-shop">
                    <input type="number" class="col-2 qty" id="inputQty" name="inputQty" value="1">

                    <button class="btn col-6">Ajouter au panier</button>
                </div>
            </div>
        </div>
    </div>

    
</template>


<style lang="scss">
.productsheet-ctr{
    margin: 80px auto;
    display: flex;
    align-items: center;
    .productsheet{
        .btn-back{
            padding: 0;
            button{
                background: #00003A;
                color: white;
                margin: 15px auto;
                border-radius: 0;
            }
        }
        .imgs{
            background: #F76F00;
            text-align: center;
        }
        .dscpt{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .informations{
                .list-group{
                    display: flex;
                    flex-direction: row;
                    text-align: center;
                    margin-bottom: 20px;
                    .list-group-item-action:focus{
                        border-bottom: 1px solid darkgray
                    }
                }
                .contents{
                    .tab-content{
                        ul li{ color: #00003A;}
                    }
                }
                
            }
            .price{
                font-size: x-large;
                font-weight: 900;
            }
            .order-info{
                p{
                    padding: 0;
                    margin: 0;
                }
                .shipping{
                    color: yellowgreen;
                    font-weight: bolder;
                    font-size: medium;
                }
            }
            .btn-shop{
                justify-content: space-evenly;
                .qty{
                    border-radius: 50px;
                }
                .btn{
                    background: #00003A;
                    border-radius: 0;
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>