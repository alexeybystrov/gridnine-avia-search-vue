import _ from 'lodash';

export const getNormalizedFlights = (rawFlights) => rawFlights.result.flights
  .filter(({ flight: { legs: { 1: { segments } } } }) => _.hasIn(segments[0], 'departureCity')) // remove 3 'flights from nowhere' in JSON
  .filter(({ flight: { legs: { 0: { segments } } } }) => _.hasIn(segments[segments.length - 1], 'arrivalCity')) // remove 5 'flights to nowhere' in JSON
  .map(({ flight }) => {
    const carrier = flight.carrier.caption;
    const price = Number(flight.price.total.amount);
    const [leftLeg, rightLeg] = flight.legs.map((leg) => {
      const {
        departureCity, departureAirport, departureDate, airline,
      } = leg.segments[0];
      const {
        arrivalCity, arrivalAirport, arrivalDate,
      } = leg.segments[leg.segments.length - 1];

      return {
        duration: leg.duration,
        transfers: leg.segments.length - 1,
        airline,
        departureCity,
        departureAirport,
        departureDate,
        arrivalCity,
        arrivalAirport,
        arrivalDate,
      };
    });

    return {
      carrier,
      price,
      leftLeg,
      rightLeg,
      totalDuration: leftLeg.duration + rightLeg.duration,
      totalTransfers: _.max([leftLeg.transfers, rightLeg.transfers]),
      id: _.uniqueId()
    };
});

export const getFormatedDate = (date) => {
  const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  };

  return new Date(date).toLocaleString('ru-RU', options);
};

export const getFormatedTime = (rawMinutes) => {
  const hours = Math.floor(rawMinutes / 60);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;
  const minutes = rawMinutes % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours} ч ${formattedMinutes} мин`;
};