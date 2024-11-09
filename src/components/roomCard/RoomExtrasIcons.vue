<script>
import SolarWineglassTriangleOutline from "~icons/solar/wineglass-triangle-outline";
import CilBathroom from "~icons/cil/bathroom";
import SolarTvOutline from "~icons/solar/tv-outline";
import SolarSofa3Outline from "~icons/solar/sofa-3-outline";
import StreamlineHotelAirConditioner from "~icons/streamline/hotel-air-conditioner";
import LsiconWifiOutline from "~icons/lsicon/wifi-outline";
import SolarCupHotOutline from "~icons/solar/cup-hot-outline";
import MynauiWheelchair from "~icons/mynaui/wheelchair";

export default {
  props: {
    extras: Array,
  },
  methods: {
    getExtraIcon(extraName) {
      const iconMapping = {
        bathroom: CilBathroom,
        minibar: SolarWineglassTriangleOutline,
        television: SolarTvOutline,
        livingroom: SolarSofa3Outline,
        aircondition: StreamlineHotelAirConditioner,
        wifi: LsiconWifiOutline,
        breakfast: SolarCupHotOutline,
        "handicapped accessible": MynauiWheelchair
      };
      return iconMapping[extraName];
    }
  },
};
</script>

<template>
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
</template>

<style scoped>

.left-content p {
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: bold;
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

</style>
