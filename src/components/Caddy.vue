<script>
import { mapGetters } from 'vuex';
export default {
    name: "Caddy",
    created() {
        // Charger le panier depuis sessionStorage lors du chargement de l'application
        this.$store.dispatch('loadCaddyFromSessionStorage');
    },
    computed: {
    ...mapGetters(['getCaddy']),
    caddy() {
      return this.getCaddy
    },
    },
    methods:{
        updateQuantity(index, newQuantity) {
            this.$store.commit('updateQuantity', { articleIndex: index, newQuantity });
        },
        removeFromCaddy(index) {
            const indeX = index
            this.$store.commit('removeFromCaddy', indeX);
        }
    }
  
}
</script>

<template>
    <button id="Caddy" class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart3"></i></button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Votre Panier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="row">
            <div class="col">
                <article class="pull-center">
                    <legend>Mon panier</legend>
                    <table id="tableau" class="table table-responsive-lg table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Articles</th>
                                <th>Qte</th>
                                <th>Prix</th>
                                <th>Prix total</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody id="caddy">
                            <!-- Boucle sur les articles pour les afficher dans le panier -->
                            <tr v-for="(article, index) in caddy" :key="index">
                                <td>{{ article.name}}</td>
                                <td><input class="col-8" type="number" :value="article.quantity" @input="updateQuantity(index, $event.target.value)"> </td>
                                <td>{{ article.price/100 }}</td>
                                <td>{{ (article.price*article.quantity)/100 + "€"}}</td>
                                <td><button @click="removeFromCaddy(index)" class="btn"><i class="bi bi-trash3"></i></button></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </article>
                <article>
                    <table class="table">
                        <thead>
                            <tr id="totalPrice">
                                <th>Total : €</th>
                            </tr>
                        </thead>
                    </table>
                </article>
            </div>
        </div> 
    </div>
    </div>
    
</template>

<style lang="scss">
#Caddy{
    position: fixed;
    top: 25px;
    right: 25px;
    font-size: xxx-large;
}
</style>