<template>
  <section class="mb-3" @change="handleChange">
    <div id="checkbox-group" class="font-weight-bold">Авиакомпании</div>
    <div v-for="carrier in carriers" :key="carrier">
      <div class="form-check">
        <label class="form-check-label">
          <input
            type="checkbox"
            :value="carrier"
            class="form-check-input"
            v-model="checknames"
            :disabled="isDisabled(carrier)"
          />
          {{carrier}}
        </label>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import _ from 'lodash';

export default {
  name: 'SearchFilterCarriers',
  data() {
    return {
      checknames: [],
    };
  },
  computed: mapGetters(['carriers', 'availableCarriers']),
  methods: {
    ...mapMutations(['filterCarriers']),
    handleChange() {
      this.filterCarriers(this.checknames);
    },
    isDisabled(carrier) {
      return !_.includes(this.availableCarriers, carrier);
    },
  },
};
</script>
