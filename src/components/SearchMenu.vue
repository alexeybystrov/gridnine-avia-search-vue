<template>
  <div class="col-auto border position-fixed">
    <SearchSort/>
    <SearchFilterTransfers />
    <SearchFilterPrice />
    <SearchFilterCarriers />
  </div>
</template>

<script>
import SearchSort from './SearchSort.vue';
import SearchFilterTransfers from './SearchFilterTransfers.vue';
import SearchFilterPrice from './SearchFilterPrice.vue';
import SearchFilterCarriers from './SearchFilterCarriers.vue';

export default {
  name: 'SearchMenu',
  components: {
    SearchSort, SearchFilterTransfers, SearchFilterPrice, SearchFilterCarriers,
  },
};
</script>
