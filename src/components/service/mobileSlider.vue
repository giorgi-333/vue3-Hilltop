<template>
  <div class="service_slider" >
  
  <div class="slider"> 
   <swiper 
    :slides-per-view="1"
    :autoplay="{delay: 3000}"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(item, i) in service.images" :key="i">  
       <img :src="item.image.full_size" style="width:100%; height:40vh">    
    </swiper-slide>
  </swiper>
  </div> <!-- slider -->

   <div class="text_cont">
     <div class="service_text_header">
        {{service.title}}
     </div>
     <div class="service_text" v-html="service.description">
     </div>
  </div>
 
  </div> 
</template> 

<script> 

 // import Swiper core and required components
  import SwiperCore, { A11y, Autoplay  } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
 
  // install Swiper components
  SwiperCore.use([ A11y, Autoplay]);
 
export default {
  name: 'serviceSlider',
  props:["service"],
  components:{
    Swiper,
    SwiperSlide,
  }
}
</script>

<style scoped> 
.service_slider{
 width: 100%;
 margin-top: 60px;
 overflow-wrap: break-word;
}
/* slider */
.slider{
  z-index: 9;
  width: 100%;
}
.slider img{
    object-fit: cover;
}
/* text */
.text_cont{
  position: relative;
  z-index: 98;
  width: 88%;
  margin: 0 auto;
  margin-top: -50px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-left: 1px solid #56D9D4;
  padding: 20px;
}
.service_text_header{
  font-family: 'Big_caslon_medium','Rioni_contrast';
  font-size: 20px;
  margin-bottom: 40px;
}
.service_text{
  font-size: 14px;
}




</style>
