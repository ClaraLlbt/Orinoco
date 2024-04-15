<script>
import { mapGetters } from 'vuex';
export default {
    name: "Caddy",
    created() {
        // Charger le panier depuis sessionStorage lors du chargement de l'application
        this.$store.dispatch('loadCaddyFromSessionStorage');
    },
    mounted(){
        const bannerCtr = document.querySelector('.banner-ctr')
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
                    <button class="btn order"><router-link to="/checkout" class="stretched-link">Commander</router-link></button>
                </article>
            </div>
        </div> 
    </div>
    </div>
    
</template>

<style lang="scss">
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
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid #1553AA;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    width: 100%;
    position: relative;
    a{
        font-weight: bold; 
        color: rgb(61, 106, 255);
        width: 100%;
    }
    &:hover{
        background: #1553AA;
        box-shadow: 0 0 7px #1553AA;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        color: white;
        a{color: white;}
        
    }
    
}

</style>