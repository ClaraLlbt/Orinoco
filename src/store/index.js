import { createStore } from "vuex";


export default createStore({
  state: {
    caddy: [] // Tableau pour stocker les articles ajoutés au panier
  },
  mutations: {
    addToCaddy(state, article) {
      alert('Article ajouté au panier')
      const existingArticle = state.caddy.find(item => item.id === article.id);
      console.log(existingArticle)
      if (existingArticle) {
        existingArticle.quantity += 1; // Augmenter la quantité si l'article existe déjà dans le panier
      } else {
        state.caddy.push({ ...article, quantity: 1 }); // Ajouter l'article avec une quantité de 1 s'il n'existe pas encore
      }
      sessionStorage.setItem('caddy', JSON.stringify(state.caddy));
    },
    // Mutation pour mettre à jour le panier depuis sessionStorage
    updateCaddyFromSessionStorage(state) {
      const caddyData = sessionStorage.getItem('caddy');
      if (caddyData) {
        state.caddy = JSON.parse(caddyData);
        console.log({caddyData})
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
    }
  }
});
