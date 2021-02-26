<template>
    <div class="rooms_gallary"  @click.stop>
    <swiper 
        :slides-per-view="1"   
        navigation
        :pagination="{ clickable: true }"
    >
     <!-- :autoplay="{delay: 5000}" -->
           
    <swiper-slide v-for="(image, i) in images" :key="i">  
       <img :src="image" class="slider_img">    
    </swiper-slide>
  </swiper>
    </div>
</template>

<script>
 // import Swiper core and required components
  import SwiperCore, { Navigation, A11y  } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
 
  // install Swiper components
  SwiperCore.use([Navigation, A11y]);

export default {
    props: ["images"],
    components:{
     Swiper,
     SwiperSlide,
    }
}

</script>

<style scoped>
 .rooms_gallary{
    width: 65vw;
 }
 .slider_img{
     width: 100%; 
     height: 75vh;
     object-fit: cover;
     object-position: center center;
 }
 
  @media(max-width:768px){
    .rooms_gallary{
      width: 90vw;
    }
   .slider_img{
     height: 40vh;
   }
 }

 @media(max-width:576px){
    .rooms_gallary{
      width: 90vw;
    }
   .slider_img{
     height: 30vh;
   }
 }
</style>