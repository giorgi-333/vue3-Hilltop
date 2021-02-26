<template>
  <div class="about" v-if="data_exist">
    <div class="about_header">
      {{t('about_us', {}, {locale:lang})}}
    </div>
    <div v-html="about.description" class="about_text"></div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { mapActions, mapGetters } from "vuex";

export default {
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  methods: {
    ...mapActions(["fetchAbout"]),
  },
  mounted() {
    if (!this.data_exist) this.fetchAbout();
  },
  computed: {
    ...mapGetters({
      about: "getAbout",
      lang: "getLang",
    }),
    data_exist() {
      var exist_ = "description" in this.about;
      return exist_;
    },
  },
};
</script>

<style scoped>
.about {
  margin: 0;
  padding: 250px 8% 0;
  color: #464646;
}
.about_header {
  font-family: "Larsseit_light", "Arial_caps";
  font-weight: 400;
  margin-bottom: 78px;
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
}
.about_text {
  font-size: 25px;
  line-height: 29px;
}

@media (max-width: 1400px) {
  .about {
    margin: 0;
    padding: 129px 8% 0;
  }
  .about_header {
    margin-bottom: 50px;
    font-size: 30px;
    text-transform: uppercase;
  }
  .about_text {
    font-size: 22px;
    line-height: 26px;
  }
}

@media (max-width: 992px) {
  .about {
    padding: 50px 4% 0;
    margin: 0;
  }
  .about_header {
    margin-bottom: 30px;
    font-size: 20px;
    text-transform: uppercase;
  }
  .about_text {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>

