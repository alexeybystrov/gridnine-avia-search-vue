<template>
  <div class="col-auto border position-fixed">
    <SearchSort/>
    <SearchFilterTransfers />
    <SearchFilterPrice />
    <SearchFilterCarriers />
  </div>
</template>

<script>
import SearchSort from './SearchSort'
import SearchFilterTransfers from './SearchFilterTransfers'
import SearchFilterPrice from './SearchFilterPrice'
import SearchFilterCarriers from './SearchFilterCarriers'
export default {
  name: 'SearchMenu',
  components: { SearchSort, SearchFilterTransfers, SearchFilterPrice, SearchFilterCarriers },
}
</script>