<template>
  <div class="main_slider" v-if="slides.length">
    <swiper
      :slides-per-view="1"
      :autoplay="{ delay: 4000 }"
      :pagination="{ clickable: true }"
      class="slider_content"
    >
      <swiper-slide v-for="(slide, i) in slides" :key="i">
        <img :src="slide.picture.full_size" class="slide_img" />
        <div class="content">
          <div class="title">{{ slide.title }}</div>
          <div class="description">{{ slide.sub_title }}</div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="video_cont" :class="{ video_cont_hide: !video_is_show }">
      <!-- v-if="video_is_show" -->
      <div class="video_helper">
        <div class="close" @click="video_is_show = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 21 21"
          >
            <path
              d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z"
              transform="translate(-7.5 -7.5)"
            />
          </svg>
        </div>
        <img src="@/assets/img/card_img.jpg" />
        <iframe
          src="https://www.youtube.com/embed/c5mt4WKb5OY"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <img
      src="../../assets/img/video.png"
      @click="video_is_show = true"
      class="video_icon"
      :class="{ video_cont_hide: video_is_show }"
    />
  </div>
</template> 

<script>
import { mapActions, mapGetters } from "vuex";

// import Swiper core and required components
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// install Swiper components
SwiperCore.use([Pagination, A11y, Autoplay]);

export default {
  name: "mainSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      video_is_show: true,
    };
  },
  methods: {
    ...mapActions(["fetchSlider"]),
  },
  mounted() {
    // fetch slides
    if (!this.slides.length) this.fetchSlider();
  },
  computed: {
    ...mapGetters({
      slides: "getSlider",
    }),
  },
};
</script>

<style scoped>
.main_slider {
  z-index: 12;
  width: 100%;
  position: relative;
}
.slide_img {
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100vh;
}
.slider_content {
  font-family: "Mishafi_gold";
}
.content {
  width: 30%;
  color: white;
  position: absolute;
  bottom: 99px;
  left: 50px;
  font-family: "Big_caslon_medium", "Rioni_contrast";
}
.title {
  font-size: 50px;
  margin-bottom: 26px;
  text-shadow: 0px 3px 6px #0000004d;
}
.description {
  font-size: 30px;
  text-shadow: 0px 3px 6px #0000004d;
}

/* start video */
.video_cont {
  z-index: 100;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 200px;
  opacity: 1;
  transition: 0.8s;
}
.video_cont_hide {
  opacity: 0 !important;
  z-index: 0 !important;
}
.video_helper {
  position: relative;
  background-color: white;
  border: 10px solid white;
}
.close {
  position: absolute;
  cursor: pointer;
  top: -33px;
  right: -9px;
  filter: drop-shadow(0px 3px 6px rgb(0, 0, 0));
}
.close path {
  fill: white;
}
.video_helper img {
  opacity: 0;
  width: 953px;
  height: 511px;
  display: block;
}
.video_cont iframe {
  /* display: block; */
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* end video */
.video_icon {
  cursor: pointer;
  position: absolute;
  width: 63px;
  z-index: 100;
  bottom: 89px;
  right: 50px;
  filter: drop-shadow(0px 3px 6px rgb(0, 0, 0));
  transition: 0.8s;
}

/* responsive 1400 start*/
@media (max-width: 1400px) {
  .content {
    bottom: 49px;
    left: 20px;
  }
  .video_helper img {
    width: 677px;
    height: 363px;
  }
  .title {
    font-size: 35px;
    margin-bottom: 16px;
  }
  .description {
    font-size: 20px;
  }
  .video_icon {
    bottom: 50px;
    right: 30px;
  }
}

/* responsive 1400 end*/

@media (max-width: 992px) {
  .video_helper {
    border: 7px solid white;
  }
  .content {
    width: 80%;
    height: 50px;
    color: white;
    position: absolute;
    top: 44%;
    transform: translateY(-50%);
    left: 11px;
  }
  .title {
    font-size: 26px;
    margin-bottom: 19px;
  }
  .description {
    font-size: 18px;
  }
  .video_cont {
    display: none;
  }
  .content {
    width: 80%;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 20px;
    margin-bottom: 19px;
  }
  .description {
    font-size: 16px;
  }
}
</style>

