<template>
  <div id="app">
    <myheader></myheader>
    <router-view class="routerView" />
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/header/index'
import myfooter from './components/footer/index'
export default {
  name: 'App',
  components: {
    myheader,
    myfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 80px 0;
}
</style>
