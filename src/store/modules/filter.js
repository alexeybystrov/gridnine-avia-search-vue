// import _ from 'lodash';

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

const actions = {

};

const mutations = {
  filterTransfers(state, payload) {
    // if (_.includes(state.filter.transfers, payload)) {
    //   _.pull(state.filter.transfers, payload);
    // } else state.filter.transfers.push(payload);
    // console.log(payload);
    state.filter.transfers = payload;
  },
  filterPriceFrom(state, payload) {
    // _.set(state.filter.price, 'from', payload === 0 ? null : payload);
    state.filter.price.from = payload === 0 ? null : payload;
  },
  filterPriceUpTo(state, payload) {
    // _.set(state.filter.price, 'upTo', payload === 0 ? null : payload);
    state.filter.price.upTo = payload === 0 ? null : payload;
  },
  filterCarriers(state, payload) {
    // if (_.includes(state.filter.carriers, payload)) {
    //   _.pull(state.filter.carriers, payload);
    // } else state.filter.carriers.push(payload);
    state.filter.carriers = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
