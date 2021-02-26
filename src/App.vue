<template>
<div> 
  <my-header/>
   <router-view> </router-view>
</div>
</template>

<script>
import "./assets/font/fonts.css";
import myHeader from "./components/header/mainHeader"

export default {
  components:{
     myHeader
  }
}
</script>



<style> 
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body{
  font-family: 'Larsseit_thin_italic','nateli';
  overflow-x: hidden;
}
/* .ru{
   font-family: "ru";
}
.ru *{
  font-family: inherit;
} */

</style>
