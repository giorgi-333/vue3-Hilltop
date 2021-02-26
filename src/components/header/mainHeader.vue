<template>
  <div>
    <div 
      class="mobile_header"
      :class="{ scroll_header: is_on_down_mobile }"
      @click.stop
    >
      <div
        class="show_btn"
        @click="
          is_show_header = true;
          scroll_change('hidden');
        "
      ></div>
      <a
        @click="
          $router.push({ name: 'mainPage' });
          atc_class(0);
        "
        href="#"
        class="mobile_logo"
        >Hilltop Bakuriani</a
      >
      <div class="mobile_whatsapp">
        <a href="tel:555-444-451">
          <fa-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </div>

    <header :class="{ on_down: is_on_down, show_header: is_show_header }">
      <div class="logo_close">
        <a
          @click="
            $router.push({ name: 'mainPage' });
            atc_class(0);
          "
          href="#"
          class="logo"
          >Hilltop Bakuriani
        </a>
        <div
          class="close"
          @click="
            is_show_header = false;
            scroll_change('visible');
          "
        >
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
      <div class="menu_right">
        <div class="menu">
          <a
            @click="
              $router.push({ name: 'mainPage' });
              atc_class(0);
            "
            href="#"
            class="menu_item"
          >
            {{ t("home", {}, { locale: lang }) }}
          </a>
          <a
            @click="
              $router.push({ name: 'mainPage' });
              atc_class(1);
            "
            href="#rooms"
            class="menu_item"
          >
            {{ t("room_types", {}, { locale: lang }) }}
          </a>
          <a
            @click="
              $router.push({ name: 'mainPage' });
              atc_class(2);
            "
            href="#service"
            class="menu_item"
          >
            {{ t("service", {}, { locale: lang }) }}
          </a>
          <a
            @click="
              $router.push({ name: 'mainPage' });
              atc_class(3);
            "
            href="#about"
            class="menu_item"
          >
            {{ t("about_us", {}, { locale: lang }) }}
          </a>
          <a
            @click="
              $router.push({ name: 'mainPage' });
              atc_class(4);
            "
            href="#blog"
            class="menu_item"
          >
            {{ t("blog", {}, { locale: lang }) }}
          </a>
          <a
            @click="
              $router.push({ name: 'mainPage' });
              atc_class(5);
            "
            href="#contact"
            class="menu_item"
          >
            {{ t("contact", {}, { locale: lang }) }}
          </a>
        </div>
        <div class="right">
          <div class="first_in_right">
            <div class="tel">
              <svg
                class="tel_icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              +995 555 555 555
            </div>
            <div class="mobile_whatsapp_2">
              <fa-icon :icon="['fab', 'whatsapp']" />
            </div>
            <div class="fb">
              <fa-icon :icon="['fab', 'facebook-square']" />
            </div>
          </div>
          <div class="lang">
            <my-select />
          </div>
        </div>
      </div>
    </header>
    <div
      class="right_to_header"
      @click="
        is_show_header = false;
        scroll_change('visible');
      "
      v-if="is_show_header"
    ></div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import mySelect from "./mySelect";
import { mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    faIcon: FontAwesomeIcon,
    mySelect,
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      is_on_down: false,
      is_on_down_mobile: false,
      is_show_header: false,
      get_scroll_position: true,
    };
  },
  mounted() {
    this.call_handleScroll();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll2);
    this.position_class_onLoad();
  },
  computed: {
    ...mapGetters({
      lang: "getLang",
    }),
    route_name() {
      return this.$route.name;
    },
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll2);
  },
  methods: {
    scroll_change(val) {
      document.documentElement.style.setProperty("--hid_scrol", val);
    },
    //scrolls
    handleScroll() {
      // var home_height = document.querySelector("#home").clientHeight;
      var home_height = window.innerHeight;
      if (window.scrollY > home_height || this.route_name == "blog") {
        this.is_on_down = true;
      } else this.is_on_down = false;
      // for only mobile header
      if (window.scrollY > 40 || this.route_name == "blog") {
        this.is_on_down_mobile = true;
      } else this.is_on_down_mobile = false;
    },
    call_handleScroll() {
      setTimeout(() => {
        this.handleScroll();
        if (this.route_name == undefined) {
          this.call_handleScroll();
        }
      }, 3);
    },
    handleScroll2() {
      //call - set and ramove hash function
      this.set_ramove_hash();
    },
    set_ramove_hash() {
      // set and ramove  - hash and active class -
      //  els (all link elements)
      var els = document.getElementsByClassName("menu_item");
      // main logic
      if (
        document.querySelector("#rooms") != null &&
        this.get_scroll_position
      ) {
        //home
        if (
          window.scrollY >= 0 &&
          window.scrollY < document.querySelector("#rooms").offsetTop
        ) {
          if (location.hash != "#") {
            this.$router.push({ hash: "" });
            els[0].classList.add("active");
          }
        } else {
          els[0].classList.remove("active");
        }
        //rooms
        if (
          window.scrollY >= document.querySelector("#rooms").offsetTop &&
          window.scrollY < document.querySelector("#service").offsetTop
        ) {
          if (location.hash != "#rooms") {
            this.$router.push({ hash: "#rooms" });
            els[1].classList.add("active");
          }
        } else {
          els[1].classList.remove("active");
        }
        //service
        if (
          window.scrollY >= document.querySelector("#service").offsetTop &&
          window.scrollY < document.querySelector("#about").offsetTop - 10
        ) {
          if (location.hash != "#service") {
            this.$router.push({ hash: "#service" });
            els[2].classList.add("active");
          }
        } else {
          els[2].classList.remove("active");
        }
        //about
        if (
          window.scrollY >= document.querySelector("#about").offsetTop - 10 &&
          window.scrollY < document.querySelector("#blog").offsetTop - 10
        ) {
          if (location.hash != "#about") {
            this.$router.push({ hash: "#about" });
            els[3].classList.add("active");
          }
        } else {
          els[3].classList.remove("active");
        }
        //blog
        if (
          window.scrollY >= document.querySelector("#blog").offsetTop - 10 &&
          window.scrollY < document.querySelector("#contact").offsetTop - 200
        ) {
          if (location.hash != "#blog") {
            this.$router.push({ hash: "#blog" });
            els[4].classList.add("active");
          }
        } else {
          els[4].classList.remove("active");
        }
        //contact
        if (
          window.scrollY >=
          document.querySelector("#contact").offsetTop - 200
        ) {
          if (location.hash != "#contact") {
            this.$router.push({ hash: "#contact" });
            els[5].classList.add("active");
          }
        } else {
          els[5].classList.remove("active");
        }
      }
    },
    atc_class(x) {
      this.scroll_change("visible");
      this.is_show_header = false;
      // set active class on click
      var els = document.getElementsByClassName("menu_item");
      for (var i = 0; i < els.length; i++) {
        if (els[i].classList.contains("active")) {
          els[i].classList.remove("active");
        }
      }
      els[x].classList.add("active");
      // don't get scroll position (for => 1s or 2s)
      this.get_scroll_position = false;
      if (this.route_name == "blog")
        setTimeout(() => this.again_get_scroll(), 2000);
      else setTimeout(() => this.again_get_scroll(), 1000);
    },
    again_get_scroll() {
      this.get_scroll_position = true;
    },
    position_class_onLoad() {
      // set position and add active classes on page load
      var els = document.getElementsByClassName("menu_item");
      //home
      if (location.hash == "") {
        els[0].classList.add("active");
      }
      //rooms
      if (location.hash == "#rooms") {
        els[1].classList.add("active");
        setTimeout(
          () => window.scrollTo(0, document.querySelector("#rooms").offsetTop),
          2000
        );
      }
      //service
      if (location.hash == "#service") {
        els[2].classList.add("active");
        setTimeout(
          () =>
            window.scrollTo(0, document.querySelector("#service").offsetTop),
          2000
        );
      }
      //about
      if (location.hash == "#about") {
        els[3].classList.add("active");
        setTimeout(
          () => window.scrollTo(0, document.querySelector("#about").offsetTop),
          2000
        );
      }
      //blog
      if (location.hash == "#blog") {
        els[4].classList.add("active");
        setTimeout(
          () => window.scrollTo(0, document.querySelector("#blog").offsetTop),
          2000
        );
      }
      //contact
      if (location.hash == "#contact") {
        els[5].classList.add("active");
        setTimeout(
          () =>
            window.scrollTo(0, document.querySelector("#contact").offsetTop),
          2000
        );
      }
    },
  },
  watch: {
    "$route.name"() {
      //when click on Home in blog page
      if (this.route_name == "mainPage") this.is_on_down = false;
    },
  },
};
</script>

<style>
:root {
  --hid_scrol: scroll;
}
html {
  overflow-y: var(--hid_scrol);
}
</style>

<style scoped>
.mobile_header {
  display: none;
}
.mobile_whatsapp_2 {
  display: none;
}
header {
  z-index: 99;
  width: 100%;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0 50px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  text-shadow: 0px 3px 6px #0000004d;
}
.on_down {
  position: fixed;
  background-color: rgb(255, 255, 255) !important;
  color: #4a4a4a !important;
  box-shadow: 0px 3px 6px #20797633;
  text-shadow: unset !important;
}
.on_down .menu_item {
  color: #4a4a4a !important;
}
.on_down #select {
  color: #4a4a4a !important;
}
.on_down .fb {
  color: #464646 !important;
}
.on_down .logo {
  color: #464646 !important;
}
.logo {
  color: white;
  text-decoration: none;
  font-size: 35px;
  line-height: 102px;
  cursor: pointer;
  font-family: "Big_caslon_medium";
}
.logo_close {
  display: flex;
  justify-content: space-between;
}
.close {
  display: none;
}
.menu {
  display: flex;
  text-transform: uppercase;
  font-family: "Larsseit_light", "Arial_caps";
}
.menu_right {
  display: flex;
  justify-content: right;
  font-size: 22px;
  line-height: 26px;
  padding: 38px 0 36px;
}
.menu_item {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: 0.4s;
}
.menu_item:hover {
  border-bottom: 2px solid #56d9d4;
  /* font-family: "Larsseit_medium", "Arial_caps"; */
}
.menu_item.active {
  border-bottom: 2px solid #56d9d4;
  /* font-family: "Larsseit_medium", "Arial_caps"; */
}
.right div {
  cursor: pointer;
}
.right {
  display: flex;
  font-family: "Larsseit_light";
}
.tel {
  margin-right: 20px;
}
.tel_icon {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
  color: #28b288;
  filter: drop-shadow(0px 3px 6px rgb(0, 0, 0));
}
.fb {
  font-size: 22px;
  margin-top: 1px;
  margin-right: 20px;
  color: #fff7f7;
}
.fb svg {
  filter: drop-shadow(0px 3px 6px rgb(0, 0, 0));
}
.on_down .tel_icon,
.on_down .fb svg {
  filter: unset;
}
.first_in_right {
  display: flex;
  justify-content: space-between;
}
#select {
  color: white;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
}
#select:focus {
  outline: none;
}
#select option {
  color: #4a4a4a !important;
  cursor: pointer;
}

/* response on 1500  start */
@media (max-width: 1500px) {
  header {
    padding: 0 25px;
  }
  .logo {
    font-size: 25px;
    line-height: 78px;
  }
  .menu_right {
    font-size: 16px;
    padding: 26px 0 24px;
  }
  .menu_item {
    margin-right: 15px;
  }
  .tel {
    margin-right: 15px;
  }
  .tel_icon {
    width: 18px;
    height: 18px;
  }
  .fb {
    font-size: 18.6px;
    margin-right: 15px;
  }
}
/* response on 1500  end */

/* response on 1100  start */
@media (max-width: 1100px) {
  header {
    padding: 0 20px;
  }
  .logo {
    font-size: 24px;
    line-height: 70px;
  }
  .menu_right {
    font-size: 14px;
    padding: 24px 0 22px;
  }
}

/* response on 992  start */

@media (max-width: 992px) {
  header {
    /* main header start */
    width: 40%;
    transform: translateX(-100%);
    padding: 4px 8px 0 10px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(255, 255, 255) !important;
    color: #4a4a4a !important;
    text-shadow: unset !important;
    transition: transform 0.2s;
  }
  .show_header {
    transform: translateX(0);
  }
  /*  */
  header .menu_item {
    color: #464646 !important;
  }
  .logo {
    color: #464646 !important;
    font-size: 20px;
    line-height: 50px;
    white-space: nowrap;
  }
  .close {
    display: block;
    line-height: 50px;
    cursor: pointer;
  }
  .menu_right {
    font-size: 16px;
    flex-direction: column;
  }
  .menu {
    flex-direction: column;
    order: 2;
  }
  .menu_item {
    width: max-content;
    margin-bottom: 16px;
  }
  .right {
    order: 1;
    margin-bottom: 16px;
    justify-content: space-between;
  }
  .first_in_right {
    order: 2;
  }
  .lang {
    order: 1;
  }
  /*  */
  .tel {
    display: none;
  }
  .fb svg {
    filter: unset;
  }
  .mobile_whatsapp a {
    color: white !important;
  }
  .mobile_whatsapp_2 {
    display: block;
    margin-right: 15px;
  }

  .fb {
    font-size: 22px;
    margin-right: 0;
    color: #464646 !important;
  }
  #select {
    color: #4a4a4a !important;
  }
  #select option {
    color: #4a4a4a !important;
  }
  /* main header end */

  /* right to header start*/
  .right_to_header {
    /* display: block; */
    position: fixed;
    z-index: 99999999999;
    top: 40px;
    right: 0;
    width: 60%;
    height: calc(100vh - 40px);
    background-color: transparent;
  }
  /* right to header end */

  /* mobile header start */
  .mobile_header {
    position: fixed;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    color: white;
    text-shadow: 0px 3px 6px #0000004d;
    padding: 0 10px;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }
  .scroll_header {
    background-color: rgb(255, 255, 255) !important;
    color: #4a4a4a !important;
    box-shadow: 0px 3px 6px #20797633;
    text-shadow: unset;
  }
  .scroll_header .show_btn::before,
  .scroll_header .show_btn::after {
    background-color: #4a4a4a !important;
    box-shadow: unset;
  }
  .scroll_header .mobile_whatsapp a {
    color: #464646 !important;
  }
  .scroll_header .mobile_logo {
    color: #464646 !important;
  }
  .mobile_logo {
    color: white;
    text-decoration: none;
    white-space: nowrap;
    font-size: 20px;
    cursor: pointer;
    font-family: "Big_caslon_medium";
  }
  .show_btn {
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 27px;
    height: 15.5px;
    margin-top: 12.25px;
  }
  .show_btn::before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 27px;
    height: 2px;
    background-color: #fff;
    box-shadow: 0px 3px 6px #0000004d;
  }
  .show_btn::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 27px;
    height: 2px;
    background-color: #fff;
    box-shadow: 0px 3px 6px #0000004d;
  }
  .mobile_whatsapp,
  .mobile_whatsapp_2 {
    font-size: 23px;
  }
} /* mobile header start */

/* response on 992  end */

@media (max-width: 600px) {
  header {
    width: 50%;
  }
  .right_to_header {
    width: 50%;
  }
}

@media (max-width: 440px) {
  header {
    width: 66%;
  }
  .right_to_header {
    width: 34%;
  }
}
</style>