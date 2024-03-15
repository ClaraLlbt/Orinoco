import { createStore } from "vuex";

// Fonction pour obtenir la date du jour au format jj/mm/aaaa
function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // Janvier est 0 !
  var yyyy = today.getFullYear();

  return dd + '/' + mm + '/' + yyyy;
}


export default createStore({
  state: {
    caddy: [], // Tableau pour stocker les articles ajoutés au panier
    currentDate: getCurrentDate()
  },
  mutations: {
    addToCaddy(state, article) {
      const existingPrdct = state.caddy.find(item => item.id == article.id);

      if(!existingPrdct){
        state.caddy.push({ ...article, quantity: 1})     
      } else if(existingPrdct){
        existingPrdct.quantity += 1; // Augmenter la quantité si l'article existe déjà dans le panier
      }
      sessionStorage.setItem('caddy', JSON.stringify(state.caddy));
    },
    updateQuantity(state, { articleIndex, newQuantity }) {
      state.caddy[articleIndex].quantity = parseInt(newQuantity);
      sessionStorage.setItem('caddy', JSON.stringify(state.caddy));
    },
    // Mutation pour mettre à jour le panier depuis sessionStorage
    updateCaddyFromSessionStorage(state) {
      const caddyData = sessionStorage.getItem('caddy');
      if (caddyData) {
        state.caddy = JSON.parse(caddyData);
      }
    },
    removeFromCaddy(state, articleIndex) {
      state.caddy.splice(articleIndex, 1);
      sessionStorage.setItem('caddy', JSON.stringify(state.caddy));
    },
  },
  actions: {
    addToCaddy({ commit }, article) {
      commit('addToCaddy', article)
    },
     // Action pour charger le panier depuis sessionStorage lors du chargement de l'application
    loadCaddyFromSessionStorage({ commit }) {
      commit('updateCaddyFromSessionStorage');
    },
    removeFromCaddy({ commit }, articleIndex) {
      commit('removeFromCaddy', articleIndex);
    },
  },
  getters: {
    getCaddy(state) {
      return state.caddy
    },
    getTotalPrice(article) {
      return (article.price * article.quantity) / 100 + "€";
    },
    calculateTotalPrice(state) {
        let totalPrice = 0;
        state.caddy.forEach(article => {
            totalPrice += (article.price * article.quantity);
        });
        return (totalPrice / 100)
    },
    getCurrentDate(state) {
      return state.currentDate;
    }
  }
});
