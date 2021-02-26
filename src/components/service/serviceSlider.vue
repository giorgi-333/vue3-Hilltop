<template>
  <div class="service_slider" >
     
  <div class="text_cont">
     <div class="service_text_header">
        {{service.title}}
     </div>
     <div class="service_text" v-html="service.description">
     </div>
  </div>
 
  <div class="slider"> 
   <swiper 
    :slides-per-view="1"
    :autoplay="{delay: 3000}"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(item, i) in service.images" :key="i">  
       <img :src="item.image.full_size" style="width:100%; height:90vh">  
    </swiper-slide>
  </swiper>
  </div> <!-- slider -->

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
 position: relative;
 overflow-wrap: break-word;
 /* overflow-wrap: anywhere; */
}
.text_cont{
  position: absolute;
  z-index: 9;
  width: 30%;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  padding: 50px 50px 80px;
}
.service_text_header{
  font-family: 'Big_caslon_medium','Rioni_contrast';
  font-size: 50px;
  margin-bottom: 70px;
}
.service_text{
  font-size: 20px;
}
.slider{
  width: 80%;
  height: 90vh;
  /* background-color: rgb(14, 207, 101); */
}
.slider img{
    object-fit: cover;
}


@media(max-width:1400px){
  .text_cont{
  padding: 30px 30px 50px;
} 
.service_text_header{
  font-size: 30px;
  margin-bottom: 50px;
}
.service_text{
  font-size: 16px;
}
}

</style>
