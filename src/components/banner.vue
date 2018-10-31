<template>
  <div class="banner">
    <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in bannerUrl" :key="index"><a :href="slide.href"><img :src="slide.imgUrl" alt=""></a></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
      　　observeParents:true,//修改swiper的父元素时，自动初始化swiper 
      　　loop:true,
      　　autoplay: {
      　　　　delay: 2000,
      　　disableOnInteraction: false
      　　}
        },
        swiperSlides: [1, 2, 3, 4, 5],
        bannerUrl : [
          {
            imgUrl:require('../assets/pic1.jpg'),
            href:'www.baidu.com'
          },
          {
            imgUrl:require('../assets/pic2.jpg'),
            href:'www.baidu.com'
          },
          {
            imgUrl:require('../assets/pic3.jpg'),
            href:'www.baidu.com'
          },
          {
            imgUrl:require('../assets/pic4.jpg'),
            href:'www.baidu.com'
          }
        ]
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .banner{
    width: 850px;height: 500px;
    
    img{
      width: 100%;
      display: block;
    }
  }
</style>
