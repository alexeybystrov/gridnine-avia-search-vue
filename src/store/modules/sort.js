const state = () => ({
  sort: '',
});

const getters = {
  sortStatus(state) {
    return state.sort;
  },
};

const actions = {
  // sortBy({ commit }, payload) {
  //   commit('sortBy', payload);
  // }
};

const mutations = {
  sortBy(state, payload) {
    state.sort = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
