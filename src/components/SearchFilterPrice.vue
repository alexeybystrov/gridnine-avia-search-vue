<template>
  <section class="mb-3" @change="handleChange">
    <div class="font-weight-bold">Цена</div>
      <div class="form-group row mb-1">
        <label htmlFor="priceFrom" class="col-1 col-form-label">От</label>
        <input
          name="priceFrom"
          id="priceFrom"
          class="form-control form-control-sm col-6 ml-3"
          type="number"
          min="0"
        />
      </div>
      <div class="form-group row mb-1">
        <label htmlFor="priceUpTo" class="col-1 col-form-label">До</label>
        <input
          name="priceUpTo"
          id="priceUpTo"
          class="form-control form-control-sm col-6 ml-3"
          type="number"
          min="0"
        />
      </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SearchFilterPrice',
  methods: {
    ...mapMutations(['filterPriceFrom', 'filterPriceUpTo']),
    handleChange(e) {
      switch (e.target.name) {
        case 'priceFrom':
          this.filterPriceFrom(Number(e.target.value));
          break;
        case 'priceUpTo':
          this.filterPriceUpTo(Number(e.target.value));
          break;
        default:
          throw new Error('Unknown field name');
      }
    },
  },
};
</script>
