<template>
  <div class="wrapper">
    <div class="topNavBar-header">
      <div class="library-header">
        <router-link :to="{ name: 'ItineraryManagement' }" class="nav-item"
          ><span><img src="../../assets/user_details_back_arrow.svg" /></span>
        </router-link>
        <span class="createText">Back to Library</span>
      </div>
      <div style="display: flex; flex-direction: row; gap: 8px">
        <div @click="editItinerary()" class="editButton">
          <span class="innerText"> Edit Itinerary</span>
          <span><img src="../../assets/edit-icon.svg" /></span>
        </div>
        <div class="shareButton">
          <span class="innerText">Share</span>
          <span><img src="../../assets/share-icon.svg" /></span>
        </div>
        <div class="downloadButton">
          <span class="innerText">Download</span>
          <span><img src="../../assets/download-icon.svg" /></span>
        </div>
      </div>
    </div>

    <div class="outer-container-addexperience">
      <div class="content-wrapper-summary">
        <div class="trip-details-container">
          <div class="trip-details-header">
            <div>
              <div>Trip Details</div>
            </div>
          </div>
          <TripDetailsSlideBar :itineraryDetails="itineraryList"/>
        </div>
        <div class="itinerary-container">
          <ItineraryDetails
            :itineraryHeader="false"
            :itineraryDateHeader="false"
            :itineraryList="itineraryList.Experiences"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TripDetailsSlideBar from "./TripDetailsSlideBar.vue";
import ItineraryDetails from "./ItineraryDetails.vue";
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "ItinerarySummary",
  components: { TripDetailsSlideBar, ItineraryDetails },
  data() {
    return {
      itineraryList: [],
    };
  },

  mounted() {

    const { itineraryId } = this.$route.query;
    if (itineraryId) {
      axios(
        process.env.VUE_APP_BACKEND_URL + `/v1/api/itinerary/${itineraryId}`
      )
        .then((res) => {
          this.itineraryList = res.data.itineraries[0]
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  methods: {
    editItinerary() {
      this.$router.push({
        name: "AddExperience",
        query: {
          editItinerary: this.$route.query.itineraryId,
        },
      });
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.topNavBar-header {
  width: 100%;
  background-color: #ffffff;
  min-height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  white-space: nowrap;
}

.library-header {
  display: flex;
  gap: 16px;
}
.createText {
  font-family: Poppins-Regular;
  font-weight: 600;
  font-size: 20px;
  color: #212332;
}
.editButton {
  min-width: 150px;
  min-height: 40px;
  color: #5444ab;
  border: 1px solid #5444ab;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.innerText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 13px;
}
.shareButton {
  min-width: 130px;
  min-height: 40px;
  border: 1px solid #5444ab;
  color: #5444ab;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.downloadButton {
  min-width: 150px;
  min-height: 40px;
  border: 1px solid #5444ab;
  color: #5444ab;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.outer-container-addexperience {
  margin: 16px;
  height: 100%;
}
.content-wrapper-summary {
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  gap: 16px;
}
.trip-details-container {
  background-color: white;
  border-radius: 8px;
  width: 20%;
  min-width: 400px;
  height: 100%;
}
.trip-details-header {
  padding: 24px 24px 16px;
  display: flex;
  justify-content: space-between;
}
.trip-details-header > div {
  display: flex;
  align-items: center;
  gap: 16px;
}
.trip-details-header > div span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.trip-details-header > div > div {
  font-family: "Poppins-SemiBold";
  font-size: 20px;
}
.itinerary-container {
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 70%;
  min-width: 20%;
  height: 100%;
}

</style>
