<template>
  <div id="app">
    <div class="d-flex flex-column h-100">
      <div class="container-md h-100 p-3">
        <div class="row h-100 pb-3">
          <SearchMenu/>
          <CardsList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchMenu from './SearchMenu.vue';
import CardsList from './CardsList.vue';

export default {
  name: 'App',
  components: {
    SearchMenu,
    CardsList,
  },
};
</script>
