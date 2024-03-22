<template>
    <div class="guide-details-wrapper">
      <div class="guide-details-left">
        <div class="guide-details-header">
          <div>
            <span><img src="../../assets/user_details_back_arrow.svg" /></span>
            <div>Guide Details</div>
          </div>
          <div>
            <span><img src="../../assets/user_details_top_right.svg" /></span>
          </div>
        </div>
        <div class="guide-details-profile-wrapper">
          <div class="profile-section-1">
            <div class="profile-image">
              <img src="../../assets/avatar.jpeg" />
            </div>
            <div class="profile-name">Venkat Prabhu</div>
            <div class="profile-address">Chennai, India</div>
          </div>
          <div class="profile-section-2">
            <div class="global-tabs-container">
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
              Specialist
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
                    <span class="contact-details-data-text">venkatprabhu@gmail.com</span>
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
                  <div class="contact-details-label">Office Address</div>
                  <div class="contact-details-data">
                    <span class="contact-details-data-text">3rd Floor, Indiqube Brigade vantage, Perungudi, Chennai - 600 096.</span>
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
      <div class="guide-details-right">
        <div class="guide-details-right-navbar">
          <div class="nav-title">Trips</div>
          <div class="guide-btn-container">
            <v-btn class="btn-secondary"><img src="../../assets/calendar_white.svg" />Calendar</v-btn>
            <v-btn @click="isBookGuide = true" class="btn-primary"><img src="../../assets/booknow_checkbox.svg" />Book Now</v-btn>
          </div>
        </div>
        <div class="navbar-table-divider"></div>
        <div class="guide-details-table-wrapper">
          <v-data-table
          :headers="headers"
          :items="bookingList"
          class="global-table fixed-header"
          fixed-header
          :hide-default-footer="true"
          item-key="id"
          disable-pagination
          
        >
          <template v-slot:item.customerName="{ item }">
            {{ item.customerName }}
          </template>
          <template v-slot:item.tripType="{ item }">
            <div class="tag" :class="item.tripType">{{ item.tripType }}</div>
          </template>
          <template v-slot:item.ratings="{ item }">
            <div class="rating-container">
              <span><img src="../../assets/star.svg" /></span
              ><span>{{ item.ratings }}</span>
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
import NavBar from "../../components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      isBookGuide:false,
      seletedTab: "contactDetails",
      headers: [
        {
          text: "Trip Id",
          value: "id",
          align: "center",
        },
        {
          text: "Destination",
          value: "destination",
        },
        {
          text: "Trip Type ",
          value: "tripType",
          align: "center",
        },
        {
          text: "Timeline",
          value: "timeline",
          align:"center"
        },
        {
          text: "Start Date",
          value: "startDate",
          align: "center",

        },
        {
          text: "End Date",
          value: "endDate",
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
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14253",
          destination: "Chennai, Kanchipuram",
          tripType: "Solo",
          timeline: "3",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "50,000",
          paymentStatus: "Pending",
        },
        {
          id: "#US14254",
          destination: "Bali, Thailand",
          tripType: "Friends",
          timeline: "8",
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          ratings: "5",
          billRs: "80,000",
          paymentStatus: "Paid",
        },
        {
          id: "#US14255",
          destination: "France, Belgium, Italy",
          tripType: "Family",
          timeline: "6",
          startDate: "31 May, 2021",
          endDate: "05 Jun, 2021",
          ratings: "4",
          billRs: "90,000",
          paymentStatus: "Paid",
        },
        {
          id: "#US14256",
          destination: "India",
          tripType: "Group",
          timeline: "8",
          startDate: "21 Sep, 2022",
          endDate: "28 Sep, 2022",
          ratings: "3",
          billRs: "50,000",
          paymentStatus: "Paid",
        },
        {
          id: "#US14257",
          destination: "China",
          tripType: "Official",
          timeline: "8",
          startDate: "25 May, 2023",
          endDate: "27 May, 2023",
          ratings: "2",
          billRs: "98,000",
          paymentStatus: "Paid"
        }
],
    };
  },
  methods: {
    dialogSuccess() {
      this.isBookGuide = false;
    },
    dialogClose() {
      this.isBookGuide = false;
    },
  },
};
</script>

<style scoped>

::-webkit-scrollbar {
  display: none;
}

.guide-details-wrapper {
  display: flex;
  gap: 1.25em;
  flex: 1;
  overflow: hidden;
}

.guide-details-left {
  padding:  1.5em 1.3em;
  background-color: white;
  border-radius: 0.5em;
  width: min-content;
  height: 100% ;
  overflow: auto;
}

.guide-details-right {
  background-color: white;
  padding: 1.5em;
  border-radius: 0.5em;
  flex: 1;
  height: 100% ;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.guide-details-header {
  display: flex;
  justify-content: space-between;
}
.guide-details-header > div {
  display: flex;
  align-items: center;
  gap: 1em;
}
.guide-details-header > div span {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.guide-details-header > div span img {
  width: 2em;
}

  .guide-details-header > div > div {
  font-family: "Poppins-SemiBold";
  font-size: 1.2rem;
}

.guide-details-profile-wrapper {
  margin-top: 2em;
}

.guide-details-profile-wrapper .profile-section-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.guide-details-profile-wrapper .profile-section-1 img {
  border-radius: 50%;
  width: 6.5em;
}
.guide-details-profile-wrapper .profile-section-1 .profile-name {
  margin-top: 0.45em;
  font-family: "Poppins-SemiBold";
  font-size: 1rem;
}
.guide-details-profile-wrapper .profile-section-1 .profile-address {
  font-size: 0.81rem;
  color: #9798a3;
}

.guide-details-wrapper .profile-section-2 {
  margin-top: 2em;
}

.section-2-container {
  margin-top: 1em;
  padding: 1em;
}

.section-2-container .contact-details-row,
.section-2-container .room-types-row {
  margin-bottom: 1.25em;
}

.section-2-container .contact-details-row .contact-details-label,
.section-2-container .room-types-row .room-types-label {
  font-size: 0.75rem;
  color: #6f717e;
}

.section-2-container .room-types-row .room-types-title {
  display: flex;
  justify-content: space-between;
  font-size: .875rem;
  margin: 0.75em 0;
}

.section-2-container .contact-details-row .contact-details-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.41em;
}
.section-2-container .contact-details-row .contact-details-data img {
  width: 2em;
}

.guide-details-wrapper .contact-details-row .contact-details-data .contact-details-data-text {
  font-family: "Poppins-SemiBold";
  display: flex;
  align-items: center;
  color: #484a58;
  font-size: 0.95rem;
  overflow-wrap: anywhere;
}


.room-types-row .room-types-tags {
  margin-top: 0.5em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.navbar-table-divider {
  height: 2.5em;
}

.room-types-container .room-types-row {
  padding-bottom: 1em;
  border-bottom: 1px solid #e8e8eb;
}

.guide-details-right-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-title {
  font-size: 1.25rem;
  font-family: "poppins-semibold";
}

.guide-btn-container {
  display: flex;
  gap: 0.5em;
}

.guide-details-table-wrapper {
  flex: 1;
  overflow: auto;
}


.rating-container {
  display: flex;
  justify-content: center;
  gap: 0.25em;
  align-items: center;
}

.rating-container span {
  display: flex;
  align-items: center;
}
.rating-container span img {
  width: 1.15em;
}



</style>
