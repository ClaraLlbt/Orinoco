<script>
import { mapGetters } from 'vuex';
export default {
    name: "Caddy",
    created() {
        // Charger le panier depuis sessionStorage lors du chargement de l'application
        this.$store.dispatch('loadCaddyFromSessionStorage');
    },
    mounted(){
        const btnCaddy = document.getElementById('Caddy');
        const numArticles = this.getCaddy.length; // Récupérer le nombre d'articles dans le panier

        if (numArticles > 0) {
            btnCaddy.classList.add('nb-articles');
            // Mettre à jour le contenu du pseudo-élément avec le nombre d'articles
            btnCaddy.setAttribute('data-count', numArticles); // Utilisation de l'attribut data-count pour stocker le nombre d'articles
        } else {
            btnCaddy.classList.remove('nb-articles');
            btnCaddy.removeAttribute('data-count'); // Supprimer l'attribut data-count si aucun article dans le panier
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
  },
    methods:{
        updateQuantity(index, newQuantity) {
            this.$store.commit('updateQuantity', { articleIndex: index, newQuantity });
        },
        removeFromCaddy(index) {
            const indeX = index
            this.$store.commit('removeFromCaddy', indeX);
        },
        getTotalPrice(article) {
            return (article.price * article.quantity) / 100 + "€";
        },
        calculateTotalPrice() {
            let totalPrice = 0;
            this.caddy.forEach(article => {
                totalPrice += (article.price * article.quantity);
            });
            return (totalPrice / 100)
        },
    }
  
}
</script>

<template>
    <button id="Caddy" class="btn" :class="{'nb-articles': caddyLength > 0 }" :data-count="caddyLength" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart3"></i></button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Mon Panier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="row">
            <div class="col">
                <article class="pull-center caddy">
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
                        <tbody>
                            <!-- Boucle sur les articles pour les afficher dans le panier -->
                            <tr v-for="(article, index) in caddy" :key="index">
                                <td>{{ article.name}}</td>
                                <td><input class="col-8" type="number" :value="article.quantity" @input="updateQuantity(index, $event.target.value)" @change="updateQuantity(index, $event.target.value)"> </td>
                                <td>{{ article.price/100 }}</td>
                                <td>{{ (article.price*article.quantity)/100 + "€"}}</td>
                                <td><button @click="removeFromCaddy(index)" class="btn"><i class="bi bi-trash3"></i></button></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </article>
                <article>
                    <div class="table cart-summary">
                            <p>Récapitulatif du panier</p>
                            <div class="table-line"><span>Total:</span><span>{{ calculateTotalPrice() }} €</span></div>
                            <div class="table-line"><span>TVA</span><span>NaNN</span></div>   
                            <div class="table-line"><span>frais de livraison:</span><span>2,99€</span></div>
                        
                    </div>
                    <button class="btn order"><router-link to="/checkout">Commander</router-link></button>
                </article>
            </div>
        </div> 
    </div>
    </div>
    
</template>

<style lang="scss">
#Caddy{
    color:#E20000;
    position: fixed;
    top: 25px;
    right: 25px;
    font-size: xxx-large;
}
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
.cart-summary{
    background: #F3FAFC;
    padding: 10px;
    p{
        font-size: large;
        font-weight: bold;
    }
    .table-line{
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }
}
.btn.order{
    width: 100%;
    border: #E20000 2px solid;
    a{font-weight: bold;}
    &:hover{
        background: #E20000;
        transition: all 0.5s ease-in-out;
    }
    a:hover{
        background: none;
        color: white;
    }
}

@media screen and (max-width: 768px) {
    #Caddy{
        right: auto;
        left: 25px;
        font-size: xx-large;
        z-index: 2;
    }
}
</style>