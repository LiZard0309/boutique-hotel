
<script>
import RoomExtrasIcons from "./RoomExtrasIcons.vue";

export default {
  props: {
    beds: Number,
    extras: Array,
    _showDetails: Boolean
  },
  components: {
    RoomExtrasIcons
  },
  data() {
    return {
      showDetails: this._showDetails // Controls the accordion visibility
    };
  },
};
</script>

<template>
  <div class="room-info">
    <div class="left-content">
      <i-TablerBed v-if="beds === 1" width="30" height="30" color="#2e2e2e"/>
      <i-F7BedDouble v-else-if="beds === 2" width="30" height="30" color="#2e2e2e"/>
      <template v-else-if="beds === 3">
        <i-F7BedDouble width="30" height="30" color="#2e2e2e"/>
        <i-TablerBed class="ms-sm-2" width="30" height="35" color="#2e2e2e"/>
      </template>
      <template v-else>
        <i-F7BedDouble width="30" height="30" color="#2e2e2e"/>
        <i-F7BedDouble class="ms-sm-2" width="30" height="30" color="#2e2e2e"/>
      </template>
      <p v-if="beds > 1">{{ beds }} Betten</p>
      <p v-else>{{ beds }} Bett</p>
    </div>
    <div class="right-content">
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
  <div class="right-content">
    <RoomExtrasIcons v-if="showDetails"
        :extras="extras"
    />
  </div>
</template>


<style scoped>
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
  font-size: 1.2rem;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: bold;
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
