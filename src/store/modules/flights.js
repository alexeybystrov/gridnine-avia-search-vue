import _ from 'lodash';
import flights from '../../flights.json';
import { getNormalizedFlights } from '../../utils';

const normalizedFlights = getNormalizedFlights(flights);


const state = () => ({
  flights: normalizedFlights
});

const getters = {
  allFlights(state) {
    return state.flights
  },
  transfers(state) {
    return _.uniq(state.flights.map((flight) => flight.totalTransfers)).sort()
  },
  carriers(state) {
    return _.uniq(state.flights.map((flight) => flight.carrier)).sort();
  }
};

const actions = {
  
};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations,
}