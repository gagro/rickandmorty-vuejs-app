import Vuex from "vuex";
import Vue from "vue";

// Actions, Mutations
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      characters: {},
      locations: {},
      episodes: {}
   },
   actions,
   mutations,
   getters
});
