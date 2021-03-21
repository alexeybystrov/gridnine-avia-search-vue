import _ from 'lodash';

export default {
  sortedFlights(state, { allFlights, sortStatus }) {
    switch (sortStatus) {
      case 'ascendingPrice':
        return _.sortBy(allFlights, 'price');
      case 'descendingPrice':
        return _.sortBy(allFlights, 'price').reverse();
      case 'ascendingTime':
        return _.sortBy(allFlights, 'totalDuration');
      default:
        return allFlights;
    }
  },
  transfersGetter(state, { sortedFlights, filterStatus }) {
    if (filterStatus.transfers.length === 0) {
      return sortedFlights;
    } return sortedFlights
      .filter(({ totalTransfers }) => _.includes(filterStatus.transfers, totalTransfers));
  },
  priceFromGetter(state, { sortedFlights, filterStatus }) {
    if (filterStatus.price.from === null) {
      return sortedFlights;
    } return sortedFlights.filter(({ price }) => price >= filterStatus.price.from);
  },
  priceUpToGetter(state, { sortedFlights, filterStatus }) {
    if (filterStatus.price.upTo === null || filterStatus.price.upTo === '0') {
      return sortedFlights;
    } return sortedFlights.filter(({ price }) => price <= filterStatus.price.upTo);
  },
  carriersGetter(state, { sortedFlights, filterStatus }) {
    if (filterStatus.carriers.length === 0) {
      return sortedFlights;
    } return sortedFlights.filter(({ carrier }) => _.includes(filterStatus.carriers, carrier));
  },
  availableTransfers(state, { priceFromGetter, priceUpToGetter, carriersGetter }) {
    const filteredFlights = _.intersection(priceFromGetter, priceUpToGetter, carriersGetter);
    return _.uniq(filteredFlights.map((flight) => flight.totalTransfers));
  },
  availableCarriers(state, { transfersGetter, priceFromGetter, priceUpToGetter }) {
    const filteredFlights = _.intersection(transfersGetter, priceFromGetter, priceUpToGetter);
    return _.uniq(filteredFlights.map((flight) => flight.carrier));
  },
  totalGetter(state, {
    transfersGetter, priceFromGetter, priceUpToGetter, carriersGetter,
  }) {
    return _.intersection(transfersGetter, priceFromGetter, priceUpToGetter, carriersGetter);
  },
};
