<template>
    <div class="user-details-wrapper">
      <div class="user-details-left">
        <div class="user-details-header">
          <div>
            <span><img src="../../assets/user_details_back_arrow.svg" /></span>
            <div>User Details</div>
          </div>
          <div>
            <span><img src="../../assets/user_details_top_right.svg" /></span>
          </div>
        </div>
        <div class="user-details-profile-wrapper">
          <div class="profile-section-1">
            <div class="profile-image">
              <img src="../../assets/avatar.jpeg" />
            </div>
            <div class="profile-name">Peter Hein Smit</div>
            <div class="profile-address">Columbia in Ankara, Turkey</div>
          </div>
          <div class="profile-section-2">
            <div class="profile-section-card">
              <div class="profile-card-row-1">
                <span><img src="../../assets/hotel_bookings.svg" /></span>
                <span>Hotel Bookings</span>
              </div>
              <div class="profile-card-row-2">26</div>
              <div class="profile-card-row-3">past 3 months</div>
            </div>
            <div class="profile-section-card">
              <div class="profile-card-row-1">
                <span><img src="../../assets/trips_planned.svg" /></span>
                <span>Trips Planned</span>
              </div>
              <div class="profile-card-row-2">08</div>
              <div class="profile-card-row-3">past 3 months</div>
            </div>
          </div>
          <div class="profile-section-3">
            <div class="global-tabs-container">
              <button
              class="global-tab"
                @click="seletedTab = 'personalDetails'"
                :class="{ active: seletedTab == 'personalDetails' }"
              >
                Personal Details
              </button>
              <button
              class="global-tab"
                @click="seletedTab = 'interest'"
                :class="{ active: seletedTab == 'interest' }"
              >
                Interest
              </button>
            </div>
            <div class="section-3-container">
              <div
                v-if="seletedTab == 'personalDetails'"
                class="personal-details-container"
              >
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Email</div>
                  <div class="user-details-section-data">
                    <span class="personal-details-data-text">perterhein@gmail.com</span>
                    <span><img src="../../assets/mail.svg" /></span>
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Contact Number</div>
                  <div class="user-details-section-data">
                    <span class="personal-details-data-text">+1 586 9856 9818</span>
                    <span><img src="../../assets/phone.svg" /></span>
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Office Number</div>
                  <div class="user-details-section-data">
                    <span class="personal-details-data-text">+1 555 5888 9989</span>
                    <span><img src="../../assets/phone.svg" /></span>
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Address</div>
                  <div class="user-details-section-data">
                    <span class="personal-details-data-text"
                      >3750 E Bonanza Rd, Las Vegas, NV 89110, United
                      States</span
                    >
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Country</div>
                  <div class="user-details-section-data">
                    <span class="personal-details-data-text">USA</span>
                  </div>
                </div>
              </div>
              <div v-else class="interest-container">
                <div class="user-details-section-row">
                  <div class="user-details-section-label">General</div>
                  <div class="user-details-section-tags">
                    <span class="tag">Music</span>
                    <span class="tag">Nature</span>
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">
                    Personal interest
                  </div>
                  <div class="user-details-section-tags">
                    <span class="tag">Pubs</span>
                    <span class="tag">Nightowl</span>
                    <span class="tag">Vlog</span>
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Places</div>
                  <div class="user-details-section-tags">
                    <span class="tag">Beach</span>
                    <span class="tag">ThemePark</span>
                    <span class="tag">Valley</span>
                    <span class="tag">Mountain</span>
                  </div>
                </div>
                <div class="user-details-section-row">
                  <div class="user-details-section-label">Adventure</div>
                  <div class="user-details-section-tags">
                    <span class="tag">Rafting</span>
                    <span class="tag">Skiing</span>
                    <span class="tag">Paragliding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="user-details-right">
        <UserDetailsNavBar width="fit-content"/>
        <div class="navbar-table-divider"></div>
        <router-view/>
      </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import UserDetailsNavBar from "./UserDetailsNavBar.vue"
export default {
  components: { NavBar,UserDetailsNavBar },
  data() {
    return {
      seletedTab: "personalDetails",
    };
  },
};
</script>

<style scoped>

.user-details-wrapper {
  flex: 1;
  padding: 2em;
  display: flex;
  gap: 1.25em;
  overflow: hidden;
}

.user-details-wrapper > div{
  height: 100%;
  overflow: auto;
}

.user-details-wrapper > div::-webkit-scrollbar{
  display: none;
}

.user-details-left {
  padding: 1.5em 1.3em;
  background-color: white;
  border-radius: 0.5em;
  width: min-content;
  max-width: 25em;
}

.user-details-right {
  background-color: white;
  padding: 1.5em;
  border-radius: 0.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.user-details-header {
  display: flex;
  justify-content: space-between;
}
.user-details-header > div {
  display: flex;
  align-items: center;
  gap: 0.9em;
}
.user-details-header > div span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.user-details-header > div span img{
  width: 2em;
}
.user-details-header > div > div {
  font-family: "Poppins-SemiBold";
  font-size: 1.2rem;
}

.user-details-profile-wrapper {
  margin-top: 2em;
}

.user-details-profile-wrapper .profile-section-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-details-profile-wrapper .profile-section-1 img {
  border-radius: 50%;
  width: 6.25em;
}

.user-details-profile-wrapper .profile-section-1 .profile-name {
  margin-top: 0.45em;
  font-family: "Poppins-SemiBold";
  font-size: 1rem;
}
.user-details-profile-wrapper .profile-section-1 .profile-address {
  font-size: 0.81rem;
  color: #9798a3;
}

.user-details-wrapper .profile-section-2 {
  display: flex;
  gap: 0.8em;
  justify-content: center;
  margin-top: 1.25em;
}

.user-details-wrapper .profile-section-2 .profile-section-card {
  border: 1px solid #e8e8eb;
  padding: 0.9em;
  border-radius: 0.5em;
}

.user-details-wrapper .profile-section-2 .profile-section-card .profile-card-row-1 {
  display: flex;
  white-space: nowrap;
  gap: 0.5em;
  align-items: center;
}

.user-details-wrapper .profile-section-2 .profile-section-card .profile-card-row-1 span {
  display: flex;
  align-items: center;
  font-family: "Poppins-Medium";
  font-size: 0.95rem;
}
.user-details-wrapper .profile-section-2 .profile-section-card .profile-card-row-1 span img{
  width: 2.2em;
}

.user-details-wrapper .profile-section-2 .profile-section-card .profile-card-row-2 {
  margin-top: 0.85em;
  font-size: 1rem;
  font-family: "Poppins-SemiBold";
}

.user-details-wrapper .profile-section-2 .profile-section-card .profile-card-row-3 {
  font-size: 0.75rem;
  color: #9798a3;
}

.user-details-wrapper .profile-section-3 {
  margin-top: 2em;
}

.user-details-wrapper .section-3-container {
  margin-top: 1em;
  padding: 1em;
}

.user-details-wrapper .section-3-container .user-details-section-row {
  margin-bottom: 1.25em;
}

.user-details-wrapper .section-3-container .user-details-section-row .user-details-section-label {
  font-size: 0.75rem;
  color: #6f717e;
}

.user-details-wrapper .section-3-container .user-details-section-row .user-details-section-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-details-wrapper .section-3-container .user-details-section-row .user-details-section-data .personal-details-data-text {
  font-family: "Poppins-SemiBold";
  display: flex;
  align-items: center;
  color: #484A58;
  font-size: 0.95rem;
  overflow-wrap: anywhere;
} 

.user-details-wrapper .section-3-container .user-details-section-row .user-details-section-data span img {
  width: 1.9em;
}

.user-details-wrapper .user-details-section-row .user-details-section-tags {
  margin-top: 0.5em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.user-details-wrapper .navbar-table-divider {
  height: 2.5em;
}

</style>
