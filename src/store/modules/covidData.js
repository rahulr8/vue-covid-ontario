import firebase from "../../firebase";

const state = {
  totalCases: null,
  activeCases: null,
  recoveredCases: null,
  fatalCases: null
};

const getters = {
  totalCases: state => state.totalCases,
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

    commit("setCovidInfo", covidStats);
  }
};

const mutations = {
  setCovidInfo: (state, covidStats) => {
    const {
      total_cases,
      active_cases,
      recovered_cases,
      fatal_cases
    } = covidStats;

    state.totalCases = total_cases;
    state.activeCases = active_cases;
    state.recoveredCases = recovered_cases;
    state.fatalCases = fatal_cases;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
