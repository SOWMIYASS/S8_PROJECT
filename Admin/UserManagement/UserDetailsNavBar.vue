<template>
  <div class="header">
    <BookHotel
      :isDialog="bookHotelDialog"
      @close="dialogClose1"
      @success="dialogSuccess1"
    />
    <CreateItinerary
      :isItineraryDialog="createItineraryDialog"
      @close="dialogClose2"
      @success="dialogSuccess2"
    />
    <div
      class="global-tabs-container"
      :class="{ 'fit-content': width == 'fit-content' }"
    >
      <router-link draggable="false" class="global-tab" :to="{ name: 'Trips' }"
        >Trip</router-link
      >
      <router-link
        draggable="false"
        class="global-tab"
        :to="{ name: 'HotelBookings' }"
        >HotelBookings</router-link
      >
      <router-link
        draggable="false"
        class="global-tab"
        :to="{ name: 'Itineraries' }"
        >Itineraries</router-link
      >
      <router-link
        draggable="false"
        class="global-tab"
        :to="{ name: 'FamilyDetails' }"
        >Family Details</router-link
      >
    </div>
    <div class="btn-container">
        <v-btn @click="bookHotelDialog = true" class="btn-secondary"><img src="../../assets/book_hotel.svg">Book Hotel</v-btn>
        <v-btn @click="createItineraryDialog = true" class="btn-primary"><img src="../../assets/create_itinerary.svg">Create Itinerary</v-btn>
    </div>
  </div>
</template>

<script>
import BookHotel from "../../components/BookHotel";
import CreateItinerary from "../../components/CreateItinerary";
export default {
  name: "UserDetailsNavBar",
  props: ["width"],
  components: { BookHotel, CreateItinerary },
  data() {
    return {
      bookHotelDialog: false,
      createItineraryDialog:false,
    };
  },
  methods: {
    dialogSuccess1() {
      console.log("discarded");
      this.bookHotelDialog = false;
    },
    dialogClose1() {
      console.log("closed");
      this.bookHotelDialog = false;
    },
    dialogSuccess2() {
      console.log("User added");
      this.createItineraryDialog = false;
    },
    dialogClose2() {
      console.log("closed");
      this.createItineraryDialog = false;
    },
  },
};
</script>

<style scoped>

.header {
    display: flex;
    justify-content:space-between;
}
.header .btn-container{
    display: flex;
    gap: 8px;
    align-items: center;
}


</style>
