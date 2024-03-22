<template>
  <div class="hotel-details-wrapper">
    <BookHotel
      :isDialog="isBookHotel"
      @close="dialogClose"
      @success="dialogSuccess"
    />
    <div class="hotel-details-left">
      <div class="hotel-details-header">
        <div>
          <span><img src="../../assets/user_details_back_arrow.svg" /></span>
          <div>Hotel Details</div>
        </div>
        <div>
          <span><img src="../../assets/user_details_top_right.svg" /></span>
        </div>
      </div>
      <div class="hotel-details-profile-wrapper">
        <div class="profile-section-1">
          <div class="profile-image">
            <img src="../../assets/hotel.jpeg" />
          </div>
          <div class="profile-name">Marriom Cancum Resort</div>
          <div class="profile-address">Goa, India</div>
        </div>
        <div class="profile-section-2">
          <div class="global-tabs-container fit-content">
            <button
              class="global-tab"
              @click="seletedTab = 'contactDetails'"
              :class="{ active: seletedTab == 'contactDetails' }"
            >
              Contact Details
            </button>
            <button
              class="global-tab"
              @click="seletedTab = 'roomType'"
              :class="{ active: seletedTab == 'roomType' }"
            >
              Room Types
            </button>
          </div>
          <div class="section-2-container">
            <div
              v-if="seletedTab == 'contactDetails'"
              class="contact-details-container"
            >
              <div class="contact-details-row">
                <div class="contact-details-label">Contact Person Name</div>
                <div class="contact-details-data">
                  <span class="contact-details-data-text">Stefen Chris</span>
                </div>
              </div>
              <div class="contact-details-row">
                <div class="contact-details-label">Personal Email</div>
                <div class="contact-details-data">
                  <span class="contact-details-data-text"
                    >marriumcascum@gmail.com</span
                  >
                  <span><img src="../../assets/mail.svg" /></span>
                </div>
              </div>
              <div class="contact-details-row">
                <div class="contact-details-label">Contact Number</div>
                <div class="contact-details-data">
                  <span class="contact-details-data-text">+91 95982 18689</span>
                  <span><img src="../../assets/phone.svg" /></span>
                </div>
              </div>
              <div class="contact-details-row">
                <div class="contact-details-label">Hotel Address</div>
                <div class="contact-details-data">
                  <span class="contact-details-data-text"
                    >No - 18, 1, Nagoa, Arpora, Goa 40334</span
                  >
                </div>
              </div>
              <div class="contact-details-row">
                <div class="contact-details-label">Country</div>
                <div class="contact-details-data">
                  <span class="contact-details-data-text">India</span>
                </div>
              </div>
            </div>
            <div v-else class="room-types-container">
              <div class="room-types-row">
                <div class="room-types-label">Room Type 1</div>
                <div class="room-types-title">
                  <span>Elite Room</span>
                  <span>x5</span>
                </div>
                <div class="room-types-tags">
                  <span class="tag">Balcony View</span>
                  <span class="tag">Bath Tub</span>
                  <span class="tag">Heater</span>
                  <span class="tag">Heater</span>
                  <span class="tag">Wifi</span>
                  <span class="tag">Swimming pool</span>
                </div>
              </div>
              <div class="room-types-row">
                <div class="room-types-label">Room Type 2</div>
                <div class="room-types-title">
                  <span>Villa</span>
                  <span>x3</span>
                </div>
                <div class="room-types-tags">
                  <span class="tag">Private Pool</span>
                  <span class="tag">Bath Tub</span>
                  <span class="tag">Heater</span>
                  <span class="tag">Heater</span>
                  <span class="tag">Wifi</span>
                  <span class="tag">Swimming pool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hotel-details-right">
      <div class="hotel-details-right-navbar">
        <div class="nav-title">Total Bookings</div>
        <div class="hotel-btn-container">
          <v-btn class="btn-secondary"
            ><img src="../../assets/calendar_white.svg" />Calendar</v-btn
          >
          <v-btn @click="isBookHotel = true" class="btn-primary"
            ><img src="../../assets/booknow_checkbox.svg" />Book Now</v-btn
          >
        </div>
      </div>
      <div class="navbar-table-divider"></div>
      <div class="hotel-table-wrapper">
        <v-data-table
          :headers="headers"
          :items="bookingList"
          class="global-table fixed-header"
          hide-default-footer
          disable-pagination
          item-key="id"
          fixed-header
        >
          <template v-slot:item.customerName="{ item }">
            {{ item.customerName }}
          </template>
          <template v-slot:item.tripType="{ item }">
            <div class="tag" :class="item.tripType">{{ item.tripType }}</div>
          </template>
          <template v-slot:item.ratings="{ item }">
            <div class="rating-container">
              <span><img src="../../assets/star.svg" /></span>
              <span>{{ item.ratings }}</span>
            </div>
          </template>
          <template v-slot:item.paymentStatus="{ item }">
            <div class="tag" :class="item.paymentStatus">
              {{ item.paymentStatus }}
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import BookHotel from "../../components/BookHotel.vue";
export default {
  components: { BookHotel },
  data() {
    return {
      isBookHotel: false,
      // seletedTab: "roomType",
      seletedTab: "contactDetails",
      headers: [
        {
          text: "User Id",
          value: "user_id",
          align: "center",
        },
        {
          text: "Customer Name",
          value: "customerName",
        },
        {
          text: "Room Type ",
          value: "roomType",
        },
        {
          text: "No. Of Days ",
          value: "noOfDays",
          align: "center",
        },
        {
          text: "Booking ID ",
          value: "bookingId",
        },
        {
          text: "Trip Type ",
          value: "tripType",
          align: "center",
        },
        {
          text: "Ratings",
          value: "ratings",
          align: "center",
        },
        {
          text: "Bill (Rs.)",
          value: "billRs",
          align: "center",
        },
        {
          text: "Payment Status",
          value: "paymentStatus",
          align: "center",
        },
      ],
      bookingList: [
        {
          user_id: "#US14253",
          customerName: "Venkat Prabhu",
          roomType: "Elite Room (x1) ",
          noOfDays: "3",
          bookingId: "#HB14253",
          userAvatar: "",
          tripType: "Solo",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Paid",
        },
        {
          user_id: "#US14254",
          customerName: "Jeevan Raj",
          roomType: "Home Stay (x1)",
          noOfDays: "8",
          bookingId: "#HB14253",
          userAvatar: "",
          tripType: "Family",
          ratings: "5",
          billRs: "80,000",
          paymentStatus: "Pending",
        },
        {
          user_id: "#US14255",
          customerName: "Gokula Rama Krishnan",
          roomType: "Villa (x1) ",
          noOfDays: "6",
          bookingId: "#HB14253",
          userAvatar: "",
          tripType: "Friends",
          ratings: "4 ",
          billRs: "90,000",
          paymentStatus: "Paid",
        },
        {
          user_id: "#US14256",
          customerName: "Amit Trivedi",
          roomType: "Home Stay (x1) ",
          noOfDays: "8",
          bookingId: "#HB14253",
          userAvatar: "",
          tripType: "Solo",
          ratings: "3",
          billRs: "75,000",
          paymentStatus: "Pending",
        },
      ],
    };
  },
  methods: {
    dialogSuccess() {
      this.isBookHotel = false;
    },
    dialogClose() {
      this.isBookHotel = false;
    },
  },
};
</script>

<style scoped>

::-webkit-scrollbar {
  display: none;
}

.hotel-details-wrapper {
  flex: 1;
  padding: 2em;
  display: flex;
  gap: 1.25em;
  overflow: hidden;
}

.hotel-details-wrapper > div {
  height: 100%;
  overflow: auto;
}

.hotel-details-left {
  padding: 1.5em 1.3em;
  background-color: white;
  border-radius: 0.5em;
  width: min-content;
  max-width: 25em;
}

.hotel-details-right {
  background-color: white;
  padding: 1.5em;
  border-radius: 0.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hotel-details-header {
  display: flex;
  justify-content: space-between;
}
.hotel-details-header > div {
  display: flex;
  align-items: center;
  gap: 0.9em;
}
.hotel-details-header > div span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.hotel-details-header > div span img {
  width: 2em;
}

.hotel-details-header > div > div {
  font-family: "Poppins-SemiBold";
  font-size: 1.2rem;
}

.hotel-details-profile-wrapper {
  margin-top: 2em;
}

.hotel-details-profile-wrapper .profile-section-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hotel-details-profile-wrapper .profile-section-1 img {
  border-radius: 0.5em;
  width: 15em;
}
.hotel-details-profile-wrapper .profile-section-1 .profile-name {
  margin-top: 0.45em;
  font-family: "Poppins-SemiBold";
  font-size: 1rem;
}
.hotel-details-profile-wrapper .profile-section-1 .profile-address {
  font-size: 0.81rem;
  color: #9798a3;
}

.hotel-details-wrapper .profile-section-2 {
  margin-top: 2em;
}

.hotel-details-wrapper .section-2-container {
  margin-top: 1em;
  padding: 1em;
}

.hotel-details-wrapper .contact-details-row,
.hotel-details-wrapper .room-types-row {
  margin-bottom: 1.25em;
}

.hotel-details-wrapper .contact-details-row .contact-details-label,
.hotel-details-wrapper .room-types-row .room-types-label {
  font-size: 0.75rem;
  color: #6f717e;
}

.hotel-details-wrapper .room-types-row .room-types-title {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin: 1em 0;
}

.hotel-details-wrapper .contact-details-row .contact-details-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3em;
}

.hotel-details-wrapper
  .contact-details-row
  .contact-details-data
  .contact-details-data-text {
  font-family: "Poppins-SemiBold";
  display: flex;
  align-items: center;
  color: #484a58;
  font-size: 0.95rem;
  overflow-wrap: anywhere;
}

.hotel-details-wrapper .contact-details-row .contact-details-data span img {
  width: 2em;
}

.hotel-details-wrapper .room-types-row .room-types-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.hotel-details-wrapper .navbar-table-divider {
  height: 2.5em;
}

.room-types-container .room-types-row {
  padding-bottom: 1em;
  border-bottom: 1px solid #e8e8eb;
}

.hotel-details-right-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-title {
  font-size: 1.25rem;
  font-family: "poppins-semibold";
}

.hotel-btn-container {
  display: flex;
  gap: 0.5em;
}

.rating-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
}

.rating-container span {
  display: flex;
  align-items: center;
}
.rating-container span img {
  width: 1.2em;
  pointer-events: none;
  user-select: none;
}
.hotel-table-wrapper {
  flex: 1;
  overflow: auto;
}
</style>
