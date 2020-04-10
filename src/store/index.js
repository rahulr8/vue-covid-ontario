import Vue from "vue";
import Vuex from "vuex";

import covidData from "./modules/covidData";

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    covidData
  }
});
