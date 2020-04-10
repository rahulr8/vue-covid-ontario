import firebase from "../../firebase";

const state = {
  covidStats: null
  // totalCases: null,
  // activeCases: null,
  // recoveredCases: null,
  // fatalCases: null
};

const getters = {
  recoveredCases: state => state.recoveredCases,
  activeCases: state => state.activeCases,
  fatalCases: state => state.fatalCases
};

const actions = {
  async fetchCovidData({ commit }) {
    const db = firebase.firestore();
    const ontarioDataRef = db.collection("ontarioData").doc("metadata");
    const response = await ontarioDataRef.get();
    const covidStats = response.data();

    console.log(covidStats);
    commit("setCovidInfo", covidStats);
  }
  // async fetchTodos({ commit }) {
  //   const response = await axios.get(BASE_URL);

  //   const todos = response.data;
  //   commit("setTodos", todos);
  // }
};

const mutations = {
  setCovidInfo: (state, covidStats) => (state.covidStats = covidStats)
};

export default {
  state,
  getters,
  actions,
  mutations
};
