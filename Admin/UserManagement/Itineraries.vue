<template>
  <div class="itineraries-wrapper">

<ItineraryCard :itinerary="itinerary" v-for="itinerary in itineraries"/>

  </div>
</template>

<script>

import ItineraryCard from '@/components/ItineraryCard.vue';


export default {
  components:{ItineraryCard},
  data() {
    return {
      itineraries: [
        {
          title: "Romantic Serenade in Italy: A Musical Journey",
          tagList: ["Couple", "Scenery"],
          days: 5,
          dayContainer: [
            {
              day: "Day 1",
              bucketList1: [
                {
                  name: "Champagne: home of Dom Pérignon",
                  location: "France",
                  rating: 4,
                  time: "04:00 AM - 12:00 AM",
                },
              ],
            },
          ],
        },
        {
          title: "Romantic Serenade in Italy: A Musical Journey",
          tagList: ["Couple", "Scenery"],
          days: 5,
          dayContainer: [
            {
              day: "Day 1",
              bucketList1: [
                {
                  name: "Champagne: home of Dom Pérignon",
                  location: "France",
                  rating: 4,
                  time: "04:00 AM - 12:00 AM",
                },
              ],
            },
          ],
        },
                

      ],
    };
  },
};
</script>

<style scoped>
.itineraries-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
  gap: 20px;
}
</style>
