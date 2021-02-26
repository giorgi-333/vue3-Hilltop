<template>
  <div class="card">
    <div class="top">
      <img :src="room.primary_image.crop" />
      <div class="right">
        <div class="title">{{ room.title }}</div>
        <div class="price_person">
          <div class="price">
            {{ t("price", {}, { locale: lang }) }}:
            <span>${{ room.price }}</span>
          </div>
          <div class="person">
            {{ t("person", {}, { locale: lang }) }}:
            <span>{{ room.human_capacity }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="in_bottom">
        <div class="description" v-html="room.description"></div>
        <span
          class="btn"
          @click="
            modal_show = true;
            scroll_change('hidden');
          "
        >
          {{ t("gallery", {}, { locale: lang }) }}
        </span>
      </div>
    </div>

    <div
      v-if="modal_show"
      class="modal"
      @click="
        modal_show = false;
        scroll_change('visible');
      "
    >
      <div class="gallary_cont">
        <gallary :images="all_img" />
        <div class="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.5"
            height="12.5"
            viewBox="0 0 21 21"
          >
            <path
              d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z"
              transform="translate(-7.5 -7.5)"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- modal -->
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import { mapGetters } from "vuex";
import gallary from "./gallary.vue";

export default {
  props: ["room"],
  components: {
    gallary,
  },
  data() {
    return {
      modal_show: false,
    };
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  methods: {
    scroll_change(val) {
      document.documentElement.style.setProperty("--hid_scrol", val);
    },
  },
  computed: {
    ...mapGetters({
      lang: "getLang",
    }),
    all_img() {
      const all = [this.room.primary_image.full_size];
      this.room.images.forEach((el) => all.push(el.image.full_size));
      return all;
    },
  },
};
</script>
<style scoped>
.card {
  width: 95%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 35px;
}
.top {
  width: 100%;
  display: flex;
}
.top img {
  width: 50%;
}
.right {
  padding-left: 25px;
  width: 50%;
  height: 100%;
}
/* bottom */
.bottom {
  position: relative;
  width: 100%;
  margin-top: -20px;
}
.in_bottom {
  width: 80%;
  float: right;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding: 20px;
}
.title {
  font-size: 14px;
  font-family: "Big_caslon_medium", "Rioni_contrast";
}
.price_person {
  margin: 7px 0 7px 7px;
  padding-left: 8px;
  border-left: 1px solid #56d9d4;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Larset_thin", "nateli_mtavruli";
}
.price span,
.person span {
  font-family: "Larsseit_medium";
}
.description {
  font-size: 14px;
  margin-bottom: 7px;
}
.btn {
  font-family: "Larset_light", "Arial_caps";
  float: right;
  font-size: 13px;
  cursor: pointer;
  padding-bottom: 2px;
  transition: 0.4s;
  border-bottom: 2px solid #56d9d4;
}

/* gallary  start*/
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 17vh;
  /* align-items: center; */
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
}
.gallary_cont {
  position: relative;
  color: #464646;
  padding: 20px;
  z-index: 9999;
}
.close {
  position: absolute;
  cursor: pointer;
  top: -4px;
  right: 22px;
}
.close svg path {
  fill: #4a4a4a;
}

/* gallary  end*/

@media (min-width: 500px) {
  .bottom {
    margin-top: -40px;
  }
}

@media (max-width: 376px) {
  .top img {
    height: 107px;
  }
}

@media (max-width: 320px) {
  .top img {
    height: 90px;
  }
}
</style>