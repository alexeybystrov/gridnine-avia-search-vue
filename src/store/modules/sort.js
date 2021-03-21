const state = () => ({
  sort: '',
});

const getters = {
  sortStatus(state) {
    return state.sort;
  },
};

const mutations = {
  sortBy(state, payload) {
    state.sort = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
