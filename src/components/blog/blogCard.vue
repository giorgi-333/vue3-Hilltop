<template>
  <div class="card">
    <img :src="blog.picture.crop" class="img" />
    <div class="card_text_cont">
      <div class="card_title">{{ blog.title }}</div>
      <div v-html="blog.short_description" class="card_text"></div>
      <div class="btn_cont">
        <span class="btn">
          <!-- Read More -->
          <router-link :to="{ name: 'blog', params: { blogSlug: blog.slug } }">
            {{ t("read_more", {}, { locale: lang }) }}
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { mapGetters } from "vuex";

export default {
  props: ["blog"],
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  computed: {
    ...mapGetters({
      lang: "getLang",
    }),
  },
};
</script>

<style scoped>
.card {
  position: relative;
  color: #464646;
  width: 810px;
  margin-top: 70px;
}
.card img {
  width: 475px;
  height: 304px;
  display: block;
  object-fit: cover;
}
.card_text_cont {
  width: 441px;
  position: absolute;
  padding: 30px 12px 30px 30px;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background-color: white;
  border-right: 1px solid #56d9d4;
  box-shadow: 0px 3px 6px #00000029;
}
.card_title {
  font-size: 30px;
  font-family: "Big_caslon_medium", "Rioni_contrast";
  text-transform: capitalize;
  margin-bottom: 35px;
  /*  */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.card_text {
  overflow-wrap: break-word;
  font-size: 20px;
  line-height: 24px;
  height: 72px;
  margin-bottom: 26px;
  /*  */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.btn_cont {
  text-align: right;
}
.btn {
  font-size: 18px;
  cursor: pointer;
  display: inline-block;
  padding-bottom: 2px;
  transition: 0.4s;
  border-bottom: 2px solid transparent;
  font-family: "Larset_light", "Arial_caps";
  text-transform: capitalize;
}
.btn a {
  color: #464646;
  text-decoration: none;
}
.btn:hover {
  border-bottom: 2px solid #56d9d4;
}

@media (max-width: 1750px) {
  .card {
    width: 740px;
  }
  .card img {
    width: 455px;
    height: 290px;
  }
  .card_text_cont {
    width: 380px !important;
  }
}

@media (max-width: 1650px) {
  .card {
    width: 680px;
  }
  .card img {
    width: 400px;
    height: 290px;
  }
  .card_text_cont {
    width: 390px !important;
  }
}

@media (max-width: 1480px) {
  .card {
    width: 640px;
  }
  .card img {
    width: 380px;
    height: 290px;
  }
  .card_text_cont {
    width: 390px !important;
  }
}

/* response on 1400 */

@media (max-width: 1400px) {
  .card {
    width: 620px;
    margin-top: 80px;
  }
  .card img {
    width: 400px;
    height: 256px;
  }
  .card_text_cont {
    width: 379px !important;
    padding: 30px 25px 30px 30px;
  }
  .card_title {
    font-size: 22px;
    margin-bottom: 22px;
  }
  .card_text {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 19px;
    height: 57px;
  }
  .btn {
    font-size: 16px;
  }
}

@media (max-width: 1342px) {
  .card {
    width: 570px;
  }
  .card img {
    width: 340px;
    height: 250px;
  }
  .card_text_cont {
    width: 360px !important;
  }
}


@media (max-width: 1242px) {
  .card {
    width: 530px;
  }
  .card img {
    width: 310px;
    height: 240px;
  }
  .card_text_cont {
    width: 330px !important;
  }
}


@media (max-width: 1160px) {
  .card {
    width: 480px;
  }
  .card img {
    width: 330px;
    height: 230px;
  }
  .card_text_cont {
    width: 340px !important;
  }
}

@media (max-width: 1080px) {
.card {
    width: 430px;
  }
  .card img {
    width: 310px;
    height: 230px;
  }
  .card_text_cont {
    width: 300px !important;
  }
}

/* response on 992 */

@media (max-width: 992px) {
  .card {
    width: 100%;
    max-width: 365px;
    margin-top: 20px;
  }
  .card img {  
    width: 269px;
    max-width: 74%;
    height: 172px;
  }
  .card_text_cont {
    position: static;
    margin-top: -70px;
    float: right;
    width: 273px;
    max-width: 75%;
    transform: translateY(0);
    padding: 20px;
  }
  .card_title {
    font-size: 16px;
  }
  .card_text {
    font-size: 14px;
    line-height: 17px;
    height: 51px;
    margin-bottom: 10px;
  }
  .btn {
    font-size: 14px;
    border-bottom: 2px solid #56d9d4;
  }
}
</style>


