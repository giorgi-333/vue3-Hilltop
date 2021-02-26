<template> 
  <div class="mySelect">
    <div class="selected" @click="items_show = !items_show">
      <div class="value">{{ selected }}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="26.438"
        height="22.825"
        viewBox="0 0 26.438 22.825"
        class="select_arrow"
        :class="{ select_arrow_up: items_show }"
      >
        <defs>
          <filter
            id="Icon_ionic-ios-arrow-down"
            x="0"
            y="0"
            width="26.438"
            height="22.825"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood flood-opacity="0.302" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <path
            id="Icon_ionic-ios-arrow-down-2"
            data-name="Icon ionic-ios-arrow-down"
            d="M10.408,14.617,13.6,11.424a.6.6,0,0,1,.852,0,.608.608,0,0,1,0,.854L10.835,15.9a.6.6,0,0,1-.832.018L6.363,12.28a.6.6,0,0,1,.852-.854Z"
          />
        </g>
      </svg>
    </div>
    <div class="items" v-if="items_show">
      <div
        class="item"
        v-for="(langg, i) in langs"
        :key="i"
        @click="
          selected = langg;
          items_show = false;
        "
      >
        {{ langg }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
//
import { call_reqvest } from "../../store/client";

export default {
  data() {
    return {
      items_show: false,
      selected: "eng",
      langs: ["eng", "geo", "rus"],
      // >>
    };
  },
  mounted() {
    if (localStorage.lang) {
      if (
        localStorage.lang == "eng" ||
        localStorage.lang == "geo" ||
        localStorage.lang == "rus"
      )
        this.selected = localStorage.lang;
      else localStorage.lang = this.selected;
    }
    // for local data language
    this.setLang(this.selected);
    //local storage
    if (!localStorage.lang) {
      localStorage.lang = this.selected;
    }
    if (this.selected != undefined) {
      call_reqvest(this.selected);
    }
  },
  computed: {
    ...mapGetters(["count_blogs_load"]),
  },
  watch: {
    selected() {
      call_reqvest(this.selected); // for reqvest
      this.setLang(this.selected); // for local data language
      localStorage.lang = this.selected;

      // reload fetch
      this.fetchSlider();
      this.fetchRooms();
      this.fetchService();
      this.fetchAbout();
      this.fetchContact();
      //  fetch blogs x-times
      this.clearBlogs();
      // console.log(this.count_blogs_load);
      // for (var i = 0; i < this.count_blogs_load; i++) {
      this.fetchBlogs();
      // }
    },
  },
  methods: {
    ...mapActions([
      "set_local_data",
      "fetchRooms",
      "fetchSlider",
      "fetchService",
      "fetchAbout",
      "fetchBlogs",
      "fetchContact",
      //  lang
      "setLang",
    ]),
    ...mapMutations(["clearBlogs"]),
  },
};
</script>

<style scoped>
.mySelect {
  width: 50px;
  font-size: 22px;
  line-height: 28px;
  position: relative;
}
.selected {
  position: relative;
  text-shadow: 0px 3px 6px #0000004d;
}
.selected .value {
  text-transform: uppercase;
}
.items {
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  color: #4a4a4a;
  text-shadow: none !important;
  padding: 18px 14px;
}
.item {
  line-height: 26px;
  border-bottom: 1px solid transparent;
  transition: 0.2s;
}
.item:nth-child(1),
.item:nth-child(2) {
  margin-bottom: 18px;
}
.item:hover {
  border-bottom: 1px solid #56d9d4;
}
.select_arrow {
  filter: drop-shadow(0px 3px 6px rgb(0, 0, 0));
}
.select_arrow path {
  fill: white;
}
.select_arrow {
  position: absolute;
  top: -1px;
  right: -18px;
}
/* on scroll */
.on_down .select_arrow path {
  fill: #464646 !important;
}
.on_down .select_arrow {
  filter: none !important;
}
.on_down .selected {
  text-shadow: unset;
}
/* on show click */
.select_arrow_up {
  margin-top: 4px;
  transform: rotate(180deg);
  top: 0;
  right: -1px;
}

@media (max-width: 1500px) {
  .mySelect {
    font-size: 16px;
  }
  .items {
    color: #4a4a4a;
    padding: 12px 10px;
  }
  .item:nth-child(1),
  .item:nth-child(2) {
    margin-bottom: 12px;
  }
  .select_arrow {
    right: -8px;
  }
}

@media (max-width: 992px) {
  .mySelect {
    position: static;
  }
  .selected {
    text-shadow: unset;
  }
  .items {
    position: static;
  }
  .select_arrow path {
    fill: #464646 !important;
  }
  .select_arrow {
    filter: none !important;
  }
}
</style>