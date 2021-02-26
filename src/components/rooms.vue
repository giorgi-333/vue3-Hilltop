<template>
  <div class="rooms" v-if="rooms.length">
    <div class="rooms_title">
      {{ t("room_types", {}, { locale: lang }) }}
    </div>

    <div class="rooms_cont">
      <card
        v-for="(room, i) in rooms"
        :key="i"
        :room="room"
        class="on_computer"
      />
      <card-mobile
        v-for="(room, i) in rooms"
        :key="i"
        :room="room"
        class="on_mobile"
      />
    </div>
  </div>
</template> 

<script>
import { useI18n } from "vue-i18n";
import { mapActions, mapGetters } from "vuex";
import card from "./rooms/card";
import cardMobile from "./rooms/card_mobile";

export default {
  name: "rooms",
  components: {
    card,
    cardMobile,
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  methods: {
    ...mapActions(["fetchRooms"]),
  },
  mounted() {
    if (!this.rooms.length) this.fetchRooms();
  },
  computed: {
    ...mapGetters({
      rooms: "getRooms",
      lang: "getLang",
    }),
  },
};
</script>

<style scoped>
.on_mobile {
  display: none;
}
.rooms {
  position: relative;
  z-index: 97;
  margin: 0 50px 90px;
  color: #464646;
}
.rooms_title {
  font-family: "Larsseit_light", "Arial_caps";
  margin: 0 0 50px 0;
  padding-top: 122px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}
.rooms_cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* responsive 1400 */

@media (max-width: 1400px) {
  .rooms_title {
    margin: 0 0 50px 0;
    padding-top: 90px;
    font-size: 30px;
  }
  .rooms {
    margin: 0 50px 70px;
    color: #464646;
  }
}

/* responsive 992px */

@media (max-width: 992px) {
  .rooms {
    margin: 0 11px 60px;
    color: #464646;
    margin-top: -44vh !important;
    background-color: #fff;
  }
  .rooms_title {
    /* margin: 122px 0 50px 0; */
    margin: 0;
    padding: 15px 0;
    font-size: 15px;
  }
  .on_computer {
    display: none;
  }
  .on_mobile {
    display: block;
  }
  .rooms_cont {
    flex-direction: column;
    justify-content: center;
  }
}
</style>


