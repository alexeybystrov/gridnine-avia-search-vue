<template>
    <div id="cardsList" class="col h-100">
      <div v-for="flight in totalGetter" :key="flight.id">
        <Card :flight="flight" />
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'CardsList',
  components: { Card },
  computed: mapGetters(['totalGetter']),
  // methods: {
  //   getUniqueID() {
  //     this.id = _.getUniqueID()
  //   }
  // }
};
</script>

<style>
  #cardsList {
    margin-left: 320px;
  }
</style>
