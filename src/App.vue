<template>
  <div id="app">
    <myheader></myheader>
    <div style="height:90px;width:100%;"></div>
    <div style="height: calc(100vh - 90px);">
      <router-view class="routerView" />
    </div>
    <!-- <div class="mask"></div> -->
    <!-- <myfooter></myfooter> -->
  </div>
</template>

<script>
import jq from 'jquery'
import myheader from './components/header/index'
import myfooter from './components/footer/index'
export default {
  name: 'App',
  components: {
    myheader,
    myfooter
  },
  mounted() {
    // var top=jq(document).scrollTop();
    //   jq(document).on('scroll.unable',function (e){
    //   jq(document).scrollTop(top);
    // })
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
  padding: 0;
  height: 100vh;
}
*{
  font-family: cursive;
}
/* .mask{
  position: absolute; top: 0; left: 0; z-index: 999999; background-color: rgba(50, 50, 50, 0.5); width: 100%; height: 100%;
} */
</style>
