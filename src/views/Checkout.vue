<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Checkout',
    data(){
        return{
            Pmentconfirmation : false,
            orderId : "",
        }
    },
   created(){
    // Charger le panier depuis sessionStorage lors du chargement de l'application
    this.$store.dispatch('loadCaddyFromSessionStorage');
    },
    mounted(){
        const checkbox = document.querySelectorAll('input[type="radio"]')
        // Pour les méthodes de livraison
        document.querySelectorAll('.delivery-method .card input[type="radio"]').forEach(input => {
            input.addEventListener('change', () => {
                // Supprimer la classe 'selected' de toutes les cartes
                document.querySelectorAll('.delivery-method .card').forEach(card => {
                    card.classList.remove('select');
                });
                // Ajouter la classe 'selected' à la carte ciblée
                const targetId = input.getAttribute('data-target');
                document.getElementById(targetId).classList.add('select');
            });
        });
        
        // Pour les méthodes de paiement
        document.querySelectorAll('.payement-method .card input[type="radio"]').forEach(input => {
            input.addEventListener('change', () => {
                // Supprimer la classe 'selected' de toutes les cartes
                document.querySelectorAll('.payement-method .card').forEach(card => {
                    card.classList.remove('select');
                });
                // Ajouter la classe 'selected' à la carte ciblée
                const targetId = input.getAttribute('data-target');
                document.getElementById(targetId).classList.add('select');
            });
        });
                
                    
            
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
        getTotalPrice() {
            return article => {
                return this.$store.getters.getTotalPrice(article);
            };
        },
        calculateTotalPrice() {
            return this.$store.getters.calculateTotalPrice;
        },
        // Function which submit caddy with informations client
        submitCaddy() {
            this.Pmentconfirmation = !this.Pmentconfirmation
            
            // Utilisation de la fonction pour générer un identifiant de commande
            this.orderID = this.generateOrderID();
        },
        generateOrderID() {
            // Récupérer la date actuelle
            var date = new Date();
            // Construire l'identifiant de commande en concaténant la date avec un nombre aléatoire
            var orderID = 'CMD-' + date.getFullYear() + this.pad(date.getMonth() + 1) + this.pad(date.getDate()) + '-' + this.pad(date.getHours()) + this.pad(date.getMinutes()) + this.pad(date.getSeconds()) + '-' + Math.floor(Math.random() * 10000);
            return orderID;
        },

        // Fonction pour ajouter un zéro devant les chiffres si nécessaire (pour obtenir toujours 2 chiffres)
        pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        },
        currentDate() {
            return this.$store.getters.getCurrentDate;
        }
    }
}
</script>

<template>
    <div class="container checkout-ctr">
        <div class="row header">
            <img class="logo col-2" src="/src/assets/images/logopng.png" width="200">
            <div class="col-4"><i class="bi bi-file-lock2"></i> Paiement sécurisé</div>    
        </div>
        <hr>
        <div v-show="!Pmentconfirmation" class="row order-validate">
            <div class="col-7">
                <div class="row form-order">
                    <h2><span class="number"><i class="bi bi-1-circle"></i></span> Vos informations</h2>
                    <form action="submit" class="form" method="post" id="client-form">
                        <div class="row">
                            <div class="col-6">
                                <label for="exampleInputName" class="form-label">Nom</label>
                                <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" required autocomplete="">
                            </div>
                            <div class="col-6">
                                <label for="exampleInputLastname" class="form-label">Prénom</label>
                                <input type="lastname" class="form-control" id="exampleInputLastname" aria-describedby="lastnameHelp" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="exampleInputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="exampleInputAddress" aria-describedby="addressHelp" required autocomplete="address">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label for="exampleInputEexampleInputCitymail1" class="form-label">Ville</label>
                                <input type="text" class="form-control" id="exampleInputCity" aria-describedby="cityHelp" required>
                            </div>
                            <div class="col-6">
                                <label for="exampleInputCP" class="form-label">Code postal</label>
                                <input type="text" class="form-control" id="exampleInputCP" aria-describedby="cpHelp" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required autocomplete="email">
                            </div>
                        </div>
                    </form>
                </div>

                <div class="row delivery-method">
                    <h2><span class="number"><i class="bi bi-2-circle"></i></span> Mode de livraison</h2>
                    <div class="col-12 card" id="delivery-card">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-target="delivery-card">
                        <div class="card-body">
                            <p class="method"><i class="bi bi-house-door"></i> A domicile</p>
                            <p class="">Livraison à partir du 18/03</p>
                        </div>
                    </div>
                    <div class="col-12 card" id="delivery-card2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" data-target="delivery-card2">
                        <div class="card-body">
                            <p class="col-12 method"><i class="bi bi-shop"></i> Point de retrait standard</p>
                            <p class="col-12">Livraison à partir du 18/03</p>
                            <hr>
                            <button class="btn">Choisir un point de retrait</button>
                        </div>
                    </div>
                    <div class="col-12 card" id="delivery-card3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" data-target="delivery-card3"> 
                       <div class="card-body">
                            <p class="col-12 method"><i class="bi bi-lightning"></i> Livraison Express</p>                        
                            <p class="col-12">Livraison à partir du 18/03</p>
                       </div>
                    </div>
                </div>

                <div class="row payement-method">
                    <h2><span class="number"><i class="bi bi-3-circle"></i></span> Mode de paiement <img src="/src/assets/images/cb-methods.png" width="200" alt=""></h2>
                    <div class="row methods">
                        <div class="col-4">
                                <div class="card" id="pment-card">
                                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio1" data-target="pment-card">
                                    <p><i class="bi bi-credit-card-fill"></i></p>
                                    <p>Carte de crédit</p>
                                </div>
                            
                        </div>
                        <div class="col-4">
                            <div class="card" id="pment-card2">
                                <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio2" data-target="pment-card2">
                                <p><i class="bi bi-paypal"></i> </p>
                                <p>Paypal</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card" id="pment-card3">
                                <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio3" data-target="pment-card3">

                               <img src="/src/assets/images/4x.png" width="100" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-4 order">
                <div class="order-fixed">
                    <h3>Récapitulatif de la commande</h3>
                    <div class="checkout-summary">
                        <table id="tableau" class="table-responsive-lg table-hover">
                            <thead>
                                <tr>
                                    <th>Articles</th>
                                    <th></th>
                                    <th>Qté</th>
                                    <th>Prix unitaire</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Boucle sur les articles pour les afficher dans le panier -->
                                <tr v-for="(article, index) in caddy" :key="index">
                                    <td><img :src="article.imageUrl" width="100" alt=""></td>
                                    <td>{{ article.name }}</td>
                                    <td><input class="col-8" type="number" :value="article.quantity" @input="updateQuantity(index, $event.target.value)" @change="updateQuantity(index, $event.target.value)"> </td>
                                    <td>{{ article.price/100 + "€" }}</td>
                                </tr>
                            </tbody>
                            
                        </table> 
                        <div class="table-line"><span>Total</span><span>{{calculateTotalPrice()}}€</span></div>   
                        <div class="table-line"><span>TVA</span><span>2,99€</span></div>    
                        <hr>
                        <div class="table-line"><span>Total de la commande:</span><span>{{ calculateTotalPrice()+2.99 }} €</span></div>    
                        <div class="checkbox">
                            <input type="checkbox" name="acceptance-41" value="1" aria-invalid="false" required>
                            <p>En soumettant ce formulaire, j'accepte et je déclare avoir pris connaissance des 
                                <RouterLink to="/cgv">conditions générales de vente</RouterLink> Orinoco 
                                et être informé de mon droit de rétraction 
                            </p>
                        </div>
                        <hr>
                        <div class="table-line"><button @click="submitCaddy()" type="submit" value="Payer" class="btn">Payer</button></div>

                    </div>
                </div>
            </div>
        </div>


        <div v-show="Pmentconfirmation" class="container Pment-confirmationc-ctr">
            <div class="card">

                <h1>Merci ! Votre commande <span>{{this.orderID}}</span> a été enregistré avec succès le {{ currentDate() }}</h1>
                <p>Votre commande sera préparée avec soin dans les plus bref délais <i class="bi bi-box-seam"></i></p>
                <p>Nous vous remercions de votre confiance et de l'intêret que vous portez à la photographie <i class="bi bi-camera"></i></p>
                <p>A bientôt ! </p>
                <button class="btn back-home-btn"><a href="/">Retourner à l'accueil</a></button>
            </div>

        </div>

        <hr v-show="!Pmentconfirmation">
        <div v-show="!Pmentconfirmation" class="footer row">
            <div class="col-6">Données personnelles protégées</div>
        </div>
    </div>
  
</template>

<style lang="scss">
.checkout-ctr{
    height: 100vh;
    .header{
        justify-content: space-between;
        align-items: center;
        div{ 
            text-align: end;
            font-size: large;
            color: lightgray;
        }
    }
    .order-validate{
        .form-order, .delivery-method, .payement-method{
            width: 90%;
            h2 {
                font-size: x-large;
                margin: 35px 0;
                font-weight: bold;
                display: flex;
                align-items: center;
                position: relative;
                span{
                    font-size: xx-large;
                    font-weight: bold;
                    color: #E20000;
                    margin-right: 15px;
                }
                img{ 
                    position: absolute;
                    right: 0;
                }
            }
            .form-check-input{
                font-size: x-large;
                margin: 15px;
            }
        }
        .delivery-method, .payement-method{
            .card.select{
                background: #f8c5c5;
            }
        }
        .delivery-method{
            .card{
                margin: 10px 0;
                flex-direction: row;
                align-items: center;
                .card-body{
                    .method{
                        font-size: large;
                        font-weight: bold;
                        i{ 
                            color: #E20000;
                            font-size: 25px;
                        }
                    }
                    p{
                        margin: 0;
                    }
                }
            }
        };
        .payement-method {
            h2{ 
                img{ float: right;}
            }
            .methods{
                justify-content: space-between;
                margin: 0;
                padding: 0;
                .card{
                    align-items: center;
                    i{font-size: x-large; color: #E20000;}
                    
                        
                        p{ 
                            margin: 0;
                            font-size: large;
                            font-weight: bold;
                        }
                    
                }
                .card:nth-child(3){
                    .card-body{
                        font-size: large;
                    }
                }
            }
        }
    }
    .order{
        position: relative;
        .order-fixed{
            .checkout-summary{
                background: #F3FAFC;
                padding: 10px;
               
                .table-line{
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                    span{ font-size: large;}
                    .btn{
                        width: 100%;
                        border: #E20000 2px solid;
                        font-weight: bold;
                        &:hover{
                            background: #E20000;
                            transition: all 0.5s ease-in-out;
                            color: white;

                        }
                    }
                }
                .checkbox{
                    flex-direction: row;
                    display: flex;
                    align-items: baseline;
                    input{ margin: 0 10px}
                }
            }
        }
        .fixed{
            position: fixed;
            top: 20px;
            width: 440px;
        }
    }
    .Pment-confirmationc-ctr{
        .card{
            margin: 50px auto;
            padding: 100px;
            text-align: center;
            background: #F76F00;
            color: white;
            p{
                font-size: large;
                
            }
            .back-home-btn{
                a{color: white}
                a:hover{
                    background: none;
                }
            }
        }
    }
}
</style>