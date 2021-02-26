<template>
  <div class="contact_cont">
    <div class="contact" v-if="data_exist">
      <div class="contact_header">
        {{ t("contact", {}, { locale: lang }) }}
      </div>
      <div class="contact_list_cont">
        <ul class="contact_list">
          <li class="contact_item">
            <span>
              {{ t("phone", {}, { locale: lang }) }}:
            </span>
            <span class="api_contact_item">{{ contact.phone }}</span>
          </li>
          <li class="contact_item">
            <span>
              {{ t("email", {}, { locale: lang }) }}:
            </span>
            <span class="api_contact_item">{{ contact.email }}</span>
          </li>
          <li class="contact_item">
            <span>
              {{ t("address", {}, { locale: lang }) }}:
            </span>
            <span class="api_contact_item">{{ contact.address }}</span>
          </li>
        </ul>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.873748505368!2d43.5277645154367!3d41.744815981723505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d276e3d7e93%3A0xf8903b47b3b8245a!2sHilltop%20Bakuriani!5e0!3m2!1sen!2sge!4v1611684911288!5m2!1sen!2sge"
      frameborder="0"
      class="map"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    >
    </iframe>
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
    ...mapActions(["fetchContact"]),
  },
  mounted() {
    if (!this.data_exist) this.fetchContact();
  },
  computed: {
    ...mapGetters({
      contact: "getContact",
      lang: "getLang",
    }),
    data_exist() {
      var exist_ = "phone" in this.contact;
      return exist_;
    },
  },
};
</script>

<style scoped>
.contact_cont {
  width: calc(100% - 50px);
  margin-left: 50px;
  margin-top: 10vh;
  position: relative;
}
.contact {
  z-index: 3;
  opacity: 1;
  width: 37%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.contact_header {
  font-family: "Larsseit_light", "Arial_caps";
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 35px;
}
.contact_list_cont {
  padding: 100px 0 100px 80px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-left: 1px solid #56d9d4;
}
.contact_list {
  list-style: none;
  list-style-position: inside;
  font-size: 22px;
  padding-left: 20px;
  border-left: 1px solid #b4b4b4;
}
.contact_item {
  margin: 10px 0;
}
.contact_item span:nth-child(1) {
  font-family: "Larset_thin", "nateli";
  text-transform: uppercase;
}
.contact_item span:nth-child(2) {
  font-family: "Larsseit_medium", "Arial_caps";
}
.map {
  z-index: 0;
  border: 0;
  width: 75%;
  margin-left: 25%;
  height: 75vh;
}

@media (max-width: 1400px) {
  .contact_list_cont {
    padding: 80px 0 80px 64px;
  }
  .contact_list {
    font-size: 16px;
    padding-left: 15px;
  }
  .contact_header {
    font-family: "Larsseit_light", "Arial_caps";
    font-size: 30px;
    margin-bottom: 35px;
  }
}

@media (max-width: 992px) {
  .contact_header {
    font-size: 20px;
  }
  .contact_list_cont {
    padding: 5px 0 10px 10px;
    box-shadow: unset;
    border-left: none;
  }
  .contact_list {
    font-size: 16px;
    padding-left: 15px;
    border-left: 1px solid #56d9d4;
  }
  .contact_cont {
    width: 100%;
    margin-left: 0;
  }
  .contact {
    width: 80%;
    position: static;
    transform: translateY(0);
  }
  .contact_header {
    width: 100vw;
    text-align: center;
  }
  .map {
    width: 100%;
    margin-left: 0;
    height: 50vh;
  }
}

@media (max-width: 375) {
  .contact_header {
    font-size: 20px;
  }
}
</style>