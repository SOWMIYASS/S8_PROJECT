<template>
  <div>
    <OpenItinerary
      :isItineraryDialog="openItineraryDialog"
      @close="dialogClose"
      @success="dialogSuccess"
      :itinerary="itinerary"
    />
    <div class="itinerary-card">
      <div class="itinerary-card-title">{{ itinerary.title }}</div>
      <div class="itinerary-tags-container">
        <div class="tag" v-for="(tag, tagInd) in itinerary.tagList">
          {{ tag }}
        </div>
        <span class="itinerary-card-more-tags">+8</span>
      </div>
      <div class="itinerary-card-row-3">
        <div class="itinerary-row-3-days">
          <img src="../assets/calendar.svg" />
          <span>{{ itinerary.days }} days</span>
        </div>
        <div class="itinerary-row-3-icons">
          <img src="../assets/flight-takeoff-line.svg" />
          <img src="../assets/hotel.svg" />
        </div>
      </div>
      <div class="itinerary-card-row-4">
        <div class="itinerary-row-4-images"></div>
        <div class="itinerary-row-4-btn" @click="openItinerary">Open</div>
      </div>
    </div>
  </div>
</template>

<script>
import OpenItinerary from "./OpenItinerary.vue";

export default {
  props: ["itinerary"],
  components: { OpenItinerary },
  data() {
    return {
      openItineraryDialog: false,
    };
},
methods: {
    openItinerary() {
        this.openItineraryDialog = true;
    },
    dialogSuccess() {
        this.openItineraryDialog = false
        
    },
    dialogClose() {
        this.openItineraryDialog = false
    }
  },
};
</script>

<style scoped>
.itinerary-card {
  border: 1px solid #e8e8eb;
  border-radius: 0.5em;
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
  row-gap: 1.25em;
}

.itinerary-card .itinerary-card-title {
  font-family: "poppins-semibold";
}

.itinerary-card .itinerary-tags-container {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

.itinerary-card .itinerary-card-more-tags {
  font-size: 0.875rem;
  text-decoration: underline;
  color: #3d2e8c;
}

.itinerary-card .itinerary-card-row-3 {
  display: flex;
  color: #6f717e;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #e8e8eb;
}

.itinerary-card-row-3 > div {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.itinerary-card-row-3 .itinerary-row-3-days span {
  font-size: 0.8rem;
}
.itinerary-card-row-3 .itinerary-row-3-days img {
  width: 1em;
}
.itinerary-card-row-3 .itinerary-row-3-icons img {
  width: 1.3em;
}

.itinerary-card-row-4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.itinerary-row-4-btn {
  color: #5444ab;
  font-size: 0.875em;
  cursor: pointer;
}
</style>
