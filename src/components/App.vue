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
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SearchMenu from './SearchMenu.vue';
import CardsList from './CardsList.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    SearchMenu,
    CardsList,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
