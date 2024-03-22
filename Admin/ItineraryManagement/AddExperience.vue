<template>
  <div class="wrapper">
    <Discard
      :isDiscardDialog="discardDialog"
      @close="dialogClose1"
      @success="dialogSuccess1"
    />

    <div class="topNavBar-header">
      <div>
        <span class="createText">Create Itinerary</span>
      </div>
      <div style="display: flex; flex-direction: row; gap: 8px">
        <div class="discardButton" @click="discardDialog = true">
          <span class="discardText">Discard</span>
        </div>
        <div class="draftButton">
          <span class="draftText">Save to Draft</span>
        </div>
        <div
          v-if="forEditItinerary"
          @click="updateItenerary()"
          class="completeButton"
        >
          <span class="completeText">Update</span>
        </div>
        <div v-else @click="saveItinerary()" class="completeButton">
          <span class="completeText">Complete</span>
        </div>
      </div>
    </div>

    <div class="outer-container-addexperience">
      <div class="content-wrapper-exp">
        <div
          v-if="!showTripDetails"
          class="rightArrowButton"
          @click="toggleTripDetails"
        >
          <img src="../../assets/right_arrow_icon.svg" />
        </div>
        <div v-if="showTripDetails" class="trip-details-container">
          <div class="trip-details-header">
            <div>
              <span @click="toggleTripDetails"
                ><img src="../../assets/user_details_back_arrow.svg"
              /></span>
              <div>Trip Details</div>
            </div>
          </div>
          <TripDetailsSlideBar :itineraryDetails="itineraryDetails" />
        </div>
        <div class="itinerary-container">
          <ItineraryDetails
            :itineraryList="itinerariesList"
            :itineraryHeader="true"
            :itineraryDateHeader="true"
          />
        </div>

        <div class="bucketlist-container">
          <BucketDetails :bucketListProp="bucketList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TripDetailsSlideBar from "./TripDetailsSlideBar.vue";
import BucketDetails from "./BucketDetails.vue";
import ItineraryDetails from "./ItineraryDetails.vue";
import Discard from "../../components/Discard";
export default {
  name: "AddExperience",
  components: { TripDetailsSlideBar, BucketDetails, ItineraryDetails, Discard },
  snackbar: false,
  data() {
    return {
      forEditItinerary: false,
      discardDialog: false,
      showTripDetails: true,
      itineraryDetails: [],
      itinerariesList: [
        // {
        //   day: "Day 1 Tuesday 15 May, 2023",
        //   itineraryBucket: [
        //     {
        //       locationFrom: "Las vegas Airport",
        //       locationTo: "Paris Beauvais Airport",
        //       name: "Champagne: home of Dom Pérignon",
        //       experience: "Photography & Hiking spot for Jr. Peter Hein",
        //       rating: 4,
        //       location: "France",
        //       time: "04:00 AM - 12:00 AM",
        //     },
        //     {
        //       locationFrom: "Paris",
        //       locationTo: "Corsica, France",
        //       experience: "Photography & Hiking spot for Jr. Peter Hein",
        //       name: "Rocamadour: the sacred hilltop pilgrimage",
        //       location: "France",
        //       rating: 4,
        //       time: "04:00 AM - 12:00 AM",
        //     },
        //   ],
        // },
      ],
      bucketList: [],
    };
  },
  methods: {
    updateItenerary() {
      axios
        .put(
          process.env.VUE_APP_BACKEND_URL +
            `/v1/api/itinerary/${this.$route.query.editItinerary}`,
          { ...this.itineraryDetails, experiences: this.itinerariesList }
        )
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            name: "ItinerarySummary",
            query: { itineraryId: res.data.itineraryId },
          });

          this.$store.dispatch("showSnackbar", {
            title: "Itinerary Updated",
            message: "Itinerary is updated successfully ",
          });

        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveItinerary() {
      const metaData = this.itineraryDetails;
      const itineraries = this.itinerariesList;
      console.log(itineraries);
      metaData.experiences = itineraries;

      console.log(metaData);

      axios
        .post(process.env.VUE_APP_BACKEND_URL + "/v1/api/itinerary", metaData)
        .then((res) => {
          this.$router.push({
            name: "ItinerarySummary",
            query: { itineraryId: res.data.itineraryId },
          });
          this.$store.dispatch("showSnackbar", {
            title: "Itinerary Added",
            message: "New Itinerary added successfully ",
          });
          localStorage.clear();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dialogSuccess1() {
      console.log("User added");
      this.discardDialog = false;
    },
    dialogClose1() {
      console.log("closed");
      this.discardDialog = false;
    },
    toggleTripDetails() {
      this.showTripDetails = !this.showTripDetails;
    },
  },

  computed: {
    rightArrowVisible() {
      return !this.showTripDetails;
    },
  },

  beforeMount() {
    if (this.$route.query.editItinerary) {
      this.forEditItinerary = true;
      axios
        .get(
          process.env.VUE_APP_BACKEND_URL +
            `/v1/api/itinerary/${this.$route.query.editItinerary}`
        )
        .then((res) => {
          this.itineraryDetails = res.data.itineraries[0];
          this.itinerariesList = res.data.itineraries[0].Experiences;
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    const itineraryDetails = JSON.parse(
      localStorage.getItem("itineraryDetails")
    );
    const bucketList = JSON.parse(localStorage.getItem("bucketList"));
    this.bucketList = bucketList;
    this.itineraryDetails = itineraryDetails;
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
/* ::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ababab;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
} */

.wrapper {
  flex: 1;

  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.topNavBar-header {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  white-space: nowrap;
}
.createText {
  font-family: Poppins-Regular;
  font-weight: 600;
  font-size: 20px;
  color: #212332;
  padding: 20px;
}
.discardButton {
  min-width: 90px;
  min-height: 40px;
  border: 1px solid #d22645;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.discardText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 13px;
  color: #d22645;
}
.draftText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 13px;
  color: #5444ab;
}
.completeText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 13px;
  color: white;
}
.draftButton {
  min-width: 130px;
  min-height: 40px;
  border: 1px solid #5444ab;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.completeButton {
  min-width: 200px;
  min-height: 40px;
  background: #5444ab;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.outer-container-addexperience {
  margin: 16px;
  flex: 1;
  overflow: hidden;
}
.content-wrapper-exp {
  display: flex;
  height: 100%;
  gap: 16px;
  overflow: auto;
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
  flex: 1;
  overflow: auto;
  height: 100%;
}
.rightArrowButton {
  position: fixed;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
}
.ratingText {
  font-family: Poppins-Medium;
  font-weight: 400;
  font-size: 11px;
  color: #212332;
}
.locationText,
.timeText {
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 13px;
  color: #9798a3;
}
.bucketlist-container {
  background-color: white;
  width: 23%;
  max-width: 23%;
  border-radius: 8px;
  padding: 24px;
  gap: 24px;
  height: 100%;
}
</style>
