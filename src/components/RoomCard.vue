<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import { BCard, BButton, BCollapse } from "bootstrap-vue-3";
import SolarWineglassTriangleOutline from '~icons/solar/wineglass-triangle-outline?width=48px&height=48px';
import CilBathroom from '~icons/cil/bathroom?width=48px&height=48px';
import SolarTvOutline from '~icons/solar/tv-outline?width=48px&height=48px';
import SolarSofa3Outline from '~icons/solar/sofa-3-outline?width=48px&height=48px';
import StreamlineHotelAirConditioner from '~icons/streamline/hotel-air-conditioner?width=48px&height=48px';
import LsiconWifiOutline from '~icons/lsicon/wifi-outline?width=48px&height=48px';
import SolarCupHotOutline from '~icons/solar/cup-hot-outline?width=48px&height=48px';
import MynauiWheelchair from '~icons/mynaui/wheelchair?width=48px&height=48px';

export default {
  name: "RoomCard",
  components: { IconBedKingOutline, BCard, BButton, BCollapse },
  props: {
    id: {
      type: Number,
      required: true,
    },
    roomName: {
      type: String,
      required: true,
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    extras: {
      type: Array,
      required: true,
    },
  },
  methods: {
    checkAvailability() {
      //this.$emit("check-availability", this.id);
      console.log("Button wurde geklickt, Verfügbarkeit wird geprüft. RoomID:" + this.id);
    },
    getExtraIcon(extraName) {
      const iconMapping = {
        bathroom: CilBathroom,
        minibar: SolarWineglassTriangleOutline,
        television: SolarTvOutline,
        livingroom: SolarSofa3Outline,
        aircondition: StreamlineHotelAirConditioner,
        wifi: LsiconWifiOutline,
        breakfast: SolarCupHotOutline,
        "handicapped accessible": MynauiWheelchair,
      };
      return iconMapping[extraName];
    },
  },
  data() {
    return {
      showDetails: false, // Controls the accordion visibility
    };
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <b-card
            :title="roomName"
            :img-src="image"
            img-alt="Image"
            img-top="true"
            tag="article"
            style="max-width: 50rem;"
            class="mb-4"
        >
          <b-card-text>
            Preis {{ pricePerNight }} €/Nacht
          </b-card-text>

          <b-button @click="checkAvailability" variant="primary">Verfügbarkeit prüfen</b-button>
          <br/>

          <div class="room-info">
            <div class="left-content">
              <IconBedKingOutline/>
              <p>{{ beds }} Betten</p>
            </div>

            <div class="right-content">
              <a href="#" @click.prevent="showDetails = !showDetails" class="details-link">
                Weitere Details
                <span class="arrow" v-if="!showDetails">▼</span>
                <span class="arrow" v-else>▲</span>
              </a>
            </div>
          </div>

          <b-collapse :visible="showDetails">
            <div class="extras">
              <template v-for="(extra, index) in extras" :key="index">
                  <div v-if="Object.values(extra) [0] === 1">
                    <component
                        :is="getExtraIcon(Object.keys(extra)[0])"
                        width="28"
                        height="28"
                        color="black"
                        :alt="Object.keys(extra)[0]"
                        class="extra-icon"
                    ></component>
                  </div>
              </template>
            </div>
          </b-collapse>

        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

.room-card {
  max-width: 20rem;
  margin: auto;
}


@media (min-width: 1024px) {
  .room-card {
    max-width: 30rem;
  }
}


.room-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.left-content {
  display: flex;
  align-items: center;
}

.left-content p {
  margin-left: 8px;
  margin-bottom: 0;
  font-weight: bold;
}

.details-link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.details-link .arrow {
  margin-left: 5px;
}

/* Amenities section in the accordion */
.extras {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px 0 15px 0;
}

.extra-icon {
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  margin: 0 10px 0 10px;

}
</style>