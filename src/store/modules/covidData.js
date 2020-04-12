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
  casesLessThan20: state => state.ageGroupData["<20"],
  casesIn20s: state => state.ageGroupData["20s"],
  casesIn30s: state => state.ageGroupData["30s"],
  casesIn40s: state => state.ageGroupData["40s"],
  casesIn50s: state => state.ageGroupData["50s"],
  casesIn60s: state => state.ageGroupData["60s"],
  casesIn70s: state => state.ageGroupData["70s"],
  casesIn80s: state => state.ageGroupData["80s"],
  casesIn90s: state => state.ageGroupData["90s"],
  casesUnknown: state => state.ageGroupData["Unknown"],

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
