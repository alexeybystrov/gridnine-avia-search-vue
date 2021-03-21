<template>
  <div class="card mb-3">
    <div class="d-flex justify-content-between card-header bg-primary text-light">
      <div>
        {{flight.carrier}}
      </div>
      <div>
        {{flight.price}} &#8381;
      </div>
    </div>

    <div class="card-body border border-light">
      <div class="d-flex">
        <div>
          {{flight.leftLeg.departureCity.caption}},&#160;
          {{flight.leftLeg.departureAirport.caption}}
          ({{flight.leftLeg.departureAirport.uid}})
          &rarr;
          {{flight.leftLeg.arrivalCity.caption}},&#160;
          {{flight.leftLeg.arrivalAirport.caption}}
          ({{flight.leftLeg.arrivalAirport.uid}})
        </div>
      </div>
    </div>
    <div class="card-body border border-light">
      <div class="d-flex justify-content-between">
        <div>
          {{getFormatedDate(flight.leftLeg.departureDate)}}
        </div>
        <div>
          &#9716;
          {{getFormatedTime(flight.leftLeg.duration)}}
        </div>
        <div>
          {{getFormatedDate(flight.leftLeg.arrivalDate)}}
        </div>
      </div>
    </div>
    <div class="card-body border border-light">
      <div class="d-flex justify-content-between">
        <div>
          Рейс выполняет: {{flight.leftLeg.airline.caption}}
        </div>
        <div>
          {{flight.leftLeg.transfers !== 0 ? `Пересадки: ${flight.leftLeg.transfers}` : ''}}
        </div>
      </div>
    </div>

    <div class="card-body border-top">
      <div class="d-flex">
        <div>
          {{flight.rightLeg.departureCity.caption}},&#160;
          {{flight.rightLeg.departureAirport.caption}}
          ({{flight.rightLeg.departureAirport.uid}})
          &rarr;
          {{flight.rightLeg.arrivalCity.caption}},&#160;
          {{flight.rightLeg.arrivalAirport.caption}}
          ({{flight.rightLeg.arrivalAirport.uid}})
        </div>
      </div>
    </div>
    <div class="card-body border border-light">
      <div class="d-flex justify-content-between">
        <div>
          {{getFormatedDate(flight.rightLeg.departureDate)}}
        </div>
        <div>
          &#9716;
          {{getFormatedTime(flight.rightLeg.duration)}}
        </div>
        <div>
          {{getFormatedDate(flight.rightLeg.arrivalDate)}}
        </div>
      </div>
    </div>
    <div class="card-body border border-light">
      <div class="d-flex justify-content-between">
        <div>
          Рейс выполняет: {{flight.rightLeg.airline.caption}}
        </div>
        <div>
          {{flight.rightLeg.transfers !== 0 ? `Пересадки: ${flight.rightLeg.transfers}` : ''}}
        </div>
      </div>
    </div>

    <div class="card-footer bg-warning text-light btn">
      ВЫБРАТЬ
    </div>
  </div>
</template>

<script>
import { getFormatedDate, getFormatedTime } from '../utils';

export default {
  name: 'Card',
  props: ['flight'],
  methods: {
    getFormatedDate,
    getFormatedTime,
    // showTransfers(transfers) {
    //   if (transfers !== 0) {
    //     return 'Пересадки: ' + transfers;
    //   }
    // }
  },
};

</script>
