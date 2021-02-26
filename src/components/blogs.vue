<template>
  <div class="blogs">
    <div class="blogs_title">{{ t("blog", {}, { locale: lang }) }}</div>
    <div class="blogs_cont" v-if="blogs.results.length">
      <card v-for="(blog, i) in blogs.results" :key="i" :blog="blog" />
    </div>
    <div class="load_more">
      <span
        @click="call_fetchBlogs()"
        :class="{ hide_load_more: !is_show_load_more }"
      >
        {{ t("load_more", {}, { locale: lang }) }}</span
      >
    </div>
  </div>
</template>


<script>
import { useI18n } from "vue-i18n";
import { mapActions, mapMutations, mapGetters } from "vuex";
import card from "./blog/blogCard";

export default {
  components: {
    card,
  },
  data() {
    return {
      count_blogs_load: 1,
    };
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  methods: {
    ...mapActions(["fetchBlogs"]),
    ...mapMutations(["set_blogs_count"]),
    call_fetchBlogs() {
      this.fetchBlogs();
      this.count_blogs_load++;
      this.set_blogs_count(this.count_blogs_load);
    },
  },
  mounted() {
    if (!this.blogs.results.length) {
      this.fetchBlogs();
    }
  },
  computed: {
    ...mapGetters({
      blogs: "getBlogs",
      lang: "getLang",
      is_show_load_more: "show_load_more",
    }),
  },
};
</script>

<style scoped>
.blogs {
  width: 100%;
  padding: 150px 50px 0 50px;
  margin-top: 100px;
  color: #464646;
}
.blogs_cont {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* column-gap: 188px; */
  /* გასათვალისწინებელია card.vue-ში card-ის ზომაში */
}
.blogs_title {
  font-family: "Larsseit_light", "Arial_caps";
  margin-bottom: 50px;
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
}
.load_more {
  margin-top: 72px;
  text-align: center;
  font-size: 25px;
  font-family: "Larset_light", "Arial_caps";
  text-transform: capitalize;
}
.hide_load_more {
  visibility: hidden;
}
.load_more span {
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 2px solid #56d9d4;
}

@media (min-width: 1930px) {
  .blogs {
    padding: 150px 6% 0 6%;
  }
}

@media (max-width: 1800px) {
  .blogs {
    padding: 150px 3% 0 3%;
  }
}
@media (max-width: 1500px) {
  .blogs {
    padding: 150px 2% 0 2%;
  }
}

@media (max-width: 1400px) {
  .blogs {
    padding: 90px 25px 0;
    margin-top: 39px;
  }
  .blogs_cont {
    column-gap: 52px;
    /* გასათვალისწინებელია card.vue-ში card-ის ზომაში */
  }
  .blogs_title {
    margin-bottom: 10px;
    font-size: 30px;
  }
  .load_more {
    margin-top: 52px;
    text-align: center;
    font-size: 18px;
  }
}

@media (max-width: 992px) {
  .blogs {
    padding: 50px 10px 0 0;
  }
  .blogs_cont {
    flex-direction: column;
    align-items: center;
  }
  .blogs_title {
    margin-bottom: 0;
    font-size: 20px;
  }
}
</style>
