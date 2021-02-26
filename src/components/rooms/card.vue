<template>
  <div class="card">
    <div class="left">
      <img :src="room.primary_image.crop" />
    </div>
    <div class="right">
      <div class="in_right">
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
        <div class="description" v-html="room.description"></div>
        <span class="btn" @click="modal_is_show = true">
          {{ t("gallery", {}, { locale: lang }) }}
        </span>
      </div>
    </div>
<!-- v-if="modal_show" -->
    <div :class="{modal_show: modal_is_show}" id="modal" @click="modal_is_show = false">
      <div class="gallary_cont">
        <!-- @click.stop -->
        <gallary :images="all_img" />
        <!-- @click.capture="modal_show = false" -->
        <div class="close">
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
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      modal_is_show: false,
    };
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
  position: relative;
  width: 48%;
  margin-bottom: 68px;
}
.left {
  position: absolute;
  width: 39%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.left img {
  width: 100%;
  height: 234px;
  object-fit: cover;
}
.right {
  width: 74%;
  float: right;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
}
.in_right {
  margin-left: 22%;
  margin-right: 29px;
  margin-top: 34px;
  margin-bottom: 34px;
}
.title {
  font-size: 30px;
  font-family: "Big_caslon_medium", "Rioni_contrast";
}
.price_person {
  margin: 37px 0 37px 30px;
  padding-left: 8px;
  border-left: 1px solid #56d9d4;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Larset_thin", "nateli_mtavruli";
}
.price span,
.person span {
  font-family: "Larsseit_medium";
}
.description {
  font-size: 20px;
  margin-bottom: 34px;
}
.btn {
  cursor: pointer;
  padding-bottom: 2px;
  transition: 0.4s;
  border-bottom: 2px solid transparent;
  font-family: "Larset_light", "Arial_caps";
  text-transform: capitalize;
}
.btn:hover {
  border-bottom: 2px solid #56d9d4;
}

/* gallary  start*/
#modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
  padding-top: 17vh;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999 !important;
  opacity: 0;
  transition: .4s;
}
.modal_show {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.gallary_cont {
  position: relative;
  color: #464646;
  padding: 20px;
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

@media (max-width: 1700px) {
  .left img {
    height: 200px;
  }
}

@media (max-width: 1400px) {
  .card {
    width: 48%;
    margin-bottom: 45px;
  }
  .left {
    width: 46.08%;
  }
  .left img {
    height: 179.02px;
  }
  .in_right {
    margin-left: 30%;
    margin-right: 20px;
    margin-top: 22px;
    margin-bottom: 22px;
  }
  .title {
    font-size: 22px;
  }
  .price_person {
    margin: 23px 0 23px 30px;
    font-size: 16px;
  }
  .description {
    font-size: 16px;
    margin-bottom: 24px;
  }
  .btn {
    font-size: 15px;
  }
}

@media (max-width: 1200px) {
  .left img {
    height: 170px;
  }
}
</style>