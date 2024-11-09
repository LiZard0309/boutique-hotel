<script>
import IconBedKingOutline from "@/components/icons/IconBedKingOutline.vue";
import {BCard, BButton, BCollapse} from "bootstrap-vue-3";
//Icons - Dynamische erstellung benötigt importierte Icons
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
  components: {IconBedKingOutline, BCard, BButton, BCollapse},
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
    openAvailabilityModal() {
      //this.selectedDateRange = selectedDateRange;
      //this.$emit("check-availability", this.id);
      this.availabilityChecked = true;
      this.isAvailable = Math.random() > 0.5;
      console.log("Button wurde geklickt, Modal zur Datumsauswahl wird geöffnet. RoomID:", this.id);
    },
    reserveRoom () {
      console.log("Zimmer wird reserviert:", this.id, this.selectedDateRange);
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
      availabilityChecked: false,
      isAvailable: null,
      selectedDateRange: "19.4.25 - 23.4.25"
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
            class="mb-4 shadow-sm"
        >
          <b-card-text class="button-section">
            <div>
              <span class="priceStyle">{{ pricePerNight }}€</span> /pro Nacht
            </div>
            <!-- Button logik -->
            <div class="right-content">
              <b-button
                  v-if="!availabilityChecked"
                  @click="openAvailabilityModal"
                  variant="primary"
              >Verfügbarkeit prüfen</b-button>

              <b-button
                  v-else-if="availabilityChecked && isAvailable"
                  @click="reserveRoom"
                  variant="primary"
              >Reservieren</b-button>

              <b-button
                  v-else-if="availabilityChecked && !isAvailable"
                  @click="openAvailabilityModal"
                  variant="primary"
              >Anderes Datum Prüfen</b-button>
            </div>
          </b-card-text>

          <!-- Datum logik -->
          <div v-if="availabilityChecked" class="availability-section">
            <div @click.prevent="openAvailabilityModal" class="left-content">
              <i-QuillCalendar width="38" height="38" color="#2e2e2e"/>
              <div class="selected-date hover-underline-animation left">
                {{ selectedDateRange }}
              </div>
            </div>
            <div class="right-content">
              <template v-if="isAvailable">
                <i-LaCheckCircle width="42" height="42" color="green"/>
                <span class="availability-text available-text">Verfügbar</span>
              </template>
              <template v-else>
                <i-CodiconError width="42" height="42" color="red"/>
                <span class="availability-text unavailable-text">Nicht Verfügbar</span>
              </template>
            </div>
          </div>

          <div class="room-info">
            <div class="left-content">

              <i-TablerBed v-if="beds === 1" width="48" height="48" color="#2e2e2e"/>
              <i-F7BedDouble v-else-if="beds === 2" width="48" height="48" color="#2e2e2e"/>
              <template v-else-if="beds === 3">
                <i-F7BedDouble width="48" height="48" color="#2e2e2e"/>
                <i-TablerBed class="ms-sm-2" width="48" height="48" color="#2e2e2e"/>
              </template>
              <template v-else>
                <i-F7BedDouble width="48" height="48" color="#2e2e2e"/>
                <i-F7BedDouble class="ms-sm-2" width="48" height="48" color="#2e2e2e"/>
              </template>
              <p v-if="beds > 1">{{ beds }} Betten</p>
              <p v-else>{{ beds }} Bett</p>
            </div>

            <div>
              <a @click.prevent="showDetails = !showDetails" class="details-link">
                <div class="hover-underline-animation left" v-if="!showDetails">
                  Weitere Details
                </div>
                <div class="hover-underline-animation left" v-else>
                  Weniger Details
                </div>
                <i-IconamoonArrowDown2Thin v-if="!showDetails" class="arrow" width="48" height="48" color="#2e2e2e"/>
                <i-IconamoonArrowUp2Thin v-else class="arrow" width="48" height="48" color="#2e2e2e"/>
              </a>
            </div>
          </div>

          <b-collapse :visible="showDetails">
            <div class="extras">
              <template v-for="(extra, index) in extras" :key="index">
                <div v-if="Object.values(extra) [0] === 1">
                  <component
                      :is="getExtraIcon(Object.keys(extra)[0])"
                      width="32"
                      height="32"
                      color="#2e2e2e"
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

.priceStyle {
  font-size: 1.2rem;
  font-weight: bold;

}

.button-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.availability-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.selected-date {
  margin-left: 10px;
  color: #383838;
  cursor: pointer;
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
.right-content {
  margin-right: 15px;
}

.left-content p {
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: bold;
}

.details-link {
  color: #2e2e2e;
  text-decoration: none;
  cursor: pointer;
}

.details-link .arrow {
  margin-left: 5px;
}

.availability-text {
  font-size: 1rem;
  margin-left: 8px;
}

.available-text {
  color: green;
}

.unavailable-text {
  color: red;
}
/* Amenities section in the accordion */
.extras {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
}

.extra-icon {
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  margin: 0 10px 0 10px;

}

/* Hover-Animation für den Unterstrich */
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(130, 133, 157);
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.left::after {
  transform-origin: bottom right;
}

.hover-underline-animation.left:hover::after {
  transform-origin: bottom left;
}

</style>