import axios from "axios";

const BASE_URL = "";

const state = {
  todos: []
};

const getters = {
  recoveredCases: state => state.recoveredCases,
  activeCases: state => state.activeCases,
  fatalCases: state => state.fatalCases
};

const actions = {
  async fetchCovidData({ commit }) {
    const response = await axios.get(BASE_URL);

    const todos = response.data;
    commit("setTodos", todos);
  }
  // async fetchTodos({ commit }) {
  //   const response = await axios.get(BASE_URL);

  //   const todos = response.data;
  //   commit("setTodos", todos);
  // }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
