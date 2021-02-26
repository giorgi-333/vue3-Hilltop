<template>
  <div>  
    <home id="home" />
    <rooms id="rooms" />
    <service id="service" />
    <about id="about" />
    <blogs id="blog"/>
    <contact id="contact"/>
  </div>
</template> 

<script>
import home from "../components/home.vue";
import rooms from "../components/rooms.vue";
import service from "../components/service.vue";
import about from "../components/about.vue";
import blogs from "../components/blogs.vue";
import contact from "../components/contact.vue";


//import global style for sliders
import "../assets/css/swiper.css";

export default {
  name: "mainPage",
  components: {
    home,
    rooms,
    service,
    about,
    blogs,
    contact,
  },
  
 /*   handleScroll() {
      console.log(document.querySelector("#s_about").getBoundingClientRect().y -78 )

      // my scroll start 
      var service_location = document.querySelector("#s_service").offsetTop;
      var windows_scroll = window.scrollY + 88;

      if(service_location < windows_scroll)
        console.log("chamocda")
      // my scroll end 

      if (
        document.querySelector("#s_rooms").getBoundingClientRect().y -
          window.pageYOffset < 0
      ) {
         console.log(document.querySelector("#s_rooms").getBoundingClientRect().y )
      }

      */
   
}
</script>


<style scoped>


</style>



