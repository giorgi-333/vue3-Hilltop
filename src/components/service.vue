<template>
  <div class="service">
    <service-slider
      v-for="(service, i) in services"
      :service="service"
      :key="i"
      class="on_computer"
    />
    <mobile-slider
      v-for="(service, i) in services"
      :service="service"
      :key="i"
      class="on_mobile"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import serviceSlider from "./service/serviceSlider";
import mobileSlider from "./service/mobileSlider";

export default {
  components: {
    serviceSlider,
    mobileSlider,
  },
  methods: {
    ...mapActions(["fetchService"]),
  },
  mounted() {
    if (!this.services.length) this.fetchService();
  },
  computed: {
    ...mapGetters({
      services: "getService",
    }),
  },
};
</script>

<style>
.on_mobile {
  display: none;
}

@media (min-width: 993px) {
  .service_slider {
    color: #464646;
    width: calc(100% - 50px);
    margin-top: 50px;
  }
  .service_slider:nth-child(1) {
    margin-top: 0 !important;
  }
  .service {
    padding-top: 50px;
  }
  .service_slider:nth-child(odd) {
    margin-left: 50px;
  }
  .service_slider:nth-child(even) {
    margin-right: 50px; /* Not necessary */
  }
  .service_slider:nth-child(odd) .slider {
    margin-left: 20%;
  }
  .service_slider:nth-child(odd) .text_cont {
    left: 0;
    border-left: 1px solid #56d9d4;
  }
  .service_slider:nth-child(even) .text_cont {
    right: 0;
    border-right: 1px solid #56d9d4;
  }
}

@media (max-width: 1400px) and (min-width: 993px) {
  .service_slider {
    width: calc(100% - 30px);
  }
  .service_slider:nth-child(odd) {
    margin-left: 30px;
  }
  .service_slider:nth-child(odd) {
    margin-right: 30px; /* Not necessary */
  }
}

@media (max-width: 992px) {
  .on_computer {
    display: none;
  }
  .on_mobile {
    display: block;
  }
}
</style>