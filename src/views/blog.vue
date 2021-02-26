<template>
  <div class="blog" v-if="exist_data">
    <div class="left">
      <img :src="blog.picture.full_size" />
    </div>
    <div class="right">
      <div @click="back" class="back">
        <fa-icon :icon="['fas', 'arrow-left']" />
      </div>
      <div class="top">
        <div class="title">
          {{ blog.title }}
        </div>
        <div class="date_tags">
          <div class="date">
            {{t('published', {}, {locale:lang})}}: <span>{{ blog.date }}</span>
          </div>
          <div class="tags">
            <div class="tag" v-for="(tag, i) in blog.tags" :key="i">
              {{ tag.title }}
              <span v-if="i < blog.tags.length - 1">, </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="description" v-html="blog.description"></div>
      </div>
      <div class="date_tags_mobile">
        <div class="date">
          {{t('published', {}, {locale:lang})}}: <span>{{ blog.date }}</span>
        </div>
        <div class="tags">
          <div class="tag" v-for="(tag, i) in blog.tags" :key="i">
            {{ tag.title }}
            <span v-if="i < blog.tags.length - 1">, </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { mapActions, mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    faIcon: FontAwesomeIcon,
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  methods: {
    ...mapActions(["fetchBlog"]),
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.fetchBlog(this.$route.params.blogSlug);
    this.$store.commit("setBlog", {
      id: 0,
      tags: [],
      picture: {},
      title: "",
      slug: "",
      short_description: "",
      description: "",
    });
  },
  watch: {
    lang() {
      this.fetchBlog(this.$route.params.blogSlug);
    },
  },
  computed: {
    ...mapGetters({
      blog: "getBlog",
      lang: "getLang",
    }),
    exist_data() {
      var exist_ = "title" in this.blog;
      return exist_;
    },
  },
};
</script>

<style scoped>
.blog {
  display: flex;
  margin-top: 110px;
}
.left {
  width: 62%;
  height: 84vh;
}
.left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.right {
  width: 38% !important;
}
/*right > top */
.top {
  padding: 0 24px;
  margin-top: 96px;
}
.title {
  font-family: "Big_caslon_medium", "Rioni_contrast";
  font-size: 30px;
  margin-bottom: 35px;
}
.date_tags {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  font-family: "Larsseit_light_italic", "nateli";
}
.date_tags_mobile {
  display: none;
}
.data span {
  font-family: "Larsseit_light_italic";
}
.tag {
  display: inline;
}
.back {
  cursor: pointer;
  font-size: 23px;
  margin-top: 10px;
  margin-left: 22px;
}
/* right > bottom */
.bottom {
  width: 120%;
  margin-top: 20px;
  margin-left: -25%;
  margin-bottom: 30px;
  padding: 70px 50px;
  font-size: 20px;
  background-color: #fff;
  border-right: 2px solid #56d9d4;
  box-shadow: 0px 3px 6px #00000029;
}

@media (max-width: 1500px) {
  .blog {
    margin-top: 84px;
  }
}

@media (max-width: 1400px) {
  .back {
    font-size: 18px;
    margin-top: 6px;
    margin-left: 20px;
  }
  /*right > top */
  .top {
    padding: 0 24px;
    margin-top: 72px;
  }
  .title {
    font-family: "Big_caslon_medium", "Rioni_contrast";
    font-size: 22px;
    margin-bottom: 26px;
  }
  .date_tags {
    font-size: 13px;
  }
  /* right > bottom */
  .bottom {
    margin-top: 15px;
    margin-bottom: 30px;
    padding: 50px 30px;
    font-size: 17px;
  }
}

@media (max-width: 992px) {
  .blog {
    margin-top: 44px;
  }
}

@media (max-width: 800px) {
  .blog {
    flex-direction: column !important;
  }
  .left {
    width: 100% !important;
    height: 47vh !important;
  }
  .right {
    width: 100% !important;
  }
  .back {
    margin-top: 20px;
  }
  .top {
    margin-top: 20px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 0;
  }
  .bottom {
    width: 100%;
    margin: 0;
    padding: 30px 20px;
    font-size: 14px;
    box-shadow: unset;
    border: none;
  }
  /* display */
  .date_tags {
    display: none;
  }
  .date_tags_mobile {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 40px;
  }
}

@media (max-width: 642px) {
  .left {
    height: 37vh !important;
  }
}
</style>