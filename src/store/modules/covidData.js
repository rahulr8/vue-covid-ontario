import firebase from "../../firebase";

const state = {
  genderData: {},
  ageGroupData: {},
  outcomeTypeData: {},
  acquisitionTypeData: {},
  reportingCityData: {},
};

// Getters are like selectors - They let you access a part of the state
// Getters accept two arguments. (state, getters). You can use the return value of other getters too
// You can also curry a getter to make it accep a parameter to perform calculations
const getters = {
  //Gender
  femaleCases: (state) => state.genderData["total_female"],
  maleCases: (state) => state.genderData["total_male"],

  //Age group
  casesLessThan20: (state) => state.ageGroupData["<20"],
  casesIn20s: (state) => state.ageGroupData["20s"],
  casesIn30s: (state) => state.ageGroupData["30s"],
  casesIn40s: (state) => state.ageGroupData["40s"],
  casesIn50s: (state) => state.ageGroupData["50s"],
  casesIn60s: (state) => state.ageGroupData["60s"],
  casesIn70s: (state) => state.ageGroupData["70s"],
  casesIn80s: (state) => state.ageGroupData["80s"],
  casesIn90s: (state) => state.ageGroupData["90s"],
  casesUnknown: (state) => state.ageGroupData["Unknown"],

  //Outcome
  activeCases: (state) => state.outcomeTypeData["active_cases"],
  recoveredCases: (state) => state.outcomeTypeData["recovered_cases"],
  fatalCases: (state) => state.outcomeTypeData["fatal_cases"],
  totalCases: (state) =>
    state.outcomeTypeData["active_cases"] +
    state.outcomeTypeData["recovered_cases"] +
    state.outcomeTypeData["fatal_cases"],

  //Acquisition
  communitySpreadCases: (state) =>
    state.acquisitionTypeData["community_spread"],
  travelRelatedCases: (state) => state.acquisitionTypeData["travel_related"],
  neitherAcquisitionCases: (state) => state.acquisitionTypeData["neither"],
  unknownAcquisitionCases: (state) => state.acquisitionTypeData["unknown"],

  //Reporting city
  reportingCityData: (state) => state.reportingCityData,
};

// Actions are Async!
const actions = {
  async fetchCovidData({ commit }) {
    const db = firebase.firestore();
    const covidData = {};
    const querySnapshot = await db.collection("ontarioData").get();

    querySnapshot.forEach((doc) => (covidData[doc.id] = doc.data()));

    commit("setGenderData", covidData["data_for_gender"]);
    commit("setAgeGroupData", covidData["data_for_age_group"]);
    commit("setOutcomeTypeData", covidData["data_for_outcome_type"]);
    commit("setAcquisitionTypeData", covidData["data_for_acquisition_type"]);
    commit("setReportingCityData", covidData["data_for_reporting_city"]);
  },
};

// Mutations are Synchronous!
// Always put mutations within actions to future proof your app and help you scale
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
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
