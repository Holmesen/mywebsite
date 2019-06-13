<template>
  <div id="home-div">
    <!-- <div id="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/images/images/bg1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/images/bg2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/images/bg3.jpg" alt="">
        </div>
      </div>
    </div> -->
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div> -->
    <div class='homeBG' style=""></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
  export default {
    name: 'home',
    data(){
      return {
      }
    },
    mounted(){
    //   new Swiper('#swiper-container',{
    //     autoplay: {
    //       delay:1000
    //     },
    //     effect : 'fade',
    //     speed:500,
    //     loop : true,
    //   })
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })
    }
  }
</script>

<style scoped>
#home-div{
  width: 100%;
  height: 100vh;
}
#swiper-container,.swiper-wrapper,.swiper-slide{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
}
.swiper-slide>img{
  width: 100%;
  height: 100%;
}

.homeBG{
  height:100vh;width:100%;
  background: url('../../assets/images/images/bg1.jpg') no-repeat fixed center;
}
</style>