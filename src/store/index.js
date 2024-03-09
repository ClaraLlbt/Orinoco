import { createStore } from "vuex";


export default createStore({
  state: {
    caddy: [], // initialiser le panier
    hey : "hey"
  },
  mutations: {
    
    addToCaddy(state, article) {
        alert(hey)
    //   state.caddy.push(article);
    //   localStorage.setItem('caddy', JSON.stringify(state.caddy));
    },
    removeFromCaddy(state, index) {
      state.caddy.splice(index, 1);
      localStorage.setItem('caddy', JSON.stringify(state.caddy));
    },
  },
});
