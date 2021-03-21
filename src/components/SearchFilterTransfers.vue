<template>
  <section class="mb-3" @change="handleChange">
    <div id="checkbox-group" class="font-weight-bold">Пересадки</div>
    <div v-for="transfer in transfers" :key="transfer">
      <div class="form-check">
        <label class="form-check-label">
          <input
            type="checkbox"
            :value="transfer"
            class="form-check-input"
            v-model="checknames"
            :disabled="isDisabled(transfer)"
          />
          {{transfer}}
        </label>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import _ from 'lodash';

export default {
  name: 'SearchFilterTransfers',
  data() {
    return {
      checknames: [],
    };
  },
  computed: mapGetters(['transfers', 'availableTransfers']),
  methods: {
    ...mapMutations(['filterTransfers']),
    handleChange() {
      this.filterTransfers(this.checknames);
    },
    isDisabled(transfer) {
      return !_.includes(this.availableTransfers, transfer);
    },
  },
};
</script>
