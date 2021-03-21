const state = () => ({
  filter: {
    transfers: [],
    price: {
      from: null,
      upTo: null,
    },
    carriers: [],
  },
});

const getters = {
  filterStatus(state) {
    return state.filter;
  },
};

const mutations = {
  filterTransfers(state, payload) {
    state.filter.transfers = payload;
  },
  filterPriceFrom(state, payload) {
    state.filter.price.from = payload === 0 ? null : payload;
  },
  filterPriceUpTo(state, payload) {
    state.filter.price.upTo = payload === 0 ? null : payload;
  },
  filterCarriers(state, payload) {
    state.filter.carriers = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
