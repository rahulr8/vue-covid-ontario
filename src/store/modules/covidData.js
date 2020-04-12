import firebase from "../../firebase";

const state = {
  genderData: {},
  ageGroupData: {},
  outcomeTypeData: {},
  acquisitionTypeData: {},
  reportingCityData: {}
};

const getters = {
  genderData: state => state.genderData,
  ageGroupData: state => state.ageGroupData,
  outcomeTypeData: state => state.outcomeTypeData,
  acquisitionTypeData: state => state.acquisitionTypeData,
  reportingCityData: state => state.reportingCityData
};

const actions = {
  async fetchCovidData({ commit }) {
    const db = firebase.firestore();
    const covidData = {};
    const querySnapshot = await db.collection("ontarioData").get();

    querySnapshot.forEach(doc => (covidData[doc.id] = doc.data()));

    commit("setGenderData", covidData["data_for_gender"]);
    commit("setAgeGroupData", covidData["data_for_age_group"]);
    commit("setOutcomeTypeData", covidData["data_for_outcome_type"]);
    commit("setAcquisitionTypeData", covidData["data_for_acquisition_type"]);
    commit("setReportingCityData", covidData["data_for_reporting_city"]);
  }
};

const mutations = {
  setGenderData: (state, genderData) => {
    state.genderData = genderData;
  },
  setAgeGroupData: (state, ageGroupData) => {
    state.ageGroupData = ageGroupData;
  },
  setOutcomeTypeData: (state, outcomeTypeData) => {
    state.outcomeTypeData = outcomeTypeData;
  },
  setAcquisitionTypeData: (state, acquisitionTypeData) => {
    state.acquisitionTypeData = acquisitionTypeData;
  },
  setReportingCityData: (state, reportingCityData) => {
    state.reportingCityData = reportingCityData;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
