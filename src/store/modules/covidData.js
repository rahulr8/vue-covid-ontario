import firebase from "../../firebase";

const state = {
  genderData: {},
  ageGroupData: {},
  outcomeTypeData: {},
  acquisitionTypeData: {},
  reportingCityData: {}
};

const getters = {
  //Gender
  genderData: state => state.genderData,

  //Age group
  ageGroupData: state => state.ageGroupData,

  //Outcome
  activeCases: state => state.outcomeTypeData["active_cases"],
  recoveredCases: state => state.outcomeTypeData["recovered_cases"],
  fatalCases: state => state.outcomeTypeData["fatal_cases"],
  totalCases: state =>
    state.outcomeTypeData["active_cases"] +
    state.outcomeTypeData["recovered_cases"] +
    state.outcomeTypeData["fatal_cases"],

  //Acquisition
  acquisitionTypeData: state => state.acquisitionTypeData,

  //Reporting city
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
